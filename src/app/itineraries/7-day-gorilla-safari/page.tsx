import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "7-Day Gorilla Trekking & Queen Elizabeth Safari | Uganda Itinerary",
  description:
    "Day-by-day 7-day Uganda itinerary: gorilla trekking in Bwindi, tree-climbing lions in Ishasha, Kazinga Channel boat safari, and Queen Elizabeth game drives. Lodge picks at every budget.",
  alternates: {
    canonical: `${SITE_URL}/itineraries/7-day-gorilla-safari`,
  },
  openGraph: {
    title: "7-Day Gorilla Trekking & Queen Elizabeth Safari",
    description:
      "Classic 7-day Uganda route with gorilla trekking, Ishasha lions, and Queen Elizabeth NP. Budget to luxury lodge recommendations included.",
    url: `${SITE_URL}/itineraries/7-day-gorilla-safari`,
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

export default function SevenDayGorillaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Trip",
    name: "7 Days: Gorilla Trekking & Queen Elizabeth Safari",
    description:
      "A 7-day Uganda safari itinerary combining gorilla trekking in Bwindi Impenetrable National Park with a wildlife safari in Queen Elizabeth National Park.",
    url: `${SITE_URL}/itineraries/7-day-gorilla-safari`,
    itinerary: {
      "@type": "ItemList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Arrive Entebbe/Kampala" },
        { "@type": "ListItem", position: 2, name: "Drive to Bwindi (or fly to Kihihi)" },
        { "@type": "ListItem", position: 3, name: "Gorilla trekking in Bwindi" },
        { "@type": "ListItem", position: 4, name: "Drive to Queen Elizabeth NP via Ishasha" },
        { "@type": "ListItem", position: 5, name: "Game drive + Kazinga Channel boat safari" },
        { "@type": "ListItem", position: 6, name: "Morning game drive, drive to Lake Bunyonyi or Kampala" },
        { "@type": "ListItem", position: 7, name: "Departure" },
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
            <span className="text-olive-dark/80">7-Day Gorilla Safari</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-cream/15 text-cream text-xs font-semibold px-3 py-1 rounded-full mb-4">
            7 days / 6 nights
          </span>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Gorilla Trekking &amp; Queen Elizabeth Safari
          </h1>
          <p className="text-cream/70 text-lg">
            The classic Uganda route: track mountain gorillas in Bwindi, see
            tree-climbing lions in Ishasha, and cruise the Kazinga Channel in
            Queen Elizabeth National Park.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Route overview */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Route Overview
          </h2>
          <p className="text-olive-dark/80 leading-relaxed">
            This seven-day itinerary covers Uganda&apos;s two most popular parks
            in a single loop. You start and end in Entebbe or Kampala, heading
            southwest to Bwindi for gorilla trekking before continuing north
            through the Ishasha sector to the heart of Queen Elizabeth National
            Park. It works year-round, though the dry seasons (June to
            September and December to February) offer the most comfortable
            trekking conditions.
          </p>
        </section>

        {/* Day 1 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 1: Arrive Entebbe / Kampala
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Arrive at Entebbe International Airport. Depending on your flight
            time, spend the afternoon exploring the Entebbe Botanical Gardens
            or resting before the early start tomorrow. If you arrive in the
            evening, a straightforward airport transfer to your hotel is all
            you need.
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
            Day 2: Drive to Bwindi Impenetrable National Park
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            The overland drive from Entebbe to Bwindi takes 8 to 9 hours via
            Mbarara and Kabale — long, but the scenery through the Ugandan
            highlands is spectacular. Alternatively, take a charter flight to
            Kihihi airstrip (about 1 hour), then drive 1.5 to 2 hours to your
            lodge. Arrive in the afternoon, settle in, and prepare for
            tomorrow&apos;s trek.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Bwindi (Buhoma sector)
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Buhoma Community Rest Camp" region="bwindi" slug="buhoma-community-rest-camp" />
              <LodgePick label="Mid-range" name="Buhoma Lodge" region="bwindi" slug="buhoma-lodge" />
              <LodgePick label="Luxury" name="Mahogany Springs Safari Lodge" region="bwindi" slug="mahogany-springs-safari-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 3 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 3: Gorilla Trekking
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Report to the park headquarters by 7:30 am for the morning
            briefing. You will be assigned a gorilla family and set off with
            your ranger guide into the forest. The trek can last from 2 to 6
            hours depending on where the gorillas are that day. Once you find
            them, you have one hour of observation — an experience most people
            describe as life-changing. Return to your lodge in the afternoon
            for a well-earned rest, or explore the Batwa cultural trail nearby.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — same lodge as Day 2
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Buhoma Community Rest Camp" region="bwindi" slug="buhoma-community-rest-camp" />
              <LodgePick label="Mid-range" name="Buhoma Lodge" region="bwindi" slug="buhoma-lodge" />
              <LodgePick label="Luxury" name="Mahogany Springs Safari Lodge" region="bwindi" slug="mahogany-springs-safari-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 4 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 4: Drive to Queen Elizabeth NP via Ishasha
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Leave Bwindi after breakfast and drive north to the Ishasha sector
            of Queen Elizabeth National Park (3 to 4 hours). This remote
            southern section is famous for its tree-climbing lions — one of only
            two places in Africa where lions regularly climb fig trees. Enjoy an
            afternoon game drive through the Ishasha plains, looking for lions,
            elephants, and Uganda kob.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Ishasha
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Honey Bear Bushcamp" region="ishasha" slug="honey-bear-bushcamp" />
              <LodgePick label="Mid-range" name="Enjojo Lodge" region="ishasha" slug="enjojo-lodge" />
              <LodgePick label="Luxury" name="Ishasha Wilderness Camp" region="ishasha" slug="ishasha-wilderness-camp" />
            </ul>
          </div>
        </section>

        {/* Day 5 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 5: Game Drive &amp; Kazinga Channel Boat Safari
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Drive from Ishasha to the Mweya Peninsula area (about 2 hours
            within the park). In the morning, take a game drive through the
            Kasenyi Plains — one of the best areas in East Africa for spotting
            leopards, lions, and large herds of buffalo. In the afternoon, board
            a boat on the Kazinga Channel for a two-hour cruise past hippos,
            crocodiles, elephants, and hundreds of waterbirds. This boat safari
            is consistently rated as one of Uganda&apos;s best wildlife
            experiences.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Queen Elizabeth (Mweya / Kasenyi area)
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Bush Lodge Queen Elizabeth" region="queen-elizabeth" slug="bush-lodge-queen-elizabeth" />
              <LodgePick label="Mid-range" name="Kasenyi Safari Camp" region="queen-elizabeth" slug="kasenyi-safari-camp" />
              <LodgePick label="Luxury" name="Mweya Safari Lodge" region="queen-elizabeth" slug="mweya-safari-lodge" />
            </ul>
          </div>
        </section>

        {/* Day 6 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 6: Morning Game Drive, then Lake Bunyonyi or Kampala
          </h3>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Take one final early morning game drive — dawn is prime time for
            predator sightings. After brunch, you have two options. Option A:
            drive east to Lake Bunyonyi (about 5 hours), a stunning crater lake
            dotted with islands, perfect for a relaxing final night. Option B:
            begin the drive back toward Kampala (6 to 7 hours), breaking the
            journey at a stopover lodge.
          </p>
          <div className="bg-cream/50 rounded-lg p-4 border border-sand/50">
            <p className="text-forest font-semibold text-sm mb-2">
              Where to stay — Lake Bunyonyi (Option A)
            </p>
            <ul className="space-y-1.5">
              <LodgePick label="Budget" name="Lake Bunyonyi Overland Resort" region="lake-bunyonyi" slug="lake-bunyonyi-overland-resort" />
              <LodgePick label="Mid-range" name="Birdnest Resort Lake Bunyonyi" region="lake-bunyonyi" slug="birdnest-resort-lake-bunyonyi" />
              <LodgePick label="Luxury" name="Arcadia Cottages Lake Bunyonyi" region="lake-bunyonyi" slug="arcadia-cottages-lake-bunyonyi" />
            </ul>
          </div>
        </section>

        {/* Day 7 */}
        <section className="border-l-2 border-gold/30 pl-6">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-2">
            Day 7: Departure
          </h3>
          <p className="text-olive-dark/80 leading-relaxed">
            If you stayed at Lake Bunyonyi, take a morning canoe ride before
            transferring to Kihihi airstrip for a domestic flight back to
            Entebbe (about 1 hour), or begin the 7 to 8 hour drive to the
            airport. If you drove to Kampala the previous day, transfer
            directly to Entebbe for your international departure.
          </p>
        </section>

        {/* Practical tips */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Practical Tips
          </h2>
          <ul className="list-disc list-inside space-y-2 text-olive-dark/80 leading-relaxed">
            <li>
              <strong>Gorilla permit:</strong> $800 per person — book 3 to 6
              months ahead for dry-season dates. See our{" "}
              <Link
                href="/gorilla-permit-guide"
                className="text-gold hover:underline"
              >
                gorilla permit guide
              </Link>
              .
            </li>
            <li>
              <strong>Best time:</strong> June to September and December to
              February for the driest trekking conditions.
            </li>
            <li>
              <strong>Domestic flights:</strong> A charter flight to Kihihi or
              Ishasha cuts a full day of driving each way.
            </li>
            <li>
              <strong>Budget estimate:</strong> $1,800 to $5,500 per person
              depending on lodge category and whether you fly or drive.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Want Us to Plan This Route?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Send us a message with your dates and group size. We will match
            lodges to your budget and handle all the logistics.
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
