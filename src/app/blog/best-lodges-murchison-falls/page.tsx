import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Best Lodges in Murchison Falls National Park (2026 Guide)",
  description:
    "Compare lodges in Murchison Falls — from luxury Paraa and Bakers to mid-range Murchison Treehouse and budget camps. Prices, locations, and honest tips.",
  alternates: {
    canonical: `${SITE_URL}/blog/best-lodges-murchison-falls`,
  },
  openGraph: {
    title: "Best Lodges in Murchison Falls National Park (2026 Guide)",
    description:
      "Luxury, mid-range and budget lodges in Murchison Falls compared — locations, prices, boat cruises, and what we learned staying in the park.",
    url: `${SITE_URL}/blog/best-lodges-murchison-falls`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function BestLodgesMurchisonFallsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "Best Lodges in Murchison Falls National Park: Luxury to Budget Compared",
      datePublished: "2026-06-24",
      description:
        "A detailed comparison of lodges in Murchison Falls National Park — luxury, mid-range, and budget options with prices, locations, and first-hand experience from October 2024.",
      url: `${SITE_URL}/blog/best-lodges-murchison-falls`,
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
          name: "How many lodges are in Murchison Falls National Park?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There are roughly 25 lodges and camps in and around Murchison Falls National Park, ranging from luxury properties like Paraa Safari Lodge and Bakers Lodge to budget camps like Yebo Safari Camp and Red Chilli Rest Camp. Most are located along the Victoria Nile on the southern side of the park.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best lodge in Murchison Falls for boat cruises?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paraa Safari Lodge operates its own daily boat cruises to the falls and is located directly at the Paraa ferry crossing, making it the most convenient base for boat trips. Lodges on the south bank such as Nile Safari Lodge and Murchison River Lodge are also close to the UWA departure point at Paraa.",
          },
        },
        {
          "@type": "Question",
          name: "What does a lodge in Murchison Falls National Park cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Budget camps start from around $20–40 per person per night. Mid-range lodges like Heritage Safari Lodge or Murchison Treehouse range from $50–200 for a double room with meals. Luxury lodges such as Bakers Lodge start from approximately $440 per night for a double with full board (Reiseführer Uganda, 2020 — verify current rates).",
          },
        },
        {
          "@type": "Question",
          name: "Which side of the Nile should I stay on in Murchison Falls?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most lodges are on the south bank. The north bank is where the main game drive area is — you cross by ferry at Paraa. Staying on the south side means you are closer to the park entrance, the Budongo Forest (for chimpanzee tracking), and the boat cruise departure point. A few lodges like Bakers Lodge and Paraa Safari Lodge are on the north bank, putting you directly in game drive territory.",
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
            <Link href="/" className="hover:text-forest transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-forest transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-olive-dark/80">
              Best Lodges Murchison Falls
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">24 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Best Lodges in Murchison Falls National Park: Luxury to Budget
            Compared
          </h1>
          <p className="text-cream/70 text-lg">
            Where to stay in Uganda&apos;s largest national park — honest
            comparisons, real prices, and what we learned during our October 2024
            visit.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Murchison Falls National Park has roughly 25 lodges and camps spread
            across 3,877 square kilometres of savanna, riverine forest, and
            woodland (Uganda Wildlife Authority). The Victoria Nile splits the
            park in two — most lodges sit on the quieter south bank, while the
            main game drive circuit is on the north side, connected by a small
            ferry at Paraa. Choosing where to stay depends on your budget, how
            close you want to be to the game drives, and whether a Nile boat
            cruise is a priority.
          </p>
          <p>
            We spent two days in{" "}
            <Link
              href="/regions/murchison-falls"
              className="text-gold hover:underline"
            >
              Murchison Falls National Park
            </Link>{" "}
            in October 2024, driving through the park, taking a boat cruise to
            the falls, and doing early-morning game drives. This guide draws on
            that visit and our research into the full range of accommodation
            options.
          </p>

          {/* Hero image */}
          <figure>
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1781988036666_n3fd.jpg"
              alt="Sunrise over the savanna in Murchison Falls National Park, October 2024 — Foto: Mark Suer"
              className="w-full rounded-xl"
              loading="eager"
            />
            <figcaption className="text-xs text-olive-dark/50 mt-2">
              Sunrise during an early-morning game drive in Murchison Falls, October 2024. We set off before dawn to catch this light. Foto: Mark Suer
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            The Park Layout: Why Location Matters
          </h2>
          <p>
            The Nile divides Murchison Falls into two distinct halves. The{" "}
            <strong>northern bank</strong> is classic East African savanna —
            open grassland where you will find elephants, Rothschild giraffes,
            lions, leopards, and large buffalo herds. Nearly 1,500 African
            elephants live in the park today, concentrated mostly north of the
            river (Reiseführer Uganda, 2020). The{" "}
            <strong>southern bank</strong> is more forested, with chimpanzee
            tracking available in the Budongo and Kaniyo Pabidi forests.
          </p>
          <p>
            The only crossing between north and south is the Paraa ferry — a
            small vehicle ferry that runs throughout the day. If you stay on the
            south side, factor in the ferry wait when planning game drives. If
            you stay on the north side (Bakers Lodge, Paraa Safari Lodge), you
            are already in game drive territory but further from the park
            entrance.
          </p>
          <p>
            The famous boat cruise to the base of the falls covers 17 kilometres
            upstream and takes about 1.5 hours (UWA). Boats depart from Paraa
            daily at 08:00 and 14:00. UWA charges $30 per person; Paraa Safari
            Lodge and Wild Frontiers run their own boats at $32 per person
            (Reiseführer Uganda, 2020 — verify current rates).
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Luxury Lodges
          </h2>
          <p>
            The top tier in Murchison Falls offers full-board packages, private
            game drive vehicles, and riverside locations with wildlife visible
            from your room.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            <Link
              href="/lodges/murchison-falls/paraa-safari-lodge"
              className="text-gold hover:underline"
            >
              Paraa Safari Lodge
            </Link>
          </h3>
          <p>
            The most established property in the park, Paraa sits on the north
            bank right at the ferry crossing — the best position for both game
            drives and boat cruises. The lodge operates its own daily boats to
            the falls, and its restaurant terrace overlooks the Nile where
            hippos and crocodiles are regular visitors. It is the only lodge with
            a swimming pool on the north side. If convenience and full service
            are your priority, Paraa is hard to beat.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            <Link
              href="/lodges/murchison-falls/bakers-lodge"
              className="text-gold hover:underline"
            >
              Bakers Lodge
            </Link>
          </h3>
          <p>
            Named after the explorer Samuel Baker, this intimate lodge is set on
            the north bank with views over the Nile. Doubles with full board
            start from approximately $440 per night (Reiseführer Uganda, 2020 —
            verify current rates). Bakers is smaller and more exclusive than
            Paraa, with a focus on personalised guiding. Its north-bank position
            means no ferry crossing for morning game drives — a genuine
            advantage when you want to reach the animals at first light.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            <Link
              href="/lodges/murchison-falls/nile-safari-lodge"
              className="text-gold hover:underline"
            >
              Nile Safari Lodge
            </Link>
          </h3>
          <p>
            On the south bank, Nile Safari Lodge is a newer property with
            spacious rooms and panoramic river views. The lodge is
            well-positioned for both game drives (via the ferry) and for the
            boat cruise departure point at Paraa. The restaurant and pool areas
            offer excellent birdwatching — the park is home to more than 450
            bird species (UWA).
          </p>

          {/* Wildlife image */}
          <figure>
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1780758011681_67zp.jpg"
              alt="Rothschild giraffe walking through golden savanna grass in Murchison Falls National Park — Foto: Mark Suer"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="text-xs text-olive-dark/50 mt-2">
              A Rothschild giraffe on the northern game drive circuit. We spotted
              this giraffe during an afternoon drive in October 2024 — the golden
              grassland at that time of year is stunning. Foto: Mark Suer
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Mid-Range Lodges
          </h2>
          <p>
            The mid-range category offers the best value in Murchison Falls —
            comfortable rooms, full-board options, and river locations, often at
            a third of luxury prices.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            <Link
              href="/lodges/murchison-falls/murchison-treehouse"
              className="text-gold hover:underline"
            >
              Murchison Treehouse
            </Link>
          </h3>
          <p>
            Our personal favourite in this bracket. Murchison Treehouse sits in
            a beautifully isolated spot directly on the Victoria Nile, built
            from natural materials. Safari tents start from around $120 for two
            with full board, cottages from $200, and the signature treehouse —
            elevated on tall stilts with a warm wood-and-thatch interior — from
            $320 (Reiseführer Uganda, 2020 — verify current rates). The
            restaurant serves excellent food, hammocks are strung across the
            grounds overlooking the river, and the staff are genuinely
            knowledgeable about the surrounding area. The atmosphere is more
            personal than the larger lodges.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            <Link
              href="/lodges/murchison-falls/heritage-safari-lodge"
              className="text-gold hover:underline"
            >
              Heritage Safari Lodge
            </Link>
          </h3>
          <p>
            A solid mid-range option with safari tents from $50 and cottages
            from $80 for two including breakfast (Reiseführer Uganda, 2020 —
            verify current rates). Heritage is located on the south bank and
            makes a good base for travellers who want comfortable accommodation
            without the luxury price tag. It is a practical choice if you are
            organising your own game drives and boat trips through UWA.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            <Link
              href="/lodges/murchison-falls/murchison-river-lodge"
              className="text-gold hover:underline"
            >
              Murchison River Lodge
            </Link>
          </h3>
          <p>
            Set in a wooded area on the south bank with a shaded restaurant
            terrace and beautiful views of the Nile. Safari tents from $140 and
            cottages from $300 for two with full board (Reiseführer Uganda, 2020
            — verify current rates). The cottages are built from natural
            materials with high thatched roofs. The lodge also has a popular
            campsite ($15 per person, with optional full board for an additional
            $30).
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            <Link
              href="/lodges/murchison-falls/twiga-safari-lodge"
              className="text-gold hover:underline"
            >
              Twiga Safari Lodge
            </Link>
          </h3>
          <p>
            A newer lodge with eight spacious cottages and river views. Safari
            tents from $190 for two with breakfast (Reiseführer Uganda, 2020 —
            verify current rates). The restaurant is well-regarded and the staff
            are known for being friendly and helpful.
          </p>

          {/* Elephant image */}
          <figure>
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1781988034779_ud3u.jpg"
              alt="African elephant walking through savanna grassland in Murchison Falls National Park — Foto: Mark Suer"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="text-xs text-olive-dark/50 mt-2">
              One of the park&apos;s nearly 1,500 elephants on the northern game
              drive circuit, October 2024. Foto: Mark Suer
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Budget Lodges and Camps
          </h2>
          <p>
            Murchison Falls has genuinely affordable options — some of the best
            value accommodation in any Ugandan national park.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            <Link
              href="/lodges/murchison-falls/red-chilli-rest-camp-murchison"
              className="text-gold hover:underline"
            >
              Red Chilli Rest Camp
            </Link>
          </h3>
          <p>
            The go-to for backpackers and self-drive travellers. Red Chilli
            offers dorm beds, bandas, and camping ($8 per person for your own
            tent) with access to shared showers and a canteen (Reiseführer
            Uganda, 2020 — verify current rates). It is basic but functional,
            with a sociable atmosphere and a good spot for meeting other
            travellers. The camp also arranges game drives and boat trips.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            <Link
              href="/lodges/murchison-falls/yebo-safari-camp"
              className="text-gold hover:underline"
            >
              Yebo Safari Camp
            </Link>
          </h3>
          <p>
            Doubles from $40 and camping from $10 per person (Reiseführer
            Uganda, 2020 — verify current rates). A simple, affordable option
            for travellers who spend their days in the park and need a clean bed
            at night.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            <Link
              href="/lodges/murchison-falls/bwana-tembo-safari-camp"
              className="text-gold hover:underline"
            >
              Bwana Tembo Safari Camp
            </Link>
          </h3>
          <p>
            At the northern edge of the park near Pakwach, this Italian-run camp
            has been operating since 2012. Safari tents from $210 and stone
            cottages from $235 for two with full board (Reiseführer Uganda, 2020
            — verify current rates). The food is excellent — Italian cooking in
            the African bush. It sits between budget and mid-range, offering
            more character than most camps in its price bracket.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            <Link
              href="/lodges/murchison-falls/fort-murchison-lodge"
              className="text-gold hover:underline"
            >
              Fort Murchison
            </Link>
          </h3>
          <p>
            On the east bank of the Albert Nile near Pakwach, Fort Murchison has
            safari tents from $110 and doubles from $200 for two with full board
            (Reiseführer Uganda, 2020 — verify current rates). The restaurant
            veranda and rooftop terrace offer wide views across the park.
          </p>

          {/* Boat cruise image */}
          <figure>
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1781985004247_sc2v.jpg"
              alt="Elephant feeding by the riverbank seen from a boat cruise in Murchison Falls National Park — Foto: Mark Suer"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="text-xs text-olive-dark/50 mt-2">
              An elephant feeding by the riverbank during our boat cruise to the
              falls, October 2024. You see crocodiles, hippos, and elephants from
              just metres away. Foto: Mark Suer
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Quick Comparison Table
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-forest text-cream">
                  <th className="text-left p-3 rounded-tl-lg">Lodge</th>
                  <th className="text-left p-3">Category</th>
                  <th className="text-left p-3">Bank</th>
                  <th className="text-left p-3 rounded-tr-lg">
                    From (2 pax)
                  </th>
                </tr>
              </thead>
              <tbody className="text-olive-dark/80">
                <tr className="border-b border-sand/50">
                  <td className="p-3 font-medium">Paraa Safari Lodge</td>
                  <td className="p-3">Luxury</td>
                  <td className="p-3">North</td>
                  <td className="p-3">$$$</td>
                </tr>
                <tr className="border-b border-sand/50 bg-cream/30">
                  <td className="p-3 font-medium">Bakers Lodge</td>
                  <td className="p-3">Luxury</td>
                  <td className="p-3">North</td>
                  <td className="p-3">~$440 FB</td>
                </tr>
                <tr className="border-b border-sand/50">
                  <td className="p-3 font-medium">Nile Safari Lodge</td>
                  <td className="p-3">Luxury</td>
                  <td className="p-3">South</td>
                  <td className="p-3">$$$</td>
                </tr>
                <tr className="border-b border-sand/50 bg-cream/30">
                  <td className="p-3 font-medium">Murchison Treehouse</td>
                  <td className="p-3">Mid-range</td>
                  <td className="p-3">South</td>
                  <td className="p-3">~$120 FB</td>
                </tr>
                <tr className="border-b border-sand/50">
                  <td className="p-3 font-medium">Murchison River Lodge</td>
                  <td className="p-3">Mid-range</td>
                  <td className="p-3">South</td>
                  <td className="p-3">~$140 FB</td>
                </tr>
                <tr className="border-b border-sand/50 bg-cream/30">
                  <td className="p-3 font-medium">Twiga Safari Lodge</td>
                  <td className="p-3">Mid-range</td>
                  <td className="p-3">South</td>
                  <td className="p-3">~$190 BB</td>
                </tr>
                <tr className="border-b border-sand/50">
                  <td className="p-3 font-medium">Heritage Safari Lodge</td>
                  <td className="p-3">Mid-range</td>
                  <td className="p-3">South</td>
                  <td className="p-3">~$50 BB</td>
                </tr>
                <tr className="border-b border-sand/50 bg-cream/30">
                  <td className="p-3 font-medium">Bwana Tembo Safari Camp</td>
                  <td className="p-3">Mid-range</td>
                  <td className="p-3">North</td>
                  <td className="p-3">~$210 FB</td>
                </tr>
                <tr className="border-b border-sand/50">
                  <td className="p-3 font-medium">Fort Murchison</td>
                  <td className="p-3">Mid-range</td>
                  <td className="p-3">East</td>
                  <td className="p-3">~$110 FB</td>
                </tr>
                <tr className="border-b border-sand/50 bg-cream/30">
                  <td className="p-3 font-medium">Red Chilli Rest Camp</td>
                  <td className="p-3">Budget</td>
                  <td className="p-3">South</td>
                  <td className="p-3">~$8 camping</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Yebo Safari Camp</td>
                  <td className="p-3">Budget</td>
                  <td className="p-3">South</td>
                  <td className="p-3">~$40 DZ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-olive-dark/50">
            FB = full board, BB = bed &amp; breakfast. Prices from Reiseführer Uganda (2020) — always confirm current rates directly with the lodge.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Practical Tips from Our Visit
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Start your game drive early.</strong> We left the lodge
              before dawn to catch the sunrise over the savanna — and it was
              worth every minute of lost sleep. The light at that hour is
              extraordinary, and the animals are most active in the cool morning
              air.
            </li>
            <li>
              <strong>Book the boat cruise to the falls.</strong> The 17 km
              upstream trip is one of Uganda&apos;s best wildlife experiences.
              During our cruise in October 2024, we saw crocodiles basking on
              the banks — impressive animals, surprisingly large and fast even
              from a safe distance — and elephants feeding right at the
              water&apos;s edge.
            </li>
            <li>
              <strong>Hire a ranger for game drives.</strong> A UWA ranger costs
              $20 and knows exactly where the animals are. On our drive, the
              ranger led us straight to a group of Rothschild giraffes walking
              through golden grassland — one of the most beautiful sights of the
              trip.
            </li>
            <li>
              <strong>Stop at Ziwa Rhino Sanctuary on the way.</strong> The{" "}
              <Link
                href="/regions/ziwa-rhino"
                className="text-gold hover:underline"
              >
                Ziwa Rhino Sanctuary
              </Link>{" "}
              is about halfway between Kampala and Murchison Falls. We did a
              walking safari and encountered a white rhino grazing alone — a
              huge, powerful animal, utterly absorbed in feeding. It is the only
              place in Uganda where you can see rhinos.
            </li>
            <li>
              <strong>Allow enough driving time.</strong> The drive from Hoima
              via Butiaba and Bulisa takes about 4 hours (Reiseführer Uganda,
              2020). On our way to the park, we passed a minibus with a stack of
              mattresses on the roof twice the height of the vehicle — a
              perfectly normal sight on Ugandan roads, but unforgettable the
              first time you see it.
            </li>
          </ul>

          {/* Crocodile image */}
          <figure>
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1781988056375_3pnj.jpg"
              alt="Nile crocodile resting on the riverbank in Murchison Falls National Park during boat cruise — Foto: Mark Suer"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="text-xs text-olive-dark/50 mt-2">
              A Nile crocodile on the riverbank during our boat cruise, October
              2024. They were a good distance away, but the sheer size is
              unmistakable. Foto: Mark Suer
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Our Recommendation
          </h2>
          <p>
            For most visitors, the <strong>mid-range south bank lodges</strong>{" "}
            offer the best balance of comfort, value, and location. Murchison
            Treehouse stands out for its atmosphere and riverside setting.
            Heritage Safari Lodge is the smartest budget-friendly choice with
            proper rooms. If money is no object, Bakers Lodge on the north bank
            gives you the most seamless game drive experience — no ferry wait,
            no early-morning river crossing.
          </p>
          <p>
            Whatever you choose, the park itself is the draw. At 3,877 square
            kilometres, Murchison Falls is Uganda&apos;s largest national park,
            and its combination of savanna game drives, the Nile boat cruise,
            and the falls themselves make it one of the most complete safari
            experiences in East Africa. Browse all lodges on our{" "}
            <Link
              href="/regions/murchison-falls"
              className="text-gold hover:underline"
            >
              Murchison Falls region page
            </Link>
            .
          </p>
          <p className="text-olive-dark/50 text-sm italic">
            [QUOTE: local guide on first impressions of Murchison Falls — to be
            collected on next visit]
          </p>

          {/* Rhino image */}
          <figure>
            <img
              src="https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails/uganda_1781275312755_sijl.jpg"
              alt="White rhino grazing at Ziwa Rhino Sanctuary, a common stop en route to Murchison Falls — Foto: Mark Suer"
              className="w-full rounded-xl"
              loading="lazy"
            />
            <figcaption className="text-xs text-olive-dark/50 mt-2">
              A white rhino at Ziwa Rhino Sanctuary — Uganda&apos;s only rhino
              sanctuary, and a recommended stop on the drive to Murchison Falls.
              Foto: Mark Suer
            </figcaption>
          </figure>
        </div>

        <RelatedArticles currentSlug="best-lodges-murchison-falls" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Planning a Safari in Murchison Falls?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Compare all lodges in the region or ask us for a personalised
            recommendation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/regions/murchison-falls"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Browse Murchison Falls Lodges
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
