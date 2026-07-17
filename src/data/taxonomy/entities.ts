import type { EntityRef, EntityType } from "./types";

function e(type: EntityType, id: string, label: string): EntityRef {
  return { type, id, label };
}

// ── Regions ──
export const BWINDI = e("region", "bwindi", "Bwindi");
export const KARAMOJA = e("region", "karamoja", "Karamoja");
export const RWENZORI = e("region", "rwenzori", "Rwenzori");
export const LAKE_VICTORIA = e("region", "lake-victoria", "Lake Victoria");
export const LANGO = e("region", "lango", "Lango");
export const WESTERN = e("region", "western", "Western Uganda");
export const QUEEN_ELIZABETH = e("region", "queen-elizabeth", "Queen Elizabeth");

// ── National Parks ──
export const BWINDI_NP = e("park", "bwindi-impenetrable-np", "Bwindi Impenetrable NP");
export const MURCHISON_NP = e("park", "murchison-falls-np", "Murchison Falls NP");
export const MGAHINGA_NP = e("park", "mgahinga-gorilla-np", "Mgahinga Gorilla NP");
export const QUEEN_ELIZABETH_NP = e("park", "queen-elizabeth-np", "Queen Elizabeth NP");
export const KIDEPO_NP = e("park", "kidepo-valley-np", "Kidepo Valley NP");
export const LAKE_MBURO_NP = e("park", "lake-mburo-np", "Lake Mburo NP");

// ── Districts ──
export const WAKISO = e("district", "wakiso", "Wakiso");
export const KAPELEBYONG = e("district", "kapelebyong", "Kapelebyong");
export const KYENJOJO = e("district", "kyenjojo", "Kyenjojo");
export const ALEBTONG = e("district", "alebtong", "Alebtong");
export const KAMULI = e("district", "kamuli", "Kamuli");
export const MUKONO = e("district", "mukono", "Mukono");
export const BUSIA = e("district", "busia", "Busia");
export const AMURIA = e("district", "amuria", "Amuria");
export const KAABONG = e("district", "kaabong", "Kaabong");
export const NAKAPIRIPIRIT = e("district", "nakapiripirit", "Nakapiripirit");

// ── Towns ──
export const KAMPALA = e("town", "kampala", "Kampala");
export const FORT_PORTAL = e("town", "fort-portal", "Fort Portal");
export const KIRA = e("town", "kira", "Kira");
export const JINJA = e("town", "jinja", "Jinja");
export const LIRA = e("town", "lira", "Lira");
export const ENTEBBE = e("town", "entebbe", "Entebbe");
export const KAJJANSI = e("town", "kajjansi", "Kajjansi");
export const KASANGATI = e("town", "kasangati", "Kasangati");
export const KASANJE = e("town", "kasanje", "Kasanje");
export const KATABI = e("town", "katabi", "Katabi");
export const KAVUMBA = e("town", "kavumba", "Kavumba");
export const KYENGERA = e("town", "kyengera", "Kyengera");
export const MASULITA = e("town", "masulita", "Masulita");

// ── Lodges ──
export const BAKIGA_LODGE = e("lodge", "bakiga-lodge", "Bakiga Lodge");
export const MULEHE_LODGE = e("lodge", "mulehe-gorilla-lodge", "Mulehe Gorilla Lodge");
export const BIRDNEST = e("lodge", "birdnest-resort", "Birdnest Resort");
export const GORILLA_SAFARI_LODGE = e("lodge", "gorilla-safari-lodge", "Gorilla Safari Lodge");

// ── Species ──
export const GOLDEN_MONKEY = e("species", "golden-monkey", "Golden monkey");
export const CHIMPANZEE = e("species", "chimpanzee", "Chimpanzee");
export const BUFFALO = e("species", "buffalo", "Buffalo");
export const HIPPO = e("species", "hippo", "Hippo");
export const ZEBRA = e("species", "zebra", "Zebra");

// ── Activities ──
export const GORILLA_TREKKING = e("activity", "gorilla-trekking", "Gorilla trekking");
export const SAFARI = e("activity", "safari", "Safari");
export const GAME_DRIVE = e("activity", "game-drive", "Game drive");
export const CHIMP_TREKKING = e("activity", "chimp-trekking", "Chimp trekking");
export const CAMPING = e("activity", "camping", "Camping");
export const SELF_DRIVE = e("activity", "self-drive", "Self-drive");
export const AGROTOURISM = e("activity", "agrotourism", "Agrotourism");
export const SUSTAINABILITY = e("activity", "sustainability", "Sustainability");
export const CRAFT_TOURISM = e("activity", "craft-tourism", "Craft tourism");
export const FOREST_TOURISM = e("activity", "forest-tourism", "Forest tourism");
export const GOLDEN_MONKEY_TREKKING = e("activity", "golden-monkey-trekking", "Golden monkey trekking");
export const BEACH = e("activity", "beach", "Beach");
export const ISLAND_HOLIDAY = e("activity", "island-holiday", "Island holiday");
export const ECO_CAMP = e("activity", "eco-camp", "Eco camp");
export const RECREATION = e("activity", "recreation", "Recreation");
export const WETLAND_WALK = e("activity", "wetland-walk", "Wetland walk");
export const LEISURE = e("activity", "leisure", "Leisure");
export const MICE = e("activity", "mice", "MICE");
export const CONFERENCES = e("activity", "conferences", "Conferences");
export const INTERNET = e("activity", "internet", "Internet");
export const SAFETY = e("activity", "safety", "Safety");

// ── Travel Styles ──
export const LUXURY = e("style", "luxury", "Luxury");
export const BUDGET = e("style", "budget", "Budget");
export const BACKPACKER = e("style", "backpacker", "Backpacker");
export const FAMILY = e("style", "family", "Family");
export const ADVENTURE = e("style", "adventure", "Adventure");

// ── Transport ──
export const HIGHWAY = e("transport", "highway", "Highway");
export const REST_STOPS = e("transport", "rest-stops", "Rest stops");
export const ROADS = e("transport", "roads", "Roads");
export const BODA_BODA = e("transport", "boda-boda", "Boda-boda");
export const BUS_STATIONS = e("transport", "bus-stations", "Bus stations");
export const AIRPORTS = e("transport", "airports", "Airports");

// ── Tour Operators ──
export const NTURO_SAFARIS = e("operator", "nturo-safaris", "Nturo Safaris");
export const DEKS_SAFARIS = e("operator", "deks-safaris", "Deks Safaris");
export const TREK_SAFARIS = e("operator", "trek-safaris", "Trek Safaris");
export const TURIGYE_TOURS = e("operator", "turigye-tours", "Turigye Tours");
