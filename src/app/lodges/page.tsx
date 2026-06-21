import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { getLodges } from "@/lib/lodges-data";
import { regions } from "@/lib/regions-data";
import { toLodgeListItem } from "@/lib/lodge-types";
import { LodgeOverview } from "@/components/LodgeOverview";

export const metadata: Metadata = {
  title: "All Lodges in Uganda | Independent Lodge Guide",
  description:
    "Browse and compare lodges across Uganda. Filter by region, category, price level and activities. Independent lodge information for gorilla trekking, safaris and more.",
  alternates: { canonical: `${SITE_URL}/lodges` },
  openGraph: {
    title: "All Lodges in Uganda | Independent Lodge Guide",
    description:
      "Browse and compare lodges across Uganda. Filter by region, category, price level and activities.",
    url: `${SITE_URL}/lodges`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default async function LodgesPage() {
  const lodges = await getLodges();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Uganda Lodge Guide",
    description:
      "Independent guide to lodges and accommodation across Uganda. Compare lodges by region, price and activities.",
    url: `${SITE_URL}/lodges`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: lodges.length,
      itemListElement: lodges.slice(0, 20).map((l, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "LodgingBusiness",
          name: l.name,
          url: `${SITE_URL}/lodges/${l.region}/${l.slug}`,
          description: l.shortDescription,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LodgeOverview lodges={lodges.map(toLodgeListItem)} regions={regions} />
    </>
  );
}
