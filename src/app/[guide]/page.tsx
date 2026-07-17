import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  nearPages,
  nearPagesMap,
  subregionPages,
  subregionPagesMap,
  allProgrammaticSlugs,
} from "@/lib/programmatic-pages";
import { getLodges } from "@/lib/lodges-data";
import { BestOfPage } from "@/components/BestOfPage";
import { HubPage } from "@/components/HubPage";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { hubsMap, hubSlugs, allHubs, indexableHubSlugs } from "@/data/hubs";
import { articlesByCategory, articlesByEntity, articlesMap } from "@/data/taxonomy/articles";
import { getRelatedEntities } from "@/lib/hubs/engine";

export function generateStaticParams() {
  return [
    ...allProgrammaticSlugs.map((slug) => ({ guide: slug })),
    ...hubSlugs.map((slug) => ({ guide: slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guide: string }>;
}): Promise<Metadata> {
  const { guide } = await params;

  // Hub pages
  const hub = hubsMap[guide];
  if (hub) {
    const shouldIndex = indexableHubSlugs.has(guide);
    return {
      title: hub.seoTitle,
      description: hub.seoDescription,
      alternates: { canonical: `${SITE_URL}/${guide}` },
      ...(shouldIndex ? {} : { robots: { index: false, follow: true } }),
      openGraph: {
        title: `${hub.seoTitle} | ${SITE_NAME}`,
        description: hub.seoDescription,
        url: `${SITE_URL}/${guide}`,
        type: "website",
      },
    };
  }

  const near = nearPagesMap[guide];
  if (near) {
    return {
      title: near.seoTitle,
      description: near.seoDescription,
      alternates: { canonical: `${SITE_URL}/${guide}` },
      openGraph: {
        title: `${near.seoTitle} | ${SITE_NAME}`,
        description: near.seoDescription,
        url: `${SITE_URL}/${guide}`,
        type: "article",
      },
    };
  }

  const sub = subregionPagesMap[guide];
  if (sub) {
    return {
      title: sub.seoTitle,
      description: sub.seoDescription,
      alternates: { canonical: `${SITE_URL}/${guide}` },
      openGraph: {
        title: `${sub.seoTitle} | ${SITE_NAME}`,
        description: sub.seoDescription,
        url: `${SITE_URL}/${guide}`,
        type: "article",
      },
    };
  }

  return {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ guide: string }>;
}) {
  const { guide } = await params;

  // ── Hub pages ──
  const hub = hubsMap[guide];
  if (hub) {
    const lodges = await getLodges();

    const hubArticles =
      hub.type === "category" && hub.categoryId
        ? articlesByCategory(hub.categoryId)
        : hub.entityRef
          ? articlesByEntity(hub.entityRef.id)
          : [];

    const featuredArticles = hub.featuredArticleSlugs
      .map((slug) => articlesMap[slug])
      .filter(Boolean);

    const hubLodges = hub.entityRef
      ? lodges.filter((l) => l.region === hub.entityRef!.id)
      : [];

    const relatedEntityData = getRelatedEntities(
      hubArticles,
      new Set(hub.entityRef ? [hub.entityRef.id] : []),
      10,
    );

    const relatedEntities = relatedEntityData
      .filter((e) => hubsMap[e.entity.id])
      .map((e) => ({
        id: e.entity.id,
        label: e.entity.label,
        slug: hubsMap[e.entity.id]?.slug || e.entity.id,
        count: e.count,
      }));

    const relatedHubs = allHubs
      .filter((h) => h.slug !== hub.slug)
      .map((h) => ({ slug: h.slug, title: h.title, type: h.type }));

    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: hub.title,
        description: hub.seoDescription,
        url: `${SITE_URL}/${guide}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: hub.title, item: `${SITE_URL}/${guide}` },
        ],
      },
      ...(hub.faqs.length > 0
        ? [{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: hub.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }]
        : []),
    ];

    return (
      <>
        {jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
        <HubPage
          hub={hub}
          articles={hubArticles}
          featuredArticles={featuredArticles}
          lodges={hubLodges}
          relatedEntities={relatedEntities}
          relatedHubs={relatedHubs}
        />
      </>
    );
  }

  // ── Existing programmatic pages ──
  const lodges = await getLodges();

  const near = nearPagesMap[guide];
  if (near) {
    const filtered = lodges.filter(near.filter);
    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: near.h1,
        description: near.seoDescription,
        url: `${SITE_URL}/${guide}`,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: filtered.length,
          itemListElement: filtered.slice(0, 30).map((l, i) => ({
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
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Lodges", item: `${SITE_URL}/lodges` },
          { "@type": "ListItem", position: 2, name: near.h1, item: `${SITE_URL}/${guide}` },
        ],
      },
      ...(near.faq.length > 0
        ? [{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: near.faq.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }]
        : []),
    ];

    return (
      <>
        {jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
        <BestOfPage
          page={{
            slug: near.slug,
            title: near.h1,
            h1: near.h1,
            seoTitle: near.seoTitle,
            seoDescription: near.seoDescription,
            description: near.seoDescription,
            introText: near.intro,
            howWeChose: "We include lodges with practical access to this attraction or activity. No payment is accepted for inclusion or ranking position.",
            quickAnswer: near.quickAnswer,
            faq: near.faq,
          }}
          lodges={filtered}
        />
      </>
    );
  }

  const sub = subregionPagesMap[guide];
  if (sub) {
    const filtered = lodges.filter(
      (l) => l.subregion.toLowerCase() === sub.subregion.toLowerCase() && l.region === sub.region
    );
    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: sub.h1,
        description: sub.seoDescription,
        url: `${SITE_URL}/${guide}`,
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
            },
          })),
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Lodges", item: `${SITE_URL}/lodges` },
          { "@type": "ListItem", position: 2, name: sub.h1, item: `${SITE_URL}/${guide}` },
        ],
      },
    ];

    return (
      <>
        {jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
        <BestOfPage
          page={{
            slug: sub.slug,
            title: sub.h1,
            h1: sub.h1,
            seoTitle: sub.seoTitle,
            seoDescription: sub.seoDescription,
            description: sub.seoDescription,
            introText: `All verified lodges and accommodation in the ${sub.subregion} area. Compare options by price level, category, and activities available.`,
            howWeChose: "We include all verified accommodation in this area. No payment is accepted for listing or ranking.",
            quickAnswer: `There are ${filtered.length} lodges listed in the ${sub.subregion} area, ranging from budget to luxury.`,
            faq: [],
          }}
          lodges={filtered}
        />
      </>
    );
  }

  notFound();
}
