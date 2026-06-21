import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Kazinga Channel Boat Safari: What to Expect (Complete Guide)",
  description:
    "Everything you need to know about the Kazinga Channel boat cruise — hippos, elephants, 600+ bird species, UWA vs private boats, best times, and nearby lodges.",
  alternates: {
    canonical: `${SITE_URL}/blog/boat-safari-kazinga-channel-guide`,
  },
  openGraph: {
    title: "Kazinga Channel Boat Safari: What to Expect (Complete Guide)",
    description:
      "A complete guide to the Kazinga Channel boat cruise in Queen Elizabeth National Park — wildlife, timing, costs, and which lodges have the best access.",
    url: `${SITE_URL}/blog/boat-safari-kazinga-channel-guide`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function KazingaChannelBoatSafariPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Kazinga Channel Boat Safari: What to Expect (Complete Guide)",
    datePublished: "2026-06-13",
    description:
      "Everything you need to know about the Kazinga Channel boat cruise — hippos, elephants, bird species, costs, timing, and nearby lodges in Queen Elizabeth National Park.",
    url: `${SITE_URL}/blog/boat-safari-kazinga-channel-guide`,
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
            <span className="text-olive-dark/80">Kazinga Channel Boat Safari</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">13 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Kazinga Channel Boat Safari: What to Expect
          </h1>
          <p className="text-cream/70 text-lg">
            A 32-kilometre waterway connecting two great lakes, packed with hippos, elephants, and over 600 bird species. Here is everything you need to know before you go.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            If you visit Queen Elizabeth National Park, the Kazinga Channel boat cruise is the one activity you should not skip. It is consistently rated as one of the most rewarding wildlife experiences in Uganda, and for good reason — nowhere else on a Ugandan safari do you get this close to this many animals from the comfort of a boat.
          </p>

          {/* What is the Kazinga Channel */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            What Is the Kazinga Channel?
          </h2>
          <p>
            The Kazinga Channel is a 32-kilometre natural waterway that connects Lake Edward to the west and Lake George to the east. It runs through the heart of Queen Elizabeth National Park in western Uganda, roughly at the equator. The channel is not a river — it has no current of its own. Water flows gently between the two lakes depending on their relative levels, creating a wide, calm body of water that rarely exceeds 2 to 3 metres in depth.
          </p>
          <p>
            This shallow, nutrient-rich water supports one of the highest concentrations of hippos in Africa. The channel&apos;s banks are lined with grassland and low scrub, drawing elephants, buffalo, and waterbuck to the waterline throughout the day. For birds, it is a paradise — the channel and its surrounding wetlands host over 600 recorded species, making Queen Elizabeth National Park one of the most bird-diverse protected areas on the continent.
          </p>

          {/* Boat Cruise Details */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            How the Boat Cruise Works
          </h2>
          <p>
            Boat cruises depart from the Mweya Peninsula, a narrow finger of land that juts out between the Kazinga Channel and Lake Edward. The jetty is located just below the Mweya Safari Lodge, about a 10-minute drive from the main park road. There are two scheduled departure times each day: a morning cruise (typically 9:00 AM) and an afternoon cruise (typically 3:00 PM or 4:00 PM depending on the season).
          </p>
          <p>
            Each cruise lasts approximately 2 to 3 hours. The boat heads east along the channel toward Lake George, cruising close to both the northern and southern banks where animals gather. The pace is slow and deliberate — the captain knows where the hippo pods congregate and where elephants tend to come down to drink. You will make several stops to observe wildlife before turning back toward Mweya.
          </p>
          <p>
            No prior booking is needed for the UWA (Uganda Wildlife Authority) community boats — you simply show up at the jetty at least 30 minutes before departure. Boats hold 40 to 60 passengers, though they rarely fill completely outside peak season (July to September and December to February).
          </p>

          {/* Wildlife */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Wildlife You Will See
          </h2>
          <p>
            <strong>Hippos:</strong> The Kazinga Channel is home to one of the largest hippo populations in Africa — estimates put the number at several thousand. You will see them in pods of 20 to 50 animals, sometimes more, resting in the shallow water with just their ears and eyes above the surface. The boat approaches to within 10 to 15 metres, close enough to hear them grunt and snort.
          </p>
          <p>
            <strong>Elephants:</strong> Herds of elephants regularly come to the channel&apos;s edge to drink and bathe. Seeing a family group of elephants wading into the water while your boat drifts past is one of those unforgettable safari moments. This is most common in the dry season when other water sources are scarce.
          </p>
          <p>
            <strong>Buffalo:</strong> Large herds of Cape buffalo graze on the channel banks, often in groups of 50 to 100 animals. They are remarkably relaxed around the boats.
          </p>
          <p>
            <strong>Nile crocodiles:</strong> You will spot crocodiles basking on sandy banks, sometimes several at once. They range from juveniles to large adults exceeding 3 metres.
          </p>
          <p>
            <strong>Birds:</strong> This is where the Kazinga Channel truly excels. African fish eagles perch in trees along the banks and hunt over the water — their distinctive call is the soundtrack to the cruise. Pied kingfishers hover and dive. Great white pelicans fish in coordinated groups. You will also see yellow-billed storks, African spoonbills, goliath herons, malachite kingfishers, saddle-billed storks, and dozens of other species. Serious birders have recorded over 100 species in a single boat cruise.
          </p>

          {/* UWA vs Private */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            UWA Community Boat vs Private Launch
          </h2>
          <p>
            You have two options for the cruise, and the difference matters:
          </p>
          <p>
            <strong>UWA community boat — $30 per person.</strong> This is the standard option. The boats are large, open-sided vessels with bench seating and a roof for shade. A guide provides commentary on the wildlife. It is good value and the experience is perfectly enjoyable, but you share the boat with other visitors and have limited control over where the boat stops or how long it lingers.
          </p>
          <p>
            <strong>Private charter — $200 to $400 per boat.</strong> Several operators and lodges offer private launches that seat 8 to 12 passengers. A private boat gives you flexibility: you can ask the captain to linger at a hippo pod, spend extra time watching a fishing eagle, or follow a herd of elephants along the bank. The boats are generally more comfortable, with cushioned seats and sometimes a cooler with drinks. If you are a photographer, a private charter is worth the extra cost — you can position the boat for better light and there is no jostling for space.
          </p>
          <p>
            Most lodges on the Mweya Peninsula can arrange private charters with a day&apos;s notice. Ask when you book your accommodation.
          </p>

          {/* Best Time */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Best Time of Day for the Cruise
          </h2>
          <p>
            The afternoon cruise (departing around 3:00 PM) is generally the better option. By mid-afternoon, the heat of the day drives more animals to the water. Elephants are more likely to be at the channel&apos;s edge, hippo pods are more active, and buffalo herds move down from the plains. The light between 4:00 PM and 5:30 PM is also significantly better for photography — warm, golden, and side-lit rather than the harsh overhead light of midday.
          </p>
          <p>
            The morning cruise has its own advantages: fewer tourists, calmer water, and excellent birding as species are most active in the early hours. If birding is your priority, take the morning departure.
          </p>
          <p>
            If you have two days at Queen Elizabeth National Park, take both cruises. They feel like different experiences.
          </p>

          {/* What to Bring */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            What to Bring
          </h2>
          <p>
            The Kazinga Channel sits at the equator, so sun exposure is intense even when it does not feel hot. Bring sunscreen (SPF 50+), a wide-brimmed hat, and sunglasses. There is a roof on the UWA boats, but the afternoon sun still gets under it at certain angles.
          </p>
          <p>
            For photography, a zoom lens in the 100-400mm range is ideal. Animals are close, but the best shots — a fish eagle diving, a crocodile sliding into the water — require reach. Bring a second lens or a phone for wide shots of the channel landscape. Binoculars are essential for birding, even though many species are visible to the naked eye.
          </p>
          <p>
            Bring water. The UWA boats do not sell refreshments. A light rain jacket is wise during the wet season (March to May, October to November), as afternoon showers can roll in quickly from Lake Edward.
          </p>

          {/* Combining with Game Drives */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Combining with Game Drives on the Kasenyi Plains
          </h2>
          <p>
            The Kasenyi Plains lie just north of the Kazinga Channel and offer some of the best game driving in Queen Elizabeth National Park. This is where you are most likely to see the park&apos;s famous tree-climbing lions — they rest in fig trees during the heat of the day. The plains are also excellent for Uganda kob, topi, warthog, and leopard.
          </p>
          <p>
            A typical day at Queen Elizabeth combines a morning game drive on the Kasenyi Plains with an afternoon boat cruise on the Kazinga Channel. This gives you two completely different perspectives on the park&apos;s wildlife in a single day — savanna plains in the morning, waterway in the afternoon. Most tour operators and lodges structure their itineraries exactly this way.
          </p>

          {/* Lodges */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Best Lodges for Kazinga Channel Access
          </h2>
          <p>
            The lodges on the Mweya Peninsula have the most convenient access to the boat jetty — some are within walking distance. Staying on the peninsula also means you wake up surrounded by the channel&apos;s wildlife: hippos graze on the lodge lawns at night, and warthogs trot through at breakfast.
          </p>
          <p>
            Lodges along the channel&apos;s northern bank and in the broader Queen Elizabeth area also offer easy access, typically a 15 to 30 minute drive to the Mweya jetty. For a full guide to accommodation options in and around Queen Elizabeth National Park, including lodges on the Mweya Peninsula and in the Ishasha sector for tree-climbing lions, see our{" "}
            <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth National Park region guide</Link>.
          </p>
          <p>
            If you are planning a broader Uganda itinerary, Queen Elizabeth pairs naturally with{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi Impenetrable National Park</Link>{" "}
            for gorilla trekking (3 to 4 hours south) and{" "}
            <Link href="/regions/kibale" className="text-gold hover:underline">Kibale National Park</Link>{" "}
            for chimpanzee tracking (2 to 3 hours north).
          </p>
        </div>

        <RelatedArticles currentSlug="boat-safari-kazinga-channel-guide" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Planning a Visit to Queen Elizabeth National Park?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We can help you find the right lodge near the Kazinga Channel and plan your game drives and boat cruise. Just send us a message.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/regions/queen-elizabeth"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Explore Queen Elizabeth Lodges
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
