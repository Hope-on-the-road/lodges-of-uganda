const SITE_URL = "https://lodgesofuganda.com";
const KEY = "d6348ae3cde94e872b2708d6f097f7f4";

const urls = [
  `${SITE_URL}/sitemap.xml`,
  `${SITE_URL}/blog/entebbe-to-bwindi-travel-options`,
  `${SITE_URL}/blog/uganda-gorilla-trekking-fitness-guide`,
  `${SITE_URL}/blog/best-lodges-near-entebbe-airport`,
  `${SITE_URL}/blog/rainy-season-uganda-safari-guide`,
  `${SITE_URL}/blog/uganda-safari-with-kids`,
  `${SITE_URL}/blog/golden-monkey-trekking-mgahinga`,
  `${SITE_URL}/blog/boat-safari-kazinga-channel-guide`,
  `${SITE_URL}/blog/uganda-vs-tanzania-safari-comparison`,
  `${SITE_URL}/blog/birding-in-uganda-top-spots`,
  `${SITE_URL}/blog/overnight-safari-vs-day-trip-uganda`,
  `${SITE_URL}/blog/bwindi-sectors-compared`,
  `${SITE_URL}/blog/uganda-packing-list`,
  `${SITE_URL}/blog/uganda-safari-cost-guide`,
  `${SITE_URL}/blog/is-uganda-safe-for-tourists`,
  `${SITE_URL}/blog/trackers-safari-lodge-visit`,
  `${SITE_URL}/blog/vegetarian-travel-uganda`,
  `${SITE_URL}/blog/food-uganda-safari-lodges`,
  `${SITE_URL}/blog/best-time-book-uganda-lodge`,
  `${SITE_URL}/blog/where-to-stay-uganda`,
  `${SITE_URL}/blog/hotel-occupancy-uganda`,
  `${SITE_URL}/blog/eco-tourism-uganda`,
  `${SITE_URL}/blog/best-lodges-murchison-falls`,
  `${SITE_URL}/lodges-uganda`,
  `${SITE_URL}/uganda-safari-operators`,
  `${SITE_URL}/turigye-tours`,
  `${SITE_URL}/nturo-safaris-buhoma`,
  `${SITE_URL}/deks-safaris-murchison`,
  `${SITE_URL}/kampala-roads-uganda`,
  `${SITE_URL}/best-lodges-uganda`,
  `${SITE_URL}/safari-lodges-uganda`,
  `${SITE_URL}/lodges-bwindi-gorilla-trekking`,
];

const body = {
  host: "lodgesofuganda.com",
  key: KEY,
  keyLocation: `${SITE_URL}/${KEY}.txt`,
  urlList: urls,
};

async function ping(engine, endpoint) {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    console.log(`${engine}: ${res.status} ${res.statusText}`);
  } catch (err) {
    console.error(`${engine}: ${err.message}`);
  }
}

await Promise.all([
  ping("IndexNow (Bing)", "https://api.indexnow.org/indexnow"),
  ping("Yandex", "https://yandex.com/indexnow"),
  ping("Seznam", "https://search.seznam.cz/indexnow"),
]);

console.log("\nGoogle Sitemap ping:");
try {
  const res = await fetch(
    `https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`
  );
  console.log(`Google: ${res.status} ${res.statusText}`);
} catch (err) {
  console.error(`Google: ${err.message}`);
}

console.log("\nDone. URLs submitted for indexing.");
