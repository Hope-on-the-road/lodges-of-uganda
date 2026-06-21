import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Golden Monkey Trekking in Mgahinga: Everything You Need to Know",
  description:
    "Complete guide to golden monkey trekking in Mgahinga Gorilla National Park. Permits, trek details, best time, how to combine with gorilla trekking in Uganda.",
  alternates: {
    canonical: `${SITE_URL}/blog/golden-monkey-trekking-mgahinga`,
  },
  openGraph: {
    title: "Golden Monkey Trekking in Mgahinga: Everything You Need to Know",
    description:
      "Golden monkey trekking in Mgahinga — permits at $100, bamboo forest treks, and how to combine with gorilla trekking in southwestern Uganda.",
    url: `${SITE_URL}/blog/golden-monkey-trekking-mgahinga`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function GoldenMonkeyTrekkingMgahinaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Golden Monkey Trekking in Mgahinga: Everything You Need to Know",
    datePublished: "2026-06-13",
    description:
      "A comprehensive guide to golden monkey trekking in Mgahinga Gorilla National Park — permits, difficulty, best time to visit, and combining with gorilla trekking.",
    url: `${SITE_URL}/blog/golden-monkey-trekking-mgahinga`,
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
            <span className="text-olive-dark/80">Golden Monkey Trekking in Mgahinga</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">13 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Golden Monkey Trekking in Mgahinga
          </h1>
          <p className="text-cream/70 text-lg">
            Everything you need to know about trekking one of Africa&apos;s most beautiful and endangered primates in Uganda&apos;s smallest national park.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Golden monkey trekking is one of Uganda&apos;s best-kept wildlife experiences. It costs a fraction of gorilla trekking, takes less time, and delivers an encounter with one of Africa&apos;s most visually striking primates. Yet most visitors to southwestern Uganda drive straight past Mgahinga Gorilla National Park on their way to Bwindi without stopping. That is a mistake. Here is everything you need to plan a golden monkey trek.
          </p>

          {/* What Are Golden Monkeys */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            What Are Golden Monkeys?
          </h2>
          <p>
            The golden monkey (<em>Cercopithecus kandti</em>) is a subspecies of the blue monkey found only in the Virunga Volcanoes — the chain of eight volcanic peaks that straddle the borders of Uganda, Rwanda, and the Democratic Republic of Congo. They are named for the bright orange-gold patches on their backs, flanks, and cheeks, which contrast sharply with their dark faces and limbs. An adult golden monkey weighs about 4-6 kilograms, and they live in groups of 30 to 80 individuals.
          </p>
          <p>
            The species is classified as <strong>Endangered</strong> by the IUCN, with an estimated population of only about 5,000 individuals remaining. Their habitat is restricted to a narrow band of bamboo and montane forest between 2,500 and 3,500 meters altitude on the Virunga slopes. Habitat loss from agriculture and charcoal production is their primary threat, along with illegal snares set for other animals.
          </p>
          <p>
            Golden monkeys are fast, acrobatic, and social. Unlike gorillas, which sit and feed calmly while you observe, golden monkeys are in constant motion — leaping through bamboo, chasing each other, and grooming in brief pauses. The experience is more dynamic and energetic than gorilla trekking, which some visitors actually prefer.
          </p>

          {/* Location */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Where: Mgahinga Gorilla National Park
          </h2>
          <p>
            <Link href="/regions/mgahinga" className="text-gold hover:underline">Mgahinga Gorilla National Park</Link>{" "}
            is Uganda&apos;s smallest national park at just 33.7 square kilometers, located in the extreme southwestern corner of the country in Kisoro District. The park protects the Ugandan slopes of three Virunga Volcanoes: <strong>Mount Muhabura</strong> (4,127m), <strong>Mount Gahinga</strong> (3,474m), and <strong>Mount Sabyinyo</strong> (3,669m). The landscape is extraordinary — dense bamboo forest gives way to hagenia woodland and eventually alpine moorland as you climb higher. On clear mornings, the volcanic peaks rise dramatically above the mist.
          </p>
          <p>
            The nearest town is <strong>Kisoro</strong>, a small but lively trading center about 14 kilometers from the park gate. Kisoro has a small airstrip served by Aerolink Uganda (flights from Entebbe and Kihihi), making it possible to fly in rather than drive. By road, Kisoro is approximately 1 hour from Buhoma (the main Bwindi gateway), 2 hours from Kabale, and about 9-10 hours from Entebbe via the southwestern highway through Kabale.
          </p>

          {/* Permits */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Permits and Cost
          </h2>
          <p>
            A golden monkey trekking permit costs <strong>$100 per person</strong> for foreign non-residents — one of the best wildlife values in East Africa. Compare that to $800 for a gorilla permit in Uganda or $1,500 in Rwanda, and the math speaks for itself. East African residents pay $60, and Ugandan citizens pay UGX 40,000.
          </p>
          <p>
            Permits are purchased through the Uganda Wildlife Authority (UWA) and can be booked via your tour operator or directly at the UWA offices in Kampala or at the Mgahinga park gate. Unlike gorilla permits, golden monkey permits are rarely sold out — you can usually secure one with just a few days&apos; notice, even in high season. That said, only one habituated group is visited per day with a maximum of 15 trekkers, so booking at least a week in advance during July-August and December-January is prudent.
          </p>

          {/* Trek Details */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            The Trek: What to Expect
          </h2>
          <p>
            Golden monkey treks start at the Ntebeko park gate each morning with a briefing at 8:00 AM. Trackers go out before dawn to locate the monkey group, and they radio the position back to the rangers who guide visitors. Once the briefing is complete, your group sets off into the bamboo forest.
          </p>
          <p>
            The trek typically takes <strong>2-4 hours round trip</strong>, including one hour of observation time with the monkeys. On some days, the group is feeding close to the park boundary and you reach them in 30 minutes. Other days, they are deeper in the forest and it takes 90 minutes of walking. The trail winds through dense bamboo — the same habitat the monkeys depend on for food (they eat young bamboo shoots, leaves, fruits, and occasional insects).
          </p>
          <p>
            The altitude is around <strong>2,800 meters</strong>, which means the air is thinner than most visitors are used to. The terrain is moderately hilly with some slippery patches, especially after rain. Sturdy hiking boots with good ankle support are essential. The difficulty level is moderate — easier than most gorilla treks in Bwindi, but not a flat walk by any means. Reasonably fit adults and active children aged 8 and above can manage it comfortably.
          </p>
          <p>
            <strong>What to bring:</strong> Long trousers (bamboo can scratch), long-sleeved shirt, waterproof jacket (rain is frequent at this altitude), hiking boots, gardening gloves for grabbing bamboo as you walk, water, and a camera with a fast lens if you have one — golden monkeys move quickly and the bamboo forest is often dim.
          </p>

          {/* Best Time */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Best Time to Trek
          </h2>
          <p>
            Golden monkey trekking is available <strong>year-round</strong>. The drier months — June to September and December to February — offer the most comfortable hiking conditions. The long rains (March-May) make the trails muddier and the bamboo forest more slippery, but the monkeys are still tracked daily and the forest is lush and atmospheric. Mornings are always best for viewing, as the monkeys are most active when feeding in the early hours. By midday they tend to rest in the canopy and are harder to observe.
          </p>

          {/* Combining with Gorilla Trekking */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Combining with Gorilla Trekking
          </h2>
          <p>
            One of the best things about Mgahinga is that it offers both gorilla and golden monkey trekking in the same park. Many visitors do a gorilla trek one morning and a golden monkey trek the next — two completely different primate experiences in the same volcanic forest. Mgahinga has one habituated gorilla group (the Nyakagezi family), so gorilla permits here are limited and sell out quickly.
          </p>
          <p>
            An equally popular combination is <strong>golden monkey trekking in Mgahinga plus gorilla trekking in Bwindi</strong>. Since Kisoro is only about an hour&apos;s drive from Buhoma (the main Bwindi gateway), you can easily do golden monkeys one day and drive to Bwindi for gorillas the next. This combination gives you two of Uganda&apos;s top three primate experiences within 48 hours.
          </p>
          <p>
            For families with children under 15, golden monkey trekking is an excellent alternative to gorilla trekking — there is no minimum age restriction, and the shorter trek duration is better suited to younger hikers.
          </p>

          {/* Batwa Trail */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            The Batwa Trail: A Cultural Add-On
          </h2>
          <p>
            If you have a second day in Mgahinga, the <strong>Batwa Trail</strong> is one of Uganda&apos;s most compelling cultural experiences. The Batwa are the original forest-dwelling people of the Virunga region, displaced from the forest when the national park was gazetted. Today, Batwa guides lead visitors through the forest to demonstrate how they lived for thousands of years — showing traditional hunting techniques, gathering medicinal plants, making fire, and performing songs in a cave that served as their ceremonial shelter. The experience is moving and respectful, and proceeds support the Batwa community directly.
          </p>
          <p>
            The Batwa Trail takes about 3-4 hours and costs $80 per person. It can be done in the afternoon after a morning golden monkey trek, making for a full and rewarding day at Mgahinga.
          </p>

          {/* Getting There */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            How to Get to Mgahinga
          </h2>
          <p>
            <strong>By air:</strong> Fly from Entebbe to Kisoro airstrip (about 1.5 hours) with Aerolink Uganda. The airstrip is approximately 30 minutes from the park gate by road. This is the most comfortable option and avoids a very long drive.
          </p>
          <p>
            <strong>By road from Bwindi:</strong> If you are already in the Buhoma area for gorilla trekking, the drive to Kisoro and Mgahinga takes about 1-1.5 hours via Butogota. The road is unpaved but manageable with a 4WD vehicle.
          </p>
          <p>
            <strong>By road from Entebbe/Kampala:</strong> The drive takes 9-10 hours via Mbarara and Kabale. Most travelers break this journey with a night at Lake Bunyonyi or in Kabale. Alternatively, you can enter via Kigali, Rwanda — the Cyanika border crossing is about 15 kilometers from Kisoro, making a Uganda-Rwanda combination trip very practical.
          </p>

          {/* Where to Stay */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Where to Stay
          </h2>
          <p>
            Accommodation options near Mgahinga range from budget guesthouses in Kisoro town to comfortable lodges closer to the park. Several properties sit on the road between Kisoro and the park gate, offering volcano views and easy access to the morning briefing. For those combining Mgahinga with Bwindi, lodges around Lake Mutanda (between the two parks) offer a stunning setting as a base for both. Check our{" "}
            <Link href="/regions/mgahinga" className="text-gold hover:underline">Mgahinga region guide</Link>{" "}
            for detailed lodge listings and recommendations.
          </p>
          <p>
            Golden monkey trekking in Mgahinga is one of those rare wildlife experiences that delivers more than you expect for less than you budgeted. It is accessible, affordable, and genuinely thrilling. Whether you combine it with gorilla trekking or visit Mgahinga specifically for the golden monkeys, it deserves a place on any Uganda itinerary.
          </p>
        </div>

        <RelatedArticles currentSlug="golden-monkey-trekking-mgahinga" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Ready to Trek Golden Monkeys?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We can help you find the right lodge near Mgahinga and combine golden monkey trekking with gorilla trekking in Bwindi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/regions/mgahinga"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Explore Mgahinga Lodges
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
