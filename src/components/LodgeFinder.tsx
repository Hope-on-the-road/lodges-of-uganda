"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { LodgeListItem, Region } from "@/lib/lodge-types";
import { regionsMap } from "@/lib/regions-data";
import { WHATSAPP_NUMBER } from "@/lib/constants";

type Step = "activity" | "budget" | "style" | "results";

const ACTIVITIES = [
  { id: "gorilla", label: "Gorilla Trekking", icon: "🦍" },
  { id: "chimp", label: "Chimpanzee Trekking", icon: "🐒" },
  { id: "safari", label: "Game Drive Safari", icon: "🦁" },
  { id: "boat", label: "Boat Safari", icon: "🚤" },
  { id: "adventure", label: "Adventure & Water Sports", icon: "🏄" },
  { id: "relax", label: "Relaxation & Scenery", icon: "🌅" },
  { id: "culture", label: "Culture & Community", icon: "🏘️" },
  { id: "birding", label: "Bird Watching", icon: "🦅" },
];

const BUDGETS = [
  { id: "budget", label: "Budget", sublabel: "$ – $$", icon: "💰" },
  { id: "comfort", label: "Comfort", sublabel: "$$$", icon: "⭐" },
  { id: "luxury", label: "Luxury", sublabel: "$$$$ – $$$$$", icon: "💎" },
  { id: "any", label: "Any Budget", sublabel: "Show all", icon: "🔄" },
];

const STYLES = [
  { id: "tented", label: "Safari Camp / Tented", icon: "⛺" },
  { id: "lodge", label: "Lodge / Hotel", icon: "🏨" },
  { id: "eco", label: "Eco / Community", icon: "🌿" },
  { id: "any", label: "Any Style", icon: "🔄" },
];

function OptionCard({
  label,
  sublabel,
  icon,
  selected,
  onClick,
}: {
  label: string;
  sublabel?: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all text-center min-h-[100px] ${
        selected
          ? "border-gold bg-gold/10 shadow-md"
          : "border-sand bg-white hover:border-gold/50 hover:shadow-sm"
      }`}
    >
      <span className="text-2xl mb-1">{icon}</span>
      <span className="text-forest font-semibold text-sm">{label}</span>
      {sublabel && <span className="text-olive-dark/50 text-xs mt-0.5">{sublabel}</span>}
    </button>
  );
}

function ResultCard({ lodge }: { lodge: LodgeListItem }) {
  const region = regionsMap[lodge.region];
  return (
    <Link
      href={`/lodges/${lodge.region}/${lodge.slug}`}
      className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 group"
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest group-hover:text-gold transition-colors text-base">
          {lodge.name}
        </h3>
        <span className="text-gold font-bold text-sm shrink-0">{lodge.priceLevel}</span>
      </div>
      <p className="text-olive-dark/60 text-xs mb-2">
        {lodge.subregion} · {region?.name || lodge.region} · {lodge.category}
      </p>
      <p className="text-olive-dark/80 text-sm leading-relaxed line-clamp-2">
        {lodge.shortDescription}
      </p>
    </Link>
  );
}

function getWhatsAppUrl(activity: string | null) {
  const activityLabel = activity
    ? ACTIVITIES.find((a) => a.id === activity)?.label || activity
    : "lodges in Uganda";
  const message = `I used the Lodge Finder and I'm interested in ${activityLabel}. Can you help me plan my trip?`;
  const phone = WHATSAPP_NUMBER.replace(/[\s+]/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function LodgeFinder({ lodges, regions }: { lodges: LodgeListItem[]; regions: Region[] }) {
  const [step, setStep] = useState<Step>("activity");
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const results = useMemo(() => {
    let filtered = [...lodges];

    if (selectedActivity) {
      switch (selectedActivity) {
        case "gorilla": filtered = filtered.filter((l) => l.gorillaTracking); break;
        case "chimp": filtered = filtered.filter((l) => l.chimpanzeeTrekking); break;
        case "safari": filtered = filtered.filter((l) => l.gameDrive); break;
        case "boat": filtered = filtered.filter((l) => l.boatSafari); break;
        case "adventure": filtered = filtered.filter((l) => l.region === "jinja"); break;
        case "relax": filtered = filtered.filter((l) => ["lake-bunyonyi", "lake-mutanda", "fort-portal", "ssese-islands", "entebbe"].includes(l.region)); break;
        case "culture": filtered = filtered.filter((l) => l.ecoLodge || l.category === "Community Lodge"); break;
        case "birding": filtered = filtered.filter((l) => l.activities.some((a) => a.toLowerCase().includes("bird"))); break;
      }
    }

    if (selectedBudget && selectedBudget !== "any") {
      switch (selectedBudget) {
        case "budget": filtered = filtered.filter((l) => l.priceLevel === "$" || l.priceLevel === "$$"); break;
        case "comfort": filtered = filtered.filter((l) => l.priceLevel === "$$$"); break;
        case "luxury": filtered = filtered.filter((l) => l.priceLevel === "$$$$" || l.priceLevel === "$$$$$"); break;
      }
    }

    if (selectedStyle && selectedStyle !== "any") {
      switch (selectedStyle) {
        case "tented": filtered = filtered.filter((l) => l.category === "Safari Camp" || l.category === "Budget"); break;
        case "lodge": filtered = filtered.filter((l) => ["Luxury", "Comfort", "Mid-range", "Hotel", "Resort"].includes(l.category)); break;
        case "eco": filtered = filtered.filter((l) => l.ecoLodge || l.category === "Eco Lodge" || l.category === "Community Lodge"); break;
      }
    }

    const priceOrder: Record<string, number> = { "$": 1, "$$": 2, "$$$": 3, "$$$$": 4, "$$$$$": 5 };
    return filtered.sort((a, b) => {
      const pa = priceOrder[a.priceLevel] || 0;
      const pb = priceOrder[b.priceLevel] || 0;
      if (pa !== pb) return pb - pa;
      return a.name.localeCompare(b.name);
    });
  }, [lodges, selectedActivity, selectedBudget, selectedStyle]);

  const progress = step === "activity" ? 1 : step === "budget" ? 2 : step === "style" ? 3 : 4;

  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl mb-3">
            Uganda Lodge Finder
          </h1>
          <p className="text-cream/70 text-base">
            Answer three questions and we recommend the best lodges for your trip.
          </p>
          {/* Progress bar */}
          <div className="flex justify-center gap-2 mt-6">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`h-1.5 w-12 rounded-full transition-colors ${s <= progress ? "bg-gold" : "bg-cream/20"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Intro nudge */}
      {step === "activity" && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-0">
          <div className="bg-cream/50 border border-sand/50 rounded-xl p-5 text-center">
            <p className="text-forest font-medium text-sm sm:text-base">
              Not sure where to start? Answer 3 quick questions and we will recommend the best lodges for your trip.
            </p>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Step 1: Activity */}
        {step === "activity" && (
          <div>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-6 text-center">
              What do you want to do in Uganda?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {ACTIVITIES.map((a) => (
                <OptionCard
                  key={a.id}
                  label={a.label}
                  icon={a.icon}
                  selected={selectedActivity === a.id}
                  onClick={() => {
                    setSelectedActivity(a.id);
                    setStep("budget");
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Budget */}
        {step === "budget" && (
          <div>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-6 text-center">
              What is your budget level?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {BUDGETS.map((b) => (
                <OptionCard
                  key={b.id}
                  label={b.label}
                  sublabel={b.sublabel}
                  icon={b.icon}
                  selected={selectedBudget === b.id}
                  onClick={() => {
                    setSelectedBudget(b.id);
                    setStep("style");
                  }}
                />
              ))}
            </div>
            <button onClick={() => setStep("activity")} className="text-gold hover:underline text-sm mt-4 block mx-auto">
              ← Back
            </button>
          </div>
        )}

        {/* Step 3: Style */}
        {step === "style" && (
          <div>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-6 text-center">
              What style of accommodation do you prefer?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STYLES.map((s) => (
                <OptionCard
                  key={s.id}
                  label={s.label}
                  icon={s.icon}
                  selected={selectedStyle === s.id}
                  onClick={() => {
                    setSelectedStyle(s.id);
                    setStep("results");
                  }}
                />
              ))}
            </div>
            <button onClick={() => setStep("budget")} className="text-gold hover:underline text-sm mt-4 block mx-auto">
              ← Back
            </button>
          </div>
        )}

        {/* Step 4: Results */}
        {step === "results" && (
          <div>
            <div className="text-center mb-8">
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
                {results.length > 0
                  ? `We found ${results.length} lodges for you`
                  : "No exact matches found"}
              </h2>
              <p className="text-olive-dark/60 text-sm">
                {selectedActivity && ACTIVITIES.find((a) => a.id === selectedActivity)?.label}
                {selectedBudget && selectedBudget !== "any" && ` · ${BUDGETS.find((b) => b.id === selectedBudget)?.label}`}
                {selectedStyle && selectedStyle !== "any" && ` · ${STYLES.find((s) => s.id === selectedStyle)?.label}`}
              </p>
            </div>

            {results.length > 0 ? (
              <div className="space-y-3">
                {results.slice(0, 15).map((lodge) => (
                  <ResultCard key={lodge.id} lodge={lodge} />
                ))}
                {results.length > 15 && (
                  <p className="text-olive-dark/60 text-sm text-center pt-4">
                    + {results.length - 15} more lodges.{" "}
                    <Link href="/lodges" className="text-gold hover:underline">Browse all lodges</Link>
                  </p>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-olive-dark/60 mb-4">Try adjusting your preferences for more results.</p>
                <Link href="/lodges" className="text-gold hover:underline">Browse all lodges instead</Link>
              </div>
            )}

            {/* CTA section */}
            <div className="mt-10 bg-forest/5 border border-forest/10 rounded-xl p-6 sm:p-8 text-center">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-2">
                Want us to plan your route?
              </h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed max-w-lg mx-auto mb-6">
                Tell us your dates and we will suggest the perfect lodge combination with transfers and activities — free of charge.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppUrl(selectedActivity)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-gold text-white rounded-lg hover:bg-gold-light transition-colors text-sm font-semibold"
                >
                  Plan My Trip
                </a>
                <Link
                  href="/lodges"
                  className="w-full sm:w-auto px-6 py-3 border border-sand text-forest rounded-lg hover:bg-white transition-colors text-sm font-semibold text-center"
                >
                  Browse All Lodges
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center mt-6">
              <button
                onClick={() => {
                  setSelectedActivity(null);
                  setSelectedBudget(null);
                  setSelectedStyle(null);
                  setStep("activity");
                }}
                className="text-gold hover:underline text-sm font-medium"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
