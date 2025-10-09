-- Run this in your Supabase SQL editor (Project → SQL)
create table if not exists public.contacts (
  id bigserial primary key,
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- If you use Row Level Security (recommended), keep it enabled.
-- Inserts via the Service Role Key bypass RLS, so the API route will continue to work.
alter table public.contacts enable row level security;