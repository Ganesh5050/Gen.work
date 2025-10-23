-- DROP EVERYTHING FIRST (clean slate)
DROP POLICY IF EXISTS "Allow public insert demo_requests" ON demo_requests;
DROP POLICY IF EXISTS "Allow public insert access_requests" ON access_requests;
DROP POLICY IF EXISTS "Allow service role all operations on demo_requests" ON demo_requests;
DROP POLICY IF EXISTS "Allow service role all operations on access_requests" ON access_requests;

DROP TABLE IF EXISTS demo_requests CASCADE;
DROP TABLE IF EXISTS access_requests CASCADE;

-- Create demo_requests table
CREATE TABLE demo_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  job_title VARCHAR(255),
  department VARCHAR(255),
  needs TEXT,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'scheduled', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create access_requests table
CREATE TABLE access_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  company_size VARCHAR(100),
  primary_use_case TEXT,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'contacted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_demo_requests_email ON demo_requests(email);
CREATE INDEX idx_demo_requests_status ON demo_requests(status);
CREATE INDEX idx_demo_requests_created_at ON demo_requests(created_at DESC);

CREATE INDEX idx_access_requests_email ON access_requests(email);
CREATE INDEX idx_access_requests_status ON access_requests(status);
CREATE INDEX idx_access_requests_created_at ON access_requests(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE access_requests ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public inserts (for form submissions)
CREATE POLICY "Allow public insert demo_requests" ON demo_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert access_requests" ON access_requests
  FOR INSERT WITH CHECK (true);

-- Create policies to allow service role all operations (for admin panel)
CREATE POLICY "Allow service role all operations on demo_requests" ON demo_requests
  FOR ALL USING (true);

CREATE POLICY "Allow service role all operations on access_requests" ON access_requests
  FOR ALL USING (true);

