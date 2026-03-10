-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    company_name TEXT,
    phone TEXT,
    email TEXT NOT NULL,
    service TEXT,
    company_info TEXT NOT NULL,
    status TEXT DEFAULT 'pending'::text,
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public to insert (anyone can submit the form)
CREATE POLICY "Allow public to insert contact submissions" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow authenticated users (admin) to view/manage
CREATE POLICY "Allow authenticated users to view submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated 
USING (true);

-- Index for performance
CREATE INDEX IF NOT EXISTS contact_submissions_email_idx ON public.contact_submissions (email);
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON public.contact_submissions (created_at DESC);