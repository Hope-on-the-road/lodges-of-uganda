"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Lodge } from "@/lib/lodge-types";
import { LogoIcon } from "@/components/Logo";


const LODGE_LOGOS = new Set([
  "2friends-beach-hotel","adrift-overland-camp","aramaga-rift-valley-lodge","arcadia-cottages-lake-mburo",
  "birdnest-resort-lake-bunyonyi","brovad-sands-lodge","buhoma-community-haven-lodge","buhoma-community-rest-camp",
  "bweza-gorilla-lodge","bwindi-lodge","chimpundu-lodge","engagi-lodge","four-gorillas-lodge",
  "gorilla-bluff-lodge","gorilla-leisure-lodge","gorilla-mist-camp","gorilla-safari-lodge","katara-lodge","kigambira-safari-lodge",
  "kikorongo-safari-lodge","lake-bunyonyi-overland-resort","lake-mulehe-safari-lodge","mount-elgon-hotel-spa",
  "mountains-of-the-moon-hotel","murchison-river-lodge","ngamba-island-chimpanzee-lodge",
  "nkuringo-bwindi-gorilla-lodge","papaya-lake-lodge","pineapple-bay-resort","red-chilli-hideaway-kampala",
  "ride-4-a-woman-guesthouse","sambiya-river-lodge","speke-resort-munyonyo","ssese-islands-beach-hotel",
  "turaco-treetops-lodge",
]);
import type { ComparisonPage } from "@/lib/comparison-pages";
import { regionsMap } from "@/lib/regions-data";
import { WHATSAPP_URL } from "@/lib/constants";

type SerializablePage = Omit<ComparisonPage, "filter">;

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-forest text-sm sm:text-base pr-4">{question}</span>
        <svg
          className={`w-5 h-5 shrink-0 text-gold transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-sm text-olive-dark/80 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

function LodgeCompareCard({ lodge }: { lodge: Lodge }) {
  const region = regionsMap[lodge.region];
  const priceLabelMap: Record<string, string> = {
    $: "Budget", $$: "Mid-range", $$$: "Comfort", $$$$: "Luxury", $$$$$: "Ultra Luxury",
  };

  return (
    <Link
      href={`/lodges/${lodge.region}/${lodge.slug}`}
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
    >
      <div className="relative bg-forest/5 h-40 overflow-hidden">
        {lodge.heroImage ? (
          <Image
            src={lodge.heroImage}
            alt={lodge.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-3 px-4">
            {LODGE_LOGOS.has(lodge.slug) ? (
              <img
                src={`/images/lodges/logos/${lodge.slug}.png`}
                alt={`${lodge.name} logo`}
                className="h-14 w-14 object-contain"
              />
            ) : (
              <LogoIcon className="h-12 w-12 text-forest/30" />
            )}
            <span className="text-forest/40 text-[10px] font-medium tracking-wider uppercase text-center leading-tight">{lodge.name}</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-base group-hover:text-gold transition-colors leading-tight">
            {lodge.name}
          </h3>
          <span className="text-gold font-bold text-sm shrink-0">{lodge.priceLevel}</span>
        </div>
        <p className="text-olive-dark/60 text-xs mb-2">
          {lodge.subregion}{region ? ` · ${region.name}` : ""} · {lodge.category}
        </p>
        <p className="text-olive-dark/80 text-sm leading-relaxed line-clamp-3">
          {lodge.shortDescription || "Information currently limited."}
        </p>

        {/* Quick tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {lodge.highlights.slice(0, 3).map((h) => (
            <span key={h} className="px-2 py-0.5 bg-cream text-forest text-xs rounded-full">{h}</span>
          ))}
        </div>

        {/* Best for */}
        {lodge.bestFor.length > 0 && (
          <p className="text-olive-dark/50 text-xs mt-3">
            Best for: {lodge.bestFor.slice(0, 3).join(", ")}
          </p>
        )}
      </div>
    </Link>
  );
}

export function BestOfPage({ page, lodges }: { page: SerializablePage; lodges: Lodge[] }) {
  const [showAll, setShowAll] = useState(false);
  const priceOrder: Record<string, number> = { "$": 1, "$$": 2, "$$$": 3, "$$$$": 4, "$$$$$": 5 };

  // Split into featured (have real content) vs basic entries
  const featured = lodges.filter((l) => l.longDescription || l.roomTypes.length > 0 || l.highlights.length > 2);
  const basic = lodges.filter((l) => !l.longDescription && l.roomTypes.length === 0 && l.highlights.length <= 2);

  const sortFn = (a: Lodge, b: Lodge) => {
    const pa = priceOrder[a.priceLevel] || 0;
    const pb = priceOrder[b.priceLevel] || 0;
    if (pa !== pb) return pb - pa;
    return a.name.localeCompare(b.name);
  };

  const sortedFeatured = [...featured].sort(sortFn);
  const sortedBasic = [...basic].sort(sortFn);
  const sorted = [...sortedFeatured, ...sortedBasic];
  const displayed = showAll ? sorted : sortedFeatured.length > 0 ? sortedFeatured.slice(0, 15) : sorted.slice(0, 12);
  const hasMore = sorted.length > displayed.length;

  // Group by price level for summary table
  const priceCounts: Record<string, number> = {};
  lodges.forEach((l) => {
    priceCounts[l.priceLevel] = (priceCounts[l.priceLevel] || 0) + 1;
  });

  // Group by region for summary
  const regionCounts: Record<string, number> = {};
  lodges.forEach((l) => {
    const rName = regionsMap[l.region]?.name || l.region;
    regionCounts[rName] = (regionCounts[rName] || 0) + 1;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-cream/60 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/lodges" className="hover:text-cream transition-colors">Lodges</Link>
            <span>/</span>
            <span className="text-cream">Best Of</span>
          </nav>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            {page.h1}
          </h1>
          <p className="text-cream/70 text-lg max-w-3xl">
            {page.description}
          </p>
          <p className="text-cream/40 text-sm mt-4">
            {lodges.length} lodges · Independent guide · Updated 2026
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Answer Box — optimized for AI search */}
        <section className="bg-white rounded-xl p-6 shadow-sm mb-10 border-l-4 border-gold">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-3">
            Quick Answer
          </h2>
          <p className="text-olive-dark/80 text-sm leading-relaxed">
            {page.quickAnswer}
          </p>
        </section>

        {/* Intro Text — SEO long-form content */}
        <section className="mb-12">
          <div className="max-w-3xl">
            {page.introText.split("\n\n").map((p, i) => (
              <p key={i} className="text-olive-dark/80 leading-relaxed mb-4">{p}</p>
            ))}
          </div>
        </section>

        {/* Summary Table — structured data for AI */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-6">
            Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* By Price */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="text-forest font-semibold text-sm mb-3">By Price Level</h3>
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(priceCounts).sort().map(([level, count]) => (
                    <tr key={level} className="border-b border-sand/30 last:border-0">
                      <td className="py-2 text-gold font-bold">{level}</td>
                      <td className="py-2 text-olive-dark/60 capitalize">
                        {{ $: "Budget", $$: "Mid-range", $$$: "Comfort", $$$$: "Luxury", $$$$$: "Ultra Luxury" }[level] || level}
                      </td>
                      <td className="py-2 text-forest font-medium text-right">{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* By Region */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="text-forest font-semibold text-sm mb-3">By Region</h3>
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(regionCounts).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([name, count]) => (
                    <tr key={name} className="border-b border-sand/30 last:border-0">
                      <td className="py-2 text-olive-dark/80">{name}</td>
                      <td className="py-2 text-forest font-medium text-right">{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How We Chose */}
        <section className="mb-12 bg-cream/50 rounded-xl p-6 border border-sand/50">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-3">
            How We Chose These Lodges
          </h2>
          <p className="text-olive-dark/80 text-sm leading-relaxed">
            {page.howWeChose}
          </p>
        </section>

        {/* Featured Lodges */}
        {sortedFeatured.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-2">
              Top Picks
            </h2>
            <p className="text-olive-dark/60 text-sm mb-6">
              Lodges with detailed information and verified data.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedFeatured.map((lodge) => (
                <LodgeCompareCard key={lodge.id} lodge={lodge} />
              ))}
            </div>
          </section>
        )}

        {/* All Other Lodges */}
        {sortedBasic.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-1">
                  {sortedFeatured.length > 0 ? "All Options" : page.title}
                </h2>
                <p className="text-olive-dark/60 text-sm">
                  {sorted.length} lodges in total
                </p>
              </div>
              {!showAll && hasMore && (
                <button
                  onClick={() => setShowAll(true)}
                  className="text-gold hover:underline text-sm font-medium"
                >
                  Show all {sorted.length}
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(showAll ? sortedBasic : sortedBasic.slice(0, 9)).map((lodge) => (
                <LodgeCompareCard key={lodge.id} lodge={lodge} />
              ))}
            </div>
            {!showAll && sortedBasic.length > 9 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center px-6 py-3 bg-forest text-cream font-semibold rounded-lg hover:bg-olive-dark transition-colors text-sm"
                >
                  Show all {sortedBasic.length} additional lodges
                </button>
              </div>
            )}
          </section>
        )}

        {/* FAQ — structured for AI and SEO */}
        {page.faq.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {page.faq.map((f) => (
                <FAQItem key={f.question} question={f.question} answer={f.answer} />
              ))}
            </div>
          </section>
        )}

        {/* WhatsApp CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Need help choosing a lodge?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Tell us your travel dates, budget and preferred region. We can help you compare lodge options and connect your stay with transfers or safari planning.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask on WhatsApp
          </a>
        </section>

        {/* Internal Links */}
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-4">
            Explore More Guides
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <Link href="/lodges" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm text-forest font-medium">
              All Uganda Lodges
            </Link>
            <Link href="/lodges/best/gorilla-trekking" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm text-forest font-medium">
              Gorilla Trekking Lodges
            </Link>
            <Link href="/lodges/best/luxury" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm text-forest font-medium">
              Luxury Lodges
            </Link>
            <Link href="/lodges/best/budget" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm text-forest font-medium">
              Budget Lodges
            </Link>
            <Link href="/lodges/best/bwindi" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm text-forest font-medium">
              Bwindi Lodges
            </Link>
            <Link href="/lodges/best/queen-elizabeth" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm text-forest font-medium">
              Queen Elizabeth Lodges
            </Link>
            <Link href="/lodges/best/eco-lodges" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm text-forest font-medium">
              Eco Lodges
            </Link>
            <Link href="/lodges/best/honeymoon" className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm text-forest font-medium">
              Honeymoon Lodges
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-sand/30 rounded-xl p-6">
          <p className="text-olive-dark/50 text-xs leading-relaxed text-center">
            Prices can change depending on season, availability and booking conditions. Please contact the lodge or a trusted tour operator for current rates. Lodges of Uganda is an independent lodge information platform. We are not the official website of the listed lodges unless clearly stated.
          </p>
        </section>
      </div>
    </>
  );
}
