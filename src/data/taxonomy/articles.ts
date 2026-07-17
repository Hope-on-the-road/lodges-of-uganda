import type { Article } from "./types";
import * as E from "./entities";

export const articles: Article[] = [
  // ═══════════════════════════════════════════
  // Accommodation Industry (34)
  // ═══════════════════════════════════════════
  { slug: "accommodation-classification-uganda", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "accommodation-quality-standards-uganda", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "accommodation-types-uganda", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "alebtong-hotels-accommodation", primaryCategory: "accommodation-industry", primaryEntity: E.ALEBTONG, entities: [], searchIntent: "informational" },
  { slug: "factory-hotel-inspections-kampala", primaryCategory: "accommodation-industry", primaryEntity: E.KAMPALA, entities: [], searchIntent: "informational" },
  { slug: "fort-portal-tourism-infrastructure", primaryCategory: "accommodation-industry", primaryEntity: E.FORT_PORTAL, entities: [E.RWENZORI], searchIntent: "informational" },
  { slug: "hospitality-compliance-uganda", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "hospitality-infrastructure-quality-uganda", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "hotel-industry-kira-tourism", primaryCategory: "accommodation-industry", primaryEntity: E.KIRA, entities: [E.WAKISO], searchIntent: "informational" },
  { slug: "hotel-occupancy-fortportal", primaryCategory: "accommodation-industry", primaryEntity: E.FORT_PORTAL, entities: [E.RWENZORI], searchIntent: "informational" },
  { slug: "hotel-occupancy-quarterly-uganda", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "hotel-registration-kampala", primaryCategory: "accommodation-industry", primaryEntity: E.KAMPALA, entities: [], searchIntent: "informational" },
  { slug: "hotel-registration-tax-kampala", primaryCategory: "accommodation-industry", primaryEntity: E.KAMPALA, entities: [], searchIntent: "informational" },
  { slug: "hotel-star-classification-kampala", primaryCategory: "accommodation-industry", primaryEntity: E.KAMPALA, entities: [], searchIntent: "informational" },
  { slug: "kamuli-accommodation-standards", primaryCategory: "accommodation-industry", primaryEntity: E.KAMULI, entities: [], searchIntent: "informational" },
  { slug: "kamuli-night-accommodation", primaryCategory: "accommodation-industry", primaryEntity: E.KAMULI, entities: [], searchIntent: "informational" },
  { slug: "kapelebyong-guest-registration", primaryCategory: "accommodation-industry", primaryEntity: E.KAPELEBYONG, entities: [], searchIntent: "informational" },
  { slug: "kapelebyong-hospitality-inspections", primaryCategory: "accommodation-industry", primaryEntity: E.KAPELEBYONG, entities: [], searchIntent: "informational" },
  { slug: "kapelebyong-private-sector-expansion", primaryCategory: "accommodation-industry", primaryEntity: E.KAPELEBYONG, entities: [], searchIntent: "informational" },
  { slug: "kapelebyong-tourism-investment", primaryCategory: "accommodation-industry", primaryEntity: E.KAPELEBYONG, entities: [], searchIntent: "informational" },
  { slug: "kapelebyong-tourism-satisfaction", primaryCategory: "accommodation-industry", primaryEntity: E.KAPELEBYONG, entities: [], searchIntent: "informational" },
  { slug: "kira-hotel-revenue-strategy", primaryCategory: "accommodation-industry", primaryEntity: E.KIRA, entities: [E.WAKISO], searchIntent: "informational" },
  { slug: "kyenjojo-hospitality-registration", primaryCategory: "accommodation-industry", primaryEntity: E.KYENJOJO, entities: [], searchIntent: "informational" },
  { slug: "kyenjojo-hotel-rooms-growth", primaryCategory: "accommodation-industry", primaryEntity: E.KYENJOJO, entities: [], searchIntent: "informational" },
  { slug: "kyenjojo-tourism-quality-standards", primaryCategory: "accommodation-industry", primaryEntity: E.KYENJOJO, entities: [], searchIntent: "informational" },
  { slug: "lodges-hotels-by-region", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "private-sector-hotels-fortportal", primaryCategory: "accommodation-industry", primaryEntity: E.FORT_PORTAL, entities: [E.RWENZORI], searchIntent: "informational" },
  { slug: "property-revaluation-kampala-lodges", primaryCategory: "accommodation-industry", primaryEntity: E.KAMPALA, entities: [], searchIntent: "informational" },
  { slug: "restaurants-accommodation-uganda", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "tourism-accommodation-establishments", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "uganda-accommodation-statistics", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "uganda-hotel-count-statistics", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "uganda-hotels-accommodation-count", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "uganda-rooms-beds-occupancy", primaryCategory: "accommodation-industry", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },

  // ═══════════════════════════════════════════
  // Accommodation Guides (17)
  // ═══════════════════════════════════════════
  { slug: "backpacker-karamoja-budget-travel", primaryCategory: "accommodation-guides", primaryEntity: E.KARAMOJA, entities: [E.BUDGET, E.BACKPACKER], searchIntent: "commercial-investigation" },
  { slug: "bakiga-vs-mulehe-lodge", primaryCategory: "accommodation-guides", primaryEntity: E.BWINDI, entities: [E.BAKIGA_LODGE, E.MULEHE_LODGE], searchIntent: "commercial-investigation" },
  { slug: "best-lodges-uganda", primaryCategory: "accommodation-guides", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [E.LUXURY], searchIntent: "commercial-investigation" },
  { slug: "birdnest-vs-gorilla-safari-lodge", primaryCategory: "accommodation-guides", primaryEntity: E.BWINDI, entities: [E.BIRDNEST, E.GORILLA_SAFARI_LODGE], searchIntent: "commercial-investigation" },
  { slug: "budget-vs-luxury-uganda", primaryCategory: "accommodation-guides", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [E.BUDGET, E.LUXURY], searchIntent: "commercial-investigation" },
  { slug: "bwindi-lodges-comparison", primaryCategory: "accommodation-guides", primaryEntity: E.BWINDI_NP, entities: [E.BWINDI], searchIntent: "commercial-investigation" },
  { slug: "family-lodges-bwindi", primaryCategory: "accommodation-guides", primaryEntity: E.BWINDI_NP, entities: [E.BWINDI, E.FAMILY], searchIntent: "commercial-investigation" },
  { slug: "kampala-lodges", primaryCategory: "accommodation-guides", primaryEntity: E.KAMPALA, entities: [], searchIntent: "commercial-investigation" },
  { slug: "lodge-uganda-guide", primaryCategory: "accommodation-guides", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "lodges-bwindi-gorilla-trekking", primaryCategory: "accommodation-guides", primaryEntity: E.BWINDI_NP, entities: [E.BWINDI, E.GORILLA_TREKKING], searchIntent: "commercial-investigation" },
  { slug: "lodges-in-bwindi", primaryCategory: "accommodation-guides", primaryEntity: E.BWINDI_NP, entities: [E.BWINDI], searchIntent: "commercial-investigation" },
  { slug: "lodges-uganda", primaryCategory: "accommodation-guides", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "commercial-investigation" },
  { slug: "lodges-uganda-sustainability-standards", primaryCategory: "accommodation-guides", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [E.SUSTAINABILITY], searchIntent: "informational" },
  { slug: "luxury-lodges-bwindi", primaryCategory: "accommodation-guides", primaryEntity: E.BWINDI_NP, entities: [E.BWINDI, E.LUXURY], searchIntent: "commercial-investigation" },
  { slug: "safari-lodges-uganda", primaryCategory: "accommodation-guides", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [E.SAFARI], searchIntent: "commercial-investigation" },
  { slug: "top-10-lodges-bwindi", primaryCategory: "accommodation-guides", primaryEntity: E.BWINDI_NP, entities: [E.BWINDI], searchIntent: "commercial-investigation" },
  { slug: "uganda-lodge", primaryCategory: "accommodation-guides", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "commercial-investigation" },

  // ═══════════════════════════════════════════
  // Destinations (22)
  // ═══════════════════════════════════════════
  { slug: "busia-tourism-infrastructure", primaryCategory: "destinations", primaryEntity: E.BUSIA, entities: [], searchIntent: "informational" },
  { slug: "chaking-ecotourism-centre", primaryCategory: "destinations", primaryEntity: E.MUKONO, entities: [E.FOREST_TOURISM], searchIntent: "informational" },
  { slug: "kajjansi-town-council-wakiso", primaryCategory: "destinations", primaryEntity: E.KAJJANSI, entities: [E.WAKISO], searchIntent: "informational" },
  { slug: "kamuli-tourism-facilities", primaryCategory: "destinations", primaryEntity: E.KAMULI, entities: [], searchIntent: "informational" },
  { slug: "kapelebyong-tourism-facilities", primaryCategory: "destinations", primaryEntity: E.KAPELEBYONG, entities: [], searchIntent: "informational" },
  { slug: "kapelebyong-tourism-potential", primaryCategory: "destinations", primaryEntity: E.KAPELEBYONG, entities: [], searchIntent: "informational" },
  { slug: "karamaga-leisure-park-uganda", primaryCategory: "destinations", primaryEntity: E.WESTERN, entities: [E.LEISURE], searchIntent: "informational" },
  { slug: "kasangati-town-council-guide", primaryCategory: "destinations", primaryEntity: E.KASANGATI, entities: [E.WAKISO], searchIntent: "informational" },
  { slug: "kasanje-town-council-wakiso", primaryCategory: "destinations", primaryEntity: E.KASANJE, entities: [E.WAKISO], searchIntent: "informational" },
  { slug: "katabi-town-council-entebbe", primaryCategory: "destinations", primaryEntity: E.KATABI, entities: [E.ENTEBBE, E.WAKISO], searchIntent: "informational" },
  { slug: "kavumba-recreation-centre-wakiso", primaryCategory: "destinations", primaryEntity: E.KAVUMBA, entities: [E.WAKISO, E.RECREATION], searchIntent: "informational" },
  { slug: "kyengera-town-council-wakiso", primaryCategory: "destinations", primaryEntity: E.KYENGERA, entities: [E.WAKISO], searchIntent: "informational" },
  { slug: "kyenjojo-tourism-development-plan", primaryCategory: "destinations", primaryEntity: E.KYENJOJO, entities: [], searchIntent: "informational" },
  { slug: "lira-city-hospitality-lango", primaryCategory: "destinations", primaryEntity: E.LIRA, entities: [E.LANGO], searchIntent: "informational" },
  { slug: "masulita-town-council-wakiso", primaryCategory: "destinations", primaryEntity: E.MASULITA, entities: [E.WAKISO], searchIntent: "informational" },
  { slug: "mpatti-peninsula-divine-beach", primaryCategory: "destinations", primaryEntity: E.LAKE_VICTORIA, entities: [E.BEACH], searchIntent: "informational" },
  { slug: "mukono-district-development", primaryCategory: "destinations", primaryEntity: E.MUKONO, entities: [], searchIntent: "informational" },
  { slug: "nakivubo-wetland-park-facilities", primaryCategory: "destinations", primaryEntity: E.KAMPALA, entities: [E.WETLAND_WALK], searchIntent: "informational" },
  { slug: "ngamba-island-chimpanzee-tourism", primaryCategory: "destinations", primaryEntity: E.LAKE_VICTORIA, entities: [E.CHIMPANZEE, E.CHIMP_TREKKING], searchIntent: "informational" },
  { slug: "ssese-islands-guide", primaryCategory: "destinations", primaryEntity: E.LAKE_VICTORIA, entities: [E.ISLAND_HOLIDAY], searchIntent: "informational" },
  { slug: "timu-eco-camp-kaabong", primaryCategory: "destinations", primaryEntity: E.KARAMOJA, entities: [E.KAABONG, E.ECO_CAMP], searchIntent: "informational" },
  { slug: "wakiso-town-council-guide", primaryCategory: "destinations", primaryEntity: E.WAKISO, entities: [], searchIntent: "informational" },

  // ═══════════════════════════════════════════
  // Activities (9)
  // ═══════════════════════════════════════════
  { slug: "deks-safaris-murchison", primaryCategory: "activities", primaryEntity: E.MURCHISON_NP, entities: [E.DEKS_SAFARIS, E.SAFARI], searchIntent: "commercial-investigation" },
  { slug: "golden-monkey-mgahinga-guide", primaryCategory: "activities", primaryEntity: E.MGAHINGA_NP, entities: [E.GOLDEN_MONKEY, E.GOLDEN_MONKEY_TREKKING], searchIntent: "informational" },
  { slug: "nturo-safaris-buhoma", primaryCategory: "activities", primaryEntity: E.BWINDI, entities: [E.NTURO_SAFARIS, E.GORILLA_TREKKING], searchIntent: "commercial-investigation" },
  { slug: "nturo-safaris-gorilla-trekking", primaryCategory: "activities", primaryEntity: E.BWINDI, entities: [E.GORILLA_TREKKING, E.NTURO_SAFARIS], searchIntent: "commercial-investigation" },
  { slug: "self-drive-camping-karamoja", primaryCategory: "activities", primaryEntity: E.KARAMOJA, entities: [E.SELF_DRIVE, E.CAMPING, E.ADVENTURE], searchIntent: "informational" },
  { slug: "terraces-nakapiripirit-agrotourism", primaryCategory: "activities", primaryEntity: E.KARAMOJA, entities: [E.NAKAPIRIPIRIT, E.AGROTOURISM], searchIntent: "informational" },
  { slug: "trek-safaris-uganda-review", primaryCategory: "activities", primaryEntity: E.TREK_SAFARIS, entities: [], searchIntent: "commercial-investigation" },
  { slug: "turigye-tours", primaryCategory: "activities", primaryEntity: E.TURIGYE_TOURS, entities: [], searchIntent: "commercial-investigation" },
  { slug: "uganda-safari-operators", primaryCategory: "activities", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [E.SAFARI], searchIntent: "commercial-investigation" },

  // ═══════════════════════════════════════════
  // Travel Planning (7)
  // ═══════════════════════════════════════════
  { slug: "kampala-infrastructure-safari-travel", primaryCategory: "travel-planning", primaryEntity: E.KAMPALA, entities: [E.SAFARI], searchIntent: "informational" },
  { slug: "kampala-jinja-highway-rest-stops", primaryCategory: "travel-planning", primaryEntity: E.KAMPALA, entities: [E.JINJA, E.HIGHWAY, E.REST_STOPS], searchIntent: "informational" },
  { slug: "kampala-roads-uganda", primaryCategory: "travel-planning", primaryEntity: E.KAMPALA, entities: [E.ROADS, E.BODA_BODA], searchIntent: "informational" },
  { slug: "nturo-safaris-kampala-guide", primaryCategory: "travel-planning", primaryEntity: E.KAMPALA, entities: [E.NTURO_SAFARIS], searchIntent: "informational" },
  { slug: "stopover-kampala-jinja-highway", primaryCategory: "travel-planning", primaryEntity: E.KAMPALA, entities: [E.JINJA, E.HIGHWAY], searchIntent: "informational" },
  { slug: "transport-connectivity-karamoja", primaryCategory: "travel-planning", primaryEntity: E.KARAMOJA, entities: [E.ROADS], searchIntent: "informational" },
  { slug: "transport-hub-amenities-uganda", primaryCategory: "travel-planning", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [E.BUS_STATIONS, E.AIRPORTS], searchIntent: "informational" },

  // ═══════════════════════════════════════════
  // Practical Information (17)
  // ═══════════════════════════════════════════
  { slug: "conference-infrastructure-fortportal", primaryCategory: "practical-information", primaryEntity: E.FORT_PORTAL, entities: [E.MICE, E.CONFERENCES], searchIntent: "informational" },
  { slug: "digital-connectivity-tourism-uganda", primaryCategory: "practical-information", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [E.INTERNET, E.SAFETY], searchIntent: "informational" },
  { slug: "domestic-tourism-alebtong", primaryCategory: "practical-information", primaryEntity: E.ALEBTONG, entities: [], searchIntent: "informational" },
  { slug: "ecotourism-licensing-kampala", primaryCategory: "practical-information", primaryEntity: E.KAMPALA, entities: [], searchIntent: "informational" },
  { slug: "electricity-tourism-uganda", primaryCategory: "practical-information", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "energy-efficiency-buildings-uganda", primaryCategory: "practical-information", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "freehold-vs-leasehold-uganda", primaryCategory: "practical-information", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "kira-tourism-compliance-standards", primaryCategory: "practical-information", primaryEntity: E.KIRA, entities: [E.WAKISO], searchIntent: "informational" },
  { slug: "mice-infrastructure-amuria", primaryCategory: "practical-information", primaryEntity: E.AMURIA, entities: [E.MICE, E.CONFERENCES], searchIntent: "informational" },
  { slug: "private-schools-amuria", primaryCategory: "practical-information", primaryEntity: E.AMURIA, entities: [], searchIntent: "informational" },
  { slug: "private-tourism-investment-uganda", primaryCategory: "practical-information", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "supplier-training-kampala-tourism", primaryCategory: "practical-information", primaryEntity: E.KAMPALA, entities: [], searchIntent: "informational" },
  { slug: "tourism-facilities-private-sector", primaryCategory: "practical-information", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "tourism-financing-uganda", primaryCategory: "practical-information", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [], searchIntent: "informational" },
  { slug: "tourism-infrastructure-kira", primaryCategory: "practical-information", primaryEntity: E.KIRA, entities: [E.WAKISO], searchIntent: "informational" },
  { slug: "tourism-spending-fortportal", primaryCategory: "practical-information", primaryEntity: E.FORT_PORTAL, entities: [], searchIntent: "informational" },
  { slug: "tourism-standards-alebtong", primaryCategory: "practical-information", primaryEntity: E.ALEBTONG, entities: [], searchIntent: "informational" },

  // ═══════════════════════════════════════════
  // Wildlife (3)
  // ═══════════════════════════════════════════
  { slug: "buffalo-herd-ishasha", primaryCategory: "wildlife", primaryEntity: E.QUEEN_ELIZABETH_NP, entities: [E.QUEEN_ELIZABETH, E.BUFFALO, E.GAME_DRIVE], searchIntent: "informational" },
  { slug: "hippo-population-uganda", primaryCategory: "wildlife", primaryEntity: E.HIPPO, entities: [], searchIntent: "informational" },
  { slug: "zebras-uganda-where-to-see", primaryCategory: "wildlife", primaryEntity: E.ZEBRA, entities: [E.KIDEPO_NP, E.LAKE_MBURO_NP], searchIntent: "informational" },

  // ═══════════════════════════════════════════
  // Culture & Community (3)
  // ═══════════════════════════════════════════
  { slug: "craft-branding-uganda", primaryCategory: "culture-community", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [E.CRAFT_TOURISM], searchIntent: "informational" },
  { slug: "craft-export-markets-uganda", primaryCategory: "culture-community", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [E.CRAFT_TOURISM], searchIntent: "informational" },
  { slug: "tour-operator-craft-partnerships", primaryCategory: "culture-community", primaryEntity: { type: "country", id: "uganda", label: "Uganda" }, entities: [E.CRAFT_TOURISM], searchIntent: "informational" },

  // ═══════════════════════════════════════════
  // Conservation (2)
  // ═══════════════════════════════════════════
  { slug: "buhoiga-katumba-leisure-parks", primaryCategory: "conservation", primaryEntity: E.WESTERN, entities: [E.LEISURE], searchIntent: "informational" },
  { slug: "nyakimya-leisure-park-uganda", primaryCategory: "conservation", primaryEntity: E.WESTERN, entities: [E.LEISURE], searchIntent: "informational" },
];

export const articlesMap = Object.fromEntries(
  articles.map((a) => [a.slug, a])
) as Record<string, Article>;

export const articlesByCategory = (categoryId: string): Article[] =>
  articles.filter((a) => a.primaryCategory === categoryId);

export const articlesByEntity = (entityId: string): Article[] =>
  articles.filter(
    (a) =>
      a.primaryEntity.id === entityId ||
      a.entities.some((e) => e.id === entityId)
  );
