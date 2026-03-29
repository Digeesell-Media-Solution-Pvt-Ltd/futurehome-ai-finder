import type { ProgrammaticDeveloperLanding } from "@/types/programmatic";

export const programmaticDeveloperLandings: ProgrammaticDeveloperLanding[] = [
  {
    kind: "developer",
    name: "Emaar Properties",
    slug: "emaar",
    projectFilterDeveloperSlug: "emaar",
    internalDeveloperPath: "/developers/emaar",
    primaryKeyword: "Emaar off plan projects Dubai",
    overview:
      "Emaar leads scale master communities and waterfront districts across Dubai. Off-plan buyers weigh handover reputation, community amenity depth, and long-term service charge discipline.",
    reputationSummary:
      "Globally recognised master developer with a broad pipeline across Dubai Creek Harbour, Dubai Hills Estate, Emaar South, and Downtown-adjacent corridors.",
    notableDevelopments:
      "Iconic master-planned districts and sustained launch cadence across apartments, townhouses, and villas.",
    trustSignals:
      "Work through authorised sales; confirm RERA registration, escrow account details, and latest factsheet before reservation.",
    featuredProjectSlugs: ["sera-1", "grove-ridge", "albero-at-dubai-creek-harbour"],
    relatedAreaSlugs: ["downtown-dubai", "dubai-marina"],
    faq: [
      {
        question: "How do I buy an Emaar off-plan home?",
        answer:
          "Shortlist a community, request the current availability and payment plan, then complete booking with the developer’s certified sales executive and escrow-compliant payments.",
      },
      {
        question: "Where are most Emaar off-plan launches today?",
        answer:
          "Activity spans Dubai Creek Harbour, Emaar South, Dubai Hills Estate, and select waterfront lines—confirm live inventory on official channels.",
      },
    ],
  },
  {
    kind: "developer",
    name: "DAMAC Properties",
    slug: "damac",
    projectFilterDeveloperSlug: "damac",
    internalDeveloperPath: "/developers/damac",
    primaryKeyword: "DAMAC off plan Dubai",
    overview:
      "DAMAC’s pipeline includes golf, waterfront, and island-themed communities. Off-plan buyers often compare payment milestones, handover history, and cluster-level amenities.",
    reputationSummary:
      "Established UAE developer with diversified typologies from affordable entry launches to high-end branded villas.",
    notableDevelopments:
      "Island communities, golf-side product, and Sheikh Zayed Road–adjacent towers—always verify live inventory.",
    trustSignals:
      "Request the latest sales offer, DLD project reference, and escrow receipts for each instalment.",
    featuredProjectSlugs: ["damac-islands", "shoreline", "sun-city"],
    relatedAreaSlugs: ["dubai-marina", "downtown-dubai"],
    faq: [
      {
        question: "Are DAMAC payment plans fixed?",
        answer:
          "Plans vary by project phase and launch window; developer-published schedules supersede marketing summaries.",
      },
    ],
  },
  {
    kind: "developer",
    name: "Sobha Realty",
    slug: "sobha",
    projectFilterDeveloperSlug: "sobha",
    internalDeveloperPath: "/developers/sobha",
    primaryKeyword: "Sobha off plan Dubai",
    overview:
      "Sobha is known for high-finishing standards and integrated communities such as Sobha Hartland. Off-plan demand tracks build quality narratives and schools/park adjacency.",
    reputationSummary:
      "Premium positioning with repeat buyers in master community environments.",
    notableDevelopments:
      "The Grove, The Greens, The Brooks, Skyvue Altier—cross-check unit availability frequently.",
    trustSignals:
      "Book via authorised Sobha sales; verify SPA timelines and any post-handover fee schedules.",
    featuredProjectSlugs: ["the-grove", "the-greens", "skyvue-altier"],
    relatedAreaSlugs: ["downtown-dubai"],
    faq: [
      {
        question: "Is Sobha only villas?",
        answer:
          "No—Sobha launches include apartments and sky homes; filter by community and handover date for your strategy.",
      },
    ],
  },
];

export const programmaticDevelopersBySlug = Object.fromEntries(
  programmaticDeveloperLandings.map((d) => [d.slug, d]),
);
