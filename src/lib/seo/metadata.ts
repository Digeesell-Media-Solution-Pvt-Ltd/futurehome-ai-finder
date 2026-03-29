import type { ProgrammaticArea, ProgrammaticBlogPost, ProgrammaticDeveloperLanding } from "@/types/programmatic";
import { absoluteUrl } from "@/lib/seo/site";
import { programmaticAreaPath, programmaticBlogPath, programmaticDeveloperPath } from "@/lib/seo/programmaticPaths";

const MAX_TITLE = 60;
const MAX_DESC = 155;

export function clampTitle(s: string): string {
  const t = s.trim();
  if (t.length <= MAX_TITLE) return t;
  return `${t.slice(0, MAX_TITLE - 1).trim()}…`;
}

export function clampDescription(s: string): string {
  const t = s.trim().replace(/\s+/g, " ");
  if (t.length <= MAX_DESC) return t;
  return `${t.slice(0, MAX_DESC - 1).trim()}…`;
}

export function areaPageMeta(area: ProgrammaticArea) {
  const title = clampTitle(
    area.titleTag ||
      `${area.name} Off-Plan Projects Dubai | New Launches`,
  );
  const description = clampDescription(
    area.metaDescription ||
      `Compare off-plan projects in ${area.name}, Dubai. ${area.intro.slice(0, 90)}… Explore payment plans, handovers & request details.`,
  );
  const path = programmaticAreaPath(area.slug);
  return {
    title,
    description,
    canonical: absoluteUrl(path),
    ogType: "website" as const,
    path,
  };
}

export function developerPageMeta(dev: ProgrammaticDeveloperLanding) {
  const title = clampTitle(
    dev.titleTag || `${dev.name} Off-Plan Dubai | New Developments`,
  );
  const description = clampDescription(
    dev.metaDescription ||
      `Explore ${dev.name} off-plan projects in Dubai & UAE. ${dev.overview.slice(0, 80)}… See launches, prices & connect with sales.`,
  );
  const path = programmaticDeveloperPath(dev.slug);
  return { title, description, canonical: absoluteUrl(path), ogType: "website" as const, path };
}

export function blogPageMeta(post: ProgrammaticBlogPost) {
  const title = clampTitle(post.titleTag || post.title);
  const description = clampDescription(
    post.metaDescription || `${post.contentAngle} — Dubai off-plan insights from OffPlanProjects.`,
  );
  const path = programmaticBlogPath(post.slug);
  return { title, description, canonical: absoluteUrl(path), ogType: "article" as const, path };
}
