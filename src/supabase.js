import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ckkexfuowxhwesljgiii.supabase.co";
const supabaseKey = "sb_publishable_IX9YZf7e3DFB0ipWJDsB_w_-kPz3RH7";

export const supabase = createClient(supabaseUrl, supabaseKey);