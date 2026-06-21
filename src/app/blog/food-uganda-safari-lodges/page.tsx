import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

const SUPABASE_IMG = "https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails";

export const metadata: Metadata = {
  title: "Food at Uganda Safari Lodges: What to Expect",
  description:
    "What you'll eat at safari lodges in Uganda's national parks — from Bwindi to Queen Elizabeth. Meal styles, local dishes, dietary options, and first-hand experience.",
  alternates: {
    canonical: `${SITE_URL}/blog/food-uganda-safari-lodges`,
  },
  openGraph: {
    title: "Food at Uganda Safari Lodges: What to Expect",
    description:
      "A practical guide to food at Uganda's safari lodges — local dishes, meal routines, dietary needs, and what surprised us after 6 visits.",
    url: `${SITE_URL}/blog/food-uganda-safari-lodges`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function FoodUgandaSafariLodgesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Food at Uganda Safari Lodges: What to Expect",
      datePublished: "2026-06-17",
      description:
        "A practical guide to food at Uganda's safari lodges — local dishes, meal routines, dietary needs, and first-hand experience from 6 visits.",
      url: `${SITE_URL}/blog/food-uganda-safari-lodges`,
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What food do Uganda safari lodges serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most Uganda safari lodges serve a mix of Ugandan and international dishes. Expect matoke (steamed green bananas), beans, groundnut sauce, and chapati alongside pasta, grilled meats, and fresh salads. Breakfast typically includes fresh tropical fruit, eggs, toast, and Ugandan coffee. Meals are usually three courses at mid-range and luxury lodges.",
          },
        },
        {
          "@type": "Question",
          name: "Can safari lodges in Uganda accommodate dietary requirements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, most lodges accommodate vegetarian, vegan, gluten-free, and other dietary needs with advance notice. Inform your tour operator or the lodge at least 2-3 days before arrival. Luxury lodges handle this routinely; budget lodges need more notice but are generally willing to adapt.",
          },
        },
        {
          "@type": "Question",
          name: "Is the food safe to eat at Uganda safari lodges?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lodge food is safe. Established lodges maintain proper food hygiene, use filtered or boiled water for cooking, and source fresh ingredients regularly. Stick to bottled or filtered water for drinking. Street food outside lodges carries more risk — choose busy stalls where food is cooked fresh.",
          },
        },
        {
          "@type": "Question",
          name: "Do lodges provide packed lunches for gorilla trekking?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Lodges in gorilla trekking areas like Bwindi and Mgahinga routinely prepare packed lunches for trekking days. These typically include sandwiches or chapati wraps, boiled eggs, fruit, a juice box, and sometimes a snack bar. Request yours the evening before.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Breadcrumb */}
      <div className="bg-sand/30 border-b border-sand/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-olive-dark/50">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-forest transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-olive-dark/80">Food at Uganda Safari Lodges</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">17 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Food at Uganda Safari Lodges: What to Expect in the National Parks
          </h1>
          <p className="text-cream/70 text-lg">
            From Bwindi breakfasts to bush dinners in Queen Elizabeth — what you will actually eat at Uganda&apos;s safari lodges, and why the food is better than you think.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Safari lodges in Uganda serve a mix of Ugandan and international food, and the standard is higher than most first-time visitors expect. Even in remote locations like{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi Impenetrable National Park</Link>{" "}
            or{" "}
            <Link href="/regions/kidepo" className="text-gold hover:underline">Kidepo Valley</Link>,
            lodges produce three-course dinners with fresh ingredients, local staples, and competent cooking. After six visits to Uganda — over 37 days across the country — the food at lodges has consistently been one of the pleasant surprises.
          </p>

          <figure className="my-8">
            <Image
              src={`${SUPABASE_IMG}/uganda_1780767534101_mivz.jpg`}
              alt="Breakfast plate at Gorilla Bluff Lodge in Buhoma — avocado, chapati wraps, and french toast on colourful African cloth"
              width={800}
              height={500}
              className="rounded-lg w-full"
            />
            <figcaption className="text-sm text-olive-dark/50 mt-2">
              Breakfast at Gorilla Bluff Lodge in Buhoma, January 2026: avocado, rolex (chapati egg wraps), and french toast. Simple, fresh, and exactly right before a gorilla trek.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            What Does a Typical Day of Lodge Food Look Like?
          </h2>

          <p>
            Most safari lodges follow a similar daily rhythm, built around early morning game drives or trekking:
          </p>

          <ul className="list-none space-y-3">
            <li><strong>6:00–7:00 am — Breakfast:</strong> Fresh tropical fruit (mango, pineapple, passion fruit, papaya), eggs cooked to order, toast with local honey, chapati, and Ugandan arabica coffee. Many lodges also offer porridge, pancakes, or French toast. During our stay at Gorilla Bluff Lodge in Buhoma in January 2026, breakfast included avocado, rolex (a chapati-omelette wrap), and French toast — a filling start before a five-hour gorilla trek.</li>
            <li><strong>12:30–1:00 pm — Lunch:</strong> A lighter meal or packed lunch if you are out trekking. Lodges prepare packed lunches the night before — typically chapati wraps, boiled eggs, fruit, a juice box, and sometimes cake or biscuits. If you eat at the lodge, expect a buffet or set menu with soup, a main course, and fresh salad.</li>
            <li><strong>4:00 pm — Afternoon tea:</strong> Tea or coffee with mandazi (fried dough, similar to doughnuts), samosas, or biscuits. A small ritual that most lodges observe.</li>
            <li><strong>7:30–8:00 pm — Dinner:</strong> The main event. Usually three courses: soup or starter, a main with both Ugandan and international options, and dessert. Expect matoke with groundnut sauce, grilled tilapia or chicken, vegetable curries, and fresh bread alongside roasted potatoes or pasta.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Ugandan Dishes You Will Find at Lodges
          </h2>

          <p>
            The best lodge kitchens introduce guests to Ugandan food without abandoning familiar options. Here are the local dishes that appear most often:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-forest/20">
                  <th className="text-left py-2 pr-4 font-semibold text-forest">Dish</th>
                  <th className="text-left py-2 pr-4 font-semibold text-forest">What It Is</th>
                  <th className="text-left py-2 font-semibold text-forest">When Served</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Matoke</td>
                  <td className="py-3 pr-4">Steamed and mashed green bananas — the national dish of western Uganda</td>
                  <td className="py-3">Lunch, dinner</td>
                </tr>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Groundnut sauce</td>
                  <td className="py-3 pr-4">Thick peanut-based sauce, rich and savoury</td>
                  <td className="py-3">Dinner (with matoke or rice)</td>
                </tr>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Rolex</td>
                  <td className="py-3 pr-4">Chapati rolled around an egg omelette with tomatoes and onions</td>
                  <td className="py-3">Breakfast</td>
                </tr>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Chapati</td>
                  <td className="py-3 pr-4">Flatbread cooked on a griddle — Uganda&apos;s most versatile staple</td>
                  <td className="py-3">Any meal</td>
                </tr>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Posho</td>
                  <td className="py-3 pr-4">Dense maize porridge, eaten with stews and sauces</td>
                  <td className="py-3">Lunch, dinner</td>
                </tr>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Tilapia</td>
                  <td className="py-3 pr-4">Freshwater fish, grilled or fried — especially common near lakes</td>
                  <td className="py-3">Lunch, dinner</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Mandazi</td>
                  <td className="py-3 pr-4">Lightly sweetened fried dough, served with tea</td>
                  <td className="py-3">Afternoon tea, breakfast</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Ugandan coffee deserves a special mention. The country produces excellent arabica beans, primarily from the slopes of Mount Elgon and the Rwenzori Mountains. Most lodges serve locally grown coffee — it is fresh, strong, and far better than what you find in European supermarkets labelled &quot;African blend.&quot;
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            How Food Differs by Lodge Level
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-forest/20">
                  <th className="text-left py-2 pr-4 font-semibold text-forest">Level</th>
                  <th className="text-left py-2 pr-4 font-semibold text-forest">Typical Food Experience</th>
                  <th className="text-left py-2 font-semibold text-forest">Price Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Luxury</td>
                  <td className="py-3 pr-4">Multi-course meals, dedicated chef, wine list, dietary menus, bush dinners by arrangement. Fresh ingredients sourced daily.</td>
                  <td className="py-3">$300+ per night</td>
                </tr>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Mid-range</td>
                  <td className="py-3 pr-4">Set menus or small buffets, good variety of local and international food. This is where most visitors eat and the quality-to-price ratio is strongest.</td>
                  <td className="py-3">$80–250 per night</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Budget</td>
                  <td className="py-3 pr-4">Simple, filling meals: beans, matoke, posho, chapati, rice. Less variety but authentic and satisfying. Portions are generous.</td>
                  <td className="py-3">$20–80 per night</td>
                </tr>
              </tbody>
            </table>
          </div>

          <figure className="my-8">
            <Image
              src={`${SUPABASE_IMG}/uganda_1781276662860_drtd.jpg`}
              alt="Traditional Ugandan meal in Butiru — fresh pineapple, avocado, chapati, and beans on plates"
              width={800}
              height={500}
              className="rounded-lg w-full"
            />
            <figcaption className="text-sm text-olive-dark/50 mt-2">
              A home-cooked meal at the Butiru Freundeskreis guesthouse in eastern Uganda, October 2024: fresh pineapple, avocado, chapati, and beans. This is what everyday Ugandan food looks like — and what budget lodges serve in larger portions.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Food by Region: What Changes Between Parks
          </h2>

          <p>
            The food at Uganda&apos;s safari lodges varies slightly depending on the region and what grows locally:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Bwindi &amp; Mgahinga (southwest):</strong> Matoke country. Green bananas and groundnut sauce dominate the local kitchen. Lodges source avocados, tomatoes, and greens from nearby farms. Fresh fish is less common — the nearest lake is hours away.</li>
            <li><strong>Queen Elizabeth &amp; Ishasha:</strong> Closer to the fishing communities of Lake Edward and the Kazinga Channel. Tilapia and Nile perch appear on menus. The savanna landscape means more cattle farming, so beef and goat are common at local eateries.</li>
            <li><strong>Murchison Falls:</strong> Nile perch from the river, and a drier climate that favours cassava, millet, and sorghum alongside the usual staples.</li>
            <li><strong>Kibale &amp; Fort Portal area:</strong> Tea country. Lodges here often have tea plantation views and serve outstanding local tea. The fertile volcanic soil produces excellent vegetables and fruit.</li>
            <li><strong>Entebbe &amp; Kampala:</strong> The widest variety. Indian restaurants, Ethiopian food, international cuisine, and every Ugandan regional dish. See our{" "}
              <Link href="/blog/best-lodges-near-entebbe-airport" className="text-gold hover:underline">Entebbe airport lodges guide</Link> for pre-flight dining options.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Dietary Requirements: What Lodges Can Handle
          </h2>

          <p>
            Most lodges accommodate dietary needs with advance notice. The key rule: <strong>tell your tour operator when booking, not when you arrive</strong>. Remote lodges plan meals and shopping days ahead. For a detailed guide on meat-free eating, see our{" "}
            <Link href="/blog/vegetarian-travel-uganda" className="text-gold hover:underline">vegetarian travel guide</Link>.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Vegetarian:</strong> Straightforward. Ugandan cuisine is naturally rich in vegetarian staples — matoke, beans, groundnut sauce, chapati, avocado, and tropical fruit.</li>
            <li><strong>Vegan:</strong> Possible with planning. Many staples are naturally vegan, but dairy and eggs are common in lodge cooking. Communicate clearly.</li>
            <li><strong>Gluten-free:</strong> Matoke, posho, rice, and most Ugandan staples are gluten-free by default. Bread and chapati contain wheat.</li>
            <li><strong>Allergies:</strong> Groundnut (peanut) sauce is widespread — flag peanut allergies clearly. Lodges are accustomed to handling this but need explicit notice.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Eating Outside the Lodge: Markets and Street Food
          </h2>

          <p>
            Between parks, roadside stalls and market food offer a different experience. The rolex — Uganda&apos;s iconic chapati-omelette street food — costs around 2,000–3,000 UGX (about 0.50 USD, as of 2026) and is available everywhere. Roasted cassava, sweet potatoes, and grilled maize are sold by vendors along the major routes.
          </p>

          <p>
            Prosper, a tour guide based in Buhoma, often takes visitors to the local market after their gorilla trek. It is a good way to see everyday life in the communities that border the national parks — and to try food that the lodge kitchens adapt for international palates.
          </p>

          <figure className="my-8">
            <Image
              src={`${SUPABASE_IMG}/uganda_1780767748724_eob6.jpg`}
              alt="Woodworking workshop in Buhoma with four men standing in front, wood shavings on the ground"
              width={800}
              height={500}
              className="rounded-lg w-full"
            />
            <figcaption className="text-sm text-olive-dark/50 mt-2">
              The Innox &amp; Friends workshop in Buhoma — community businesses like this, alongside local restaurants and market stalls, are part of the Bwindi experience beyond the lodge.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Practical Tips for Lodge Meals
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Request packed lunches the evening before.</strong> Lodges need time to prepare them, especially for early-morning gorilla treks.</li>
            <li><strong>Carry snacks for long transfers.</strong> Drives between parks (e.g.{" "}
              <Link href="/blog/entebbe-to-bwindi-travel-options" className="text-gold hover:underline">Entebbe to Bwindi</Link>
              , 8–10 hours) have limited food stops. Energy bars, nuts, and dried fruit fill the gaps.</li>
            <li><strong>Try the local dishes.</strong> Matoke with groundnut sauce, rolex for breakfast, and fresh avocado — these are genuinely good food, not tourist novelties.</li>
            <li><strong>Drink bottled or filtered water.</strong> All lodges provide safe drinking water. Avoid tap water and ice from unknown sources.</li>
            <li><strong>Tip the kitchen staff.</strong> In many lodges, the kitchen team works long hours to produce impressive meals in remote locations with limited infrastructure. A small tip at checkout is appreciated.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-forest mb-2">What food do Uganda safari lodges serve?</h3>
              <p>
                Most lodges serve a mix of Ugandan and international dishes. Expect matoke (steamed green bananas), beans, groundnut sauce, and chapati alongside pasta, grilled meats, and fresh salads. Breakfast includes fresh tropical fruit, eggs, toast, and Ugandan coffee. Mid-range and luxury lodges typically serve three courses at dinner.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-forest mb-2">Can safari lodges accommodate dietary requirements?</h3>
              <p>
                Yes, most lodges handle vegetarian, vegan, gluten-free, and allergy requirements with advance notice. Inform your tour operator or the lodge at least 2–3 days before arrival. Luxury lodges handle this routinely; budget lodges need more notice.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-forest mb-2">Is the food safe at Uganda safari lodges?</h3>
              <p>
                Lodge food is safe. Established lodges maintain proper food hygiene, use filtered water for cooking, and source fresh ingredients regularly. Stick to bottled or filtered water for drinking. Street food outside lodges carries slightly more risk — choose busy stalls where food is cooked fresh.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-forest mb-2">Do lodges provide packed lunches for gorilla trekking?</h3>
              <p>
                Yes. Lodges in Bwindi and Mgahinga routinely prepare packed lunches for trekking days — typically sandwiches or chapati wraps, boiled eggs, fruit, a juice box, and sometimes a snack bar. Request yours the evening before.
              </p>
            </div>
          </div>
        </div>

        <RelatedArticles currentSlug="food-uganda-safari-lodges" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Looking for a Lodge with Great Food?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Browse lodges by region, price level, and amenities — or ask us for a recommendation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lodges"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Browse All Lodges
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
