import type { Lodge } from "./lodge-types";

export interface ProgrammaticPage {
  slug: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  quickAnswer: string;
  filter: (lodge: Lodge) => boolean;
  faq: { question: string; answer: string }[];
}

// Flat keyword-rich URLs: /gorilla-trekking-lodges-uganda
export const nearPages: ProgrammaticPage[] = [
  {
    slug: "gorilla-trekking-lodges-uganda",
    h1: "Gorilla Trekking Lodges in Uganda (2026)",
    seoTitle: "Gorilla Trekking Lodges Uganda 2026 | All Sectors & Budgets",
    seoDescription: "Find lodges near gorilla trekking starting points in Bwindi and Mgahinga. All four Bwindi sectors covered. Budget to luxury options compared.",
    intro: "Every gorilla trekking experience in Uganda starts from a briefing point in one of four Bwindi sectors (Buhoma, Ruhija, Rushaga, Nkuringo) or at Mgahinga Gorilla National Park. Staying close to your sector's briefing point is essential — morning briefings start at 7:30 AM and transfers between sectors take hours on mountain roads.",
    quickAnswer: "The closest lodges to gorilla trekking briefing points include Buhoma Lodge and Sanctuary Gorilla Forest Camp (Buhoma sector), Four Gorillas Lodge and Ichumbi Gorilla Lodge (Rushaga), Gorilla Mist Camp and Bakiga Lodge (Ruhija), Clouds Mountain Gorilla Lodge (Nkuringo), and Mount Gahinga Lodge (Mgahinga).",
    filter: (l) => l.gorillaTracking,
    faq: [
      { question: "How close should I stay to the gorilla trekking briefing point?", answer: "Ideally within 30 minutes' drive or less. Briefings start at 7:30 AM and late arrivals risk losing their spot. Most lodges near the park gates are within 5–15 minutes." },
      { question: "Can I trek gorillas from a lodge in a different sector?", answer: "Technically possible but not recommended. Driving between Bwindi sectors takes 2–4 hours on steep mountain roads. Always stay in the sector your permit is assigned to." },
    ],
  },
  {
    slug: "kazinga-channel-lodges-uganda",
    h1: "Lodges near the Kazinga Channel, Uganda (2026)",
    seoTitle: "Kazinga Channel Lodges Uganda 2026 | Boat Safari Accommodation",
    seoDescription: "Accommodation near the Kazinga Channel boat cruise in Queen Elizabeth National Park. Lodges on the Mweya Peninsula and surrounding area.",
    intro: "The Kazinga Channel connects Lake Edward and Lake George in Queen Elizabeth National Park. The boat cruise along the channel is one of Africa's best wildlife boat trips, with hippos, elephants, buffalo, and hundreds of bird species visible from the water. Lodges on or near the Mweya Peninsula offer the most convenient access.",
    quickAnswer: "Mweya Safari Lodge sits directly on the Kazinga Channel. Katara Lodge offers elevated views over the channel. Kasenyi Safari Camp and Bush Lodge are also within easy reach of the boat departure point.",
    filter: (l) => l.region === "queen-elizabeth" && l.boatSafari,
    faq: [
      { question: "How long is the Kazinga Channel boat cruise?", answer: "The standard cruise takes about 2 hours. Departures are typically in the afternoon. Some lodges arrange private cruises or sunset trips." },
    ],
  },
  {
    slug: "tree-climbing-lions-lodges-ishasha",
    h1: "Lodges near the Tree-Climbing Lions in Ishasha (2026)",
    seoTitle: "Tree-Climbing Lions Lodges Ishasha Uganda 2026",
    seoDescription: "Find lodges near the famous tree-climbing lions in the Ishasha sector of Queen Elizabeth National Park. Tented camps and eco-lodges.",
    intro: "The Ishasha sector in the southern part of Queen Elizabeth National Park is famous for its tree-climbing lions — a rare behaviour seen in only a few places in Africa. Lions are regularly spotted lounging in the branches of large fig trees. The area is remote and sees fewer visitors than the northern sectors, creating a more exclusive safari experience.",
    quickAnswer: "Ishasha Wilderness Camp is the closest tented camp to tree-climbing lion territory, set on the Ntungwe River. Enjojo Lodge offers eco-friendly accommodation nearby. Ishasha Jungle Lodge and Topi Lodge provide additional options in the sector.",
    filter: (l) => l.region === "ishasha",
    faq: [
      { question: "When is the best time to see tree-climbing lions?", answer: "Tree-climbing lions can be spotted year-round, but the dry seasons (June–September, December–February) generally offer better game viewing as vegetation is thinner." },
    ],
  },
  {
    slug: "chimpanzee-trekking-lodges-uganda",
    h1: "Chimpanzee Trekking Lodges in Uganda (2026)",
    seoTitle: "Chimpanzee Trekking Lodges Uganda 2026 | Kibale & Budongo",
    seoDescription: "Lodges near chimpanzee tracking in Kibale National Park, Kyambura Gorge, and Budongo Forest. Compare accommodation for chimp trekking.",
    intro: "Chimpanzee trekking is available at several locations in Uganda, with Kibale National Park (near Fort Portal) offering the highest success rates and largest chimp population. Kyambura Gorge in Queen Elizabeth National Park and Budongo Forest near Murchison Falls provide additional opportunities. Each location has distinct accommodation options.",
    quickAnswer: "For Kibale: Primate Lodge (inside the park), Turaco Treetops Lodge, and Kibale Forest Camp. For Kyambura: Kyambura Gorge Lodge. For Budongo: Budongo Eco Lodge. Crater lake lodges near Fort Portal also work well as a base for Kibale.",
    filter: (l) => l.chimpanzeeTrekking,
    faq: [
      { question: "Where is the best place for chimpanzee trekking in Uganda?", answer: "Kibale National Park has the highest density of chimpanzees (about 1,500) and the best tracking success rate. Kyambura Gorge offers a different experience in a dramatic valley setting. Budongo Forest near Murchison Falls is less visited." },
    ],
  },
  {
    slug: "murchison-falls-lodges-uganda",
    h1: "Lodges in Murchison Falls National Park (2026)",
    seoTitle: "Murchison Falls Lodges Uganda 2026 | Nile Safari Accommodation",
    seoDescription: "Accommodation in and around Murchison Falls National Park. Nile boat cruises, game drives, and the dramatic Murchison Falls waterfall.",
    intro: "Murchison Falls National Park is Uganda's largest park, where the Victoria Nile forces through a 7-metre gap to create one of the world's most powerful waterfalls. Accommodation is concentrated on the south bank (near the Paraa ferry crossing) and the north bank. South bank lodges offer easier access to chimpanzee tracking in Budongo Forest, while north bank lodges are closer to the main game drive areas.",
    quickAnswer: "Paraa Safari Lodge is the historic flagship on the Nile. Baker's Lodge and Nile Safari Lodge offer luxury on the south bank. Pakuba Safari Lodge serves the north bank. Red Chilli Rest Camp is the top budget option inside the park.",
    filter: (l) => l.region === "murchison-falls",
    faq: [
      { question: "Should I stay on the north or south bank of Murchison Falls?", answer: "South bank lodges are more numerous and offer access to both game drives (via ferry) and Budongo Forest chimp tracking. North bank lodges put you directly in the game drive area but have fewer options." },
    ],
  },
  {
    slug: "source-of-the-nile-lodges-jinja",
    h1: "Lodges near the Source of the Nile in Jinja (2026)",
    seoTitle: "Source of the Nile Lodges Jinja Uganda 2026",
    seoDescription: "Hotels and lodges near the source of the Nile in Jinja. White-water rafting, adventure sports, and riverside accommodation.",
    intro: "Jinja sits at the point where the Victoria Nile flows out of Lake Victoria — historically considered the source of the Nile. The town has become East Africa's adventure capital, offering world-class white-water rafting, kayaking, bungee jumping, and more. Riverside lodges provide a relaxed base between activities.",
    quickAnswer: "Wildwaters Lodge (exclusive private island on the Nile), Jinja Nile Resort (large riverside resort), and Nile River Camp (safari camp atmosphere). Budget travellers can find simple guesthouses in Jinja town.",
    filter: (l) => l.region === "jinja",
    faq: [
      { question: "How far is Jinja from Kampala?", answer: "About 2–2.5 hours by road (approximately 80 km). The drive is straightforward on a good tarmac road." },
    ],
  },
  {
    slug: "lake-bunyonyi-lodges-uganda",
    h1: "Lodges on Lake Bunyonyi, Uganda (2026)",
    seoTitle: "Lake Bunyonyi Lodges Uganda 2026 | Lakeside Accommodation",
    seoDescription: "Compare lakeside lodges and camps on Lake Bunyonyi. Swimming, canoeing, island hopping. Popular stopover between Bwindi and Queen Elizabeth.",
    intro: "Lake Bunyonyi is one of Africa's deepest and most beautiful lakes, surrounded by terraced hillsides and dotted with 29 islands. The lake is bilharzia-free and safe for swimming. It is a popular stopover for travellers on the gorilla trekking circuit, sitting roughly between Bwindi and Queen Elizabeth National Park.",
    quickAnswer: "Birdnest Resort offers panoramic hilltop views. Arcadia Cottages provides comfortable lakeside accommodation. Lake Bunyonyi Overland Resort is the top budget choice. Lake Bunyonyi Eco Resort and Crater Bay Cottages add further mid-range options.",
    filter: (l) => l.region === "lake-bunyonyi",
    faq: [
      { question: "Is Lake Bunyonyi safe for swimming?", answer: "Yes. Lake Bunyonyi is one of the few lakes in Uganda that is free of bilharzia (schistosomiasis), making it safe for swimming." },
    ],
  },
  {
    slug: "kidepo-valley-lodges-uganda",
    h1: "Lodges in Kidepo Valley National Park (2026)",
    seoTitle: "Kidepo Valley Lodges Uganda 2026 | Remote Safari Accommodation",
    seoDescription: "Accommodation in Uganda's most remote park. Kidepo Valley lodges and camps from budget to luxury in the Narus Valley.",
    intro: "Kidepo Valley National Park in Uganda's far northeast is regularly ranked among Africa's most beautiful parks. Its semi-arid landscape of open plains, rocky outcrops, and palm-lined valleys is unlike anything else in Uganda. Wildlife includes species found nowhere else in the country — cheetah, striped hyena, and greater kudu. Accommodation options are limited compared to other parks, which adds to the exclusive feel.",
    quickAnswer: "Apoka Safari Lodge is the only luxury option inside the park. Kidepo Savannah Lodge offers mid-range accommodation. Apoka Rest Camp provides the most basic option. Adere Safari Lodge and Nga Moru Wilderness Camp are additional choices.",
    filter: (l) => l.region === "kidepo",
    faq: [
      { question: "How do I get to Kidepo Valley?", answer: "By road (10–12 hours from Kampala) or charter flight to Apoka airstrip (about 2 hours). The road passes through the Karamoja region and is an adventure in itself." },
    ],
  },
];

// Flat keyword-rich URLs: /buhoma-sector-lodges-bwindi
export const subregionPages: {
  slug: string;
  subregion: string;
  region: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
}[] = [
  { slug: "buhoma-sector-lodges-bwindi", subregion: "Buhoma", region: "bwindi", h1: "Lodges in Buhoma Sector, Bwindi (2026)", seoTitle: "Buhoma Sector Lodges Bwindi 2026 | Gorilla Trekking Accommodation", seoDescription: "All lodges in the Buhoma sector of Bwindi Impenetrable National Park. The most established gorilla trekking sector with the widest range of accommodation." },
  { slug: "rushaga-sector-lodges-bwindi", subregion: "Rushaga", region: "bwindi", h1: "Lodges in Rushaga Sector, Bwindi (2026)", seoTitle: "Rushaga Sector Lodges Bwindi 2026 | Gorilla Trekking Accommodation", seoDescription: "Lodges in the Rushaga sector of Bwindi, home to the most habituated gorilla families. Budget to luxury accommodation compared." },
  { slug: "ruhija-sector-lodges-bwindi", subregion: "Ruhija", region: "bwindi", h1: "Lodges in Ruhija Sector, Bwindi (2026)", seoTitle: "Ruhija Sector Lodges Bwindi 2026 | High-Altitude Gorilla Trekking", seoDescription: "Accommodation in Ruhija, the high-altitude sector of Bwindi. Community lodges, eco camps, and gorilla trekking at 2,300m." },
  { slug: "nkuringo-sector-lodges-bwindi", subregion: "Nkuringo", region: "bwindi", h1: "Lodges in Nkuringo Sector, Bwindi (2026)", seoTitle: "Nkuringo Sector Lodges Bwindi 2026 | Remote Gorilla Trekking", seoDescription: "Lodges in Nkuringo, Bwindi's most remote sector. Dramatic Rift Valley views and an adventurous gorilla trekking experience." },
  { slug: "mweya-peninsula-lodges-queen-elizabeth", subregion: "Mweya Peninsula", region: "queen-elizabeth", h1: "Lodges on the Mweya Peninsula (2026)", seoTitle: "Mweya Peninsula Lodges Queen Elizabeth 2026", seoDescription: "Accommodation on the Mweya Peninsula in Queen Elizabeth National Park. The park's central hub for boat cruises and game drives." },
  { slug: "kasenyi-plains-lodges-queen-elizabeth", subregion: "Kasenyi", region: "queen-elizabeth", h1: "Lodges near Kasenyi Plains, Queen Elizabeth (2026)", seoTitle: "Kasenyi Plains Lodges Queen Elizabeth 2026", seoDescription: "Lodges near the Kasenyi plains in Queen Elizabeth National Park. The best area for lion sightings and classic game drives." },
];

export const nearPagesMap: Record<string, ProgrammaticPage> = Object.fromEntries(
  nearPages.map((p) => [p.slug, p])
);

export const subregionPagesMap: Record<string, typeof subregionPages[number]> = Object.fromEntries(
  subregionPages.map((p) => [p.slug, p])
);

// All programmatic slugs for the catch-all route
export const allProgrammaticSlugs = [
  ...nearPages.map((p) => p.slug),
  ...subregionPages.map((p) => p.slug),
];
