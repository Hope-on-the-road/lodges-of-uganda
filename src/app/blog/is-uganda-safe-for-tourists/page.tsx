import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Is Uganda Safe for Tourists? What You Actually Need to Know (2026)",
  description:
    "An honest, balanced look at safety in Uganda for tourists in 2026 — health, road travel, wildlife, regional considerations, and practical tips.",
  alternates: {
    canonical: `${SITE_URL}/blog/is-uganda-safe-for-tourists`,
  },
  openGraph: {
    title: "Is Uganda Safe for Tourists? What You Actually Need to Know (2026)",
    description:
      "Honest safety advice for travelers to Uganda — what the real risks are and how to manage them.",
    url: `${SITE_URL}/blog/is-uganda-safe-for-tourists`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function IsUgandaSafeForTouristsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Is Uganda Safe for Tourists? What You Actually Need to Know (2026)",
    datePublished: "2026-06-03",
    description:
      "An honest, balanced look at safety in Uganda for tourists — health, road travel, wildlife, and practical tips.",
    url: `${SITE_URL}/blog/is-uganda-safe-for-tourists`,
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
            <span className="text-olive-dark/80">Is Uganda Safe for Tourists?</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">3 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Is Uganda Safe for Tourists?
          </h1>
          <p className="text-cream/70 text-lg">
            What you actually need to know about traveling safely in Uganda in 2026 — an honest take, not a sales pitch.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            This is a question nearly every first-time visitor to Uganda asks, and it deserves an honest answer rather than a dismissive &quot;of course it is!&quot; The short version: Uganda is generally safe for tourists, and hundreds of thousands of visitors travel through the country each year without incident. But like any destination, it has its own set of risks and practical considerations that are worth understanding before you go.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            The General Picture
          </h2>
          <p>
            Uganda&apos;s tourism industry is well-established and growing. The main tourist circuits — Bwindi for gorilla trekking, Queen Elizabeth and Murchison Falls for safaris, Jinja for adventure activities — receive visitors year-round and have solid infrastructure by East African standards. Violent crime targeting tourists is rare. Petty theft exists, as it does everywhere, but basic precautions (not flashing expensive electronics, using hotel safes, being aware of your surroundings in cities) go a long way.
          </p>
          <p>
            Kampala, the capital, is a busy, chaotic city. It is safe to visit but can feel overwhelming, especially around the taxi parks and markets. Most travelers pass through quickly on their way to the national parks, and that is usually the right approach unless you genuinely enjoy big African cities.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Health Considerations
          </h2>
          <p>
            Health is the area that requires the most preparation. <strong>Yellow fever vaccination</strong> is mandatory — you need to show proof of vaccination to enter Uganda. Beyond that, your travel clinic will likely recommend hepatitis A and B, typhoid, and ensuring your routine vaccinations are up to date. Rabies pre-exposure vaccination is worth considering if you will be in remote areas.
          </p>
          <p>
            <strong>Malaria</strong> is present throughout Uganda, including at altitude in places like Bwindi (though the risk is lower there). Take antimalarial medication — your doctor will advise on the best option. Use insect repellent, sleep under a mosquito net if your accommodation provides one (most safari lodges do), and wear long sleeves in the evening. This is not optional advice; malaria is a serious risk.
          </p>
          <p>
            Drink bottled or filtered water only. Most lodges and restaurants serve purified water, but do not assume — ask if you are unsure. Stomach issues from untreated water are the most common health complaint among visitors.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Road Safety
          </h2>
          <p>
            If there is one genuine risk in Uganda, it is the roads. Driving standards are unpredictable, roads outside main highways can be rough, and some routes — particularly to Bwindi or Kidepo — involve long hours on challenging terrain. This is precisely why most visitors hire a driver or travel with a{" "}
            <Link href="/tour-operators" className="text-gold hover:underline">tour operator</Link>. Experienced local drivers know the roads, the conditions, and how to handle them. Self-driving is possible but not recommended for first-time visitors.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Wildlife Safety
          </h2>
          <p>
            You will be sharing space with large wild animals — elephants, hippos, buffalo, and occasionally lions. In national parks, always follow your guide&apos;s instructions. Stay in your vehicle during game drives unless told otherwise. On gorilla treks, rangers will brief you on behavior around the gorillas: maintain the seven-meter distance, do not use flash photography, do not make sudden movements. The rules exist for good reason and are strictly enforced.
          </p>
          <p>
            Hippos are statistically the most dangerous large animal in Africa. Do not walk along lake or river shores at dawn or dusk when hippos are moving between water and their grazing areas.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Regional Considerations
          </h2>
          <p>
            The vast majority of Uganda is safe for tourists. The one area that warrants caution is the border region with the Democratic Republic of Congo and South Sudan in the far north and west. This does not affect the main tourist areas — Bwindi, Queen Elizabeth, Murchison Falls, and Jinja are all well away from any conflict zones. Kidepo Valley National Park in the northeast is remote but has been safe and increasingly popular for years. Check your government&apos;s travel advisories for the most current information, but be aware that these advisories often err on the side of caution and may flag entire countries based on issues in small, specific areas.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            The Tour Operator Factor
          </h2>
          <p>
            Honestly, the single biggest thing you can do to ensure a safe, smooth trip is to travel with a reputable local operator. They handle the driving, know which areas to avoid, manage permits and logistics, and serve as your on-the-ground contact if anything goes wrong. This is not a luxury — it is practical sense for a country where infrastructure outside the main cities is still developing. Browse our list of{" "}
            <Link href="/tour-operators" className="text-gold hover:underline">recommended tour operators</Link>{" "}
            for vetted options.
          </p>
          <p>
            Uganda is a welcoming country with genuinely friendly people. The tourism sector is professional and well-organized around the main circuits. Come prepared, travel smart, and you will almost certainly have a safe and memorable trip. To learn more about who we are and how we can help, visit our{" "}
            <Link href="/about" className="text-gold hover:underline">about page</Link>.
          </p>
        </div>

        <RelatedArticles currentSlug="is-uganda-safe-for-tourists" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Questions About Traveling in Uganda?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We live here and travel these roads regularly. Ask us anything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tour-operators"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Find a Tour Operator
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
