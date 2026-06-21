import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { comparisonPages } from "@/lib/comparison-pages";
import { nearPages } from "@/lib/programmatic-pages";
import { getLodges } from "@/lib/lodges-data";

export const metadata: Metadata = {
  title: "Best Of Guides | Uganda Lodge Recommendations",
  description:
    "Curated lodge guides for Uganda. Best luxury lodges, budget accommodation, gorilla trekking lodges, family-friendly options, eco lodges, and more.",
  alternates: { canonical: `${SITE_URL}/best-of` },
  openGraph: {
    title: "Best Of Guides | Uganda Lodge Recommendations",
    description:
      "Curated lodge guides for Uganda. Find the right lodge by category, activity, or destination.",
    url: `${SITE_URL}/best-of`,
    type: "website",
  },
};

function GuideCard({
  href,
  title,
  description,
  count,
  tag,
}: {
  href: string;
  title: string;
  description: string;
  count: number;
  tag?: string;
}) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
    >
      {tag && (
        <span className="inline-block px-2 py-0.5 bg-gold/10 text-gold text-xs font-medium rounded-full mb-3">
          {tag}
        </span>
      )}
      <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg group-hover:text-gold transition-colors mb-2">
        {title}
      </h3>
      <p className="text-olive-dark/70 text-sm leading-relaxed mb-3">
        {description}
      </p>
      <p className="text-olive-dark/50 text-xs">
        {count} {count === 1 ? "lodge" : "lodges"} listed
      </p>
    </Link>
  );
}

export default async function BestOfHubPage() {
  const lodges = await getLodges();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Best Of Guides — Uganda Lodges",
    description: "Curated lodge guides for Uganda by category, activity and destination.",
    url: `${SITE_URL}/best-of`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Best Of Guides
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Curated lodge recommendations by category, activity, and destination.
            Each guide helps you find the right accommodation for your Uganda trip.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* By Category */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-6">
            By Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {comparisonPages.map((p) => {
              const count = lodges.filter(p.filter).length;
              return (
                <GuideCard
                  key={p.slug}
                  href={`/lodges/best/${p.slug}`}
                  title={p.title}
                  description={p.description}
                  count={count}
                  tag="Best Of"
                />
              );
            })}
          </div>
        </section>

        {/* By Destination / Activity */}
        <section className="mb-14">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-6">
            By Destination & Activity
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nearPages.map((p) => {
              const count = lodges.filter(p.filter).length;
              return (
                <GuideCard
                  key={p.slug}
                  href={`/${p.slug}`}
                  title={p.h1.replace(/ \(2026\)$/, "")}
                  description={p.seoDescription}
                  count={count}
                  tag="Guide"
                />
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Not sure where to start?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Try our Lodge Finder — answer three quick questions and get personalised recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lodge-finder"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Open Lodge Finder
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cream/30 text-cream rounded-lg hover:bg-cream/10 transition-colors text-sm font-medium"
            >
              Ask on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
