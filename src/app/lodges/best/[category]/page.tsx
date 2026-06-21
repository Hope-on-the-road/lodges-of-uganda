import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { comparisonPages, comparisonPagesMap } from "@/lib/comparison-pages";
import { getLodges } from "@/lib/lodges-data";
import { BestOfPage } from "@/components/BestOfPage";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export function generateStaticParams() {
  return comparisonPages.map((p) => ({ category: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const page = comparisonPagesMap[category];
  if (!page) return {};

  const canonicalUrl = `${SITE_URL}/lodges/best/${category}`;

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${page.seoTitle} | ${SITE_NAME}`,
      description: page.seoDescription,
      url: canonicalUrl,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.seoDescription,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const page = comparisonPagesMap[category];
  if (!page) notFound();

  const lodges = await getLodges();
  const filtered = lodges.filter(page.filter);

  // Schema: CollectionPage + ItemList + FAQPage + BreadcrumbList
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: page.h1,
      description: page.seoDescription,
      url: `${SITE_URL}/lodges/best/${category}`,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: filtered.length,
        itemListElement: filtered.map((l, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "LodgingBusiness",
            name: l.name,
            url: `${SITE_URL}/lodges/${l.region}/${l.slug}`,
            description: l.shortDescription,
            priceRange: l.priceLevel,
            address: {
              "@type": "PostalAddress",
              addressLocality: l.subregion,
              addressCountry: "UG",
            },
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Lodges", item: `${SITE_URL}/lodges` },
        { "@type": "ListItem", position: 2, name: "Best Of", item: `${SITE_URL}/best-of` },
        { "@type": "ListItem", position: 3, name: page.title, item: `${SITE_URL}/lodges/best/${category}` },
      ],
    },
    ...(page.faq.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faq.map((f) => ({
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
      <BestOfPage page={{
        slug: page.slug,
        title: page.title,
        h1: page.h1,
        seoTitle: page.seoTitle,
        seoDescription: page.seoDescription,
        description: page.description,
        introText: page.introText,
        howWeChose: page.howWeChose,
        quickAnswer: page.quickAnswer,
        faq: page.faq,
      }} lodges={filtered} />
    </>
  );
}
