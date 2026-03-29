import { absoluteUrl, SITE_ORIGIN } from "@/lib/seo/site";
import type { FaqItem } from "@/types/programmatic";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OffPlanProjects",
    url: SITE_ORIGIN,
    description: "AI-assisted discovery for UAE off-plan property listings.",
  };
}

export function webSiteSchemaSearchAction(searchPath = "/projects") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OffPlanProjects",
    url: SITE_ORIGIN,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_ORIGIN}${searchPath}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageSchema(faq: FaqItem[]) {
  if (!faq.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleSchema(args: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    url: args.url,
    datePublished: args.datePublished,
    author: args.authorName
      ? { "@type": "Person", name: args.authorName }
      : { "@type": "Organization", name: "OffPlanProjects" },
    publisher: { "@type": "Organization", name: "OffPlanProjects", url: SITE_ORIGIN },
  };
}

export function serializeJsonLd(data: Record<string, unknown> | null): string | null {
  if (!data) return null;
  return JSON.stringify(data);
}
