import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `List Your Business — Free | ${SITE_NAME}`,
  description:
    "Lodge owners and tour operators: get listed for free on Uganda's largest independent accommodation and safari guide. Upload photos, your logo, and more.",
  alternates: { canonical: `${SITE_URL}/for-lodges` },
  openGraph: {
    title: `List Your Business | ${SITE_NAME}`,
    description:
      "Free listings for lodges and tour operators on Lodges of Uganda.",
    url: `${SITE_URL}/for-lodges`,
    type: "website",
  },
};

export default function ForLodgesLanding() {
  return (
    <>
      <section className="bg-forest py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav
            className="flex items-center justify-center gap-2 text-cream/60 text-sm mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-cream transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-cream">For Partners</span>
          </nav>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Get Listed on Lodges of Uganda
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto mb-2">
            Thousands of travellers use our guide to find accommodation and tour
            operators in Uganda. Make sure they find you.
          </p>
          <p className="text-cream/60 text-sm">
            100% free. No commissions. No hidden fees.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl text-center mb-8">
          What describes you best?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Lodge Card */}
          <Link
            href="/for-lodges/lodge"
            className="group bg-white rounded-2xl border-2 border-sand hover:border-gold shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center"
          >
            <div className="w-16 h-16 bg-forest/5 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/10 transition-colors">
              <svg
                className="w-8 h-8 text-forest group-hover:text-gold transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2 group-hover:text-gold transition-colors">
              I run a Lodge
            </h3>
            <p className="text-olive-dark/60 text-sm leading-relaxed mb-4">
              Upload photos, your logo, and updated information for your
              existing listing.
            </p>
            <ul className="text-left text-olive-dark/50 text-xs space-y-1.5 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#10003;</span> Upload up to
                20 photos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#10003;</span> Add your
                lodge logo
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#10003;</span> Update
                description &amp; details
              </li>
            </ul>
            <span className="inline-flex items-center gap-1 text-gold font-semibold text-sm group-hover:gap-2 transition-all">
              Upload Photos
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>

          {/* Tour Operator Card */}
          <Link
            href="/for-lodges/tour-operator"
            className="group bg-white rounded-2xl border-2 border-sand hover:border-gold shadow-sm hover:shadow-lg transition-all duration-300 p-8 text-center"
          >
            <div className="w-16 h-16 bg-forest/5 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/10 transition-colors">
              <svg
                className="w-8 h-8 text-forest group-hover:text-gold transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2 group-hover:text-gold transition-colors">
              I run a Tour Company
            </h3>
            <p className="text-olive-dark/60 text-sm leading-relaxed mb-4">
              Get your safari or tour company listed in our independent
              directory — or update your existing profile.
            </p>
            <ul className="text-left text-olive-dark/50 text-xs space-y-1.5 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#10003;</span> Free company
                profile
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#10003;</span> Verified
                Trust Score
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-0.5">&#10003;</span> Reach
                travellers directly
              </li>
            </ul>
            <span className="inline-flex items-center gap-1 text-gold font-semibold text-sm group-hover:gap-2 transition-all">
              Get Listed
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl sm:text-3xl">
              212
            </p>
            <p className="text-olive-dark/50 text-xs">Lodges Listed</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl sm:text-3xl">
              18
            </p>
            <p className="text-olive-dark/50 text-xs">Regions Covered</p>
          </div>
          <div>
            <p className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl sm:text-3xl">
              Free
            </p>
            <p className="text-olive-dark/50 text-xs">Forever</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-cream/50 rounded-xl p-5 border border-sand/50">
          <p className="text-olive-dark/50 text-xs leading-relaxed text-center">
            Lodges of Uganda is an independent information platform. Listings
            are free and do not create a contractual relationship. We never
            charge for being listed.
          </p>
        </div>
      </section>
    </>
  );
}
