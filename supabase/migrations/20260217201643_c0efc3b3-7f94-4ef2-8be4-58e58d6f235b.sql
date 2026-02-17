
-- =============================================
-- STEP 1: AREAS TABLE
-- =============================================
CREATE TABLE public.areas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  city TEXT NOT NULL DEFAULT 'Dubai',
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.areas ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Areas are publicly readable" ON public.areas FOR SELECT USING (true);

CREATE INDEX idx_areas_slug ON public.areas (slug);
CREATE INDEX idx_areas_name ON public.areas (name);

-- =============================================
-- STEP 2: DEVELOPERS TABLE
-- =============================================
CREATE TABLE public.developers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  name_ar TEXT,
  slug TEXT NOT NULL UNIQUE,
  logo_url TEXT,
  description TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.developers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Developers are publicly readable" ON public.developers FOR SELECT USING (true);

CREATE INDEX idx_developers_slug ON public.developers (slug);
CREATE INDEX idx_developers_name ON public.developers (name);
CREATE INDEX idx_developers_featured ON public.developers (featured) WHERE featured = true;

-- =============================================
-- STEP 3: PROJECTS TABLE (Master CMS)
-- =============================================

-- Define ENUM types for controlled values
CREATE TYPE project_status AS ENUM (
  'Active', 'Sold Out', 'Upcoming', 'On Hold', 'Completed'
);

CREATE TYPE launch_status AS ENUM (
  'Pre-Launch', 'Newly Launched', 'Under Construction', 'Ready to Move', 'Handover Complete'
);

CREATE TYPE handover_quarter AS ENUM ('Q1', 'Q2', 'Q3', 'Q4');

CREATE TYPE property_type AS ENUM (
  'Apartment', 'Villa', 'Townhouse', 'Penthouse', 'Duplex', 'Office', 'Retail', 'Land', 'Mansion'
);

CREATE TYPE bedroom_type AS ENUM (
  'Studio', '1BR', '2BR', '3BR', '4BR', '5BR+'
);

CREATE TYPE investment_tag AS ENUM (
  'High ROI', 'High Capital Appreciation', 'Rental Income Focused', 'Affordable Entry',
  'Luxury Segment', 'Branded Residences', 'Limited Units', 'Investor Hotspot'
);

CREATE TYPE lifestyle_tag AS ENUM (
  'Waterfront', 'Beachfront', 'Golf Community', 'Family Friendly', 'Gated Community',
  'Popular Location', 'Metro Access', 'Good Connectivity', 'Smart Home', 'Wellness Living',
  'Resort Style', 'Island Living', 'City View', 'Skyline View'
);

CREATE TYPE amenity_type AS ENUM (
  'Swimming Pool', 'Infinity Pool', 'Gym', 'Kids Play Area', 'BBQ Area',
  'Landscaped Gardens', 'Beach Access', 'Clubhouse', 'Co-working Space', 'Retail Outlets',
  'Smart Home System', 'Concierge', '24/7 Security', 'Parking', 'Jogging Track',
  'Spa', 'Yoga Deck'
);

CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Basic Information
  project_name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  developer_id UUID NOT NULL REFERENCES public.developers(id) ON DELETE RESTRICT,
  area_id UUID REFERENCES public.areas(id) ON DELETE SET NULL,
  project_status project_status NOT NULL DEFAULT 'Active',
  launch_status launch_status NOT NULL DEFAULT 'Under Construction',
  handover_quarter handover_quarter,
  handover_year INTEGER,
  city TEXT NOT NULL DEFAULT 'Dubai',

  -- Pricing (numeric only)
  starting_price BIGINT,
  max_price BIGINT,
  currency TEXT NOT NULL DEFAULT 'AED',

  -- Property Details (arrays of enums)
  property_types property_type[] NOT NULL DEFAULT '{}',
  bedroom_types bedroom_type[] NOT NULL DEFAULT '{}',

  -- Tags (controlled lists)
  investment_tags investment_tag[] NOT NULL DEFAULT '{}',
  lifestyle_tags lifestyle_tag[] NOT NULL DEFAULT '{}',

  -- Amenities
  amenities amenity_type[] NOT NULL DEFAULT '{}',

  -- Media
  hero_image TEXT,
  gallery_images TEXT[] NOT NULL DEFAULT '{}',
  brochure_url TEXT,
  floorplan_url TEXT,

  -- Descriptions
  short_description TEXT,
  full_description TEXT,

  -- Scoring (optional, architecture-ready)
  investment_score SMALLINT CHECK (investment_score >= 1 AND investment_score <= 5),
  lifestyle_score SMALLINT CHECK (lifestyle_score >= 1 AND lifestyle_score <= 5),

  -- Timestamps
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Projects are publicly readable" ON public.projects FOR SELECT USING (true);

-- Performance indexes for filtering
CREATE INDEX idx_projects_slug ON public.projects (slug);
CREATE INDEX idx_projects_developer ON public.projects (developer_id);
CREATE INDEX idx_projects_area ON public.projects (area_id);
CREATE INDEX idx_projects_status ON public.projects (project_status);
CREATE INDEX idx_projects_price ON public.projects (starting_price);
CREATE INDEX idx_projects_handover ON public.projects (handover_year);
CREATE INDEX idx_projects_property_types ON public.projects USING GIN (property_types);
CREATE INDEX idx_projects_bedroom_types ON public.projects USING GIN (bedroom_types);
CREATE INDEX idx_projects_investment_tags ON public.projects USING GIN (investment_tags);
CREATE INDEX idx_projects_lifestyle_tags ON public.projects USING GIN (lifestyle_tags);
CREATE INDEX idx_projects_amenities ON public.projects USING GIN (amenities);

-- =============================================
-- STEP 4: AUTO-UPDATE TIMESTAMPS
-- =============================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_areas_updated_at
  BEFORE UPDATE ON public.areas FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_developers_updated_at
  BEFORE UPDATE ON public.developers FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
