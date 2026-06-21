import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Overnight Safari vs Day Trip in Uganda: Which Is Worth It?",
  description:
    "Comparing day trip safaris from Kampala with overnight stays in Uganda's national parks. Costs, wildlife sightings, and which parks work for each option.",
  alternates: {
    canonical: `${SITE_URL}/blog/overnight-safari-vs-day-trip-uganda`,
  },
  openGraph: {
    title: "Overnight Safari vs Day Trip in Uganda: Which Is Worth It?",
    description:
      "Can you see Uganda's wildlife without staying overnight? A practical comparison of day trips vs overnight safaris with costs and logistics.",
    url: `${SITE_URL}/blog/overnight-safari-vs-day-trip-uganda`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function OvernightVsDayTripPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Overnight Safari vs Day Trip in Uganda: Which Is Worth It?",
    datePublished: "2026-06-13",
    description:
      "Comparing day trip safaris from Kampala with overnight stays in Uganda's national parks. Costs, wildlife sightings, and which parks work for each option.",
    url: `${SITE_URL}/blog/overnight-safari-vs-day-trip-uganda`,
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
            <span className="text-olive-dark/80">Overnight Safari vs Day Trip</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">13 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Overnight Safari vs Day Trip in Uganda: Which Is Worth It?
          </h1>
          <p className="text-cream/70 text-lg">
            Can you see Uganda&apos;s wildlife without staying overnight in a park? Sometimes yes, sometimes no. Here is a practical breakdown.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            It is one of the most common questions budget travelers ask when planning a trip to Uganda: do I really need to stay overnight in a national park, or can I see the wildlife on a day trip from Kampala? The answer depends entirely on which park and which animals you want to see. Some experiences genuinely work as day trips. Others absolutely do not.
          </p>
          <p>
            Here is an honest look at what is possible, what is not, and what you actually gain by spending a night or two inside the park.
          </p>

          {/* Day Trip Options */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Day Trip Options From Kampala
          </h2>
          <p>
            If you are based in Kampala or Entebbe and have limited time, these four destinations are genuinely doable as day trips:
          </p>

          <h3 className="font-semibold text-forest text-lg pt-2">
            Lake Mburo National Park
          </h3>
          <p>
            Lake Mburo is 260 km (about 3.5 hours) from Kampala along the Masaka highway. It is the closest national park to the capital and the most realistic option for a full-day safari. You can fit in a morning game drive, a boat ride on the lake, and even a guided nature walk — all in a single day if you leave Kampala by 6 AM and return late evening. The park has zebra, impala, eland, buffalo, hippo, and over 350 bird species. No big cats, but genuine wildlife.
          </p>
          <p>
            The road is tarmac the entire way, and the park gate at Nshara is easy to reach. Lake Mburo is probably the strongest case for a day trip safari in Uganda. That said, staying overnight opens up the{" "}
            <Link href="/regions/lake-mburo" className="text-gold hover:underline">dawn game drives and night walks</Link>{" "}
            that are among the park&apos;s highlights.
          </p>

          <h3 className="font-semibold text-forest text-lg pt-2">
            Ziwa Rhino Sanctuary
          </h3>
          <p>
            Ziwa is 176 km (about 2.5 hours) north of Kampala on the Gulu highway, near Nakitoma. It is the only place in Uganda where you can see rhinos — the country&apos;s southern white rhino population was reintroduced here starting in 2005 and has grown steadily. Rhino tracking is done on foot with armed rangers, and a half-day visit is perfectly feasible. Many travelers stop at Ziwa on the way to or from Murchison Falls, which is another 3 hours north.
          </p>

          <h3 className="font-semibold text-forest text-lg pt-2">
            Mabamba Swamp
          </h3>
          <p>
            Mabamba is the easiest wildlife excursion from Kampala. The swamp is on the shores of Lake Victoria, about 50 km west of Kampala — roughly 1.5 hours by road depending on traffic through Entebbe. This is the most reliable spot in Africa for the shoebill stork. You explore by traditional canoe, and a morning trip (departing by 7 AM) can have you back in Kampala by lunchtime. If you are flying out of Entebbe in the evening, a morning shoebill trip is entirely practical.
          </p>

          <h3 className="font-semibold text-forest text-lg pt-2">
            Ngamba Island Chimpanzee Sanctuary
          </h3>
          <p>
            Ngamba Island sits in Lake Victoria, a 45-minute speedboat ride from Entebbe. The sanctuary is home to rescued chimpanzees and offers feeding-time viewing and educational walks. A half-day visit fits comfortably into a day, and the boat ride itself is pleasant. This is not wild chimpanzee tracking — for that, you need Kibale — but it is a rewarding experience and works perfectly as a day trip from Entebbe or Kampala.
          </p>

          {/* Why Overnight Is Better */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Why Overnight Safaris Are Better
          </h2>
          <p>
            Day trips are convenient, but they come with a fundamental limitation: you miss the best wildlife hours. Here is what you give up by not staying overnight:
          </p>

          <p>
            <strong>Dawn and dusk are peak hours.</strong> The first hour after sunrise and the last hour before sunset are when most African wildlife is most active — predators are hunting, herbivores are on the move, and birds are at their most vocal. Day trippers from Kampala typically arrive at a park by 10 AM and need to leave by 3 PM to make it home before dark. You are visiting during the midday lull, when animals rest in shade and activity drops.
          </p>
          <p>
            <strong>A more relaxed pace.</strong> Day trips create pressure. You are watching the clock from the moment you arrive, trying to cram sightings into a few hours. Overnight visitors wake up inside the park, have a game drive before breakfast, and spend the afternoon exploring at leisure. The difference in stress level is real.
          </p>
          <p>
            <strong>Night sounds and morning walks.</strong> Some of the most memorable safari moments happen outside of game drives — the hyena calls after dark, the hippo grunting from the nearby lake at 3 AM, the guided morning walk where your ranger shows you animal tracks in the dew. These experiences simply do not exist on a day trip.
          </p>
          <p>
            <strong>Some parks require overnight stays.</strong>{" "}
            <Link href="/regions/murchison-falls" className="text-gold hover:underline">Murchison Falls National Park</Link>{" "}
            is 305 km from Kampala (5-6 hours), and you need at least two nights to cover the boat trip to the falls, a game drive in the northern sector, and the Nile delta for shoebill. You physically cannot do this in a day.{" "}
            <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth National Park</Link>{" "}
            is 410 km (6-7 hours) from Kampala, and the key activities — Kazinga Channel boat cruise, Ishasha tree-climbing lions, crater lakes drive — need two nights minimum. Bwindi, at 450 km (8-9 hours), requires at least two nights even without the gorilla trek.
          </p>

          {/* Cost Comparison */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Cost Comparison
          </h2>
          <p>
            Day trips are cheaper, but the gap is smaller than many travelers expect:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-sand/50">
                  <th className="text-left p-3 font-semibold text-forest">Expense</th>
                  <th className="text-left p-3 font-semibold text-forest">Day Trip</th>
                  <th className="text-left p-3 font-semibold text-forest">Overnight (1 night)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/40">
                <tr>
                  <td className="p-3 font-medium">Transport</td>
                  <td className="p-3">$60-100 (return fuel/driver)</td>
                  <td className="p-3">$60-100 (one way)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Park entry</td>
                  <td className="p-3">$40 per person</td>
                  <td className="p-3">$40 per person per day</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Activities</td>
                  <td className="p-3">$30-50 (game drive or boat)</td>
                  <td className="p-3">$50-100 (multiple activities)</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Accommodation</td>
                  <td className="p-3">$0</td>
                  <td className="p-3">$80-300 per night</td>
                </tr>
                <tr className="bg-sand/30 font-semibold">
                  <td className="p-3">Total (per person)</td>
                  <td className="p-3">$100-200</td>
                  <td className="p-3">$200-500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The overnight option costs roughly twice as much, but you get substantially more wildlife time, better sightings during peak hours, and the full atmosphere of being in the bush. For many travelers, the per-dollar value of an overnight stay is actually higher.
          </p>

          {/* The Verdict */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            The Verdict
          </h2>
          <p>
            Day trips genuinely work for Lake Mburo (260 km from Kampala, game drives and boat rides in a single day), Ziwa Rhino Sanctuary (176 km, half-day rhino tracking), Mabamba Swamp (50 km, morning shoebill by canoe), and Ngamba Island (45-minute boat from Entebbe). If you have limited time or budget, these four options let you see real wildlife without an overnight stay.
          </p>
          <p>
            But for Uganda&apos;s headline experiences — gorilla trekking in Bwindi, the Murchison Falls boat trip and game drives, tree-climbing lions in Ishasha, chimpanzee tracking in Kibale, the Kazinga Channel in Queen Elizabeth — overnight stays are not optional. These parks are too far from Kampala, and the activities require too much time to squeeze into a day trip. Plan for at least two nights at each.
          </p>
          <p>
            The smart approach for travelers on a budget is to combine both: do a day trip to Mabamba or Ziwa early in your trip, then spend the rest of your time on overnight safaris where it matters most. Use our{" "}
            <Link href="/lodge-finder" className="text-gold hover:underline">lodge finder</Link>{" "}
            to compare accommodation options at every price point.
          </p>
        </div>

        <RelatedArticles currentSlug="overnight-safari-vs-day-trip-uganda" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Need Help Planning Your Safari?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Tell us your budget and timeline and we will suggest the right mix of day trips and overnight stays for your Uganda trip.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lodge-finder"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Browse Lodges by Region
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
