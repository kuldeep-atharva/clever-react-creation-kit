// src/utils/firecrawl.js
// export async function scrapeGuardian(url) {
//   const response = await fetch("https://api.firecrawl.dev/v1/crawl", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer fc-71788e9a95a646c38b4024d053256e4c`,
//     },
//     body: JSON.stringify({
//       url: "https://www.theguardian.com/travel/2025/jun/27/10-best-boutique-hotels-ireland",
//       // type: "article"  // instead of options.extractType
//     }),
//   });

//   const result = await response.json();
//   console.log(result);
//   return result;
// }

export async function scrapeGuardian(url) {
  const response = await fetch("https://api.firecrawl.dev/v1/crawl", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer fc-71788e9a95a646c38b4024d053256e4c`,
    },
    body: JSON.stringify({
      url: url,
      // type: "article", // or "list" or "webpage"
      // depth: 1, // how many levels of links to follow
      // maxPages: 5, // limit total pages to crawl
    }),
  });

  const data = await response.json();
  console.log("data", data); // array of crawled pages
  return data;
}
