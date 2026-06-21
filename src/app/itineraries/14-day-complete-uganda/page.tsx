import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "14-Day Complete Uganda Safari | North to South Itinerary with Lodge Picks",
  description:
    "The ultimate 14-day Uganda itinerary: Murchison Falls, Kibale chimps, Queen Elizabeth, Bwindi gorillas, Lake Bunyonyi, and Jinja. Budget to luxury lodge recommendations at every stop.",
  alternates: {
    canonical: `${SITE_URL}/itineraries/14-day-complete-uganda`,
  },
  openGraph: {
    title: "14-Day Complete Uganda Safari",
    description:
      "Every major national park in one trip. Murchison Falls, Kibale, Queen Elizabeth, Bwindi, Lake Bunyonyi, and Jinja — with lodge picks at every budget.",
    url: `${SITE_URL}/itineraries/14-day-complete-uganda`,
    type: "article",
  },
};

function LodgePick({
  label,
  name,
  region,
  slug,
}: {
  label: string;
  name: string;
  region: string;
  slug: string;
}) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <span className="text-gold font-semibold shrink-0">{label}:</span>
      <Link
        href={`/lodges/${region}/${slug}`}
        className="text-forest hover:text-gold transition-colors underline underline-offset-2"
      >
        {name}
      </Link>
    </li>
  );
}

export default function FourteenDayCompletePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Trip",
    name: "14 Days: The Complete Uganda Experience",
    description:
      "A comprehensive 14-day Uganda safari covering Murchison Falls, Kibale Forest, Queen Elizabeth National Park, Bwindi Impenetrable Forest, Lake Bunyonyi, and Jinja.",
    url: `${SITE_URL}/itineraries/14-day-complete-uganda`,
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Arrive Entebbe" },
        { "@type": "ListItem", position: 2, name: "Drive to Murchison Falls NP" },
        { "@type": "ListItem", position: 3, name: "Game drive and Nile boat cruise to the Falls" },
        { "@type": "ListItem", position: 4, name: "Top of the Falls hike, Budongo chimps (optional)" },
        { "@type": "ListItem", position: 5, name: "Drive to Fort Portal / Kibale area" },
        { "@type": "ListItem", position: 6, name: "Chimpanzee trekking in Kibale Forest" },
        { "@type": "ListItem", position: 7, name: "Drive to Queen Elizabeth NP" },
        { "@type": "ListItem", position: 8, name: "Game drive and Kazinga Channel boat safari" },
        { "@type": "ListItem", position: 9, name: "Drive to Bwindi via Ishasha" },
        { "@type": "ListItem", position: 10, name: "Gorilla trekking in Bwindi" },
        { "@type": "ListItem", position: 11, name: "Transfer to Lake Bunyonyi" },
        { "@type": "ListItem", position: 12, name: "Lake Bunyonyi relaxation" },
        { "@type": "ListItem", position: 13, name: "Drive to Jinja — Source of the Nile" },
        { "@type": "ListItem", position: 14, name: "Jinja activities, then transfer to Entebbe for departure" },
      ],
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
            <Link href="/" className="hover:text-forest transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/itineraries"
              className="hover:text-forest transition-colors"
            >
              Itineraries
            </Link>
            <span>/</span>
            <span className="text-olive-dark/80">14-Day Complete Uganda</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cream/15 text-cream text-xs font-semibold px-3 py-1 rounded-full mb-4">
            14 days / 13 nights
          </span>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            The Complete Uganda Experience
          </h1>
          <p className="text-cream/70 text-lg">
            The ultimate Uganda itinerary. From the thundering Murchison Falls
            in the north to the mountain gorillas of Bwindi in the south, with
            every major national park, both great primates, and time on the
            water at Lake Bunyonyi and the Source of the Nile.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Overview */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Route Overview
          </h2>
          <p className="text-olive-dark/80 leading-relaxed">
            This two-week route covers Uganda from north to south, then loops
            back east to Jinja before returning to Entebbe. It includes
            Murchison Falls for Nile wildlife, Kibale for chimpanzees, Queen
            Elizabeth for savannah game, Bwindi for mountain gorillas, Lake
            Bunyonyi for rest, and Jinja for the Source of the Nile. It is a
            comprehensive trip that shows the full range of what Uganda offers
            — from open savannah to dense mountain forest, from thundering
            waterfalls to still crater lakes.
          </p>
        </section>

        {/* Day 1 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 1: Arrive Entebbe
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Arrive at Entebbe International Airport. Transfer to your hotel and
            rest after the flight. If time allows, the botanical gardens on the
            Lake Victoria shore are a calm introduction to Uganda&apos;s
            birdlife.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Entebbe
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Karibu Guesthouse" region="entebbe" slug="karibu-guesthouse-entebbe" />
              <LodgePick label="Mid-range" name="Protea Hotel Entebbe" region="entebbe" slug="protea-hotel-entebbe" />
              <LodgePick label="Luxury" name="Hotel No.5 Entebbe" region="entebbe" slug="hotel-no5-entebbe" />
            </ul>
          </div>
        </section>

        {/* Day 2 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 2: Drive to Murchison Falls National Park
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Drive north to Murchison Falls (5 to 6 hours). Uganda&apos;s
            largest national park covers nearly 4,000 square kilometres on both
            sides of the Victoria Nile. If you arrive early enough, stop at the
            Ziwa Rhino Sanctuary along the way — it is the only place in Uganda
            where you can see rhinos on foot. Arrive at your lodge by late
            afternoon.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Murchison Falls
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Red Chilli Rest Camp Murchison" region="murchison-falls" slug="red-chilli-rest-camp-murchison" />
              <LodgePick label="Mid-range" name="Twiga Safari Lodge" region="murchison-falls" slug="twiga-safari-lodge" />
              <LodgePick label="Luxury" name="Paraa Safari Lodge" region="murchison-falls" slug="paraa-safari-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 3 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 3: Game Drive &amp; Nile Boat Cruise to the Falls
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Cross the Nile by ferry and spend the morning on a game drive
            through the north bank — this is where you will find Uganda&apos;s
            largest concentrations of elephants, giraffes, buffalo, lions, and
            the rare shoebill stork. In the afternoon, board a boat for the
            cruise upstream to the base of Murchison Falls, where the entire
            Nile forces through a 7-metre gap in the rock. Hippos, crocodiles,
            and waterbirds line the banks all the way.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — same lodge as Day 2
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Red Chilli Rest Camp Murchison" region="murchison-falls" slug="red-chilli-rest-camp-murchison" />
              <LodgePick label="Mid-range" name="Twiga Safari Lodge" region="murchison-falls" slug="twiga-safari-lodge" />
              <LodgePick label="Luxury" name="Paraa Safari Lodge" region="murchison-falls" slug="paraa-safari-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 4 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 4: Top of the Falls &amp; Optional Budongo Forest Walk
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Hike to the top of Murchison Falls for a dramatic view of the Nile
            crashing through the narrow gorge. The short trail gives you a
            perspective the boat cruise cannot. Optionally, add a guided walk
            in the Budongo Forest Reserve — home to around 600 chimpanzees and
            a rich variety of forest birds including the rare chocolate-backed
            kingfisher. Drive south in the afternoon toward Fort Portal.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — en route stopover or Fort Portal area
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Kibale Forest Camp" region="kibale" slug="kibale-forest-camp" />
              <LodgePick label="Mid-range" name="Crater Safari Lodge" region="fort-portal" slug="crater-safari-lodge" />
              <LodgePick label="Luxury" name="Papaya Lake Lodge" region="fort-portal" slug="papaya-lake-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 5 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 5: Fort Portal Crater Lakes &amp; Bigodi Wetland
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Explore the volcanic crater lakes around Fort Portal — a landscape
            of emerald water surrounded by tropical vegetation. In the
            afternoon, walk the Bigodi Wetland Sanctuary, a community-managed
            swamp trail where you can spot red colobus monkeys, grey-cheeked
            mangabeys, and over 200 bird species. It is an excellent warm-up
            for the chimpanzee trek tomorrow.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Kibale area
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Guereza Canopy Lodge" region="kibale" slug="guereza-canopy-lodge" />
              <LodgePick label="Mid-range" name="Primate Lodge Kibale" region="kibale" slug="primate-lodge-kibale" />
              <LodgePick label="Luxury" name="Kyaninga Lodge" region="fort-portal" slug="kyaninga-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 6 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 6: Chimpanzee Trekking in Kibale Forest
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Kibale Forest holds the highest density of primates in Africa —
            over 1,500 chimpanzees and 12 other primate species. Report to
            Kanyanchu at 7:30 am. The trek through the forest floor takes 2 to
            4 hours. Once you locate a chimp community, you have one hour with
            them — watching them feed, groom, and interact in their natural
            social groups. Spend the rest of the day at the lodge or take a
            night walk for nocturnal primates (bush babies, pottos).
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — same lodge as Day 5
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Guereza Canopy Lodge" region="kibale" slug="guereza-canopy-lodge" />
              <LodgePick label="Mid-range" name="Primate Lodge Kibale" region="kibale" slug="primate-lodge-kibale" />
              <LodgePick label="Luxury" name="Kyaninga Lodge" region="fort-portal" slug="kyaninga-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 7 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 7: Drive to Queen Elizabeth National Park
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Head south to Queen Elizabeth NP (2 to 3 hours). The approach from
            the north descends the Kichwamba escarpment with panoramic views
            across the park. Check in and enjoy a late afternoon game drive. The
            northern Kasenyi Plains are excellent for lions and leopards.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Queen Elizabeth (Mweya / Kasenyi area)
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Simba Safari Camp" region="queen-elizabeth" slug="simba-safari-camp" />
              <LodgePick label="Mid-range" name="Elephant Plains Lodge" region="queen-elizabeth" slug="elephant-plains-lodge" />
              <LodgePick label="Luxury" name="Mweya Safari Lodge" region="queen-elizabeth" slug="mweya-safari-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 8 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 8: Game Drive &amp; Kazinga Channel Boat Safari
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            A full day in Queen Elizabeth. Morning game drive on the Kasenyi
            Plains for predators and large herbivores. After lunch, cruise the
            Kazinga Channel — 32 kilometres of water connecting Lake Edward and
            Lake George, lined with hippos, crocodiles, elephants, and hundreds
            of waterbirds. The boat trip is one of Uganda&apos;s essential
            wildlife experiences.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — same lodge as Day 7
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Simba Safari Camp" region="queen-elizabeth" slug="simba-safari-camp" />
              <LodgePick label="Mid-range" name="Elephant Plains Lodge" region="queen-elizabeth" slug="elephant-plains-lodge" />
              <LodgePick label="Luxury" name="Mweya Safari Lodge" region="queen-elizabeth" slug="mweya-safari-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 9 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 9: Drive to Bwindi via Ishasha
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Drive south through the Ishasha sector — the southern arm of Queen
            Elizabeth NP famous for tree-climbing lions. Stop for a game drive
            in the Ishasha plains, scanning the fig trees for lions draped
            across the branches. Continue to Bwindi Impenetrable National Park
            (total 5 to 6 hours including the game drive). Settle in at your
            lodge and prepare for the gorilla trek.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Bwindi (Rushaga sector)
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Rushaga Gorilla Camp" region="bwindi" slug="rushaga-gorilla-camp" />
              <LodgePick label="Mid-range" name="Gorilla Safari Lodge" region="bwindi" slug="gorilla-safari-lodge" />
              <LodgePick label="Luxury" name="Chameleon Hill Lodge" region="bwindi" slug="chameleon-hill-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 10 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 10: Gorilla Trekking in Bwindi
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            The centrepiece of the trip. Report to the park headquarters by
            7:30 am for the morning briefing. The ranger assigns your group a
            gorilla family and you set off into the dense mountain forest. The
            trek can last 2 to 6 hours. When you find the gorillas, you have
            one hour at close range — watching a silverback, mothers with
            infants, and juvenile gorillas play-wrestling is something that
            stays with you. Return to your lodge exhausted and exhilarated.
            See our{" "}
            <Link
              href="/gorilla-permit-guide"
              className="text-gold hover:underline"
            >
              gorilla permit guide
            </Link>{" "}
            for booking details.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — same lodge as Day 9
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Rushaga Gorilla Camp" region="bwindi" slug="rushaga-gorilla-camp" />
              <LodgePick label="Mid-range" name="Gorilla Safari Lodge" region="bwindi" slug="gorilla-safari-lodge" />
              <LodgePick label="Luxury" name="Chameleon Hill Lodge" region="bwindi" slug="chameleon-hill-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 11 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 11: Transfer to Lake Bunyonyi
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            A short drive to Lake Bunyonyi (1.5 to 2.5 hours depending on your
            Bwindi sector). This deep, peaceful lake surrounded by terraced
            hills is the ideal place to recover after the gorilla trek. Spend
            the afternoon in a canoe, swimming in the bilharzia-free water, or
            simply sitting on the deck watching the light change.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Lake Bunyonyi
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Lake Bunyonyi Overland Resort" region="lake-bunyonyi" slug="lake-bunyonyi-overland-resort" />
              <LodgePick label="Mid-range" name="Birdnest Resort Lake Bunyonyi" region="lake-bunyonyi" slug="birdnest-resort-lake-bunyonyi" />
              <LodgePick label="Luxury" name="Arcadia Cottages Lake Bunyonyi" region="lake-bunyonyi" slug="arcadia-cottages-lake-bunyonyi" />
            </ul>
          </div>
        </section>

        {/* Day 12 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 12: Lake Bunyonyi Relaxation
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            A full day at the lake. Paddle a canoe to Punishment Island, hike
            to a hilltop viewpoint, visit a local school or community project,
            or simply rest. Most lodges offer bird walks, fishing, and cultural
            visits to nearby villages. After twelve days of travel, the
            stillness here is restorative.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — same lodge as Day 11
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Lake Bunyonyi Overland Resort" region="lake-bunyonyi" slug="lake-bunyonyi-overland-resort" />
              <LodgePick label="Mid-range" name="Birdnest Resort Lake Bunyonyi" region="lake-bunyonyi" slug="birdnest-resort-lake-bunyonyi" />
              <LodgePick label="Luxury" name="Arcadia Cottages Lake Bunyonyi" region="lake-bunyonyi" slug="arcadia-cottages-lake-bunyonyi" />
            </ul>
          </div>
        </section>

        {/* Day 13 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 13: Drive to Jinja — Source of the Nile
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            A long drive east to Jinja (7 to 8 hours via Mbarara and Kampala),
            but the destination is worth it. Jinja sits at the point where the
            Nile leaves Lake Victoria — the historical Source of the Nile.
            Arrive in the late afternoon, check in at a Nile-side lodge, and
            enjoy the riverside sunset. For those short on time, a domestic
            flight from Kisoro to Entebbe and then a car to Jinja cuts the
            travel significantly.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Jinja
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Holland Park Jinja" region="jinja" slug="holland-park-jinja" />
              <LodgePick label="Mid-range" name="Jinja Nile Resort" region="jinja" slug="jinja-nile-resort" />
              <LodgePick label="Luxury" name="Wildwaters Lodge" region="jinja" slug="wildwaters-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 14 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 14: Jinja Activities &amp; Departure
          </h3>
          <p className="text-olive-dark/80 leading-relaxed">
            Spend the morning at the Source of the Nile or choose an optional
            activity: white-water rafting on the Nile rapids, a boat trip to
            the source, or a visit to the local markets. In the afternoon,
            transfer to Entebbe International Airport (about 2.5 hours) for
            your departure flight. If your flight is late, there is time for a
            quick stop at the Mabira Forest along the way for a final walk
            through tropical rainforest.
          </p>
        </section>

        {/* Practical tips */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Practical Tips
          </h2>
          <ul className="list-disc list-inside space-y-2 text-olive-dark/80 leading-relaxed">
            <li>
              <strong>Permits needed:</strong> Gorilla permit ($800) and
              chimpanzee permit ($200). If you add Budongo Forest on Day 4,
              that is a separate forest walk fee. Book primate permits 3 to 6
              months ahead for peak season.
            </li>
            <li>
              <strong>Best time:</strong> June to September and December to
              February for dry conditions. The shoulder months (March, October,
              November) are also viable with fewer crowds.
            </li>
            <li>
              <strong>Domestic flights:</strong> Flying between Entebbe and
              Murchison or between Kisoro and Entebbe can save full days of
              driving. Budget $150 to $350 per sector.
            </li>
            <li>
              <strong>Budget estimate:</strong> $3,800 to $12,000 per person
              depending on lodge tier, domestic flights, and optional activities.
            </li>
            <li>
              <strong>Jinja is optional:</strong> If two weeks feels long, skip
              Jinja and fly directly from Kisoro/Kihihi to Entebbe on Day 13.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Want Us to Plan This Route?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Two weeks across Uganda is a big trip. Send us your dates, budget,
            and must-do activities — we will build a detailed plan with lodge
            bookings, transfers, and permits sorted.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/itineraries"
              className="inline-flex items-center px-6 py-3 border border-cream/30 text-cream rounded-lg hover:bg-cream/10 transition-colors text-sm font-medium"
            >
              All Itineraries
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
