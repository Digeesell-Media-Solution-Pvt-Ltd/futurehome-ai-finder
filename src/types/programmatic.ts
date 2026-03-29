/** Structured content for scalable SEO landing pages (flat file / future CMS). */

export type FaqItem = {
  question: string;
  answer: string;
};

export type ProgrammaticArea = {
  kind: "area";
  name: string;
  slug: string;
  /** Match `areaSlug` on internal project records for listing cards */
  projectFilterAreaSlug: string;
  /** Existing marketing area route, e.g. /areas/dubai-marina */
  legacyAreaPath: string;
  intro: string;
  whyInvest: string;
  pricePaymentOverview: string;
  investmentAngle: string;
  lifestyleLandmarks: string;
  propertyTypes: string[];
  nearbyLandmarks: string[];
  roiRangeLabel: string;
  priceRangeLabel: string;
  featuredProjectSlugs: string[];
  relatedDeveloperSlugs: string[];
  faq: FaqItem[];
  primaryKeyword: string;
  /** Optional overrides; otherwise generated in metadata.ts */
  titleTag?: string;
  metaDescription?: string;
};

export type ProgrammaticDeveloperLanding = {
  kind: "developer";
  name: string;
  slug: string;
  /** Match `developerSlug` on projects */
  projectFilterDeveloperSlug: string;
  /** Existing app route for developer listings if applicable */
  internalDeveloperPath: string;
  overview: string;
  reputationSummary: string;
  notableDevelopments: string;
  trustSignals: string;
  featuredProjectSlugs: string[];
  relatedAreaSlugs: string[];
  faq: FaqItem[];
  primaryKeyword: string;
  titleTag?: string;
  metaDescription?: string;
};

/** Long-form hub with live listing strip merged from API + manual dataset */
export type ProgrammaticBlogAreaListingGuide = {
  areaName: string;
  /** Matches `areaSlug` on projects and `/off-plan-projects/:slug` */
  areaHubSlug: string;
  introduction: string;
  whyInvest: string;
  priceAndRoi: string;
  investmentTips: string;
  /** Max projects in the dynamic strip (default 5) */
  listingLimit?: number;
};

export type ProgrammaticBlogPost = {
  kind: "blog";
  title: string;
  slug: string;
  primaryKeyword: string;
  contentAngle: string;
  /** Short HTML-safe markdown-ish: plain paragraphs with \n\n */
  body: string;
  relatedAreaProgrammaticSlugs: string[];
  relatedDeveloperSlugs: string[];
  relatedProjectSlugs: string[];
  faq: FaqItem[];
  titleTag?: string;
  metaDescription?: string;
  /** Visible H1; falls back to `title`. Use when title tag and H1 should differ (e.g. year in title only). */
  h1?: string;
  publishedAt: string;
  authorName?: string;
  /** Renders structured guide + `BlogDynamicListingStrip` instead of plain `body`. */
  areaListingGuide?: ProgrammaticBlogAreaListingGuide;
};
