import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

const SUPABASE_IMG = "https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails";

export const metadata: Metadata = {
  title: "Where to Stay in Uganda — Region Guide (2026)",
  description:
    "Where to stay in Uganda by region — safari lodges, guesthouses, and camps across Bwindi, Queen Elizabeth, Murchison Falls, and more. Prices and tips from 48 days on the ground.",
  alternates: {
    canonical: `${SITE_URL}/blog/where-to-stay-uganda`,
  },
  openGraph: {
    title: "Where to Stay in Uganda — Region Guide (2026)",
    description:
      "A region-by-region guide to Uganda's accommodation — lodge types, price ranges, and what to expect in each safari area.",
    url: `${SITE_URL}/blog/where-to-stay-uganda`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function WhereToStayUgandaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Where to Stay in Uganda: Accommodation by Region (2026 Guide)",
      datePublished: "2026-06-21",
      description:
        "A region-by-region guide to accommodation in Uganda — safari lodges, guesthouses, camps, and community stays across the country's key destinations.",
      url: `${SITE_URL}/blog/where-to-stay-uganda`,
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
          name: "What types of accommodation are available in Uganda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Uganda offers luxury safari lodges (250–800+ USD per night), mid-range lodges (80–250 USD), budget guesthouses (20–80 USD), and community-run homestays (15–50 USD). National park areas like Bwindi and Queen Elizabeth have the widest range, while remote parks like Kidepo are mainly mid-range to luxury.",
          },
        },
        {
          "@type": "Question",
          name: "Which region in Uganda has the best safari lodges?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bwindi Impenetrable National Park has the highest concentration of quality safari lodges, driven by demand from gorilla trekking visitors. Queen Elizabeth National Park and Murchison Falls also have strong lodge selections across all price ranges. The western circuit (Bwindi–Queen Elizabeth–Kibale) offers the most choice overall.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a safari lodge cost in Uganda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Budget guesthouses near national parks start at 20–40 USD per night. Mid-range lodges with meals typically cost 80–250 USD. Luxury properties in Bwindi or Queen Elizabeth range from 250 to 800+ USD per person per night, usually fully inclusive of meals and activities.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to stay inside the national park?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Many excellent lodges sit just outside park gates — often within walking distance. In Bwindi, lodges in Buhoma village are minutes from the park entrance. Staying outside the park is usually cheaper and supports the local community directly. Inside-park options exist in Queen Elizabeth and Murchison Falls but are limited and pricier.",
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
            <span className="text-olive-dark/80">Where to Stay in Uganda</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">21 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Where to Stay in Uganda: A Region-by-Region Guide to Lodges, Camps &amp; Guesthouses
          </h1>
          <p className="text-cream/70 text-lg">
            What accommodation looks like across Uganda&apos;s safari regions — from luxury gorilla lodges in Bwindi to lakeside guesthouses in Jinja, based on 48 days travelling the country.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Uganda has accommodation in every safari region, but what&apos;s available varies enormously. Bwindi has over 30 lodges within a short drive of the gorilla trekking briefing points. Kidepo, in the far northeast, has fewer than five. Knowing what to expect in each region — lodge types, price ranges, and how far ahead to book — saves time and prevents the kind of surprises that turn a well-planned trip into a stressful one.
          </p>

          <p>
            Over 15 visits and 48 days on the ground between October 2024 and May 2026, we stayed in community guesthouses, mid-range lodges, and luxury properties across Uganda. This guide is based on that experience, supplemented by data from the Uganda Bureau of Statistics (UBOS) and the Uganda Tourism Board (UTB). For seasonal pricing and booking lead times, see our{" "}
            <Link href="/blog/best-time-book-uganda-lodge" className="text-gold hover:underline">best time to book guide</Link>.
          </p>
        </div>

        {/* Accommodation Types */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Types of Accommodation in Uganda
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              Uganda&apos;s accommodation falls into four broad categories. The price ranges below are per person per night and reflect 2026 rates.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-forest/20">
                    <th className="text-left py-3 pr-4 text-forest font-semibold">Type</th>
                    <th className="text-left py-3 pr-4 text-forest font-semibold">Price Range</th>
                    <th className="text-left py-3 text-forest font-semibold">What to Expect</th>
                  </tr>
                </thead>
                <tbody className="text-olive-dark/70">
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-medium text-olive-dark/90">Luxury lodge</td>
                    <td className="py-3 pr-4">250–800+ USD</td>
                    <td className="py-3">Full board, private balconies, guided activities included, often inside or adjacent to parks</td>
                  </tr>
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-medium text-olive-dark/90">Mid-range lodge</td>
                    <td className="py-3 pr-4">80–250 USD</td>
                    <td className="py-3">Comfortable rooms, meals included or available, gardens or forest setting</td>
                  </tr>
                  <tr className="border-b border-sand">
                    <td className="py-3 pr-4 font-medium text-olive-dark/90">Budget guesthouse</td>
                    <td className="py-3 pr-4">20–80 USD</td>
                    <td className="py-3">Basic rooms, shared or private bathroom, meals on request</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-olive-dark/90">Community stay</td>
                    <td className="py-3 pr-4">15–50 USD</td>
                    <td className="py-3">Homestays or community-run lodges, simple rooms, authentic local experience</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The hospitality sector is a significant employer across Uganda. According to UBOS, the accommodation and food services industry employed over 230,000 people nationally (UBOS Statistical Abstract 2024). In regions like Bwindi, where agriculture is limited by the park boundary, lodges are often the largest employer in the community.
            </p>
          </div>
        </section>

        {/* Gorilla Bluff breakfast image */}
        <figure>
          <Image
            src={`${SUPABASE_IMG}/uganda_1780767475213_trrd.jpg`}
            alt="Breakfast at Gorilla Bluff Lodge in Buhoma — avocado, rolex wrap, and French toast on a colourful African cloth"
            width={800}
            height={500}
            className="rounded-xl w-full"
          />
          <figcaption className="text-xs text-olive-dark/50 mt-2">
            Breakfast at Gorilla Bluff Lodge, Buhoma — avocado, rolex, and French toast. January 2026. Photo: Mark Suer
          </figcaption>
        </figure>

        {/* Bwindi */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Bwindi Impenetrable National Park
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              Bwindi has Uganda&apos;s densest concentration of safari lodges, driven entirely by gorilla trekking demand. The park is divided into four sectors — Buhoma, Ruhija, Rushaga, and Nkuringo — and each has its own cluster of accommodation. Buhoma, the oldest and most accessible sector, has the widest range, from luxury properties to village guesthouses. For a detailed sector comparison, see our{" "}
              <Link href="/blog/bwindi-sectors-compared" className="text-gold hover:underline">Bwindi sectors guide</Link>.
            </p>

            <p>
              During our 12-day stay in January 2026, we were based in Buhoma and visited lodges across all price categories. The difference in quality between a 30 USD guesthouse and a 100 USD mid-range lodge is striking — not so much in the rooms, but in the food, the gardens, and the reliability of hot water. Once you cross 200 USD, you&apos;re paying for views, privacy, and included activities rather than fundamentally better comfort.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-gold font-bold">Luxury:</span> <span>Sanctuary Gorilla Forest Camp, Buhoma Lodge, Mahogany Springs (250–600 USD)</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">Mid-range:</span> <span>Gorilla Bluff Lodge, Trackers Safari Lodge, Engagi Lodge (80–200 USD)</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">Budget:</span> <span>Buhoma Community Rest Camp, local guesthouses (20–60 USD)</span></li>
            </ul>

            <p>
              Breakfast at Gorilla Bluff Lodge in January 2026 set the tone for our days: avocado, rolex (a Ugandan egg-and-chapati wrap), and French toast — simple, fresh, and filling before a morning in the forest.
            </p>

            <p>
              <Link href="/regions/bwindi" className="text-gold hover:underline">Browse all Bwindi lodges</Link>
            </p>
          </div>
        </section>

        {/* Holzwerkstatt image */}
        <figure>
          <Image
            src={`${SUPABASE_IMG}/uganda_1780767748724_eob6.jpg`}
            alt="Woodworking workshop in Buhoma village — local carpenters crafting furniture near Bwindi Impenetrable National Park"
            width={800}
            height={500}
            className="rounded-xl w-full"
          />
          <figcaption className="text-xs text-olive-dark/50 mt-2">
            Innox and Friend&apos;s Unique Workshop in Buhoma — handmade furniture for the community. The lodge economy supports businesses like this. January 2026. Photo: Mark Suer
          </figcaption>
        </figure>

        {/* Community economy */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            How Lodges Support Local Communities
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              Accommodation in Uganda is not just a place to sleep — it&apos;s often the economic engine of the surrounding community. In Buhoma, lodges employ cooks, cleaners, porters, gardeners, and security guards. The knock-on effects are visible: carpenters build furniture for lodges, farmers supply vegetables, and boda-boda (motorcycle taxi) drivers transport staff and guests.
            </p>

            <p>
              We visited the Innox and Friend&apos;s Unique Workshop in Buhoma in January 2026 — a carpentry shop that builds beds, tables, and shelving for lodges in the area. Three local craftsmen were working with hand tools, surrounded by wood shavings and half-finished furniture. The connection between tourism and local employment is not abstract here; it&apos;s visible in every lodge you walk into.
            </p>

            <p>
              According to UBOS, the accommodation sector contributed approximately 2.3% of Uganda&apos;s GDP in 2023 (UBOS Statistical Abstract 2024). In western Uganda, where agriculture is constrained by steep terrain and park boundaries, that share is significantly higher at local level.
            </p>
          </div>
        </section>

        {/* Queen Elizabeth & Ishasha */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Queen Elizabeth National Park &amp; Ishasha
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              Queen Elizabeth is Uganda&apos;s most visited savanna park, and accommodation clusters around two areas: the Mweya peninsula (central) and{" "}
              <Link href="/regions/ishasha" className="text-gold hover:underline">Ishasha</Link> (southern, famous for tree-climbing lions). Mweya has the broadest range, from the iconic Mweya Safari Lodge to budget bandas. Ishasha is more remote — lodges are fewer and tend toward mid-range to luxury.
            </p>

            <p>
              The{" "}
              <Link href="/blog/boat-safari-kazinga-channel-guide" className="text-gold hover:underline">Kazinga Channel boat safari</Link> departs from near Mweya, making the peninsula the most convenient base for the park&apos;s signature experience. Lodges on the channel side often have hippo and buffalo visits right on the grounds.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-gold font-bold">Mweya area:</span> <span>Mweya Safari Lodge, Enganzi Game Lodge, Bush Lodge (40–350 USD)</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">Ishasha:</span> <span>Ishasha Jungle Lodge, Pumba Safari Cottages (80–300 USD)</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">Katunguru gate:</span> <span>Budget options along the main road (20–60 USD)</span></li>
            </ul>

            <p>
              <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Browse all Queen Elizabeth lodges</Link>
            </p>
          </div>
        </section>

        {/* Murchison Falls */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Murchison Falls National Park
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              Uganda&apos;s largest national park has accommodation on both the north and south banks of the Nile. The south bank (Paraa area) has the most options and is closest to the ferry crossing for game drives on the north bank. A few exclusive lodges sit on the north bank itself — quieter, more remote, and significantly pricier.
            </p>

            <p>
              Most visitors combine Murchison Falls with a stop at{" "}
              <Link href="/regions/ziwa-rhino" className="text-gold hover:underline">Ziwa Rhino Sanctuary</Link> on the drive from Kampala. Ziwa has a handful of lodges and is the only place in Uganda where you can track rhinos on foot.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-gold font-bold">South bank:</span> <span>Paraa Safari Lodge, Red Chilli Rest Camp, Pakuba Safari Lodge (30–400 USD)</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">North bank:</span> <span>Chobe Safari Lodge, Baker&apos;s Lodge (200–500 USD)</span></li>
            </ul>

            <p>
              <Link href="/regions/murchison-falls" className="text-gold hover:underline">Browse all Murchison Falls lodges</Link>
            </p>
          </div>
        </section>

        {/* Ziwa Rhino image */}
        <figure>
          <Image
            src={`${SUPABASE_IMG}/uganda_1781275312755_sijl.jpg`}
            alt="White rhino grazing on green grass at Ziwa Rhino Sanctuary in Uganda"
            width={800}
            height={500}
            className="rounded-xl w-full"
          />
          <figcaption className="text-xs text-olive-dark/50 mt-2">
            A white rhino at Ziwa Rhino Sanctuary — the only place in Uganda where you can track rhinos on foot. Most visitors stop here on the drive between Kampala and Murchison Falls. Photo: Mark Suer
          </figcaption>
        </figure>

        {/* Kibale & Fort Portal */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Kibale &amp; Fort Portal
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              <Link href="/regions/kibale" className="text-gold hover:underline">Kibale National Park</Link> is the centre of chimpanzee trekking in Uganda. Lodges cluster around the Kanyanchu visitor centre and along the road to{" "}
              <Link href="/regions/fort-portal" className="text-gold hover:underline">Fort Portal</Link>, the main town serving the area. Fort Portal itself has hotels and guesthouses for every budget — useful if you want a town base with restaurants, shops, and mobile connectivity.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-gold font-bold">Near Kanyanchu:</span> <span>Primate Lodge (UWA), Kibale Forest Camp, Chimpanzee Forest Guesthouse (40–300 USD)</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">Fort Portal:</span> <span>Mountains of the Moon Hotel, Dutchess (20–120 USD)</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">Crater lakes:</span> <span>Ndali Lodge, Kyaninga Lodge (200–500 USD)</span></li>
            </ul>

            <p>
              <Link href="/regions/kibale" className="text-gold hover:underline">Browse all Kibale lodges</Link>
            </p>
          </div>
        </section>

        {/* Lake Bunyonyi & Lake Mburo */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Lake Bunyonyi &amp; Lake Mburo
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              <Link href="/regions/lake-bunyonyi" className="text-gold hover:underline">Lake Bunyonyi</Link> is a popular stop between Bwindi and Kampala — a calm, scenic lake surrounded by terraced hillsides and dotted with islands. Accommodation ranges from island-based eco-lodges to hillside resorts. It&apos;s one of the few places in Uganda where the lake itself is the attraction, not the wildlife.
            </p>

            <p>
              <Link href="/regions/lake-mburo" className="text-gold hover:underline">Lake Mburo National Park</Link>, further east on the Kampala–Bwindi route, is Uganda&apos;s smallest savanna park and works well as a half-day or overnight stop. Accommodation is limited but includes a few mid-range lodges and the UWA bandas inside the park.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-gold font-bold">Lake Bunyonyi:</span> <span>Birdnest Resort, Bunyonyi Overland Resort, island camps (20–250 USD)</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">Lake Mburo:</span> <span>Mihingo Lodge, Rwakobo Rock, UWA Bandas (30–350 USD)</span></li>
            </ul>
          </div>
        </section>

        {/* Kidepo */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Kidepo Valley National Park
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              <Link href="/regions/kidepo" className="text-gold hover:underline">Kidepo</Link> is Uganda&apos;s most remote major park, in the far northeast near the South Sudan and Kenya borders. Getting there requires either a domestic flight or a 10–12 hour drive from Kampala. The remoteness means fewer lodges — but the ones that exist tend to be well-run, because only committed operators set up here.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-gold font-bold">Inside the park:</span> <span>Apoka Safari Lodge, UWA Bandas (30–600 USD)</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">Near the park:</span> <span>Kidepo Savannah Lodge, Nga&apos;Moru Wilderness Camp (80–250 USD)</span></li>
            </ul>

            <p>
              Book well ahead for Kidepo — limited capacity fills up during peak season (June–September). The drive from Kampala passes through{" "}
              <Link href="/regions/karamoja" className="text-gold hover:underline">Karamoja</Link>, one of Uganda&apos;s least-touristed regions, where accommodation is mostly basic guesthouses in the towns of Moroto and Kotido.
            </p>
          </div>
        </section>

        {/* Jinja image */}
        <figure>
          <Image
            src={`${SUPABASE_IMG}/uganda_1781276710338_5bbx.jpg`}
            alt="Three people sharing a boda-boda motorcycle ride through Jinja, Uganda — spontaneous and joyful"
            width={800}
            height={500}
            className="rounded-xl w-full"
          />
          <figcaption className="text-xs text-olive-dark/50 mt-2">
            Riding a boda-boda through Jinja with friends — three passengers, no helmets, and big smiles. Local transport is an experience in itself. October 2024. Photo: Mark Suer
          </figcaption>
        </figure>

        {/* Jinja & Entebbe */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Jinja, Entebbe &amp; the Gateway Cities
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              Most Uganda trips start and end in{" "}
              <Link href="/regions/entebbe" className="text-gold hover:underline">Entebbe</Link> (airport city) or{" "}
              <Link href="/regions/kampala" className="text-gold hover:underline">Kampala</Link> (capital). Both have accommodation across all price ranges, from international-brand hotels to simple airport guesthouses. For a curated selection near the airport, see our{" "}
              <Link href="/blog/best-lodges-near-entebbe-airport" className="text-gold hover:underline">Entebbe lodges guide</Link>.
            </p>

            <p>
              <Link href="/regions/jinja" className="text-gold hover:underline">Jinja</Link>, at the source of the Nile, is Uganda&apos;s adventure capital — white-water rafting, bungee jumping, and kayaking. In October 2024, we spent a day exploring Jinja by boda-boda with friends from Butiru Freundeskreis. The three of us shared one motorcycle — Susanne, our driver, and me, weaving through traffic without helmets, in light shoes and summer clothes. It&apos;s the kind of experience that no lodge brochure prepares you for, but it&apos;s how people actually move around here.
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span className="text-gold font-bold">Entebbe:</span> <span>Victoria Forest Resort, Protea Hotel, Boma Guest House (30–200 USD)</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">Kampala:</span> <span>Serena Hotel, Cassia Lodge, Red Chilli Hideaway (15–300 USD)</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">Jinja:</span> <span>Wildwaters Lodge, Jinja Nile Resort, Nile River Camp (25–400 USD)</span></li>
            </ul>
          </div>
        </section>

        {/* Sipi Falls & Eastern */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Sipi Falls &amp; Eastern Uganda
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              <Link href="/regions/sipi-falls" className="text-gold hover:underline">Sipi Falls</Link>, on the slopes of Mount Elgon, is a scenic highlight that most visitors miss. Three waterfalls cascade down terraced hillsides, and the area has a small but growing selection of lodges. Accommodation is mainly budget to mid-range, with a few standout properties that use the dramatic views to full effect.
            </p>

            <p>
              Eastern Uganda beyond Sipi — Mbale, Tororo, the Mount Elgon foothills — is well off the standard tourist circuit. Accommodation exists but is geared toward business travellers rather than tourists. If you&apos;re heading to Kidepo from the east, plan overnight stops carefully.
            </p>
          </div>
        </section>

        {/* BodaBoda tanken image */}
        <figure>
          <Image
            src={`${SUPABASE_IMG}/uganda_1781276656453_s41f.jpg`}
            alt="Refuelling a boda-boda motorcycle at a roadside vendor in rural Uganda — petrol sold from a cola bottle"
            width={800}
            height={500}
            className="rounded-xl w-full"
          />
          <figcaption className="text-xs text-olive-dark/50 mt-2">
            Refuelling a boda-boda at the roadside — petrol from a cola bottle, paid in Ugandan shillings. No petrol station needed. October 2024. Photo: Mark Suer
          </figcaption>
        </figure>

        {/* Getting between regions */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Getting Between Regions
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <p>
              Uganda&apos;s distances are manageable but roads vary. The drive from Entebbe to Bwindi takes 8–10 hours by road; a domestic flight cuts it to under an hour. Between Queen Elizabeth and Bwindi, count on 4–5 hours. For a full breakdown of routes and costs, see our{" "}
              <Link href="/blog/entebbe-to-bwindi-travel-options" className="text-gold hover:underline">Entebbe to Bwindi guide</Link>.
            </p>

            <p>
              During our October 2024 trip, we needed to refuel our boda-boda on a rural road. There was no petrol station — a woman at a small roadside shop brought out a used cola bottle filled with petrol. We paid in Ugandan shillings without even getting off the motorcycle. These are the moments between the lodges that make travelling in Uganda genuinely different from anywhere else.
            </p>

            <p>
              Plan your overnight stops based on realistic driving times. The western circuit (Entebbe → Lake Mburo → Bwindi → Queen Elizabeth → Kibale → Fort Portal → Kampala) is Uganda&apos;s most popular route and has the best accommodation infrastructure. The northern circuit (Kampala → Ziwa → Murchison Falls → Kidepo) requires more careful planning, especially beyond Murchison.
            </p>
          </div>
        </section>

        {/* BodaBoda Wasserkanister image */}
        <figure>
          <Image
            src={`${SUPABASE_IMG}/uganda_1781987977563_e8sv.jpg`}
            alt="Boda-boda driver carrying multiple yellow water jerrycans on a rural road in Uganda"
            width={800}
            height={500}
            className="rounded-xl w-full"
          />
          <figcaption className="text-xs text-olive-dark/50 mt-2">
            A boda-boda driver transporting water jerrycans on a rural road — the kind of everyday scene you see between lodge destinations. No helmet, sandals, fully loaded. October 2024. Photo: Mark Suer
          </figcaption>
        </figure>

        {/* Practical tips */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Practical Tips for Choosing Your Lodge
          </h2>
          <div className="space-y-4 text-olive-dark/80 leading-relaxed">
            <ul className="space-y-3">
              <li><strong className="text-forest">Match your lodge to your permit sector.</strong> In Bwindi, gorilla permits are sector-specific. If your permit is for Rushaga, a lodge in Buhoma won&apos;t work — the sectors are 2–3 hours apart.</li>
              <li><strong className="text-forest">Book meals with your room.</strong> In remote areas, there are no restaurants. Most lodges offer full board or half board. Budget guesthouses may cook on request but need advance notice.</li>
              <li><strong className="text-forest">Check what &quot;near the park&quot; means.</strong> &quot;Near Bwindi&quot; can mean 5 minutes from the gate or 2 hours on a dirt road. Always check the specific location, not just the marketing description.</li>
              <li><strong className="text-forest">Wi-Fi is not guaranteed.</strong> Mid-range and luxury lodges in Bwindi and Queen Elizabeth usually have basic Wi-Fi. Budget places and remote parks (Kidepo, Ishasha) often have none. Mobile data (MTN or Airtel) works in most areas.</li>
              <li><strong className="text-forest">Power cuts are normal.</strong> Most lodges have generators or solar, but don&apos;t expect 24-hour electricity everywhere. Bring a power bank.</li>
            </ul>

            <p>
              For a full packing list including what to bring for variable lodge conditions, see our{" "}
              <Link href="/blog/uganda-packing-list" className="text-gold hover:underline">Uganda packing list</Link>. To understand what you&apos;ll spend overall, our{" "}
              <Link href="/blog/uganda-safari-cost-guide" className="text-gold hover:underline">cost guide</Link> breaks down budgets by lodge level.
            </p>
          </div>
        </section>

        {/* Use our directory */}
        <section className="bg-cream/50 rounded-xl p-6 space-y-4">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl">
            Find Your Lodge
          </h2>
          <p className="text-olive-dark/80 text-sm leading-relaxed">
            Our{" "}
            <Link href="/lodges" className="text-gold hover:underline">lodge directory</Link> lists over 200 properties across Uganda, filterable by region, price, and style. Use the{" "}
            <Link href="/lodge-finder" className="text-gold hover:underline">Lodge Finder</Link> to narrow your search, or browse by region to see what&apos;s available where you&apos;re heading.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-cream/30 rounded-lg p-4">
              <h3 className="font-semibold text-forest text-sm mb-1">What types of accommodation are available in Uganda?</h3>
              <p className="text-olive-dark/70 text-sm">
                Uganda offers luxury safari lodges (250–800+ USD per night), mid-range lodges (80–250 USD), budget guesthouses (20–80 USD), and community-run homestays (15–50 USD). National park areas like Bwindi and Queen Elizabeth have the widest range.
              </p>
            </div>
            <div className="bg-cream/30 rounded-lg p-4">
              <h3 className="font-semibold text-forest text-sm mb-1">Which region in Uganda has the best safari lodges?</h3>
              <p className="text-olive-dark/70 text-sm">
                Bwindi Impenetrable National Park has the highest concentration of quality lodges, driven by gorilla trekking demand. Queen Elizabeth and Murchison Falls also have strong selections across all price ranges.
              </p>
            </div>
            <div className="bg-cream/30 rounded-lg p-4">
              <h3 className="font-semibold text-forest text-sm mb-1">How much does a safari lodge cost in Uganda?</h3>
              <p className="text-olive-dark/70 text-sm">
                Budget guesthouses near national parks start at 20–40 USD per night. Mid-range lodges with meals cost 80–250 USD. Luxury properties range from 250 to 800+ USD per person per night, usually fully inclusive of meals and activities. Prices are as of 2026.
              </p>
            </div>
            <div className="bg-cream/30 rounded-lg p-4">
              <h3 className="font-semibold text-forest text-sm mb-1">Do I need to stay inside the national park?</h3>
              <p className="text-olive-dark/70 text-sm">
                Not necessarily. Many excellent lodges sit just outside park gates — often within walking distance. In Bwindi, lodges in Buhoma village are minutes from the park entrance. Staying outside is usually cheaper and supports the local community directly.
              </p>
            </div>
          </div>
        </section>

        <RelatedArticles currentSlug="where-to-stay-uganda" />
      </article>
    </>
  );
}
