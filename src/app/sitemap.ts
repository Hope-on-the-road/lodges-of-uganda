import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getLodges } from "@/lib/lodges-data";
import { regions } from "@/lib/regions-data";
import { comparisonPages } from "@/lib/comparison-pages";
import { nearPages, subregionPages } from "@/lib/programmatic-pages";
import { getComparePairs } from "@/lib/compare-pairs";
import { getTourOperators } from "@/lib/tour-operators-data";

export const dynamic = "force-static";

const SITE_LAUNCH = new Date("2026-06-04");

const BLOG_DATES: Record<string, string> = {
  "where-to-stay-uganda": "2026-06-21",
  "best-time-book-uganda-lodge": "2026-06-19",
  "food-uganda-safari-lodges": "2026-06-17",
  "vegetarian-travel-uganda": "2026-06-17",
  "entebbe-to-bwindi-travel-options": "2026-06-13",
  "uganda-gorilla-trekking-fitness-guide": "2026-06-13",
  "best-lodges-near-entebbe-airport": "2026-06-13",
  "rainy-season-uganda-safari-guide": "2026-06-13",
  "uganda-safari-with-kids": "2026-06-13",
  "golden-monkey-trekking-mgahinga": "2026-06-13",
  "boat-safari-kazinga-channel-guide": "2026-06-13",
  "uganda-vs-tanzania-safari-comparison": "2026-06-13",
  "birding-in-uganda-top-spots": "2026-06-13",
  "overnight-safari-vs-day-trip-uganda": "2026-06-13",
  "bwindi-sectors-compared": "2026-06-09",
  "uganda-packing-list": "2026-06-07",
  "uganda-safari-cost-guide": "2026-06-05",
  "is-uganda-safe-for-tourists": "2026-06-03",
  "trackers-safari-lodge-visit": "2026-06-01",
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [tourOperators, lodges] = await Promise.all([getTourOperators(), getLodges()]);
  return [
    { url: SITE_URL, lastModified: new Date("2026-06-16"), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/lodges`, lastModified: new Date("2026-06-16"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/best-of`, lastModified: new Date("2026-06-10"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/lodge-finder`, lastModified: new Date("2026-06-06"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: new Date("2026-06-04"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/best-time-to-visit`, lastModified: new Date("2026-06-04"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/gorilla-permit-guide`, lastModified: new Date("2026-06-04"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/uganda-vs-rwanda-gorilla-trekking`, lastModified: new Date("2026-06-04"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/itineraries`, lastModified: new Date("2026-06-06"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/itineraries/7-day-gorilla-safari`, lastModified: new Date("2026-06-06"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/itineraries/10-day-primates-wildlife`, lastModified: new Date("2026-06-06"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/itineraries/14-day-complete-uganda`, lastModified: new Date("2026-06-06"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: new Date("2026-06-21"), changeFrequency: "weekly", priority: 0.7 },
    ...Object.entries(BLOG_DATES).map(([slug, date]) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/tour-operators`, lastModified: new Date("2026-06-10"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/tour-operators/add`, lastModified: new Date("2026-06-04"), changeFrequency: "monthly", priority: 0.6 },
    ...tourOperators.map((op) => ({
      url: `${SITE_URL}/tour-operators/${op.slug}`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...lodges.map((l) => ({
      url: `${SITE_URL}/lodges/${l.region}/${l.slug}`,
      lastModified: l.lastUpdated ? new Date(l.lastUpdated) : SITE_LAUNCH,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...regions.map((r) => ({
      url: `${SITE_URL}/regions/${r.slug}`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...comparisonPages.map((p) => ({
      url: `${SITE_URL}/lodges/best/${p.slug}`,
      lastModified: new Date("2026-06-10"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...nearPages.map((p) => ({
      url: `${SITE_URL}/${p.slug}`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...subregionPages.map((p) => ({
      url: `${SITE_URL}/${p.slug}`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...(await getComparePairs()).map((p) => ({
      url: `${SITE_URL}/compare/${p.slug}`,
      lastModified: SITE_LAUNCH,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
