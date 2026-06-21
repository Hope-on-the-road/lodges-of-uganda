import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "What Does a Uganda Safari Actually Cost? (2026 Guide)",
  description:
    "Honest cost breakdown for a Uganda safari in 2026 — gorilla permits, accommodation, transport, food, and example budgets from $1,500 to $12,000.",
  alternates: {
    canonical: `${SITE_URL}/blog/uganda-safari-cost-guide`,
  },
  openGraph: {
    title: "What Does a Uganda Safari Actually Cost? (2026 Guide)",
    description:
      "A realistic breakdown of Uganda safari costs — gorilla permits, lodges, transport, and total budgets for every price level.",
    url: `${SITE_URL}/blog/uganda-safari-cost-guide`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function UgandaSafariCostGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What Does a Uganda Safari Actually Cost? (2026 Guide)",
    datePublished: "2026-06-05",
    description:
      "Honest cost breakdown for a Uganda safari in 2026 — gorilla permits, accommodation, transport, food, and example budgets.",
    url: `${SITE_URL}/blog/uganda-safari-cost-guide`,
    author: {
      "@type": "Organization",
      name: "Lodges of Uganda",
      url: SITE_URL,
    },
    image: `${SITE_URL}/og-image.png`,
    publisher: {
      "@type": "Organization",
      name: "Lodges of Uganda",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-sand/30 border-b border-sand/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-olive-dark/50">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-forest transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-olive-dark/80">Uganda Safari Cost Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">5 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            What Does a Uganda Safari Actually Cost?
          </h1>
          <p className="text-cream/70 text-lg">
            A realistic breakdown of what you will spend on a Uganda trip in 2026 — from budget backpacker to full luxury.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            One of the most common questions we get is: how much does a Uganda safari actually cost? The honest answer is that it depends enormously on how you travel. You can do a meaningful week in Uganda for under $2,000, or you can spend $12,000 and beyond on a luxury itinerary. Here is where the money goes.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Gorilla Permits
          </h2>
          <p>
            The single biggest cost for most visitors is the gorilla trekking permit. In 2026, a permit from the Uganda Wildlife Authority costs <strong>$800 per person</strong> for foreign non-residents. East African residents pay $300, and Ugandan nationals pay UGX 300,000 (roughly $80). There is no way around this cost — it is mandatory for anyone entering the forest to see gorillas, and permits sell out months in advance during peak season (June to September and December to February). For more details on booking and availability, see our{" "}
            <Link href="/gorilla-permit-guide" className="text-gold hover:underline">gorilla permit guide</Link>.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Accommodation
          </h2>
          <p>
            Accommodation costs in Uganda range from roughly <strong>$25 per night</strong> for a basic guesthouse to <strong>$600+ per night</strong> for a top-end luxury lodge with full board. Here is a rough breakdown by price level:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Budget ($25-80/night):</strong> Community guesthouses, backpacker hostels, and basic bandas. Clean, functional, but minimal amenities. Common around Buhoma, Jinja, and Fort Portal.</li>
            <li><strong>Mid-range ($80-250/night):</strong> Comfortable lodges with en-suite bathrooms, good food, and often scenic locations. This is where most travelers land. Properties like Trackers Safari Lodge in Bwindi or safari lodges in Queen Elizabeth fall here.</li>
            <li><strong>Upmarket ($250-400/night):</strong> Well-appointed lodges with swimming pools, spa facilities, and excellent service. Full-board rates including meals and some activities.</li>
            <li><strong>Luxury ($400-700+/night):</strong> All-inclusive lodges and tented camps with private butlers, bush dinners, premium drinks, and exclusive locations. Sanctuary Gorilla Forest Camp, Clouds Mountain Gorilla Lodge, and Volcanoes Bwindi Lodge are in this bracket.</li>
          </ul>
          <p>
            Browse all options on our{" "}
            <Link href="/lodges" className="text-gold hover:underline">lodges directory</Link> or use the{" "}
            <Link href="/lodge-finder" className="text-gold hover:underline">Lodge Finder</Link> to filter by budget.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Transport
          </h2>
          <p>
            Getting around Uganda is not cheap, mainly because the distances are long and the roads are slow. A private vehicle with driver typically costs <strong>$120-180 per day</strong>, including fuel. Most tour operators include transport in their package prices. Public transport exists (buses and matatus), but it is not practical for reaching national parks. Internal flights between Entebbe and places like Bwindi or Kidepo cost $250-500 one way, and they save significant travel time — Bwindi is an 8-10 hour drive from Entebbe but a 1.5-hour flight.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Park Fees, Food &amp; Other Costs
          </h2>
          <p>
            National park entry fees are <strong>$40 per person per day</strong> for most parks. Meals outside of lodges cost $5-15 per meal at local restaurants, or $15-30 at tourist-oriented places. Tips for gorilla trackers are customary — $10-20 per trekker is standard. Travel insurance with medical evacuation coverage is strongly recommended and runs about $50-100 for a week. A Ugandan tourist visa costs $50 for most nationalities and is obtained online.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Example Budgets for 7 Days
          </h2>

          <div className="bg-sand/40 rounded-xl p-6 space-y-4">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg">Budget: $1,500-2,500</h3>
              <p className="text-sm text-olive-dark/70">Basic guesthouses, shared transport or public buses where possible, one gorilla permit ($800), self-arranged meals, minimal extras. Best for solo travelers or backpackers comfortable with rougher conditions.</p>
            </div>
            <div className="border-t border-sand/60 pt-4">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg">Mid-range: $3,000-5,000</h3>
              <p className="text-sm text-olive-dark/70">Comfortable lodges, private vehicle with driver, gorilla permit, game drives in one or two parks, full-board accommodation at most stops. This is the sweet spot for most international visitors.</p>
            </div>
            <div className="border-t border-sand/60 pt-4">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg">Luxury: $6,000-12,000</h3>
              <p className="text-sm text-olive-dark/70">Premium lodges throughout, internal flights to save time, multiple gorilla treks, private guides, all-inclusive rates with drinks and laundry. For travelers who want exceptional comfort without compromising on experiences.</p>
            </div>
          </div>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            How to Save Money
          </h2>
          <p>
            Travel in the low season (March to May, October to November) when lodge rates drop 20-40% and gorilla permits are easier to get. Book directly with lodges or through a Uganda-based operator rather than an international agency — the markup can be significant. Consider combining Bwindi gorilla trekking with Queen Elizabeth National Park, as they are close together and the route is efficient.
          </p>
          <p>
            The gorilla permit is a fixed cost you cannot avoid, but everything else is flexible. A good{" "}
            <Link href="/tour-operators" className="text-gold hover:underline">local tour operator</Link>{" "}
            can help you build an itinerary that fits your budget without cutting the experiences that matter.
          </p>
        </div>

        <RelatedArticles currentSlug="uganda-safari-cost-guide" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Need Help Planning Your Budget?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Tell us your dates and budget, and we will help you find the right lodges and itinerary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lodge-finder"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Use Lodge Finder
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cream/30 text-cream rounded-lg hover:bg-cream/10 transition-colors text-sm font-medium"
            >
              Ask on WhatsApp
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
