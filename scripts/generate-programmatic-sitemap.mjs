#!/usr/bin/env node
/**
 * Generates public/sitemap-programmatic.xml from the same slugs as programmatic seeds.
 * Keep arrays in sync with src/data/programmatic/*.seed.ts when you add pages.
 */
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ORIGIN = process.env.VITE_SITE_URL || "https://off-plan-projects.com";
const normalizeUrl = (path) => `${ORIGIN}${path}`.replace(/([^:]\/)\/+/g, "$1").replace(/\/$/, "");

const areaSlugs = ["dubai-marina", "downtown-dubai", "palm-jumeirah"];
const developerSlugs = ["emaar", "damac", "sobha"];
const blogSlugs = [
  "dubai-off-plan-payment-plans-guide",
  "why-invest-off-plan-dubai-2026",
  "is-off-plan-worth-it-dubai",
  "best-areas-invest-dubai",
  "off-plan-vs-ready-dubai",
  "best-off-plan-projects-dubai-marina",
];

const urls = [
  ...areaSlugs.map((s) => normalizeUrl(`/off-plan-projects/${s}`)),
  ...developerSlugs.map((s) => normalizeUrl(`/off-plan-by-developer/${s}`)),
  ...blogSlugs.map((s) => normalizeUrl(`/blog/${s}`)),
];
const uniqueUrls = [...new Set(urls)];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls.map((loc) => `  <url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`).join("\n")}
</urlset>
`;

const out = join(__dirname, "..", "public", "sitemap-programmatic.xml");
writeFileSync(out, xml, "utf8");
console.log("Wrote", out, `(${uniqueUrls.length} URLs)`);
