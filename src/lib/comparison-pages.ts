import type { Lodge } from "./lodge-types";

export interface ComparisonFAQ {
  question: string;
  answer: string;
}

export interface ComparisonPage {
  slug: string;
  title: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  introText: string;
  howWeChose: string;
  quickAnswer: string;
  faq: ComparisonFAQ[];
  filter: (lodge: Lodge) => boolean;
}

export const comparisonPages: ComparisonPage[] = [
  {
    slug: "luxury",
    title: "Best Luxury Lodges in Uganda",
    h1: "Best Luxury Lodges in Uganda (2026)",
    seoTitle: "10 Best Luxury Lodges in Uganda 2026 | Independent Guide",
    seoDescription: "Independent guide to the best luxury lodges in Uganda for 2026. Compare high-end accommodation for gorilla trekking in Bwindi, safaris in Queen Elizabeth and Murchison Falls.",
    description: "A curated selection of Uganda's finest luxury lodges, chosen for their quality, location, and guest experience.",
    introText: "Uganda offers a growing range of luxury lodges that combine high-end comfort with extraordinary wildlife access. From forest-edge properties in Bwindi where gorillas sometimes wander through camp, to riverside lodges overlooking the Nile in Murchison Falls, the country's luxury accommodation scene has matured significantly in recent years.\n\nWhat sets Uganda's luxury lodges apart from those in more established safari destinations is their intimacy. Most properties have fewer than 20 rooms, meaning personalised service and a sense of exclusivity that larger operations struggle to match. Many are also deeply connected to conservation and community projects — your stay directly supports the protection of mountain gorillas, chimpanzees, and the communities living alongside these parks.",
    howWeChose: "We include lodges priced at the $$$$ (Luxury) and $$$$$ (Ultra Luxury) level. Selection is based on location quality, room standard, dining, service reputation, and proximity to key wildlife experiences. We do not accept payment for inclusion.",
    quickAnswer: "The top luxury lodges in Uganda include Sanctuary Gorilla Forest Camp and Clouds Mountain Gorilla Lodge for gorilla trekking, Mweya Safari Lodge and Katara Lodge for Queen Elizabeth safaris, and Apoka Safari Lodge for the remote Kidepo experience. Each offers a different style — from tented camps inside the forest to boutique hillside lodges with panoramic views.",
    faq: [
      {
        question: "What is the most luxurious lodge in Uganda?",
        answer: "Several lodges compete for the top spot. Clouds Mountain Gorilla Lodge in Nkuringo, Kyaninga Lodge near Fort Portal, and Sanctuary Gorilla Forest Camp in Buhoma are consistently rated among Uganda's finest. The best choice depends on whether you prioritise gorilla trekking access, scenic setting, or overall luxury finish.",
      },
      {
        question: "How much do luxury lodges in Uganda cost?",
        answer: "Luxury lodges in Uganda typically range from $300 to $1,500 or more per person per night, depending on the property, season, and what is included. Many luxury lodges offer all-inclusive rates covering meals, activities, and park fees. Prices change with season and availability — always confirm directly with the lodge.",
      },
      {
        question: "Are luxury lodges in Uganda worth the price?",
        answer: "For most visitors, the answer is yes — particularly for gorilla trekking lodges where the location, guiding, and overall experience are significantly enhanced by staying at a quality property. The intimacy of Uganda's luxury lodges (most under 20 rooms) means you get a level of personal attention rare in larger safari destinations.",
      },
      {
        question: "Can I combine luxury lodges with gorilla trekking?",
        answer: "Yes. Several of Uganda's best luxury lodges are positioned specifically for gorilla trekking in Bwindi Impenetrable National Park and Mgahinga Gorilla National Park. Sanctuary Gorilla Forest Camp and Bwindi Lodge in Buhoma, Clouds Mountain Gorilla Lodge in Nkuringo, and Four Gorillas Lodge in Rushaga all offer luxury accommodation with direct trekking access.",
      },
    ],
    filter: (l) => l.priceLevel === "$$$$" || l.priceLevel === "$$$$$",
  },
  {
    slug: "budget",
    title: "Best Budget Lodges in Uganda",
    h1: "Best Budget Lodges in Uganda (2026)",
    seoTitle: "Best Budget Lodges & Camps in Uganda 2026 | Independent Guide",
    seoDescription: "Affordable lodges, camps and hostels in Uganda for 2026. Budget accommodation for gorilla trekking, safaris and backpacker travel from $8 per night.",
    description: "Affordable accommodation options across Uganda that offer good value without compromising on location or essential comfort.",
    introText: "Uganda is one of East Africa's most affordable safari destinations, and budget accommodation has improved significantly in recent years. From community-run guesthouses near Bwindi's gorilla trekking starting points to backpacker camps inside Murchison Falls National Park, it is possible to experience Uganda's best wildlife on a limited budget.\n\nBudget lodges in Uganda typically offer clean rooms with basic furnishings, shared or en suite bathrooms, and on-site dining. Many also provide camping options for those with their own tent. What budget properties sometimes lack in luxury, they often make up for in location — several are community-run operations positioned right at park gates, meaning your money supports local families while giving you excellent access to activities.",
    howWeChose: "We include lodges and camps at the $ (Budget) and $$ (Mid-range) price level. Selection prioritises location, cleanliness, safety, value for money, and proximity to key attractions. Community-run operations are highlighted where they exist.",
    quickAnswer: "Top budget options include Red Chilli Rest Camp in Murchison Falls, Buhoma Community Rest Camp in Bwindi, Lake Bunyonyi Overland Resort for lakeside relaxation, and Red Chilli Hideaway in Kampala. Expect to pay between $8 (camping) and $60 (en suite private room) per night.",
    faq: [
      {
        question: "Can I do gorilla trekking on a budget?",
        answer: "Yes, though the gorilla permit itself costs $800 per person regardless of where you stay. Budget lodges near Bwindi — such as Buhoma Community Rest Camp, Broadbill Forest Camp in Ruhija, or Rushaga Gorilla Camp — offer accommodation from around $20–50 per night, significantly reducing the overall trip cost compared to luxury options.",
      },
      {
        question: "What is the cheapest accommodation in Uganda's national parks?",
        answer: "Camping with your own tent is the cheapest option, available from around $8–15 per night at camps like Red Chilli in Murchison Falls. Dormitory beds typically cost $10–15, and basic private rooms range from $20–50. Community-run guesthouses near Bwindi offer some of the best budget value.",
      },
      {
        question: "Are budget lodges in Uganda safe?",
        answer: "Generally yes. The properties listed here are established operations with security, and Uganda's national park areas are safe for tourists. As with any budget travel, exercise normal precautions with valuables and confirm what is included in your rate before booking.",
      },
    ],
    filter: (l) => l.priceLevel === "$" || l.priceLevel === "$$",
  },
  {
    slug: "gorilla-trekking",
    title: "Best Lodges for Gorilla Trekking in Uganda",
    h1: "Best Lodges for Gorilla Trekking in Uganda (2026)",
    seoTitle: "Best Gorilla Trekking Lodges in Uganda 2026 | Bwindi & Mgahinga",
    seoDescription: "Compare the best lodges for gorilla trekking in Bwindi and Mgahinga 2026. All sectors covered: Buhoma, Rushaga, Ruhija, Nkuringo. Budget to luxury.",
    description: "Lodges with direct access to gorilla trekking permits and starting points in Bwindi Impenetrable National Park and Mgahinga Gorilla National Park.",
    introText: "Mountain gorilla trekking is Uganda's most sought-after wildlife experience, and choosing the right lodge can make a real difference to your trip. The two parks where gorilla trekking takes place — Bwindi Impenetrable National Park and Mgahinga Gorilla National Park — each have distinct character, and Bwindi itself is divided into four sectors (Buhoma, Rushaga, Ruhija, and Nkuringo), each with its own gorilla families and accommodation options.\n\nThe best gorilla trekking lodge for you depends on which sector your permit is for, your budget, and what kind of experience you want. A luxury lodge on the forest edge in Buhoma offers a very different stay than a community guesthouse in Nkuringo — but both give you access to the same unforgettable gorilla encounter. This guide covers all options across every trekking sector.",
    howWeChose: "We include every lodge and camp that offers practical access to gorilla trekking starting points in Bwindi or Mgahinga. Properties are listed across all four Bwindi sectors and all price levels.",
    quickAnswer: "For Buhoma sector: Mahogany Springs, Bwindi Lodge, and Silverback Lodge (luxury); Buhoma Lodge and Trackers Safari Lodge (comfort); Engagi Lodge and Buhoma Community Rest Camp (budget). For Rushaga: Four Gorillas Lodge and Chameleon Hill Lodge. For Nkuringo: Clouds Mountain Gorilla Lodge. For Ruhija: Gorilla Mist Camp and Bakiga Lodge. For Mgahinga: Mount Gahinga Lodge.",
    faq: [
      {
        question: "Which Bwindi sector is best for gorilla trekking?",
        answer: "All four sectors offer excellent gorilla trekking. Buhoma is the most established with the widest range of accommodation. Rushaga has the most habituated gorilla families. Ruhija is at higher altitude with different forest scenery and good birding. Nkuringo offers the most remote and adventurous experience with dramatic views.",
      },
      {
        question: "How far in advance should I book a gorilla trekking lodge?",
        answer: "During peak season (June–September, December–February), popular lodges can fill up months in advance. Booking 3–6 months ahead is recommended for luxury properties. Budget options are often available at shorter notice, but securing your gorilla permit first is essential — lodges can be adjusted more easily than permits.",
      },
      {
        question: "Do I need to stay near my trekking sector?",
        answer: "Strongly recommended. Gorilla trekking briefings typically start at 7:30 AM, and you need to be at the sector headquarters on time. Driving between sectors on narrow mountain roads can take 2–4 hours. Stay in or very near the sector where your permit is assigned.",
      },
      {
        question: "How much does a gorilla permit cost in Uganda?",
        answer: "A gorilla trekking permit in Uganda costs $800 per person for foreign non-residents (as of 2026). This fee is set by the Uganda Wildlife Authority and is separate from lodge costs. Permits allow one hour with a gorilla family and are limited to eight trekkers per family per day.",
      },
    ],
    filter: (l) => l.gorillaTracking,
  },
  {
    slug: "families",
    title: "Best Family-Friendly Lodges in Uganda",
    h1: "Best Family-Friendly Lodges in Uganda (2026)",
    seoTitle: "Best Family-Friendly Lodges in Uganda 2026 | Safari with Kids",
    seoDescription: "Family-friendly lodges in Uganda for safaris with children. Safe, comfortable accommodation with activities for all ages, from Bwindi to Jinja.",
    description: "Family-friendly lodges with facilities and activities suitable for children, combined with wildlife experiences the whole family can enjoy.",
    introText: "Uganda is increasingly popular with families, and a growing number of lodges cater specifically to guests travelling with children. The best family lodges combine comfortable rooms (often with family configurations), safe grounds, and activities that engage children of different ages — from boat cruises and nature walks to community visits and swimming.\n\nImportant to note: children under 15 are not permitted on gorilla trekking in Bwindi or Mgahinga. However, many family-friendly lodges near these parks offer alternative activities for younger children while parents trek. For families with older teenagers, a gorilla trekking trip can be a once-in-a-lifetime shared experience.",
    howWeChose: "We include lodges that actively accommodate families — whether through room configuration, children's activities, safety features, or a combination. Properties are flagged as family-friendly based on available information and reported guest experiences.",
    quickAnswer: "Mweya Safari Lodge and Chobe Safari Lodge in Queen Elizabeth National Park, Paraa Safari Lodge in Murchison Falls, and Birdnest Resort on Lake Bunyonyi are among the best family-friendly options. Jinja Nile Resort offers adventure activities for older children, while Lake Bunyonyi Overland Resort is a relaxed budget option with swimming.",
    faq: [
      {
        question: "Can children go gorilla trekking in Uganda?",
        answer: "Children must be at least 15 years old to participate in gorilla trekking in Uganda. This is a strict rule set by the Uganda Wildlife Authority. Families with younger children can arrange alternative activities — nature walks, community visits, or bird watching — while parents do the trek.",
      },
      {
        question: "What is the best family safari destination in Uganda?",
        answer: "Queen Elizabeth National Park is often the best choice for families. It offers boat cruises on the Kazinga Channel (suitable for all ages), game drives, and a range of family-friendly lodges. Murchison Falls and Lake Mburo are also good options with activities that work for different age groups.",
      },
    ],
    filter: (l) => l.familyFriendly,
  },
  {
    slug: "eco-lodges",
    title: "Best Eco Lodges in Uganda",
    h1: "Best Eco & Community Lodges in Uganda (2026)",
    seoTitle: "Best Eco Lodges & Community Lodges in Uganda 2026 | Sustainable Safari",
    seoDescription: "Eco-friendly and community-run lodges in Uganda. Sustainable accommodation that supports conservation and local communities near gorilla trekking and safari parks.",
    description: "Lodges committed to environmental sustainability, community partnerships, and responsible tourism practices.",
    introText: "Uganda's tourism industry has deep roots in community conservation. Many of the country's best lodges were built with — or by — local communities, and several operate as non-profit enterprises where all revenue flows back into conservation and development projects.\n\nEco lodges in Uganda range from basic community guesthouses to high-end properties with sophisticated sustainability programmes. What unites them is a commitment to minimising environmental impact while maximising benefit to local people. In a country where communities live alongside mountain gorillas and chimpanzees, this approach is not just ethical — it is essential for the long-term survival of the wildlife that draws visitors in the first place.",
    howWeChose: "We include lodges with demonstrated commitments to environmental sustainability, community ownership, conservation partnerships, or eco-certification. Community-run lodges where profits support local development are highlighted.",
    quickAnswer: "Standout eco lodges include Bakiga Lodge in Ruhija (non-profit, funds water projects), Buhoma Community Rest Camp (community-run since 1993), Bwindi Lodge by Volcanoes Safaris (community partnership model), Kyambura Gorge Lodge (community coffee project), and Mihingo Lodge at Lake Mburo (eco-built into rocky hillside).",
    faq: [
      {
        question: "What makes a lodge an eco lodge in Uganda?",
        answer: "Eco lodges in Uganda typically feature some combination of: community ownership or revenue-sharing, use of local and sustainable building materials, water and energy conservation, waste management, employment of local staff, and direct contributions to conservation or community development projects.",
      },
      {
        question: "Do eco lodges cost more than regular lodges?",
        answer: "Not necessarily. Community-run lodges like Buhoma Community Rest Camp and Bakiga Lodge are among Uganda's most affordable options. Higher-end eco properties like Volcanoes Safaris lodges are priced at the luxury level, but the eco and community elements are built into the experience rather than added as a premium.",
      },
    ],
    filter: (l) => l.ecoLodge || l.category === "Eco Lodge" || l.category === "Community Lodge",
  },
  {
    slug: "honeymoon",
    title: "Best Honeymoon Lodges in Uganda",
    h1: "Best Honeymoon & Romantic Lodges in Uganda (2026)",
    seoTitle: "Best Honeymoon Lodges in Uganda 2026 | Romantic Safari Getaways",
    seoDescription: "Romantic lodges in Uganda for honeymoons and couples 2026. Intimate properties with stunning views, privacy and unforgettable wildlife experiences.",
    description: "Romantic and intimate lodges ideal for honeymoons and couples, featuring beautiful settings, privacy, and memorable experiences.",
    introText: "A Uganda honeymoon combines two things that are hard to find together elsewhere: extraordinary wildlife encounters and genuinely intimate, uncrowded luxury. Unlike more established safari destinations where vehicles queue at sightings, Uganda's parks offer a sense of discovery — and many of its best lodges have fewer than 15 rooms.\n\nThe most romantic lodges in Uganda tend to share certain qualities: stunning natural settings (crater lakes, forest canopy, river views), spacious rooms with private outdoor spaces, excellent food, and experiences you will talk about for years — tracking gorillas through mist-covered forest, watching the sun set over the Nile, or canoeing across a volcanic lake surrounded by volcanoes.",
    howWeChose: "We include lodges frequently chosen by honeymooners and couples, based on setting, room quality, privacy, and romantic atmosphere. Properties must offer something genuinely special beyond standard hotel comfort.",
    quickAnswer: "Top honeymoon choices include Kyaninga Lodge (crater lake, log cabins, infinity pool), Clouds Mountain Gorilla Lodge (above-the-clouds setting), Katara Lodge (Kazinga Channel views, boutique design), Wildwaters Lodge (private island on the Nile), and Ndali Lodge (crater lake, family-run warmth). All combine intimate scale with exceptional settings.",
    faq: [
      {
        question: "Is Uganda a good honeymoon destination?",
        answer: "Uganda is an excellent honeymoon destination for couples who want adventure combined with romance. The combination of gorilla trekking, intimate lodges, and uncrowded parks creates a deeply personal experience. It is less conventional than a beach honeymoon, but far more memorable for couples who enjoy nature and wildlife.",
      },
      {
        question: "Can you combine gorilla trekking with a honeymoon in Uganda?",
        answer: "Yes, and many couples do exactly this. A typical Uganda honeymoon might include 2–3 nights near Bwindi for gorilla trekking, followed by a safari lodge in Queen Elizabeth National Park, and a relaxing finish at Lake Bunyonyi or a crater lake lodge near Fort Portal.",
      },
    ],
    filter: (l) => l.bestFor.some((b) => b.toLowerCase().includes("honeymoon") || b.toLowerCase().includes("couple")),
  },
  {
    slug: "bwindi",
    title: "Best Lodges near Bwindi Impenetrable National Park",
    h1: "All Lodges near Bwindi Impenetrable National Park (2026)",
    seoTitle: "Best Lodges near Bwindi 2026 | All Sectors Compared | Lodge Guide",
    seoDescription: "Complete guide to lodges near Bwindi Impenetrable National Park 2026. Compare all sectors: Buhoma, Ruhija, Rushaga, Nkuringo. Budget to ultra-luxury.",
    description: "All accommodation options near Bwindi Impenetrable National Park, across the Buhoma, Ruhija, Rushaga, and Nkuringo sectors.",
    introText: "Bwindi Impenetrable National Park is home to roughly half of the world's remaining mountain gorillas, making it Uganda's most visited destination. The park is divided into four gorilla trekking sectors — Buhoma, Ruhija, Rushaga, and Nkuringo — each with its own character, gorilla families, and range of accommodation.\n\nChoosing where to stay in Bwindi depends primarily on which sector your gorilla permit is for. Trekking briefings start early in the morning, and driving between sectors can take hours on steep, winding mountain roads. This guide covers every known lodge, camp, and guesthouse across all four sectors, from ultra-luxury to basic budget options.\n\nBuhoma is the most established sector with the widest range of lodges. Rushaga has the most habituated gorilla families. Ruhija offers high-altitude forest and outstanding birding. Nkuringo provides the most remote and dramatic setting, perched high above the Rift Valley.",
    howWeChose: "We include every lodge and accommodation option we have verified near Bwindi Impenetrable National Park, across all four trekking sectors. No payment is accepted for listing or ranking.",
    quickAnswer: "Bwindi has over 25 lodges across four sectors. Buhoma sector has the most options (10+), from Sanctuary Gorilla Forest Camp (ultra-luxury inside the park) to Buhoma Community Rest Camp (budget, community-run). Rushaga offers Four Gorillas Lodge (luxury) and Ichumbi Gorilla Lodge (comfort). Ruhija has Bakiga Lodge (community, non-profit) and Gorilla Mist Camp. Nkuringo features Clouds Mountain Gorilla Lodge (ultra-luxury) and Nkuringo Bwindi Gorilla Lodge.",
    faq: [
      {
        question: "How many lodges are there in Bwindi?",
        answer: "Bwindi has over 25 established lodges and camps across its four sectors. Buhoma has the widest selection (10+ properties), followed by Rushaga and Ruhija. Nkuringo has fewer options but includes some of the most dramatic settings.",
      },
      {
        question: "Which Bwindi sector has the best lodges?",
        answer: "Buhoma has the widest range of quality lodges from budget to ultra-luxury. Rushaga has strong mid-range and luxury options. Ruhija offers excellent community and mid-range lodges. Nkuringo has fewer properties but Clouds Mountain Gorilla Lodge is among Uganda's finest.",
      },
      {
        question: "Should I stay inside or outside Bwindi National Park?",
        answer: "Only two lodges are located inside the park boundaries (in the Buhoma sector). Most accommodation is on the park edge, which offers equally good trekking access. Being outside the park does not affect your gorilla trekking experience — what matters is being in the right sector.",
      },
    ],
    filter: (l) => l.region === "bwindi",
  },
  {
    slug: "queen-elizabeth",
    title: "Best Lodges near Queen Elizabeth National Park",
    h1: "Best Lodges near Queen Elizabeth National Park (2026)",
    seoTitle: "Best Lodges near Queen Elizabeth National Park 2026 | Lodge Guide",
    seoDescription: "Compare lodges in Queen Elizabeth National Park 2026. Mweya Peninsula, Ishasha tree-climbing lions, Kazinga Channel. Game drives and boat safaris.",
    description: "Accommodation in and around Queen Elizabeth National Park, from the Mweya Peninsula to the Ishasha sector.",
    introText: "Queen Elizabeth National Park is Uganda's most visited safari park, and for good reason. Spanning nearly 2,000 square kilometres, it offers extraordinary biodiversity — from the Kazinga Channel boat cruise (one of Africa's best wildlife boat trips) to the famous tree-climbing lions of Ishasha, chimpanzee trekking in Kyambura Gorge, and classic savanna game drives on the Kasenyi plains.\n\nAccommodation in and around the park ranges from budget bandas to some of Uganda's finest luxury lodges. The main accommodation hubs are the Mweya Peninsula (the park's heart), the Katunguru area near the main gate, the Kyambura area for chimpanzee trekking, and the remote Ishasha sector in the south for tree-climbing lions.",
    howWeChose: "We include all verified lodges in and around Queen Elizabeth National Park, including the Ishasha sector. Properties span all price levels from budget to luxury.",
    quickAnswer: "Top picks: Mweya Safari Lodge (classic, on the peninsula), Katara Lodge (boutique, elevated views), Kyambura Gorge Lodge (chimp trekking + game drives), Kasenyi Safari Camp (inside the park). For Ishasha: Ishasha Wilderness Camp (riverside tented camp) and Enjojo Lodge (eco-friendly). Budget: Bush Lodge near Katunguru.",
    faq: [
      {
        question: "Where is the best place to stay in Queen Elizabeth National Park?",
        answer: "The Mweya Peninsula is the most popular base, with direct access to game drives and the Kazinga Channel boat cruise. For tree-climbing lions, stay in the Ishasha sector. For chimpanzee trekking, lodges near Kyambura Gorge are ideal.",
      },
      {
        question: "Can I see the Big Five in Queen Elizabeth National Park?",
        answer: "Queen Elizabeth has four of the Big Five — lion, leopard, buffalo, and elephant. Rhinos are not found here. To see all Big Five in Uganda, combine Queen Elizabeth with a stop at Ziwa Rhino Sanctuary.",
      },
    ],
    filter: (l) => l.region === "queen-elizabeth" || l.region === "ishasha",
  },
  {
    slug: "kibale",
    title: "Best Lodges near Kibale Forest",
    h1: "Best Lodges near Kibale National Park (2026)",
    seoTitle: "Best Lodges near Kibale National Park 2026 | Chimpanzee Trekking",
    seoDescription: "Lodges near Kibale National Park for chimpanzee tracking 2026. Compare accommodation near the primate capital of the world, including Fort Portal crater lakes.",
    description: "Lodges and camps near Kibale National Park, positioned for chimpanzee tracking and primate watching.",
    introText: "Kibale National Park is known as the primate capital of the world, home to 13 primate species including an estimated 1,500 chimpanzees. Chimpanzee tracking here is one of East Africa's most rewarding wildlife experiences — more physically accessible than gorilla trekking and with excellent success rates.\n\nAccommodation near Kibale splits into two areas: lodges right at the park boundary near the Kanyanchu tracking centre, and properties among the stunning crater lakes near Fort Portal. Both work well as bases for chimp tracking, though lodges nearer Kanyanchu offer the most convenience for early-morning starts. The crater lake lodges add a different dimension — several are among Uganda's most beautiful properties.",
    howWeChose: "We include lodges near Kibale National Park and in the Fort Portal crater lakes area, all within practical driving distance of the Kanyanchu chimpanzee tracking centre.",
    quickAnswer: "For proximity: Primate Lodge (inside the park, steps from tracking), Kibale Forest Camp, Turaco Treetops Lodge. For crater lake luxury: Kyaninga Lodge (ultra-luxury), Ndali Lodge (family-run, exceptional food). All are within 30–45 minutes of Kanyanchu.",
    faq: [
      {
        question: "What is the closest lodge to Kibale chimpanzee tracking?",
        answer: "Primate Lodge Kibale is the only lodge inside the national park, located just steps from the Kanyanchu tracking centre. This gives guests the easiest access to both morning chimpanzee tracking and afternoon activities like the nocturnal primate walk.",
      },
      {
        question: "Can I combine Kibale with Queen Elizabeth National Park?",
        answer: "Yes, this is one of Uganda's most popular safari combinations. Kibale and the northern sector of Queen Elizabeth are about 2–3 hours apart by road. Many itineraries spend 1–2 nights near Kibale for chimp tracking, then continue south for game drives and the Kazinga Channel.",
      },
    ],
    filter: (l) => l.region === "kibale" || l.region === "fort-portal",
  },
  {
    slug: "game-drives",
    title: "Best Lodges for Game Drives in Uganda",
    h1: "Best Safari Lodges for Game Drives in Uganda (2026)",
    seoTitle: "Best Safari Lodges for Game Drives in Uganda 2026 | Lodge Guide",
    seoDescription: "Safari lodges with game drive access in Uganda 2026. Queen Elizabeth, Murchison Falls, Kidepo Valley and Lake Mburo. Compare accommodation for wildlife safaris.",
    description: "Lodges positioned for game drive safaris in Uganda's top wildlife parks.",
    introText: "Uganda is not typically the first country that comes to mind for classic savanna game drives, but it offers some of East Africa's most rewarding safari experiences — often with fewer vehicles and more personal encounters than the busy parks of Kenya and Tanzania.\n\nThe four main game drive parks each offer a distinct experience. Queen Elizabeth National Park combines savanna, wetlands, and the Kazinga Channel. Murchison Falls National Park has the biggest herds and the dramatic Victoria Nile. Kidepo Valley is remote and spectacular, with species found nowhere else in Uganda. Lake Mburo is compact and close to Kampala, ideal for a quick safari.\n\nThe lodges listed here are positioned for direct game drive access in these parks, from budget camps to luxury riverside lodges.",
    howWeChose: "We include lodges in or directly adjacent to Uganda's main game drive parks: Queen Elizabeth, Murchison Falls, Kidepo Valley, and Lake Mburo. All listed properties offer practical game drive access.",
    quickAnswer: "Queen Elizabeth: Mweya Safari Lodge, Kasenyi Safari Camp. Murchison Falls: Paraa Safari Lodge, Baker's Lodge, Nile Safari Lodge. Kidepo: Apoka Safari Lodge (the only luxury option inside the park). Lake Mburo: Mihingo Lodge (also offers horseback safaris). Budget: Red Chilli Rest Camp (Murchison) and Bush Lodge (Queen Elizabeth).",
    faq: [
      {
        question: "Which Uganda park is best for game drives?",
        answer: "Queen Elizabeth and Murchison Falls are the most accessible and offer the widest range of wildlife. Kidepo Valley is considered the most spectacular but requires more effort to reach. Lake Mburo is the best for a short safari from Kampala. Each park has different strengths — Queen Elizabeth for diversity, Murchison for big herds, Kidepo for remote wilderness.",
      },
      {
        question: "Can I see lions on game drives in Uganda?",
        answer: "Yes. Lions are found in Queen Elizabeth National Park (including the famous tree-climbing lions of Ishasha), Murchison Falls National Park, and Kidepo Valley National Park. Sightings are not guaranteed but are common, especially with experienced guides who know the parks well.",
      },
    ],
    filter: (l) => l.gameDrive,
  },
];

export const comparisonPagesMap: Record<string, ComparisonPage> = Object.fromEntries(
  comparisonPages.map((p) => [p.slug, p])
);
