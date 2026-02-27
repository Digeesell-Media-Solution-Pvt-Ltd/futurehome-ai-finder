/**
 * Audit project images: find hero_image/gallery_images that are external, missing, or empty.
 * Run from repo root: node scripts/audit-project-images.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const publicDir = path.join(repoRoot, "public");

const raw = fs.readFileSync(path.join(repoRoot, "src/data/projects.ts"), "utf8");

// Split by project block: each starts with "id: \"manual-
const blocks = raw.split(/\n  \{\n/).filter((b) => b.includes('id: "manual-'));

const exists = (p) => {
  if (!p || !p.startsWith("/")) return false;
  const full = path.join(publicDir, p.slice(1));
  return fs.existsSync(full);
};

const isExternal = (url) => typeof url === "string" && (url.startsWith("http://") || url.startsWith("https://"));

const affected = [];

for (const block of blocks) {
  const slug = block.match(/slug:\s*["']([^"']+)["']/)?.[1];
  const developerSlug = block.match(/developerSlug:\s*["']([^"']+)["']/)?.[1];
  const hero = block.match(/hero_image:\s*["']([^"']+)["']/)?.[1] ?? null;
  const galleryMatch = block.match(/gallery_images:\s*\[([\s\S]*?)\],\s*(?:brochure_url|floorplan)/);
  const galleryStr = galleryMatch ? galleryMatch[1] : "";
  const galleryUrls = galleryStr ? [...galleryStr.matchAll(/["']([^"']+)["']/g)].map((m) => m[1]) : [];

  if (!slug) continue;

  const heroExternal = hero && isExternal(hero);
  const heroLocalMissing = hero && hero.startsWith("/") && !exists(hero);
  const heroPlaceholder = hero && (hero.includes("placeholder") || hero === "/placeholder.svg");
  const galleryEmpty = galleryUrls.length === 0;
  const galleryHasExternal = galleryUrls.some(isExternal);
  const galleryLocalMissing = galleryUrls.filter((u) => u.startsWith("/") && !exists(u));

  const needsFix =
    heroExternal ||
    heroLocalMissing ||
    heroPlaceholder ||
    galleryEmpty ||
    galleryHasExternal ||
    galleryLocalMissing.length > 0;

  if (needsFix) {
    affected.push({
      slug,
      developerSlug: developerSlug || "?",
      hero: hero || "(null)",
      heroExternal: !!heroExternal,
      heroLocalMissing: !!heroLocalMissing,
      galleryCount: galleryUrls.length,
      galleryEmpty,
      galleryHasExternal,
      galleryLocalMissing: galleryLocalMissing.length,
    });
  }
}

console.log("Affected projects (missing/broken/external images):");
console.log(JSON.stringify(affected, null, 2));
console.log("\nTotal affected:", affected.length);
