import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Visiting Trackers Safari Lodge in Buhoma, Bwindi",
  description:
    "A first-hand account of staying at Trackers Safari Lodge in Buhoma — 11 log chalets, spa, pool, and proximity to gorilla trekking in Bwindi Impenetrable National Park.",
  alternates: {
    canonical: `${SITE_URL}/blog/trackers-safari-lodge-visit`,
  },
  openGraph: {
    title: "Visiting Trackers Safari Lodge in Buhoma, Bwindi",
    description:
      "What it's like to stay at Trackers Safari Lodge — one of Bwindi's best-located properties for gorilla trekking.",
    url: `${SITE_URL}/blog/trackers-safari-lodge-visit`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function TrackersSafariLodgeVisitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Visiting Trackers Safari Lodge in Buhoma, Bwindi",
    datePublished: "2026-06-01",
    description:
      "A first-hand account of staying at Trackers Safari Lodge in Buhoma, near the gorilla trekking starting point in Bwindi Impenetrable National Park.",
    url: `${SITE_URL}/blog/trackers-safari-lodge-visit`,
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
            <span className="text-olive-dark/80">Trackers Safari Lodge Visit</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">1 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Visiting Trackers Safari Lodge in Buhoma, Bwindi
          </h1>
          <p className="text-cream/70 text-lg">
            A first-hand account of staying at one of Bwindi&apos;s most established lodges, right at the edge of the Impenetrable Forest.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Buhoma is the oldest and most accessible trekking sector in Bwindi Impenetrable National Park. The village sits in a valley surrounded by forested hills, and the gorilla trekking briefing point is right at the park gate — a short walk from most lodges. Trackers Safari Lodge is one of those lodges, set on a hillside overlooking the valley with the forest rising behind it.
          </p>

          <p>
            The lodge has 11 log chalets spread across the property. Each chalet is built from local timber and sits on raised stilts, giving it the feel of a forest cabin. The rooms are spacious enough without being extravagant — a comfortable bed, hot shower, and a small veranda where you can sit and listen to the forest. Power is available, and the rooms have charging points. At night, it is remarkably quiet — no generators humming, just the sounds of the forest.
          </p>

          <p>
            What sets Trackers apart from many Bwindi lodges is the spa and wellness area. There is a jacuzzi and sauna — unusual for this part of Uganda — and an outdoor swimming pool. After a five-hour gorilla trek through steep, muddy terrain, the idea of soaking in warm water is genuinely appealing, not just a luxury afterthought. Several guests we spoke to said the spa was the deciding factor when choosing where to stay.
          </p>

          <p>
            The restaurant operates as an open kitchen, meaning you can watch the chefs prepare your meals. The food is a mix of Ugandan and international dishes — fresh vegetables, local staples like matoke and posho alongside pasta or grilled fish. Nothing revolutionary, but consistently well prepared and generous in portion. Meals are served communally in the dining area, which encourages conversation among guests — most of whom are there for the same reason: gorillas.
          </p>

          <p>
            One detail that stuck with us is the art scattered around the grounds. There are African sculptures and carvings placed along the paths between chalets, in the garden, and near the pool. It gives the lodge a sense of character and care — someone has thought about the experience beyond just the room and the food.
          </p>

          <p>
            Location is arguably the lodge&apos;s biggest strength. It is a short walk to the Buhoma park gate where gorilla treks begin. On trekking morning, you can have breakfast at the lodge and walk to the briefing point without needing a vehicle. That matters — some lodges in other Bwindi sectors require a 30-to-45-minute drive on rough roads to reach their trekking starting point. In Buhoma, and at Trackers specifically, it is straightforward.
          </p>

          <p>
            The lodge is not the cheapest option in Buhoma, and it is not trying to be a luxury resort either. It sits in a comfortable middle ground — well-maintained, with genuine amenities that make a difference (the pool, the spa, the location), and a team that clearly cares about running the place properly. For gorilla trekkers who want a solid base without the premium price of the top-end lodges, it makes a lot of sense.
          </p>

          <p>
            For photos and full details on rooms, rates, and facilities, see our{" "}
            <Link href="/lodges/bwindi/trackers-safari-lodge" className="text-gold hover:underline">
              Trackers Safari Lodge listing
            </Link>. For more about the{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">
              Bwindi region
            </Link>{" "}
            and other lodges nearby, browse our Bwindi guide.
          </p>
        </div>

        <RelatedArticles currentSlug="trackers-safari-lodge-visit" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Interested in Staying at Trackers?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We can help you plan your Bwindi stay and gorilla trekking logistics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lodges/bwindi/trackers-safari-lodge"
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
