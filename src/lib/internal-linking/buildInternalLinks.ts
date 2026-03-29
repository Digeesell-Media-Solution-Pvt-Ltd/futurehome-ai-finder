import { INTERNAL_LINKING } from "@/data/internal-linking/config";
import type { ProgrammaticArea, ProgrammaticBlogPost, ProgrammaticDeveloperLanding } from "@/types/programmatic";
import type { ProjectDataContract } from "@/types/project";
import type { CrawlableInternalLink } from "@/lib/internal-linking/types";
import { areaHubLink } from "@/lib/internal-linking/resolveAreaUrl";
import { programmaticAreaPath, programmaticBlogPath, programmaticDeveloperPath } from "@/lib/seo/programmaticPaths";
import { getProgrammaticArea, getProgrammaticBlogPost, getProgrammaticDeveloper } from "@/data/programmatic/registry";
import { projects } from "@/data/projects";
import { getProjectsByAreaSlug, getProjectsByDeveloperSlug } from "@/lib/programmatic/projectLookup";
import { slugToDeveloperBrand } from "@/lib/internal-linking/slugLabels";

const DEFAULT_MAX = 10;

export function dedupeAndCap(links: CrawlableInternalLink[], max = DEFAULT_MAX): CrawlableInternalLink[] {
  const seen = new Set<string>();
  const out: CrawlableInternalLink[] = [];
  for (const l of links) {
    if (!l.to || seen.has(l.to)) continue;
    seen.add(l.to);
    out.push(l);
    if (out.length >= max) break;
  }
  return out;
}

function developerSeoLink(devSlug: string): CrawlableInternalLink {
  const brand = slugToDeveloperBrand(devSlug);
  return {
    to: programmaticDeveloperPath(devSlug),
    label: `${brand} off-plan projects in Dubai`,
  };
}

function developerAppLink(devSlug: string): CrawlableInternalLink {
  const brand = slugToDeveloperBrand(devSlug);
  return { to: `/developers/${devSlug}`, label: `${brand} developments on OffPlanProjects` };
}

function blogLink(slug: string, labelOverride?: string): CrawlableInternalLink | null {
  const post = getProgrammaticBlogPost(slug);
  if (!post) return null;
  return {
    to: programmaticBlogPath(slug),
    label: labelOverride || post.title,
  };
}

/** Homepage: priority areas, developers, sample projects, high-value blogs */
export function getHomepageInternalLinks(): CrawlableInternalLink[] {
  const links: CrawlableInternalLink[] = [];

  for (const slug of INTERNAL_LINKING.priorityAreaSlugs) {
    links.push(areaHubLink(slug, slug === "downtown-dubai" ? "guide" : "projects"));
  }

  for (const slug of INTERNAL_LINKING.priorityDeveloperSlugs) {
    links.push(developerSeoLink(slug));
  }

  const priority = INTERNAL_LINKING.priorityAreaSlugs as readonly string[];
  const inPriorityAreas = projects.filter((p) => priority.includes(p.areaSlug));
  const featured = (inPriorityAreas.length ? inPriorityAreas : projects).slice(0, 4);
  for (const p of featured) {
    links.push({
      to: p.route,
      label: `${p.project_name} — ${p.areaName} off-plan`,
    });
  }

  for (const slug of INTERNAL_LINKING.homepageBlogSlugs) {
    const bl = blogLink(
      slug,
      slug === "is-off-plan-worth-it-dubai"
        ? "Is off-plan worth it in Dubai?"
        : slug === "best-areas-invest-dubai"
          ? "Best Dubai areas for off-plan investors"
          : slug === "off-plan-vs-ready-dubai"
            ? "Off-plan vs ready properties in Dubai"
            : undefined,
    );
    if (bl) links.push(bl);
  }

  return dedupeAndCap(links, DEFAULT_MAX);
}

/** Programmatic / legacy area hubs */
export function getAreaPageInternalLinks(area: ProgrammaticArea): CrawlableInternalLink[] {
  const links: CrawlableInternalLink[] = [];

  links.push({ to: area.legacyAreaPath, label: `${area.name} area profile & lifestyle` });

  const inArea = getProjectsByAreaSlug(area.projectFilterAreaSlug);
  for (const p of inArea.slice(0, 6)) {
    links.push({
      to: p.route,
      label: `${p.project_name} off-plan in ${area.name}`,
    });
  }

  const devSlugs = [...new Set(inArea.map((p) => p.developerSlug))];
  for (const ds of devSlugs.slice(0, 5)) {
    links.push(developerSeoLink(ds));
  }

  const b1 = blogLink("best-areas-invest-dubai", `Where to invest off-plan near ${area.name}`);
  const b2 = blogLink("off-plan-vs-ready-dubai", "Off-plan vs ready stock — which fits your timeline?");
  if (b1) links.push(b1);
  if (b2) links.push(b2);

  return dedupeAndCap(links, DEFAULT_MAX);
}

export function getDeveloperProgrammaticPageLinks(dev: ProgrammaticDeveloperLanding): CrawlableInternalLink[] {
  const links: CrawlableInternalLink[] = [];

  links.push({ to: dev.internalDeveloperPath, label: `All ${dev.name} listings on OffPlanProjects` });

  const byDev = getProjectsByDeveloperSlug(dev.projectFilterDeveloperSlug);
  for (const p of byDev.slice(0, 6)) {
    links.push({
      to: p.route,
      label: `${p.project_name} — ${dev.name} off-plan`,
    });
  }

  const areaSlugs = [...new Set(byDev.map((p) => p.areaSlug))];
  for (const a of areaSlugs.slice(0, 4)) {
    links.push(areaHubLink(a, "projects"));
  }

  const b1 = blogLink("is-off-plan-worth-it-dubai");
  const b2 = blogLink("dubai-off-plan-payment-plans-guide", `${dev.name} buyers: understand payment plans`);
  if (b1) links.push(b1);
  if (b2) links.push(b2);

  return dedupeAndCap(links, DEFAULT_MAX);
}

/** `/developers/:slug` listing — uses live project rows + optional programmatic developer seed */
export function getDeveloperAppListingInternalLinks(
  developerSlug: string,
  developerName: string,
  sampleProjects: ProjectDataContract[],
): CrawlableInternalLink[] {
  const links: CrawlableInternalLink[] = [];

  const seeded = getProgrammaticDeveloper(developerSlug);
  if (seeded) {
    links.push({ to: programmaticDeveloperPath(developerSlug), label: `${developerName} off-plan SEO hub` });
  }

  for (const p of sampleProjects.slice(0, 5)) {
    links.push({
      to: p.route,
      label: `${p.project_name} — ${developerName} off-plan`,
    });
  }

  const areaSlugs = [...new Set(sampleProjects.map((x) => x.areaSlug))];
  for (const a of areaSlugs.slice(0, 4)) {
    links.push(areaHubLink(a, "projects"));
  }

  const b1 = blogLink("is-off-plan-worth-it-dubai");
  const b2 = blogLink("best-areas-invest-dubai");
  if (b1) links.push(b1);
  if (b2) links.push(b2);

  links.push({ to: "/projects", label: "Full Dubai off-plan directory" });

  return dedupeAndCap(links, DEFAULT_MAX);
}

export function getProjectPageInternalLinks(args: {
  areaSlug: string | undefined;
  areaName: string;
  developerSlug: string | undefined;
  developerName: string;
  projectName: string;
}): CrawlableInternalLink[] {
  const links: CrawlableInternalLink[] = [];

  if (args.areaSlug) {
    links.push(areaHubLink(args.areaSlug, "projects"));
  } else {
    links.push({
      to: `/projects?area=${encodeURIComponent(args.areaName)}`,
      label: `More off-plan in ${args.areaName}`,
    });
  }

  if (args.developerSlug) {
    links.push(developerSeoLink(args.developerSlug));
    links.push(developerAppLink(args.developerSlug));
  }

  links.push({ to: "/projects", label: "Compare Dubai off-plan projects" });
  links.push({ to: "/ai-search", label: "AI match for budget & handover" });

  const b1 = blogLink("off-plan-vs-ready-dubai", `Is ${args.projectName} right vs ready stock?`);
  const b2 = blogLink("dubai-off-plan-payment-plans-guide", "How Dubai off-plan payment plans work");
  if (b1) links.push(b1);
  if (b2) links.push(b2);

  return dedupeAndCap(links, DEFAULT_MAX);
}

/** Area-guide blogs: hub + two developers + two blogs + two project deep links */
export function getAreaGuideBlogInternalLinks(post: ProgrammaticBlogPost): CrawlableInternalLink[] {
  const guide = post.areaListingGuide;
  if (!guide) return getBlogPageInternalLinks(post);

  const links: CrawlableInternalLink[] = [];

  links.push({
    to: programmaticAreaPath(guide.areaHubSlug),
    label: `${guide.areaName} off-plan projects — full directory`,
  });

  const inArea = getProjectsByAreaSlug(guide.areaHubSlug);
  const devSlugs = [...new Set(inArea.map((p) => p.developerSlug))];
  const devPicks: string[] = [...devSlugs];
  for (const d of INTERNAL_LINKING.priorityDeveloperSlugs) {
    if (devPicks.length >= 2) break;
    if (!devPicks.includes(d)) devPicks.push(d);
  }
  for (const ds of devPicks.slice(0, 2)) {
    links.push(developerSeoLink(ds));
  }

  const blogPool = [
    "dubai-off-plan-payment-plans-guide",
    "best-areas-invest-dubai",
    "off-plan-vs-ready-dubai",
    "why-invest-off-plan-dubai-2026",
    "is-off-plan-worth-it-dubai",
  ].filter((s) => s !== post.slug);
  const blogLabels: Record<string, string> = {
    "dubai-off-plan-payment-plans-guide": "Dubai off-plan payment plans explained for buyers",
    "best-areas-invest-dubai": "Best Dubai areas for off-plan capital growth",
    "off-plan-vs-ready-dubai": "Off-plan vs ready Dubai stock — which suits you?",
    "why-invest-off-plan-dubai-2026": "Why international investors shortlist Dubai off-plan",
    "is-off-plan-worth-it-dubai": "Is off-plan in Dubai worth it for your goals?",
  };
  for (const s of blogPool.slice(0, 2)) {
    const bl = blogLink(s, blogLabels[s]);
    if (bl) links.push(bl);
  }

  let projectPicks = inArea.slice(0, 2);
  if (projectPicks.length < 2) {
    const progArea = getProgrammaticArea(guide.areaHubSlug);
    for (const ps of progArea?.featuredProjectSlugs ?? []) {
      const row = projects.find((x) => x.slug === ps);
      if (row && !projectPicks.some((x) => x.slug === row.slug)) {
        projectPicks.push(row);
      }
      if (projectPicks.length >= 2) break;
    }
  }
  for (const p of projectPicks.slice(0, 2)) {
    links.push({
      to: p.route,
      label: `${p.project_name} — ${guide.areaName} project details`,
    });
  }

  links.push({ to: "/projects", label: "Browse all UAE off-plan projects" });

  return dedupeAndCap(links, 12);
}

export function getContextualBlogLinks(post: ProgrammaticBlogPost): CrawlableInternalLink[] {
  return post.areaListingGuide ? getAreaGuideBlogInternalLinks(post) : getBlogPageInternalLinks(post);
}

/** Blog: clusters from post relationships + mandatory mix */
export function getBlogPageInternalLinks(post: ProgrammaticBlogPost): CrawlableInternalLink[] {
  const links: CrawlableInternalLink[] = [];

  for (const slug of post.relatedAreaProgrammaticSlugs.slice(0, 3)) {
    links.push(areaHubLink(slug, "projects"));
  }

  for (const slug of post.relatedDeveloperSlugs.slice(0, 2)) {
    links.push(developerSeoLink(slug));
  }

  for (const pSlug of post.relatedProjectSlugs.slice(0, 2)) {
    const p = projects.find((x) => x.slug === pSlug) as ProjectDataContract | undefined;
    if (p) links.push({ to: p.route, label: `${p.project_name} project details` });
  }

  if (links.length < 5) {
    for (const slug of INTERNAL_LINKING.priorityAreaSlugs) {
      links.push(areaHubLink(slug, "guide"));
    }
  }

  links.push({ to: "/projects", label: "Full off-plan project directory" });

  return dedupeAndCap(links, DEFAULT_MAX);
}
