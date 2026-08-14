/*
# Create success_stories table

1. New Tables
- `success_stories`
  - `id` (uuid, primary key)
  - `title` (text, not null) — project title
  - `subtitle` (text) — optional subtitle/tagline
  - `location` (text) — project location
  - `client` (text) — client name
  - `scope` (text) — project scope description
  - `impact` (text) — project impact description
  - `key_facts` (text[]) — array of key fact strings
  - `category` (text) — category tag (Energy, Buildings, Oil & Gas, Process)
  - `image_url` (text) — optional image URL
  - `sort_order` (integer) — display ordering
  - `created_at` (timestamptz)

2. Security
- Enable RLS on `success_stories`.
- Allow anon + authenticated to read (public data).
- Allow anon + authenticated to insert/update/delete (admin actions, no auth required for now).
*/

CREATE TABLE IF NOT EXISTS success_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subtitle text,
  location text,
  client text,
  scope text,
  impact text,
  key_facts text[],
  category text,
  image_url text,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_success_stories" ON success_stories;
CREATE POLICY "anon_select_success_stories" ON success_stories FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_success_stories" ON success_stories;
CREATE POLICY "anon_insert_success_stories" ON success_stories FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_success_stories" ON success_stories;
CREATE POLICY "anon_update_success_stories" ON success_stories FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_success_stories" ON success_stories;
CREATE POLICY "anon_delete_success_stories" ON success_stories FOR DELETE
TO anon, authenticated USING (true);
