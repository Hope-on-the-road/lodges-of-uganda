"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Lodge } from "@/lib/lodge-types";
import { regionsMap } from "@/lib/regions-data";
import { WHATSAPP_URL, SITE_URL } from "@/lib/constants";
import { LogoIcon } from "@/components/Logo";
import { HeroImageClickable, GalleryWithLightbox } from "@/components/ImageLightbox";
import { InquiryForm } from "@/components/InquiryForm";


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

function PriceLevelDisplay({ level }: { level: string }) {
  const labels: Record<string, string> = {
    $: "Budget",
    $$: "Mid-range",
    $$$: "Comfort / Premium",
    $$$$: "Luxury",
    $$$$$: "Ultra Luxury",
  };
  return (
    <span>
      <span className="text-gold font-bold">{level}</span>
      <span className="text-olive-dark/60 ml-1">({labels[level] || level})</span>
    </span>
  );
}

function VerifiedBadge({ status }: { status: string }) {
  const labels: Record<string, string> = {
    "not-visited": "Not visited yet",
    "verified-online": "Information verified online",
    "personally-visited": "Personally visited",
    "featured-partner": "Featured partner",
  };
  const colors: Record<string, string> = {
    "not-visited": "bg-sand text-olive-dark border border-sand",
    "verified-online": "bg-forest/10 text-forest border border-forest/20",
    "personally-visited": "bg-gold/15 text-gold border border-gold/30",
    "featured-partner": "bg-forest text-cream",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${colors[status] || colors["not-visited"]}`}>
      {labels[status] || status}
    </span>
  );
}

// Fallback coordinates by region when lodge has no lat/lng
const REGION_COORDS: Record<string, [number, number]> = {
  bwindi: [-1.05, 29.62],
  mgahinga: [-1.38, 29.63],
  "lake-mutanda": [-1.28, 29.59],
  "lake-bunyonyi": [-1.28, 29.92],
  "queen-elizabeth": [-0.19, 30.00],
  ishasha: [-0.72, 29.68],
  kibale: [0.49, 30.36],
  "fort-portal": [0.66, 30.27],
  "murchison-falls": [2.27, 31.75],
  "ziwa-rhino": [1.73, 32.08],
  "lake-mburo": [-0.61, 30.95],
  kidepo: [3.90, 33.85],
  karamoja: [2.53, 34.15],
  "sipi-falls": [1.35, 34.37],
  jinja: [0.44, 33.20],
  entebbe: [0.05, 32.46],
  kampala: [0.31, 32.58],
  "ssese-islands": [-0.38, 32.30],
};

function LodgeMap({ lodge }: { lodge: Lodge }) {
  const lat = lodge.latitude;
  const lng = lodge.longitude;
  const fallback = REGION_COORDS[lodge.region];

  if (!lat && !lng && !fallback) return null;

  const mapLat = lat || fallback?.[0] || 0;
  const mapLng = lng || fallback?.[1] || 0;
  const zoom = lat && lng ? 14 : 11;
  const isExact = !!(lat && lng);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
      <iframe
        title={`Map showing location of ${lodge.name}`}
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${mapLng - 0.05},${mapLat - 0.03},${mapLng + 0.05},${mapLat + 0.03}&layer=mapnik${isExact ? `&marker=${mapLat},${mapLng}` : ""}`}
      />
      <div className="px-4 py-2 flex items-center justify-between">
        <p className="text-olive-dark/50 text-xs">
          {isExact ? "Approximate lodge location" : `General area: ${lodge.subregion}`}
        </p>
        <a
          href={lodge.googleMapsUrl || `https://www.google.com/maps/search/${encodeURIComponent(lodge.name + " " + lodge.subregion + " Uganda")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline text-xs font-medium"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

export function LodgePage({ lodge, similarLodges = [] }: { lodge: Lodge; similarLodges?: Lodge[] }) {
  const region = regionsMap[lodge.region];
  const canonicalUrl = `${SITE_URL}/lodges/${lodge.region}/${lodge.slug}`;

  return (
    <>
      {/* Hero Image */}
      {lodge.heroImage ? (
        <section className="relative h-64 sm:h-80 lg:h-96 bg-forest overflow-hidden">
          <Image
            src={lodge.heroImage}
            alt={`${lodge.name} — ${lodge.subregion}, Uganda`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-transparent to-forest/70 pointer-events-none" />
          <HeroImageClickable heroImage={lodge.heroImage} gallery={lodge.gallery} lodgeName={lodge.name} />
        </section>
      ) : (
        <section className="relative h-48 sm:h-56 bg-gradient-to-br from-forest via-forest to-olive-dark overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="absolute top-6 left-6 w-40 h-40 rounded-full border border-cream/5" />
            <div className="absolute bottom-4 right-8 w-64 h-64 rounded-full border border-cream/5" />
            {LODGE_LOGOS.has(lodge.slug) ? (
              <img
                src={`/images/lodges/logos/${lodge.slug}.png`}
                alt={`${lodge.name} logo`}
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain bg-white/90 rounded-xl p-2 shadow-lg"
              />
            ) : (
              <LogoIcon className="h-20 w-20 text-cream/40" />
            )}
            <span className="text-cream/40 text-xs font-medium tracking-widest uppercase">{lodge.name}</span>
          </div>
        </section>
      )}

      {/* Hero Text */}
      <section className={`relative bg-forest ${lodge.heroImage ? "py-8 sm:py-12" : "py-8 sm:py-10"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-cream/60 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/lodges" className="hover:text-cream transition-colors">Lodges</Link>
            <span>/</span>
            <Link href={`/regions/${lodge.region}`} className="hover:text-cream transition-colors">
              {region?.name || lodge.region}
            </Link>
            <span>/</span>
            <span className="text-cream">{lodge.name}</span>
          </nav>

          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            {lodge.name}
          </h1>
          <p className="text-cream/80 text-lg sm:text-xl max-w-3xl">
            {lodge.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <span className="inline-flex items-center px-3 py-1.5 bg-cream/10 text-cream text-sm rounded-lg">
              {lodge.category}
            </span>
            <span className="inline-flex items-center px-3 py-1.5 bg-cream/10 text-cream text-sm rounded-lg">
              <PriceLevelDisplay level={lodge.priceLevel} />
            </span>
            <VerifiedBadge status={lodge.verifiedVisit} />
          </div>
        </div>
      </section>

      {/* Summary Box */}
      <section className="bg-white border-b border-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-cream/50 rounded-xl p-6">
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-4">Summary</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div>
                <dt className="text-olive-dark/60 font-medium">What it is</dt>
                <dd className="text-forest">{lodge.category} in {lodge.subregion}</dd>
              </div>
              <div>
                <dt className="text-olive-dark/60 font-medium">Where it is</dt>
                <dd className="text-forest">{lodge.subregion}, {region?.name || lodge.region}{lodge.nationalPark ? `, ${lodge.nationalPark}` : ""}</dd>
              </div>
              {lodge.bestFor.length > 0 && (
                <div>
                  <dt className="text-olive-dark/60 font-medium">Best for</dt>
                  <dd className="text-forest">{lodge.bestFor.join(", ")}</dd>
                </div>
              )}
              {lodge.activities.length > 0 && (
                <div>
                  <dt className="text-olive-dark/60 font-medium">Main activities</dt>
                  <dd className="text-forest">{lodge.activities.slice(0, 4).join(", ")}</dd>
                </div>
              )}
              <div>
                <dt className="text-olive-dark/60 font-medium">Price level</dt>
                <dd className="text-forest"><PriceLevelDisplay level={lodge.priceLevel} /></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Quick Facts */}
            <section>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-6">Quick Facts</h2>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {region && (
                    <div>
                      <dt className="text-olive-dark/60 font-medium">Region</dt>
                      <dd className="text-forest font-medium">
                        <Link href={`/regions/${lodge.region}`} className="text-gold hover:underline">
                          {region.name}
                        </Link>
                      </dd>
                    </div>
                  )}
                  {lodge.nationalPark && (
                    <div>
                      <dt className="text-olive-dark/60 font-medium">National Park</dt>
                      <dd className="text-forest font-medium">{lodge.nationalPark}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-olive-dark/60 font-medium">Subregion / Sector</dt>
                    <dd className="text-forest font-medium">{lodge.subregion}</dd>
                  </div>
                  <div>
                    <dt className="text-olive-dark/60 font-medium">Category</dt>
                    <dd className="text-forest font-medium">{lodge.category}</dd>
                  </div>
                  <div>
                    <dt className="text-olive-dark/60 font-medium">Price Level</dt>
                    <dd className="text-forest"><PriceLevelDisplay level={lodge.priceLevel} /></dd>
                  </div>
                  {lodge.bestFor.length > 0 && (
                    <div>
                      <dt className="text-olive-dark/60 font-medium">Best for</dt>
                      <dd className="text-forest font-medium">{lodge.bestFor.join(", ")}</dd>
                    </div>
                  )}
                  {lodge.distanceToParkGate && (
                    <div>
                      <dt className="text-olive-dark/60 font-medium">Distance to park gate</dt>
                      <dd className="text-forest font-medium">{lodge.distanceToParkGate}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-olive-dark/60 font-medium">Verified Visit</dt>
                    <dd><VerifiedBadge status={lodge.verifiedVisit} /></dd>
                  </div>
                </dl>
                {lodge.activities.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-sand/50">
                    <dt className="text-olive-dark/60 font-medium text-sm mb-2">Activities</dt>
                    <dd className="flex flex-wrap gap-2">
                      {lodge.activities.map((a) => (
                        <span key={a} className="inline-flex items-center px-2.5 py-1 bg-cream rounded-full text-xs text-forest font-medium">
                          {a}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </div>
            </section>

            {/* Long Description */}
            {lodge.longDescription && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">About {lodge.name}</h2>
                <div className="prose prose-olive max-w-none">
                  {lodge.longDescription.split("\n\n").map((p, i) => (
                    <p key={i} className="text-olive-dark/80 leading-relaxed mb-4">{p}</p>
                  ))}
                </div>
              </section>
            )}

            {/* Photo Gallery with Lightbox */}
            <GalleryWithLightbox
              heroImage={lodge.heroImage}
              gallery={lodge.gallery}
              lodgeName={lodge.name}
              subregion={lodge.subregion}
              category={lodge.category}
              verifiedVisit={lodge.verifiedVisit}
              verifiedDate={lodge.verifiedDate}
            />

            {/* Location & Region */}
            {region && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Location & Region</h2>
                <p className="text-olive-dark/80 leading-relaxed mb-4">
                  {lodge.name} is located in {lodge.subregion}, part of the {region.name} region in {lodge.country}.
                  {lodge.nationalPark && ` It is situated within or near ${lodge.nationalPark}.`}
                </p>

                {/* Map */}
                <LodgeMap lodge={lodge} />

                {lodge.driveTimes.length > 0 && (
                  <div className="bg-white rounded-xl p-5 shadow-sm mt-4">
                    <h3 className="text-forest font-semibold text-sm mb-3">Drive Times</h3>
                    <ul className="space-y-2">
                      {lodge.driveTimes.map((dt) => (
                        <li key={dt.from} className="flex justify-between text-sm">
                          <span className="text-olive-dark/80">From {dt.from}</span>
                          <span className="text-forest font-medium">{dt.duration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* Room Types */}
            {lodge.roomTypes.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Accommodation & Rooms</h2>
                <div className="space-y-3">
                  {lodge.roomTypes.map((room) => (
                    <div key={room.name} className="bg-white rounded-xl p-5 shadow-sm">
                      <h3 className="text-forest font-semibold">{room.name}</h3>
                      {room.description && <p className="text-olive-dark/80 text-sm mt-1">{room.description}</p>}
                      {room.maxGuests && <p className="text-olive-dark/60 text-xs mt-1">Max guests: {room.maxGuests}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Amenities */}
            {lodge.amenities.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {lodge.amenities.map((a) => (
                    <span key={a} className="inline-flex items-center px-3 py-1.5 bg-white rounded-lg text-sm text-forest shadow-sm">
                      {a}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Highlights / Pros */}
            {lodge.highlights.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Highlights</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {lodge.highlights.map((h) => (
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

            {/* Best For */}
            {lodge.bestFor.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Who Is This Lodge For?</h2>
                <div className="flex flex-wrap gap-2">
                  {lodge.bestFor.map((b) => (
                    <span key={b} className="inline-flex items-center px-3 py-1.5 bg-gold/10 text-gold rounded-lg text-sm font-medium">
                      {b}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Pros */}
            {lodge.pros.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Advantages</h2>
                <ul className="space-y-2">
                  {lodge.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-olive-dark/80">
                      <svg className="w-5 h-5 text-forest shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Things to Know */}
            {lodge.thingsToKnow.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Things to Know</h2>
                <ul className="space-y-2">
                  {lodge.thingsToKnow.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-olive-dark/80">
                      <svg className="w-5 h-5 text-olive-soft shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQ */}
            {lodge.faq.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {lodge.faq.map((f) => (
                    <FAQItem key={f.question} question={f.question} answer={f.answer} />
                  ))}
                </div>
              </section>
            )}

            {/* Dining */}
            {lodge.dining && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Dining</h2>
                <p className="text-olive-dark/80 leading-relaxed">{lodge.dining}</p>
              </section>
            )}

            {/* Auto-generated FAQ for lodges without custom FAQ */}
            {lodge.faq.length === 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  <FAQItem
                    question={`Where is ${lodge.name} located?`}
                    answer={`${lodge.name} is located in ${lodge.subregion}${lodge.nationalPark ? `, ${lodge.nationalPark}` : ""}, ${region?.name || lodge.region}, Uganda.${lodge.distanceToParkGate ? ` It is ${lodge.distanceToParkGate}.` : ""}`}
                  />
                  <FAQItem
                    question={`What type of accommodation is ${lodge.name}?`}
                    answer={`${lodge.name} is a ${lodge.category.toLowerCase()} property at the ${lodge.priceLevel} price level.${lodge.bestFor.length > 0 ? ` It is often chosen by ${lodge.bestFor.slice(0, 3).join(", ").toLowerCase()}.` : ""}`}
                  />
                  {lodge.gorillaTracking && (
                    <FAQItem
                      question={`Can I do gorilla trekking from ${lodge.name}?`}
                      answer={`Yes, ${lodge.name} provides access to gorilla trekking in ${lodge.nationalPark || "Bwindi Impenetrable National Park"}. Gorilla permits ($800 per person) should be arranged in advance through the Uganda Wildlife Authority.`}
                    />
                  )}
                </div>
              </section>
            )}

            {/* Freshness Signal + Sources */}
            <section className="bg-cream/50 rounded-xl p-6 border border-sand/50 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-olive-dark/50 text-xs font-medium">
                  Last updated: {lodge.lastUpdated || "2026"}
                </p>
                {lodge.verifiedVisit === "personally-visited" && (
                  <p className="text-gold text-xs font-medium">Personally visited</p>
                )}
                {lodge.verifiedVisit === "verified-online" && (
                  <p className="text-forest text-xs font-medium">Verified online</p>
                )}
              </div>
              {lodge.sourceUrls.length > 0 && (
                <div>
                  <p className="text-olive-dark/40 text-xs mb-1">Sources:</p>
                  <div className="flex flex-wrap gap-2">
                    {lodge.sourceUrls.map((url) => (
                      <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="text-olive-dark/40 hover:text-gold text-xs underline break-all">
                        {url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "").split("/")[0]}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              <p className="text-olive-dark/40 text-xs leading-relaxed">
                Prices can change depending on season, availability and booking conditions. Please contact the lodge or a trusted tour operator for current rates.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* WhatsApp CTA */}
            <div className="bg-forest rounded-xl p-6 text-cream sticky top-6">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-3">
                Need help choosing a lodge?
              </h3>
              <p className="text-cream/70 text-sm mb-5 leading-relaxed">
                Tell us your travel dates, budget and preferred region. We can help you compare lodge options and connect your stay with transfers or safari planning.
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

            {/* Inquiry Form */}
            <InquiryForm lodgeName={lodge.name} />

            {/* Address & Contact */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="text-forest font-semibold text-sm mb-3">Address</h3>
              <address className="not-italic text-olive-dark/80 text-sm leading-relaxed space-y-1">
                <p className="font-medium text-forest">{lodge.name}</p>
                <p>{lodge.subregion}{lodge.nationalPark ? `, ${lodge.nationalPark}` : ""}</p>
                <p>{region?.name || lodge.region}, {lodge.country}</p>
                {lodge.latitude && lodge.longitude && (
                  <p className="text-olive-dark/50 text-xs mt-2">
                    Coordinates: {lodge.latitude.toFixed(4)}, {lodge.longitude.toFixed(4)}
                  </p>
                )}
              </address>
              {lodge.officialWebsite && (
                <div className="mt-3 pt-3 border-t border-sand/50">
                  <a
                    href={lodge.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold hover:underline text-sm font-medium"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visit lodge website
                  </a>
                </div>
              )}
            </div>

            {/* Nearby Attractions */}
            {lodge.nearbyAttractions.length > 0 && (
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="text-forest font-semibold text-sm mb-3">Nearby Attractions</h3>
                <ul className="space-y-2">
                  {lodge.nearbyAttractions.map((a) => (
                    <li key={a} className="text-olive-dark/80 text-sm flex items-start gap-2">
                      <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Score (only if available) */}
            {lodge.score && (
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <h3 className="text-forest font-semibold text-sm mb-3">Lodges of Uganda Score</h3>
                <div className="space-y-2">
                  {Object.entries(lodge.score).filter(([k]) => k !== "overall").map(([key, val]) => (
                    <div key={key} className="flex items-center justify-between text-sm">
                      <span className="text-olive-dark/80 capitalize">{key}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-sand rounded-full overflow-hidden">
                          <div className="h-full bg-gold rounded-full" style={{ width: `${(val / 10) * 100}%` }} />
                        </div>
                        <span className="text-forest font-medium w-6 text-right">{val}</span>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-sand/50 flex items-center justify-between text-sm">
                    <span className="text-forest font-semibold">Overall</span>
                    <span className="text-gold font-bold text-lg">{lodge.score.overall}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Internal Links */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="text-forest font-semibold text-sm mb-3">Explore More</h3>
              <ul className="space-y-2">
                {region && (
                  <li>
                    <Link href={`/regions/${lodge.region}`} className="text-gold hover:underline text-sm">
                      All lodges in {region.name}
                    </Link>
                  </li>
                )}
                <li>
                  <Link href="/lodges" className="text-gold hover:underline text-sm">
                    Browse all Uganda lodges
                  </Link>
                </li>
                <li>
                  <Link href="/lodges/best/gorilla-trekking" className="text-gold hover:underline text-sm">
                    Best lodges for gorilla trekking
                  </Link>
                </li>
                <li>
                  <Link href="/best-of" className="text-gold hover:underline text-sm">
                    Best Of Guides
                  </Link>
                </li>
              </ul>
            </div>

            {/* Update this listing */}
            <div className="bg-cream/50 rounded-xl p-5 border border-sand/50">
              <h3 className="text-forest font-semibold text-sm mb-2">Are you the lodge owner?</h3>
              <p className="text-olive-dark/60 text-xs mb-3 leading-relaxed">
                Help us keep this listing accurate. Update your contact details, add a description, and send us your photos.
              </p>
              <Link
                href={`/update/${lodge.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-forest text-cream font-medium rounded-lg hover:bg-olive-dark transition-colors text-xs"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Update this listing
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Similar Lodges */}
      {similarLodges.length > 0 && (
        <section className="bg-white py-12 border-t border-sand/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-6">
              Similar Lodges in {regionsMap[lodge.region]?.name || lodge.region}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {similarLodges.map((sl) => {
                const priceLabelMap: Record<string, string> = {
                  $: "Budget", $$: "Mid-range", $$$: "Comfort", $$$$: "Luxury", $$$$$: "Ultra Luxury",
                };
                return (
                  <Link
                    key={sl.slug}
                    href={`/lodges/${sl.region}/${sl.slug}`}
                    className="block bg-white rounded-xl shadow-sm border border-sand/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative bg-gradient-to-br from-forest/5 to-sand/30 h-32 overflow-hidden">
                      {sl.heroImage ? (
                        <Image
                          src={sl.heroImage}
                          alt={sl.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <LogoIcon className="h-10 w-10 text-forest/20" />
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-forest text-sm group-hover:text-gold transition-colors leading-tight mb-1 line-clamp-1">
                        {sl.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gold font-bold text-xs">{sl.priceLevel}</span>
                        <span className="text-olive-dark/40 text-xs">·</span>
                        <span className="text-olive-dark/60 text-xs line-clamp-1">{sl.category}</span>
                      </div>
                      <p className="text-olive-dark/50 text-xs line-clamp-1">{sl.subregion}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Tour Operator Recommendation */}
      <section className="bg-sand/30 py-10 border-t border-sand/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-olive-dark/70 text-sm leading-relaxed mb-4">
            Need help planning your Uganda trip? Our partner{" "}
            <Link href="/tour-operators/misty-gorilla-expeditions" className="text-forest font-medium hover:underline">
              Misty Gorilla Expeditions
            </Link>{" "}
            is based in Buhoma and can arrange gorilla permits, transfers, and multi-day safari itineraries.
          </p>
          <a
            href="https://wa.me/256763463229?text=Hello%2C%20I%20need%20help%20planning%20a%20trip%20to%20Uganda."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-cream font-medium rounded-lg hover:bg-olive-dark transition-colors text-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with Misty Gorilla Expeditions
          </a>
        </div>
      </section>

      {/* Legal Disclaimer */}
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
