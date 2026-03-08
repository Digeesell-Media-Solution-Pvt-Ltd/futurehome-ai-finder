
-- Insert Dubai South Properties developer
INSERT INTO public.developers (id, name, slug, description, featured)
VALUES (
  'c3d4e5f6-a7b8-9012-cdef-234567890123',
  'Dubai South Properties',
  'dubai-south-properties',
  'Dubai South Properties is the real estate development arm of Dubai South, creating master-planned communities centered around wellness, connectivity, and modern family living near Al Maktoum International Airport.',
  true
);

-- Insert HAYAT by Dubai South project
INSERT INTO public.projects (
  developer_id, area_id, project_name, slug, city,
  launch_status, project_status,
  property_types, bedroom_types,
  amenities,
  investment_tags, lifestyle_tags,
  investment_score, lifestyle_score,
  brochure_url,
  short_description, full_description
)
VALUES (
  'c3d4e5f6-a7b8-9012-cdef-234567890123',
  '42061db7-6ddb-4ffe-be0c-5ee717825e39',
  'HAYAT by Dubai South',
  'hayat-dubai-south',
  'Dubai',
  'Newly Launched',
  'Active',
  ARRAY['Townhouse', 'Villa']::property_type[],
  ARRAY['3BR', '4BR', '5BR+']::bedroom_type[],
  ARRAY['Swimming Pool', 'Gym', 'Kids Play Area', 'Landscaped Gardens', 'Jogging Track', 'Retail Outlets', 'Parking', '24/7 Security', 'Clubhouse']::amenity_type[],
  ARRAY['High Capital Appreciation', 'Affordable Entry', 'Investor Hotspot']::investment_tag[],
  ARRAY['Family Friendly', 'Gated Community', 'Good Connectivity']::lifestyle_tag[],
  4, 5,
  '/brochures/dubai-south-properties/hayat-dubai-south.pdf',
  'HAYAT by Dubai South is a wellness-oriented master-planned townhouse community spanning 10 million square meters near Al Maktoum International Airport, offering 3, 4 and 5-bedroom townhouses with lush parks, lakes, and resort-style amenities.',
  'HAYAT by Dubai South Properties is a visionary master-planned community that redefines modern family living in Dubai. Spanning 10 million square meters within the Dubai South district, this wellness-oriented development offers beautifully crafted townhouses in 3, 4 and 5-bedroom configurations, including semi-detached villas.

Strategically positioned adjacent to the Golf District with seamless access to Emirates Road and Sheikh Mohammed bin Zayed Road, HAYAT places residents minutes from Al Maktoum International Airport and key economic hubs including Jebel Ali Free Zone and Dubai South Free Zone.

The community embraces minimalist architecture guided by nature, with each townhouse maximising privacy while remaining part of a vibrant, walkable neighbourhood. Residents enjoy lush community parks, shaded walking trails, swimming pools, fitness facilities, children''s play areas, a community mall, retail boulevard, and a swimmable lagoon — all within a gated, green environment designed for balanced, modern living.

HAYAT comprises two phases — HAYAT 4 and HAYAT 5 — offering over 200 townhouse units across various configurations with generous land plots, built-up areas, and private gardens ranging from 575 to 4,500+ square feet.'
);
