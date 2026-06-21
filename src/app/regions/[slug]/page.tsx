import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { regions, regionsMap } from "@/lib/regions-data";
import { getLodgesByRegion } from "@/lib/lodges-data";
import { toLodgeListItem } from "@/lib/lodge-types";
import { RegionPage } from "@/components/RegionPage";
import { SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const region = regionsMap[slug];
  if (!region) return {};

  const canonicalUrl = `${SITE_URL}/regions/${slug}`;

  return {
    title: region.seoTitle,
    description: region.seoDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${region.seoTitle} | Lodges of Uganda`,
      description: region.seoDescription,
      url: canonicalUrl,
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const region = regionsMap[slug];
  if (!region) notFound();

  const regionLodges = await getLodgesByRegion(slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      name: region.name,
      description: region.description,
      url: `${SITE_URL}/regions/${slug}`,
      touristType: region.activities.map((a) => ({
        "@type": "Audience",
        audienceType: a,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Lodges", item: `${SITE_URL}/lodges` },
        { "@type": "ListItem", position: 2, name: region.name, item: `${SITE_URL}/regions/${slug}` },
      ],
    },
    ...(region.faq.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: region.faq.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          },
        ]
      : []),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <RegionPage region={region} lodges={regionLodges.map(toLodgeListItem)} />
    </>
  );
}
