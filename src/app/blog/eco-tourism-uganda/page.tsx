import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Eco Tourism Uganda: How to Travel Responsibly",
  description:
    "How eco tourism works in Uganda — revenue sharing, community lodges, conservation fees. Practical tips for choosing responsible safari accommodation.",
  alternates: {
    canonical: `${SITE_URL}/blog/eco-tourism-uganda`,
  },
  openGraph: {
    title: "Eco Tourism Uganda: How to Travel Responsibly",
    description:
      "Revenue sharing, community lodges, and conservation in Uganda. A practical guide to sustainable safari travel.",
    url: `${SITE_URL}/blog/eco-tourism-uganda`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function EcoTourismUgandaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Eco Tourism in Uganda: How to Travel Responsibly on Safari",
      datePublished: "2026-06-23",
      description:
        "How eco tourism works in Uganda — revenue sharing, community lodges, gorilla permit fees, and practical tips for choosing responsible safari accommodation.",
      url: `${SITE_URL}/blog/eco-tourism-uganda`,
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
          name: "How does revenue sharing work in Uganda's national parks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Uganda Wildlife Authority (UWA) shares 20% of park entrance fees with communities bordering national parks. This revenue-sharing programme funds schools, health centres, roads, and water projects in communities adjacent to protected areas. For gorilla trekking, this means a portion of each $800 permit directly supports the villages around Bwindi and Mgahinga.",
          },
        },
        {
          "@type": "Question",
          name: "What are community lodges in Uganda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Community lodges are accommodation properties that are locally owned or structured so that revenue flows directly to the surrounding community. Examples include Buhoma Community Rest Camp in Bwindi, Ride 4 a Woman Guesthouse (which supports a women's cooperative), and Mutanda Eco Community Camp near Lake Mutanda.",
          },
        },
        {
          "@type": "Question",
          name: "Which eco lodges are recommended in Uganda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Notable eco lodges in Uganda include Budongo Eco Lodge near Murchison Falls, Rushura Canopy Eco Lodge in Bwindi, Kyambura Gorge Eco Lodge in Queen Elizabeth, and Agandi Uganda Eco Lodge near Bwindi. These properties focus on minimal environmental impact, local sourcing, and community employment.",
          },
        },
        {
          "@type": "Question",
          name: "Does gorilla trekking support conservation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Gorilla trekking permits ($800 per person, 2026) fund UWA's park management, anti-poaching patrols, and veterinary care for habituated gorilla families. The 20% community share also gives local people a direct economic incentive to protect gorillas and their habitat rather than encroach on park land.",
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
            <span className="text-olive-dark/80">Eco Tourism Uganda</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">23 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Eco Tourism in Uganda: How to Travel Responsibly
          </h1>
          <p className="text-cream/70 text-lg">
            Revenue sharing, community lodges, and what your safari fees actually fund.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Every gorilla trekking permit sold in Uganda directly funds conservation and community development. The Uganda Wildlife Authority (UWA) operates a revenue-sharing programme that channels 20% of all park entrance fees to communities bordering national parks (Uganda Wildlife Act, 2019). For travellers, this means the $800 you pay for a gorilla permit does not just buy an hour with mountain gorillas — it pays for anti-poaching patrols, veterinary care, and schools in the villages around{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi Impenetrable National Park</Link>.
          </p>
          <p>
            But eco tourism in Uganda goes well beyond permits. The choices you make about where you stay, who guides you, and how you get around can significantly increase or reduce the positive impact of your visit. This guide explains how the system works and what to look for when choosing responsible accommodation.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            How Revenue Sharing Works
          </h2>
          <p>
            Under the Uganda Wildlife Act (2019), UWA allocates 20% of park gate fees to communities adjacent to protected areas. The funds are managed through Community Protected Area Institutions (CPIs) and are used for projects identified by the communities themselves — typically schools, health centres, roads, and clean water access.
          </p>
          <p>
            For gorilla trekking specifically, the maths is significant. At $800 per permit (2026) with a maximum of 8 trekkers per gorilla family per day, a single habituated group generates substantial revenue. Across Bwindi&apos;s 23 habituated families, this translates into millions of dollars annually — a portion of which reaches the surrounding villages. The result is that local communities have a direct economic reason to protect gorillas and their habitat rather than encroach on park land for farming or charcoal.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Community Lodges: Where Your Money Stays Local
          </h2>
          <p>
            Community lodges are properties that are either locally owned or structured so that a significant share of revenue flows to the surrounding community. They are not necessarily basic — some offer comfortable rooms and good food — but their economic model is different from a foreign-owned luxury camp where profits may leave the country.
          </p>
          <p>
            During our stay in Buhoma in January 2026, we experienced this first-hand at{" "}
            <Link href="/lodges/bwindi/gorilla-bluff-lodge" className="text-gold hover:underline">Gorilla Bluff Lodge</Link>. Every morning, we were served coffee and African tea on the terrace overlooking the forest — and breakfast featured local produce: avocado, rolex (the Ugandan chapati-and-egg wrap), and French toast. The staff were from Buhoma village, and the lodge sources its food locally. It is a small example, but it illustrates how tourism spending can circulate within a community rather than being extracted from it.
          </p>
          <p>
            Other community-focused properties worth knowing about:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong><Link href="/lodges/bwindi/buhoma-community-rest-camp" className="text-gold hover:underline">Buhoma Community Rest Camp</Link></strong> — one of the original community tourism projects in Bwindi, run by the Buhoma community. Revenue funds local schools and health services.
            </li>
            <li>
              <strong><Link href="/lodges/bwindi/buhoma-community-haven-lodge" className="text-gold hover:underline">Buhoma Community Haven Lodge</Link></strong> — community-owned property with comfortable rooms a short walk from the Buhoma gorilla trekking trailhead.
            </li>
            <li>
              <strong><Link href="/lodges/bwindi/ride-4-a-woman-guesthouse" className="text-gold hover:underline">Ride 4 a Woman Guesthouse</Link></strong> — supports a women&apos;s cooperative in Buhoma through craft sales and accommodation revenue.
            </li>
            <li>
              <strong><Link href="/lodges/lake-mutanda/mutanda-eco-community-camp" className="text-gold hover:underline">Mutanda Eco Community Camp</Link></strong> — on the shores of Lake Mutanda, this camp combines eco-tourism with direct community benefit.
            </li>
          </ul>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Eco Lodges: What to Look For
          </h2>
          <p>
            The term &ldquo;eco lodge&rdquo; is used loosely in Uganda — there is no mandatory certification scheme. Some properties genuinely minimise their environmental impact through solar power, rainwater harvesting, waste management, and local sourcing. Others use the label as marketing. Here is what to look for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Energy:</strong> Solar panels or hybrid systems rather than diesel generators running 24 hours.</li>
            <li><strong>Water:</strong> Rainwater collection and filtration. Some properties in remote areas have no mains supply and rely entirely on harvested rainwater.</li>
            <li><strong>Staffing:</strong> Local recruitment. A lodge that employs people from the surrounding community has a multiplier effect — wages circulate locally, supporting families and small businesses.</li>
            <li><strong>Food sourcing:</strong> Locally grown produce. Many lodges near Bwindi buy fruit, vegetables, and coffee from village farms within walking distance.</li>
            <li><strong>Waste:</strong> Composting, recycling, and minimal single-use plastic. In remote national park locations, waste management is a genuine challenge — properties that address it seriously deserve recognition.</li>
          </ul>
          <p>
            Notable eco lodges in Uganda include{" "}
            <Link href="/lodges/murchison-falls/budongo-eco-lodge" className="text-gold hover:underline">Budongo Eco Lodge</Link> near Murchison Falls (set within the Budongo Forest chimpanzee habitat),{" "}
            <Link href="/lodges/bwindi/rushura-canopy-eco-lodge" className="text-gold hover:underline">Rushura Canopy Eco Lodge</Link> in Bwindi,{" "}
            <Link href="/lodges/queen-elizabeth/kyambura-gorge-eco-lodge" className="text-gold hover:underline">Kyambura Gorge Eco Lodge</Link> in Queen Elizabeth National Park, and{" "}
            <Link href="/lodges/bwindi/agandi-uganda-eco-lodge" className="text-gold hover:underline">Agandi Uganda Eco Lodge</Link> near Bwindi.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Conservation Fees: Where the Money Goes
          </h2>
          <p>
            Understanding how park fees work helps you see the full picture of tourism&apos;s impact:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Gorilla trekking permit ($800):</strong> Funds UWA operations including ranger patrols, gorilla monitoring, veterinary interventions, trail maintenance, and the 20% community revenue share.</li>
            <li><strong>Park entrance fees ($40 per day for foreign visitors):</strong> Fund day-to-day park management. The 20% community share applies here as well.</li>
            <li><strong>Chimpanzee trekking permit ($200 in Kibale):</strong> Supports primate research and habitat protection in{" "}
              <Link href="/regions/kibale" className="text-gold hover:underline">Kibale National Park</Link>.
            </li>
            <li><strong>Golden monkey trekking permit ($100 in Mgahinga):</strong> Supports conservation of the endangered golden monkey in the Virunga Volcanoes.</li>
          </ul>
          <p>
            The Uganda Wildlife Regulations (2022) set these fee structures and establish the legal framework for how revenue is distributed. The system is not perfect — community members sometimes report delays in receiving funds, and transparency varies by district — but the principle of sharing tourism revenue with local populations is well-established and has measurably reduced human-wildlife conflict around Bwindi.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Practical Tips for Responsible Travel in Uganda
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Choose locally owned or community lodges</strong> where possible. Use our <Link href="/lodge-finder" className="text-gold hover:underline">Lodge Finder</Link> to filter by &ldquo;Community Lodge&rdquo; or &ldquo;Eco Lodge&rdquo; categories.</li>
            <li><strong>Hire local guides</strong> for village walks, birdwatching, and cultural tours. Ask your lodge — most have connections with trained community guides.</li>
            <li><strong>Buy crafts directly</strong> from community cooperatives rather than airport shops. In Buhoma, the Ride 4 a Woman craft centre sells baskets, jewellery, and bags made by local women.</li>
            <li><strong>Respect gorilla trekking rules:</strong> Maintain 7 metres distance, do not use flash photography, and do not trek if you are ill. These rules exist to protect habituated gorilla families from human diseases.</li>
            <li><strong>Carry reusable water bottles.</strong> Single-use plastic is a growing problem across Uganda. Many lodges can refill bottles with filtered water.</li>
            <li><strong>Tip your guides and porters.</strong> Porter services on gorilla treks (typically 10-20 USD) directly support community members who might otherwise have no income from tourism.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            The Bigger Picture
          </h2>
          <p>
            In 2023, 1,274,210 international visitors arrived in Uganda, generating tourism revenue that accounted for 2.6% of national tax receipts (Uganda Tourism Satellite Account Report, March 2025). The sector employed tens of thousands of people directly and many more indirectly — from boda-boda drivers to vegetable farmers supplying safari lodges.
          </p>
          <p>
            Driving through small towns on the way to the national parks, you see the evidence of this economic chain. During our October 2024 drive from Kampala to Murchison Falls, we passed through Luwerro — a small town on the Kampala Road with roadside stalls, small shops, and welcoming people. Every stop for fuel, food, or supplies leaves money in these communities. Tourism is not an abstraction here; it is the boda-boda driver who takes you to the park gate, the cook who prepares your breakfast, the farmer who grows the avocados on your plate.
          </p>
          <p>
            Choosing where to stay and who to travel with is the single biggest lever you have as a visitor. Use it consciously, and your safari becomes part of the solution.
          </p>
        </div>

        <RelatedArticles currentSlug="eco-tourism-uganda" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Looking for Eco-Friendly Lodges?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Use our Lodge Finder to filter by community lodges and eco properties across Uganda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lodge-finder"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Find Eco Lodges
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
