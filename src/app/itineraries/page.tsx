import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Safari Itineraries Uganda | Suggested Routes with Lodge Picks",
  description:
    "Three tried-and-tested Uganda safari itineraries — 7, 10, and 14 days — with recommended lodges at every budget level. Gorilla trekking, wildlife, and primates.",
  alternates: { canonical: `${SITE_URL}/itineraries` },
  openGraph: {
    title: "Safari Itineraries Uganda | Suggested Routes with Lodge Picks",
    description:
      "Detailed day-by-day Uganda safari routes with budget, mid-range, and luxury lodge recommendations at every stop.",
    url: `${SITE_URL}/itineraries`,
    type: "website",
  },
};

const itineraries = [
  {
    slug: "7-day-gorilla-safari",
    title: "7 Days: Gorilla Trekking & Queen Elizabeth Safari",
    duration: "7 days",
    highlights: [
      "Gorilla trekking in Bwindi",
      "Tree-climbing lions in Ishasha",
      "Kazinga Channel boat safari",
      "Game drives in Queen Elizabeth NP",
    ],
    description:
      "The classic Uganda route. Combine gorilla trekking in Bwindi with a wildlife safari in Queen Elizabeth National Park, including the famous tree-climbing lions of Ishasha.",
    price: "From $1,800 pp (budget) to $5,500 pp (luxury)",
  },
  {
    slug: "10-day-primates-wildlife",
    title: "10 Days: Primates & Big Five Wildlife",
    duration: "10 days",
    highlights: [
      "Chimpanzee trekking in Kibale",
      "Gorilla trekking in Bwindi",
      "Queen Elizabeth game drives",
      "Relaxation at Lake Bunyonyi",
    ],
    description:
      "Uganda's two great primates plus a full wildlife safari. Track chimpanzees in Kibale, see big game in Queen Elizabeth, trek gorillas in Bwindi, and wind down at Lake Bunyonyi.",
    price: "From $2,600 pp (budget) to $8,000 pp (luxury)",
  },
  {
    slug: "14-day-complete-uganda",
    title: "14 Days: The Complete Uganda Experience",
    duration: "14 days",
    highlights: [
      "Murchison Falls & Nile boat cruise",
      "Chimpanzees in Kibale",
      "Gorillas in Bwindi",
      "Queen Elizabeth NP",
      "Lake Bunyonyi",
      "Jinja — Source of the Nile",
    ],
    description:
      "The ultimate Uganda itinerary covering the north and the south. From Murchison Falls to Bwindi, with every major national park, both great primates, and time on the water.",
    price: "From $3,800 pp (budget) to $12,000 pp (luxury)",
  },
];

export default function ItinerariesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Uganda Safari Itineraries",
    description:
      "Curated safari itineraries for Uganda with recommended lodges at every budget level.",
    url: `${SITE_URL}/itineraries`,
    mainEntity: itineraries.map((it) => ({
      "@type": "Trip",
      name: it.title,
      url: `${SITE_URL}/itineraries/${it.slug}`,
      description: it.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-sand/30 border-b border-sand/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-olive-dark/50">
            <Link href="/" className="hover:text-forest transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-olive-dark/80">Itineraries</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Uganda Safari Itineraries
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            We&apos;ve designed these routes based on our experience in Uganda.
            Each includes recommended lodges at every price level — budget,
            mid-range, and luxury.
          </p>
        </div>
      </section>

      {/* Itinerary Cards */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {itineraries.map((it) => (
            <Link
              key={it.slug}
              href={`/itineraries/${it.slug}`}
              className="block group"
            >
              <div className="bg-cream/50 rounded-xl border border-sand/50 p-6 sm:p-8 hover:border-gold/40 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block bg-forest/10 text-forest text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {it.duration}
                    </span>
                    <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl group-hover:text-gold transition-colors">
                      {it.title}
                    </h2>
                  </div>
                  <span className="text-gold text-sm font-medium whitespace-nowrap hidden sm:block">
                    View route &rarr;
                  </span>
                </div>

                <p className="text-olive-dark/80 leading-relaxed mb-4">
                  {it.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {it.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-block bg-sand/60 text-olive-dark/70 text-xs px-2.5 py-1 rounded"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <p className="text-olive-dark/60 text-sm">{it.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-12 bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Want a Custom Itinerary?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            These routes are starting points. We can adjust days, swap parks,
            and match lodges to your exact budget. Tell us what you have in
            mind.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
          >
            Chat on WhatsApp
          </a>
        </section>
      </div>
    </>
  );
}
