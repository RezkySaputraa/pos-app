import { createClient } from "@supabase/supabase-js";
import environment from "@/config/environment";

const supabase = createClient(
  environment.NEXT_PUBLIC_SUPABASE_URL ?? "",
  environment.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
);

export default supabase;
