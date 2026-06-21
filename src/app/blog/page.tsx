import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Uganda Travel Blog | Stories & Guides",
  description:
    "Stories, lodge reviews, and travel guides from Uganda. First-hand accounts of gorilla trekking, safari lodges, and life on the ground in East Africa.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Uganda Travel Blog | Stories & Guides",
    description:
      "First-hand stories and guides from Uganda — lodge visits, gorilla trekking, and practical travel advice.",
    url: `${SITE_URL}/blog`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const blogPosts = [
  {
    slug: "where-to-stay-uganda",
    title: "Where to Stay in Uganda — Region Guide (2026)",
    excerpt:
      "A region-by-region guide to Uganda's accommodation — lodge types, price ranges, and what to expect across Bwindi, Queen Elizabeth, Murchison Falls, and more.",
    date: "2026-06-21",
  },
  {
    slug: "best-time-book-uganda-lodge",
    title: "Best Time to Book a Uganda Safari Lodge (2026)",
    excerpt:
      "When to book Uganda safari lodges — peak and low seasons, pricing by month, lead times for gorilla trekking accommodation, and how to save 20–40%.",
    date: "2026-06-19",
  },
  {
    slug: "food-uganda-safari-lodges",
    title: "Food at Uganda Safari Lodges: What to Expect",
    excerpt:
      "What you'll eat at safari lodges in Uganda's national parks — meal routines, local dishes, dietary options, and first-hand experience from 6 visits.",
    date: "2026-06-17",
  },
  {
    slug: "vegetarian-travel-uganda",
    title: "Vegetarian Travel in Uganda: What You Can Actually Eat",
    excerpt:
      "A practical guide to eating vegetarian in Uganda — local dishes, lodge meals, market food, and what to expect on safari. Based on 6 visits.",
    date: "2026-06-17",
  },
  {
    slug: "entebbe-to-bwindi-travel-options",
    title: "Entebbe to Bwindi: How to Get There (Flights, Road, Costs)",
    excerpt:
      "Every route from Entebbe to Bwindi compared — road vs domestic flight, costs, drive times, and the best overnight stops along the way.",
    date: "2026-06-13",
  },
  {
    slug: "uganda-gorilla-trekking-fitness-guide",
    title: "How Fit Do You Need to Be for Gorilla Trekking in Uganda?",
    excerpt:
      "A sector-by-sector breakdown of gorilla trekking difficulty in Bwindi — altitude, terrain, trek duration, and how to prepare your fitness before you go.",
    date: "2026-06-13",
  },
  {
    slug: "best-lodges-near-entebbe-airport",
    title: "Best Lodges Near Entebbe Airport for Your First or Last Night",
    excerpt:
      "Where to stay near Entebbe International Airport — budget to luxury options on Lake Victoria, with distances and what to do before your safari starts.",
    date: "2026-06-13",
  },
  {
    slug: "rainy-season-uganda-safari-guide",
    title: "Uganda Safari in the Rainy Season: Worth It? (Honest Guide)",
    excerpt:
      "Uganda's two rainy seasons explained — which parks still work, how much you save on permits and lodges, and why the wet season might be the smarter choice.",
    date: "2026-06-13",
  },
  {
    slug: "uganda-safari-with-kids",
    title: "Uganda Safari with Kids: What Works and What Doesn't (Family Guide)",
    excerpt:
      "Age restrictions, family-friendly parks, kid-safe lodges, and the golden monkey alternative for under-15s who can't do gorilla trekking.",
    date: "2026-06-13",
  },
  {
    slug: "golden-monkey-trekking-mgahinga",
    title: "Golden Monkey Trekking in Mgahinga: Everything You Need to Know",
    excerpt:
      "Permits for $100, treks through bamboo forest at 2,800m, and one of Uganda's most underrated wildlife experiences in Mgahinga Gorilla National Park.",
    date: "2026-06-13",
  },
  {
    slug: "boat-safari-kazinga-channel-guide",
    title: "Kazinga Channel Boat Safari: What to Expect (Complete Guide)",
    excerpt:
      "The 32km channel connecting Lake Edward and Lake George — hippos, elephants, 600+ bird species, and whether to book UWA or private.",
    date: "2026-06-13",
  },
  {
    slug: "uganda-vs-tanzania-safari-comparison",
    title: "Uganda vs Tanzania Safari: Which Is Better for You? (Honest Comparison)",
    excerpt:
      "Gorillas vs Great Migration, crowds vs solitude, cost vs value — an honest side-by-side of Africa's two great safari destinations.",
    date: "2026-06-13",
  },
  {
    slug: "birding-in-uganda-top-spots",
    title: "Birding in Uganda: 8 Best Spots for Birdwatching (2026 Guide)",
    excerpt:
      "Uganda has 1,090+ bird species — more per square kilometer than any other African country. The 8 best spots from Mabamba Swamp to Bwindi.",
    date: "2026-06-13",
  },
  {
    slug: "overnight-safari-vs-day-trip-uganda",
    title: "Overnight Safari vs Day Trip in Uganda: Which Is Worth It?",
    excerpt:
      "Can you see wildlife without staying overnight? Day trip options from Kampala compared to full safari stays — costs, distances, and what you miss.",
    date: "2026-06-13",
  },
  {
    slug: "bwindi-sectors-compared",
    title: "Bwindi's 4 Sectors Compared: Buhoma, Ruhija, Rushaga & Nkuringo",
    excerpt:
      "An insider comparison of Bwindi's four gorilla trekking sectors — trek difficulty, gorilla families, best lodges, and which sector suits which type of traveler.",
    date: "2026-06-09",
  },
  {
    slug: "uganda-packing-list",
    title: "The Essential Uganda Packing List for Safari & Gorilla Trekking",
    excerpt:
      "What to pack for gorilla trekking and safari in Uganda — clothing, camera gear, health items, and the common mistakes that make your trip less comfortable.",
    date: "2026-06-07",
  },
  {
    slug: "uganda-safari-cost-guide",
    title: "What Does a Uganda Safari Actually Cost? (2026 Guide)",
    excerpt:
      "An honest breakdown of Uganda safari costs — gorilla permits, accommodation at every price level, transport, and complete example budgets from $1,500 to $12,000.",
    date: "2026-06-05",
  },
  {
    slug: "is-uganda-safe-for-tourists",
    title: "Is Uganda Safe for Tourists? What You Actually Need to Know (2026)",
    excerpt:
      "A balanced, honest look at safety in Uganda — health precautions, road travel, wildlife encounters, and why a good tour operator makes all the difference.",
    date: "2026-06-03",
  },
  {
    slug: "trackers-safari-lodge-visit",
    title: "Visiting Trackers Safari Lodge in Buhoma, Bwindi",
    excerpt:
      "A first-hand account of staying at Trackers Safari Lodge — 11 log chalets, a spa with jacuzzi and sauna, and one of Bwindi's best locations for gorilla trekking.",
    date: "2026-06-01",
  },
];

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Lodges of Uganda Travel Blog",
    description:
      "Stories, lodge reviews, and travel guides from Uganda.",
    url: `${SITE_URL}/blog`,
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
            <span className="text-olive-dark/80">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Uganda Travel Blog
          </h1>
          <p className="text-cream/70 text-lg">
            Stories and guides from our travels across Uganda — lodge visits, gorilla encounters, and practical travel tips.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <p className="text-olive-dark/50 text-xs mb-2">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-xl group-hover:text-gold transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center mt-12">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Planning a Trip to Uganda?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We can help you find the right lodges and plan your itinerary.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
          >
            Ask on WhatsApp
          </a>
        </section>
      </div>
    </>
  );
}
