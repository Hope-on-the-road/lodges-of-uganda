import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "10-Day Primates & Wildlife Safari Uganda | Itinerary with Lodge Picks",
  description:
    "Day-by-day 10-day Uganda itinerary: chimpanzee trekking in Kibale, Queen Elizabeth game drives, gorilla trekking in Bwindi, and Lake Bunyonyi. Lodge recommendations at every budget.",
  alternates: {
    canonical: `${SITE_URL}/itineraries/10-day-primates-wildlife`,
  },
  openGraph: {
    title: "10-Day Primates & Wildlife Safari Uganda",
    description:
      "Chimps in Kibale, gorillas in Bwindi, big game in Queen Elizabeth, and relaxation at Lake Bunyonyi. Budget to luxury lodge picks at every stop.",
    url: `${SITE_URL}/itineraries/10-day-primates-wildlife`,
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

export default function TenDayPrimatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Trip",
    name: "10 Days: Primates & Big Five Wildlife",
    description:
      "A 10-day Uganda safari combining chimpanzee trekking in Kibale Forest, wildlife safaris in Queen Elizabeth National Park, gorilla trekking in Bwindi, and relaxation at Lake Bunyonyi.",
    url: `${SITE_URL}/itineraries/10-day-primates-wildlife`,
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Arrive Entebbe" },
        { "@type": "ListItem", position: 2, name: "Drive to Fort Portal / Kibale area" },
        { "@type": "ListItem", position: 3, name: "Chimpanzee trekking in Kibale Forest" },
        { "@type": "ListItem", position: 4, name: "Drive to Queen Elizabeth NP" },
        { "@type": "ListItem", position: 5, name: "Game drive and Kazinga Channel boat safari" },
        { "@type": "ListItem", position: 6, name: "Drive to Bwindi via Ishasha" },
        { "@type": "ListItem", position: 7, name: "Gorilla trekking in Bwindi" },
        { "@type": "ListItem", position: 8, name: "Transfer to Lake Bunyonyi" },
        { "@type": "ListItem", position: 9, name: "Lake Bunyonyi relaxation" },
        { "@type": "ListItem", position: 10, name: "Fly or drive to Entebbe, departure" },
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
            <span className="text-olive-dark/80">10-Day Primates &amp; Wildlife</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cream/15 text-cream text-xs font-semibold px-3 py-1 rounded-full mb-4">
            10 days / 9 nights
          </span>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Primates &amp; Big Five Wildlife
          </h1>
          <p className="text-cream/70 text-lg">
            Track chimpanzees in Kibale, see big game in Queen Elizabeth,
            trek gorillas in Bwindi, and wind down at the shores of Lake
            Bunyonyi. Uganda&apos;s two great primates plus a full wildlife safari
            in ten days.
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
            This ten-day route is built for travellers who want both great
            primates and a proper wildlife safari. Starting from Entebbe, you
            head west to the chimpanzee forests around Fort Portal, then south
            through Queen Elizabeth&apos;s savannah before reaching the mountain
            gorillas of Bwindi. The trip ends with a couple of nights at Lake
            Bunyonyi — one of the most peaceful spots in East Africa.
          </p>
        </section>

        {/* Day 1 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 1: Arrive Entebbe
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Land at Entebbe International Airport and transfer to your hotel.
            If you arrive early enough, the Entebbe Botanical Gardens or a
            visit to the Uganda Wildlife Conservation Education Centre make a
            gentle introduction to the country.
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
            Day 2: Drive to Fort Portal / Kibale Area
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Drive west to the Fort Portal area (5 to 6 hours). The road passes
            through lush tea plantations and the dramatic crater lake region.
            Arrive in the afternoon and visit the Bigodi Wetland Sanctuary for
            a guided swamp walk — a great warm-up for primates, with red colobus
            monkeys, L&apos;Hoest&apos;s monkeys, and over 200 bird species.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Kibale area
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Kibale Forest Camp" region="kibale" slug="kibale-forest-camp" />
              <LodgePick label="Mid-range" name="Primate Lodge Kibale" region="kibale" slug="primate-lodge-kibale" />
              <LodgePick label="Luxury" name="Kyaninga Lodge" region="fort-portal" slug="kyaninga-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 3 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 3: Chimpanzee Trekking in Kibale Forest
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Report to Kanyanchu visitor centre by 7:30 am. Kibale Forest has
            the highest density of primates in Africa — over 1,500 chimpanzees
            live here alongside 12 other primate species. The trek typically
            lasts 2 to 4 hours. Once you locate a chimpanzee community, you
            have one hour to observe their feeding, grooming, and social
            behaviour. Spend the afternoon exploring the crater lakes or
            relaxing at your lodge.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — same lodge as Day 2
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Kibale Forest Camp" region="kibale" slug="kibale-forest-camp" />
              <LodgePick label="Mid-range" name="Primate Lodge Kibale" region="kibale" slug="primate-lodge-kibale" />
              <LodgePick label="Luxury" name="Kyaninga Lodge" region="fort-portal" slug="kyaninga-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 4 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 4: Drive to Queen Elizabeth National Park
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Head south to Queen Elizabeth National Park (2 to 3 hours). The
            approach from the north passes through the Kichwamba escarpment
            with sweeping views across the park&apos;s savannah and the distant
            Rwenzori Mountains. Check in and enjoy a late afternoon game drive
            along the park&apos;s northern tracks, where you might already spot
            elephants, buffalo, and various antelope.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Queen Elizabeth (Mweya / Kasenyi area)
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Bush Lodge Queen Elizabeth" region="queen-elizabeth" slug="bush-lodge-queen-elizabeth" />
              <LodgePick label="Mid-range" name="Kasenyi Safari Camp" region="queen-elizabeth" slug="kasenyi-safari-camp" />
              <LodgePick label="Luxury" name="Katara Lodge" region="queen-elizabeth" slug="katara-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 5 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 5: Game Drive &amp; Kazinga Channel Boat Safari
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            A full day in Queen Elizabeth. Start with an early morning game
            drive through the Kasenyi Plains — lion, leopard, hyena, and large
            buffalo herds are all possible. After lunch, board a boat on the
            Kazinga Channel. This 32-kilometre natural channel connects Lake
            Edward and Lake George, and its banks teem with hippos, crocodiles,
            elephants, and spectacular waterbirds. The two-hour cruise is
            consistently rated as one of Uganda&apos;s best wildlife experiences.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — same lodge as Day 4
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Bush Lodge Queen Elizabeth" region="queen-elizabeth" slug="bush-lodge-queen-elizabeth" />
              <LodgePick label="Mid-range" name="Kasenyi Safari Camp" region="queen-elizabeth" slug="kasenyi-safari-camp" />
              <LodgePick label="Luxury" name="Katara Lodge" region="queen-elizabeth" slug="katara-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 6 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 6: Drive to Bwindi via Ishasha
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Drive south through the Ishasha sector of Queen Elizabeth NP,
            famous for its tree-climbing lions. Stop for a game drive in the
            Ishasha plains before continuing to Bwindi Impenetrable National
            Park (total drive 5 to 6 hours with the game drive included).
            Arrive at your lodge by late afternoon for an early night before
            the gorilla trek.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Bwindi (Buhoma sector)
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Buhoma Community Haven Lodge" region="bwindi" slug="buhoma-community-haven-lodge" />
              <LodgePick label="Mid-range" name="Engagi Lodge" region="bwindi" slug="engagi-lodge" />
              <LodgePick label="Luxury" name="Silverback Lodge" region="bwindi" slug="silverback-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 7 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 7: Gorilla Trekking in Bwindi
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            The highlight of the trip. Report to the Buhoma park headquarters
            by 7:30 am for the briefing. The trek can range from 2 to 6 hours
            through dense mountain forest. Once you find your assigned gorilla
            family, you have one hour of close-range observation — watching a
            silverback interact with his family is an unforgettable experience.
            Return to your lodge in the afternoon. For more on the permit
            process, see our{" "}
            <Link
              href="/gorilla-permit-guide"
              className="text-gold hover:underline"
            >
              gorilla permit guide
            </Link>
            .
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — same lodge as Day 6
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Buhoma Community Haven Lodge" region="bwindi" slug="buhoma-community-haven-lodge" />
              <LodgePick label="Mid-range" name="Engagi Lodge" region="bwindi" slug="engagi-lodge" />
              <LodgePick label="Luxury" name="Silverback Lodge" region="bwindi" slug="silverback-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 8 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 8: Transfer to Lake Bunyonyi
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            After breakfast, drive to Lake Bunyonyi (2 to 3 hours from
            Buhoma). This deep, scenic lake is surrounded by terraced hills
            and dotted with 29 islands. The afternoon is yours — swim in the
            bilharzia-free water, take a dugout canoe to one of the islands, or
            simply sit on the deck and watch the light change over the water.
            After a week of active trekking and game drives, this is a welcome
            change of pace.
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

        {/* Day 9 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 9: Lake Bunyonyi Relaxation
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            A full free day at the lake. Paddle a canoe to Punishment Island
            for its haunting history, hike to a viewpoint above the lake, visit
            a local community project, or do absolutely nothing. Most lodges
            offer bird walks, cultural visits, and fishing excursions. This is
            your day to decompress before heading home.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — same lodge as Day 8
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Lake Bunyonyi Overland Resort" region="lake-bunyonyi" slug="lake-bunyonyi-overland-resort" />
              <LodgePick label="Mid-range" name="Birdnest Resort Lake Bunyonyi" region="lake-bunyonyi" slug="birdnest-resort-lake-bunyonyi" />
              <LodgePick label="Luxury" name="Arcadia Cottages Lake Bunyonyi" region="lake-bunyonyi" slug="arcadia-cottages-lake-bunyonyi" />
            </ul>
          </div>
        </section>

        {/* Day 10 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 10: Departure
          </h3>
          <p className="text-olive-dark/80 leading-relaxed">
            Transfer to Kihihi or Kisoro airstrip for a domestic flight back to
            Entebbe (about 1 hour), connecting with your international
            departure. Alternatively, the drive back to Entebbe takes 8 to 9
            hours — only recommended if your flight departs the following day.
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
              chimpanzee permit ($200). Book both well in advance for peak
              season.
            </li>
            <li>
              <strong>Best time:</strong> June to September and December to
              February offer the driest conditions for trekking.
            </li>
            <li>
              <strong>Fitness:</strong> Both primate treks involve hiking
              through forest on uneven terrain. Reasonable fitness is required.
            </li>
            <li>
              <strong>Budget estimate:</strong> $2,600 to $8,000 per person
              depending on lodge choices and transport.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Want Us to Plan This Route?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Send us your dates, group size, and budget preference. We will put
            together a detailed plan with lodge bookings and transport.
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
