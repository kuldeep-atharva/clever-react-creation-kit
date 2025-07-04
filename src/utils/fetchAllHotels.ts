import { supabase } from "./supabaseClient";

export const hotelData = async () => {
  const { data, error } = await supabase
    .from("stays")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }

  const updatedJson = data.map((hotel) => {
    return {
      id: hotel.id,
      name: hotel.name,
      location: hotel.location,
      category: hotel.source,
      priceRange: hotel.price_range,
      image: hotel.photos?.[0]?.url,
      description: hotel.description,
      type: hotel.kind,
      source: hotel.source,
      readURL: hotel.article_url,
      bookURL: hotel.direct_url,
    };
  });

  return updatedJson;
}
