import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

const SUPABASE_IMG = "https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails";

export const metadata: Metadata = {
  title: "Uganda Hotel Occupancy Rates (2023 Data)",
  description:
    "Uganda's average hotel occupancy was 53.9% in 2023 — but rates vary hugely by region and season. What occupancy data means for your safari lodge booking.",
  alternates: {
    canonical: `${SITE_URL}/blog/hotel-occupancy-uganda`,
  },
  openGraph: {
    title: "Uganda Hotel Occupancy Rates (2023 Data)",
    description:
      "Hotel and lodge occupancy across Uganda — regional differences, seasonal patterns, and what the numbers mean for travellers planning a safari.",
    url: `${SITE_URL}/blog/hotel-occupancy-uganda`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function HotelOccupancyUgandaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Uganda Hotel Occupancy Rates: What the Numbers Mean for Travellers",
      datePublished: "2026-06-21",
      description:
        "Uganda's hotel occupancy averaged 53.9% in 2023 — but rates differ sharply by region and season. A data-driven look at what this means for safari lodge availability and pricing.",
      url: `${SITE_URL}/blog/hotel-occupancy-uganda`,
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
          name: "What is the average hotel occupancy rate in Uganda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Uganda's average hotel room occupancy was 53.9% in the fiscal year 2023/24, according to the Uganda Tourism Board Annual Report. This is a national average — popular safari regions like Bwindi regularly exceed 80% during peak season, while less-touristed areas may sit below 30%.",
          },
        },
        {
          "@type": "Question",
          name: "When are Uganda safari lodges most fully booked?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Peak occupancy occurs during Uganda's two dry seasons: June to August and December to February. Gorilla trekking lodges in Bwindi are the tightest — some properties book out 3–6 months in advance during these periods. Savanna parks like Queen Elizabeth and Murchison Falls also see high occupancy during dry season.",
          },
        },
        {
          "@type": "Question",
          name: "Are Uganda lodges empty during the rainy season?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not entirely. National occupancy drops during the wet seasons (March–May, September–November), but lodges in Bwindi still operate year-round because gorilla trekking continues regardless of weather. Many lodges offer 20–40% discounts during these months, making it a good time to visit if you are flexible.",
          },
        },
        {
          "@type": "Question",
          name: "How many hotel rooms does Uganda have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Uganda's accommodation sector has grown significantly. The country recorded 1,274,210 international visitor arrivals in 2023, a 56.4% increase over 2022, driving expansion in room capacity across all regions. Exact room counts vary by source, but the western safari circuit (Bwindi, Queen Elizabeth, Kibale) has seen the most new development.",
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
            <span className="text-olive-dark/80">Hotel Occupancy in Uganda</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">21 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Uganda Hotel Occupancy Rates: What the Numbers Mean for Travellers
          </h1>
          <p className="text-cream/70 text-lg">
            National occupancy averaged 53.9% in 2023/24 — but that figure hides huge regional and seasonal differences. Here is what the data actually tells you about lodge availability.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Uganda&apos;s average hotel room occupancy was 53.9% in the fiscal year 2023/24 (UTB Annual Report FY 2023-24). For travellers, that number sounds reassuring — roughly half of all rooms are available at any given time. But the national average is misleading. In practice, occupancy swings wildly depending on where you are going, when you are going, and what type of accommodation you are looking at.
          </p>

          <p>
            A luxury gorilla lodge in{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi</Link> during July can be 100% booked months in advance. A mid-range guesthouse in{" "}
            <Link href="/regions/karamoja" className="text-gold hover:underline">Karamoja</Link> the same month might have three guests. The 53.9% average smooths out these extremes into a number that does not help you plan. This article breaks down what the occupancy data actually means, region by region and season by season.
          </p>
        </div>

        {/* Occupancy by region */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            How Occupancy Differs by Region
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              Uganda&apos;s accommodation is concentrated along two main safari circuits. The western circuit — Bwindi, Queen Elizabeth, Kibale, Fort Portal — handles the bulk of international visitors and has the highest lodge density. The northern circuit — Murchison Falls, Ziwa Rhino Sanctuary — sees fewer visitors but has grown steadily.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-forest/20">
                    <th className="text-left py-3 pr-4 text-forest font-semibold">Region</th>
                    <th className="text-left py-3 pr-4 text-forest font-semibold">Peak Season Occupancy</th>
                    <th className="text-left py-3 text-forest font-semibold">Low Season Occupancy</th>
                  </tr>
                </thead>
                <tbody className="text-olive-dark/70">
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-medium text-olive-dark/90">Bwindi (gorilla lodges)</td>
                    <td className="py-3 pr-4">80–100%</td>
                    <td className="py-3">40–60%</td>
                  </tr>
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-medium text-olive-dark/90">Queen Elizabeth / Ishasha</td>
                    <td className="py-3 pr-4">60–85%</td>
                    <td className="py-3">25–45%</td>
                  </tr>
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-medium text-olive-dark/90">Murchison Falls</td>
                    <td className="py-3 pr-4">55–75%</td>
                    <td className="py-3">20–40%</td>
                  </tr>
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-medium text-olive-dark/90">Kampala / Entebbe</td>
                    <td className="py-3 pr-4">50–65%</td>
                    <td className="py-3">35–50%</td>
                  </tr>
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-medium text-olive-dark/90">Kibale / Fort Portal</td>
                    <td className="py-3 pr-4">50–70%</td>
                    <td className="py-3">20–35%</td>
                  </tr>
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-medium text-olive-dark/90">Kidepo Valley</td>
                    <td className="py-3 pr-4">40–60%</td>
                    <td className="py-3">10–25%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-olive-dark/90">Jinja / Sipi Falls</td>
                    <td className="py-3 pr-4">35–55%</td>
                    <td className="py-3">15–30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-olive-dark/50">
              Estimates based on UTB Annual Report FY 2023-24 national average (53.9%) combined with regional tourism arrival patterns. Individual lodge occupancy varies significantly.
            </p>

            <p>
              During our 12-day stay in October 2024, we travelled from{" "}
              <Link href="/regions/entebbe" className="text-gold hover:underline">Entebbe</Link> through Luwerro to{" "}
              <Link href="/regions/murchison-falls" className="text-gold hover:underline">Murchison Falls</Link> and then down to{" "}
              <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi</Link>. The contrast was striking: hotels along the Kampala Road in small towns like Luwerro had plenty of empty rooms, while lodges near Bwindi&apos;s Buhoma sector were noticeably busier — even in what is technically low season.
            </p>
          </div>
        </section>

        {/* Luwerro image */}
        <figure>
          <Image
            src={`${SUPABASE_IMG}/uganda_1781988008933_qmgo.jpg`}
            alt="Marketplace in Luwerro on the Kampala Road — small trading stalls with corrugated iron roofs along a dusty square"
            width={800}
            height={500}
            className="rounded-xl w-full"
          />
          <figcaption className="text-xs text-olive-dark/50 mt-2">
            The marketplace in Luwerro on the Kampala Road — small trading stalls, friendly people, and plenty of available rooms in the local guesthouses. October 2024. Photo: Mark Suer
          </figcaption>
        </figure>

        {/* Seasonal patterns */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            When Are Lodges Fullest?
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              Uganda&apos;s occupancy follows the dry seasons closely. The two peak periods are June to August and December to February. During these months, gorilla trekking permits sell out, lodge prices are at full rate, and popular properties in Bwindi can be fully booked three to six months ahead. For timing advice and pricing details, see our{" "}
              <Link href="/blog/best-time-book-uganda-lodge" className="text-gold hover:underline">best time to book guide</Link>.
            </p>

            <p>
              The wet seasons — March to May and September to November — bring lower occupancy, lower prices, and more availability. Gorilla trekking in Bwindi continues year-round regardless of rain, but savanna parks like Queen Elizabeth and Murchison Falls are less appealing when roads are muddy and grass is tall. Many lodges offer 20–40% discounts during these months. For a full breakdown, see our{" "}
              <Link href="/blog/rainy-season-uganda-safari-guide" className="text-gold hover:underline">rainy season safari guide</Link>.
            </p>

            <p>
              Kampala and Entebbe follow a different pattern. As Uganda&apos;s business and transit hubs, their hotels maintain more consistent occupancy throughout the year. Conference tourism and government travel smooth out the seasonal dips that safari lodges experience.
            </p>
          </div>
        </section>

        {/* Gorilla Bluff breakfast image */}
        <figure>
          <Image
            src={`${SUPABASE_IMG}/uganda_1780767475213_trrd.jpg`}
            alt="Breakfast at Gorilla Bluff Lodge in Buhoma — avocado, rolex wrap, and French toast on African cloth"
            width={800}
            height={500}
            className="rounded-xl w-full"
          />
          <figcaption className="text-xs text-olive-dark/50 mt-2">
            Breakfast at Gorilla Bluff Lodge, Buhoma — avocado, rolex, and French toast. Even during our January 2026 visit (technically shoulder season), the lodge was well occupied. Photo: Mark Suer
          </figcaption>
        </figure>

        {/* What it means for travellers */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            What Occupancy Means for Your Trip
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              The 53.9% national average tells you one useful thing: Uganda is not oversaturated. Unlike some East African destinations where lodges compete fiercely for a shrinking pool of visitors, Uganda&apos;s accommodation sector still has room to grow. In 2023, international arrivals reached 1,274,210 — a 56.4% increase over 2022 (Uganda Tourism Satellite Account Report, March 2025). The accommodation sector has been expanding to match.
            </p>

            <p>
              For practical planning, the regional and seasonal breakdown matters more than the national figure:
            </p>

            <ul className="space-y-3">
              <li><strong className="text-forest">Bwindi in peak season:</strong> Book 3–6 months ahead. Secure your gorilla permit first, then match your lodge to the allocated sector (Buhoma, Ruhija, Rushaga, or Nkuringo). Prosper, a tour guide based in Buhoma, regularly sees visitors who arrive without accommodation booked and struggle to find a room during July and August.</li>
              <li><strong className="text-forest">Bwindi in low season:</strong> Book 4–8 weeks ahead. Most lodges will have availability, and many offer discounts. Gorilla trekking continues regardless of weather.</li>
              <li><strong className="text-forest">Savanna parks (Queen Elizabeth, Murchison Falls):</strong> More flexible. Even in peak season, last-minute bookings are often possible — the lodge density is lower, but so is demand outside the gorilla-trekking corridor.</li>
              <li><strong className="text-forest">Kampala and Entebbe:</strong> Same-day booking usually works, except during major conferences or events. For airport-adjacent options, see our{" "}
                <Link href="/blog/best-lodges-near-entebbe-airport" className="text-gold hover:underline">Entebbe lodges guide</Link>.</li>
              <li><strong className="text-forest">Remote parks (Kidepo, Karamoja, Sipi Falls):</strong> Availability is rarely a problem, but choices are limited. Book ahead not because lodges are full, but because the few that exist may have minimum-stay requirements or need advance notice for meals.</li>
            </ul>
          </div>
        </section>

        {/* Economic context */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            The Bigger Picture: Lodges as Economic Engines
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              Behind the occupancy numbers is a broader story about employment and local economies. Uganda&apos;s accommodation and food services sector employed over 230,000 people nationally (UBOS Statistical Abstract 2024). In communities like Buhoma, near{" "}
              <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi Impenetrable National Park</Link>, lodges are often the largest employer — providing jobs as cooks, porters, gardeners, cleaners, and guides.
            </p>

            <p>
              Tourism-related industries generated a gross value added of 7,311 billion Uganda shillings in 2023, a 10.9% increase over 2022. The sector accounted for 17.2% of national gross capital formation (Uganda Tourism Satellite Account Report, March 2025). Higher occupancy rates translate directly into more jobs, more income for local suppliers, and more investment in infrastructure.
            </p>

            <p>
              Driving through Luwerro on the Kampala Road in October 2024, we passed small trading stalls, corrugated-iron-roof shops, and a dusty marketplace buzzing with morning activity. The town sits on the main route between Kampala and Murchison Falls, and the guesthouses along the road serve domestic travellers and long-distance drivers far more than international tourists. Uganda&apos;s accommodation economy is not just about safari lodges — it is woven into the daily life of towns you pass through on your way to the parks.
            </p>
          </div>
        </section>

        {/* Boda-boda image */}
        <figure>
          <Image
            src={`${SUPABASE_IMG}/uganda_1781987977563_e8sv.jpg`}
            alt="Boda-boda driver carrying yellow water jerrycans on a rural road in Uganda"
            width={800}
            height={500}
            className="rounded-xl w-full"
          />
          <figcaption className="text-xs text-olive-dark/50 mt-2">
            Between the lodges: a boda-boda driver transporting water jerrycans on a rural road. The accommodation sector supports far more than just the lodges themselves. October 2024. Photo: Mark Suer
          </figcaption>
        </figure>

        {/* How to use this data */}
        <section className="bg-cream/50 rounded-xl p-6 space-y-4">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl">
            Use the Data: Find Your Lodge
          </h2>
          <p className="text-olive-dark/80 text-sm leading-relaxed">
            Browse our{" "}
            <Link href="/lodges" className="text-gold hover:underline">lodge directory</Link> to compare over 200 properties across Uganda, or use the{" "}
            <Link href="/lodge-finder" className="text-gold hover:underline">Lodge Finder</Link> to filter by region, price, and style. For a region-by-region overview of what accommodation is available, see our{" "}
            <Link href="/blog/where-to-stay-uganda" className="text-gold hover:underline">where to stay guide</Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-cream/30 rounded-lg p-4">
              <h3 className="font-semibold text-forest text-sm mb-1">What is the average hotel occupancy rate in Uganda?</h3>
              <p className="text-olive-dark/70 text-sm">
                Uganda&apos;s average hotel room occupancy was 53.9% in 2023/24 (UTB Annual Report). Popular safari regions like Bwindi regularly exceed 80% during peak season, while less-touristed areas may sit below 30%.
              </p>
            </div>
            <div className="bg-cream/30 rounded-lg p-4">
              <h3 className="font-semibold text-forest text-sm mb-1">When are Uganda safari lodges most fully booked?</h3>
              <p className="text-olive-dark/70 text-sm">
                Peak occupancy occurs during the dry seasons: June to August and December to February. Gorilla lodges in Bwindi are the tightest — some book out 3–6 months in advance.
              </p>
            </div>
            <div className="bg-cream/30 rounded-lg p-4">
              <h3 className="font-semibold text-forest text-sm mb-1">Are Uganda lodges empty during the rainy season?</h3>
              <p className="text-olive-dark/70 text-sm">
                Not entirely. Bwindi lodges still operate year-round because gorilla trekking continues regardless of weather. Many offer 20–40% discounts during wet season months (March–May, September–November).
              </p>
            </div>
            <div className="bg-cream/30 rounded-lg p-4">
              <h3 className="font-semibold text-forest text-sm mb-1">How many hotel rooms does Uganda have?</h3>
              <p className="text-olive-dark/70 text-sm">
                Room capacity has grown steadily alongside a 56.4% increase in international arrivals (2023 vs 2022). The western safari circuit — Bwindi, Queen Elizabeth, Kibale — has seen the most new lodge development.
              </p>
            </div>
          </div>
        </section>

        <RelatedArticles currentSlug="hotel-occupancy-uganda" />
      </article>
    </>
  );
}
