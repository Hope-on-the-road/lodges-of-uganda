import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTourOperators, getTourOperatorsMap } from "@/lib/tour-operators-data";
import { getLodgesMap } from "@/lib/lodges-data";
import { regionsMap } from "@/lib/regions-data";
import { TourOperatorPage } from "@/components/TourOperatorPage";
import { SITE_URL } from "@/lib/constants";
import { calculateTrustScore } from "@/lib/tour-operator-types";

export async function generateStaticParams() {
  const tourOperators = await getTourOperators();
  return tourOperators.map((op) => ({ slug: op.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const map = await getTourOperatorsMap();
  const operator = map[slug];
  if (!operator) return {};

  const canonicalUrl = `${SITE_URL}/tour-operators/${slug}`;
  const rawTitle = operator.seoTitle || `${operator.name} — Uganda Tour Operator`;
  const trimmedTitle = rawTitle.length > 60 ? rawTitle.slice(0, 57) + "..." : rawTitle;
  const rawDesc = operator.seoDescription || operator.description;
  const description = rawDesc.length > 155 ? rawDesc.slice(0, 152) + "..." : rawDesc;

  return {
    title: { absolute: trimmedTitle },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: trimmedTitle,
      description,
      url: canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: trimmedTitle,
      description,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const operatorsMap = await getTourOperatorsMap();
  const operator = operatorsMap[slug];
  if (!operator) notFound();

  const allLodgesMap = await getLodgesMap();
  const recommendedLodges = operator.recommendedLodges
    .map((s) => allLodgesMap[s])
    .filter(Boolean);

  const regionNames = operator.regions.map((s) => {
    const r = regionsMap[s];
    return r ? { slug: r.slug, name: r.name } : { slug: "", name: s };
  });

  const trustScore = calculateTrustScore(operator.trustIndicators);

  const canonicalUrl = `${SITE_URL}/tour-operators/${slug}`;

  // JSON-LD: TravelAgency schema
  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: operator.name,
    url: operator.website || canonicalUrl,
    description: operator.description,
    telephone: undefined,
    email: undefined,
    ...(operator.logo ? { logo: `${SITE_URL}${operator.logo}` } : {}),
    image: operator.logo ? `${SITE_URL}${operator.logo}` : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: operator.location,
      addressCountry: operator.country,
    },
    ...(operator.foundedYear ? { foundingDate: String(operator.foundedYear) } : {}),
    areaServed: regionNames.map((r) => ({
      "@type": "Place",
      name: r.name,
    })),
    knowsAbout: operator.specializations,
    sameAs: [
      operator.website,
      operator.trustIndicators.tripadvisorProfile,
      operator.trustIndicators.googleBusinessProfile,
      operator.trustIndicators.safariBookingsProfile,
    ].filter(Boolean),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tour Operators", item: `${SITE_URL}/tour-operators` },
      { "@type": "ListItem", position: 3, name: operator.name, item: `${SITE_URL}/tour-operators/${slug}` },
    ],
  };

  const faqItems = [
    {
      question: `Where is ${operator.name} based?`,
      answer: `${operator.name} is based in ${operator.location}, ${operator.country}.${operator.foundedYear ? ` The company was founded in ${operator.foundedYear}.` : ""}`,
    },
    {
      question: `What does ${operator.name} specialize in?`,
      answer: `${operator.name} specializes in ${operator.specializations.join(", ")}. They operate across ${regionNames.map((r) => r.name).join(", ")}.`,
    },
    {
      question: `What is the Trust Score for ${operator.name}?`,
      answer: `${operator.name} has a Trust Score of ${trustScore}/100, based on verified business information including company registration, online presence, and review platform profiles. The Trust Score is purely factual — no subjective ratings.`,
    },
    ...(operator.specializations.includes("Gorilla Trekking") ? [{
      question: `Does ${operator.name} offer gorilla trekking?`,
      answer: `Yes, ${operator.name} offers gorilla trekking experiences in Uganda. They can assist with gorilla permit booking through the Uganda Wildlife Authority (UWA). Permits cost $800 per person.`,
    }] : []),
    {
      question: `How can I contact ${operator.name}?`,
      answer: `You can contact ${operator.name}${operator.whatsapp ? " via WhatsApp" : ""}${operator.email ? ", by email" : ""}${operator.website ? `, or through their website at ${operator.website}` : ""}. Visit their profile on LodgesOfUganda.com for full contact details.`,
    },
    ...(recommendedLodges.length > 0 ? [{
      question: `Which lodges does ${operator.name} recommend?`,
      answer: `${operator.name} frequently works with ${recommendedLodges.map((l) => l.name).join(", ")}. These lodges are used in their safari itineraries across Uganda.`,
    }] : []),
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      {[travelAgencySchema, breadcrumbSchema, faqSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <TourOperatorPage
        operator={{
          ...operator,
          email: operator.email ? Buffer.from(operator.email).toString("base64") : "",
          phone: operator.phone ? Buffer.from(operator.phone).toString("base64") : "",
          whatsapp: operator.whatsapp ? Buffer.from(operator.whatsapp).toString("base64") : "",
        }}
        recommendedLodges={recommendedLodges}
        regionNames={regionNames}
        faqItems={faqItems}
      />
    </>
  );
}
