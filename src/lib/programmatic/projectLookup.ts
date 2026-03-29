import type { ProjectDataContract } from "@/types/project";
import { projects } from "@/data/projects";

export function getProjectsByAreaSlug(areaSlug: string): ProjectDataContract[] {
  return projects.filter((p) => p.areaSlug === areaSlug);
}

export function getProjectsByDeveloperSlug(developerSlug: string): ProjectDataContract[] {
  return projects.filter((p) => p.developerSlug === developerSlug);
}

export function getProjectBySlug(slug: string): ProjectDataContract | undefined {
  return projects.find((p) => p.slug === slug);
}
