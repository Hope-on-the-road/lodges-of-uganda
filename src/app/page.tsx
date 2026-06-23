import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getLodges } from "@/lib/lodges-data";
import { regions } from "@/lib/regions-data";
import { comparisonPages } from "@/lib/comparison-pages";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { FeaturedLodgesCarousel } from "@/components/FeaturedLodgesCarousel";

export const metadata: Metadata = {
  title: "Uganda Lodges — Compare 215+ Safari Lodges",
  description:
    "Compare 215+ Uganda lodges — gorilla lodges in Bwindi, safari camps in Queen Elizabeth & Murchison Falls, eco lodges in Kidepo. Independent, no fees.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Uganda Lodges — Compare 215+ Safari Lodges | Lodges of Uganda",
    description:
      "Compare 200+ lodges across Uganda — gorilla trekking in Bwindi, safaris in Queen Elizabeth, Murchison Falls, Kidepo and Kampala. No booking fees.",
    url: SITE_URL,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default async function HomePage() {
  const lodges = await getLodges();
  const regionCounts = regions
    .map((r) => ({
      ...r,
      count: lodges.filter((l) => l.region === r.slug).length,
    }))
    .filter((r) => r.count > 0)
    .sort((a, b) => a.name.localeCompare(b.name));

  const gorillaCount = lodges.filter((l) => l.gorillaTracking).length;
  const safariCount = lodges.filter((l) => l.gameDrive).length;

  // Featured lodges: those with hero images (max 5)
  const featuredLodges = lodges.filter((l) => l.heroImage).slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest via-olive-dark to-safari">
        {/* Warm golden glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            {/* Left — text */}
            <div className="lg:col-span-3">
              <p className="text-gold font-semibold text-sm tracking-[0.15em] uppercase mb-4">
                Independent Lodge Guide
              </p>

              <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] mb-6">
                Uganda Lodges:<br />
                <span className="text-gold">Find Your Perfect Safari Stay</span>
              </h1>

              <p className="text-cream/75 text-lg leading-relaxed mb-8 max-w-xl">
                Compare {lodges.length} lodges across {regionCounts.length} regions. From gorilla trekking in Bwindi to game drives in Queen Elizabeth — honest information, no booking fees.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Link
                  href="/lodges"
                  className="inline-flex items-center px-7 py-3.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 text-sm"
                >
                  Browse All Lodges
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/lodge-finder"
                  className="inline-flex items-center px-6 py-3.5 border border-cream/25 text-cream font-medium rounded-lg hover:bg-cream/10 transition-all duration-300 text-sm"
                >
                  Lodge Finder
                </Link>
              </div>
            </div>

            {/* Right — stats */}
            <div className="lg:col-span-2 grid grid-cols-3 lg:grid-cols-1 gap-3">
              <div className="bg-cream/10 backdrop-blur-sm rounded-xl p-5 border border-cream/10 text-center lg:text-left">
                <p className="font-[family-name:var(--font-heading)] font-bold text-gold text-3xl lg:text-4xl">
                  {lodges.length}
                </p>
                <p className="text-cream/60 text-sm mt-1">Lodges</p>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm rounded-xl p-5 border border-cream/10 text-center lg:text-left">
                <p className="font-[family-name:var(--font-heading)] font-bold text-gold text-3xl lg:text-4xl">
                  {regionCounts.length}
                </p>
                <p className="text-cream/60 text-sm mt-1">Regions</p>
              </div>
              <div className="bg-cream/10 backdrop-blur-sm rounded-xl p-5 border border-cream/10 text-center lg:text-left">
                <p className="font-[family-name:var(--font-heading)] font-bold text-gold text-3xl lg:text-4xl">
                  {gorillaCount}
                </p>
                <p className="text-cream/60 text-sm mt-1">Gorilla Lodges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Highlights */}
      <section className="bg-sand/40 py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <p className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-1">Gorilla Trekking</p>
              <p className="text-olive-dark/60 text-sm leading-relaxed">
                {gorillaCount} lodges near Bwindi and Mgahinga for mountain gorilla encounters.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-1">Wildlife Safaris</p>
              <p className="text-olive-dark/60 text-sm leading-relaxed">
                {safariCount} lodges with game drives across Queen Elizabeth, Murchison Falls and Kidepo.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-1">Independent &amp; Free</p>
              <p className="text-olive-dark/60 text-sm leading-relaxed">
                No booking fees, no sponsored rankings. Honest lodge information to help you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Uganda — SEO intro text with photo */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl sm:text-3xl mb-8 text-center">
            Why Uganda?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Photo from HopeContent Library — own photos */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1780845072449_ot5s.jpg"
                alt="Elephant visiting Aardvark Safari Lodge in Queen Elizabeth National Park, Uganda"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <p className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-3 text-white/80 text-xs">
                Elephant at Aardvark Safari Lodge, Queen Elizabeth National Park — our own photo
              </p>
            </div>
            <div className="space-y-4 text-olive-dark/70 text-base leading-relaxed">
            <p>
              Uganda is one of the last places on earth where you can see mountain gorillas in the wild. Roughly half of the world&apos;s remaining mountain gorilla population lives in{" "}
              <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi Impenetrable National Park</Link>, a dense, ancient rainforest in the country&apos;s far southwest. For many travelers, that single fact is reason enough to visit.
            </p>
            <p>
              But Uganda has far more than gorillas. The landscape shifts dramatically as you move across the country — from the open savanna plains of{" "}
              <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth National Park</Link>, where tree-climbing lions and hippos share the shoreline, to the thundering cascade of{" "}
              <Link href="/regions/murchison-falls" className="text-gold hover:underline">Murchison Falls</Link>, where the entire Nile forces itself through a seven-meter gap in the rock. In the remote northeast,{" "}
              Kidepo Valley offers some of East Africa&apos;s most untouched wilderness.
            </p>
            <p>
              Uganda is experiencing a significant surge as a travel destination. In 2023, 1,274,210 international visitors arrived in the country — an increase of 56.4 per cent over the previous year. The average length of stay was 7.6 nights. Accommodation services recorded 77.9 per cent growth within domestic tourism expenditure over the same period (Uganda Tourism Satellite Account Report, March 2025).
            </p>
            <p>
              The wildlife diversity is staggering. On a single game drive in Murchison Falls, you might spot Rothschild giraffes grazing in the savanna, Uganda kob (the national antelope, featured on the coat of arms) bounding across open grassland, and the grey crowned crane — Uganda&apos;s national bird — wading through wetlands. During our January 2026 visit to Murchison Falls National Park, we watched a beautiful giraffe appear from the tall grass during an afternoon game drive — one of those quiet, unhurried moments that stay with you. With over 1,070 recorded bird species — half of all bird species found in Africa — Uganda is one of the world&apos;s top birdwatching destinations.
            </p>
            <p>
              Geography adds another dimension. The equator crosses Uganda, marked by monuments and viewpoints in places like Kiruhura and Kayabwe where visitors can watch the Coriolis effect demonstrated live. Lake George, a shallow crater lake straddling the equator in{" "}
              <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth National Park</Link>, feeds the famous Kazinga Channel — one of the best boat safari routes in East Africa. Uganda lodges range from{" "}
              <Link href="/lodges/jinja/wildwaters-lodge" className="text-gold hover:underline">Wild Waters Lodge</Link> on the Nile in Jinja to community-run properties in Buhoma such as{" "}
              <Link href="/lodges/bwindi/gorilla-bluff-lodge" className="text-gold hover:underline">Gorilla Bluff Lodge</Link>.
            </p>
            <p>
              Accommodation ranges widely too. You can stay in simple community-run guesthouses a short walk from the gorilla trailheads, mid-range safari lodges overlooking crater lakes, or ultra-luxury tented camps with private butlers and bush dinners. The right lodge depends on where you are going, what you want to do, and what you are comfortable spending.
            </p>
            <p>
              That is what this site is for. LodgesOfUganda.com is an independent guide — we research every property individually, we do not accept paid placements, and we never charge booking fees. Our goal is straightforward: help independent travelers compare their options honestly, so you can spend less time searching and more time planning the trip itself.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Featured Lodges — rotating carousel */}
      {featuredLodges.length > 0 && (
        <FeaturedLodgesCarousel lodges={featuredLodges} />
      )}

      {/* Browse by Region */}
      <section className="py-16" id="regions">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl sm:text-3xl mb-2 text-center">
            Browse by Region
          </h2>
          <p className="text-olive-dark/50 text-sm text-center mb-8">
            Explore lodges across Uganda&apos;s most popular safari destinations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {regionCounts.map((r) => (
              <Link
                key={r.slug}
                href={`/regions/${r.slug}`}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-sand/40 hover:border-gold/40 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-[family-name:var(--font-heading)] font-semibold text-forest group-hover:text-gold transition-colors text-base mb-1">
                      {r.name}
                    </p>
                    <p className="text-olive-dark/70 text-sm line-clamp-2 leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                  <span className="shrink-0 ml-3 bg-gold/10 text-gold text-xs font-bold px-2.5 py-1 rounded-full">
                    {r.count}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Karamoja Spotlight */}
      <section className="bg-sand/30 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-sand/40">
            <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">
              Emerging Destination: <Link href="/regions/karamoja" className="text-gold hover:underline">Karamoja</Link>
            </h3>
            <p className="text-olive-dark/70 text-sm leading-relaxed">
              Karamoja, Uganda&apos;s northeast, is developing into one of the country&apos;s most exciting emerging tourism regions. Properties such as the Timu Eco Camp in Kaabong focus on sustainable ecotourism, while the Kidepo-Lorukul Cultural Village in Karenga offers visitors direct access to the Karamojong way of life. Access is primarily by road; an international airport serving <Link href="/regions/kidepo" className="text-gold hover:underline">Kidepo Valley National Park</Link> is in the planning stages.
            </p>
          </div>
        </div>
      </section>

      {/* Best Of Guides */}
      <section className="bg-white py-16 border-y border-sand/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl sm:text-3xl mb-2 text-center">
            Best Of Guides
          </h2>
          <p className="text-olive-dark/50 text-sm text-center mb-8 max-w-xl mx-auto">
            Curated recommendations by budget, activity, or destination.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {comparisonPages.slice(0, 5).map((p) => (
              <Link
                key={p.slug}
                href={`/lodges/best/${p.slug}`}
                className="bg-sand/40 rounded-xl p-4 hover:shadow-md hover:bg-gold/10 border border-sand/40 hover:border-gold/30 transition-all group text-center"
              >
                <p className="font-semibold text-forest group-hover:text-gold transition-colors text-sm">
                  {p.title.replace("Best ", "").replace(" in Uganda", "").replace(" near ", " ")}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/best-of"
              className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light font-semibold text-sm transition-colors"
            >
              View all guides
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-16 bg-sand/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl sm:text-3xl mb-2 text-center">
            From the Blog
          </h2>
          <p className="text-olive-dark/50 text-sm text-center mb-8">
            Practical travel guides and stories from Uganda.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { slug: "uganda-safari-cost-guide", title: "What Does a Uganda Safari Actually Cost?", excerpt: "Gorilla permits, lodges, transport — honest budgets from $1,500 to $12,000." },
              { slug: "bwindi-sectors-compared", title: "Bwindi's 4 Sectors Compared", excerpt: "Buhoma, Ruhija, Rushaga & Nkuringo — which sector suits your trekking style?" },
              { slug: "entebbe-to-bwindi-travel-options", title: "Entebbe to Bwindi: How to Get There", excerpt: "Road vs flight, costs, drive times, and the best overnight stops." },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-sand/40 hover:border-gold/40 transition-all group"
              >
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest group-hover:text-gold transition-colors text-base mb-2">
                  {post.title}
                </h3>
                <p className="text-olive-dark/60 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-gold hover:text-gold-light font-semibold text-sm transition-colors"
            >
              All articles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Uganda in Zahlen */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl sm:text-3xl mb-8 text-center">
            Uganda Tourism in Numbers (2023)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-heading)] font-bold text-gold text-2xl sm:text-3xl">1.27M</p>
              <p className="text-olive-dark/60 text-xs mt-1">International arrivals (+56.4%)</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-heading)] font-bold text-gold text-2xl sm:text-3xl">7.6</p>
              <p className="text-olive-dark/60 text-xs mt-1">Average nights per stay</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-heading)] font-bold text-gold text-2xl sm:text-3xl">53.9%</p>
              <p className="text-olive-dark/60 text-xs mt-1">Hotel room occupancy</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm text-center">
              <p className="font-[family-name:var(--font-heading)] font-bold text-gold text-2xl sm:text-3xl">270K</p>
              <p className="text-olive-dark/60 text-xs mt-1">Flight arrivals at Entebbe (+37.8%)</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm text-center col-span-2 sm:col-span-1">
              <p className="font-[family-name:var(--font-heading)] font-bold text-gold text-2xl sm:text-3xl">17.2%</p>
              <p className="text-olive-dark/60 text-xs mt-1">Share of national capital formation</p>
            </div>
          </div>
          <p className="text-olive-dark/40 text-xs text-center mt-4">
            Source: Uganda Tourism Satellite Account Report, March 2025 (UBOS / Uganda Tourism Board)
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-sand/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl sm:text-3xl mb-8 text-center">
            Frequently Asked Questions About Uganda Travel
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">How many lodges are there in Uganda?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                This guide lists over 215 Uganda lodges across 16 regions — from gorilla trekking lodges in <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi</Link> and <Link href="/regions/mgahinga" className="text-gold hover:underline">Mgahinga</Link> to wildlife safari camps in <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth</Link>, <Link href="/regions/murchison-falls" className="text-gold hover:underline">Murchison Falls</Link> and <Link href="/regions/kidepo" className="text-gold hover:underline">Kidepo Valley</Link>. Uganda&apos;s accommodation ranges from ultra-luxury tented camps (from $500 per night) to community-run guesthouses (from $20 per night). In the FY 2023/24, 35 accommodation facilities were officially rated and classified by the Uganda Tourism Board (UTB Annual Report FY 2023/24).
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">How many tourists visit Uganda each year?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                In 2023, 1,274,210 international visitors travelled to Uganda — a 56.4 per cent increase over 812,508 arrivals in 2022. Of these, 270,160 arrived by air, representing 37.8 per cent growth. Source: Uganda Tourism Satellite Account Report, March 2025.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">How long do tourists typically stay in Uganda?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                International visitors stayed an average of 7.6 nights in 2023. Given the distances between major national parks — Bwindi, Queen Elizabeth, Murchison Falls and Kidepo — a trip of at least ten to fourteen days is recommended to combine multiple regions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">What are the main reasons to visit Uganda?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                Gorilla trekking in Bwindi Impenetrable National Park is the primary draw for many travellers. Other highlights include chimpanzee tracking in <Link href="/regions/kibale" className="text-gold hover:underline">Kibale National Park</Link>, wildlife safaris in <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth</Link> and <Link href="/regions/murchison-falls" className="text-gold hover:underline">Murchison Falls</Link>, and cultural experiences. Bwindi is home to roughly half of the world&apos;s remaining mountain gorillas.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">What accommodation is available in Kampala?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                This guide lists accommodation in <Link href="/regions/kampala" className="text-gold hover:underline">Kampala</Link>, Uganda&apos;s capital. Kampala frequently serves as a starting point for tours to the western national parks or as a final stop before flying out of <Link href="/regions/entebbe" className="text-gold hover:underline">Entebbe</Link> International Airport. Options range from international hotels to budget guesthouses.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">Are there eco lodges in Uganda?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                Uganda has several eco-tourism properties. Examples include the Timu Eco Camp in Kaabong, which practises sustainable tourism in the <Link href="/regions/karamoja" className="text-gold hover:underline">Karamoja</Link> region. This guide includes a dedicated category for eco lodges — use the <Link href="/lodge-finder" className="text-gold hover:underline">Lodge Finder</Link> to filter by style.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">What lodges are near Kidepo Valley National Park?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                This guide lists accommodation in the <Link href="/regions/kidepo" className="text-gold hover:underline">Kidepo Valley National Park</Link> region. Kidepo is one of Uganda&apos;s most remote and species-rich parks, offering an untouched wilderness experience far from the main tourist routes. Access is by domestic flight or a 10–12 hour drive from Kampala.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">Where can you track chimpanzees in Uganda?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                <Link href="/regions/kibale" className="text-gold hover:underline">Kibale National Park</Link> is known as the primate capital of the world and is home to 13 primate species, including habituated chimpanzees. This guide lists accommodation in the Kibale region, as well as nearby <Link href="/regions/fort-portal" className="text-gold hover:underline">Fort Portal</Link>.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">What economic contribution does tourism make in Uganda?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                Tourism-related industries generated a gross value added of 7,311 billion Uganda shillings in 2023 — a 10.9 per cent increase over 2022. Tourism accounted for 2.6 per cent of Uganda&apos;s total tax revenue and 17.2 per cent of national gross capital formation. Source: Uganda Tourism Satellite Account Report, March 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How many lodges are there in Uganda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This guide lists over 215 Uganda lodges across 16 regions — from gorilla trekking lodges in Bwindi and Mgahinga to wildlife safari camps in Queen Elizabeth, Murchison Falls and Kidepo Valley. Uganda's accommodation ranges from ultra-luxury tented camps (from $500 per night) to community-run guesthouses (from $20 per night). In the FY 2023/24, 35 accommodation facilities were officially rated and classified by the Uganda Tourism Board.",
                },
              },
              {
                "@type": "Question",
                name: "How many tourists visit Uganda each year?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In 2023, 1,274,210 international visitors travelled to Uganda — a 56.4 per cent increase over 812,508 arrivals in 2022. Of these, 270,160 arrived by air, representing 37.8 per cent growth. Source: Uganda Tourism Satellite Account Report, March 2025.",
                },
              },
              {
                "@type": "Question",
                name: "How long do tourists typically stay in Uganda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "International visitors stayed an average of 7.6 nights in 2023. Given the distances between major national parks, a trip of at least ten to fourteen days is recommended to combine multiple regions.",
                },
              },
              {
                "@type": "Question",
                name: "What are the main reasons to visit Uganda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Gorilla trekking in Bwindi Impenetrable National Park is the primary draw. Other highlights include chimpanzee tracking in Kibale National Park, wildlife safaris in Queen Elizabeth and Murchison Falls, and cultural experiences. Bwindi is home to roughly half of the world's remaining mountain gorillas.",
                },
              },
              {
                "@type": "Question",
                name: "What accommodation is available in Kampala?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Lodges of Uganda lists accommodation in Kampala, Uganda's capital. Options range from international hotels to budget guesthouses. Kampala frequently serves as a starting point for tours to the western national parks or as a final stop before flying out of Entebbe International Airport.",
                },
              },
              {
                "@type": "Question",
                name: "Are there eco lodges in Uganda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Uganda has several eco-tourism properties, including the Timu Eco Camp in Kaabong, which practises sustainable tourism in the Karamoja region. Lodges of Uganda includes a dedicated category for eco lodges.",
                },
              },
              {
                "@type": "Question",
                name: "What lodges are near Kidepo Valley National Park?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Lodges of Uganda lists accommodation in the Kidepo Valley National Park region. Kidepo is one of Uganda's most remote and species-rich parks, offering an untouched wilderness experience. Access is by domestic flight or a 10–12 hour drive from Kampala.",
                },
              },
              {
                "@type": "Question",
                name: "Where can you track chimpanzees in Uganda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kibale National Park is known as the primate capital of the world and is home to 13 primate species, including habituated chimpanzees. Lodges of Uganda lists accommodation in the Kibale region and nearby Fort Portal.",
                },
              },
              {
                "@type": "Question",
                name: "What economic contribution does tourism make in Uganda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tourism-related industries generated a gross value added of 7,311 billion Uganda shillings in 2023 — a 10.9 per cent increase over 2022. Tourism accounted for 2.6 per cent of Uganda's total tax revenue and 17.2 per cent of national gross capital formation. Source: Uganda Tourism Satellite Account Report, March 2025.",
                },
              },
            ],
          }),
        }}
      />

      {/* CTA */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-forest via-olive-dark to-safari">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-gold/5" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-cream text-2xl sm:text-3xl mb-4">
            Need help choosing a lodge?
          </h2>
          <p className="text-cream/65 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Tell us your travel dates, budget and preferred region. We help you compare options and plan your stay — no fees, no obligations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/lodges"
              className="inline-flex items-center px-7 py-3.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 text-sm"
            >
              Browse All Lodges
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-cream/25 text-cream font-medium rounded-lg hover:bg-cream/10 transition-all duration-300 text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
