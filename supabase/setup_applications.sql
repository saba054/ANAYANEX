-- Create applications table in public schema
create table if not exists public.applications (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  phone text,
  position text not null,
  linkedin text,
  portfolio text,
  cover_letter text,
  resume_url text not null,
  created_at timestamptz not null default now()
);

-- Optional: basic RLS setup (disable for service role workflows, or define policies as needed)
alter table public.applications enable row level security;

-- Example permissive policy for reads (adjust to your needs)
do $$ begin
  if not exists (
    select 1 from pg_policy
    where polname = 'applications_read_policy'
      and schemaname = 'public'
      and tablename = 'applications'
  ) then
    create policy applications_read_policy on public.applications
      for select
      using (true);
  end if;
end $$;

-- Example permissive policy for inserts (service role can insert regardless of policy, but this helps with anon testing)
do $$ begin
  if not exists (
    select 1 from pg_policy
    where polname = 'applications_insert_policy'
      and schemaname = 'public'
      and tablename = 'applications'
  ) then
    create policy applications_insert_policy on public.applications
      for insert
      with check (true);
  end if;
end $$;