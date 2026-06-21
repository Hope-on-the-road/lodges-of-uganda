import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getComparePairs, getComparePairsMap } from "@/lib/compare-pairs";
import { ComparePage } from "@/components/ComparePage";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export async function generateStaticParams() {
  const comparePairs = await getComparePairs();
  return comparePairs.map((p) => ({ slugs: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slugs: string }>;
}): Promise<Metadata> {
  const { slugs } = await params;
  const pair = (await getComparePairsMap()).get(slugs);
  if (!pair) return {};

  const title = `${pair.lodgeA.name} vs ${pair.lodgeB.name} — Lodge Comparison Uganda`;
  const description = `Compare ${pair.lodgeA.name} (${pair.lodgeA.priceLevel} ${pair.lodgeA.category}) and ${pair.lodgeB.name} (${pair.lodgeB.priceLevel} ${pair.lodgeB.category}) in ${pair.lodgeA.subregion}. Side-by-side: price, rooms, amenities, activities.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/compare/${slugs}` },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}/compare/${slugs}`,
      type: "article",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slugs: string }>;
}) {
  const { slugs } = await params;
  const pair = (await getComparePairsMap()).get(slugs);
  if (!pair) notFound();

  const { lodgeA, lodgeB, reason } = pair;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${lodgeA.name} vs ${lodgeB.name}`,
      description: `Comparison of ${lodgeA.name} and ${lodgeB.name} in Uganda`,
      url: `${SITE_URL}/compare/${slugs}`,
      mainEntity: [
        {
          "@type": "LodgingBusiness",
          name: lodgeA.name,
          url: `${SITE_URL}/lodges/${lodgeA.region}/${lodgeA.slug}`,
          priceRange: lodgeA.priceLevel,
          address: { "@type": "PostalAddress", addressLocality: lodgeA.subregion, addressCountry: "UG" },
        },
        {
          "@type": "LodgingBusiness",
          name: lodgeB.name,
          url: `${SITE_URL}/lodges/${lodgeB.region}/${lodgeB.slug}`,
          priceRange: lodgeB.priceLevel,
          address: { "@type": "PostalAddress", addressLocality: lodgeB.subregion, addressCountry: "UG" },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Lodges", item: `${SITE_URL}/lodges` },
        { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE_URL}/compare/${slugs}` },
        { "@type": "ListItem", position: 3, name: `${lodgeA.name} vs ${lodgeB.name}`, item: `${SITE_URL}/compare/${slugs}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `Which is better, ${lodgeA.name} or ${lodgeB.name}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${lodgeA.name} is a ${lodgeA.category.toLowerCase()} (${lodgeA.priceLevel}) in ${lodgeA.subregion}, while ${lodgeB.name} is a ${lodgeB.category.toLowerCase()} (${lodgeB.priceLevel}) in ${lodgeB.subregion}. The better choice depends on your budget and preferences.`,
          },
        },
        {
          "@type": "Question",
          name: `How do ${lodgeA.name} and ${lodgeB.name} compare on price?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${lodgeA.name} is at the ${lodgeA.priceLevel} price level and ${lodgeB.name} at ${lodgeB.priceLevel}. ${lodgeA.priceLevel === lodgeB.priceLevel ? "They are in the same price range." : "They differ in price level — contact each lodge for current rates."}`,
          },
        },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <ComparePage lodgeA={lodgeA} lodgeB={lodgeB} reason={reason} />
    </>
  );
}
