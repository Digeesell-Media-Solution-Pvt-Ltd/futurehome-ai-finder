/**
 * Extract real project images from the official Dugasta project page and save locally.
 * Follows imageRules: same-domain only, no icons/logos/small thumbnails, hero + gallery (min 8).
 *
 * imageRules alignment:
 * - sourcePage: default URL below (official project page only).
 * - step1–6: Load HTML → scan <img>, <picture>, <source>, background-image → same domain →
 *   ignore <400px / icons/logos → prioritize hero/large → download to folderPath.
 * - heroImage: largest exterior/banner; fallback highest resolution.
 * - galleryImages: minimumCount 8; all valid large images (exterior, interiors, amenities, lifestyle).
 * - listingGridImage / homepageGridImage: use hero (dataset hero_image).
 * - localStorage: folderPath below; fileNaming hero.jpg, 01.jpg, 02.jpg, ...
 * - strictRestrictions: if source page 404 or no images → leave gallery empty (no fake images).
 *
 * Usage (from repo root):
 *   node scripts/fetch-project-images-dugasta.mjs [URL]
 *
 * Default URL (sourcePage): https://dugasta.com/property/moonsa-residences-2/
 * Output: public/projects/dugasta-properties/moonsa-residences-2/hero.<ext>, 01.<ext>, ..., 08.<ext> (min 8 gallery)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const OUT_DIR = path.join(repoRoot, "public/projects/dugasta-properties/moonsa-residences-2");

const SOURCE_PAGE = "https://dugasta.com/property/moonsa-residences-2/";
const SOURCE_URL = process.argv[2] || SOURCE_PAGE;
const GALLERY_MIN_COUNT = 8;
const ACCEPTED_EXT = [".jpg", ".jpeg", ".png", ".webp"];
const MIN_WIDTH_HINT = 400; // ignore URLs that suggest small size (e.g. -150x150)
const SKIP_PATTERNS = [
  /logo/i,
  /icon/i,
  /favicon/i,
  /avatar/i,
  /thumbnail/i,
  /-\d{2,3}x\d{2,3}\./i, // -150x150.jpg
  /\/\d{2,3}x\d{2,3}\//i,
];

function resolveUrl(base, href) {
  if (!href || href.startsWith("data:")) return null;
  try {
    return new URL(href, base).href;
  } catch {
    return null;
  }
}

function isSameDomain(url, baseUrl) {
  try {
    const u = new URL(url);
    const b = new URL(baseUrl);
    return u.origin === b.origin;
  } catch {
    return false;
  }
}

function isSkipped(url) {
  const lower = url.toLowerCase();
  if (!ACCEPTED_EXT.some((ext) => lower.includes(ext) || lower.includes(ext.replace(".", "")))) return true;
  if (SKIP_PATTERNS.some((re) => re.test(url))) return true;
  const dimMatch = url.match(/-(\d+)x(\d+)\./);
  if (dimMatch) {
    const w = parseInt(dimMatch[1], 10);
    const h = parseInt(dimMatch[2], 10);
    if (w < MIN_WIDTH_HINT && h < MIN_WIDTH_HINT) return true;
  }
  return false;
}

function extractImageUrls(html, baseUrl) {
  const seen = new Set();
  const out = [];

  const push = (raw) => {
    const resolved = resolveUrl(baseUrl, raw.trim());
    if (!resolved || !isSameDomain(resolved, baseUrl) || isSkipped(resolved)) return;
    if (seen.has(resolved)) return;
    seen.add(resolved);
    out.push(resolved);
  };

  for (const m of html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) push(m[1]);
  for (const m of html.matchAll(/<source[^>]+srcset=["']([^"']+)["']/gi)) {
    m[1].split(",").forEach((part) => push(part.trim().split(/\s+/)[0]));
  }
  for (const m of html.matchAll(/<source[^>]+src=["']([^"']+)["']/gi)) push(m[1]);
  for (const m of html.matchAll(/background-image:\s*url\(["']?([^"')]+)["']?\)/gi)) push(m[1]);

  return out;
}

function scoreForHero(url) {
  const lower = url.toLowerCase();
  let score = 0;
  if (lower.includes("hero")) score += 3;
  if (lower.includes("banner")) score += 2;
  if (lower.includes("render") || lower.includes("exterior")) score += 2;
  const dimMatch = url.match(/(\d+)x(\d+)/);
  if (dimMatch) {
    const w = parseInt(dimMatch[1], 10);
    const h = parseInt(dimMatch[2], 10);
    if (w >= 1200 || h >= 600) score += 2;
  }
  return score;
}

function getExtension(url) {
  try {
    const p = new URL(url).pathname;
    const ext = path.extname(p).toLowerCase();
    return ACCEPTED_EXT.includes(ext) ? ext : ".jpg";
  } catch {
    return ".jpg";
  }
}

async function download(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; OffPlanProjects/1.0)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  console.log("Fetching:", SOURCE_URL);
  const res = await fetch(SOURCE_URL, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; OffPlanProjects/1.0)" },
    redirect: "follow",
  });
  if (!res.ok) {
    console.error("Page fetch failed:", res.status, res.statusText);
    console.error("If the project page is not yet live, run this script when the URL is available.");
    process.exit(1);
  }
  const html = await res.text();
  const urls = extractImageUrls(html, SOURCE_URL);
  if (urls.length === 0) {
    console.error("No same-domain project images found. Leave gallery empty per imageRules.strictRestrictions.ifImagesNotFound.");
    process.exit(0);
  }

  const sorted = [...urls].sort((a, b) => scoreForHero(b) - scoreForHero(a));
  const heroUrl = sorted[0];
  const galleryUrls = sorted.slice(1);

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const heroExt = getExtension(heroUrl);
  const heroName = "hero" + heroExt;
  const heroPath = path.join(OUT_DIR, heroName);
  console.log("Downloading hero:", heroUrl, "->", heroPath);
  try {
    fs.writeFileSync(heroPath, await download(heroUrl));
  } catch (e) {
    console.error("Hero download failed:", e.message);
  }

  const writtenGallery = [];
  let idx = 0;
  for (const url of galleryUrls.slice(0, 12)) {
    idx++;
    const num = String(idx).padStart(2, "0");
    const ext = getExtension(url);
    const name = `${num}${ext}`;
    const filePath = path.join(OUT_DIR, name);
    console.log("Downloading gallery", name, url);
    try {
      fs.writeFileSync(filePath, await download(url));
      writtenGallery.push(`/projects/dugasta-properties/moonsa-residences-2/${name}`);
    } catch (e) {
      console.error("Failed", name, e.message);
    }
  }

  console.log("\nDone. Update src/data/projects.ts for moonsa-residences-2 with:");
  console.log('  hero_image: "/projects/dugasta-properties/moonsa-residences-2/' + heroName + '",');
  console.log("  gallery_images:", JSON.stringify(writtenGallery, null, 2));
  if (writtenGallery.length < GALLERY_MIN_COUNT) {
    console.warn(`\nNote: gallery has ${writtenGallery.length} image(s); imageRules request minimumCount ${GALLERY_MIN_COUNT}. Run again when the source page has more images.`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
