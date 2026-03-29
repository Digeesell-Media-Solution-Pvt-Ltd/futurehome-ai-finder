import type { ProgrammaticArea } from "@/types/programmatic";

/** Add new rows here to scale area SEO pages — no template edits required. */
export const programmaticAreas: ProgrammaticArea[] = [
  {
    kind: "area",
    name: "Dubai Marina",
    slug: "dubai-marina",
    projectFilterAreaSlug: "dubai-marina",
    legacyAreaPath: "/areas/dubai-marina",
    primaryKeyword: "off plan projects Dubai Marina",
    intro:
      "Dubai Marina is one of the most searched waterfront corridors for off-plan apartments and branded residences. Buyers compare handover windows, marina views, and developer track records before reserving early-phase inventory.",
    whyInvest:
      "Strong rental narratives, established community amenities, and consistent launch activity make Dubai Marina a reference market for off-plan investors who want liquidity and recognizable product types.",
    pricePaymentOverview:
      "Entry levels vary by tower and view band; most launches publish construction-linked plans. Always verify the latest AXx/ post-handover schedule on the developer’s sales pack.",
    investmentAngle:
      "Marina off-plan suits investors prioritizing completion certainty from listed developers and clear comparables across towers.",
    lifestyleLandmarks:
      "Marina Walk, yacht club precinct, beach access within a short drive, and metro-linked commuting to business districts.",
    propertyTypes: ["Apartments", "Penthouses", "Occasional townhouse clusters"],
    nearbyLandmarks: ["Marina Walk", "Dubai Marina Mall", "JBR beach"],
    roiRangeLabel: "Varies by unit and developer; validate with official projections only.",
    priceRangeLabel: "Wide band from compact launches to super-prime marina frontage.",
    featuredProjectSlugs: ["six-senses-residences-dubai-marina"],
    relatedDeveloperSlugs: ["select-group", "emaar"],
    faq: [
      {
        question: "What does off-plan mean in Dubai Marina?",
        answer:
          "You reserve a unit from a registered developer during construction, with payments typically tied to construction milestones until handover, per RERA guidelines.",
      },
      {
        question: "Can international buyers purchase off-plan in Dubai Marina?",
        answer:
          "Yes, subject to developer eligibility, KYC, and UAE regulatory requirements. Work directly with the developer’s authorised sales team for paperwork.",
      },
      {
        question: "How do I compare Dubai Marina launches?",
        answer:
          "Compare developer, payment plan, service charges, handover date, view category, and net usable layout—not list price alone.",
      },
    ],
  },
  {
    kind: "area",
    name: "Downtown Dubai",
    slug: "downtown-dubai",
    projectFilterAreaSlug: "downtown-dubai",
    legacyAreaPath: "/areas/downtown-dubai",
    primaryKeyword: "off plan projects Downtown Dubai",
    intro:
      "Downtown Dubai off-plan releases sit beside global landmarks. Demand is driven by branded product, skyline views, and corporate tenant proximity.",
    whyInvest:
      "Landmark adjacency and transport connectivity underpin long-term relevance; launches often compete on architecture and hotel-branded management stories.",
    pricePaymentOverview:
      "Prime corridors command higher entry tickets; payment plans differ by master developer policies—confirm each tower’s schedule and Oqood process.",
    investmentAngle:
      "Suits investors comfortable with premium entry levels and longer build cycles in exchange for flagship addressing.",
    lifestyleLandmarks:
      "Burj Khalifa district, Dubai Mall ecosystem, opera and boulevard dining, business bay crossover demand.",
    propertyTypes: ["Apartments", "Sky villas", "Branded residences"],
    nearbyLandmarks: ["Burj Khalifa", "Dubai Mall", "Dubai Opera"],
    roiRangeLabel: "Premium micro-market; evaluate with rental comps and service charge detail.",
    priceRangeLabel: "Mid-luxury to ultra-luxury bands depending on tower.",
    featuredProjectSlugs: [],
    relatedDeveloperSlugs: ["emaar", "meraas"],
    faq: [
      {
        question: "Is Downtown Dubai only luxury off-plan?",
        answer:
          "Most pipelines skew premium, but unit mix and payment structures differ. Filter by budget, handover, and owner-use vs investment intent.",
      },
    ],
  },
  {
    kind: "area",
    name: "Palm Jumeirah",
    slug: "palm-jumeirah",
    projectFilterAreaSlug: "palm-jumeirah",
    legacyAreaPath: "/areas/palm-jumeirah",
    primaryKeyword: "off plan projects Palm Jumeirah",
    intro:
      "Palm Jumeirah remains a trophy address for villas and high-end apartments. Off-plan here is often about beach proximity, branded hospitality tie-ins, and phased handovers.",
    whyInvest:
      "Scarcity of beachfront inventory and global name recognition support sustained attention from international capital.",
    pricePaymentOverview:
      "Expect higher down-payment norms on select launches; escrow protection applies—use official developer channels.",
    investmentAngle:
      "Best for investors seeking landmark exposure and long-duration holds rather than quick flips.",
    lifestyleLandmarks:
      "Fronds and crescent beach clubs, hospitality dining, marina berthing options on select fronds.",
    propertyTypes: ["Apartments", "Beach villas", "Penthouses"],
    nearbyLandmarks: ["Atlantis zone", "Nakheel Mall", "West Beach"],
    roiRangeLabel: "Evaluate with hospitality-seasonality and tenancy type in mind.",
    priceRangeLabel: "Upper quartile vs Dubai average.",
    featuredProjectSlugs: ["palm-central-private-residences"],
    relatedDeveloperSlugs: ["nakheel"],
    faq: [
      {
        question: "Are Palm Jumeirah off-plan units freehold?",
        answer:
          "Most listed inventory is freehold for qualified buyers; confirm tenure and usage restrictions on the developer’s disclosure.",
      },
    ],
  },
];

export const programmaticAreasBySlug = Object.fromEntries(programmaticAreas.map((a) => [a.slug, a]));
