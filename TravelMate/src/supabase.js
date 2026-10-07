import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://swzycxjwpqyqkwehukci.supabase.co";
const supabaseKey = "sb_publishable_S5LzOm9jmwedFwhxlnNoFQ_CuYmy_ha";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);