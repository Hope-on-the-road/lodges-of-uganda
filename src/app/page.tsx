import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getLodges } from "@/lib/lodges-data";
import { regions } from "@/lib/regions-data";
import { comparisonPages } from "@/lib/comparison-pages";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { FeaturedLodgesCarousel } from "@/components/FeaturedLodgesCarousel";

export const metadata: Metadata = {
  title: "Lodge Uganda — Compare 215 Safari Lodges | Free Guide",
  description:
    "Find the right lodge in Uganda. 215 properties across 17 regions — gorilla lodges, safari camps, eco lodges. Independent guide, no booking fees, no paid rankings.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Lodge Uganda — Compare 215 Safari Lodges | Free Guide",
    description:
      "Find the right lodge in Uganda. 215 properties across 17 regions — gorilla lodges, safari camps, eco lodges. Independent guide, no booking fees.",
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
                Lodge Uganda:<br />
                <span className="text-gold">Compare {lodges.length} Safari Lodges</span>
              </h1>

              <p className="text-cream/75 text-lg leading-relaxed mb-8 max-w-xl">
                Find the right lodge in Uganda — {lodges.length} properties across {regionCounts.length} regions, from gorilla lodges in Bwindi to safari camps in Queen Elizabeth. Independent guide, no booking fees.
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

      {/* Quick-win intro — keyword-rich anchor paragraph */}
      <section className="bg-cream py-10 sm:py-12 border-b border-sand/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-olive-dark/80 text-base sm:text-lg leading-relaxed text-center">
            <strong>This is Uganda&apos;s most comprehensive lodge guide</strong> — {lodges.length} lodges across {regionCounts.length} regions, independently researched, with no booking fees and no paid placements. Finding a lodge in Uganda means choosing between luxury tented camps at the edge of Bwindi&apos;s gorilla forest, riverfront lodges on the Nile at Murchison Falls, and community eco-lodges in remote Kidepo Valley. Prices range from around USD&nbsp;50 per night at mid-range community lodges to USD&nbsp;800+ at ultra-luxury properties.
          </p>
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
              But Uganda has far more than gorillas. The country protects ten national parks, managed by the Uganda Wildlife Authority (UWA) since 1996, along with over 30 tourism concessions across forest reserves and wildlife reserves. The landscape shifts dramatically as you move across the country — from the open savanna plains of{" "}
              <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth National Park</Link>, where tree-climbing lions and hippos share the shoreline, to the thundering cascade of{" "}
              <Link href="/regions/murchison-falls" className="text-gold hover:underline">Murchison Falls</Link>, where the entire Nile forces itself through a seven-meter gap in the rock. The Rwenzori Mountains, a UNESCO World Heritage Site, rise to 5,109 metres on the western border, while in the remote northeast,{" "}
              <Link href="/regions/kidepo" className="text-gold hover:underline">Kidepo Valley</Link> — home to 77 mammal species and 475 recorded bird species — offers some of East Africa&apos;s most untouched wilderness.
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
              LodgesOfUganda.com is an independent guide to every lodge in Uganda — {lodges.length} properties across {regionCounts.length} regions, individually researched. In 2023, Uganda received 1,274,210 international visitors, a 56.4 per cent increase over the previous year (Uganda Tourism Satellite Account, March 2025). This guide exists to help you navigate that demand honestly: no paid placements, no sponsored rankings, no booking commissions.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Types of Lodge in Uganda */}
      <section className="bg-sand/30 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl sm:text-3xl mb-10 text-center">
            Types of Lodge in Uganda
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sand/40">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg mb-3">Gorilla Lodges</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                {gorillaCount} lodges near <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi Impenetrable National Park</Link> and <Link href="/regions/mgahinga" className="text-gold hover:underline">Mgahinga Gorilla National Park</Link>. Gorilla trekking permits cost USD&nbsp;800 per person and must be booked through the Uganda Wildlife Authority (UWA). Properties range from budget backpacker lodges to ultra-luxury camps like Clouds Mountain Gorilla Lodge at over 2,000&nbsp;metres elevation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sand/40">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg mb-3">Safari Lodges</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                {safariCount} lodges with direct game drive access across <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth</Link>, <Link href="/regions/murchison-falls" className="text-gold hover:underline">Murchison Falls</Link>, and <Link href="/regions/kidepo" className="text-gold hover:underline">Kidepo Valley</Link> national parks. Mweya Safari Lodge, the oldest in Queen Elizabeth, offers views over the Rwenzori Mountains and the Kazinga Channel. Apoka Safari Lodge in Kidepo provides one of Uganda&apos;s most remote luxury experiences.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sand/40">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg mb-3">Eco &amp; Community Lodges</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                Uganda has a strong tradition of community-owned tourism. Buhoma Lodge, eight cottages built from local materials within Bwindi&apos;s boundaries, operates on ecological principles. Nkuringo Bwindi Gorilla Lodge, a community-owned property at 2,090&nbsp;metres, works with Uganda Carbon Bureau on carbon offset programmes. Use the <Link href="/lodge-finder" className="text-gold hover:underline">Lodge Finder</Link> to filter by eco lodges.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sand/40">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg mb-3">Lakeside &amp; River Lodges</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                Uganda&apos;s lakes and rivers provide atmospheric settings for lodges. Semliki Safari Lodge operates safari tents on raised wooden platforms inside the Semliki Wildlife Reserve. <Link href="/lodges/jinja/wildwaters-lodge" className="text-gold hover:underline">Wild Waters Lodge</Link> sits on a private island in the Nile near Jinja. The <Link href="/ssese-islands-guide" className="text-gold hover:underline">Ssese Islands</Link> on Lake Victoria offer beach and island-hopping accommodation.
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

      {/* In-Depth Guides */}
      <section className="py-16 bg-cream border-t border-sand/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl sm:text-3xl mb-2 text-center">
            In-Depth Guides
          </h2>
          <p className="text-olive-dark/50 text-sm text-center mb-8 max-w-xl mx-auto">
            Research-backed guides to accommodation and destinations across Uganda.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/accommodation-guides"
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-sand/40 hover:border-gold/40 transition-all"
            >
              <p className="font-[family-name:var(--font-heading)] font-semibold text-forest group-hover:text-gold transition-colors text-lg mb-2">Accommodation Guides</p>
              <p className="text-olive-dark/70 text-sm leading-relaxed">Industry data, regional comparisons, and classification standards for Uganda&apos;s lodges and hotels.</p>
            </Link>
            <Link
              href="/bwindi"
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-sand/40 hover:border-gold/40 transition-all"
            >
              <p className="font-[family-name:var(--font-heading)] font-semibold text-forest group-hover:text-gold transition-colors text-lg mb-2">Bwindi Impenetrable</p>
              <p className="text-olive-dark/70 text-sm leading-relaxed">Sector guides, gorilla lodges, trekking preparation, and everything you need for Bwindi.</p>
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
            Frequently Asked Questions: Lodges in Uganda
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">What is the best lodge in Uganda for gorilla trekking?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                The best lodge depends on which gorilla sector you trek from. For the Buhoma sector (northern <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi</Link>), Buhoma Lodge offers eight eco-cottages directly inside the park boundary. For Nkuringo (southern Bwindi), Clouds Mountain Gorilla Lodge at over 2,000&nbsp;metres is Uganda&apos;s highest-altitude luxury property. For Rushaga and Ruhija, Ruhija Gorilla Safari Lodge provides direct access to the tracking departure points.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">How much does a lodge in Uganda cost?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                Uganda lodge prices range from approximately USD&nbsp;50–80 per night for mid-range community lodges to USD&nbsp;400–800+ per night at ultra-luxury tented camps. Prices typically include full board (three meals). Budget options such as Bwindi Backpackers Lodge start below USD&nbsp;50. See our <Link href="/budget-vs-luxury-uganda" className="text-gold hover:underline">budget vs luxury comparison</Link> for detailed price breakdowns.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">When should I book a lodge in Uganda?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                For gorilla trekking lodges, book 3–6 months in advance, particularly for peak season (June–August and December–February). Gorilla permits sell out earlier than lodges. For safari lodges in <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth</Link> or <Link href="/regions/murchison-falls" className="text-gold hover:underline">Murchison Falls</Link>, 2–3 months is generally sufficient outside peak season. Read our <Link href="/blog/best-time-book-uganda-lodge" className="text-gold hover:underline">booking guide</Link> for details.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">Do Uganda lodges include meals?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                Most safari lodges and gorilla lodges in Uganda operate on a full-board or half-board basis. Community lodges and budget guesthouses typically offer breakfast and dinner; meals on request are common at simpler properties. See our guide to <Link href="/blog/food-uganda-safari-lodges" className="text-gold hover:underline">food at Uganda safari lodges</Link>.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">Which region has the most lodges in Uganda?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi Impenetrable National Park</Link> has the highest concentration of lodges, driven by mountain gorilla trekking demand. <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth National Park</Link> and the <Link href="/regions/fort-portal" className="text-gold hover:underline">Fort Portal/Crater Lakes</Link> region follow. Browse all regions in our <Link href="/lodges-hotels-by-region" className="text-gold hover:underline">lodges by region guide</Link>.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">What is the difference between a lodge and a tented camp in Uganda?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                A lodge in Uganda is typically a permanent structure with en-suite rooms, restaurant, and communal areas. A luxury tented camp offers large canvas tents on raised platforms with the same amenities — private bathroom, electricity, full-board meals — but a closer-to-nature experience. Both range from mid-range to ultra-luxury. See our <Link href="/accommodation-types-uganda" className="text-gold hover:underline">accommodation types guide</Link> for details.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-forest mb-2">How many lodges are listed on this guide?</h3>
              <p className="text-olive-dark/70 text-sm leading-relaxed">
                This guide lists {lodges.length} lodges across {regionCounts.length} regions — from gorilla trekking lodges in Bwindi and <Link href="/regions/mgahinga" className="text-gold hover:underline">Mgahinga</Link> to wildlife safari camps in Queen Elizabeth, Murchison Falls and <Link href="/regions/kidepo" className="text-gold hover:underline">Kidepo Valley</Link>. Every property is independently researched with no paid placements. In 2025, 117 accommodation facilities had been graded and classified by the Uganda Tourism Board.
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
                name: "What is the best lodge in Uganda for gorilla trekking?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The best lodge depends on which gorilla sector you trek from. For Buhoma (northern Bwindi), Buhoma Lodge offers eight eco-cottages inside the park. For Nkuringo (southern Bwindi), Clouds Mountain Gorilla Lodge at over 2,000 metres is Uganda's highest-altitude luxury property. For Rushaga and Ruhija, Ruhija Gorilla Safari Lodge provides direct access to tracking departure points.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a lodge in Uganda cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Uganda lodge prices range from approximately USD 50–80 per night for mid-range community lodges to USD 400–800+ per night at ultra-luxury tented camps. Prices typically include full board (three meals). Budget options such as Bwindi Backpackers Lodge start below USD 50.",
                },
              },
              {
                "@type": "Question",
                name: "When should I book a lodge in Uganda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For gorilla trekking lodges, book 3–6 months in advance, particularly for peak season (June–August and December–February). Gorilla permits sell out earlier than lodges. For safari lodges in Queen Elizabeth or Murchison Falls, 2–3 months is generally sufficient outside peak season.",
                },
              },
              {
                "@type": "Question",
                name: "Do Uganda lodges include meals?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most safari lodges and gorilla lodges in Uganda operate on a full-board or half-board basis. Community lodges and budget guesthouses typically offer breakfast and dinner; meals on request are common at simpler properties.",
                },
              },
              {
                "@type": "Question",
                name: "Which region has the most lodges in Uganda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bwindi Impenetrable National Park has the highest concentration of lodges, driven by mountain gorilla trekking demand. Queen Elizabeth National Park and the Fort Portal/Crater Lakes region follow.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between a lodge and a tented camp in Uganda?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A lodge in Uganda is typically a permanent structure with en-suite rooms, restaurant, and communal areas. A luxury tented camp offers large canvas tents on raised platforms with the same amenities — private bathroom, electricity, full-board meals — but a closer-to-nature experience. Both range from mid-range to ultra-luxury.",
                },
              },
              {
                "@type": "Question",
                name: "How many lodges are listed on this guide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This guide lists over 215 lodges across 17 regions — from gorilla trekking lodges in Bwindi and Mgahinga to wildlife safari camps in Queen Elizabeth, Murchison Falls and Kidepo Valley. Every property is independently researched with no paid placements. In 2025, 117 accommodation facilities had been graded and classified by the Uganda Tourism Board.",
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
