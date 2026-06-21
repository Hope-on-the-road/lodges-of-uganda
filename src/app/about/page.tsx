import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Lodges of Uganda",
  description:
    "Lodges of Uganda is an independent lodge information platform helping travelers find the right accommodation across Uganda.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            About Lodges of Uganda
          </h1>
          <p className="text-cream/70 text-lg">
            An independent lodge guide, built by a team that actually lives in Uganda.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Personal intro */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Who&apos;s Behind This</h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            My name is Mark Suer. I&apos;m the founder of{" "}
            <a href="https://mistygorillaexpeditions.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              Misty Gorilla Expeditions
            </a>
            , a travel company based in Buhoma — the small village at the main entrance of Bwindi Impenetrable National Park, where most gorilla trekking happens. This is not a company run from a European office with a nice Africa logo. We live here.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            Our local team includes guides, drivers, and travel planners who know Uganda&apos;s roads, parks, and lodges from daily experience. That on-the-ground presence is what makes this site different from other lodge directories you might find online.
          </p>
        </section>

        {/* Why this site exists */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Why This Site Exists</h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            After years of helping travelers plan Uganda trips, I noticed there was no independent, comprehensive lodge guide. Most information comes from the lodges themselves or booking platforms with commission incentives. Every recommendation is shaped by who is paying for it.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            LodgesOfUganda.com was built to change that. One place where you can compare lodges across all regions — Bwindi, Queen Elizabeth, Murchison Falls, Kidepo, and everywhere in between — with honest descriptions, practical details, and no hidden agenda.
          </p>
        </section>

        {/* How we work */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">How We Work</h2>
          <ul className="space-y-3 text-olive-dark/80 leading-relaxed">
            <li className="flex gap-3">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold" />
              <span>Every lodge is researched individually — we read through official sources, cross-reference traveler reviews, and verify practical details like access roads, distances, and activities.</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold" />
              <span>We visit lodges in person when possible. Our coverage is growing, and we are honest about what we have and have not seen firsthand.</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold" />
              <span>No paid placements, no sponsored rankings. The order you see lodges in is based on relevance, not money.</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold" />
              <span>The &ldquo;Personally Visited&rdquo; badge means someone from our team actually stayed at or inspected the property. No badge means we have not been there yet — not that it is a bad lodge.</span>
            </li>
          </ul>
        </section>

        {/* Connected to Misty Gorilla */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Connected to Misty Gorilla Expeditions</h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Lodges of Uganda is operated by{" "}
            <a href="https://mistygorillaexpeditions.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              Misty Gorilla Expeditions Ltd
            </a>
            , based in Buhoma village at the entrance of Bwindi Impenetrable National Park. We are a registered Ugandan travel company with a local team of guides, drivers, and travel planners.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            If you need help planning a trip — choosing lodges, arranging gorilla permits, booking transfers — you can reach out to us directly. We help travelers plan their Uganda trips every day, and there is no fee for our advice.
          </p>
        </section>

        {/* Address */}
        <section className="bg-sand/30 rounded-xl p-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-3">Our Address</h2>
          <p className="text-olive-dark/80 text-sm leading-relaxed">
            Misty Gorilla Expeditions Ltd<br />
            Buhoma, Kanungu District<br />
            Western Region, Uganda
          </p>
        </section>

        {/* Contact */}
        <section className="bg-cream/50 rounded-xl p-6 border border-sand/50">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">Get in Touch</h2>
          <div className="space-y-2 text-olive-dark/80 text-sm leading-relaxed mb-5">
            <p>
              Email:{" "}
              <a href="mailto:info@lodgesofuganda.com" className="text-gold hover:underline">info@lodgesofuganda.com</a>
            </p>
            <p>
              WhatsApp:{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">+256 763 463229</a>
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
          >
            Ask on WhatsApp
          </a>
        </section>

        {/* Meet the Team placeholder */}
        <section className="border border-sand/50 rounded-xl p-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">Meet the Team</h2>
          <p className="text-olive-dark/60 text-sm leading-relaxed max-w-md mx-auto">
            We&apos;re building our team page — for now, reach out directly and we&apos;ll introduce ourselves. Our team is small, local, and happy to talk.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="bg-sand/30 rounded-xl p-6">
          <p className="text-olive-dark/50 text-xs leading-relaxed">
            Lodges of Uganda is an independent lodge information platform. We are not the official website of the listed lodges unless clearly stated. Information may change and should be confirmed directly with the lodge or travel provider before booking.
          </p>
        </section>
      </div>
    </>
  );
}
