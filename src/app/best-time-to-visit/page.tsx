import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Time to Visit Uganda | Season Guide 2026",
  description:
    "When is the best time to visit Uganda? Month-by-month guide covering gorilla trekking seasons, wildlife safaris, birding, weather, and practical travel tips.",
  alternates: { canonical: `${SITE_URL}/best-time-to-visit` },
  openGraph: {
    title: "Best Time to Visit Uganda | Season Guide 2026",
    description:
      "Month-by-month guide to Uganda's seasons. Plan gorilla trekking, wildlife safaris, and birding around the weather.",
    url: `${SITE_URL}/best-time-to-visit`,
    type: "article",
  },
};

export default function BestTimeToVisitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best time to visit Uganda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uganda is a year-round destination, but the two dry seasons — June to August and December to February — are generally considered the best times to visit. These months offer drier trails for gorilla trekking and better wildlife viewing as animals gather near water sources.",
        },
      },
      {
        "@type": "Question",
        name: "Can you do gorilla trekking in the rainy season?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, gorilla trekking is available year-round in Uganda. The rainy season (March to May and September to November) can make trails muddier and more challenging, but permits are often easier to book and the forest is lush and beautiful.",
        },
      },
      {
        "@type": "Question",
        name: "When is the best time for birding in Uganda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The wet seasons, particularly November to April, are best for birding in Uganda. Migratory birds from Europe and northern Africa are present, and resident species are in breeding plumage, making it easier to spot a wide variety of species.",
        },
      },
      {
        "@type": "Question",
        name: "How hot does it get in Uganda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uganda sits on the equator and has a moderate tropical climate. Temperatures typically range from 20°C to 30°C (68°F to 86°F) in lowland areas. Highland regions like Bwindi and the Rwenzori Mountains are cooler, with temperatures dropping to 10–15°C at higher altitudes.",
        },
      },
      {
        "@type": "Question",
        name: "Are Uganda's roads worse in the rainy season?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some roads in rural areas, particularly unpaved routes to national parks, can become difficult during heavy rains. The main tarmac roads between Kampala and major destinations remain passable. A 4x4 vehicle is recommended year-round but is especially important during the wet season.",
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
            <span className="text-olive-dark/80">Best Time to Visit Uganda</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Best Time to Visit Uganda
          </h1>
          <p className="text-cream/70 text-lg">
            A month-by-month guide to seasons, weather, and the best times for gorilla trekking, wildlife safaris, and birding.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Overview */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Uganda Is a Year-Round Destination
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Uganda sits directly on the equator, which means there are no extreme seasonal temperature swings. Instead of a traditional summer and winter, Uganda has two dry seasons and two wet seasons. The country&apos;s altitude — much of it lies above 1,000 metres — keeps temperatures comfortable throughout the year, typically between 20°C and 30°C in lowland areas.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            Because of this mild, stable climate, you can visit Uganda any month of the year. However, different seasons favour different activities. Understanding the weather patterns helps you plan a trip that matches what you want to see and do.
          </p>
        </section>

        {/* Seasons */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Uganda&apos;s Four Seasons
          </h2>

          <div className="space-y-6">
            <div className="bg-cream/50 rounded-xl p-6 border border-sand/50">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg mb-2">
                Dry Season: June to August
              </h3>
              <p className="text-olive-dark/80 text-sm leading-relaxed">
                This is one of the two peak travel periods. Rainfall is minimal across most of the country, trails in Bwindi are drier, and wildlife concentrates around water sources in the savanna parks. Temperatures are pleasant and comfortable. This is the most popular time for gorilla trekking and safari combinations.
              </p>
            </div>

            <div className="bg-cream/50 rounded-xl p-6 border border-sand/50">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg mb-2">
                Light Rainy Season: September to November
              </h3>
              <p className="text-olive-dark/80 text-sm leading-relaxed">
                Short afternoon showers are common, but mornings are usually clear. This season is excellent for birding as migratory species begin arriving. Gorilla permits are easier to book, and lodges may offer lower rates. The landscape is green and lush, making for beautiful photographs.
              </p>
            </div>

            <div className="bg-cream/50 rounded-xl p-6 border border-sand/50">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg mb-2">
                Dry Season: December to February
              </h3>
              <p className="text-olive-dark/80 text-sm leading-relaxed">
                The second dry season coincides with the European winter, making it popular with travellers escaping cold weather at home. Conditions are similar to June–August: dry trails, good game viewing, and comfortable temperatures. December and January are especially busy — book permits and lodges well ahead.
              </p>
            </div>

            <div className="bg-cream/50 rounded-xl p-6 border border-sand/50">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg mb-2">
                Heavy Rainy Season: March to May
              </h3>
              <p className="text-olive-dark/80 text-sm leading-relaxed">
                This is the wettest period. Rain can be heavy and prolonged, particularly in April. Unpaved roads in remote areas can become challenging, and some trails may be slippery. However, this is the quietest season for tourism, meaning fewer crowds, easier permit availability, and often lower lodge rates. Birding remains excellent.
              </p>
            </div>
          </div>
        </section>

        {/* Gorilla Trekking */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Gorilla Trekking
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Gorilla trekking in Bwindi Impenetrable National Park and Mgahinga Gorilla National Park is available every day of the year. The gorillas do not migrate — they live in the forest year-round — so sightings are not affected by season.
          </p>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            The dry seasons (June–August and December–February) are the most comfortable times to trek. Trails are less muddy, footing is more secure, and the experience is physically easier. During the rainy season, treks can be muddier and more strenuous, but many experienced trekkers actually prefer this — the forest is at its most alive, and you are more likely to see the gorillas feeding at lower altitudes.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            <strong>Recommendation:</strong> Dry season for first-time trekkers or those who prefer easier conditions. Wet season for experienced hikers who want quieter trails and potentially closer gorilla encounters.
          </p>
        </section>

        {/* Wildlife Safaris */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Wildlife Safaris
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Uganda&apos;s savanna parks — Queen Elizabeth National Park, Murchison Falls National Park, and Kidepo Valley National Park — offer the best game viewing during the dry seasons. When water is scarce, animals congregate around rivers, lakes, and waterholes, making them easier to spot.
          </p>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            The dry season also means shorter grass, improving visibility on game drives. Tree-climbing lions in the Ishasha sector of Queen Elizabeth are visible year-round, but dry-season conditions make locating them simpler.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            <strong>Recommendation:</strong> June to August or December to February for the best wildlife safari experience. Combine with gorilla trekking for a complete Uganda itinerary.
          </p>
        </section>

        {/* Birding */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Birding
          </h2>
          <p className="text-olive-dark/80 leading-relaxed mb-4">
            Uganda is one of Africa&apos;s top birding destinations, with over 1,000 recorded species. The wet season — particularly November to April — is the prime birding period. Migratory birds from Europe and northern Africa arrive during this window, boosting species counts significantly. Resident birds are also in breeding plumage, making identification easier.
          </p>
          <p className="text-olive-dark/80 leading-relaxed">
            <strong>Recommendation:</strong> November to April for serious birders. Key birding areas include Bwindi, Kibale Forest, Queen Elizabeth, and the Mabamba Swamp near Entebbe for the iconic Shoebill Stork.
          </p>
        </section>

        {/* Practical Tips */}
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">
            Practical Tips
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg mb-2">What to Pack</h3>
              <p className="text-olive-dark/80 text-sm leading-relaxed">
                Regardless of the season, pack layers. Mornings and evenings can be cool, especially in highland areas like Bwindi (1,500–2,600m altitude). A waterproof jacket is essential year-round — even dry seasons can have occasional showers. For gorilla trekking, waterproof hiking boots with good ankle support, long trousers, gardening gloves for grabbing vegetation on steep slopes, and gaiters are recommended.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg mb-2">Road Conditions</h3>
              <p className="text-olive-dark/80 text-sm leading-relaxed">
                Uganda&apos;s main highways are tarmac and passable year-round. However, many national park access roads are unpaved. During the heavy rainy season (March–May), these can become muddy and slow. A 4x4 vehicle is strongly recommended at all times and is essential during the rains. Travel times to parks like Bwindi or Kidepo can increase by several hours in wet conditions.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-forest text-lg mb-2">Booking Ahead</h3>
              <p className="text-olive-dark/80 text-sm leading-relaxed">
                Gorilla permits and popular lodges sell out months in advance for the dry seasons. If you plan to visit during June–August or December–February, book at least three to six months ahead. Wet season travel is easier to arrange on shorter notice.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Planning Your Uganda Trip?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Need help choosing the right season or finding a lodge that fits your travel dates? We are happy to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lodge-finder"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Find Your Lodge
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
