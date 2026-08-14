import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type SuccessStory = {
  id: number;
  title: string;
  subtitle: string | null;
  location: string | null;
  client: string | null;
  scope: string | null;
  impact: string | null;
  key_facts: string[] | null;
  featured: boolean;
  category: string | null;
  image_url: string | null;
  sort_order: number;
  created_at: string;
};

export type Vacancies = {
  id: number;
  title: string;
  location: string;
  employment_type: string;
  department: string;
  description: string;
  sort_order: number;
  created_at: string;
};

export type ContactMessage = {
  id: string;
  created_at: string;

  first_name: string;
  last_name: string;
  company: string;
  email: string;
  phone: string | null;

  subject: string;
  message: string;

  status: string;
};


