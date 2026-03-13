/**
 * Extract image URLs from the official Dugasta project page (no download).
 * Complies with imageRules.displayRule: useImageURLsDirectly, doNotDownloadImages, renderImagesFromSource.
 *
 * imageExtraction: Parse HTML, extract <img> src; filter icons/logos, <400px; prioritize large renders/banners.
 * imageUsage: heroImage = largest exterior render; gridImage = same; gallery = all remaining.
 *
 * Usage (from repo root):
 *   node scripts/extract-project-image-urls-dugasta.mjs [URL]
 *
 * Default: https://dugasta.com/property/moonsa-residences-2/
 * Output: JSON or paste-ready hero_image + gallery_images for src/data/projects.ts (full URLs).
 */

const SOURCE_PAGE = "https://dugasta.com/property/moonsa-residences-2/";
const SOURCE_URL = process.argv[2] || SOURCE_PAGE;
const MIN_WIDTH_HINT = 400;
const SKIP_PATTERNS = [
  /logo/i,
  /icon/i,
  /favicon/i,
  /avatar/i,
  /thumbnail/i,
  /-\d{2,3}x\d{2,3}\./i,
  /\/\d{2,3}x\d{2,3}\//i,
];
const ACCEPTED_EXT = [".jpg", ".jpeg", ".png", ".webp"];

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
    return new URL(url).origin === new URL(baseUrl).origin;
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

async function main() {
  console.log("Fetching:", SOURCE_URL);
  const res = await fetch(SOURCE_URL, {
    headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", "Accept": "text/html,application/xhtml+xml" },
    redirect: "follow",
  });
  if (!res.ok) {
    console.error("Page fetch failed:", res.status, res.statusText);
    console.error("Per displayRule: use image URLs directly when available. When page is live, re-run to get URLs for hero_image and gallery_images.");
    process.exit(1);
  }
  const html = await res.text();
  const urls = extractImageUrls(html, SOURCE_URL);
  if (urls.length === 0) {
    console.error("No same-domain image URLs found. Leave hero_image and gallery_images empty (strictRestrictions.noPlaceholders).");
    process.exit(0);
  }
  const sorted = [...urls].sort((a, b) => scoreForHero(b) - scoreForHero(a));
  const heroUrl = sorted[0];
  const galleryUrls = sorted.slice(1);

  console.log("\nPaste into src/data/projects.ts for moonsa-residences-2 (use URLs directly; do not download):\n");
  console.log('  hero_image: "' + heroUrl + '",');
  console.log("  gallery_images: ", JSON.stringify(galleryUrls, null, 2).replace(/\n/g, "\n  "), "\n");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
