// src/utils/saveHotels.js
import { supabase } from "./supabaseClient";

export async function saveHotelsToSupabase(hotels) {
  const { data, error } = await supabase.from("stays").insert(hotels);
  if (error) console.error("Insert error:", error);
  return { data, error };
}
