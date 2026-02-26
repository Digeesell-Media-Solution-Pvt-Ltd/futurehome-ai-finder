import type {
  Area,
  Developer,
  Project,
  ProjectDataContract,
  ProjectFilters,
} from "@/types/project";
import { normalizeDeveloperKey, normalizeSlug } from "@/lib/normalize";

const createProjectRoute = (developerSlug: string, projectSlug: string) =>
  `/projects/${developerSlug}/${projectSlug}`;

const hasValue = (value: unknown): boolean =>
  value !== null && value !== undefined && value !== "";

export const projects: ProjectDataContract[] = [
  {
    id: "manual-six-senses-residences-dubai-marina",
    project_name: "Six Senses Residences Dubai Marina",
    slug: "six-senses-residences-dubai-marina",
    developer_id: "manual-select-group",
    area_id: "manual-dubai-marina",
    project_status: "Upcoming",
    launch_status: "Newly Launched",
    handover_quarter: null,
    handover_year: null,
    city: "Dubai",
    starting_price: null,
    max_price: null,
    currency: "AED",
    property_types: ["Apartment", "Penthouse"],
    bedroom_types: [],
    investment_tags: ["Luxury Segment", "Branded Residences", "Investor Hotspot"],
    lifestyle_tags: ["Waterfront", "Wellness Living", "Popular Location", "Good Connectivity"],
    amenities: ["Swimming Pool", "Gym", "Concierge", "24/7 Security", "Parking", "Spa"],
    hero_image: "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3.jpg",
    gallery_images: [],
    brochure_url: "/brochures/select-group/six-senses-residences-dubai-marina.pdf",
    floorplan_url: null,
    short_description:
      "Six Senses Residences Dubai Marina brings world-class branded living to one of Dubai's most iconic waterfront destinations.",
    full_description: null,
    investment_score: null,
    lifestyle_score: null,
    created_at: "2026-01-01T00:00:00.000Z",
    updated_at: "2026-01-01T00:00:00.000Z",
    developers: { name: "Select Group", slug: "select-group" },
    areas: { name: "Dubai Marina", slug: "dubai-marina" },
    developerName: "Select Group",
    developerSlug: "select-group",
    areaName: "Dubai Marina",
    areaSlug: "dubai-marina",
    propertyTypeSlugs: ["apartment", "penthouse"],
    route: createProjectRoute("select-group", "six-senses-residences-dubai-marina"),
    tags: ["luxury", "branded", "waterfront", "wellness", "family"],
  },
  {
    id: "manual-albero-at-dubai-creek-harbour",
    project_name: "Albero - Dubai Creek Harbour",
    slug: "albero-at-dubai-creek-harbour",
    developer_id: "manual-emaar",
    area_id: "manual-dubai-creek-harbour",
    project_status: "Upcoming",
    launch_status: "Newly Launched",
    handover_quarter: null,
    handover_year: null,
    city: "Dubai",
    starting_price: 1810000,
    max_price: null,
    currency: "AED",
    property_types: ["Apartment", "Townhouse"],
    bedroom_types: ["1BR", "2BR", "3BR"],
    investment_tags: ["High Capital Appreciation", "Investor Hotspot", "Luxury Segment"],
    lifestyle_tags: ["Waterfront", "Popular Location", "Good Connectivity", "Family Friendly"],
    amenities: ["Swimming Pool", "Gym", "Landscaped Gardens", "24/7 Security", "Parking", "Jogging Track"],
    hero_image: "https://cdn.properties.emaar.com/wp-content/uploads/2025/04/HERO_1620X832_3.jpg",
    gallery_images: [],
    brochure_url: "/brochures/emaar/albero-at-dubai-creek-harbour.pdf",
    floorplan_url: null,
    short_description:
      "Albero at Dubai Creek Harbour by Emaar offers modern waterfront living in one of Dubai's most sought-after master communities.",
    full_description: null,
    investment_score: null,
    lifestyle_score: null,
    created_at: "2026-01-01T00:00:00.000Z",
    updated_at: "2026-01-01T00:00:00.000Z",
    developers: { name: "Emaar", slug: "emaar" },
    areas: { name: "Dubai Creek Harbour", slug: "dubai-creek-harbour" },
    developerName: "Emaar",
    developerSlug: "emaar",
    areaName: "Dubai Creek Harbour",
    areaSlug: "dubai-creek-harbour",
    propertyTypeSlugs: ["apartment", "townhouse"],
    route: createProjectRoute("emaar", "albero-at-dubai-creek-harbour"),
    tags: ["luxury", "waterfront", "family", "investment", "creek"],
  },
  {
    id: "manual-golf-meadow-at-emaar-south",
    project_name: "Golf Meadow at Emaar South",
    slug: "golf-meadow-at-emaar-south",
    developer_id: "manual-emaar",
    area_id: "manual-emaar-south",
    project_status: "Upcoming",
    launch_status: "Newly Launched",
    handover_quarter: null,
    handover_year: null,
    city: "Dubai",
    starting_price: 1120000,
    max_price: null,
    currency: "AED",
    property_types: ["Apartment", "Townhouse"],
    bedroom_types: ["1BR", "2BR", "3BR"],
    investment_tags: ["Affordable Entry", "High ROI", "Rental Income Focused"],
    lifestyle_tags: ["Golf Community", "Family Friendly", "Good Connectivity"],
    amenities: ["Swimming Pool", "Gym", "Kids Play Area", "Landscaped Gardens", "24/7 Security", "Parking"],
    hero_image: "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/HERO_1620X832_1-3.jpg",
    gallery_images: [],
    brochure_url: "/brochures/emaar/golf-meadow-at-emaar-south.pdf",
    floorplan_url: null,
    short_description:
      "Golf Meadow at Emaar South offers 1 to 3-bedroom luxury apartments and 3-bedroom townhouses in a golf-estate community by Emaar.",
    full_description: null,
    investment_score: null,
    lifestyle_score: null,
    created_at: "2026-01-01T00:00:00.000Z",
    updated_at: "2026-01-01T00:00:00.000Z",
    developers: { name: "Emaar", slug: "emaar" },
    areas: { name: "Emaar South", slug: "emaar-south" },
    developerName: "Emaar",
    developerSlug: "emaar",
    areaName: "Emaar South",
    areaSlug: "emaar-south",
    propertyTypeSlugs: ["apartment", "townhouse"],
    route: createProjectRoute("emaar", "golf-meadow-at-emaar-south"),
    tags: ["golf", "family", "investment", "community", "luxury"],
  },
  {
    id: "manual-golf-verge-at-emaar-south",
    project_name: "Golf Verge at Emaar South",
    slug: "golf-verge-at-emaar-south",
    developer_id: "manual-emaar",
    area_id: "manual-emaar-south",
    project_status: "Upcoming",
    launch_status: "Newly Launched",
    handover_quarter: null,
    handover_year: null,
    city: "Dubai",
    starting_price: 1200000,
    max_price: null,
    currency: "AED",
    property_types: ["Apartment"],
    bedroom_types: ["1BR", "2BR", "3BR"],
    investment_tags: ["Affordable Entry", "High ROI", "Investor Hotspot"],
    lifestyle_tags: ["Golf Community", "Family Friendly", "Good Connectivity"],
    amenities: ["Swimming Pool", "Gym", "Kids Play Area", "BBQ Area", "24/7 Security", "Parking"],
    hero_image: "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/HERO_1620X832_1-2.jpg",
    gallery_images: [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/PRO_EXT_1-3-1024x740.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/PRO_EXT_2-3-1024x740.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/PRO_INT_1-3-1024x740.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/03/PRO_INT_2-3-1024x740.jpg",
    ],
    brochure_url: "/brochures/emaar/golf-verge-at-emaar-south.pdf",
    floorplan_url: null,
    short_description:
      "Golf Verge at Emaar South by Emaar offers 1 to 3-bedroom luxury apartments with golf-facing views and prices from AED 1.20M.",
    full_description: null,
    investment_score: null,
    lifestyle_score: null,
    created_at: "2026-01-01T00:00:00.000Z",
    updated_at: "2026-01-01T00:00:00.000Z",
    developers: { name: "Emaar", slug: "emaar" },
    areas: { name: "Emaar South", slug: "emaar-south" },
    developerName: "Emaar",
    developerSlug: "emaar",
    areaName: "Emaar South",
    areaSlug: "emaar-south",
    propertyTypeSlugs: ["apartment"],
    route: createProjectRoute("emaar", "golf-verge-at-emaar-south"),
    tags: ["golf", "emaar south", "family", "community", "investment", "green vistas", "apartments"],
  },
  {
    id: "manual-golf-dale-at-emaar-south",
    project_name: "Golf Dale at Emaar South",
    slug: "golf-dale-at-emaar-south",
    developer_id: "manual-emaar",
    area_id: "manual-emaar-south",
    project_status: "Upcoming",
    launch_status: "Newly Launched",
    handover_quarter: null,
    handover_year: null,
    city: "Dubai",
    starting_price: 1120000,
    max_price: null,
    currency: "AED",
    property_types: ["Apartment"],
    bedroom_types: ["1BR", "2BR", "3BR"],
    investment_tags: ["Affordable Entry", "High ROI", "Investor Hotspot"],
    lifestyle_tags: ["Golf Community", "Family Friendly", "Good Connectivity"],
    amenities: ["Swimming Pool", "Gym", "Kids Play Area", "Landscaped Gardens", "24/7 Security", "Parking"],
    hero_image: "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/HERO_1620X832_1-1.jpg",
    gallery_images: [
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/PRO_EXT_1-2-1024x740.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/PRO_EXT_2-2-1024x740.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/PRO_INT_1-2-1024x740.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2024/12/PRO_INT_2-2-1024x740.jpg",
    ],
    brochure_url: "/brochures/emaar/golf-dale-at-emaar-south.pdf",
    floorplan_url: null,
    short_description:
      "Golf Dale at Emaar South by Emaar offers 1 to 3-bedroom golf-facing apartments from AED 1.12M in a premium master community.",
    full_description: null,
    investment_score: null,
    lifestyle_score: null,
    created_at: "2026-01-01T00:00:00.000Z",
    updated_at: "2026-01-01T00:00:00.000Z",
    developers: { name: "Emaar", slug: "emaar" },
    areas: { name: "Emaar South", slug: "emaar-south" },
    developerName: "Emaar",
    developerSlug: "emaar",
    areaName: "Emaar South",
    areaSlug: "emaar-south",
    propertyTypeSlugs: ["apartment"],
    route: createProjectRoute("emaar", "golf-dale-at-emaar-south"),
    tags: ["golf", "emaar south", "community", "investment", "family", "green spaces", "apartments"],
  },
  {
    id: "manual-palm-central-private-residences",
    project_name: "Palm Central Private Residences",
    slug: "palm-central-private-residences",
    developer_id: "manual-nakheel",
    area_id: "manual-palm-jumeirah",
    project_status: "Upcoming",
    launch_status: "Newly Launched",
    handover_quarter: null, // TODO: replace with official handover quarter
    handover_year: null, // TODO: replace with official handover year
    city: "Dubai",
    starting_price: null, // TODO: replace with official starting price
    max_price: null,
    currency: "AED",
    property_types: ["Apartment"],
    bedroom_types: ["1BR", "2BR", "3BR"], // TODO: verify exact unit mix
    investment_tags: ["Luxury Segment", "High Capital Appreciation", "Investor Hotspot"],
    lifestyle_tags: ["Waterfront", "Resort Style", "Popular Location", "Wellness Living"],
    amenities: ["Swimming Pool", "Gym", "Kids Play Area", "Landscaped Gardens", "24/7 Security", "Concierge"],
    hero_image: "/images/projects/nakheel/palm-central-private-residences/hero.jpg",
    gallery_images: [
      "/images/projects/nakheel/palm-central-private-residences/gallery-1.jpg",
      "/images/projects/nakheel/palm-central-private-residences/gallery-2.jpg",
      "/images/projects/nakheel/palm-central-private-residences/gallery-3.jpg",
      "/images/projects/nakheel/palm-central-private-residences/gallery-4.jpg",
    ],
    brochure_url: "/brochures/nakheel/palm-central-private-residences-brochure.pdf",
    floorplan_url: null,
    short_description:
      "Palm Central Private Residences by Nakheel is a new luxury residential release in Palm Jumeirah with curated amenities and long-term investment appeal.",
    full_description: null,
    investment_score: null,
    lifestyle_score: null,
    created_at: "2026-01-01T00:00:00.000Z",
    updated_at: "2026-01-01T00:00:00.000Z",
    developers: { name: "Nakheel", slug: "nakheel" },
    areas: { name: "Palm Jumeirah", slug: "palm-jumeirah" },
    developerName: "Nakheel",
    developerSlug: "nakheel",
    areaName: "Palm Jumeirah",
    areaSlug: "palm-jumeirah",
    propertyTypeSlugs: ["apartment"],
    route: createProjectRoute("nakheel", "palm-central-private-residences"),
    tags: ["dubai", "palm jumeirah", "luxury", "private residences", "nakheel", "investment", "family", "waterfront"],
  },
  {
    id: "manual-parkwood-at-dubai-hills-estate",
    project_name: "Parkwood at Dubai Hills Estate",
    slug: "parkwood-at-dubai-hills-estate",
    developer_id: "manual-emaar",
    area_id: "manual-dubai-hills-estate",
    project_status: "Upcoming",
    launch_status: "Newly Launched",
    handover_quarter: null,
    handover_year: null,
    city: "Dubai",
    starting_price: 1750000,
    max_price: null,
    currency: "AED",
    property_types: ["Apartment", "Townhouse"],
    bedroom_types: ["1BR", "2BR", "3BR"],
    investment_tags: ["High Capital Appreciation", "Investor Hotspot", "Luxury Segment"],
    lifestyle_tags: ["Family Friendly", "Popular Location", "Good Connectivity", "Wellness Living"],
    amenities: ["Swimming Pool", "Gym", "Kids Play Area", "BBQ Area", "Jogging Track", "24/7 Security"],
    hero_image: "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/HERO_1620X832_1-2.jpg",
    gallery_images: [
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/PRO_EXT_1-1-1024x740.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/PRO_EXT_2-1-1024x740.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/PRO_INT_1-1-1024x740.jpg",
      "https://cdn.properties.emaar.com/wp-content/uploads/2025/02/PRO_INT_2-1-1024x740.jpg",
    ],
    brochure_url: "/brochures/emaar/parkwood-at-dubai-hills-estate.pdf",
    floorplan_url: null,
    short_description:
      "Parkwood at Dubai Hills Estate by Emaar offers 1 to 3-bedroom residences and 3-bedroom townhouses from AED 1.75M in Dubai's green heart.",
    full_description: null,
    investment_score: null,
    lifestyle_score: null,
    created_at: "2026-01-01T00:00:00.000Z",
    updated_at: "2026-01-01T00:00:00.000Z",
    developers: { name: "Emaar", slug: "emaar" },
    areas: { name: "Dubai Hills Estate", slug: "dubai-hills-estate" },
    developerName: "Emaar",
    developerSlug: "emaar",
    areaName: "Dubai Hills Estate",
    areaSlug: "dubai-hills-estate",
    propertyTypeSlugs: ["apartment", "townhouse"],
    route: createProjectRoute("emaar", "parkwood-at-dubai-hills-estate"),
    tags: ["dubai hills estate", "green community", "luxury", "family", "park", "emaar", "investment"],
  },
];

export function ensureProjectContract(project: Project): ProjectDataContract {
  const developerName = project.developerName || project.developers?.name || "Unknown Developer";
  const developerSlug = project.developerSlug || project.developers?.slug || normalizeSlug(developerName);
  const areaName = project.areaName || project.areas?.name || project.city || "Dubai";
  const areaSlug = project.areaSlug || project.areas?.slug || normalizeSlug(areaName);
  const propertyTypeSlugs = project.propertyTypeSlugs || project.property_types.map(normalizeSlug);
  const route = project.route || createProjectRoute(developerSlug, project.slug);
  const tags = project.tags || [
    ...project.investment_tags.map(normalizeSlug),
    ...project.lifestyle_tags.map(normalizeSlug),
    ...project.property_types.map(normalizeSlug),
    areaSlug,
    developerSlug,
  ];

  return {
    ...project,
    developers: project.developers || { name: developerName, slug: developerSlug },
    areas: project.areas || { name: areaName, slug: areaSlug },
    developerName,
    developerSlug,
    areaName,
    areaSlug,
    propertyTypeSlugs,
    route,
    tags,
  };
}

export function filterProjectsByFilters(
  dataset: ProjectDataContract[],
  filters: ProjectFilters,
): ProjectDataContract[] {
  return dataset.filter((project) => {
    if (filters.min_price && (!project.starting_price || project.starting_price < filters.min_price)) {
      return false;
    }
    if (filters.max_price && project.starting_price && project.starting_price > filters.max_price) {
      return false;
    }
    if (filters.handover_year && project.handover_year !== filters.handover_year) {
      return false;
    }
    if (filters.areas?.length) {
      const areas = filters.areas.map((a) => a.toLowerCase());
      if (!areas.includes(project.areaName.toLowerCase())) return false;
    }
    if (filters.developers?.length) {
      const selectedDeveloperKeys = filters.developers.map((developer) =>
        normalizeDeveloperKey(developer),
      );
      const projectDeveloperKeys = [
        normalizeDeveloperKey(project.developerName),
        normalizeDeveloperKey(project.developerSlug),
        normalizeDeveloperKey(project.developers?.name || project.developerName),
        normalizeDeveloperKey(project.developers?.slug || project.developerSlug),
      ];
      if (!projectDeveloperKeys.some((key) => selectedDeveloperKeys.includes(key))) return false;
    }
    if (filters.property_types?.length && !project.property_types.some((type) => filters.property_types?.includes(type))) {
      return false;
    }
    if (filters.bedroom_types?.length && !project.bedroom_types.some((type) => filters.bedroom_types?.includes(type))) {
      return false;
    }
    if (filters.investment_tags?.length && !project.investment_tags.some((tag) => filters.investment_tags?.includes(tag))) {
      return false;
    }
    if (filters.lifestyle_tags?.length && !project.lifestyle_tags.some((tag) => filters.lifestyle_tags?.includes(tag))) {
      return false;
    }
    return true;
  });
}

export function getSupplementalAreas(dataset: ProjectDataContract[]): Area[] {
  return dataset.map((project) => ({
    id: `manual-area-${project.areaSlug}`,
    name: project.areaName,
    slug: project.areaSlug,
    description: null,
    city: project.city,
    image_url: null,
  }));
}

export function getSupplementalDevelopers(dataset: ProjectDataContract[]): Developer[] {
  return dataset.map((project) => ({
    id: `manual-developer-${project.developerSlug}`,
    name: project.developerName,
    name_ar: null,
    slug: project.developerSlug,
    logo_url: null,
    description: null,
    featured: false,
  }));
}

function validateProjectDataContract(dataset: ProjectDataContract[]) {
  if (import.meta.env.PROD) return;

  dataset.forEach((project) => {
    const required: Record<string, unknown> = {
      id: project.id,
      slug: project.slug,
      developerName: project.developerName,
      developerSlug: project.developerSlug,
      areaName: project.areaName,
      areaSlug: project.areaSlug,
      property_types: project.property_types,
      bedroom_types: project.bedroom_types,
      route: project.route,
    };

    const missing = Object.entries(required)
      .filter(([, value]) => !hasValue(value) || (Array.isArray(value) && value.length === 0))
      .map(([key]) => key);

    if (missing.length > 0) {
      console.warn(
        `[projects-data] Missing required fields for ${project.project_name}: ${missing.join(", ")}`,
      );
    }
  });
}

validateProjectDataContract(projects);
