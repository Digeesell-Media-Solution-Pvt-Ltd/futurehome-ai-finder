import { programmaticAreasBySlug } from "@/data/programmatic/areas.seed";
import { programmaticDevelopersBySlug } from "@/data/programmatic/developers.seed";
import { programmaticBlogBySlug } from "@/data/programmatic/blog.seed";

export function getProgrammaticArea(slug: string) {
  return programmaticAreasBySlug[slug] ?? null;
}

export function getProgrammaticDeveloper(slug: string) {
  return programmaticDevelopersBySlug[slug] ?? null;
}

export function getProgrammaticBlogPost(slug: string) {
  return programmaticBlogBySlug[slug] ?? null;
}

export function listProgrammaticAreaSlugs() {
  return Object.keys(programmaticAreasBySlug);
}

export function listProgrammaticDeveloperSlugs() {
  return Object.keys(programmaticDevelopersBySlug);
}

export function listProgrammaticBlogSlugs() {
  return Object.keys(programmaticBlogBySlug);
}
