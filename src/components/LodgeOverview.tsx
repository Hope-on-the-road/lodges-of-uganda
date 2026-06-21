"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LodgeListItem } from "@/lib/lodge-types";
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
import type { Region } from "@/lib/lodge-types";


const CATEGORIES = [
  "All",
  "Budget",
  "Mid-range",
  "Comfort",
  "Luxury",
  "Ultra Luxury",
  "Community Lodge",
  "Eco Lodge",
  "Safari Camp",
  "Guesthouse",
  "Hotel",
  "Resort",
];

const PRICE_LEVELS = ["All", "$", "$$", "$$$", "$$$$", "$$$$$"];

const PRICE_EXPLANATIONS: { level: string; label: string; range: string }[] = [
  { level: "$", label: "Budget", range: "under $50/night" },
  { level: "$$", label: "Mid-range", range: "$50 – $150/night" },
  { level: "$$$", label: "Comfort", range: "$150 – $300/night" },
  { level: "$$$$", label: "Luxury", range: "$300 – $600/night" },
  { level: "$$$$$", label: "Ultra Luxury", range: "$600+/night" },
];

function PriceLevelInfo() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="ml-1.5 inline-flex items-center justify-center w-5 h-5 rounded-full border border-sand text-olive-dark/50 hover:text-forest hover:border-forest/30 transition-colors text-xs leading-none"
        aria-label="Price level explanation"
        type="button"
      >
        ?
      </button>
      {open && (
        <div className="absolute z-50 top-full mt-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-64 bg-white rounded-xl shadow-lg border border-sand p-4">
          <p className="text-forest font-semibold text-xs mb-2.5">Price Levels Explained</p>
          <ul className="space-y-1.5">
            {PRICE_EXPLANATIONS.map((p) => (
              <li key={p.level} className="flex items-baseline justify-between text-xs">
                <span className="text-gold font-bold w-14 shrink-0">{p.level}</span>
                <span className="text-forest font-medium w-20 shrink-0">{p.label}</span>
                <span className="text-olive-dark/60 text-right">{p.range}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function LodgeCard({ lodge }: { lodge: LodgeListItem }) {
  const priceLabelMap: Record<string, string> = {
    $: "Budget",
    $$: "Mid-range",
    $$$: "Comfort",
    $$$$: "Luxury",
    $$$$$: "Ultra Luxury",
  };

  return (
    <Link
      href={`/lodges/${lodge.region}/${lodge.slug}`}
      className="block bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group"
    >
      <div className="relative bg-gradient-to-br from-forest/5 to-sand/30 h-48 overflow-hidden">
        {lodge.heroImage ? (
          <Image
            src={lodge.heroImage}
            alt={lodge.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-3 px-4">
            {LODGE_LOGOS.has(lodge.slug) ? (
              <img
                src={`/images/lodges/logos/${lodge.slug}.png`}
                alt={`${lodge.name} logo`}
                className="h-16 w-16 object-contain"
              />
            ) : (
              <LogoIcon className="h-14 w-14 text-forest/30" />
            )}
            <span className="text-forest/40 text-[10px] font-medium tracking-wider uppercase text-center leading-tight">{lodge.name}</span>
          </div>
        )}
        {/* Price badge overlay */}
        <span className="absolute top-3 right-3 px-3 py-1.5 bg-gold text-white font-bold text-xs rounded-full shadow-md">
          {lodge.priceLevel} <span className="font-normal opacity-90">{priceLabelMap[lodge.priceLevel] || ""}</span>
        </span>
        {/* Verified badge */}
        {lodge.verifiedVisit === "personally-visited" && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-gold/90 text-white text-xs font-medium rounded-full shadow-sm">
            Visited
          </span>
        )}
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-base group-hover:text-gold transition-colors leading-tight mb-1">
          {lodge.name}
        </h3>
        <p className="text-olive-dark/50 text-xs mb-2.5">
          {lodge.subregion} · {lodge.category}
        </p>
        <p className="text-olive-dark/70 text-sm leading-relaxed line-clamp-2">
          {lodge.shortDescription || "Details will be added as information becomes available."}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {lodge.gorillaTracking && (
            <span className="px-2 py-0.5 bg-forest/5 text-forest/70 text-[11px] font-medium rounded-full">Gorilla Trekking</span>
          )}
          {lodge.chimpanzeeTrekking && (
            <span className="px-2 py-0.5 bg-forest/5 text-forest/70 text-[11px] font-medium rounded-full">Chimp Trekking</span>
          )}
          {lodge.gameDrive && (
            <span className="px-2 py-0.5 bg-forest/5 text-forest/70 text-[11px] font-medium rounded-full">Game Drive</span>
          )}
          {lodge.boatSafari && (
            <span className="px-2 py-0.5 bg-forest/5 text-forest/70 text-[11px] font-medium rounded-full">Boat Safari</span>
          )}
          {lodge.ecoLodge && (
            <span className="px-2 py-0.5 bg-forest/5 text-forest/70 text-[11px] font-medium rounded-full">Eco Lodge</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function LodgeOverview({ lodges, regions }: { lodges: LodgeListItem[]; regions: Region[] }) {
  const [regionFilter, setRegionFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [activityFilter, setActivityFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const priceOrder: Record<string, number> = { "$": 1, "$$": 2, "$$$": 3, "$$$$": 4, "$$$$$": 5 };

  const filtered = useMemo(() => {
    const result = lodges.filter((l) => {
      if (regionFilter !== "All" && l.region !== regionFilter) return false;
      if (categoryFilter !== "All" && l.category !== categoryFilter) return false;
      if (priceFilter !== "All" && l.priceLevel !== priceFilter) return false;
      if (activityFilter === "Gorilla Trekking" && !l.gorillaTracking) return false;
      if (activityFilter === "Chimpanzee Trekking" && !l.chimpanzeeTrekking) return false;
      if (activityFilter === "Boat Safari" && !l.boatSafari) return false;
      if (activityFilter === "Game Drive" && !l.gameDrive) return false;
      if (activityFilter === "Eco Lodge" && !l.ecoLodge) return false;
      if (activityFilter === "Family Friendly" && !l.familyFriendly) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          l.name.toLowerCase().includes(q) ||
          l.subregion.toLowerCase().includes(q) ||
          l.shortDescription.toLowerCase().includes(q)
        );
      }
      return true;
    });
    // Sort: Region → Price (high to low) → Name
    return result.sort((a, b) => {
      if (a.region !== b.region) return a.region.localeCompare(b.region);
      const pa = priceOrder[a.priceLevel] || 0;
      const pb = priceOrder[b.priceLevel] || 0;
      if (pa !== pb) return pb - pa;
      return a.name.localeCompare(b.name);
    });
  }, [lodges, regionFilter, categoryFilter, priceFilter, activityFilter, searchQuery]);

  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Uganda Lodge Guide
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Browse and compare lodges across Uganda. Independent information to help you choose the right accommodation for your trip.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search lodges by name, location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-white rounded-xl border border-sand focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm"
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="px-3 py-2.5 bg-white rounded-lg border border-sand text-sm text-forest focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            <option value="All">All Regions</option>
            {[...regions].sort((a, b) => a.name.localeCompare(b.name)).map((r) => (
              <option key={r.slug} value={r.slug}>{r.name}</option>
            ))}
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2.5 bg-white rounded-lg border border-sand text-sm text-forest focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c === "All" ? "All Categories" : c}</option>
            ))}
          </select>

          <div className="relative">
            <div className="flex items-center gap-0">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-3 py-2.5 bg-white rounded-lg border border-sand text-sm text-forest focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                {PRICE_LEVELS.map((p) => (
                  <option key={p} value={p}>{p === "All" ? "All Price Levels" : p}</option>
                ))}
              </select>
              <PriceLevelInfo />
            </div>
          </div>

          <select
            value={activityFilter}
            onChange={(e) => setActivityFilter(e.target.value)}
            className="px-3 py-2.5 bg-white rounded-lg border border-sand text-sm text-forest focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            <option value="All">All Activities</option>
            <option value="Gorilla Trekking">Gorilla Trekking</option>
            <option value="Chimpanzee Trekking">Chimpanzee Trekking</option>
            <option value="Game Drive">Game Drive</option>
            <option value="Boat Safari">Boat Safari</option>
            <option value="Eco Lodge">Eco Lodge</option>
            <option value="Family Friendly">Family Friendly</option>
          </select>
        </div>

        {/* Price level legend */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-xs text-olive-dark/50">
          {PRICE_EXPLANATIONS.map((p) => (
            <span key={p.level}>
              <span className="text-gold font-bold">{p.level}</span>{" "}
              {p.label} ({p.range})
            </span>
          ))}
        </div>

        {/* Results count */}
        <p className="text-olive-dark/60 text-sm mb-6">
          Showing {filtered.length} of {lodges.length} lodges
        </p>

        {/* Lodge Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((lodge) => (
              <LodgeCard key={lodge.id} lodge={lodge} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-olive-dark/60 text-lg mb-2">No lodges match your filters.</p>
            <button
              onClick={() => {
                setRegionFilter("All");
                setCategoryFilter("All");
                setPriceFilter("All");
                setActivityFilter("All");
                setSearchQuery("");
              }}
              className="text-gold hover:underline text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Region Links */}
        <section className="mt-16" id="regions">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-6">
            Browse by Region
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[...regions].sort((a, b) => a.name.localeCompare(b.name)).map((r) => {
              const count = lodges.filter((l) => l.region === r.slug).length;
              return (
                <Link
                  key={r.slug}
                  href={`/regions/${r.slug}`}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-forest font-semibold text-sm mb-1">{r.name}</h3>
                  <p className="text-olive-dark/60 text-xs">{count} {count === 1 ? "lodge" : "lodges"}</p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-12 bg-cream/50 rounded-xl p-6 border border-sand/50">
          <p className="text-olive-dark/50 text-xs leading-relaxed text-center">
            Lodges of Uganda is an independent lodge information platform. We are not the official website of the listed lodges unless clearly stated. Information may change and should be confirmed directly with the lodge or travel provider before booking.
          </p>
        </section>
      </div>
    </>
  );
}
