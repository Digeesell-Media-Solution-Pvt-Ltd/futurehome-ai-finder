import { programmaticAreaPath, programmaticBlogPath, programmaticDeveloperPath } from "@/lib/seo/programmaticPaths";

export type InternalLink = { to: string; label: string };

/** Data-driven homepage links (preferred for new work). */
export { getHomepageInternalLinks } from "@/lib/internal-linking/buildInternalLinks";

export function priorityAreaLinks(): InternalLink[] {
  return [
    { to: programmaticAreaPath("dubai-marina"), label: "Dubai Marina off-plan projects" },
    { to: programmaticAreaPath("downtown-dubai"), label: "Downtown Dubai off-plan projects" },
    { to: programmaticAreaPath("palm-jumeirah"), label: "Palm Jumeirah off-plan projects" },
    { to: "/areas", label: "All investment areas" },
  ];
}

export function priorityDeveloperLinks(): InternalLink[] {
  return [
    { to: programmaticDeveloperPath("emaar"), label: "Emaar off-plan Dubai" },
    { to: programmaticDeveloperPath("damac"), label: "DAMAC off-plan projects" },
    { to: programmaticDeveloperPath("sobha"), label: "Sobha off-plan projects" },
    { to: "/developers", label: "Developers with listings" },
  ];
}

export function moneyPageLinks(): InternalLink[] {
  return [
    { to: "/projects", label: "Browse all off-plan projects" },
    { to: "/ai-search", label: "AI property search" },
    ...priorityAreaLinks().slice(0, 3),
    ...priorityDeveloperLinks().slice(0, 3),
  ];
}

export function blogLinks(): InternalLink[] {
  return [
    { to: programmaticBlogPath("dubai-off-plan-payment-plans-guide"), label: "Off-plan payment plans in Dubai" },
    { to: programmaticBlogPath("why-invest-off-plan-dubai-2026"), label: "Why invest off-plan in Dubai" },
  ];
}
