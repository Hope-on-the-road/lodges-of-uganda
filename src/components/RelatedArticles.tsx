import Link from "next/link";

interface Article {
  slug: string;
  title: string;
}

const BLOG_ARTICLES: Article[] = [
  { slug: "entebbe-to-bwindi-travel-options", title: "Entebbe to Bwindi: How to Get There (Flights, Road, Costs)" },
  { slug: "uganda-gorilla-trekking-fitness-guide", title: "How Fit Do You Need to Be for Gorilla Trekking in Uganda?" },
  { slug: "best-lodges-near-entebbe-airport", title: "Best Lodges Near Entebbe Airport for Your First or Last Night" },
  { slug: "rainy-season-uganda-safari-guide", title: "Uganda Safari in the Rainy Season: Worth It?" },
  { slug: "uganda-safari-with-kids", title: "Uganda Safari with Kids: What Works and What Doesn't" },
  { slug: "golden-monkey-trekking-mgahinga", title: "Golden Monkey Trekking in Mgahinga: Everything You Need to Know" },
  { slug: "boat-safari-kazinga-channel-guide", title: "Kazinga Channel Boat Safari: What to Expect" },
  { slug: "uganda-vs-tanzania-safari-comparison", title: "Uganda vs Tanzania Safari: Which Is Better for You?" },
  { slug: "birding-in-uganda-top-spots", title: "Birding in Uganda: 8 Best Spots for Birdwatching" },
  { slug: "overnight-safari-vs-day-trip-uganda", title: "Overnight Safari vs Day Trip in Uganda: Which Is Worth It?" },
  { slug: "bwindi-sectors-compared", title: "Bwindi's 4 Sectors Compared: Buhoma, Ruhija, Rushaga & Nkuringo" },
  { slug: "uganda-packing-list", title: "The Essential Uganda Packing List for Safari & Gorilla Trekking" },
  { slug: "uganda-safari-cost-guide", title: "What Does a Uganda Safari Actually Cost?" },
  { slug: "is-uganda-safe-for-tourists", title: "Is Uganda Safe for Tourists? What You Actually Need to Know" },
  { slug: "trackers-safari-lodge-visit", title: "Visiting Trackers Safari Lodge in Buhoma, Bwindi" },
  { slug: "vegetarian-travel-uganda", title: "Vegetarian Travel in Uganda: What You Can Actually Eat" },
  { slug: "food-uganda-safari-lodges", title: "Food at Uganda Safari Lodges: What to Expect" },
  { slug: "best-time-book-uganda-lodge", title: "Best Time to Book a Uganda Safari Lodge (2026)" },
  { slug: "where-to-stay-uganda", title: "Where to Stay in Uganda — Region Guide (2026)" },
  { slug: "hotel-occupancy-uganda", title: "Uganda Hotel Occupancy Rates (2023 Data)" },
];

const RELATED_MAP: Record<string, string[]> = {
  "entebbe-to-bwindi-travel-options": ["best-lodges-near-entebbe-airport", "uganda-gorilla-trekking-fitness-guide", "bwindi-sectors-compared"],
  "uganda-gorilla-trekking-fitness-guide": ["bwindi-sectors-compared", "uganda-packing-list", "entebbe-to-bwindi-travel-options"],
  "best-lodges-near-entebbe-airport": ["entebbe-to-bwindi-travel-options", "overnight-safari-vs-day-trip-uganda", "uganda-safari-cost-guide"],
  "rainy-season-uganda-safari-guide": ["uganda-safari-cost-guide", "uganda-packing-list", "boat-safari-kazinga-channel-guide"],
  "uganda-safari-with-kids": ["golden-monkey-trekking-mgahinga", "boat-safari-kazinga-channel-guide", "is-uganda-safe-for-tourists"],
  "golden-monkey-trekking-mgahinga": ["bwindi-sectors-compared", "uganda-safari-with-kids", "uganda-gorilla-trekking-fitness-guide"],
  "boat-safari-kazinga-channel-guide": ["birding-in-uganda-top-spots", "overnight-safari-vs-day-trip-uganda", "rainy-season-uganda-safari-guide"],
  "uganda-vs-tanzania-safari-comparison": ["uganda-safari-cost-guide", "birding-in-uganda-top-spots", "entebbe-to-bwindi-travel-options"],
  "birding-in-uganda-top-spots": ["boat-safari-kazinga-channel-guide", "rainy-season-uganda-safari-guide", "overnight-safari-vs-day-trip-uganda"],
  "overnight-safari-vs-day-trip-uganda": ["best-lodges-near-entebbe-airport", "uganda-safari-cost-guide", "boat-safari-kazinga-channel-guide"],
  "bwindi-sectors-compared": ["uganda-gorilla-trekking-fitness-guide", "entebbe-to-bwindi-travel-options", "trackers-safari-lodge-visit"],
  "uganda-packing-list": ["uganda-gorilla-trekking-fitness-guide", "rainy-season-uganda-safari-guide", "is-uganda-safe-for-tourists"],
  "uganda-safari-cost-guide": ["rainy-season-uganda-safari-guide", "uganda-vs-tanzania-safari-comparison", "overnight-safari-vs-day-trip-uganda"],
  "is-uganda-safe-for-tourists": ["uganda-packing-list", "uganda-safari-with-kids", "uganda-safari-cost-guide"],
  "trackers-safari-lodge-visit": ["bwindi-sectors-compared", "uganda-gorilla-trekking-fitness-guide", "entebbe-to-bwindi-travel-options"],
  "vegetarian-travel-uganda": ["food-uganda-safari-lodges", "uganda-packing-list", "entebbe-to-bwindi-travel-options"],
  "food-uganda-safari-lodges": ["vegetarian-travel-uganda", "bwindi-sectors-compared", "uganda-safari-cost-guide"],
  "best-time-book-uganda-lodge": ["rainy-season-uganda-safari-guide", "uganda-safari-cost-guide", "bwindi-sectors-compared"],
  "where-to-stay-uganda": ["best-time-book-uganda-lodge", "best-lodges-near-entebbe-airport", "uganda-safari-cost-guide"],
  "hotel-occupancy-uganda": ["best-time-book-uganda-lodge", "rainy-season-uganda-safari-guide", "where-to-stay-uganda"],
};

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const relatedSlugs = RELATED_MAP[currentSlug];
  if (!relatedSlugs) return null;

  const articles = relatedSlugs
    .map((slug) => BLOG_ARTICLES.find((a) => a.slug === slug))
    .filter(Boolean) as Article[];

  if (articles.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-sand">
      <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-4">
        Related Articles
      </h2>
      <div className="space-y-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block bg-cream/50 rounded-lg p-4 hover:bg-cream transition-colors group"
          >
            <span className="text-forest group-hover:text-gold transition-colors font-medium text-sm">
              {article.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
