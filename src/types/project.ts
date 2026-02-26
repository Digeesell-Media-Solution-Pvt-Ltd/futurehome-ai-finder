// CMS Types matching database schema

export type ProjectStatus = 'Active' | 'Sold Out' | 'Upcoming' | 'On Hold' | 'Completed';
export type LaunchStatus = 'Pre-Launch' | 'Newly Launched' | 'Under Construction' | 'Ready to Move' | 'Handover Complete';
export type HandoverQuarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';

export type PropertyType = 'Apartment' | 'Villa' | 'Townhouse' | 'Penthouse' | 'Duplex' | 'Office' | 'Retail' | 'Land' | 'Mansion';
export type BedroomType = 'Studio' | '1BR' | '2BR' | '3BR' | '4BR' | '5BR+';

export type InvestmentTag =
  | 'High ROI' | 'High Capital Appreciation' | 'Rental Income Focused' | 'Affordable Entry'
  | 'Luxury Segment' | 'Branded Residences' | 'Limited Units' | 'Investor Hotspot';

export type LifestyleTag =
  | 'Waterfront' | 'Beachfront' | 'Golf Community' | 'Family Friendly' | 'Gated Community'
  | 'Popular Location' | 'Metro Access' | 'Good Connectivity' | 'Smart Home' | 'Wellness Living'
  | 'Resort Style' | 'Island Living' | 'City View' | 'Skyline View';

export type AmenityType =
  | 'Swimming Pool' | 'Infinity Pool' | 'Gym' | 'Kids Play Area' | 'BBQ Area'
  | 'Landscaped Gardens' | 'Beach Access' | 'Clubhouse' | 'Co-working Space' | 'Retail Outlets'
  | 'Smart Home System' | 'Concierge' | '24/7 Security' | 'Parking' | 'Jogging Track'
  | 'Spa' | 'Yoga Deck';

export type Project = {
  id: string;
  project_name: string;
  slug: string;
  developer_id: string;
  area_id: string | null;
  project_status: ProjectStatus;
  launch_status: LaunchStatus;
  handover_quarter: HandoverQuarter | null;
  handover_year: number | null;
  city: string;
  starting_price: number | null;
  max_price: number | null;
  currency: string;
  property_types: PropertyType[];
  bedroom_types: BedroomType[];
  investment_tags: InvestmentTag[];
  lifestyle_tags: LifestyleTag[];
  amenities: AmenityType[];
  hero_image: string | null;
  gallery_images: string[];
  brochure_url: string | null;
  floorplan_url: string | null;
  short_description: string | null;
  full_description: string | null;
  investment_score: number | null;
  lifestyle_score: number | null;
  created_at: string;
  updated_at: string;
  // Joined fields
  developers?: { name: string; slug: string };
  areas?: { name: string; slug: string } | null;
  // Normalized frontend contract fields
  developerName?: string;
  developerSlug?: string;
  areaName?: string;
  areaSlug?: string;
  propertyTypeSlugs?: string[];
  route?: string;
  tags?: string[];
}

export type ProjectDataContract = Project & {
  developers: { name: string; slug: string };
  areas: { name: string; slug: string };
  developerName: string;
  developerSlug: string;
  areaName: string;
  areaSlug: string;
  propertyTypeSlugs: string[];
  route: string;
  tags: string[];
};

export interface Area {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  city: string;
  image_url: string | null;
}

export interface Developer {
  id: string;
  name: string;
  name_ar: string | null;
  slug: string;
  logo_url: string | null;
  description: string | null;
  featured: boolean;
}

export interface ProjectFilters {
  areas?: string[];
  developers?: string[];
  property_types?: PropertyType[];
  bedroom_types?: BedroomType[];
  min_price?: number;
  max_price?: number;
  handover_year?: number;
  investment_tags?: InvestmentTag[];
  lifestyle_tags?: LifestyleTag[];
}

// Controlled values for filter dropdowns
export const PROPERTY_TYPES: PropertyType[] = ['Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Duplex', 'Office', 'Retail', 'Land', 'Mansion'];
export const BEDROOM_TYPES: BedroomType[] = ['Studio', '1BR', '2BR', '3BR', '4BR', '5BR+'];
export const INVESTMENT_TAGS: InvestmentTag[] = ['High ROI', 'High Capital Appreciation', 'Rental Income Focused', 'Affordable Entry', 'Luxury Segment', 'Branded Residences', 'Limited Units', 'Investor Hotspot'];
export const LIFESTYLE_TAGS: LifestyleTag[] = ['Waterfront', 'Beachfront', 'Golf Community', 'Family Friendly', 'Gated Community', 'Popular Location', 'Metro Access', 'Good Connectivity', 'Smart Home', 'Wellness Living', 'Resort Style', 'Island Living', 'City View', 'Skyline View'];
export const HANDOVER_YEARS = [2025, 2026, 2027, 2028, 2029, 2030];
