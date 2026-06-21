import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { getTourOperators } from "@/lib/tour-operators-data";
import { TourOperatorsOverview } from "@/components/TourOperatorsOverview";

export const metadata: Metadata = {
  title: "Tour Operators in Uganda — Independent Directory",
  description:
    "Independent directory of verified safari and tour operators in Uganda. Compare operators by specialization, region and trust score. No subjective ratings — just facts.",
  alternates: { canonical: `${SITE_URL}/tour-operators` },
  openGraph: {
    title: "Tour Operators in Uganda | Lodges of Uganda",
    description:
      "Compare verified Uganda tour operators. Gorilla trekking, wildlife safaris, community tourism. Independent trust scores based on factual data.",
    url: `${SITE_URL}/tour-operators`,
    type: "website",
  },
};

export default async function TourOperatorsPage() {
  const tourOperators = await getTourOperators();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Uganda Tour Operators — Independent Directory",
    description: "Independent directory of verified safari and tour operators in Uganda. Compare operators by specialization, region and trust score.",
    url: `${SITE_URL}/tour-operators`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h1 + p"],
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: tourOperators
        .filter((op) => op.description)
        .slice(0, 50)
        .map((op, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "TravelAgency",
            name: op.name,
            url: `${SITE_URL}/tour-operators/${op.slug}`,
            description: op.description,
            ...(op.logo ? { logo: `${SITE_URL}${op.logo}` } : {}),
            telephone: op.phone || undefined,
            address: {
              "@type": "PostalAddress",
              addressLocality: op.location,
              addressCountry: op.country,
            },
          },
        })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tour Operators", item: `${SITE_URL}/tour-operators` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TourOperatorsOverview operators={tourOperators} />
    </>
  );
}
