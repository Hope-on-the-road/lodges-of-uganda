import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Bwindi's 4 Sectors Compared: Buhoma, Ruhija, Rushaga & Nkuringo",
  description:
    "An insider comparison of Bwindi's four gorilla trekking sectors — Buhoma, Ruhija, Rushaga, and Nkuringo. Trek difficulty, gorilla families, best lodges, and which sector suits you.",
  alternates: {
    canonical: `${SITE_URL}/blog/bwindi-sectors-compared`,
  },
  openGraph: {
    title: "Bwindi's 4 Sectors Compared: Buhoma, Ruhija, Rushaga & Nkuringo",
    description:
      "Which Bwindi sector is right for you? An honest comparison of Buhoma, Ruhija, Rushaga, and Nkuringo from someone based in the area.",
    url: `${SITE_URL}/blog/bwindi-sectors-compared`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function BwindiSectorsComparedPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Bwindi's 4 Sectors Compared: Buhoma, Ruhija, Rushaga & Nkuringo",
    datePublished: "2026-06-09",
    description:
      "An insider comparison of Bwindi's four gorilla trekking sectors — trek difficulty, gorilla families, best lodges, and which sector suits which traveler.",
    url: `${SITE_URL}/blog/bwindi-sectors-compared`,
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
            <span className="text-olive-dark/80">Bwindi Sectors Compared</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">9 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Bwindi&apos;s 4 Sectors Compared
          </h1>
          <p className="text-cream/70 text-lg">
            Buhoma, Ruhija, Rushaga, and Nkuringo — what makes each sector different and which one is right for you.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Bwindi Impenetrable National Park is divided into four trekking sectors, each with its own park gate, its own set of habituated gorilla families, and its own character. Your gorilla permit is sector-specific — you trek from the gate where your assigned family lives. That means choosing the right sector is part of planning your trip, not just choosing the right lodge.
          </p>
          <p>
            I live in Buhoma and have visited all four sectors multiple times. Here is an honest comparison.
          </p>

          {/* Buhoma */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Buhoma — The Original Sector
          </h2>
          <p>
            Buhoma is where gorilla tourism in Bwindi began. It is the most accessible sector, located in the northern part of the park with the best road connections (relatively speaking — this is still rural southwest Uganda). The village has the most developed tourist infrastructure: the widest choice of lodges, restaurants, and community walks.
          </p>
          <p>
            <strong>Gorilla families:</strong> Buhoma currently has three habituated groups — Mubare (the first family ever habituated, in 1993), Rushegura, and Katwe. The treks here tend to be moderate in difficulty. The terrain is hilly but not as extreme as in the southern sectors, and the gorilla families are accustomed to visitors, which often means calmer, longer encounters.
          </p>
          <p>
            <strong>Best lodges:</strong> Buhoma has the widest range.{" "}
            <Link href="/lodges/bwindi/trackers-safari-lodge" className="text-gold hover:underline">Trackers Safari Lodge</Link>{" "}
            offers a good mid-range option with a spa and pool.{" "}
            <Link href="/lodges/bwindi/sanctuary-gorilla-forest-camp" className="text-gold hover:underline">Sanctuary Gorilla Forest Camp</Link>{" "}
            is the luxury pick, literally inside the national park. Budget travelers have several community guesthouses within walking distance of the gate.
          </p>
          <p>
            <strong>Best for:</strong> First-time gorilla trekkers, travelers who want the most lodge options, anyone combining Bwindi with Queen Elizabeth National Park (Buhoma is the closest sector to QE, about 3-4 hours by road).
          </p>

          {/* Ruhija */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Ruhija — The High-Altitude Sector
          </h2>
          <p>
            Ruhija sits at around 2,350 meters, making it the highest sector in Bwindi. The landscape feels different up here — more open, with views across the forest canopy and, on clear days, toward the Virunga volcanoes. The climate is noticeably cooler, especially at night.
          </p>
          <p>
            <strong>Gorilla families:</strong> Ruhija has four habituated groups — Oruzogo, Bitukura, Mukiza, and Kyaguriro. The treks can be strenuous due to the altitude and steep ridges. This sector is known for longer treks on average, but the forest up here is stunning — bamboo groves mixed with ancient hardwoods.
          </p>
          <p>
            <strong>Best lodges:</strong>{" "}
            <Link href="/lodges/bwindi/gorilla-mist-camp" className="text-gold hover:underline">Gorilla Mist Camp</Link>{" "}
            is a solid mid-range choice.{" "}
            <Link href="/lodges/bwindi/ruhija-gorilla-lodge" className="text-gold hover:underline">Ruhija Gorilla Lodge</Link>{" "}
            is another option close to the gate. Lodge choice here is more limited than Buhoma.
          </p>
          <p>
            <strong>Best for:</strong> Fit trekkers who enjoy challenging hikes, birdwatchers (Ruhija is excellent for Albertine Rift endemics), and travelers who want a quieter, less-visited sector.
          </p>

          {/* Rushaga */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Rushaga — The Most Gorilla Families
          </h2>
          <p>
            Rushaga, in the southern part of the park, has the highest number of habituated gorilla groups — currently five families including Nshongi, Mishaya, Kahungye, Busingye, and Bweza. More families means more available permits, which can make it easier to get a permit here during peak season when Buhoma sells out.
          </p>
          <p>
            <strong>Gorilla families:</strong> Five groups. The terrain is steep — Rushaga sits in a deep valley and treks often involve significant elevation changes. Some treks here are among the most physically demanding in Bwindi. But the density of gorilla families means encounters are common and the trackers are experienced.
          </p>
          <p>
            <strong>Best lodges:</strong>{" "}
            <Link href="/lodges/bwindi/chameleon-hill-lodge" className="text-gold hover:underline">Chameleon Hill Lodge</Link>{" "}
            overlooks Lake Mutanda and offers a unique, colorful design.{" "}
            <Link href="/lodges/bwindi/gorilla-safari-lodge" className="text-gold hover:underline">Gorilla Safari Lodge</Link>{" "}
            is a comfortable option near the Rushaga gate. For luxury,{" "}
            <Link href="/lodges/bwindi/clouds-mountain-gorilla-lodge" className="text-gold hover:underline">Clouds Mountain Gorilla Lodge</Link>{" "}
            (technically between Rushaga and Nkuringo) is one of Uganda&apos;s finest properties.
          </p>
          <p>
            <strong>Best for:</strong> Travelers who need permit availability (more families = more daily permits), those who want to combine with Lake Mutanda or Lake Bunyonyi, and visitors heading to or from Rwanda (Rushaga is closest to the Cyanika border crossing).
          </p>

          {/* Nkuringo */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Nkuringo — The Steepest Challenge
          </h2>
          <p>
            Nkuringo is the most physically demanding sector. The village sits on a ridge overlooking the Rift Valley, and the gorilla families tend to range on the steep slopes below. Treks here often involve descending into deep valleys and climbing back out — it is not uncommon for trekkers to spend 5-7 hours on foot. This is not the sector for casual hikers.
          </p>
          <p>
            <strong>Gorilla families:</strong> Two groups — Nkuringo and Christmas. With fewer families, permits here can actually be easier to obtain in some months, as fewer travelers specifically request Nkuringo. The encounters, though, can be spectacular — the families here are well-habituated and the forest setting is dramatic.
          </p>
          <p>
            <strong>Best lodges:</strong>{" "}
            <Link href="/lodges/bwindi/nkuringo-bwindi-gorilla-lodge" className="text-gold hover:underline">Nkuringo Bwindi Gorilla Lodge</Link>{" "}
            is a community-owned property with stunning Rift Valley views and a genuine community tourism story.{" "}
            <Link href="/lodges/bwindi/clouds-mountain-gorilla-lodge" className="text-gold hover:underline">Clouds Mountain Gorilla Lodge</Link>{" "}
            also serves Nkuringo trekkers.
          </p>
          <p>
            <strong>Best for:</strong> Experienced hikers who want the most challenging and adventurous trek, travelers interested in community tourism, and those who do not mind working hard for a uniquely rewarding gorilla encounter.
          </p>

          {/* Summary */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Quick Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-sand/50">
                  <th className="text-left p-3 font-semibold text-forest">Sector</th>
                  <th className="text-left p-3 font-semibold text-forest">Families</th>
                  <th className="text-left p-3 font-semibold text-forest">Difficulty</th>
                  <th className="text-left p-3 font-semibold text-forest">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/40">
                <tr>
                  <td className="p-3 font-medium">Buhoma</td>
                  <td className="p-3">3</td>
                  <td className="p-3">Moderate</td>
                  <td className="p-3">First-timers, most lodge options</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Ruhija</td>
                  <td className="p-3">4</td>
                  <td className="p-3">Strenuous</td>
                  <td className="p-3">Birdwatchers, fit hikers</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Rushaga</td>
                  <td className="p-3">5</td>
                  <td className="p-3">Strenuous</td>
                  <td className="p-3">Permit availability, Rwanda connections</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Nkuringo</td>
                  <td className="p-3">2</td>
                  <td className="p-3">Very strenuous</td>
                  <td className="p-3">Experienced hikers, adventure seekers</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            No sector is objectively better than the others — it depends on your fitness level, which lodges appeal to you, what else is on your itinerary, and sometimes simply which permits are available. For a deeper look at the region and all available lodges, see our{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi Impenetrable National Park guide</Link>.
          </p>
        </div>

        <RelatedArticles currentSlug="bwindi-sectors-compared" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Need Help Choosing a Sector?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We live in Buhoma and know all four sectors well. Tell us about your trip and we will recommend the best fit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/regions/bwindi"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Explore Bwindi Lodges
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
