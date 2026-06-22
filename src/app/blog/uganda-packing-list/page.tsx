import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Uganda Packing List for Safari & Gorilla Trekking",
  description:
    "What to pack for a Uganda safari and gorilla trekking — clothes, gear, health items, camera equipment, and common mistakes to avoid.",
  alternates: {
    canonical: `${SITE_URL}/blog/uganda-packing-list`,
  },
  openGraph: {
    title: "Uganda Packing List for Safari & Gorilla Trekking",
    description:
      "A practical packing list for Uganda — gorilla trekking essentials, safari clothes, and what NOT to bring.",
    url: `${SITE_URL}/blog/uganda-packing-list`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function UgandaPackingListPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "The Essential Uganda Packing List for Safari & Gorilla Trekking",
    datePublished: "2026-06-07",
    description:
      "What to pack for a Uganda safari and gorilla trekking — clothes, gear, health items, and common mistakes to avoid.",
    url: `${SITE_URL}/blog/uganda-packing-list`,
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
            <span className="text-olive-dark/80">Uganda Packing List</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">7 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            The Essential Uganda Packing List
          </h1>
          <p className="text-cream/70 text-lg">
            What to bring for safari and gorilla trekking — and what to leave at home.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Packing for Uganda is not complicated, but getting it wrong can make your trip significantly less comfortable. The climate ranges from hot and humid at lower elevations to cool and wet in the mountain forests where gorilla trekking happens. Here is what to bring, organized by activity.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Gorilla Trekking Essentials
          </h2>
          <p>
            Gorilla trekking takes you through dense, steep rainforest. The vegetation is thick, the ground is often muddy, and rain can arrive without warning. Pack for this specifically:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Long-sleeved shirt and long trousers:</strong> Tucked in. The forest is full of stinging nettles, thorns, and ants. Exposed skin will get scratched. Lightweight, quick-drying fabric works best.</li>
            <li><strong>Gardening gloves:</strong> Sounds odd, but you will be grabbing branches and vines to pull yourself up steep slopes. Leather or thick fabric gardening gloves protect your hands and improve your grip. Most experienced trekkers swear by them.</li>
            <li><strong>Gaiters:</strong> These cover the gap between your boots and trousers, keeping mud, ants, and debris out. You can buy or rent them at the park gate in Bwindi, but bringing your own ensures a good fit.</li>
            <li><strong>Waterproof rain jacket:</strong> Non-negotiable. Even in the dry season, it rains in Bwindi. A lightweight, packable rain jacket is essential.</li>
            <li><strong>Sturdy hiking boots:</strong> Waterproof, ankle-supporting boots with good tread. The trails are steep and slippery. Trainers and trail shoes are not enough.</li>
            <li><strong>Neutral-colored clothing:</strong> Khaki, green, brown, dark blue. Avoid bright white or neon colors — they can disturb the gorillas and attract insects.</li>
            <li><strong>A small daypack:</strong> To carry your water, snacks, rain jacket, and camera during the trek. Keep it light — you might be walking for 1-8 hours depending on where the gorillas are.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Safari and General Travel Clothes
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Lightweight, breathable layers:</strong> Mornings on game drives can be cool (especially in Queen Elizabeth and Kidepo), but it warms up quickly. Layers let you adjust.</li>
            <li><strong>A warm fleece or light down jacket:</strong> Evenings in Bwindi and the higher-altitude areas (above 1,500m) get surprisingly cold. Temperatures can drop to 10-12 degrees Celsius at night.</li>
            <li><strong>Sun hat and sunglasses:</strong> Essential on open-vehicle game drives.</li>
            <li><strong>Comfortable walking shoes or sandals:</strong> For evenings at the lodge and easy walks.</li>
            <li><strong>Swimsuit:</strong> Several lodges have pools, and there are swimming spots along the Nile in Jinja.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Camera Gear
          </h2>
          <p>
            For gorilla trekking, bring a camera that handles low light well — the forest canopy blocks most sunlight. A lens in the 24-105mm range is ideal; longer telephoto lenses are unnecessary because you will be very close (7 meters) to the gorillas. <strong>Flash is strictly prohibited.</strong> For safari game drives, a 100-400mm or 200-600mm zoom lens is more useful. Bring spare batteries and memory cards — charging opportunities in remote areas can be limited.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Health and Practical Items
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Insect repellent with DEET:</strong> Apply liberally, especially in the evenings. This is your primary malaria prevention alongside medication.</li>
            <li><strong>Antimalarial medication:</strong> Prescribed by your travel doctor before departure.</li>
            <li><strong>Sunscreen (SPF 50):</strong> The equatorial sun is strong even when it feels overcast.</li>
            <li><strong>Basic first-aid kit:</strong> Plasters, antiseptic, painkillers, anti-diarrhea medication, rehydration salts.</li>
            <li><strong>Torch / headlamp:</strong> Power cuts happen. Paths between lodge rooms are often unlit at night.</li>
            <li><strong>Power adapter:</strong> Uganda uses British-style three-pin plugs (Type G). Bring a universal adapter and a portable power bank.</li>
            <li><strong>Cash in USD:</strong> Clean, post-2006 US dollar notes are useful for tips, gorilla permits, and small purchases. ATMs exist in larger towns but not near national parks.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            What NOT to Bring
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Too much clothing:</strong> Most lodges offer laundry service (often same-day). Pack for 3-4 days and re-wear or wash. Overpacking makes transfers between lodges harder, especially on small charter flights with strict 15kg luggage limits.</li>
            <li><strong>Hard-shell suitcases:</strong> Soft duffel bags are far better. They fit in safari vehicles, on charter planes, and on the back of a boda-boda if needed. Many domestic airlines require soft luggage.</li>
            <li><strong>Bright or white clothing for trekking:</strong> White shirts get filthy immediately in the forest and attract insects. Stick to dark, muted colors.</li>
            <li><strong>Expensive jewelry or unnecessary valuables:</strong> Leave them at home. You do not need them, and they create unnecessary risk.</li>
            <li><strong>Drone:</strong> Drones are not permitted in Uganda&apos;s national parks without special authorization, which is extremely difficult to obtain. Leave it at home.</li>
          </ul>

          <p>
            A good rule of thumb: pack less than you think you need, make sure your gorilla trekking gear is solid, and bring more memory cards than you expect to use. Uganda will give you plenty to photograph.
          </p>
        </div>

        {/* CTA */}
        <RelatedArticles currentSlug="uganda-packing-list" />

        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Planning Your Uganda Trip?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We can help you choose the right lodges and plan your itinerary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lodges"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Browse Lodges
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
