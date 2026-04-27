#!/usr/bin/env node
import https from 'https';
import fs from 'fs';
import path from 'path';
import { createSign } from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── Config ──────────────────────────────────────────────────────────────────
const SITE_URL = 'https://off-plan-projects.com';
const PAGESPEED_API_KEY = process.env.PAGESPEED_API_KEY || '';
const GOOGLE_SERVICE_ACCOUNT_JSON = process.env.GOOGLE_SERVICE_ACCOUNT_JSON || '';
const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID || '';
const GSC_SITE_URL = process.env.GSC_SITE_URL || 'sc-domain:off-plan-projects.com';

const WEEKLY_TARGETS = {
  1: { min: 15,  max: 25  },
  2: { min: 30,  max: 50  },
  3: { min: 50,  max: 80  },
  4: { min: 80,  max: 120 },
};
const MONTHLY_SESSIONS_TARGET = 500;

// ─── HTTP helpers ─────────────────────────────────────────────────────────────
function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error('Invalid JSON: ' + data.slice(0, 200))); }
      });
    }).on('error', reject);
  });
}

function httpsPost(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(new Error('Invalid JSON: ' + data.slice(0, 200))); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ─── OAuth2 service account ───────────────────────────────────────────────────
async function getServiceAccountToken(sa, scope) {
  const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const payload = Buffer.from(JSON.stringify({
    iss: sa.client_email, scope,
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600, iat: now,
  })).toString('base64url');

  const sign = createSign('RSA-SHA256');
  sign.update(`${header}.${payload}`);
  const sig = sign.sign(sa.private_key, 'base64url');
  const jwt = `${header}.${payload}.${sig}`;

  const body = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`;
  const data = await httpsPost({
    hostname: 'oauth2.googleapis.com', path: '/token', method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(body) },
  }, body);

  if (!data.access_token) throw new Error('Token error: ' + JSON.stringify(data));
  return data.access_token;
}

// ─── PageSpeed Insights ───────────────────────────────────────────────────────
async function fetchPageSpeed(url) {
  if (!PAGESPEED_API_KEY) {
    console.warn('  ⚪ PAGESPEED_API_KEY not set — skipping Core Web Vitals');
    return null;
  }
  try {
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=${PAGESPEED_API_KEY}&category=performance`;
    const data = await httpsGet(apiUrl);
    const audits = data.lighthouseResult?.audits;
    return {
      lcp:   (audits?.['largest-contentful-paint']?.numericValue ?? null) / 1000,
      cls:    audits?.['cumulative-layout-shift']?.numericValue ?? null,
      inp:    audits?.['interaction-to-next-paint']?.numericValue ?? null,
      score:  Math.round((data.lighthouseResult?.categories?.performance?.score ?? 0) * 100),
    };
  } catch (e) {
    console.warn('  ⚠️  PageSpeed error:', e.message);
    return null;
  }
}

// ─── Google Search Console ────────────────────────────────────────────────────
async function fetchSearchConsole() {
  if (!GOOGLE_SERVICE_ACCOUNT_JSON) {
    console.warn('  ⚪ GOOGLE_SERVICE_ACCOUNT_JSON not set — skipping Search Console');
    return null;
  }
  try {
    const sa = JSON.parse(GOOGLE_SERVICE_ACCOUNT_JSON);
    const token = await getServiceAccountToken(sa, 'https://www.googleapis.com/auth/webmasters.readonly');
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 28 * 86400000).toISOString().split('T')[0];
    const body = JSON.stringify({ startDate, endDate, dimensions: ['page'], rowLimit: 25000 });

    const data = await httpsPost({
      hostname: 'searchconsole.googleapis.com',
      path: `/v1/sites/${encodeURIComponent(GSC_SITE_URL)}/searchAnalytics/query`,
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
    }, body);

    const rows = data.rows || [];
    return {
      indexedPages: rows.length,
      clicks:       rows.reduce((s, r) => s + (r.clicks || 0), 0),
      impressions:  rows.reduce((s, r) => s + (r.impressions || 0), 0),
    };
  } catch (e) {
    console.warn('  ⚠️  Search Console error:', e.message);
    return null;
  }
}

// ─── Google Analytics 4 ───────────────────────────────────────────────────────
async function fetchAnalytics() {
  if (!GOOGLE_SERVICE_ACCOUNT_JSON || !GA4_PROPERTY_ID) {
    console.warn('  ⚪ GA4 credentials not set — skipping Analytics');
    return null;
  }
  try {
    const sa = JSON.parse(GOOGLE_SERVICE_ACCOUNT_JSON);
    const token = await getServiceAccountToken(sa, 'https://www.googleapis.com/auth/analytics.readonly');
    const body = JSON.stringify({
      dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
      metrics: [{ name: 'sessions' }, { name: 'activeUsers' }, { name: 'bounceRate' }],
      dimensionFilter: {
        filter: { fieldName: 'sessionDefaultChannelGroup', stringFilter: { value: 'Organic Search' } },
      },
    });

    const data = await httpsPost({
      hostname: 'analyticsdata.googleapis.com',
      path: `/v1beta/properties/${GA4_PROPERTY_ID}:runReport`,
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
    }, body);

    const vals = data.rows?.[0]?.metricValues || [];
    return {
      sessions:   parseInt(vals[0]?.value || '0'),
      users:      parseInt(vals[1]?.value || '0'),
      bounceRate: parseFloat(vals[2]?.value || '0'),
    };
  } catch (e) {
    console.warn('  ⚠️  Analytics error:', e.message);
    return null;
  }
}

// ─── Health score ─────────────────────────────────────────────────────────────
function calculateHealthScore(indexedPages, cwv, sessions) {
  let score = 0;
  score += Math.min((indexedPages || 0) / 120, 1) * 30;
  if (cwv) {
    if (cwv.lcp !== null && cwv.lcp <= 2.5) score += 13.4;
    if (cwv.cls !== null && cwv.cls <= 0.1) score += 13.3;
    if (cwv.inp !== null && cwv.inp <= 200) score += 13.3;
  }
  score += Math.min((sessions || 0) / MONTHLY_SESSIONS_TARGET, 1) * 30;
  return Math.round(score);
}

function currentWeekNumber() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
}

function icon(value, target, higherIsBetter = true) {
  if (value === null || value === undefined) return '⚪';
  const pass = higherIsBetter ? value >= target : value <= target;
  const warn = higherIsBetter ? value >= target * 0.7 : value <= target * 1.3;
  return pass ? '✅' : warn ? '⚠️ ' : '❌';
}

// ─── Report ───────────────────────────────────────────────────────────────────
function printReport(week, gsc, cwv, analytics, healthScore) {
  const wk = Math.min(Math.max(week % 52 || 1, 1), 4);
  const targets = WEEKLY_TARGETS[wk];
  const indexed = gsc?.indexedPages ?? null;
  const sessions = analytics?.sessions ?? null;
  const LINE = '═'.repeat(62);

  console.log('\n' + LINE);
  console.log(`  📊  SEO Weekly Report — Week ${week}  (${new Date().toDateString()})`);
  console.log(LINE);

  console.log('\n  INDEXING');
  console.log(`  ${icon(indexed, targets.min)} Indexed pages : ${indexed ?? 'N/A'}  (target: ${targets.min}–${targets.max})`);
  if (gsc) {
    console.log(`  ℹ️  Clicks (28d) : ${gsc.clicks}`);
    console.log(`  ℹ️  Impressions  : ${gsc.impressions}`);
  }

  console.log('\n  CORE WEB VITALS (mobile)');
  if (cwv) {
    console.log(`  ${icon(cwv.lcp, 2.5, false)} LCP  : ${cwv.lcp !== null ? cwv.lcp.toFixed(2) + 's' : 'N/A'}   (target ≤2.5s)`);
    console.log(`  ${icon(cwv.cls, 0.1, false)} CLS  : ${cwv.cls !== null ? cwv.cls.toFixed(3) : 'N/A'}    (target ≤0.1)`);
    console.log(`  ${icon(cwv.inp, 200, false)} INP  : ${cwv.inp !== null ? cwv.inp.toFixed(0) + 'ms' : 'N/A'}  (target ≤200ms)`);
    console.log(`  ${icon(cwv.score, 90)} Perf : ${cwv.score}/100`);
  } else {
    console.log('  ⚪ Not available — set PAGESPEED_API_KEY to enable');
  }

  console.log('\n  ORGANIC TRAFFIC — last 28 days');
  if (analytics) {
    console.log(`  ${icon(sessions, MONTHLY_SESSIONS_TARGET)} Sessions    : ${sessions}  (monthly target: ${MONTHLY_SESSIONS_TARGET}+)`);
    console.log(`  ℹ️  Users       : ${analytics.users}`);
    console.log(`  ℹ️  Bounce rate : ${(analytics.bounceRate * 100).toFixed(1)}%`);
  } else {
    console.log('  ⚪ Not available — set GOOGLE_SERVICE_ACCOUNT_JSON + GA4_PROPERTY_ID');
  }

  console.log('\n  SEO HEALTH SCORE');
  const filled = Math.round(healthScore / 5);
  const bar = '█'.repeat(filled) + '░'.repeat(20 - filled);
  console.log(`  [${bar}] ${healthScore}/100`);

  console.log('\n  RECOMMENDATIONS');
  const recs = [];
  if (indexed === null || indexed < targets.min)
    recs.push('Submit sitemap-index.xml in GSC and verify ownership token in index.html');
  if (!cwv || cwv.lcp > 2.5)
    recs.push('Improve LCP: preload hero image, defer non-critical JS');
  if (!cwv || cwv.cls > 0.1)
    recs.push('Improve CLS: add explicit width/height to all images');
  if (!cwv || cwv.inp > 200)
    recs.push('Improve INP: reduce main-thread blocking during interactions');
  if (!sessions || sessions < 50)
    recs.push('Drive traffic: share blog posts, build backlinks to project pages');
  if (recs.length === 0)
    recs.push('All targets on track — keep publishing content ✅');
  recs.forEach((r) => console.log(`  →  ${r}`));

  console.log('\n' + LINE + '\n');
}

function saveReport(week, gsc, cwv, analytics, healthScore) {
  const record = { date: new Date().toISOString(), week, gsc, cwv, analytics, healthScore };
  const dir = path.join(__dirname, '..', 'reports');
  const file = path.join(dir, 'seo-history.json');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  let history = [];
  if (fs.existsSync(file)) {
    try { history = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (_) {}
  }
  history.push(record);
  fs.writeFileSync(file, JSON.stringify(history, null, 2));
  console.log(`  💾 Saved to reports/seo-history.json (${history.length} total records)\n`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n🔍 Fetching SEO metrics for ${SITE_URL} …\n`);
  const week = currentWeekNumber();

  const [cwv, gsc, analytics] = await Promise.all([
    fetchPageSpeed(SITE_URL),
    fetchSearchConsole(),
    fetchAnalytics(),
  ]);

  const healthScore = calculateHealthScore(gsc?.indexedPages, cwv, analytics?.sessions);
  printReport(week, gsc, cwv, analytics, healthScore);
  saveReport(week, gsc, cwv, analytics, healthScore);
}

main().catch((err) => { console.error('Fatal:', err.message); process.exit(1); });
