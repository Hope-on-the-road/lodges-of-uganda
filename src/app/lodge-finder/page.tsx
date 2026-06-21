import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { getLodges } from "@/lib/lodges-data";
import { regions } from "@/lib/regions-data";
import { toLodgeListItem } from "@/lib/lodge-types";
import { LodgeFinder } from "@/components/LodgeFinder";

export const metadata: Metadata = {
  title: "Uganda Lodge Finder | Find Your Perfect Lodge",
  description:
    "Answer a few questions and we recommend the best lodges in Uganda for your trip. Filter by activity, budget, region and travel style. Free and independent.",
  alternates: { canonical: `${SITE_URL}/lodge-finder` },
  openGraph: {
    title: "Uganda Lodge Finder | Find Your Perfect Lodge",
    description: "Answer a few questions and get personalized lodge recommendations for Uganda.",
    url: `${SITE_URL}/lodge-finder`,
    type: "website",
  },
};

export default async function LodeFinderPage() {
  const lodges = await getLodges();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Uganda Lodge Finder",
    description: "Interactive tool to find the right lodge in Uganda based on your travel preferences, budget, and activities.",
    url: `${SITE_URL}/lodge-finder`,
    applicationCategory: "TravelApplication",
    operatingSystem: "Web",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LodgeFinder lodges={lodges.map(toLodgeListItem)} regions={regions} />
    </>
  );
}
