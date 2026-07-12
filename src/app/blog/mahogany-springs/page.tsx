import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Mahogany Springs Lodge — Luxury Gorilla Trekking Base in Bwindi",
  description:
    "Mahogany Springs Lodge in Buhoma, Bwindi offers 14 luxury suites just 2 minutes from the gorilla trekking briefing point. Rooms, rates, dining, and what to expect.",
  alternates: {
    canonical: `${SITE_URL}/blog/mahogany-springs`,
  },
  openGraph: {
    title: "Mahogany Springs Lodge — Luxury Gorilla Trekking Base in Bwindi",
    description:
      "Everything you need to know about Mahogany Springs Lodge in Buhoma — one of Bwindi's top luxury lodges for gorilla trekking.",
    url: `${SITE_URL}/blog/mahogany-springs`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function MahoganySpringsBlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Mahogany Springs Lodge — Luxury Gorilla Trekking Base in Bwindi",
    datePublished: "2026-07-12",
    description:
      "Mahogany Springs Lodge in Buhoma, Bwindi — 14 luxury suites overlooking the Munyanga River, just 2 minutes from the gorilla trekking starting point.",
    url: `${SITE_URL}/blog/mahogany-springs`,
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
            <span className="text-olive-dark/80">Mahogany Springs</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">12 July 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Mahogany Springs Lodge: A Luxury Base for Gorilla Trekking in Bwindi
          </h1>
          <p className="text-cream/70 text-lg">
            What to expect at one of Buhoma&apos;s most established luxury lodges, set on the banks of the Munyanga River with the Impenetrable Forest as backdrop.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Mahogany Springs Lodge sits in Buhoma, the oldest and most accessible gorilla trekking sector in Bwindi Impenetrable National Park, southwestern Uganda. The lodge overlooks the Munyanga River with uninterrupted views of the surrounding rainforest — a setting that feels remote, even though it is just two minutes on foot from the park gate where gorilla trekking briefings begin each morning. That proximity alone makes Mahogany Springs one of the most practical choices for visitors whose primary reason for coming to Bwindi is the gorillas.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl pt-2">
            Location and Access
          </h2>
          <p>
            Buhoma is the most developed sector in Bwindi. It has the longest history of gorilla tourism, and the village has grown around the park entrance accordingly. Most visitors arrive by road from Kampala or Entebbe, a journey of eight to ten hours depending on the route. Charter flights to the nearby Kihihi or Kisoro airstrips cut that to about an hour, with a shorter transfer by road to the lodge. Once at Mahogany Springs, everything is walkable. The gorilla trekking briefing point, the community craft market, and several other lodges are all within a few minutes on foot.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl pt-2">
            Rooms and Suites
          </h2>
          <p>
            Mahogany Springs has 14 suites in total: 12 Superior Deluxe Suites and 2 Premium Deluxe Suites. All are spacious, stone-and-timber structures with large windows oriented toward the river and the forest canopy. Rooms include king-size or twin beds, en-suite bathrooms with hot water, a private balcony, and in-room fireplaces — a welcome feature given that Buhoma sits at roughly 1,500 metres elevation and evenings can be cool, especially during the dry season months of June through September. The Premium Deluxe Suites are larger and positioned for the best views, suited to honeymooners or travellers who want a bit more space.
          </p>
          <p>
            Rates at Mahogany Springs range from approximately $400 to $900 per person per night, depending on the season and suite category. This places the lodge firmly in the luxury bracket for Bwindi. That said, prices include full board — breakfast, lunch, and dinner — which is standard for lodges in this region. The rate does not include gorilla trekking permits, which are purchased separately through the Uganda Wildlife Authority.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl pt-2">
            Dining and Common Areas
          </h2>
          <p>
            Meals are served in the main lodge building, a large open-sided structure with views over the river. The kitchen produces a mix of Ugandan and international cuisine — fresh vegetables, grilled meats, local staples like matoke and groundnut sauce alongside European-style dishes. Dietary requirements can be accommodated with advance notice. The bar stocks local and imported drinks, and there is an outdoor seating area where many guests spend their afternoons after returning from treks.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl pt-2">
            What Makes Mahogany Springs Stand Out
          </h2>
          <p>
            Three things distinguish Mahogany Springs from other lodges in the Buhoma area. First is consistency. The lodge has been operating for over 11 years and has a stable management team. Service is attentive without being intrusive, and the property is well maintained — important in a climate where tropical humidity and forest proximity take a toll on buildings. Second is the river setting. While several Buhoma lodges have forest views, Mahogany Springs is the one most closely built around the Munyanga River, and the sound of running water is a constant backdrop. Third is the balance between luxury and environment. The suites are genuinely comfortable — proper beds, reliable hot water, good lighting — without feeling like they belong somewhere else. The lodge fits its setting.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl pt-2">
            Who Is Mahogany Springs Best For
          </h2>
          <p>
            Mahogany Springs suits travellers who want a high-quality lodge experience without the isolated exclusivity — and price — of Bwindi&apos;s most expensive properties. It is a strong choice for couples, small groups, and anyone prioritising convenience for gorilla trekking. The two-minute walk to the park gate is a genuine advantage on trekking mornings when you need to be at the briefing point by 8 AM. Families with older children can be accommodated, though Bwindi trekking requires participants to be at least 15 years old.
          </p>

          <p>
            For full details on rooms, rates, and availability, see our{" "}
            <Link href="/lodges/bwindi/mahogany-springs-lodge" className="text-gold hover:underline">
              Mahogany Springs Lodge listing
            </Link>. To explore other accommodation options in the area, visit our{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">
              Bwindi region guide
            </Link>.
          </p>
        </div>

        <RelatedArticles currentSlug="mahogany-springs" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Planning a Stay at Mahogany Springs?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We can help you compare lodges in Buhoma and sort out gorilla trekking logistics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lodges/bwindi/mahogany-springs-lodge"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              View Lodge Details
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
