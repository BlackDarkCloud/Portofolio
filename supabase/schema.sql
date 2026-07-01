-- Run this once in your Supabase project: SQL Editor -> New query -> paste -> Run

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  summary text not null,
  description text,
  tech_stack text[] not null default '{}',
  image_url text,
  live_url text,
  repo_url text,
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table projects enable row level security;

-- Anyone can read projects (it's a public portfolio).
create policy "Public read access" on projects
  for select using (true);

-- Only a signed-in user (you) can insert, update, delete.
create policy "Authenticated write access" on projects
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Storage bucket for project cover images.
insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

create policy "Public read project images" on storage.objects
  for select using (bucket_id = 'project-images');

create policy "Authenticated upload project images" on storage.objects
  for insert with check (bucket_id = 'project-images' and auth.role() = 'authenticated');

create policy "Authenticated update project images" on storage.objects
  for update using (bucket_id = 'project-images' and auth.role() = 'authenticated');

create policy "Authenticated delete project images" on storage.objects
  for delete using (bucket_id = 'project-images' and auth.role() = 'authenticated');
