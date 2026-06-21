"use client";

import { useState } from "react";
import Link from "next/link";
import type { LodgeListItem, Region } from "@/lib/lodge-types";
import { WHATSAPP_URL } from "@/lib/constants";

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

function LodgeRow({ lodge }: { lodge: LodgeListItem }) {
  return (
    <Link
      href={`/lodges/${lodge.region}/${lodge.slug}`}
      className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-forest group-hover:text-gold transition-colors text-sm sm:text-base">
            {lodge.name}
          </h3>
          <p className="text-olive-dark/60 text-xs mt-1">
            {lodge.subregion} · {lodge.category} · <span className="text-gold font-bold">{lodge.priceLevel}</span>
          </p>
          {lodge.shortDescription && (
            <p className="text-olive-dark/80 text-sm mt-2 line-clamp-2">{lodge.shortDescription}</p>
          )}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {lodge.gorillaTracking && (
              <span className="px-2 py-0.5 bg-forest/5 text-forest text-xs rounded-full">Gorilla Trekking</span>
            )}
            {lodge.chimpanzeeTrekking && (
              <span className="px-2 py-0.5 bg-forest/5 text-forest text-xs rounded-full">Chimp Trekking</span>
            )}
            {lodge.gameDrive && (
              <span className="px-2 py-0.5 bg-forest/5 text-forest text-xs rounded-full">Game Drive</span>
            )}
            {lodge.boatSafari && (
              <span className="px-2 py-0.5 bg-forest/5 text-forest text-xs rounded-full">Boat Safari</span>
            )}
          </div>
        </div>
        <svg className="w-5 h-5 text-olive-dark/30 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

export function RegionPage({ region, lodges }: { region: Region; lodges: LodgeListItem[] }) {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const priceOrder: Record<string, number> = { "$": 1, "$$": 2, "$$$": 3, "$$$$": 4, "$$$$$": 5 };
  const categories = ["All", ...Array.from(new Set(lodges.map((l) => l.category)))];
  const filtered = (categoryFilter === "All" ? lodges : lodges.filter((l) => l.category === categoryFilter))
    .sort((a, b) => {
      const pa = priceOrder[a.priceLevel] || 0;
      const pb = priceOrder[b.priceLevel] || 0;
      if (pa !== pb) return pb - pa;
      return a.name.localeCompare(b.name);
    });

  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-cream/60 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/lodges" className="hover:text-cream transition-colors">Lodges</Link>
            <span>/</span>
            <span className="text-cream">{region.name}</span>
          </nav>

          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            {region.name}
          </h1>
          <p className="text-cream/80 text-lg max-w-3xl">
            {region.description}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About the Region */}
            <section>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">About the Region</h2>
              <div className="prose prose-olive max-w-none">
                {region.longDescription.split("\n\n").map((p, i) => (
                  <p key={i} className="text-olive-dark/80 leading-relaxed mb-4">{p}</p>
                ))}
              </div>
            </section>

            {/* Highlights */}
            {region.highlights.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Highlights</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {region.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-olive-dark/80">
                      <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Activities */}
            {region.activities.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Activities</h2>
                <div className="flex flex-wrap gap-2">
                  {region.activities.map((a) => (
                    <span key={a} className="inline-flex items-center px-3 py-1.5 bg-white rounded-lg text-sm text-forest shadow-sm">
                      {a}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Comparison Table — optimized for AI search */}
            {lodges.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
                  Lodge Comparison — {region.name}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow-sm text-sm">
                    <thead>
                      <tr className="bg-cream/50 text-left">
                        <th className="px-3 py-2.5 font-semibold text-forest">Lodge</th>
                        <th className="px-3 py-2.5 font-semibold text-forest">Category</th>
                        <th className="px-3 py-2.5 font-semibold text-forest">Price</th>
                        <th className="px-3 py-2.5 font-semibold text-forest hidden sm:table-cell">Sector</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.slice(0, 20).map((l) => (
                        <tr key={l.id} className="border-t border-sand/20 hover:bg-cream/30">
                          <td className="px-3 py-2">
                            <Link href={`/lodges/${l.region}/${l.slug}`} className="text-gold hover:underline font-medium">
                              {l.name}
                            </Link>
                          </td>
                          <td className="px-3 py-2 text-olive-dark/70">{l.category}</td>
                          <td className="px-3 py-2 text-gold font-bold">{l.priceLevel}</td>
                          <td className="px-3 py-2 text-olive-dark/50 hidden sm:table-cell">{l.subregion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filtered.length > 20 && (
                  <p className="text-olive-dark/40 text-xs mt-2">Showing top 20 of {filtered.length} lodges.</p>
                )}
              </section>
            )}

            {/* Lodges in Region */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
                  Lodges in {region.name}
                </h2>
                <span className="text-olive-dark/60 text-sm">{lodges.length} {lodges.length === 1 ? "lodge" : "lodges"}</span>
              </div>

              {categories.length > 2 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCategoryFilter(c)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        categoryFilter === c
                          ? "bg-forest text-cream"
                          : "bg-white text-forest hover:bg-forest/5"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}

              <div className="space-y-3">
                {filtered.map((lodge) => (
                  <LodgeRow key={lodge.id} lodge={lodge} />
                ))}
              </div>

              {filtered.length === 0 && (
                <p className="text-olive-dark/60 text-center py-8">
                  No lodges found for this category.
                </p>
              )}
            </section>

            {/* FAQ */}
            {region.faq.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {region.faq.map((f) => (
                    <FAQItem key={f.question} question={f.question} answer={f.answer} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Travel Info */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="text-forest font-semibold text-sm mb-3">Best Time to Visit</h3>
              <p className="text-olive-dark/80 text-sm leading-relaxed">{region.bestTimeToVisit}</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="text-forest font-semibold text-sm mb-3">Getting There</h3>
              <p className="text-olive-dark/80 text-sm leading-relaxed">{region.gettingThere}</p>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-forest rounded-xl p-6 text-cream">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-3">
                Need help planning?
              </h3>
              <p className="text-cream/70 text-sm mb-5 leading-relaxed">
                Tell us your travel dates, budget and interests. We can recommend lodges and help plan your stay in {region.name}.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ask on WhatsApp
              </a>
            </div>

            {/* Explore More */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="text-forest font-semibold text-sm mb-3">Explore More</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/lodges" className="text-gold hover:underline text-sm">
                    Browse all Uganda lodges
                  </Link>
                </li>
                <li>
                  <Link href="/best-of" className="text-gold hover:underline text-sm">
                    Best Of Guides
                  </Link>
                </li>
                <li>
                  <Link href="/lodge-finder" className="text-gold hover:underline text-sm">
                    Lodge Finder Quiz
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Disclaimer */}
      <section className="bg-sand/30 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-olive-dark/50 text-xs leading-relaxed text-center">
            Lodges of Uganda is an independent lodge information platform. We are not the official website of the listed lodges unless clearly stated. Information may change and should be confirmed directly with the lodge or travel provider before booking.
          </p>
        </div>
      </section>
    </>
  );
}
