import { INTERNAL_LINKING } from "@/data/internal-linking/config";
import { getProgrammaticArea } from "@/data/programmatic/registry";
import { programmaticAreaPath } from "@/lib/seo/programmaticPaths";
import type { CrawlableInternalLink } from "@/lib/internal-linking/types";
import { slugToAreaLabel } from "@/lib/internal-linking/slugLabels";

/** Prefer programmatic SEO URL when seed exists; else legacy area page; else filtered projects. */
export function areaHubLink(areaSlug: string, anchorVariant: "projects" | "guide" = "projects"): CrawlableInternalLink {
  const programmatic = getProgrammaticArea(areaSlug);
  const labelName = programmatic?.name ?? slugToAreaLabel(areaSlug);

  if (programmatic) {
    const label =
      anchorVariant === "guide"
        ? `${labelName} off-plan investment overview`
        : `${labelName} off-plan projects & new launches`;
    return { to: programmaticAreaPath(areaSlug), label };
  }

  const legacy =
    INTERNAL_LINKING.legacyAreaPathBySlug[areaSlug as keyof typeof INTERNAL_LINKING.legacyAreaPathBySlug];
  if (legacy) {
    return {
      to: legacy,
      label: `${labelName} off-plan ${anchorVariant === "guide" ? "area guide" : "listings hub"}`,
    };
  }

  return {
    to: `/projects?area=${encodeURIComponent(labelName)}`,
    label: `Off-plan properties in ${labelName}`,
  };
}
