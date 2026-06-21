import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Uganda vs Rwanda Gorilla Trekking | Honest Comparison 2026",
  description:
    "Compare gorilla trekking in Uganda and Rwanda: permit cost ($800 vs $1,500), trek difficulty, travel logistics, and which country offers the better overall experience.",
  alternates: { canonical: `${SITE_URL}/uganda-vs-rwanda-gorilla-trekking` },
  openGraph: {
    title: "Uganda vs Rwanda Gorilla Trekking | Honest Comparison 2026",
    description:
      "Side-by-side comparison of gorilla trekking in Uganda and Rwanda. Permit prices, logistics, difficulty, and what else each country offers.",
    url: `${SITE_URL}/uganda-vs-rwanda-gorilla-trekking`,
    type: "article",
  },
};

export default function UgandaVsRwandaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is gorilla trekking cheaper in Uganda or Rwanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uganda is significantly cheaper. A gorilla permit costs $800 in Uganda compared to $1,500 in Rwanda. The trekking experience itself — one hour with a habituated gorilla family, led by a ranger guide — is similar in both countries.",
        },
      },
      {
        "@type": "Question",
        name: "Which country has more gorilla families to visit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uganda has more habituated gorilla families. Bwindi Impenetrable National Park has around 20 habituated families, and Mgahinga Gorilla National Park has one. Rwanda's Volcanoes National Park has approximately 12 habituated families.",
        },
      },
      {
        "@type": "Question",
        name: "Is gorilla trekking harder in Uganda or Rwanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uganda's treks tend to be more physically demanding. Bwindi's terrain is steep, densely forested, and the trails are often muddy. Rwanda's Volcanoes National Park has challenging climbs too, but the terrain is generally more open bamboo forest at higher altitudes.",
        },
      },
      {
        "@type": "Question",
        name: "Can I combine gorilla trekking with a safari?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uganda offers far more options for combining gorilla trekking with a wildlife safari. You can add Queen Elizabeth National Park, Murchison Falls, or Kibale Forest (for chimpanzees) to your trip. Rwanda is primarily a gorilla trekking destination with fewer safari options.",
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
            <span className="text-olive-dark/80">Uganda vs Rwanda Gorilla Trekking</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Uganda vs Rwanda Gorilla Trekking
          </h1>
          <p className="text-cream/70 text-lg">
            An honest, side-by-side comparison to help you decide where to see mountain gorillas.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Introduction */}
        <section>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Mountain gorillas live in only two places on Earth: the Virunga volcanic range (shared by Uganda, Rwanda, and the Democratic Republic of Congo) and Uganda&apos;s Bwindi Impenetrable Forest. For most travellers, the choice comes down to Uganda or Rwanda. Both offer an extraordinary experience. The right choice depends on your budget, travel style, and what else you want to do.
          </p>
        </section>

        {/* Comparison Table */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            At a Glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-forest text-cream">
                  <th className="text-left p-3 rounded-tl-lg font-semibold">&nbsp;</th>
                  <th className="text-left p-3 font-semibold">Uganda</th>
                  <th className="text-left p-3 rounded-tr-lg font-semibold">Rwanda</th>
                </tr>
              </thead>
              <tbody className="text-olive-dark/80">
                <tr className="border-b border-sand/50">
                  <td className="p-3 font-semibold text-forest">Permit Cost</td>
                  <td className="p-3">$800</td>
                  <td className="p-3">$1,500</td>
                </tr>
                <tr className="border-b border-sand/50 bg-cream/30">
                  <td className="p-3 font-semibold text-forest">Trekking Parks</td>
                  <td className="p-3">Bwindi Impenetrable NP, Mgahinga Gorilla NP</td>
                  <td className="p-3">Volcanoes National Park</td>
                </tr>
                <tr className="border-b border-sand/50">
                  <td className="p-3 font-semibold text-forest">Habituated Families</td>
                  <td className="p-3">~21</td>
                  <td className="p-3">~12</td>
                </tr>
                <tr className="border-b border-sand/50 bg-cream/30">
                  <td className="p-3 font-semibold text-forest">Daily Permits</td>
                  <td className="p-3">~170</td>
                  <td className="p-3">~96</td>
                </tr>
                <tr className="border-b border-sand/50">
                  <td className="p-3 font-semibold text-forest">Trek Difficulty</td>
                  <td className="p-3">Moderate to challenging</td>
                  <td className="p-3">Moderate</td>
                </tr>
                <tr className="border-b border-sand/50 bg-cream/30">
                  <td className="p-3 font-semibold text-forest">Travel from Capital</td>
                  <td className="p-3">7–9 hours by road or 1 hour flight to Bwindi</td>
                  <td className="p-3">2–3 hours by road from Kigali</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-forest">Safari Options</td>
                  <td className="p-3">Extensive (Queen Elizabeth, Murchison Falls, Kibale)</td>
                  <td className="p-3">Limited (Akagera NP)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Price */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Price
          </h2>
          <p className="text-olive-dark/80 leading-relaxed">
            This is the most straightforward difference. Uganda&apos;s gorilla permit costs $800; Rwanda&apos;s costs $1,500. For a couple, that is $1,400 saved by choosing Uganda — enough to cover several nights of lodge accommodation or additional activities. Rwanda&apos;s higher price is a deliberate strategy to position the country as a high-end destination. Uganda&apos;s lower price makes gorilla trekking accessible to a wider range of travellers.
          </p>
        </section>

        {/* Location & Logistics */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Location and Logistics
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Rwanda has a clear advantage in convenience. Kigali to Volcanoes National Park is a smooth two-to-three hour drive on good roads. Uganda&apos;s Bwindi is a seven-to-nine hour drive from Kampala (or Entebbe Airport), though domestic flights to the Kihihi or Kisoro airstrips reduce this to about an hour in the air plus a short ground transfer.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            If you are short on time and just want to trek gorillas, Rwanda is logistically simpler. If you are planning a longer trip and want to combine gorilla trekking with other experiences, Uganda&apos;s longer drive can become part of the journey — passing through rural landscapes, small towns, and tea plantations along the way.
          </p>
        </section>

        {/* Trek Experience */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            The Trekking Experience
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Uganda&apos;s Bwindi Impenetrable Forest lives up to its name. The terrain is steep, the vegetation is dense, and the trails can be muddy, especially in the wet season. Treks range from one to six hours depending on where the gorillas are that day. It is a genuine forest trek and can be physically demanding.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            Rwanda&apos;s Volcanoes National Park is at higher altitude (up to 4,500m at the peaks) and involves climbing volcanic slopes through bamboo forest. The terrain is more open than Bwindi, though the elevation makes it tiring in a different way. Treks in Rwanda are generally somewhat shorter on average.
          </p>
        </section>

        {/* Beyond Gorillas */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Beyond Gorilla Trekking
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Uganda is the stronger choice if you want a full safari experience. You can combine gorilla trekking with game drives in Queen Elizabeth National Park (tree-climbing lions, hippos, elephants), a visit to Murchison Falls, chimpanzee tracking in Kibale Forest, or a trip to the remote Kidepo Valley.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            Rwanda has fewer safari options. Akagera National Park offers Big Five game viewing, and Nyungwe Forest has chimpanzee tracking. But Uganda&apos;s wildlife diversity and the number of national parks it offers alongside gorilla trekking are hard to match.
          </p>
        </section>

        {/* Our Take */}
        <section className="bg-cream/50 rounded-xl p-6 border border-sand/50">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Our Honest Take
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            <strong>Choose Uganda</strong> if you want the best value, more gorilla family options, and the ability to build a diverse trip that includes wildlife safaris, chimpanzees, and remote wilderness.
          </p>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            <strong>Choose Rwanda</strong> if convenience is your top priority, you have limited time, or you prefer a more polished, luxury-oriented experience with minimal driving.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            Both countries protect the same species of mountain gorilla. In both, you will spend an hour with a wild gorilla family in their natural habitat. It is one of the most powerful wildlife encounters on the planet, whichever side of the border you choose.
          </p>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Plan Your Gorilla Trek
          </h2>
          <ul className="space-y-2 text-olive-dark/80">
            <li>
              <Link href="/gorilla-permit-guide" className="text-gold hover:underline">
                Uganda Gorilla Permit Guide
              </Link>{" "}
              — cost, booking process, and what to bring.
            </li>
            <li>
              <Link href="/regions/bwindi" className="text-gold hover:underline">
                Bwindi Region Guide
              </Link>{" "}
              — lodges and logistics for Bwindi Impenetrable National Park.
            </li>
            <li>
              <Link href="/lodges" className="text-gold hover:underline">
                All Uganda Lodges
              </Link>{" "}
              — browse accommodation across all regions.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Still Deciding?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We can help you weigh the options and find the right lodges for your gorilla trekking trip.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
          >
            Ask on WhatsApp
          </a>
        </section>
      </div>
    </>
  );
}
