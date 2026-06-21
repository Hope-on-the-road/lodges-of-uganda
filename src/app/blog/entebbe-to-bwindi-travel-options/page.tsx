import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Entebbe to Bwindi: How to Get There (Flights, Road, Costs)",
  description:
    "Compare travel options from Entebbe to Bwindi Impenetrable National Park — domestic flights, private car, and overnight stops via Lake Mburo or Lake Bunyonyi.",
  alternates: {
    canonical: `${SITE_URL}/blog/entebbe-to-bwindi-travel-options`,
  },
  openGraph: {
    title: "Entebbe to Bwindi: How to Get There (Flights, Road, Costs)",
    description:
      "Domestic flights, private car hire, and the best overnight stops between Entebbe and Bwindi. Real costs, real advice.",
    url: `${SITE_URL}/blog/entebbe-to-bwindi-travel-options`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function EntebbeToBwindiTravelOptionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Entebbe to Bwindi: How to Get There (Flights, Road, Costs)",
    datePublished: "2026-06-13",
    description:
      "Compare travel options from Entebbe to Bwindi Impenetrable National Park — domestic flights, private car, and overnight stops via Lake Mburo or Lake Bunyonyi.",
    url: `${SITE_URL}/blog/entebbe-to-bwindi-travel-options`,
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
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to drive from Entebbe to Bwindi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The drive from Entebbe to Bwindi takes 8-10 hours depending on your route and which sector you are heading to. The distance is approximately 420-460 km via Mbarara or Kabale. Most travelers break the journey with an overnight stop at Lake Mburo or Lake Bunyonyi.",
        },
      },
      {
        "@type": "Question",
        name: "Can you fly from Entebbe to Bwindi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Aerolink Uganda and Fly Uganda operate daily scheduled flights from Entebbe International Airport to Kihihi airstrip (for Buhoma and Ruhija sectors) and Kisoro airstrip (for Rushaga and Nkuringo sectors). Flight time is approximately 1.5-2 hours with one stop, and one-way fares range from $250-350 per person.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best route from Entebbe to Bwindi by road?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common route runs Entebbe to Kampala, then south through Masaka to Mbarara, and onwards to Kabale and into Bwindi. This is the better-maintained route. An alternative runs via Ntungamo and Rukungiri to reach the northern Buhoma sector directly, which is slightly shorter but on rougher roads.",
        },
      },
    ],
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
            <Link href="/blog" className="hover:text-forest transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-olive-dark/80">Entebbe to Bwindi</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">13 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Entebbe to Bwindi: How to Get There
          </h1>
          <p className="text-cream/70 text-lg">
            Flights, road transfers, costs, and the best overnight stops between Entebbe and Bwindi Impenetrable National Park.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Getting from Entebbe International Airport to Bwindi Impenetrable National Park is one of the first logistical decisions every gorilla trekker has to make. Bwindi sits in the far southwest corner of Uganda, roughly 420 km from Entebbe by road. There is no fast or effortless way to get there — but there are options that range from a full-day drive through beautiful countryside to a short domestic flight that puts you at a nearby airstrip within two hours.
          </p>
          <p>
            Here is an honest breakdown of the options, costs, and practical details based on years of making this journey ourselves.
          </p>

          {/* Road option */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Option 1: Drive — 420 km, 8-10 Hours
          </h2>
          <p>
            The overland route from Entebbe to Bwindi is long but rewarding. You leave Entebbe, skirt the northern edge of Kampala (or cut through the city, depending on traffic), and head south through Masaka. From Masaka, the road continues through rolling green hills to Mbarara, the largest town in western Uganda and a natural midpoint. After Mbarara, you continue south to Kabale, the main town nearest to Bwindi&apos;s southern sectors (Rushaga and Nkuringo), or branch west toward Kihihi for the northern sectors (Buhoma and Ruhija).
          </p>
          <p>
            The total distance depends on your destination sector. To Buhoma in the north, expect around 460 km and 9-10 hours. To Rushaga in the south via Kabale, it is closer to 420 km and 8-9 hours. Roads are tarmac all the way to Kabale, but the last stretch into the park is unpaved — sometimes rough, occasionally muddy in the wet season, and always slow.
          </p>
          <p>
            <strong>Cost:</strong> A private car with driver — which is how the vast majority of visitors travel in Uganda — costs $150-300 for the full journey, depending on the vehicle type and whether you book directly with a local driver or through a tour operator. A 4x4 Land Cruiser at the upper end of that range is the most comfortable and safest option for the final stretch of unpaved road.
          </p>
          <p>
            The drive itself is part of the experience. You pass through the equator crossing south of Kampala, watch the landscape shift from lush banana plantations around Masaka to the open cattle country near Mbarara, and eventually climb into the steep, terraced hills around Kabale and Kisoro. It is a genuine cross-section of Uganda.
          </p>

          {/* Domestic flight */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Option 2: Domestic Flight — 1.5-2 Hours
          </h2>
          <p>
            Two airlines — Aerolink Uganda and Fly Uganda — operate scheduled domestic flights from Entebbe International Airport to the airstrips nearest Bwindi. These are small Cessna Caravan aircraft, typically carrying 12-14 passengers, flying low enough to enjoy spectacular views of Lake Victoria, the crater lakes in western Uganda, and the Virunga volcanoes on the Rwandan border.
          </p>
          <p>
            There are two airstrips to choose from. Kihihi airstrip serves Buhoma and Ruhija in the north of Bwindi. Kisoro airstrip serves Rushaga and Nkuringo in the south, and is also the closest airstrip to Mgahinga Gorilla National Park. Most flights include a stop at Mweya (in Queen Elizabeth National Park) en route, bringing the total flight time to around 1.5-2 hours.
          </p>
          <p>
            <strong>Cost:</strong> One-way fares range from $250-350 per person. Flights depart in the early morning, which means you can arrive at your lodge before lunch — a significant advantage over the full-day drive. Your lodge will arrange a road transfer from the airstrip, typically 1-2 hours depending on the sector.
          </p>
          <p>
            <strong>Luggage:</strong> Bush flights have strict weight limits — usually 15 kg per person in a soft-sided bag (no hard suitcases). Pack accordingly, or leave excess luggage at your Entebbe hotel.
          </p>

          {/* Overnight stops */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Option 3: Break the Journey with an Overnight Stop
          </h2>
          <p>
            This is our recommended approach for travelers who want to drive but do not want to spend an entire day in a car. Breaking the journey adds a destination to your itinerary and lets you arrive at Bwindi rested and ready to trek.
          </p>
          <p>
            <strong>Lake Mburo National Park</strong> is the most popular halfway stop, about 3-4 hours from Entebbe. It is Uganda&apos;s smallest savanna park, perfect for a relaxed afternoon game drive, a boat ride on the lake, or a walking safari. You will see zebras, giraffes, hippos, and a huge variety of birds — all without the crowds of the bigger parks.{" "}
            <Link href="/lodges/lake-mburo/mihingo-lodge" className="text-gold hover:underline">Mihingo Lodge</Link>{" "}
            is our top recommendation here: a beautiful property perched above the park with horseback safaris available.
          </p>
          <p>
            From Lake Mburo, the second day&apos;s drive to Bwindi is 4-5 hours via Mbarara and either Kabale (for southern sectors) or Ntungamo and Rukungiri (for Buhoma).
          </p>
          <p>
            <strong>Kabale and Lake Bunyonyi</strong> offer another excellent overnight option, particularly if you are heading to the southern sectors. Lake Bunyonyi is one of Uganda&apos;s most scenic spots — a deep, island-dotted lake surrounded by terraced hillsides. It makes a restful stop before the final push into Bwindi, and there are several good lodges on the lakeshore. From Lake Bunyonyi, Rushaga gate is about 1.5 hours and Nkuringo roughly 2 hours.
          </p>

          {/* FAQ: How long does it take */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            How Long Does It Take to Drive from Entebbe to Bwindi?
          </h2>
          <p>
            The drive takes 8-10 hours depending on your route and which sector you are heading to. The distance is approximately 420-460 km via Mbarara or Kabale. Most travelers break the journey with an overnight stop at Lake Mburo or Lake Bunyonyi. Traffic leaving Kampala can add 1-2 hours if you depart after 8 AM, so an early start from Entebbe (6-7 AM) is strongly recommended.
          </p>

          {/* FAQ: Can you fly */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Can You Fly from Entebbe to Bwindi?
          </h2>
          <p>
            Yes. Aerolink Uganda and Fly Uganda operate daily scheduled flights from Entebbe International Airport to Kihihi airstrip (for Buhoma and Ruhija sectors) and Kisoro airstrip (for Rushaga and Nkuringo sectors). Flight time is approximately 1.5-2 hours with one stop, and one-way fares range from $250-350 per person. Flights use small Cessna Caravan aircraft with a 15 kg soft-bag luggage limit. Book well in advance during peak gorilla trekking season (June-September and December-February) as seats fill quickly.
          </p>

          {/* FAQ: Best route */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            What Is the Best Route from Entebbe to Bwindi by Road?
          </h2>
          <p>
            The most common route runs Entebbe to Kampala, then south through Masaka to Mbarara, and onwards to Kabale and into Bwindi. This is the better-maintained route with tarmac roads almost the entire way. An alternative runs via Ntungamo and Rukungiri to reach the northern Buhoma sector directly, which is slightly shorter but on rougher roads for the final stretch.
          </p>
          <p>
            For the southern sectors (Rushaga, Nkuringo), continue from Mbarara through Kabale and Kisoro. For the northern sectors (Buhoma, Ruhija), turn off at Ntungamo or Ishaka and head through Kihihi. Whichever route you take, the last 30-50 km will be on unpaved roads — a 4x4 vehicle is strongly recommended, and is essential during the rainy seasons (March-May and October-November).
          </p>

          {/* Where to stay */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Recommended Lodges Along the Way
          </h2>
          <p>
            Once you reach Bwindi, your lodge choice depends on your trekking sector. In Buhoma, we recommend{" "}
            <Link href="/lodges/bwindi/trackers-safari-lodge" className="text-gold hover:underline">Trackers Safari Lodge</Link>{" "}
            for its balance of comfort and location — it is a short walk from the park gate. For the southern sectors,{" "}
            <Link href="/lodges/bwindi/chameleon-hill-lodge" className="text-gold hover:underline">Chameleon Hill Lodge</Link>{" "}
            near Rushaga offers stunning views over Lake Mutanda.
          </p>
          <p>
            For a full overview of which sector suits you, see our guide to{" "}
            <Link href="/blog/bwindi-sectors-compared" className="text-gold hover:underline">Bwindi&apos;s four trekking sectors</Link>{" "}
            and the{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">complete Bwindi lodge directory</Link>.
          </p>

          {/* Summary */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Which Option Should You Choose?
          </h2>
          <p>
            <strong>Fly</strong> if you have limited time, are not interested in the scenery en route, or want to maximize your days in the park. <strong>Drive with an overnight stop</strong> if you want the full Uganda experience and can spare an extra day. <strong>Drive straight through</strong> only if you are on a tight budget and do not mind a very long day in the car — start early and expect to arrive tired.
          </p>
          <p>
            Whichever option you choose, book your transport before arriving in Uganda. Domestic flights sell out during peak season, and finding a reliable driver at short notice can be stressful. Most lodges and tour operators will arrange transfers for you.
          </p>
        </div>

        <RelatedArticles currentSlug="entebbe-to-bwindi-travel-options" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Need Help Planning Your Transfer?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We can recommend trusted drivers, help you book domestic flights, or suggest the best overnight stops for your itinerary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/regions/bwindi"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Browse Bwindi Lodges
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
