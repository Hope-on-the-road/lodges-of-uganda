"use client";

import Link from "next/link";
import type { Lodge } from "@/lib/lodge-types";
import { regionsMap } from "@/lib/regions-data";
import { WHATSAPP_URL } from "@/lib/constants";

function Cell({ children, highlight }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <td className={`px-4 py-3 text-sm ${highlight ? "text-forest font-medium" : "text-olive-dark/70"}`}>
      {children}
    </td>
  );
}

function TagList({ items }: { items: string[] }) {
  if (items.length === 0) return <span className="text-olive-dark/30">—</span>;
  return (
    <div className="flex flex-wrap gap-1">
      {items.slice(0, 4).map((t) => (
        <span key={t} className="px-2 py-0.5 bg-cream rounded text-xs text-forest/70">{t}</span>
      ))}
      {items.length > 4 && <span className="text-olive-dark/30 text-xs">+{items.length - 4}</span>}
    </div>
  );
}

function LodgeColumn({ lodge, label }: { lodge: Lodge; label: string }) {
  const region = regionsMap[lodge.region];
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <p className="text-gold text-xs font-medium mb-2">{label}</p>
      <Link href={`/lodges/${lodge.region}/${lodge.slug}`}>
        <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg hover:text-gold transition-colors mb-1">
          {lodge.name}
        </h3>
      </Link>
      <p className="text-olive-dark/50 text-xs mb-3">{lodge.subregion} · {region?.name || lodge.region}</p>
      <p className="text-olive-dark/70 text-sm leading-relaxed line-clamp-3">{lodge.shortDescription}</p>
      <div className="mt-3 flex items-center gap-2">
        <span className="text-gold font-bold">{lodge.priceLevel}</span>
        <span className="text-olive-dark/30">·</span>
        <span className="text-olive-dark/60 text-sm">{lodge.category}</span>
      </div>
    </div>
  );
}

export function ComparePage({ lodgeA, lodgeB, reason }: { lodgeA: Lodge; lodgeB: Lodge; reason: string }) {
  const regionA = regionsMap[lodgeA.region];
  const regionB = regionsMap[lodgeB.region];

  const priceLabelMap: Record<string, string> = {
    $: "Budget", $$: "Mid-range", $$$: "Comfort", $$$$: "Luxury", $$$$$: "Ultra Luxury",
  };

  // Determine recommendation
  const getRecommendation = () => {
    const recs: string[] = [];
    if (lodgeA.priceLevel !== lodgeB.priceLevel) {
      const priceOrder: Record<string, number> = { $: 1, $$: 2, $$$: 3, $$$$: 4, $$$$$: 5 };
      const cheaper = priceOrder[lodgeA.priceLevel] <= priceOrder[lodgeB.priceLevel] ? lodgeA : lodgeB;
      const pricier = cheaper === lodgeA ? lodgeB : lodgeA;
      recs.push(`${cheaper.name} is the more affordable option (${cheaper.priceLevel}), while ${pricier.name} positions itself at the ${priceLabelMap[pricier.priceLevel]?.toLowerCase() || pricier.priceLevel} level.`);
    }
    if (lodgeA.subregion !== lodgeB.subregion) {
      recs.push(`They are in different areas: ${lodgeA.name} in ${lodgeA.subregion} and ${lodgeB.name} in ${lodgeB.subregion}.`);
    }
    if (lodgeA.ecoLodge && !lodgeB.ecoLodge) {
      recs.push(`${lodgeA.name} has a stronger eco/community focus.`);
    } else if (lodgeB.ecoLodge && !lodgeA.ecoLodge) {
      recs.push(`${lodgeB.name} has a stronger eco/community focus.`);
    }
    return recs.join(" ");
  };

  const rows = [
    { label: "Category", a: lodgeA.category, b: lodgeB.category },
    { label: "Price Level", a: lodgeA.priceLevel + " " + (priceLabelMap[lodgeA.priceLevel] || ""), b: lodgeB.priceLevel + " " + (priceLabelMap[lodgeB.priceLevel] || "") },
    { label: "Sector / Area", a: lodgeA.subregion, b: lodgeB.subregion },
    { label: "National Park", a: lodgeA.nationalPark || "—", b: lodgeB.nationalPark || "—" },
    { label: "Distance to Park", a: lodgeA.distanceToParkGate || "—", b: lodgeB.distanceToParkGate || "—" },
    { label: "Rooms", a: lodgeA.roomTypes.length > 0 ? lodgeA.roomTypes.map((r) => r.name).join(", ") : "—", b: lodgeB.roomTypes.length > 0 ? lodgeB.roomTypes.map((r) => r.name).join(", ") : "—" },
    { label: "Dining", a: lodgeA.dining ? lodgeA.dining.slice(0, 80) + "..." : "—", b: lodgeB.dining ? lodgeB.dining.slice(0, 80) + "..." : "—" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-cream/60 text-sm mb-4" aria-label="Breadcrumb">
            <Link href="/lodges" className="hover:text-cream transition-colors">Lodges</Link>
            <span>/</span>
            <span className="text-cream">Compare</span>
          </nav>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-2xl sm:text-3xl lg:text-4xl mb-3">
            {lodgeA.name} vs {lodgeB.name}
          </h1>
          <p className="text-cream/60 text-sm">{reason} · Updated 2026</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Quick Answer */}
        <section className="bg-white rounded-xl p-6 shadow-sm mb-8 border-l-4 border-gold">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-3">Quick Answer</h2>
          <p className="text-olive-dark/80 text-sm leading-relaxed">
            {lodgeA.name} is a {lodgeA.category.toLowerCase()} ({lodgeA.priceLevel}) in {lodgeA.subregion}
            {lodgeA.bestFor.length > 0 ? `, often chosen by ${lodgeA.bestFor.slice(0, 2).join(" and ").toLowerCase()}` : ""}.
            {" "}{lodgeB.name} is a {lodgeB.category.toLowerCase()} ({lodgeB.priceLevel}) in {lodgeB.subregion}
            {lodgeB.bestFor.length > 0 ? `, well suited for ${lodgeB.bestFor.slice(0, 2).join(" and ").toLowerCase()}` : ""}.
            {" "}{getRecommendation()}
          </p>
        </section>

        {/* Side-by-Side Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <LodgeColumn lodge={lodgeA} label="Option A" />
          <LodgeColumn lodge={lodgeB} label="Option B" />
        </div>

        {/* Comparison Table */}
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-cream/50">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-olive-dark/60 w-1/4"></th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-forest w-[37.5%]">{lodgeA.name}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-forest w-[37.5%]">{lodgeB.name}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-t border-sand/20">
                    <td className="px-4 py-3 text-xs font-medium text-olive-dark/50">{row.label}</td>
                    <Cell highlight>{row.a}</Cell>
                    <Cell highlight>{row.b}</Cell>
                  </tr>
                ))}
                <tr className="border-t border-sand/20">
                  <td className="px-4 py-3 text-xs font-medium text-olive-dark/50">Highlights</td>
                  <td className="px-4 py-3"><TagList items={lodgeA.highlights.slice(0, 4)} /></td>
                  <td className="px-4 py-3"><TagList items={lodgeB.highlights.slice(0, 4)} /></td>
                </tr>
                <tr className="border-t border-sand/20">
                  <td className="px-4 py-3 text-xs font-medium text-olive-dark/50">Best For</td>
                  <td className="px-4 py-3"><TagList items={lodgeA.bestFor.slice(0, 3)} /></td>
                  <td className="px-4 py-3"><TagList items={lodgeB.bestFor.slice(0, 3)} /></td>
                </tr>
                <tr className="border-t border-sand/20">
                  <td className="px-4 py-3 text-xs font-medium text-olive-dark/50">Activities</td>
                  <td className="px-4 py-3"><TagList items={lodgeA.activities.slice(0, 4)} /></td>
                  <td className="px-4 py-3"><TagList items={lodgeB.activities.slice(0, 4)} /></td>
                </tr>
                {(lodgeA.officialWebsite || lodgeB.officialWebsite) && (
                  <tr className="border-t border-sand/20">
                    <td className="px-4 py-3 text-xs font-medium text-olive-dark/50">Website</td>
                    <td className="px-4 py-3">
                      {lodgeA.officialWebsite ? (
                        <a href={lodgeA.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-gold text-xs hover:underline">Visit website</a>
                      ) : <span className="text-olive-dark/30 text-xs">—</span>}
                    </td>
                    <td className="px-4 py-3">
                      {lodgeB.officialWebsite ? (
                        <a href={lodgeB.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-gold text-xs hover:underline">Visit website</a>
                      ) : <span className="text-olive-dark/30 text-xs">—</span>}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Who Should Choose Which */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-forest/5 rounded-xl p-5">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-base mb-3">
              Choose {lodgeA.name} if you...
            </h3>
            <ul className="space-y-2">
              {lodgeA.bestFor.slice(0, 3).map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-olive-dark/70">
                  <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {b.startsWith("Are") || b.startsWith("Want") ? b.toLowerCase() : `are looking for ${b.toLowerCase()}`}
                </li>
              ))}
              {lodgeA.highlights.slice(0, 2).map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-olive-dark/70">
                  <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  value {h.toLowerCase()}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-forest/5 rounded-xl p-5">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-base mb-3">
              Choose {lodgeB.name} if you...
            </h3>
            <ul className="space-y-2">
              {lodgeB.bestFor.slice(0, 3).map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-olive-dark/70">
                  <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {b.startsWith("Are") || b.startsWith("Want") ? b.toLowerCase() : `are looking for ${b.toLowerCase()}`}
                </li>
              ))}
              {lodgeB.highlights.slice(0, 2).map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-olive-dark/70">
                  <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  value {h.toLowerCase()}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest rounded-xl p-6 text-cream text-center mb-8">
          <p className="font-[family-name:var(--font-heading)] font-bold text-lg mb-2">Still not sure?</p>
          <p className="text-cream/60 text-sm mb-4">Tell us your dates, budget and preferences — we help you choose.</p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/lodge-finder" className="px-5 py-2.5 bg-gold text-white rounded-full text-sm font-medium hover:bg-gold-light transition-colors">
              Try Lodge Finder
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-cream/20 text-cream rounded-full text-sm font-medium hover:bg-cream/10 transition-colors">
              Ask on WhatsApp
            </a>
          </div>
        </section>

        {/* View Full Profiles */}
        <section className="flex flex-col sm:flex-row gap-3">
          <Link
            href={`/lodges/${lodgeA.region}/${lodgeA.slug}`}
            className="flex-1 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-center text-sm font-medium text-forest hover:text-gold"
          >
            View full profile: {lodgeA.name} →
          </Link>
          <Link
            href={`/lodges/${lodgeB.region}/${lodgeB.slug}`}
            className="flex-1 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow text-center text-sm font-medium text-forest hover:text-gold"
          >
            View full profile: {lodgeB.name} →
          </Link>
        </section>
      </div>
    </>
  );
}
