/** Centralized blog image mapping — reused by BlogCard and BlogRelatedArticles */

const BLOG_IMAGES: Record<string, string> = {
  "best-off-plan-projects-dubai-marina":
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  "dubai-off-plan-payment-plans-guide":
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  "why-invest-off-plan-dubai-2026":
    "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
  "is-off-plan-worth-it-dubai":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  "best-areas-invest-dubai":
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
  "off-plan-vs-ready-dubai":
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  "off-plan-projects-jvc-dubai":
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
};

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?w=800&q=80";

function optimizeUnsplash(url: string): string {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("auto", "format");
    parsed.searchParams.set("fit", "crop");
    parsed.searchParams.set("w", "640");
    parsed.searchParams.set("q", "70");
    return parsed.toString();
  } catch {
    return url;
  }
}

export function getBlogImage(slug: string): string {
  return optimizeUnsplash(BLOG_IMAGES[slug] || DEFAULT_IMAGE);
}
