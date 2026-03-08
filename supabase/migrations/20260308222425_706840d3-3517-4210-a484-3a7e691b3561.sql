
-- Insert Nshama developer
INSERT INTO public.developers (id, name, slug, description, featured)
VALUES (
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'Nshama',
  'nshama',
  'Nshama is a leading Dubai-based developer known for creating vibrant, community-driven residential developments including the iconic Town Square Dubai master community.',
  true
);

-- Insert Town Square Dubai area
INSERT INTO public.areas (id, name, slug, city, description)
VALUES (
  'b2c3d4e5-f6a7-8901-bcde-f12345678901',
  'Town Square Dubai',
  'town-square-dubai',
  'Dubai',
  'Town Square Dubai is a vibrant mixed-use master community by Nshama featuring parks, retail, dining, and family-friendly residential living in a green, connected environment.'
);

-- Insert OLBIA project
INSERT INTO public.projects (
  developer_id, area_id, project_name, slug, city,
  launch_status, project_status,
  property_types, bedroom_types,
  amenities,
  investment_tags, lifestyle_tags,
  investment_score, lifestyle_score,
  short_description, full_description
)
VALUES (
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'b2c3d4e5-f6a7-8901-bcde-f12345678901',
  'OLBIA',
  'olbia',
  'Dubai',
  'Newly Launched',
  'Active',
  ARRAY['Apartment', 'Duplex']::property_type[],
  ARRAY['1BR', '2BR', '3BR']::bedroom_type[],
  ARRAY['Landscaped Gardens', 'Jogging Track', 'Swimming Pool', 'Gym', 'Kids Play Area', 'Retail Outlets', 'Parking']::amenity_type[],
  ARRAY['High Capital Appreciation', 'Affordable Entry']::investment_tag[],
  ARRAY['Family Friendly', 'Popular Location']::lifestyle_tag[],
  4, 4,
  'OLBIA by Nshama is a contemporary residential development in Town Square Dubai featuring 1, 2 and 3-bedroom apartments alongside spacious 3-bedroom duplexes. The project is positioned near The Promenade and surrounded by green spaces, lifestyle amenities, and a thriving family-oriented community.',
  'OLBIA by Nshama brings refined, contemporary living to the heart of Town Square Dubai — one of the city''s most vibrant and well-connected master communities.

The development offers a curated selection of 1, 2 and 3-bedroom apartments alongside expansive 3-bedroom duplexes, designed for families, professionals and investors seeking a lifestyle-led community experience.

Positioned just steps from The Promenade, OLBIA residents enjoy effortless access to open green spaces, boutique retail, dining destinations, and the energy of a thriving neighbourhood. Town Square Park is within walking distance, with kilometres of jogging, cycling and walking trails right at your doorstep.

The community offers an impressive range of amenities including swimming pools, fully equipped gymnasiums, children''s playgrounds, skateboard and wave rider facilities, and modern conveniences such as schools, hospitals, and mosques — all within the master community.

With its emphasis on green living, connectivity, and family-friendly design, OLBIA represents one of the most compelling lifestyle propositions in Dubai''s off-plan market.'
);
