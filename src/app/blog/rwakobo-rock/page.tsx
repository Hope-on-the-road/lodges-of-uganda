import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Rwakobo Rock — Eco Lodge near Lake Mburo National Park",
  description:
    "Rwakobo Rock is a family-run eco lodge perched on a rocky outcrop near Lake Mburo National Park. Sunset views, a waterhole frequented by wildlife, and a pool with panoramic vistas.",
  alternates: {
    canonical: `${SITE_URL}/blog/rwakobo-rock`,
  },
  openGraph: {
    title: "Rwakobo Rock — Eco Lodge near Lake Mburo National Park",
    description:
      "A closer look at Rwakobo Rock, a mid-range eco lodge on a rocky hilltop overlooking Nshara Ranchlands and Lake Mburo National Park.",
    url: `${SITE_URL}/blog/rwakobo-rock`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RwakoboRockPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Rwakobo Rock — Eco Lodge near Lake Mburo National Park",
    datePublished: "2026-07-12",
    description:
      "Rwakobo Rock is a family-run eco lodge on a rocky outcrop near Lake Mburo National Park, offering sunset views, wildlife at the waterhole, and a pool with panoramic vistas.",
    url: `${SITE_URL}/blog/rwakobo-rock`,
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
            <span className="text-olive-dark/80">Rwakobo Rock</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">12 July 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Rwakobo Rock — A Rocky Perch above Lake Mburo
          </h1>
          <p className="text-cream/70 text-lg">
            A family-run eco lodge on a granite outcrop, with sunset views, a wildlife waterhole, and one of the most relaxed atmospheres in western Uganda.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Rwakobo Rock sits on a massive granite outcrop overlooking the Nshara Ranchlands and the rolling savannah that borders Lake Mburo National Park in western Uganda. The lodge is just five minutes from the park entrance gate, making it one of the closest accommodation options to the park itself. For travelers heading between Kampala and the western circuit — Bwindi, Queen Elizabeth, or Ishasha — Lake Mburo is a natural stopover, and Rwakobo Rock is one of the most distinctive places to spend the night.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl pt-2">
            The Setting
          </h2>
          <p>
            The name says it: Rwakobo Rock is built on and around rock. The main lodge structure is integrated into the granite boulders, and the cottages are scattered across the hillside among natural rock formations and indigenous vegetation. From the main terrace, the view extends across open grassland dotted with acacia trees toward the national park boundary. At sunset, the light across the ranchlands turns golden, and the silhouettes of distant hills frame the horizon. There is very little light pollution out here, which means the night sky is genuinely impressive — one of those places where you can sit by the campfire and see the Milky Way clearly.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl pt-2">
            Rooms and Facilities at Rwakobo Rock
          </h2>
          <p>
            The accommodation consists of cozy cottages built from local materials — stone, timber, and thatch. Each cottage has its own character, shaped partly by the rocky terrain it sits on. Rooms are simple but comfortable: solid beds, mosquito nets, en-suite bathrooms with hot water, and private verandas with views over the surrounding landscape. This is not a place chasing five-star luxury. It is a place that has been designed around its environment, and the result feels honest and unpretentious.
          </p>
          <p>
            The lodge has a swimming pool set on the rocks with panoramic views — a welcome feature after a dusty game drive. The pool area is a natural gathering point in the afternoon, and the outlook from the water is arguably the best vantage point on the entire property.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl pt-2">
            The Waterhole and Dining
          </h2>
          <p>
            One of the defining features of Rwakobo Rock is its dining area, which overlooks a waterhole. Zebras, impalas, warthogs, and bushbuck regularly come to drink, sometimes while you are eating breakfast or dinner. It is a simple setup — no hides, no elaborate viewing platforms — just a naturally positioned vantage point where wildlife comes to you. For photographers, the morning and late afternoon light at the waterhole produces excellent results without any effort beyond sitting down with a camera.
          </p>
          <p>
            The food is home-style cooking with fresh ingredients, much of it sourced locally. Meals are served communally, which suits the lodge&apos;s relaxed, family-run character. In the evening, a campfire is lit on the rocks, and guests tend to gather there after dinner — conversation, stargazing, and the occasional call of a nightjar in the distance.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl pt-2">
            Wildlife and Activities near Lake Mburo
          </h2>
          <p>
            Lake Mburo National Park is Uganda&apos;s smallest savannah park, but it packs a surprising amount into its compact area. It is the only park in southern Uganda where you can see zebras, and it supports populations of eland, topi, buffalo, hippo, and a healthy number of leopards — though the latter remain elusive. The park also has over 350 bird species recorded, making it a strong destination for birders.
          </p>
          <p>
            Activities from Rwakobo Rock include guided game drives into the park, boat trips on Lake Mburo itself (where hippos and crocodiles are reliably seen), and walking safaris — one of the few parks in Uganda where guided walks are offered. For something different, the nearby{" "}
            <Link href="/lodges/lake-mburo/mihingo-lodge" className="text-gold hover:underline">
              Mihingo Lodge
            </Link>{" "}
            offers horseback safaris, which can be arranged as a day activity even if you are staying at Rwakobo Rock. Riding through the savannah alongside zebras and antelopes is an experience you will not find elsewhere in Uganda.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl pt-2">
            Who Rwakobo Rock Is Best For
          </h2>
          <p>
            Rwakobo Rock works well for couples looking for a quiet, characterful lodge without the price tag of Uganda&apos;s top-end properties. It is also a strong option for photographers — the waterhole, the birdlife, and the landscape all provide good material. Families with older children will appreciate the pool and the relaxed pace. And for travelers building a longer Uganda itinerary, it serves as an ideal one-or-two-night stop between Kampala and the western parks, breaking up what would otherwise be a very long drive.
          </p>
          <p>
            Compared to other lodges in the{" "}
            <Link href="/regions/lake-mburo" className="text-gold hover:underline">
              Lake Mburo area
            </Link>, Rwakobo Rock offers a distinctive combination of setting, atmosphere, and value. It is not trying to compete with luxury safari camps. Instead, it delivers something harder to manufacture: genuine character, an extraordinary natural position, and a pace of life that encourages you to slow down. At its price point, it represents solid value for money.
          </p>

          <p>
            For full details on rooms, rates, and how to book, see our{" "}
            <Link href="/lodges/lake-mburo/rwakobo-rock" className="text-gold hover:underline">
              Rwakobo Rock lodge listing
            </Link>. For more about the Lake Mburo region and other accommodation options nearby, visit our{" "}
            <Link href="/regions/lake-mburo" className="text-gold hover:underline">
              Lake Mburo guide
            </Link>.
          </p>
        </div>

        <RelatedArticles currentSlug="rwakobo-rock" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Interested in Staying at Rwakobo Rock?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We can help you plan your Lake Mburo stopover and connect it with the rest of your Uganda itinerary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lodges/lake-mburo/rwakobo-rock"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              View Lodge Details
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
