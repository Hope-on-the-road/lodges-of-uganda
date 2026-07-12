import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Adventure Consults — Uganda Mountaineering & Safari Operator",
  description:
    "Adventure Consults is Uganda&apos;s premier mountaineering and adventure company. Rwenzori expeditions, gorilla trekking, wildlife safaris, and cultural tours from a locally owned operator.",
  alternates: {
    canonical: `${SITE_URL}/blog/adventure-consults`,
  },
  openGraph: {
    title: "Adventure Consults — Uganda Mountaineering & Safari Operator",
    description:
      "Adventure Consults specializes in Rwenzori Mountains expeditions, gorilla trekking, and wildlife safaris across Uganda.",
    url: `${SITE_URL}/blog/adventure-consults`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function AdventureConsultsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Adventure Consults — Uganda Mountaineering & Safari Operator",
    datePublished: "2026-07-12",
    description:
      "Adventure Consults is Uganda&apos;s premier mountaineering and adventure company, specializing in Rwenzori expeditions, gorilla trekking, and wildlife safaris.",
    url: `${SITE_URL}/blog/adventure-consults`,
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
            <span className="text-olive-dark/80">Adventure Consults</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">12 July 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Adventure Consults: Uganda&apos;s Mountaineering and Safari Specialist
          </h1>
          <p className="text-cream/70 text-lg">
            A locally owned operator with deep expertise in Rwenzori expeditions, gorilla trekking, and wildlife safaris across Uganda.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Adventure Consults is a Ugandan tour operator that has built its reputation on technical mountaineering expertise and adventure travel across East Africa. Based in Uganda and locally owned, the company has been organizing expeditions to the Rwenzori Mountains and safaris through Uganda&apos;s national parks for over two decades. Their focus sits at the intersection of serious mountain climbing and the broader wildlife and cultural experiences that draw visitors to this part of Africa.
          </p>
          <p>
            For anyone planning a trip that includes high-altitude trekking alongside gorilla encounters or savannah game drives, Adventure Consults is one of the few operators with genuine credentials in both domains. Their website at{" "}
            <a
              href="https://www.adventureconsults.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              adventureconsults.com
            </a>{" "}
            details their full range of programmes.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Rwenzori Mountains: Their Core Expertise
          </h2>
          <p>
            The Rwenzori Mountains — sometimes called the Mountains of the Moon — are among Africa&apos;s most challenging and least-visited alpine environments. The range straddles the border between Uganda and the Democratic Republic of Congo, with the highest peak, Margherita Peak on Mount Stanley, reaching 5,109 metres. Unlike Kilimanjaro, which is essentially a long walk at altitude, the Rwenzoris involve technical sections, glacier crossings, and notoriously wet conditions that require experienced guides and proper equipment.
          </p>
          <p>
            This is where Adventure Consults has distinguished itself. The company supplies trained mountain guides, porters, and the technical gear needed for summit attempts. Their standard Rwenzori circuit takes 7 to 9 days, ascending through distinct vegetation zones — from tropical rainforest through bamboo, heather, and giant groundsel moorland to the glacial zone above 4,500 metres. They also run shorter treks for those who want the Rwenzori experience without committing to a full summit bid.
          </p>
          <p>
            The Rwenzoris see far fewer visitors than Uganda&apos;s more famous gorilla trekking destinations. In practical terms, this means fewer crowds, a genuine wilderness experience, and the kind of raw mountain scenery that has largely disappeared from more commercialised peaks elsewhere in Africa.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Beyond the Mountains
          </h2>
          <p>
            While mountaineering is the company&apos;s signature strength, Adventure Consults also operates across Uganda&apos;s broader safari circuit. Their programmes include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Gorilla trekking</strong> in{" "}
              <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi Impenetrable National Park</Link>{" "}
              and Mgahinga Gorilla National Park, with permit arrangements and lodge bookings handled as part of the package.
            </li>
            <li>
              <strong>Wildlife safaris</strong> through{" "}
              <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth National Park</Link>,{" "}
              <Link href="/regions/murchison-falls" className="text-gold hover:underline">Murchison Falls National Park</Link>, and{" "}
              <Link href="/regions/kidepo" className="text-gold hover:underline">Kidepo Valley National Park</Link>{" "}
              — covering tree-climbing lions in Ishasha, boat safaris on the Kazinga Channel, and the remote savannah landscapes of Kidepo.
            </li>
            <li>
              <strong>Chimpanzee tracking</strong> in Kibale Forest and Budongo Forest, two of East Africa&apos;s best primate habitats.
            </li>
            <li>
              <strong>Cultural tours</strong> including visits to the Batwa communities near Bwindi and the Karamojong in northeastern Uganda.
            </li>
          </ul>
          <p>
            What makes their multi-activity itineraries practical is the logistics experience that comes from running mountain expeditions. Coordinating permits, transport, accommodation, and equipment across remote locations is a core operational skill — and it translates well to complex safari itineraries that cover multiple parks.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Why We List Adventure Consults
          </h2>
          <p>
            Lodges of Uganda focuses primarily on accommodation, but the tour operators who book clients into those lodges are an essential part of the travel ecosystem. Adventure Consults appears in our{" "}
            <Link href="/tour-operators" className="text-gold hover:underline">tour operator directory</Link>{" "}
            because they are a locally owned company with a long track record, genuine technical expertise in a niche that few competitors cover, and a reputation for reliability among travellers and lodge managers alike.
          </p>
          <p>
            For their full profile, including contact details and the types of trips they organize, see our{" "}
            <Link href="/tour-operators/adventure-consults" className="text-gold hover:underline">Adventure Consults operator listing</Link>.
          </p>
        </div>

        <RelatedArticles currentSlug="adventure-consults" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Planning a Rwenzori Expedition or Uganda Safari?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            View the full Adventure Consults operator profile or ask us for help choosing the right operator for your trip.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tour-operators/adventure-consults"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              View Operator Profile
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
