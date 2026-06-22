import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLodges, getLodgesMap, getLodgesByRegion } from "@/lib/lodges-data";
import { regionsMap } from "@/lib/regions-data";
import { LodgePage } from "@/components/LodgePage";
import { SITE_URL } from "@/lib/constants";
import type { Lodge, LodgeCategory } from "@/lib/lodge-types";

const CATEGORY_ADJACENCY: Record<string, LodgeCategory[]> = {
  "Ultra Luxury": ["Ultra Luxury", "Luxury"],
  "Luxury": ["Luxury", "Ultra Luxury", "Comfort"],
  "Comfort": ["Comfort", "Luxury", "Mid-range"],
  "Mid-range": ["Mid-range", "Comfort", "Budget"],
  "Budget": ["Budget", "Mid-range", "Community Lodge", "Guesthouse"],
  "Community Lodge": ["Community Lodge", "Budget", "Guesthouse", "Eco Lodge"],
  "Eco Lodge": ["Eco Lodge", "Comfort", "Community Lodge", "Safari Camp"],
  "Safari Camp": ["Safari Camp", "Eco Lodge", "Comfort", "Mid-range"],
  "Guesthouse": ["Guesthouse", "Budget", "Community Lodge", "Mid-range"],
  "Hotel": ["Hotel", "Mid-range", "Comfort", "Resort"],
  "Resort": ["Resort", "Hotel", "Luxury", "Comfort"],
};

async function getSimilarLodges(current: Lodge): Promise<Lodge[]> {
  const regionLodges = (await getLodgesByRegion(current.region)).filter((l) => l.slug !== current.slug);
  const adjacent = CATEGORY_ADJACENCY[current.category] || [current.category];

  const sameRegionAndCategory = regionLodges.filter((l) => adjacent.includes(l.category));

  if (sameRegionAndCategory.length >= 3) {
    return sameRegionAndCategory.slice(0, 4);
  }

  // Fall back to same region lodges
  return regionLodges.slice(0, 4);
}

export async function generateStaticParams() {
  const lodges = await getLodges();
  return lodges.map((l) => ({
    region: l.region,
    slug: l.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string; slug: string }>;
}): Promise<Metadata> {
  const { slug, region } = await params;
  const lodge = (await getLodgesMap())[slug];
  if (!lodge || lodge.region !== region) return {};

  const canonicalUrl = `${SITE_URL}/lodges/${region}/${slug}`;
  const rawTitle = lodge.seoTitle || `${lodge.name} | Uganda Lodge Guide`;
  const title = rawTitle.length > 60 ? rawTitle.slice(0, 57) + "..." : rawTitle;
  // Fix 8: Ensure meta description is 150-160 chars
  const baseDesc = lodge.seoDescription || lodge.shortDescription;
  const regionName = regionsMap[region]?.name || region;
  const description = baseDesc.length >= 140 ? baseDesc
    : `${baseDesc} ${lodge.category} in ${lodge.subregion}, ${regionName}. ${lodge.activities.slice(0, 3).join(", ")}.`.slice(0, 160);

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${title} | Lodges of Uganda`,
      description,
      url: canonicalUrl,
      type: "website",
      images: lodge.heroImage
        ? [{ url: lodge.heroImage.startsWith("http") ? lodge.heroImage : `${SITE_URL}${lodge.heroImage}`, width: 1200, height: 630, alt: `${lodge.name} — ${lodge.category} lodge in ${lodge.subregion}, Uganda` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Lodges of Uganda`,
      description,
      images: lodge.heroImage ? [lodge.heroImage.startsWith("http") ? lodge.heroImage : `${SITE_URL}${lodge.heroImage}`] : undefined,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ region: string; slug: string }>;
}) {
  const { slug, region } = await params;
  const lodge = (await getLodgesMap())[slug];
  if (!lodge || lodge.region !== region) notFound();

  const regionData = regionsMap[lodge.region];
  const canonicalUrl = `${SITE_URL}/lodges/${region}/${slug}`;

  // Auto-generate FAQ for lodges without custom FAQ
  const autoFaq = lodge.faq.length > 0 ? lodge.faq : [
    {
      question: `Where is ${lodge.name} located?`,
      answer: `${lodge.name} is located in ${lodge.subregion}${lodge.nationalPark ? `, ${lodge.nationalPark}` : ""}, ${regionData?.name || lodge.region}, Uganda.${lodge.distanceToParkGate ? ` It is ${lodge.distanceToParkGate}.` : ""}`,
    },
    {
      question: `What type of accommodation is ${lodge.name}?`,
      answer: `${lodge.name} is a ${lodge.category.toLowerCase()} property at the ${lodge.priceLevel === "$" ? "budget" : lodge.priceLevel === "$$" ? "mid-range" : lodge.priceLevel === "$$$" ? "comfort" : lodge.priceLevel === "$$$$" ? "luxury" : "ultra luxury"} price level.${lodge.bestFor.length > 0 ? ` It is often chosen by ${lodge.bestFor.slice(0, 3).join(", ").toLowerCase()}.` : ""}`,
    },
    ...(lodge.gorillaTracking ? [{
      question: `Can I do gorilla trekking from ${lodge.name}?`,
      answer: `Yes, ${lodge.name} provides access to gorilla trekking in ${lodge.nationalPark || "Bwindi Impenetrable National Park"}. Gorilla permits ($800 per person) should be arranged in advance through the Uganda Wildlife Authority.`,
    }] : []),
  ];

  // Build sameAs array
  const sameAs = [
    ...(lodge.officialWebsite ? [lodge.officialWebsite] : []),
    ...(lodge.googleMapsUrl ? [lodge.googleMapsUrl] : []),
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: lodge.name,
      description: lodge.shortDescription,
      url: canonicalUrl,
      ...(sameAs.length > 0 && { sameAs }),
      ...(lodge.latitude && lodge.longitude && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: lodge.latitude,
          longitude: lodge.longitude,
        },
      }),
      address: {
        "@type": "PostalAddress",
        addressLocality: lodge.subregion,
        addressRegion: regionData?.name || lodge.region,
        addressCountry: "UG",
      },
      ...(lodge.heroImage && { image: lodge.heroImage.startsWith("http") ? lodge.heroImage : `${SITE_URL}${lodge.heroImage}` }),
      areaServed: [
        { "@type": "AdministrativeArea", name: "Uganda" },
        ...(regionData ? [{ "@type": "AdministrativeArea", name: regionData.name }] : []),
        ...(lodge.nationalPark ? [{ "@type": "TouristDestination", name: lodge.nationalPark }] : []),
        ...(lodge.subregion && lodge.subregion !== regionData?.name ? [{ "@type": "Place", name: lodge.subregion }] : []),
      ],
      ...(lodge.email && { email: lodge.email }),
      ...(lodge.phone && { telephone: lodge.phone }),
      priceRange: lodge.priceLevel,
      starRating: lodge.category === "Ultra Luxury" ? { "@type": "Rating", ratingValue: "5" }
        : lodge.category === "Luxury" ? { "@type": "Rating", ratingValue: "4" }
        : lodge.category === "Comfort" ? { "@type": "Rating", ratingValue: "3" }
        : undefined,
      amenityFeature: lodge.amenities.map((a) => ({
        "@type": "LocationFeatureSpecification",
        name: a,
        value: true,
      })),
      ...(lodge.roomTypes.length > 0 && {
        numberOfRooms: lodge.roomTypes.length,
        containsPlace: lodge.roomTypes.map((r) => ({
          "@type": "HotelRoom",
          name: r.name,
          description: r.description,
          ...(r.maxGuests && { occupancy: { "@type": "QuantitativeValue", value: r.maxGuests } }),
        })),
      }),
      // Fix 9: aggregateRating for lodges with score
      ...(lodge.score && {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: lodge.score.overall,
          bestRating: 10,
          worstRating: 1,
          ratingCount: 1,
          author: { "@type": "Organization", name: "Lodges of Uganda" },
        },
      }),
      // Fix 6: speakable for voice search
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "[class*='Summary'] dt", "[class*='Summary'] dd", "[class*='shortDescription']"],
      },
    },
    ...(lodge.nationalPark
      ? [{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: lodge.nationalPark,
          description: regionData?.description || "",
        }]
      : []),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Lodges", item: `${SITE_URL}/lodges` },
        { "@type": "ListItem", position: 2, name: regionData?.name || region, item: `${SITE_URL}/regions/${region}` },
        { "@type": "ListItem", position: 3, name: lodge.name, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: autoFaq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
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
      <LodgePage lodge={lodge} similarLodges={await getSimilarLodges(lodge)} />
    </>
  );
}
