
INSERT INTO public.projects (
  developer_id, area_id, project_name, slug, city, currency,
  launch_status, project_status, handover_quarter, handover_year,
  starting_price, property_types, bedroom_types,
  investment_tags, lifestyle_tags, amenities,
  investment_score, lifestyle_score,
  short_description, full_description
)
VALUES (
  '08717afe-6ecf-48c2-ae08-956da546bf77',
  'e1c065e7-6def-4efd-b0ba-d3c77a4bfbcc',
  'Verdes by Haven',
  'verdes-by-haven',
  'Dubai',
  'AED',
  'Newly Launched',
  'Active',
  'Q2',
  2028,
  990000,
  ARRAY['Apartment', 'Duplex']::property_type[],
  ARRAY['1BR', '2BR', '3BR']::bedroom_type[],
  ARRAY['High Capital Appreciation', 'High ROI']::investment_tag[],
  ARRAY['Family Friendly', 'Wellness Living', 'Gated Community']::lifestyle_tag[],
  ARRAY['Spa', 'Yoga Deck', 'Gym', 'Swimming Pool', 'Kids Play Area', 'Jogging Track', 'Landscaped Gardens', 'Co-working Space', 'Concierge', 'Retail Outlets', 'Parking']::amenity_type[],
  4,
  5,
  'Verdes by Haven is a wellness-focused residential development by Aldar Properties in Dubailand, offering eco-friendly 1 to 3 bedroom apartments and duplexes starting from AED 990,000 with handover in Q2 2028.',
  'Verdes by Haven in UAE is the latest premium residential development by Aldar Properties. Situated in the Haven community within the Dubai Land (Dubailand) area, the project offers a unique blend of luxury and comfort in a wellness-inspired community.

The complex features 1- to 3-bedroom apartments, designed with eco-friendly materials, energy-efficient technologies and well-thought-out waste disposal systems. At Verdes by Haven, prices from the developer start at AED 990,000.

Residents will enjoy a wide range of amenities, including concierge service, co-working spaces, 24-hour gym, adult and children''s swimming pool, outdoor fitness areas, running and cycling tracks, spa room facilities, yoga and meditation pavilions.

The property also includes a school, kindergarten, park, mosque, café, clinic and shopping centre. Verdes by Haven is scheduled for completion in Q2 2028.

Investing in property in this new project presents excellent profit opportunities. The Dubailand area offers high ROI, potentially reaching 9.12% annually for 1-bedroom apartments. The developer offers a flexible payment plan: 60% paid in instalments during construction and 40% upon completion.'
);
