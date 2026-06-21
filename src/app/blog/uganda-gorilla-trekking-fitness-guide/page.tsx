import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "How Fit Do You Need to Be for Gorilla Trekking in Uganda?",
  description:
    "Gorilla trekking fitness requirements by Bwindi sector — trek duration, altitude, difficulty, porter availability, and how to prepare for your gorilla trek in Uganda.",
  alternates: {
    canonical: `${SITE_URL}/blog/uganda-gorilla-trekking-fitness-guide`,
  },
  openGraph: {
    title: "How Fit Do You Need to Be for Gorilla Trekking in Uganda?",
    description:
      "What fitness level do you actually need? A sector-by-sector breakdown of Bwindi&apos;s trekking difficulty, plus training tips.",
    url: `${SITE_URL}/blog/uganda-gorilla-trekking-fitness-guide`,
    type: "article",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function GorillaTreekkingFitnessGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "How Fit Do You Need to Be for Gorilla Trekking in Uganda?",
    datePublished: "2026-06-13",
    description:
      "Gorilla trekking fitness requirements by Bwindi sector — trek duration, altitude, difficulty, porter availability, and how to prepare.",
    url: `${SITE_URL}/blog/uganda-gorilla-trekking-fitness-guide`,
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
            <span className="text-olive-dark/80">Gorilla Trekking Fitness Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cream/50 text-sm mb-3">13 June 2026</p>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            How Fit Do You Need to Be for Gorilla Trekking?
          </h1>
          <p className="text-cream/70 text-lg">
            A sector-by-sector guide to what the trek actually involves, who it suits, and how to prepare.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="space-y-6 text-olive-dark/80 leading-relaxed">
          <p>
            This is the question nearly every first-time gorilla trekker asks, and the answer depends enormously on which sector of Bwindi Impenetrable National Park you are assigned to. A trek in Buhoma can feel like a moderate forest walk. A trek in Nkuringo can feel like a mountaineering expedition. The difference is not trivial.
          </p>
          <p>
            Gorilla treks in Uganda take place in Bwindi Impenetrable National Park and Mgahinga Gorilla National Park, both in the far southwest of the country. The terrain ranges from 1,160 m to 2,607 m in altitude, through some of the densest tropical forest in Africa. Treks last anywhere from 2 to 8 hours — sometimes longer — depending on where the gorilla family has moved overnight. You do not get to choose your trek duration; the trackers follow the gorillas wherever they have gone.
          </p>

          {/* General requirements */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            General Fitness Requirements
          </h2>
          <p>
            At a minimum, you should be able to walk for 3-4 hours on uneven terrain without resting. The paths are not maintained trails — you are walking through living forest, stepping over roots and fallen trees, pushing through undergrowth, and navigating steep, slippery slopes that often turn to mud. There are no handrails, boardwalks, or marked routes. Rangers cut a path through the vegetation with machetes as you go.
          </p>
          <p>
            The altitude adds another layer. Even at the lower elevations around Buhoma (roughly 1,500 m), you will notice the difference if you are coming from sea level. At Ruhija (2,300 m), mild altitude effects — shortness of breath, slightly faster fatigue — are common, especially for travelers who flew in the day before.
          </p>
          <p>
            That said, people of all ages and fitness levels successfully complete gorilla treks every week. Visitors in their 70s and 80s regularly trek in Buhoma. The key is matching your fitness level to the right sector.
          </p>

          {/* Buhoma */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Buhoma Sector — Easiest
          </h2>
          <p>
            Buhoma is the most accessible sector and the best choice for trekkers who are concerned about fitness. The starting altitude is around 1,500 m, and while the terrain is hilly, the gradients are gentler than in the southern sectors. The gorilla families here — Mubare, Rushegura, and Katwe — tend to range in areas that are reasonably accessible from the park gate.
          </p>
          <p>
            Average trek duration in Buhoma is 2-4 hours, though it can stretch to 6 hours if the gorillas have moved far. The park rangers here are experienced at managing mixed-ability groups and will set a pace that works for the group. Buhoma is where UWA (Uganda Wildlife Authority) typically assigns trekkers who indicate limited mobility on their registration forms.
          </p>
          <p>
            For more detail on Buhoma and all available lodges, see our{" "}
            <Link href="/regions/bwindi" className="text-gold hover:underline">Bwindi region guide</Link>.
          </p>

          {/* Rushaga */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Rushaga Sector — Moderate to Strenuous
          </h2>
          <p>
            Rushaga sits in a deep valley in the southern part of the park. With five habituated gorilla families — the most of any sector — it sees a lot of trekking traffic. The terrain involves significant elevation changes: you may descend into steep ravines and climb back out, often on narrow, muddy paths. Treks here average 3-5 hours but can go longer.
          </p>
          <p>
            The altitude is moderate, around 1,800-2,000 m, so altitude effects are less of a factor than at Ruhija. But the physical demands of the terrain make Rushaga more challenging than Buhoma. If you are reasonably fit and can handle uneven ground and some steep climbing, Rushaga is manageable.
          </p>

          {/* Ruhija */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Ruhija Sector — Strenuous (High Altitude)
          </h2>
          <p>
            Ruhija is the highest sector at approximately 2,300 m. The combination of altitude and steep ridgeline terrain makes this one of the more physically demanding trekking experiences in Bwindi. Treks here average 4-6 hours and can involve sustained climbing through bamboo thickets and dense undergrowth.
          </p>
          <p>
            The four gorilla families — Oruzogo, Bitukura, Mukiza, and Kyaguriro — range across steep, forested ridges. The cooler temperatures at this altitude are a bonus (less sweating), but the thinner air means you will fatigue faster than at lower elevations. Ruhija is best suited for trekkers with good cardiovascular fitness and some experience hiking in mountainous terrain.
          </p>

          {/* Nkuringo */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Nkuringo Sector — The Steepest Challenge
          </h2>
          <p>
            Nkuringo is the most physically demanding sector in Bwindi, and arguably one of the most challenging gorilla trekking experiences in the world. The village sits on a ridge at around 1,800 m, but the gorilla families — Nkuringo and Christmas — range in the Valley of Gorillas far below. Reaching them typically involves a steep descent of several hundred meters, followed by the trek back up.
          </p>
          <p>
            Treks at Nkuringo routinely last 5-7 hours, and 8-hour treks are not uncommon. The descent into the valley is slippery and steep, and the climb back out at the end of the day, when you are already tired, is genuinely grueling. This sector is for experienced hikers who are comfortable with sustained physical effort in difficult terrain.
          </p>

          {/* Porters */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Hire a Porter — Seriously
          </h2>
          <p>
            Every sector offers porters who can carry your daypack, provide a hand on steep sections, and push or pull you up difficult slopes when needed. Porters cost $15-20 for the trek, and we cannot recommend them strongly enough. They are local community members who know the terrain intimately, and hiring one directly supports the villages around the park.
          </p>
          <p>
            Even fit, experienced hikers benefit from a porter. Having someone carry your bag lets you focus on the trek itself, and having a steady hand to grab on slippery slopes is genuinely valuable. On steep descents, porters have prevented countless falls. If you have any doubt about your fitness level, hiring a porter is the single best investment you can make.
          </p>

          {/* Mgahinga alternative */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            Mgahinga: An Alternative for Some Trekkers
          </h2>
          <p>
            Mgahinga Gorilla National Park, on the slopes of the Virunga volcanoes near Kisoro, offers gorilla trekking with a different character. The terrain is volcanic — more open bamboo forest than the dense undergrowth of Bwindi — and the single habituated group (Nyakagezi) tends to be found at moderate altitudes. Treks at Mgahinga are often shorter than in Bwindi, though the volcanic terrain can be steep.
          </p>
          <p>
            Mgahinga is worth considering if Bwindi feels too daunting, but permits here are limited to one group of eight trekkers per day, making them harder to secure.
          </p>

          {/* Training tips */}
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl sm:text-2xl pt-4">
            How to Prepare: Training Tips
          </h2>
          <p>
            Start training 4-6 weeks before your trip. The most useful exercise is simply walking hills — find the steepest hill near you and walk up and down it repeatedly. If you live in a flat area, stair climbing is a good alternative: aim for 20-30 minutes of continuous stair climbing at a moderate pace.
          </p>
          <p>
            Cardiovascular fitness matters more than strength. Focus on activities that raise your heart rate for sustained periods: brisk walking, jogging, cycling, or swimming. You do not need to be marathon-fit, but you should be able to walk briskly for 2-3 hours without needing to stop.
          </p>
          <p>
            Strengthen your legs and core. Squats, lunges, and step-ups will prepare your legs for the constant up-and-down of the forest terrain. A strong core helps with balance on uneven ground. Do not neglect your knees — the descents are harder on the body than the climbs.
          </p>
          <p>
            If possible, do a few practice hikes on uneven terrain with the boots you plan to wear. Breaking in your footwear before the trip prevents blisters, which on a 6-hour gorilla trek can turn a magical experience into a painful ordeal.
          </p>

          {/* Final thoughts */}
          <p>
            For a detailed comparison of all four Bwindi sectors — including lodge recommendations and gorilla family details — see our{" "}
            <Link href="/blog/bwindi-sectors-compared" className="text-gold hover:underline">Bwindi sectors guide</Link>.
            And for everything else you need to know about permits, costs, and planning, visit our{" "}
            <Link href="/gorilla-permit-guide" className="text-gold hover:underline">gorilla permit guide</Link>.
          </p>
        </div>

        <RelatedArticles currentSlug="uganda-gorilla-trekking-fitness-guide" />

        {/* CTA */}
        <section className="bg-forest rounded-xl p-8 text-cream text-center">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Not Sure Which Sector Suits You?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Tell us about your fitness level and travel plans. We will recommend the best sector and lodge for your gorilla trekking experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/regions/bwindi"
              className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Explore Bwindi Lodges
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
