"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

interface FeaturedLodge {
  slug: string;
  name: string;
  heroImage: string;
  subregion: string;
  nationalPark: string;
  region: string;
  verifiedVisit: string;
}

export function FeaturedLodgesCarousel({ lodges }: { lodges: FeaturedLodge[] }) {
  // Show 2 lodges at a time; rotate the starting index through pairs
  const totalPages = Math.ceil(lodges.length / 2);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextPage = useCallback(() => {
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setPage((p) => (p - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-rotate every 6 seconds (only if more than 2 lodges)
  useEffect(() => {
    if (paused || totalPages <= 1) return;
    const timer = setInterval(nextPage, 6000);
    return () => clearInterval(timer);
  }, [paused, nextPage, totalPages]);

  // Get 2 lodges for current page
  const startIdx = page * 2;
  const visible = [
    lodges[startIdx % lodges.length],
    lodges[(startIdx + 1) % lodges.length],
  ];

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <p className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg">
            Recently Visited
          </p>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={prevPage}
                className="w-7 h-7 flex items-center justify-center rounded-full border border-sand hover:border-gold hover:bg-gold/5 text-forest/50 hover:text-gold transition-colors"
                aria-label="Previous"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-olive-dark/40 text-xs tabular-nums">
                {page + 1} / {totalPages}
              </span>
              <button
                onClick={nextPage}
                className="w-7 h-7 flex items-center justify-center rounded-full border border-sand hover:border-gold hover:bg-gold/5 text-forest/50 hover:text-gold transition-colors"
                aria-label="Next"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visible.map((lodge) => (
            <Link
              key={lodge.slug}
              href={`/lodges/${lodge.region}/${lodge.slug}`}
              className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-sand/40 hover:border-gold/40 transition-all bg-white"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={lodge.heroImage}
                  alt={lodge.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {lodge.verifiedVisit === "personally-visited" && (
                  <span className="absolute top-3 right-3 bg-white/90 text-forest text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Visited
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="font-[family-name:var(--font-heading)] font-semibold text-forest text-sm group-hover:text-gold transition-colors">
                  {lodge.name}
                </p>
                <p className="text-olive-dark/50 text-xs mt-0.5">
                  {lodge.subregion ? `${lodge.subregion}, ` : ""}
                  {lodge.nationalPark || lodge.region}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-1.5 mt-3">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === page ? "bg-gold w-4" : "bg-sand hover:bg-olive-soft"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
