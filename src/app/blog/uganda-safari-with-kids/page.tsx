import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Uganda Safari with Kids: What Works and What Doesn't (Family Guide)",
  description:
    "Plan a family safari in Uganda with children. Age limits for gorilla and chimp trekking, best parks for kids, family lodges, health tips, and practical advice.",
  alternates: {
    canonical: `${SITE_URL}/blog/uganda-safari-with-kids`,
  },
  openGraph: {
    title: "Uganda Safari with Kids: What Works and What Doesn't (Family Guide)",
    description:
      "A practical guide to planning a Uganda family safari — age restrictions, kid-friendly parks, safe lodges, and what activities work for different ages.",
    url: `${SITE_URL}/blog/uganda-safari-with-kids`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function UgandaSafariWithKidsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Uganda Safari with Kids: What Works and What Doesn't (Family Guide)",
    datePublished: "2026-06-13",
    description:
      "A comprehensive family guide to Uganda safaris — age restrictions, best parks, family lodges, health advice, and practical tips for traveling with children.",
    url: `${SITE_URL}/blog/uganda-safari-with-kids`,
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
            <span className="text-olive-dark/80">Uganda Safari with Kids</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">13 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Uganda Safari with Kids
          </h1>
          <p className="text-cream/70 text-lg">
            What works, what doesn&apos;t, and how to plan a family safari that everyone enjoys — including the parents.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Uganda is not the first country most families think of for a safari with children. That is actually an advantage — fewer crowds, more personal attention from guides, and a genuine sense of adventure that older kids remember for the rest of their lives. But a family trip to Uganda requires more planning than a typical beach holiday. Some activities have strict age limits, some roads are long and rough, and malaria is a real consideration. This guide covers what you need to know before booking.
          </p>

          {/* Age Restrictions */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Age Restrictions You Cannot Negotiate
          </h2>
          <p>
            The biggest limitation for families in Uganda is the gorilla trekking age minimum. The Uganda Wildlife Authority requires all gorilla trekkers to be at least <strong>15 years old</strong> on the day of the trek. This is non-negotiable — there are no exceptions, no matter how mature or fit your child is. The rule exists to protect both the gorillas (who are susceptible to human diseases, and children are more likely to carry infections without symptoms) and the children themselves (treks can last 6-8 hours through steep, dense forest).
          </p>
          <p>
            Chimpanzee trekking in Kibale Forest has a minimum age of <strong>12 years</strong>. Again, this is strictly enforced at the park gate. Some lodges near Kibale offer informal chimp walks or primate nature walks with lower or no age restrictions — ask your lodge before booking.
          </p>
          <p>
            The good news: most other safari activities in Uganda have no age limit. Game drives, boat safaris, nature walks, and cultural visits are open to children of all ages, though common sense applies — a four-hour game drive with a two-year-old is going to test everyone&apos;s patience.
          </p>

          {/* Alternative to Gorilla Trekking */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Golden Monkey Trekking: The Under-15 Alternative
          </h2>
          <p>
            If your children are under 15 and you still want a primate trekking experience, consider <strong>golden monkey trekking</strong> in{" "}
            <Link href="/regions/mgahinga" className="text-gold hover:underline">Mgahinga Gorilla National Park</Link>. There is no age restriction for golden monkey treks, and the experience is genuinely exciting — these endangered monkeys are playful, fast-moving, and live in beautiful bamboo forest on the slopes of the Virunga Volcanoes. Permits cost $100 per person compared to $800 for gorilla permits, which also makes it easier on the family budget. The treks are typically shorter (2-4 hours) and less physically demanding than gorilla treks, making them suitable for active children aged 8 and above.
          </p>

          {/* Best Parks for Families */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Best National Parks for Families
          </h2>
          <p>
            Not every park in Uganda works equally well with children. Here are the three that consistently deliver great family experiences.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            Lake Mburo National Park
          </h3>
          <p>
            <Link href="/regions/lake-mburo" className="text-gold hover:underline">Lake Mburo</Link>{" "}
            is arguably Uganda&apos;s best park for young families. It is the closest savanna park to Entebbe and Kampala (about 3.5 hours by road), which means less time in the car. There are no lions, leopards are rarely seen, and there are no elephants, so guided <strong>walking safaris</strong> and <strong>horseback riding</strong> are available — activities that are impossible in parks with big predators. Children as young as 5 can do short horse rides with experienced guides. The park also offers boat trips on Lake Mburo where you can see hippos and crocodiles from a safe distance. Zebras, giraffes, and a variety of antelopes are easy to spot on relaxed game drives. It is a gentle introduction to the African bush.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            Queen Elizabeth National Park
          </h3>
          <p>
            <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth National Park</Link>{" "}
            offers the most varied experience. The <strong>Kazinga Channel boat cruise</strong> is the highlight for families — a two-hour trip along a waterway packed with hippos, elephants, buffalo, and hundreds of bird species. Children love it because the animals are close and the boat is stable enough to move around safely. Game drives on the Kasenyi Plains can turn up lions, and the Ishasha sector is famous for tree-climbing lions (though it adds 2-3 hours of driving from the main visitor areas). Queen Elizabeth also has the Katwe salt lake area, where you can take a cultural walk through the traditional salt mining community — a fascinating outing for older children.
          </p>

          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg pt-2">
            Murchison Falls National Park
          </h3>
          <p>
            <Link href="/regions/murchison-falls" className="text-gold hover:underline">Murchison Falls</Link>{" "}
            is Uganda&apos;s largest national park and delivers the most dramatic scenery. The <strong>boat trip to the base of the falls</strong> is unforgettable for any age — the Nile forces itself through a 7-meter gap in the rocks with enormous power. Game drives in the northern sector often turn up large herds of elephants, giraffes, and sometimes lions. The downside for families is the distance: Murchison Falls is about 5-6 hours from Entebbe by road, and internal distances within the park are large. Plan at least two full days here to avoid rushing.
          </p>

          {/* Activities Kids Love */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Activities That Work Well with Children
          </h2>
          <p>
            <strong>Boat safaris</strong> are the single best activity for families in Uganda. Children can move around, there is shade, and the wildlife viewing is consistently excellent. Both Queen Elizabeth (Kazinga Channel) and Murchison Falls (Nile boat trip) offer outstanding options.
          </p>
          <p>
            <strong>Ziwa Rhino Sanctuary</strong>, located between Kampala and Murchison Falls near Nakitoma, is a must-stop for families heading north. It is the only place in Uganda where you can see rhinoceros, and the guided walking safaris bring you within 15-20 meters of these animals. The walks are flat, typically 1-2 hours, and suitable for children aged 6 and above. It also breaks up the long drive to Murchison Falls perfectly.
          </p>
          <p>
            <strong>Cultural visits</strong> give children a sense of place beyond the wildlife. Many communities around Bwindi, Lake Bunyonyi, and Entebbe offer interactive experiences — banana beer brewing, traditional dance, school visits, and craft demonstrations. These work especially well for children aged 8-14 who are curious but not yet old enough for primate treks.
          </p>
          <p>
            <strong>Jinja</strong>, the adventure capital of East Africa, offers white-water rafting (minimum age 15 for the full course, but family-friendly routes exist for ages 10+), kayaking, and the source of the Nile boat trip. It is a good addition at the end of a safari for families with teenagers who need an adrenaline fix.
          </p>

          {/* Family Lodges */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Lodges with Family Rooms and Cottages
          </h2>
          <p>
            Not every lodge in Uganda welcomes young children, and some luxury camps have minimum age policies. Always check before booking. The best family lodges offer interconnected rooms or standalone cottages where the whole family can stay together. Look for properties with gardens or grounds where children can run around safely between game drives. Lodges near Lake Mburo and in the Queen Elizabeth area tend to be the most family-oriented, with some offering babysitting services, children&apos;s menus, and shorter &quot;junior ranger&quot; game drives. In the Murchison Falls area, several lodges have family cottages with multiple bedrooms and shared living areas — ideal for families who need space at the end of a long day.
          </p>

          {/* Health */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Health: Malaria, Vaccinations, and Safe Food
          </h2>
          <p>
            Uganda is a malaria zone, and this is the health concern that worries parents most. <strong>Malaria prophylaxis is essential for children</strong> — consult your travel doctor at least 6 weeks before departure. Malarone (atovaquone-proguanil) is commonly prescribed for children and is well-tolerated. Use DEET-based insect repellent (20-30% concentration for children over 2 months) and dress children in long sleeves and trousers from late afternoon onward. Most safari lodges provide mosquito nets, but bringing your own clip-on net for the car seat is a smart precaution.
          </p>
          <p>
            <strong>Yellow fever vaccination</strong> is mandatory for entry to Uganda. Children from 9 months can receive it. Routine vaccinations (hepatitis A and B, typhoid, tetanus) should be up to date. Ask your doctor about rabies vaccination if your children are likely to interact with animals.
          </p>
          <p>
            For food safety, stick to cooked meals, drink bottled water only, and avoid raw salads outside of established lodges. Most reputable lodges maintain high hygiene standards and can accommodate children&apos;s dietary needs if informed in advance.
          </p>

          {/* Practical Tips */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Practical Tips for the Road
          </h2>
          <p>
            <strong>Car seats:</strong> Do not expect your tour operator to provide one. Bring your own lightweight travel car seat or booster from home. Roads in Uganda are rough, and an unsecured child in a safari vehicle on a potholed road is a genuine safety risk. Most safari vehicles are Toyota Land Cruisers with standard seatbelts in the rear.
          </p>
          <p>
            <strong>Driving times:</strong> Distances in Uganda are measured in hours, not kilometers. Entebbe to Queen Elizabeth is about 6 hours. Entebbe to Bwindi is 8-10 hours (usually split over two days with a stop at Lake Mburo or Lake Bunyonyi). Plan for no more than 4-5 hours of driving per day with young children, and build in stops at markets, viewpoints, or the Equator crossing near Kayabwe for photos.
          </p>
          <p>
            <strong>Entertainment for long drives:</strong> Download audiobooks and shows to a tablet before you leave — mobile data is unreliable outside cities. Pack a small bag of travel games, snacks, and wet wipes within arm&apos;s reach. Window seats with the pop-up roof open keep children engaged surprisingly well once you are inside a national park.
          </p>
          <p>
            A family safari in Uganda takes more planning than a standard trip, but the payoff is enormous. Children who see mountain gorillas, ride horses past zebras at Lake Mburo, or watch the Nile thunder through Murchison Falls come home with stories no theme park can compete with. Start planning early, choose age-appropriate activities, and give everyone — including yourself — room to enjoy the experience at a pace that works.
          </p>
        </div>

        <RelatedArticles currentSlug="uganda-safari-with-kids" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Planning a Family Safari in Uganda?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We help families choose the right parks, lodges, and activities for their children&apos;s ages. Tell us about your family and we will suggest an itinerary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/regions/queen-elizabeth"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Explore Family-Friendly Parks
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
