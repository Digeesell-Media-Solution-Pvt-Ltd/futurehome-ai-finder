/**
 * Central config for scalable internal linking. Extend arrays as you add areas/developers/blogs.
 */
export const INTERNAL_LINKING = {
  priorityAreaSlugs: ["dubai-marina", "jvc", "business-bay", "downtown-dubai"] as const,

  priorityDeveloperSlugs: ["emaar", "damac", "sobha"] as const,

  homepageBlogSlugs: [
    "best-off-plan-projects-dubai-marina",
    "is-off-plan-worth-it-dubai",
    "best-areas-invest-dubai",
    "off-plan-vs-ready-dubai",
    "dubai-off-plan-payment-plans-guide",
  ] as const,

  /** When no programmatic page exists in registry, use these crawlable fallbacks */
  legacyAreaPathBySlug: {
    "dubai-marina": "/areas/dubai-marina",
    jvc: "/areas/jvc",
    "business-bay": "/areas/business-bay",
    "downtown-dubai": "/areas/downtown-dubai",
    "palm-jumeirah": "/areas/palm-jumeirah",
  } as Record<string, string>,
} as const;

export type PriorityAreaSlug = (typeof INTERNAL_LINKING.priorityAreaSlugs)[number];
