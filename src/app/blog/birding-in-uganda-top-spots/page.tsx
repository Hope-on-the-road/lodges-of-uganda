import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Birding in Uganda: 8 Best Spots for Birdwatching (2026 Guide)",
  description:
    "Uganda has 1,090+ bird species — more per square km than any other African country. Discover the 8 best birding spots from Bwindi to Mabamba Swamp.",
  alternates: {
    canonical: `${SITE_URL}/blog/birding-in-uganda-top-spots`,
  },
  openGraph: {
    title: "Birding in Uganda: 8 Best Spots for Birdwatching (2026 Guide)",
    description:
      "From shoebill storks on Lake Victoria to green-breasted pittas in Kibale — the definitive guide to Uganda&apos;s top birding destinations.",
    url: `${SITE_URL}/blog/birding-in-uganda-top-spots`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function BirdingInUgandaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Birding in Uganda: 8 Best Spots for Birdwatching (2026 Guide)",
    datePublished: "2026-06-13",
    description:
      "Uganda has 1,090+ bird species — more per square km than any other African country. Discover the 8 best birding spots from Bwindi to Mabamba Swamp.",
    url: `${SITE_URL}/blog/birding-in-uganda-top-spots`,
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
            <span className="text-olive-dark/80">Birding in Uganda</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">13 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Birding in Uganda: 8 Best Spots for Birdwatching
          </h1>
          <p className="text-cream/70 text-lg">
            With 1,090+ recorded species, Uganda packs more birds per square kilometer than any other African country. Here are the spots that matter most.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Uganda is not the first country most birders think of when planning an African trip. Kenya and Tanzania get the headlines. But consider the numbers: Uganda has over 1,090 confirmed bird species within a land area roughly the size of the United Kingdom. That concentration is unmatched anywhere on the continent. The reason is geography — Uganda sits at the intersection of East African savannah, West African Congo Basin rainforest, Albertine Rift montane forest, and extensive wetland systems. These overlapping habitats produce a species list that larger countries struggle to match.
          </p>
          <p>
            Whether you are chasing Albertine Rift endemics, the iconic shoebill stork, or simply want to add hundreds of species to your life list in a single trip, Uganda delivers. Here are the eight best birding spots in the country, with practical details on what to expect at each.
          </p>

          {/* 1. Bwindi */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            1. Bwindi Impenetrable National Park
          </h2>
          <p>
            Bwindi is famous for gorillas, but serious birders know it as one of the most important birding sites in Africa. The park holds over 350 bird species, including 23 Albertine Rift endemics — more than any other single site on the continent. The star species here include the African green broadbill, a stunning jewel of a bird found only in the Albertine Rift montane forests, and Grauer&apos;s rush warbler, a skulking species confined to highland swamps.
          </p>
          <p>
            The Ruhija sector is the best area for Albertine Rift endemics, with the bamboo zone and Mubwindi Swamp trail producing species like the handsome spurfowl, Rwenzori turaco, and Archer&apos;s ground robin. The Buhoma sector offers easier walking and is good for forest species like the black-billed turaco and white-tailed blue flycatcher.
          </p>
          <p>
            See lodges near the park in our{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi region guide</Link>.
          </p>

          {/* 2. Kibale */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            2. Kibale National Park
          </h2>
          <p>
            Kibale&apos;s lowland and mid-altitude rainforest supports 375+ bird species, making it one of the richest forest birding sites in East Africa. The green-breasted pitta is the headline act — a stunning, elusive ground-dwelling bird that is most vocal and visible during the rainy season (March to May and September to November). The great blue turaco, Africa&apos;s largest turaco species with its vivid blue and green plumage, is commonly seen in the forest canopy.
          </p>
          <p>
            Other key species include the African pitta, blue-headed bee-eater, yellow-spotted barbet, and the tiny chestnut-winged starling. The Bigodi Wetland Sanctuary (see below) is adjacent to Kibale and adds wetland specialists to the forest species.
          </p>
          <p>
            Browse accommodation options in our{" "}
            <Link href="/regions/kibale" className="text-gold hover:underline">Kibale region guide</Link>.
          </p>

          {/* 3. Murchison Falls */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            3. Murchison Falls National Park
          </h2>
          <p>
            Murchison Falls is Uganda&apos;s largest national park and offers a completely different birding experience — open savannah, riverine forest, and the papyrus-fringed Nile delta. The delta is one of the most reliable spots in Uganda for the shoebill stork, that prehistoric-looking bird that tops every birder&apos;s Uganda wish list. A boat trip to the delta from Paraa is the standard way to find them, and experienced boatmen know exactly where to look.
          </p>
          <p>
            The savannah grasslands hold Abyssinian ground hornbill, one of Africa&apos;s most impressive birds — a turkey-sized ground hornbill that stalks through the grass in pairs. Other notable species include the standard-winged nightjar (males trail spectacular wing streamers during breeding season), red-throated bee-eater colonies along the Nile banks, and Denham&apos;s bustard in the open plains.
          </p>
          <p>
            Find lodges in our{" "}
            <Link href="/regions/murchison-falls" className="text-gold hover:underline">Murchison Falls region guide</Link>.
          </p>

          {/* 4. Queen Elizabeth */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            4. Queen Elizabeth National Park
          </h2>
          <p>
            Queen Elizabeth holds the remarkable distinction of having 612 recorded bird species — the highest count of any single protected area in Africa. The diversity comes from the park&apos;s range of habitats: crater lakes, the Kazinga Channel, savannah, tropical forest in the Maramagambo sector, and wetlands.
          </p>
          <p>
            The Kazinga Channel boat trip is a birding highlight. This natural channel connecting Lake Edward and Lake George attracts enormous concentrations of waterbirds — African skimmer, pink-backed pelican, African fish eagle, malachite kingfisher, and colonies of pied and giant kingfishers along the banks. In the savannah areas, look for martial eagle, bateleur, and the striking grey crowned crane, Uganda&apos;s national bird.
          </p>
          <p>
            Explore lodges in our{" "}
            <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth region guide</Link>.
          </p>

          {/* 5. Semuliki */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            5. Semuliki National Park
          </h2>
          <p>
            Semuliki is Uganda&apos;s only true lowland tropical rainforest, an extension of the vast Ituri Forest of the Congo Basin. This makes it home to species found nowhere else in East Africa — Congo Basin birds that barely cross the border into Uganda. The Sempaya hot springs trail and the Kirumia River trail are the main birding routes.
          </p>
          <p>
            Target species include the Congo serpent eagle, Nkulengu rail (best found by call at dawn), black dwarf hornbill, red-billed dwarf hornbill, Lyre-tailed honeyguide, and the striking long-tailed hawk. The forest canopy birds here are genuinely different from what you find elsewhere in Uganda, making Semuliki essential for anyone building a comprehensive Uganda list.
          </p>

          {/* 6. Lake Mburo */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            6. Lake Mburo National Park
          </h2>
          <p>
            Lake Mburo is a small, underrated park just 3.5 hours from Kampala along the Masaka road. Its mix of acacia woodland, papyrus swamp, and lake shoreline supports over 350 bird species. The African finfoot, a shy and rarely seen waterbird, is regularly spotted on boat trips along the lake&apos;s fringed shores — Lake Mburo is one of the most reliable spots in Africa for this species.
          </p>
          <p>
            The papyrus swamps hold papyrus yellow warbler and papyrus gonolek, both papyrus specialists that require this specific habitat. The acacia woodland is good for brown parrot, bare-faced go-away-bird, and the striking crested barbet. A morning boat ride here is one of the best-value birding experiences in Uganda.
          </p>
          <p>
            See options in our{" "}
            <Link href="/regions/lake-mburo" className="text-gold hover:underline">Lake Mburo region guide</Link>.
          </p>

          {/* 7. Mabamba Swamp */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            7. Mabamba Swamp
          </h2>
          <p>
            If your primary goal is to see a shoebill stork, Mabamba Swamp is where you go. Located on the shores of Lake Victoria, about 50 km west of Kampala and easily reachable as a day trip from Entebbe, Mabamba is the most reliable shoebill spot in Africa. The success rate here is around 85-90% for morning trips.
          </p>
          <p>
            You explore the swamp by traditional canoe, paddled by local fishermen who know exactly where the shoebills are feeding. The experience is intimate — just you, the paddler, and the papyrus. Beyond shoebill, the swamp is excellent for blue-headed coucal, papyrus gonolek, and various herons and kingfishers. A typical trip takes 3-4 hours and can easily be combined with a visit to Entebbe Botanical Gardens on the same day.
          </p>

          {/* 8. Bigodi */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            8. Bigodi Wetland Sanctuary
          </h2>
          <p>
            Bigodi is a community-run wetland sanctuary on the edge of Kibale National Park, and it punches far above its weight as a birding site. The boardwalk trail through the papyrus swamp and adjacent forest regularly produces 100+ species in a single morning walk. The great blue turaco is almost guaranteed here — multiple pairs feed in the fig trees along the trail.
          </p>
          <p>
            Other highlights include white-spotted flufftail (heard more often than seen), grey-winged robin-chat, hairy-breasted barbet, and the spectacular Ross&apos;s turaco. What makes Bigodi special is that it is community-managed — entrance fees directly support the local community, and the local guides are exceptionally knowledgeable. A visit here pairs perfectly with chimpanzee tracking in Kibale.
          </p>

          {/* Best Time */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Best Time for Birding in Uganda
          </h2>
          <p>
            Uganda has excellent birding year-round, but the period from November to April is peak season. This is when Palearctic and intra-African migrants are present, swelling species counts significantly. March and April overlap with the rainy season, which means lusher vegetation and more active breeding behavior — forest species like the green-breasted pitta are most vocal during the rains. The dry months of June to August and December to February offer easier travel conditions and good resident birding.
          </p>

          {/* Gear */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Essential Birding Gear
          </h2>
          <p>
            Bring binoculars rated at 8x42 or 10x42 — anything less and you will struggle in the forest canopy. A copy of <em>Birds of East Africa</em> by Stevenson and Fanshawe is the standard field guide and is available in Kampala bookshops and at some lodge gift shops. Waterproof boots are essential for swamp habitats like Mabamba and Bigodi, and useful in the montane forests of Bwindi and Rwenzori where trails get muddy. A headlamp helps for pre-dawn walks targeting nightjars and owls.
          </p>

          {/* Guides */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Hiring a Birding Guide
          </h2>
          <p>
            A local birding guide is not optional — it is essential. Uganda&apos;s forests are dense, and many target species are identified by call before they are ever seen. A good guide knows the calls, knows the territories, and knows exactly which fruiting tree the turacos are visiting this week. Expect to pay $20-40 per guided walk at most national parks and birding sites. At places like Bwindi and Kibale, the guides are often local naturalists who have been birding these trails for decades. Tip generously when a guide produces your target species — these are skilled professionals.
          </p>

          {/* Lodges for Birders */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Best Lodges for Birders
          </h2>
          <p>
            Many Uganda lodges have excellent birding from the grounds themselves. In the{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi region</Link>,
            lodges in the Ruhija sector are surrounded by Albertine Rift endemic habitat. In{" "}
            <Link href="/regions/kibale" className="text-gold hover:underline">Kibale</Link>,
            properties near the Bigodi Wetland put you within walking distance of world-class wetland birding. At{" "}
            <Link href="/regions/murchison-falls" className="text-gold hover:underline">Murchison Falls</Link>,
            lodges on the south bank of the Nile offer birding from the riverbank. And at{" "}
            <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth</Link>,
            lodges along the Kazinga Channel have waterbirds visible from the dining terrace. For Mabamba Swamp, any accommodation in Entebbe works — the swamp is under two hours away by road and boat launch.
          </p>

          <p>
            Uganda may not have the name recognition of Kenya or Tanzania among birders, but those who make the trip come back with lists that surprise even themselves. With the right planning and a good guide, a two-week birding trip can realistically produce 500+ species.
          </p>
        </div>

        <RelatedArticles currentSlug="birding-in-uganda-top-spots" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Planning a Birding Trip to Uganda?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We can help you choose lodges near the best birding spots and plan a route that maximizes your species count.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lodge-finder"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Find Birding Lodges
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
