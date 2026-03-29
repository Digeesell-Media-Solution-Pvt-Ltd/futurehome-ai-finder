import { useMemo } from "react";
import type { Project, ProjectFilters } from "@/types/project";
import { normalizeSlug } from "@/lib/normalize";
import { useFilteredProjects } from "@/hooks/useProjects";
import { projects } from "@/data/projects";
import { projectDetailRoute } from "@/lib/blog/listingFormatters";

function normalizeProjectRow(project: Project): Project & { route: string; developerName: string; areaSlug: string } {
  const developerName = project.developerName || project.developers?.name || "Unknown Developer";
  const developerSlug = project.developerSlug || project.developers?.slug || normalizeSlug(developerName);
  const areaName = project.areaName || project.areas?.name || project.city || "Dubai";
  const areaSlug = project.areaSlug || project.areas?.slug || normalizeSlug(areaName);
  const route = projectDetailRoute({ ...project, developerSlug, areaSlug, developerName } as Project);

  return {
    ...project,
    developerName,
    developerSlug,
    areaName,
    areaSlug,
    route,
  };
}

/**
 * Merges Supabase-backed rows filtered by area name with manual `data/projects` rows for the same `areaSlug`,
 * dedupes by slug, sorts by `created_at` (newest first), caps at `limit`.
 */
export function useAreaBlogListings(areaName: string, areaSlug: string, limit: number) {
  const filters = useMemo((): ProjectFilters => ({ areas: [areaName] }), [areaName]);
  const { data: apiProjects = [], isLoading } = useFilteredProjects(filters);

  const listings = useMemo(() => {
    const normalizedApi = apiProjects.map((p) => normalizeProjectRow(p));
    const manualInArea = projects
      .filter((p) => p.areaSlug === areaSlug)
      .map((p) => normalizeProjectRow(p as unknown as Project));

    const bySlug = new Map<string, Project & { route: string }>();
    for (const p of normalizedApi) {
      bySlug.set(p.slug, p);
    }
    for (const p of manualInArea) {
      if (!bySlug.has(p.slug)) {
        bySlug.set(p.slug, p);
      }
    }

    return [...bySlug.values()]
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, limit);
  }, [apiProjects, areaSlug, limit]);

  return { listings, isLoading };
}
