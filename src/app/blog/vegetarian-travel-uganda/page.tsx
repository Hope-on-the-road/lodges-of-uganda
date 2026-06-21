import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

const SUPABASE_IMG = "https://eqlnmpmfhxdllkuetury.supabase.co/storage/v1/object/public/thumbnails";

export const metadata: Metadata = {
  title: "Vegetarian Travel in Uganda: What You Can Actually Eat",
  description:
    "A practical guide to eating vegetarian in Uganda — local dishes, lodge meals, market food, and what to expect on safari. Based on 6 visits.",
  alternates: {
    canonical: `${SITE_URL}/blog/vegetarian-travel-uganda`,
  },
  openGraph: {
    title: "Vegetarian Travel in Uganda: What You Can Actually Eat",
    description:
      "What vegetarian travellers can eat in Uganda — from lodge breakfasts to street food. Based on first-hand experience across 6 trips.",
    url: `${SITE_URL}/blog/vegetarian-travel-uganda`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function VegetarianTravelUgandaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Vegetarian Travel in Uganda: What You Can Actually Eat",
      datePublished: "2026-06-17",
      description:
        "A practical guide to eating vegetarian in Uganda — local dishes, lodge meals, market food, and tips from 6 visits across the country.",
      url: `${SITE_URL}/blog/vegetarian-travel-uganda`,
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
          name: "Can you travel Uganda as a vegetarian?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Ugandan cuisine is naturally rich in vegetarian staples — matoke (steamed green bananas), posho (maize porridge), beans, groundnut sauce, chapati, and fresh tropical fruit. Safari lodges routinely accommodate vegetarian guests with advance notice. Street food and local restaurants always have meat-free options.",
          },
        },
        {
          "@type": "Question",
          name: "Do Uganda safari lodges offer vegetarian food?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most lodges in Uganda accommodate vegetarian diets when notified in advance. Mid-range and luxury lodges typically offer dedicated vegetarian options at every meal. Budget lodges can prepare vegetarian meals but benefit from a few days' notice. Mention it when booking, not on arrival.",
          },
        },
        {
          "@type": "Question",
          name: "What local Ugandan dishes are vegetarian?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many Ugandan staples are naturally vegetarian: matoke (steamed plantain), posho (maize meal), chapati (flatbread), rolex (chapati with egg omelette), groundnut sauce, bean stew, fresh avocado, roasted cassava, and jackfruit. Uganda also produces excellent coffee, fresh pineapple, mango, and passion fruit.",
          },
        },
        {
          "@type": "Question",
          name: "Is vegan travel possible in Uganda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vegan travel is possible but requires more planning. Many Ugandan staples are naturally vegan (matoke, posho, beans, groundnut sauce), but dairy and eggs are common in lodge cooking. Communicate clearly with your lodge or tour operator, and carry snacks for transit days when options may be limited.",
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
            <span className="text-olive-dark/80">Vegetarian Travel in Uganda</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">17 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Vegetarian Travel in Uganda: What You Can Actually Eat
          </h1>
          <p className="text-cream/70 text-lg">
            Ugandan food is more vegetarian-friendly than you think. A practical guide to eating well without meat — from lodge breakfasts to market stalls.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            Yes, you can travel Uganda as a vegetarian and eat well. Ugandan cuisine relies heavily on plant-based staples — matoke (steamed green bananas), posho (maize porridge), beans, groundnut sauce, chapati, and an abundance of fresh tropical fruit. Meat is valued in Ugandan culture, but the foundation of everyday cooking is vegetarian by default. During our six visits to Uganda totalling over 37 days across the country, eating vegetarian was never a problem — it just required a bit of communication.
          </p>

          <figure className="my-8">
            <Image
              src={`${SUPABASE_IMG}/uganda_1780767534101_mivz.jpg`}
              alt="Breakfast at Gorilla Bluff Lodge in Buhoma — avocado, chapati wraps, and french toast on a plate with a colourful African tablecloth"
              width={800}
              height={500}
              className="rounded-lg w-full"
            />
            <figcaption className="text-sm text-olive-dark/50 mt-2">
              Breakfast at Gorilla Bluff Lodge in Buhoma: avocado, rolex (chapati egg wraps), and french toast — a typical vegetarian-friendly lodge morning.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            What Ugandan Dishes Are Naturally Vegetarian?
          </h2>

          <p>
            A surprising amount of Ugandan food is meat-free without any modification. Here are the staples you will encounter everywhere:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Matoke</strong> — steamed and mashed green bananas, the national dish of western Uganda. Served with groundnut sauce, it is a complete meal.</li>
            <li><strong>Posho</strong> — dense maize porridge, eaten with beans or groundnut sauce. A daily staple across the country.</li>
            <li><strong>Chapati</strong> — flatbread cooked on a griddle. Found at every market, roadside stall, and lodge.</li>
            <li><strong>Rolex</strong> — a chapati rolled around an egg omelette with tomatoes and onions. Uganda&apos;s most popular street food (vegetarian but not vegan).</li>
            <li><strong>Groundnut sauce</strong> — a thick peanut-based sauce, rich in protein. One of the best vegetarian foods in East Africa.</li>
            <li><strong>Bean stew</strong> — red kidney beans cooked with onions and tomatoes. Served at virtually every meal.</li>
            <li><strong>Cassava</strong> — boiled or roasted, often served alongside other dishes.</li>
            <li><strong>Fresh avocado</strong> — Uganda grows exceptional avocados. They appear at breakfast, lunch, and dinner.</li>
            <li><strong>Jackfruit</strong> — both ripe (sweet, as a fruit) and unripe (cooked as a savoury dish, almost meat-like in texture).</li>
          </ul>

          <p>
            Tropical fruit is outstanding year-round: pineapple, mango, passion fruit, papaya, and watermelon are cheap and everywhere. Ugandan coffee is world-class — arabica from the slopes of Mount Elgon and the Rwenzori Mountains.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Eating Vegetarian at Safari Lodges
          </h2>

          <p>
            Most safari lodges in Uganda can accommodate vegetarian guests — but the key is <strong>advance notice</strong>. Mention your dietary needs when booking, not when you arrive. Lodges plan their meals and shopping days ahead, and in remote areas like{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi Impenetrable National Park</Link>{" "}
            or{" "}
            <Link href="/regions/queen-elizabeth" className="text-gold hover:underline">Queen Elizabeth National Park</Link>,
            {" "}fresh ingredients may come from Kampala or local farms on specific delivery days.
          </p>

          <p>
            During our stay at Gorilla Bluff Lodge in Buhoma in January 2026, breakfast included fresh avocado, chapati wraps (rolex), and french toast — all vegetarian without asking. Most Bwindi lodges serve a similar spread because the local ingredients lend themselves to it naturally.
          </p>

          <p>
            Here is what to expect at different lodge levels:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-forest/20">
                  <th className="text-left py-2 pr-4 font-semibold text-forest">Lodge Level</th>
                  <th className="text-left py-2 pr-4 font-semibold text-forest">Vegetarian Options</th>
                  <th className="text-left py-2 font-semibold text-forest">What to Do</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Luxury</td>
                  <td className="py-3 pr-4">Dedicated vegetarian menu, often multi-course. Chefs trained for dietary requests.</td>
                  <td className="py-3">Mention at booking. Expect no issues.</td>
                </tr>
                <tr className="border-b border-sand">
                  <td className="py-3 pr-4 font-medium">Mid-range</td>
                  <td className="py-3 pr-4">Set menus with vegetarian alternatives. Breakfast always has options; dinner may need a request.</td>
                  <td className="py-3">Email or call 2-3 days before arrival.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Budget</td>
                  <td className="py-3 pr-4">Beans, matoke, posho, chapati — naturally vegetarian staples. Less variety but filling.</td>
                  <td className="py-3">Confirm when booking. Be flexible.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <figure className="my-8">
            <Image
              src={`${SUPABASE_IMG}/uganda_1781276662860_drtd.jpg`}
              alt="Typical Ugandan vegetarian meal in Butiru — fresh pineapple, avocado, chapati, and beans served on plates"
              width={800}
              height={500}
              className="rounded-lg w-full"
            />
            <figcaption className="text-sm text-olive-dark/50 mt-2">
              A home-cooked meal at the Butiru Freundeskreis guesthouse: fresh pineapple, avocado, chapati, and beans — typical Ugandan food that happens to be entirely vegetarian.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Street Food and Local Restaurants
          </h2>

          <p>
            Outside lodges, the best vegetarian eating is at local markets and roadside stalls. The rolex — a chapati-omelette roll — is everywhere and costs around 2,000-3,000 UGX (about 0.50 USD, as of 2026). Roasted cassava, sweet potatoes, and groundnuts are sold by vendors along major roads.
          </p>

          <p>
            In October 2024, we ate at the Butiru Freundeskreis community in eastern Uganda, where meals were simple but excellent: fresh pineapple, avocado, chapati, and bean stew — all from the local area. No meat needed, no special request required. This is how many Ugandans eat every day.
          </p>

          <p>
            In towns like Kampala, Fort Portal, or Jinja, you will find restaurants with Indian, Ethiopian, and international menus that offer dedicated vegetarian sections. Uganda&apos;s Indian community has influenced the food scene significantly — samosas, dal, and vegetable curries are common.
          </p>

          <figure className="my-8">
            <Image
              src={`${SUPABASE_IMG}/uganda_1781276710338_5bbx.jpg`}
              alt="Three people sharing a boda-boda motorcycle taxi in Jinja, Uganda — a moment of everyday travel and cultural connection"
              width={800}
              height={500}
              className="rounded-lg w-full"
            />
            <figcaption className="text-sm text-olive-dark/50 mt-2">
              Getting around by boda-boda in Jinja — three on one motorcycle, no helmets, and a lot of laughing. The kind of everyday moment that makes travelling in Uganda memorable.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            The Cultural Side: How Ugandans View Vegetarian Eating
          </h2>

          <p>
            In Ugandan culture, meat — especially chicken, goat, and beef — is associated with celebration and hospitality. Serving a guest meat is a sign of respect. If you decline meat at a local meal, it can sometimes be misunderstood as rejecting hospitality rather than a dietary preference.
          </p>

          <p>
            The best approach is straightforward: explain that you eat everything except meat and fish, and that you enjoy the local dishes like matoke, beans, and groundnut sauce. People respond well to appreciation. Saying &quot;I love your groundnut sauce&quot; communicates far more than a list of things you cannot eat.
          </p>

          <p>
            At lodges, this is a non-issue — staff are accustomed to international dietary preferences. It only matters at community meals or when invited to eat with local families, where a brief explanation goes a long way.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            What About Vegan Travel?
          </h2>

          <p>
            Vegan travel in Uganda is possible but harder. Many staples are naturally vegan — matoke, posho, beans, cassava, groundnut sauce — but dairy and eggs are woven into lodge cooking. Butter in cooking, milk in tea, and eggs at breakfast are standard.
          </p>

          <p>
            Luxury lodges can handle vegan requests with advance notice. At budget level, it becomes a matter of choosing the right items from what is available. Carrying your own snacks — nuts, dried fruit, energy bars — is wise for long transfer days between parks.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Practical Tips for Vegetarian Travellers
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Tell your tour operator at booking</strong>. They communicate with every lodge on your itinerary.</li>
            <li><strong>Carry snacks for transfer days</strong>. Drives between parks (e.g.{" "}
              <Link href="/blog/entebbe-to-bwindi-travel-options" className="text-gold hover:underline">Entebbe to Bwindi</Link>
              ) take 8-10 hours. Roadside stops may have limited options.</li>
            <li><strong>Learn two phrases</strong>: &quot;Sigala nyama&quot; (I don&apos;t eat meat) and &quot;Njagala matoke na binyeebwa&quot; (I want matoke with groundnuts) in Luganda cover most situations.</li>
            <li><strong>Pack a reusable water bottle</strong>. Tap water is not safe; bottled water is everywhere but adds plastic waste. See our{" "}
              <Link href="/blog/uganda-packing-list" className="text-gold hover:underline">Uganda packing list</Link> for more essentials.</li>
            <li><strong>Expect generous portions</strong>. Ugandan meals are filling — you will not go hungry.</li>
            <li><strong>Try the rolex</strong>. It is the unofficial national street food and perfectly vegetarian.</li>
          </ul>

          <figure className="my-8">
            <Image
              src={`${SUPABASE_IMG}/uganda_1780767748724_eob6.jpg`}
              alt="Woodworking workshop in Buhoma, Uganda — four men standing in front of a carpentry business with wood shavings on the ground"
              width={800}
              height={500}
              className="rounded-lg w-full"
            />
            <figcaption className="text-sm text-olive-dark/50 mt-2">
              The Innox &amp; Friends workshop in Buhoma — local craftsmen building furniture from wood. Visiting community businesses like this is part of what makes travel in Uganda about more than just wildlife.
            </figcaption>
          </figure>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Sample Vegetarian Day on Safari
          </h2>

          <p>
            Here is what a typical day of vegetarian eating looks like during a safari in western Uganda:
          </p>

          <ul className="list-none space-y-3">
            <li><strong>6:30 am — Breakfast at lodge:</strong> Fresh fruit platter (mango, pineapple, passion fruit), scrambled eggs, avocado, toast with local honey, Ugandan coffee.</li>
            <li><strong>12:30 pm — Packed lunch:</strong> Chapati wraps with vegetables, boiled eggs, a banana, juice box. Lodges prepare these for trekking days.</li>
            <li><strong>4:00 pm — Afternoon tea:</strong> Ugandan tea with milk, samosas or mandazi (fried dough).</li>
            <li><strong>7:30 pm — Dinner:</strong> Matoke with groundnut sauce, bean stew, sauteed greens, fresh salad, chapati. Dessert: caramelised banana or fresh fruit.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl pt-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-forest mb-2">Can you travel Uganda as a vegetarian?</h3>
              <p>
                Yes. Ugandan cuisine is naturally rich in vegetarian staples — matoke, posho, beans, groundnut sauce, chapati, and fresh tropical fruit. Safari lodges routinely accommodate vegetarian guests with advance notice. Street food and local restaurants always have meat-free options.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-forest mb-2">Do Uganda safari lodges offer vegetarian food?</h3>
              <p>
                Most lodges accommodate vegetarian diets when notified in advance. Mid-range and luxury lodges typically offer dedicated vegetarian options at every meal. Budget lodges can prepare vegetarian meals but benefit from a few days&apos; notice. Mention it when booking, not on arrival.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-forest mb-2">What local Ugandan dishes are vegetarian?</h3>
              <p>
                Many Ugandan staples are naturally vegetarian: matoke (steamed plantain), posho (maize meal), chapati (flatbread), rolex (chapati with egg omelette), groundnut sauce, bean stew, fresh avocado, roasted cassava, and jackfruit. Uganda also produces excellent arabica coffee, fresh pineapple, mango, and passion fruit.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-forest mb-2">Is vegan travel possible in Uganda?</h3>
              <p>
                Vegan travel is possible but requires more planning. Many staples are naturally vegan (matoke, posho, beans, groundnut sauce), but dairy and eggs are common in lodge cooking. Communicate clearly with your lodge or tour operator, and carry snacks for transit days when options may be limited.
              </p>
            </div>
          </div>
        </div>

        <RelatedArticles currentSlug="vegetarian-travel-uganda" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Planning a Vegetarian Safari in Uganda?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            We help match travellers with lodges that cater to their dietary needs — from Bwindi to Queen Elizabeth and beyond.
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
