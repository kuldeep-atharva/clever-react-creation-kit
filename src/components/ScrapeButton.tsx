// src/components/ScrapeButton.jsx
import { scrapeGuardian } from "@/utils/firecrawl";
import { extractHotels } from "@/utils/parseHotelData";
import { saveHotelsToSupabase } from "@/utils/saveHotels";

export default function ScrapeButton() {
  const runScraper = async () => {
    const url = "https://www.theguardian.com/travel/2025/jun/27/10-best-boutique-hotels-ireland";

    const result = await scrapeGuardian(url);
    console.log("Scraped data:", result);

    // const text = result.text || result.content || "";
    // const hotels = extractHotels(text, url);

    // if (hotels.length > 0) {
    //   const { error } = await saveHotelsToSupabase(hotels);
    //   if (!error) alert("Hotels saved to Supabase!");
    // } else {
    //   alert("No hotel data found.");
    // }
  };

  return <button onClick={runScraper}>Scrape Guardian Article</button>;
}
