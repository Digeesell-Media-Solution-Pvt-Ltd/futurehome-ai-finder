
INSERT INTO storage.buckets (id, name, public) VALUES ('onboarding-files', 'onboarding-files', false);

CREATE POLICY "Allow public uploads to onboarding-files"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'onboarding-files');

CREATE POLICY "Allow public reads from onboarding-files"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'onboarding-files');

CREATE TABLE public.project_onboarding (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  poc_name text NOT NULL,
  poc_email text NOT NULL,
  poc_phone text NOT NULL,
  developer_name text NOT NULL,
  project_name text NOT NULL,
  image_urls text[] NOT NULL DEFAULT '{}'::text[],
  brochure_url text,
  floorplan_url text,
  priceplan_url text,
  consent_given boolean NOT NULL DEFAULT false
);

ALTER TABLE public.project_onboarding ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit onboarding"
ON public.project_onboarding FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Service role reads onboarding"
ON public.project_onboarding FOR SELECT
TO public
USING (false);
