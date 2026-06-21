"use client";

import { useState } from "react";
import Link from "next/link";
import type { TourOperator } from "@/lib/tour-operator-types";
import type { Lodge } from "@/lib/lodge-types";
import { calculateTrustScore } from "@/lib/tour-operator-types";
import { WHATSAPP_URL } from "@/lib/constants";
import { ProtectedContact } from "@/components/ProtectedContact";

function TrustScoreBadge({ score }: { score: number }) {
  const color =
    score >= 70 ? "text-green-700 bg-green-50 border-green-200" :
    score >= 50 ? "text-gold bg-gold/10 border-gold/30" :
    "text-olive-dark/60 bg-sand/50 border-sand";

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${color}`}>
      <span className="font-[family-name:var(--font-heading)] font-bold text-2xl">{score}</span>
      <span className="text-xs font-medium leading-tight">/100<br />Trust Score</span>
    </div>
  );
}

function TrustIndicatorRow({ label, available, link }: { label: string; available: boolean | string; link?: string }) {
  const isAvailable = typeof available === "string" ? available.length > 0 : available;
  return (
    <div className="flex items-center justify-between py-2 border-b border-sand/30 last:border-0">
      <span className="text-sm text-olive-dark/80">{label}</span>
      {isAvailable ? (
        link || (typeof available === "string" && available) ? (
          <a
            href={(link || available) as string}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline text-sm font-medium"
          >
            Verified
          </a>
        ) : (
          <span className="text-green-700 text-sm font-medium flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Yes
          </span>
        )
      ) : (
        <span className="text-olive-dark/30 text-sm">Not available</span>
      )}
    </div>
  );
}

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

export function TourOperatorPage({
  operator,
  recommendedLodges,
  regionNames,
  faqItems,
}: {
  operator: TourOperator;
  recommendedLodges: Lodge[];
  regionNames: { slug: string; name: string }[];
  faqItems: { question: string; answer: string }[];
}) {
  const trustScore = calculateTrustScore(operator.trustIndicators);
  const t = operator.trustIndicators;

  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-cream/60 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/tour-operators" className="hover:text-cream transition-colors">Tour Operators</Link>
            <span>/</span>
            <span className="text-cream">{operator.name}</span>
          </nav>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Logo */}
            {operator.logo && (
              <div className="shrink-0 bg-white rounded-xl p-3 shadow-lg">
                <img src={operator.logo} alt={`${operator.name} logo`} className="h-20 sm:h-24 w-auto object-contain" />
              </div>
            )}
            <div className="flex-1">
              <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
                {operator.name}
              </h1>
              <p className="text-cream/80 text-lg max-w-3xl mb-4" data-speakable="true">
                {operator.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-cream/60 text-sm">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {operator.location}
                </span>
                {operator.foundedYear && (
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Since {operator.foundedYear}
                  </span>
                )}
              </div>
            </div>
            <div className="shrink-0">
              <TrustScoreBadge score={trustScore} />
            </div>
          </div>
        </div>
      </section>

      {/* Operator CTA Banner */}
      {!operator.claimed && (
        <section className="bg-gold/10 border-b border-gold/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <p className="text-olive-dark/70 text-sm">
                <span className="font-semibold text-forest">Is this your company?</span>{" "}
                Update your profile — add photos, logo and description. Free.
              </p>
            </div>
            <Link
              href={`/for-lodges/tour-operator?select=${operator.slug}`}
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-forest text-cream font-medium rounded-lg hover:bg-olive-dark transition-colors text-sm"
            >
              Update This Profile
            </Link>
          </div>
        </section>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Photo Gallery */}
            {operator.imageUrls.length > 0 && (
              <section>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {operator.imageUrls.map((url, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-sand/30">
                      <img
                        src={url}
                        alt={`${operator.name} — photo ${i + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading={i < 3 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* About */}
            {operator.longDescription && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
                  About {operator.name}
                </h2>
                <div className="prose prose-olive max-w-none">
                  {operator.longDescription.split("\n\n").map((p, i) => (
                    <p key={i} className="text-olive-dark/80 leading-relaxed mb-4">{p}</p>
                  ))}
                </div>
              </section>
            )}

            {/* Specializations */}
            {operator.specializations.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
                  Specializations
                </h2>
                <div className="flex flex-wrap gap-2">
                  {operator.specializations.map((s) => (
                    <span key={s} className="inline-flex items-center px-3 py-1.5 bg-white rounded-lg text-sm text-forest shadow-sm border border-sand/30">
                      {s}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Regions */}
            {regionNames.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
                  Operating Regions
                </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {regionNames.map((r) =>
                  r.slug ? (
                    <Link
                      key={r.slug}
                      href={`/regions/${r.slug}`}
                      className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow text-center"
                    >
                      <span className="text-forest font-medium text-sm">{r.name}</span>
                    </Link>
                  ) : (
                    <div key={r.name} className="bg-white rounded-lg p-3 shadow-sm text-center">
                      <span className="text-forest font-medium text-sm">{r.name}</span>
                    </div>
                  ),
                )}
              </div>
              </section>
            )}

            {/* Recommended Lodges */}
            {recommendedLodges.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
                  Recommended Lodges
                </h2>
                <p className="text-olive-dark/60 text-sm mb-4">
                  Lodges frequently used by {operator.name} for their safari itineraries.
                </p>
                <div className="space-y-3">
                  {recommendedLodges.map((lodge) => (
                    <Link
                      key={lodge.id}
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
                        </div>
                        <svg className="w-5 h-5 text-olive-dark/30 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            {faqItems.length > 0 && (
              <section>
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {faqItems.map((f) => (
                    <FAQItem key={f.question} question={f.question} answer={f.answer} />
                  ))}
                </div>
              </section>
            )}

            {/* Trust Profile */}
            <section>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
                Trust Profile
              </h2>
              <p className="text-olive-dark/60 text-sm mb-4">
                Factual verification of publicly available business information. No subjective ratings.
              </p>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-sand/30">
                  <TrustScoreBadge score={trustScore} />
                  <p className="text-olive-dark/60 text-xs leading-relaxed">
                    Based on {Object.values(t).filter(v => v === true || (typeof v === "string" && v.length > 0) || (typeof v === "number" && v > 0)).length} verified data points
                  </p>
                </div>
                <TrustIndicatorRow label="Company Registration" available={t.companyRegistration} />
                <TrustIndicatorRow label="Physical Address" available={t.physicalAddress} />
                <TrustIndicatorRow label="Website" available={t.websiteAvailable} link={operator.website} />
                <TrustIndicatorRow label="Email" available={t.emailAvailable} />
                <TrustIndicatorRow label="Phone" available={t.phoneAvailable} />
                <TrustIndicatorRow label="WhatsApp" available={t.whatsappAvailable} />
                <TrustIndicatorRow label="Social Media" available={t.socialMediaAvailable} />
                <TrustIndicatorRow label="SafariBookings Profile" available={t.safariBookingsProfile} />
                <TrustIndicatorRow label="TripAdvisor Profile" available={t.tripadvisorProfile} />
                <TrustIndicatorRow label="Google Business Profile" available={t.googleBusinessProfile} />
                <TrustIndicatorRow label={`Years Active (${t.yearsActive})`} available={t.yearsActive > 0} />
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-xl p-5 shadow-sm space-y-3">
              <h3 className="text-forest font-semibold text-sm mb-2">Contact</h3>
              {operator.website && (
                <a
                  href={operator.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gold hover:underline text-sm"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                  Visit Website
                </a>
              )}
              {operator.email && (
                <ProtectedContact
                  value={operator.email}
                  type="email"
                  className="flex items-center gap-2 text-olive-dark/70 hover:text-forest text-sm"
                  icon={
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                />
              )}
              {operator.phone && (
                <ProtectedContact
                  value={operator.phone}
                  type="phone"
                  className="flex items-center gap-2 text-olive-dark/70 hover:text-forest text-sm"
                  icon={
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                />
              )}
              <p className="text-olive-dark/50 text-xs pt-1">
                {operator.location}, {operator.country}
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-forest rounded-xl p-6 text-cream">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-3">
                Plan your safari
              </h3>
              <p className="text-cream/70 text-sm mb-5 leading-relaxed">
                Tell us your travel dates, budget and interests. Get a personalized safari itinerary from a local team based in Uganda.
              </p>
              {operator.whatsapp ? (
                <a
                  href={`https://wa.me/${atob(operator.whatsapp).replace(/[\s+]/g, "")}?text=${encodeURIComponent(`Hello ${operator.name}, I found you on LodgesOfUganda.com and would like to plan a safari.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Ask on WhatsApp
                </a>
              ) : (
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
                >
                  Ask on WhatsApp
                </a>
              )}
            </div>

            {/* Claim Profile */}
            {!operator.claimed && (
              <div className="bg-cream/50 rounded-xl p-5 border border-sand/50">
                <h3 className="text-forest font-semibold text-sm mb-2">Is this your company?</h3>
                <p className="text-olive-dark/60 text-xs mb-3 leading-relaxed">
                  Update your profile — add photos, logo and description. Free.
                </p>
                <Link
                  href={`/for-lodges/tour-operator?select=${operator.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-forest text-cream font-medium rounded-lg hover:bg-olive-dark transition-colors text-xs"
                >
                  Update This Profile
                </Link>
              </div>
            )}

            {/* Explore More */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="text-forest font-semibold text-sm mb-3">Explore More</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tour-operators" className="text-gold hover:underline text-sm">
                    All Tour Operators
                  </Link>
                </li>
                <li>
                  <Link href="/lodges" className="text-gold hover:underline text-sm">
                    Browse all lodges
                  </Link>
                </li>
                <li>
                  <Link href="/best-of" className="text-gold hover:underline text-sm">
                    Best Of Guides
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
            Lodges of Uganda is an independent information platform. Tour operator profiles are based on publicly available information. We do not endorse or guarantee any service. Always verify details directly with the operator before booking.
          </p>
        </div>
      </section>
    </>
  );
}
