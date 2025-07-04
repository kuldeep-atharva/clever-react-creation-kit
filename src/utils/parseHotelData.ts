// src/utils/parseHotelData.js
export function extractHotels(text, sourceUrl) {
  const hotelRegex = /(?:Hotel|Stay|B&B)\s*[:\-]?\s*([^.\n]+)/gi;
  const locationRegex = /in\s([A-Z][a-z]+(?:, [A-Z][a-z]+)?)/gi;
  const priceRegex = /(€\d{2,3}(?:–|-| to )?\d{0,3})\/?night/gi;

  const results = [];
  let match;
  while ((match = hotelRegex.exec(text))) {
    results.push({
      hotel_name: match[1]?.trim() || "",
      location: locationRegex.exec(text)?.[1] || "",
      price_range: priceRegex.exec(text)?.[1] || "",
      type: match[0].includes("B&B") ? "B&B" : "Hotel",
      source_url: sourceUrl,
    });
  }

  return results;
}
