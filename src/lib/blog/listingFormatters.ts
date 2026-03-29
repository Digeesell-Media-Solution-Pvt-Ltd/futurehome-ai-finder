import type { Project } from "@/types/project";

export function formatAedPrice(startingPrice: number | null): string {
  if (startingPrice == null) return "Price on request";
  if (startingPrice >= 1_000_000) {
    const m = startingPrice / 1_000_000;
    const rounded = m >= 10 ? m.toFixed(1) : m.toFixed(2);
    return `From AED ${rounded}M`;
  }
  return `From AED ${startingPrice.toLocaleString("en-AE")}`;
}

export function formatHandoverLine(project: Project): string {
  if (project.handover_year != null && project.handover_quarter) {
    return `${project.handover_quarter} ${project.handover_year}`;
  }
  if (project.handover_year != null) return String(project.handover_year);
  return "Handover on request";
}

/** Best-effort line for brochure-style rows when no dedicated payment_plan column exists */
export function paymentPlanHint(project: Project & { tags?: string[] }): string {
  const tags = project.tags ?? [];
  const ratioTag = tags.find((t) => /\d+\s*\/\s*\d+/.test(t));
  if (ratioTag) return ratioTag.replace(/-/g, " ");
  const desc = project.short_description ?? "";
  const match = desc.match(/\b\d{1,2}\s*\/\s*\d{1,2}\b|% on booking|payment plan[^.]{0,60}/i);
  if (match) return match[0].trim().slice(0, 90);
  return "See listing for the live developer schedule";
}

export function projectDetailRoute(project: Project): string {
  const any = project as Project & { route?: string };
  if (any.route) return any.route;
  const dev =
    project.developerSlug ||
    project.developers?.slug ||
    (project as Project & { developerSlug?: string }).developerSlug;
  const slug = project.slug;
  if (!dev) return `/projects`;
  return `/projects/${dev}/${slug}`;
}

export function projectDeveloperLabel(project: Project): string {
  return (
    (project as Project & { developerName?: string }).developerName ||
    project.developers?.name ||
    "Developer on listing"
  );
}
