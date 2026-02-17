
-- Create leads table for form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_country_code TEXT NOT NULL DEFAULT '+971',
  phone_number TEXT NOT NULL,
  requirement TEXT,
  project_name TEXT,
  cta_type TEXT NOT NULL DEFAULT 'General',
  download_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form)
CREATE POLICY "Anyone can submit a lead"
  ON public.leads
  FOR INSERT
  WITH CHECK (true);

-- Only service role can read leads (for CRM export)
CREATE POLICY "Service role can read leads"
  ON public.leads
  FOR SELECT
  USING (false);
