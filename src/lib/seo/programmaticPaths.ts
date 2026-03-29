/**
 * URL strategy (React Router–friendly; mirrors SEO intent from brief).
 * Area intent: /off-plan-projects/:areaSlug  (~ off-plan-projects-[area])
 * Developer intent: /off-plan-by-developer/:slug (~ [developer]-off-plan-projects; use edge redirects for exact legacy URLs if needed)
 * Blog: /blog/:slug
 */
export function programmaticAreaPath(areaSlug: string): string {
  return `/off-plan-projects/${areaSlug}`;
}

export function programmaticDeveloperPath(developerSlug: string): string {
  return `/off-plan-by-developer/${developerSlug}`;
}

export function programmaticBlogPath(topicSlug: string): string {
  return `/blog/${topicSlug}`;
}
