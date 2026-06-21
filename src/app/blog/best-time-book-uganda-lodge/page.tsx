import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

const SUPABASE_IMG = "https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails";

export const metadata: Metadata = {
  title: "Best Time to Book a Uganda Safari Lodge (2026)",
  description:
    "When to book Uganda safari lodges for best prices and availability — peak seasons, low-season deals, and how far ahead to reserve gorilla trekking accommodation.",
  alternates: {
    canonical: `${SITE_URL}/blog/best-time-book-uganda-lodge`,
  },
  openGraph: {
    title: "Best Time to Book a Uganda Safari Lodge (2026)",
    description:
      "Lodge availability, pricing by season, and booking lead times for Uganda safari accommodation — from Bwindi to Queen Elizabeth.",
    url: `${SITE_URL}/blog/best-time-book-uganda-lodge`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function BestTimeBookUgandaLodgePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Best Time to Book a Uganda Safari Lodge (2026 Guide)",
      datePublished: "2026-06-19",
      description:
        "When to book Uganda safari lodges — peak and low seasons, pricing, availability, and how far ahead to reserve accommodation for gorilla trekking.",
      url: `${SITE_URL}/blog/best-time-book-uganda-lodge`,
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How far in advance should I book a Uganda safari lodge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For peak season (June–August, December–February), book 3–6 months ahead — especially in Bwindi, where gorilla trekking lodges fill up fast. For low season (March–May, September–November), 4–8 weeks is usually sufficient. Last-minute bookings are possible but risky for popular properties.",
          },
        },
        {
          "@type": "Question",
          name: "When are Uganda safari lodges cheapest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Low season runs from March to May and September to November. Many lodges offer 20–40% discounts during these months. The weather is wetter, but gorilla trekking runs year-round and wildlife viewing remains good in savanna parks like Queen Elizabeth.",
          },
        },
        {
          "@type": "Question",
          name: "What is peak season for Uganda safari lodges?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Peak season is June to August and December to February, coinciding with the dry seasons. Lodge occupancy is highest, prices are at full rate, and gorilla permits sell out months in advance. The UTB reported average hotel occupancy of 49.3% nationally in FY 2023/24, but top Bwindi lodges regularly reach 80–100% during peak months.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to book my lodge before getting a gorilla permit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ideally, secure your gorilla permit first, then book the lodge in the matching sector. Permits are allocated by sector (Buhoma, Ruhija, Rushaga, or Nkuringo in Bwindi), and your lodge needs to be near the right briefing point. Most tour operators handle both simultaneously.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Breadcrumb */}
      <div className="bg-sand/30 border-b border-sand/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-olive-dark/50">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-forest transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-olive-dark/80">Best Time to Book a Uganda Lodge</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">19 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Best Time to Book a Uganda Safari Lodge: Seasons, Prices &amp; Availability
          </h1>
          <p className="text-cream/70 text-lg">
            When to book, how far ahead, and what you save by timing it right — a practical guide to Uganda lodge availability across the year.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Book 3–6 months ahead for peak season (June–August, December–February), or 4–8 weeks for low season. Uganda&apos;s safari lodges follow a clear pricing cycle tied to the dry and wet seasons, and the difference between booking early and booking late can mean both price savings and the difference between your first-choice lodge and whatever is left. For a full breakdown of Uganda&apos;s weather and seasons, see our{" "}
            <Link href="/best-time-to-visit" className="text-gold hover:underline">best time to visit guide</Link>.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Uganda&apos;s Lodge Seasons at a Glance
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-forest/20">
                  <th className="text-left py-2 pr-4 font-semibold text-forest">Season</th>
                  <th className="text-left py-2 pr-4 font-semibold text-forest">Months</th>
                  <th className="text-left py-2 pr-4 font-semibold text-forest">Occupancy</th>
                  <th className="text-left py-2 pr-4 font-semibold text-forest">Prices</th>
                  <th className="text-left py-2 font-semibold text-forest">Book Ahead</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Peak (dry)</td>
                  <td className="py-3 pr-4">Jun–Aug</td>
                  <td className="py-3 pr-4">High (70–100% at top lodges)</td>
                  <td className="py-3 pr-4">Full rate</td>
                  <td className="py-3">3–6 months</td>
                </tr>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Peak (dry)</td>
                  <td className="py-3 pr-4">Dec–Feb</td>
                  <td className="py-3 pr-4">High (holiday travellers)</td>
                  <td className="py-3 pr-4">Full rate, some Christmas surcharges</td>
                  <td className="py-3">3–6 months</td>
                </tr>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Shoulder</td>
                  <td className="py-3 pr-4">Sep–Nov</td>
                  <td className="py-3 pr-4">Moderate</td>
                  <td className="py-3 pr-4">10–25% below peak</td>
                  <td className="py-3">6–8 weeks</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Low (wet)</td>
                  <td className="py-3 pr-4">Mar–May</td>
                  <td className="py-3 pr-4">Low</td>
                  <td className="py-3 pr-4">20–40% below peak</td>
                  <td className="py-3">4–6 weeks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The Uganda Tourism Board (UTB) reported average national hotel occupancy of 49.3% for the financial year 2023/24 (UTB Annual Report FY 2023/24). That average masks significant variation: top-tier gorilla trekking lodges in{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi</Link>{" "}
            regularly hit 80–100% in July and August, while budget lodges in quieter regions may sit at 20–30% year-round.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Booking by Region: Where Timing Matters Most
          </h2>

          <h3 className="font-semibold text-forest text-lg pt-2">Bwindi Impenetrable National Park</h3>
          <p>
            Bwindi is where booking timing matters most. Gorilla trekking permits (800 USD per person, as of 2026) are allocated by sector — Buhoma, Ruhija, Rushaga, or Nkuringo — and your lodge needs to match your sector. During our 11-day stay in January 2026, several lodges in Buhoma were fully booked, with guests who had reserved 4–5 months prior. Prosper, a tour guide based in Buhoma, confirmed that the December–February window is now as busy as the traditional June–August peak, driven by European holiday travellers.
          </p>
          <p>
            For Bwindi, secure your gorilla permit first, then book the lodge. Most tour operators handle both simultaneously. See our{" "}
            <Link href="/blog/bwindi-sectors-compared" className="text-gold hover:underline">Bwindi sectors comparison</Link>{" "}
            to decide which sector suits you.
          </p>

          <h3 className="font-semibold text-forest text-lg pt-2">Queen Elizabeth National Park</h3>
          <p>
            More lodge capacity and less permit-driven demand means{" "}
            <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth</Link>{" "}
            is easier to book at shorter notice. Even in peak season, 4–6 weeks ahead is usually enough for mid-range lodges. Luxury properties like the Mweya Peninsula lodges book up faster.
          </p>

          <h3 className="font-semibold text-forest text-lg pt-2">Murchison Falls &amp; Kidepo Valley</h3>
          <p>
            Both parks have fewer lodges overall. Murchison Falls has decent capacity; 6–8 weeks is generally fine. Kidepo Valley is remote with limited options — book 2–3 months ahead regardless of season if you want a specific lodge.
          </p>

          <figure className="my-8">
            <Image
              src={`${SUPABASE_IMG}/uganda_1781275312755_sijl.jpg`}
              alt="White rhino grazing on green grass at Ziwa Rhino Sanctuary in Uganda"
              width={800}
              height={500}
              className="rounded-lg w-full"
            />
            <figcaption className="text-sm text-olive-dark/50 mt-2">
              A white rhino at Ziwa Rhino Sanctuary — a popular stop on the drive between Kampala and Murchison Falls. Booking the nearby lodges is straightforward, but the sanctuary visit itself needs no reservation.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Low Season: Why It Can Be the Smarter Choice
          </h2>

          <p>
            Uganda&apos;s low season (March–May) is underrated. Yes, it rains — but not all day, and not everywhere equally. What you get in return:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>20–40% lower lodge rates.</strong> Many properties publish separate low-season pricing. A lodge charging 250 USD/night in July may drop to 150–180 USD in April.</li>
            <li><strong>Gorilla permits are easier to get.</strong> Peak months sell out months ahead; in the wet season, permits are often available 4–6 weeks before the date.</li>
            <li><strong>Fewer crowds on treks and game drives.</strong> You share the trail with fewer groups and the boat on the{" "}
              <Link href="/blog/boat-safari-kazinga-channel-guide" className="text-gold hover:underline">Kazinga Channel</Link>{" "}
              with fewer tourists.</li>
            <li><strong>Birding is at its best.</strong> Migratory species arrive from November to April — Uganda&apos;s 1,090+ bird species peak during the wetter months.</li>
            <li><strong>The landscape is lush.</strong> Bwindi is called &quot;Impenetrable&quot; for a reason — in the wet season, it is at its most dramatic and green.</li>
          </ul>

          <p>
            For a detailed breakdown, read our{" "}
            <Link href="/blog/rainy-season-uganda-safari-guide" className="text-gold hover:underline">rainy season safari guide</Link>.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            How to Book: Direct vs Tour Operator vs Online Platform
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Through a tour operator:</strong> The most common route for safari travellers. The operator books lodges, permits, and transport as a package. Useful for multi-park itineraries where logistics are complex (e.g.{" "}
              <Link href="/blog/entebbe-to-bwindi-travel-options" className="text-gold hover:underline">getting from Entebbe to Bwindi</Link>
              ). Browse{" "}
              <Link href="/tour-operators" className="text-gold hover:underline">Uganda tour operators</Link>{" "}
              on our directory.</li>
            <li><strong>Direct with the lodge:</strong> Sometimes cheaper, as you skip the middleman. Works well for single-lodge stays or repeat visitors who know the area. Contact details are on each lodge page in our{" "}
              <Link href="/lodges" className="text-gold hover:underline">lodge directory</Link>.</li>
            <li><strong>Online platforms (Booking.com, etc.):</strong> Convenient but not all Uganda lodges are listed, and prices may not reflect low-season deals. Best for Entebbe/Kampala hotels, less reliable for remote safari lodges.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Practical Booking Tips
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Book your gorilla permit before your lodge.</strong> The permit determines your trekking sector, which determines where you need to sleep.</li>
            <li><strong>Ask about cancellation policies.</strong> Most lodges require a deposit and charge penalties for late cancellations — 30–60 days is typical.</li>
            <li><strong>Confirm dietary needs at booking.</strong> Remote lodges plan meals days ahead. See our{" "}
              <Link href="/blog/food-uganda-safari-lodges" className="text-gold hover:underline">lodge food guide</Link>{" "}
              and{" "}
              <Link href="/blog/vegetarian-travel-uganda" className="text-gold hover:underline">vegetarian travel guide</Link>.</li>
            <li><strong>Check what&apos;s included.</strong> Some lodges quote full-board (all meals), others bed-and-breakfast. Park entry fees, laundry, and drinks are usually extra.</li>
            <li><strong>Pay attention to transfer logistics.</strong> A lodge may be affordable, but if it adds 2 hours of rough driving to reach your activity, the cost shifts to time and comfort.</li>
          </ul>

          <figure className="my-8">
            <Image
              src={`${SUPABASE_IMG}/uganda_1780767748724_eob6.jpg`}
              alt="Woodworking workshop in Buhoma with four men standing in front of the business"
              width={800}
              height={500}
              className="rounded-lg w-full"
            />
            <figcaption className="text-sm text-olive-dark/50 mt-2">
              The Innox &amp; Friends workshop in Buhoma, January 2026. Community businesses like this thrive when lodge occupancy is high — tourism revenue in Bwindi flows directly into the local economy.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-forest mb-2">How far in advance should I book a Uganda safari lodge?</h3>
              <p>
                For peak season (June–August, December–February), book 3–6 months ahead — especially in Bwindi, where gorilla trekking lodges fill up fast. For low season (March–May, September–November), 4–8 weeks is usually sufficient. Last-minute bookings are possible but risky for popular properties.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-forest mb-2">When are Uganda safari lodges cheapest?</h3>
              <p>
                Low season runs from March to May and September to November. Many lodges offer 20–40% discounts during these months. The weather is wetter, but gorilla trekking runs year-round and wildlife viewing remains good in savanna parks like Queen Elizabeth.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-forest mb-2">What is peak season for Uganda safari lodges?</h3>
              <p>
                Peak season is June to August and December to February, coinciding with the dry seasons. Lodge occupancy is highest and prices are at full rate. The UTB reported average hotel occupancy of 49.3% nationally in FY 2023/24, but top Bwindi lodges regularly reach 80–100% during peak months.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-forest mb-2">Do I need to book my lodge before getting a gorilla permit?</h3>
              <p>
                Ideally, secure your gorilla permit first, then book the lodge in the matching sector. Permits are allocated by sector (Buhoma, Ruhija, Rushaga, or Nkuringo in Bwindi), and your lodge needs to be near the right briefing point. Most tour operators handle both simultaneously.
              </p>
            </div>
          </div>
        </div>

        <RelatedArticles currentSlug="best-time-book-uganda-lodge" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Ready to Book Your Uganda Safari Lodge?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Browse lodges by region and price, or ask us for availability and help matching a lodge to your dates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lodge-finder"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Find Your Lodge
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
