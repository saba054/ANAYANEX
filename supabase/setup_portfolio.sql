-- Portfolio projects table
create table if not exists public.portfolio_projects (
  id bigserial primary key,
  title text not null,
  category text not null,
  description text not null,
  image text not null, -- store public URL/path (e.g., /assets/images/...)
  technologies text[] not null default '{}',
  client text not null,
  duration text not null,
  year text not null,
  created_at timestamptz not null default now()
);

-- Optional: index for category filtering
create index if not exists portfolio_projects_category_idx on public.portfolio_projects (category);

-- Optional: enable RLS (server-side API uses service role key and bypasses RLS)
alter table public.portfolio_projects enable row level security;

-- Seed sample data to verify (edit as you like)
insert into public.portfolio_projects (title, category, description, image, technologies, client, duration, year)
values
('E-Commerce Platform', 'web', 'A comprehensive e-commerce solution with advanced analytics and inventory management.', '/assets/images/work2-img1.webp', ARRAY['React','Node.js','MongoDB','AWS'], 'TechCorp Inc.', '6 months', '2024'),
('Mobile Banking App', 'mobile', 'Secure mobile banking application with biometric authentication and real-time transactions.', '/assets/images/work2-img2.webp', ARRAY['React Native','Firebase','Blockchain','AI'], 'SecureBank', '8 months', '2024'),
('Cloud Infrastructure Migration', 'cloud', 'Migration of legacy systems to modern cloud infrastructure with 99.9% uptime.', '/assets/images/work2-img3.webp', ARRAY['AWS','Docker','Kubernetes','Terraform'], 'Enterprise Solutions', '4 months', '2023');