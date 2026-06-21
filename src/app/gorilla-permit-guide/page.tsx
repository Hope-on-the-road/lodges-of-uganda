import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Uganda Gorilla Permit Guide 2026 | Cost, Booking & Tips",
  description:
    "Everything you need to know about Uganda gorilla trekking permits: $800 cost, how to book through UWA, availability, age requirements, fitness tips, and what to bring.",
  alternates: { canonical: `${SITE_URL}/gorilla-permit-guide` },
  openGraph: {
    title: "Uganda Gorilla Permit Guide 2026 | Cost, Booking & Tips",
    description:
      "Complete guide to gorilla permits in Uganda. Learn about costs, booking, availability, and how Uganda compares to Rwanda.",
    url: `${SITE_URL}/gorilla-permit-guide`,
    type: "article",
  },
};

export default function GorillaPermitGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a gorilla permit cost in Uganda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A gorilla trekking permit in Uganda costs $800 per person for foreign non-residents. This is set by the Uganda Wildlife Authority (UWA) and includes one hour with a habituated gorilla family, a ranger guide, and a pre-trek briefing.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a gorilla permit in Uganda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book directly through the Uganda Wildlife Authority (UWA) or through a licensed tour operator. Booking through a tour operator is often easier as they handle payment and logistics. For peak season (June–August, December–February), book 3 to 6 months in advance.",
        },
      },
      {
        "@type": "Question",
        name: "How many people can trek to one gorilla family per day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each habituated gorilla family in Uganda can be visited by a maximum of 8 people per day. This limit is strictly enforced to minimise stress on the gorillas and reduce the risk of disease transmission.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum age for gorilla trekking in Uganda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You must be at least 15 years old to go gorilla trekking in Uganda. There is no upper age limit, but you should be in reasonable physical condition as treks can last between 2 and 6 hours over hilly terrain.",
        },
      },
      {
        "@type": "Question",
        name: "Is a gorilla permit cheaper in Uganda or Rwanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uganda is significantly cheaper. A gorilla permit in Uganda costs $800, while Rwanda charges $1,500 per person. The experience is comparable — both countries are home to mountain gorillas in similar volcanic and montane forest habitats.",
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
            <span className="text-olive-dark/80">Gorilla Permit Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Uganda Gorilla Permit Guide
          </h1>
          <p className="text-cream/70 text-lg">
            Everything you need to know about booking a gorilla trekking permit in Uganda — cost, availability, requirements, and practical tips.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Cost */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            What Does a Gorilla Permit Cost?
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            A gorilla trekking permit in Uganda costs <strong>$800 per person</strong> for foreign non-residents. East African residents pay a reduced rate of UGX 300,000, and foreign residents pay $600. These prices are set by the Uganda Wildlife Authority (UWA) and apply to both Bwindi Impenetrable National Park and Mgahinga Gorilla National Park.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            The permit fee includes access to the national park, a ranger guide, a pre-trek briefing, and one hour of observation time with a habituated gorilla family. No additional park entry fee is required on trekking day.
          </p>
        </section>

        {/* How to Book */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            How to Book a Gorilla Permit
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            There are two main ways to book a gorilla permit:
          </p>
          <ul className="list-disc list-inside space-y-2 text-olive-dark/80 leading-relaxed mb-4">
            <li>
              <strong>Directly through UWA:</strong> You can contact the Uganda Wildlife Authority by email or visit their offices in Kampala. Payment is typically by bank transfer. This requires some back-and-forth and planning ahead.
            </li>
            <li>
              <strong>Through a tour operator:</strong> Most travellers book through a licensed Uganda tour operator. The operator handles the permit application, payment, and logistics. This is simpler, especially if you are also booking accommodation and transport.
            </li>
          </ul>
          <p className="text-olive-dark/80 leading-relaxed">
            Either way, the permit price is the same. Tour operators do not mark up the permit itself — they earn through the overall trip package. Using an operator is particularly recommended if you need help coordinating lodges, transfers, and other activities.
          </p>
        </section>

        {/* Availability */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Availability and Booking Timeline
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Each habituated gorilla family can be visited by a maximum of <strong>8 people per day</strong>. With around 20 habituated families in Bwindi and one in Mgahinga, roughly 170 permits are available daily. That sounds like a lot, but peak-season demand regularly exceeds supply.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            For the dry seasons — June to August and December to February — book your permit <strong>three to six months in advance</strong>. During the shoulder and wet seasons (March–May, September–November), permits are typically available on shorter notice, sometimes even a few weeks ahead.
          </p>
        </section>

        {/* What's Included */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            What Is Included in the Permit
          </h2>
          <div className="bg-cream/50 rounded-xl p-6 border border-sand/50">
            <ul className="space-y-3 text-olive-dark/80 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">1.</span>
                <span><strong>Pre-trek briefing</strong> at the park headquarters, covering gorilla behaviour, trekking rules, and safety.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">2.</span>
                <span><strong>Ranger guide</strong> who leads your group through the forest and locates the gorilla family.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">3.</span>
                <span><strong>One hour of observation</strong> once you find the gorillas. The hour is strictly timed.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-0.5">4.</span>
                <span><strong>National park entry</strong> for the day — no separate park fee required.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Requirements */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Age and Fitness Requirements
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            The minimum age for gorilla trekking is <strong>15 years</strong>. There is no upper age limit, but you should be honest about your physical fitness. Treks can last anywhere from two to six hours, sometimes longer, over steep, uneven terrain at altitudes between 1,500 and 2,600 metres.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            If you have mobility concerns, let your tour operator know when booking. UWA can assign you to a gorilla family that lives at a lower altitude with a shorter approach. Porters are available at the park entrance for a small fee and are highly recommended — they carry your daypack and help you on difficult sections.
          </p>
        </section>

        {/* What to Bring */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            What to Bring on the Trek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cream/50 rounded-xl p-5 border border-sand/50">
              <h3 className="font-semibold text-forest text-sm mb-2">Essential</h3>
              <ul className="text-olive-dark/80 text-sm space-y-1">
                <li>Waterproof hiking boots</li>
                <li>Long trousers and long sleeves</li>
                <li>Waterproof jacket</li>
                <li>Gardening gloves</li>
                <li>At least 2 litres of water</li>
                <li>Packed lunch or snacks</li>
              </ul>
            </div>
            <div className="bg-cream/50 rounded-xl p-5 border border-sand/50">
              <h3 className="font-semibold text-forest text-sm mb-2">Recommended</h3>
              <ul className="text-olive-dark/80 text-sm space-y-1">
                <li>Gaiters (for muddy trails)</li>
                <li>Insect repellent</li>
                <li>Walking stick (provided at park)</li>
                <li>Camera (no flash allowed)</li>
                <li>Small backpack</li>
                <li>Energy bars or chocolate</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cancellation */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Cancellation Policy
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            UWA&apos;s cancellation policy allows you to reschedule or cancel your permit, but terms are strict. Cancellations made well in advance may receive a partial refund, while last-minute cancellations typically forfeit the full fee. If the trek is cancelled by UWA due to extreme weather or safety concerns, a reschedule is offered.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            Travel insurance that covers trip interruption is strongly recommended. Make sure your policy specifically covers gorilla trekking, as some standard policies exclude adventure activities.
          </p>
        </section>

        {/* Uganda vs Rwanda */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Uganda vs Rwanda: Permit Price Comparison
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Uganda&apos;s gorilla permit costs $800, while Rwanda charges $1,500 per person. The core experience is similar — both countries are home to mountain gorillas in protected forests. Uganda offers a more affordable option, and the ability to combine gorilla trekking with diverse wildlife safaris in parks like Queen Elizabeth and Murchison Falls.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            For a detailed comparison, see our{" "}
            <Link href="/uganda-vs-rwanda-gorilla-trekking" className="text-gold hover:underline">
              Uganda vs Rwanda gorilla trekking guide
            </Link>.
          </p>
        </section>

        {/* Internal Links */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Where to Stay for Gorilla Trekking
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Most gorilla trekking in Uganda departs from{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi Impenetrable National Park</Link>, which has four trekking sectors: Buhoma, Ruhija, Rushaga, and Nkuringo. Each sector has its own selection of lodges, from luxury to budget.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            Browse our{" "}
            <Link href="/lodges" className="text-gold hover:underline">complete lodge directory</Link>{" "}
            to find accommodation near your trekking sector.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Need Help Booking a Gorilla Permit?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We can connect you with trusted local operators who handle permit booking, lodges, and transport.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tour-operators"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Browse Tour Operators
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
      </div>
    </>
  );
}
