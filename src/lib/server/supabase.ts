import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public";

const supabase = createClient('https://pmtwnaoblvfsrckhnget.supabase.co', PUBLIC_SUPABASE_ANON_KEY);

export default supabase;
