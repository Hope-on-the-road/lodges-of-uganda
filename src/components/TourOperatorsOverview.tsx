"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { TourOperator } from "@/lib/tour-operator-types";
import { OperatorCard } from "./OperatorCard";
import { OPERATORS_PER_PAGE as PAGE_SIZE } from "@/lib/operator-directory";

export function TourOperatorsOverview({ operators }: { operators: TourOperator[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [specFilter, setSpecFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const allSpecs = useMemo(() => {
    const specs = new Set<string>();
    operators.forEach((op) => op.specializations.forEach((s) => specs.add(s)));
    return ["All", ...Array.from(specs).sort()];
  }, [operators]);

  const filtered = useMemo(() => {
    const result = operators.filter((op) => {
      if (specFilter !== "All" && !op.specializations.includes(specFilter as never)) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          op.name.toLowerCase().includes(q) ||
          op.location.toLowerCase().includes(q) ||
          op.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
    setVisibleCount(PAGE_SIZE);
    return result;
  }, [operators, specFilter, searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Uganda Tour Operators
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Independent directory of safari and tour operators in Uganda. Verified facts, no subjective ratings — just the information you need to choose.
          </p>
        </div>
      </section>

      {/* Operator CTA Banner */}
      <section className="bg-gold/10 border-b border-gold/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <div>
              <p className="font-semibold text-forest text-sm">Are you a tour operator in Uganda?</p>
              <p className="text-olive-dark/60 text-xs">Get your free profile — add your logo, photos, contact details and let travelers find you.</p>
            </div>
          </div>
          <Link
            href="/tour-operators/add"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Your Company — Free
          </Link>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            placeholder="Search operators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-3 bg-white rounded-xl border border-sand focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm"
          />
          <select
            value={specFilter}
            onChange={(e) => setSpecFilter(e.target.value)}
            className="px-3 py-2.5 bg-white rounded-lg border border-sand text-sm text-forest focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            {allSpecs.map((s) => (
              <option key={s} value={s}>{s === "All" ? "All Specializations" : s}</option>
            ))}
          </select>
        </div>

        {/* Results */}
        <p className="text-olive-dark/60 text-sm mb-6">
          {filtered.length} {filtered.length === 1 ? "operator" : "operators"}
        </p>

        {filtered.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.slice(0, visibleCount).map((op) => (
                <OperatorCard key={op.id} operator={op} />
              ))}
            </div>
            {visibleCount < filtered.length && (
              <div className="text-center mt-10">
                <button
                  onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-forest text-cream font-semibold rounded-xl hover:bg-olive-dark transition-colors text-sm"
                >
                  Show More ({filtered.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-olive-dark/60 text-lg mb-2">No operators match your search.</p>
            <button
              onClick={() => { setSearchQuery(""); setSpecFilter("All"); }}
              className="text-gold hover:underline text-sm"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Info Box */}
        <section className="mt-16 bg-cream/50 rounded-xl p-6 border border-sand/50">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">
            About the Trust Score
          </h2>
          <p className="text-olive-dark/70 text-sm leading-relaxed mb-3">
            Our Trust Score is based entirely on factual, verifiable data points — company registration, online presence, review platform profiles, and years of operation. We do not use subjective ratings or pay-for-placement.
          </p>
          <p className="text-olive-dark/50 text-xs leading-relaxed">
            Are you a tour operator in Uganda?{" "}
            <Link href="/tour-operators/add" className="text-gold hover:underline">
              Request your free profile
            </Link>
          </p>
        </section>

        {/* Disclaimer */}
        <section className="mt-8">
          <p className="text-olive-dark/50 text-xs leading-relaxed text-center">
            Lodges of Uganda is an independent information platform. Tour operator profiles are based on publicly available information. We do not endorse or guarantee any service.
          </p>
        </section>
      </div>
    </>
  );
}
