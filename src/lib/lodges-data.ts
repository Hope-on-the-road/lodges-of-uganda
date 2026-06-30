import { supabase } from "./supabase";
import type {
  Lodge,
  LodgeCategory,
  PriceLevel,
  LodgeScore,
  RoomType,
  FAQ,
} from "./lodge-types";

// --- DB interface ---

interface DbLodge {
  id: string;
  slug: string;
  name: string;
  category: string | null;
  description: string | null;
  location: string | null;
  region: string | null;
  price_range: string | null;
  facilities: string[] | null;
  activities: string[] | null;
  highlights: string[] | null;
  contact: string | null;
  email: string | null;
  phone: string | null;
  website: string | null;
  image_urls: string[];
  logo_url: string | null;
  status: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
  hidden_image_urls: string[];
  website_status: string | null;
}

// --- Region mapping ---

interface RegionInfo {
  slug: string;
  nationalPark: string;
}

const REGION_MAP: Record<string, RegionInfo> = {
  "bwindi impenetrable national park": { slug: "bwindi", nationalPark: "Bwindi Impenetrable National Park" },
  "bwindi impenetrable forest": { slug: "bwindi", nationalPark: "Bwindi Impenetrable National Park" },
  "buhoma / bwindi": { slug: "bwindi", nationalPark: "Bwindi Impenetrable National Park" },
  "southwestern uganda": { slug: "bwindi", nationalPark: "Bwindi Impenetrable National Park" },
  "südwestuganda": { slug: "bwindi", nationalPark: "Bwindi Impenetrable National Park" },
  "südwest-uganda": { slug: "bwindi", nationalPark: "Bwindi Impenetrable National Park" },
  "südwest-uganda (kisoro district)": { slug: "bwindi", nationalPark: "Bwindi Impenetrable National Park" },
  "queen elizabeth national park": { slug: "queen-elizabeth", nationalPark: "Queen Elizabeth National Park" },
  "ishasha": { slug: "ishasha", nationalPark: "Queen Elizabeth National Park" },
  "kibale national park": { slug: "kibale", nationalPark: "Kibale National Park" },
  "murchison falls national park": { slug: "murchison-falls", nationalPark: "Murchison Falls National Park" },
  "norduganda": { slug: "murchison-falls", nationalPark: "Murchison Falls National Park" },
  "nord-west uganda": { slug: "murchison-falls", nationalPark: "Murchison Falls National Park" },
  "kidepo valley national park": { slug: "kidepo", nationalPark: "Kidepo Valley National Park" },
  "lake bunyonyi": { slug: "lake-bunyonyi", nationalPark: "" },
  "lake mutanda": { slug: "lake-mutanda", nationalPark: "" },
  "lake mburo national park": { slug: "lake-mburo", nationalPark: "Lake Mburo National Park" },
  "fort portal & crater lakes": { slug: "fort-portal", nationalPark: "" },
  "jinja & river nile": { slug: "jinja", nationalPark: "" },
  "sipi falls & mount elgon": { slug: "sipi-falls", nationalPark: "Mount Elgon National Park" },
  "entebbe": { slug: "entebbe", nationalPark: "" },
  "kampala": { slug: "kampala", nationalPark: "" },
  "karamoja": { slug: "karamoja", nationalPark: "" },
  "ssese islands": { slug: "ssese-islands", nationalPark: "" },
  "central region": { slug: "ssese-islands", nationalPark: "" },
  "central region / lake victoria": { slug: "ssese-islands", nationalPark: "" },
  "zentraluganda": { slug: "kampala", nationalPark: "" },
  "ziwa rhino sanctuary": { slug: "ziwa-rhino", nationalPark: "Ziwa Rhino Sanctuary" },
  "western uganda": { slug: "queen-elizabeth", nationalPark: "Queen Elizabeth National Park" },
  "western region": { slug: "queen-elizabeth", nationalPark: "Queen Elizabeth National Park" },
  "westuganda": { slug: "queen-elizabeth", nationalPark: "Queen Elizabeth National Park" },
};

function resolveRegion(dbRegion: string | null, dbLocation: string | null): RegionInfo {
  if (!dbRegion) return { slug: "bwindi", nationalPark: "" };
  const key = dbRegion.toLowerCase().trim();
  if (REGION_MAP[key]) return REGION_MAP[key];

  // Fuzzy matching
  if (key.includes("bwindi") || key.includes("buhoma")) return REGION_MAP["bwindi impenetrable national park"];
  if (key.includes("queen elizabeth")) return REGION_MAP["queen elizabeth national park"];
  if (key.includes("murchison")) return REGION_MAP["murchison falls national park"];
  if (key.includes("kibale")) return REGION_MAP["kibale national park"];
  if (key.includes("kidepo")) return REGION_MAP["kidepo valley national park"];
  if (key.includes("bunyonyi")) return REGION_MAP["lake bunyonyi"];
  if (key.includes("mutanda")) return REGION_MAP["lake mutanda"];
  if (key.includes("mburo")) return REGION_MAP["lake mburo national park"];
  if (key.includes("mgahinga")) return { slug: "mgahinga", nationalPark: "Mgahinga Gorilla National Park" };
  if (key.includes("jinja")) return REGION_MAP["jinja & river nile"];
  if (key.includes("entebbe")) return REGION_MAP["entebbe"];
  if (key.includes("kampala")) return REGION_MAP["kampala"];
  if (key.includes("fort portal") || key.includes("crater")) return REGION_MAP["fort portal & crater lakes"];
  if (key.includes("ssese") || key.includes("bugala")) return REGION_MAP["ssese islands"];
  if (key.includes("sipi") || key.includes("elgon")) return REGION_MAP["sipi falls & mount elgon"];
  if (key.includes("semuliki")) return { slug: "fort-portal", nationalPark: "Semuliki National Park" };
  if (key.includes("ishasha")) return REGION_MAP["ishasha"];

  return { slug: "bwindi", nationalPark: "" };
}

function resolveSubregion(dbLocation: string | null): string {
  if (!dbLocation) return "";
  const loc = dbLocation.trim();
  // Clean up overly descriptive locations
  if (loc.includes(",")) return loc.split(",")[0].trim();
  if (loc.toLowerCase().includes("overlooking")) return loc.split(/overlooking/i)[0].trim();
  if (loc.toLowerCase().includes("near")) return loc.split(/near/i)[0].trim();
  return loc;
}

// --- Category mapping ---

const CATEGORY_MAP: Record<string, { category: LodgeCategory; priceLevel: PriceLevel }> = {
  luxury: { category: "Luxury", priceLevel: "$$$$" },
  midrange: { category: "Mid-range", priceLevel: "$$" },
  budget: { category: "Budget", priceLevel: "$" },
};

function resolveCategory(dbCategory: string | null): { category: LodgeCategory; priceLevel: PriceLevel } {
  if (!dbCategory) return CATEGORY_MAP.midrange;
  return CATEGORY_MAP[dbCategory.toLowerCase().trim()] ?? CATEGORY_MAP.midrange;
}

// --- Activity flags ---

function deriveActivityFlags(activities: string[], highlights: string[], description: string) {
  const all = [...activities, ...highlights, description].join(" ").toLowerCase();
  return {
    gorillaTracking: /gorilla/i.test(all),
    chimpanzeeTrekking: /chimp/i.test(all),
    boatSafari: /boat|cruise|launch/i.test(all),
    gameDrive: /game.drive|safari.drive|wildlife.drive/i.test(all),
    ecoLodge: /eco|sustainable|conservation/i.test(all),
    familyFriendly: /family|child|kid/i.test(all),
  };
}

// --- Content generation ---

function formatList(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function generateLongDescription(db: DbLodge, regionInfo: RegionInfo, cat: LodgeCategory, subregion: string): string {
  const name = db.name;
  const desc = db.description ?? "";
  const acts = db.activities ?? [];
  const facs = db.facilities ?? [];
  const highs = db.highlights ?? [];
  const park = regionInfo.nationalPark;

  const paragraphs: string[] = [];

  // Paragraph 1: Introduction — primary keyword in first sentence
  const intro: string[] = [];
  if (subregion && park) {
    intro.push(`${name} is a ${cat.toLowerCase()} lodge in Uganda, situated in the ${subregion} area of ${park}.`);
  } else if (park) {
    intro.push(`${name} is a ${cat.toLowerCase()} lodge in Uganda, located near ${park}.`);
  } else if (subregion) {
    intro.push(`${name} is a ${cat.toLowerCase()} accommodation in ${subregion}, Uganda.`);
  } else {
    intro.push(`${name} is a ${cat.toLowerCase()} lodge in Uganda.`);
  }
  if (desc) {
    intro.push(desc);
  }
  paragraphs.push(intro.join(" "));

  // Paragraph 2: Facilities
  if (facs.length > 0) {
    paragraphs.push(`The property features ${formatList(facs)}. Guests can expect a comfortable stay with well-maintained facilities suited to the ${cat.toLowerCase()} category.`);
  }

  // Paragraph 3: Activities
  if (acts.length > 0) {
    const actText: string[] = [];
    const hasGorilla = acts.some((a) => /gorilla/i.test(a));
    const hasChimp = acts.some((a) => /chimp/i.test(a));
    const hasBirding = acts.some((a) => /bird/i.test(a));
    const hasBoat = acts.some((a) => /boat|cruise|launch/i.test(a));
    const hasGameDrive = acts.some((a) => /game.drive/i.test(a));

    if (hasGorilla) {
      actText.push(`gorilla trekking in ${park || "Bwindi Impenetrable National Park"} — Uganda Wildlife Authority permits cost $800 per person and should be booked well in advance`);
    }
    if (hasChimp) {
      actText.push("chimpanzee trekking in nearby forest reserves");
    }
    if (hasBirding) {
      actText.push("birdwatching across diverse habitats");
    }
    if (hasGameDrive) {
      actText.push("game drives to spot lions, elephants, buffalo and other wildlife");
    }
    if (hasBoat) {
      actText.push("boat safaris on the local waterways");
    }

    const otherActs = acts.filter(
      (a) => !/gorilla|chimp|bird|boat|cruise|launch|game.drive/i.test(a),
    );
    if (otherActs.length > 0) {
      actText.push(formatList(otherActs.slice(0, 3)));
    }

    if (actText.length > 0) {
      paragraphs.push(`Activities available from this lodge include ${formatList(actText)}.`);
    }
  }

  // Paragraph 4: Highlights / What makes it special
  if (highs.length > 0) {
    paragraphs.push(`Notable features of ${name} include ${formatList(highs)}. These qualities make it a distinctive choice within the ${subregion || park || "region"}.`);
  }

  // Paragraph 5: Practical info
  const practical: string[] = [];
  practical.push(`${name} is listed as a ${cat.toLowerCase()} property on Lodges of Uganda.`);
  if (db.website_status === "active" && db.website) {
    practical.push("Their website has additional information about rooms and rates.");
  }
  practical.push("All lodge profiles on this site are independent and based on verified information — no paid placements.");
  paragraphs.push(practical.join(" "));

  return paragraphs.join("\n\n");
}

function generateBestFor(acts: string[], highs: string[], cat: LodgeCategory, flags: ReturnType<typeof deriveActivityFlags>): string[] {
  const best: string[] = [];
  if (flags.gorillaTracking) best.push("Gorilla trekking visitors");
  if (flags.chimpanzeeTrekking) best.push("Primate enthusiasts");
  if (flags.gameDrive) best.push("Wildlife safari travellers");
  if (flags.familyFriendly) best.push("Families with children");
  if (flags.ecoLodge) best.push("Eco-conscious travellers");
  if (flags.boatSafari) best.push("Boat safari enthusiasts");
  if (cat === "Luxury") best.push("Luxury travellers");
  if (cat === "Budget") best.push("Budget-conscious travellers");
  if (acts.some((a) => /bird/i.test(a))) best.push("Birdwatchers");
  if (acts.some((a) => /hik|walk|trek/i.test(a)) && !flags.gorillaTracking) best.push("Hikers and nature lovers");
  if (best.length === 0) best.push("Safari visitors", "Nature lovers");
  return best.slice(0, 5);
}

function generateFaq(db: DbLodge, regionInfo: RegionInfo, cat: LodgeCategory, subregion: string, flags: ReturnType<typeof deriveActivityFlags>): FAQ[] {
  const name = db.name;
  const park = regionInfo.nationalPark;
  const faqs: FAQ[] = [];

  faqs.push({
    question: `Where is ${name} located?`,
    answer: `${name} is located in ${subregion || "Uganda"}${park ? `, near ${park}` : ""}. It is a ${cat.toLowerCase()} property.`,
  });

  if (flags.gorillaTracking) {
    faqs.push({
      question: `Can I go gorilla trekking from ${name}?`,
      answer: `Yes, ${name} is well positioned for gorilla trekking in ${park || "Bwindi Impenetrable National Park"}. UWA gorilla permits cost $800 per person and should be arranged in advance, either through a tour operator or directly through UWA.`,
    });
  }

  if (db.activities?.length) {
    faqs.push({
      question: `What activities are available at ${name}?`,
      answer: `Activities include ${formatList(db.activities)}. The lodge team can help arrange these for you.`,
    });
  }

  if (db.price_range) {
    faqs.push({
      question: `What does it cost to stay at ${name}?`,
      answer: `${name} is a ${cat.toLowerCase()} property with rates in the ${db.price_range} range. Contact the lodge directly for current availability and exact pricing.`,
    });
  }

  faqs.push({
    question: `Is ${name} a good choice for a safari trip?`,
    answer: `${name} is a ${cat.toLowerCase()} accommodation in ${subregion || "Uganda"}. Check the trust profile and reviews on this page for more details. All information on Lodges of Uganda is independent and fact-based.`,
  });

  return faqs;
}

function generateSeoTitle(db: DbLodge, regionInfo: RegionInfo, cat: LodgeCategory, subregion: string): string {
  const park = regionInfo.nationalPark;
  if (park && subregion) {
    return `${db.name} | ${cat} Lodge in ${subregion}, Uganda`;
  }
  if (park) {
    return `${db.name} | ${cat} Lodge near ${park}, Uganda`;
  }
  return `${db.name} | ${cat} Accommodation in ${subregion || "Uganda"}`;
}

function generateSeoDescription(db: DbLodge, regionInfo: RegionInfo, cat: LodgeCategory, subregion: string, acts: string[]): string {
  const park = regionInfo.nationalPark;
  const parts = [`${db.name} — ${cat.toLowerCase()} accommodation in Uganda`];
  if (subregion) parts.push(`located in ${subregion}`);
  if (park) parts.push(`near ${park}`);
  if (acts.length > 0) parts.push(`offering ${formatList(acts.slice(0, 3))}`);
  return `${parts.join(", ")}. Independent profile with verified details on Lodges of Uganda.`;
}

// --- Main mapping ---

function toLodge(db: DbLodge): Lodge {
  const regionInfo = resolveRegion(db.region, db.location);
  const subregion = resolveSubregion(db.location);
  const { category, priceLevel } = resolveCategory(db.category);
  const acts = db.activities ?? [];
  const facs = db.facilities ?? [];
  const highs = db.highlights ?? [];
  const rawDesc = db.description ?? "";
  const SPAM_PATTERNS = /gambling|casino|judol|hundepension|keine relevanten|nicht möglich|irrelevante Inhalte/i;
  const desc = SPAM_PATTERNS.test(rawDesc) ? "" : rawDesc;
  const flags = deriveActivityFlags(acts, highs, desc);

  return {
    id: db.id,
    name: db.name,
    slug: db.slug,
    region: regionInfo.slug,
    subregion,
    nationalPark: regionInfo.nationalPark,
    country: "Uganda",
    category,
    priceLevel,
    officialWebsite: db.website ?? "",
    email: db.email ?? "",
    phone: db.phone ?? "",
    whatsapp: "",
    licenceNumber: "",
    licenceType: "",
    licenceYear: "",
    operatorGroup: "",
    outreachStatus: "not-contacted",
    claimed: false,
    active: db.status === "active",
    bookingLinks: [],
    googleMapsUrl: "",
    latitude: null,
    longitude: null,
    shortDescription: desc,
    longDescription: generateLongDescription(db, regionInfo, category, subregion),
    highlights: highs,
    bestFor: generateBestFor(acts, highs, category, flags),
    amenities: facs,
    activities: acts,
    roomTypes: [],
    dining: "",
    distanceToParkGate: "",
    driveTimes: [],
    nearbyAttractions: [],
    pros: highs.slice(0, 4),
    thingsToKnow: [],
    faq: generateFaq(db, regionInfo, category, subregion, flags),
    seoTitle: generateSeoTitle(db, regionInfo, category, subregion),
    seoDescription: generateSeoDescription(db, regionInfo, category, subregion, acts),
    ogImage: "",
    heroImage: db.image_urls?.[0] ?? "",
    gallery: db.image_urls ?? [],
    videoUrl: "",
    verifiedVisit: "not-visited",
    verifiedDate: null,
    featured: false,
    partner: false,
    sourceUrls: [],
    lastUpdated: db.updated_at ?? "",
    score: null,
    ...flags,
  };
}

// --- HopeContent entity photos ---

const SUPABASE_URL = "https://eqlnmpmfhxdllkuetury.supabase.co";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxbG5tcG1maHhkbGxrdWV0dXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2OTczNzIsImV4cCI6MjA5NjI3MzM3Mn0.ehpdizTUxQui3JYC6IJTQTTXa_O4ie0xtVlCucsqfR8";
const THUMB_BASE = `${SUPABASE_URL}/storage/v1/object/public/thumbnails/`;
const HC_HEADERS = { apikey: ANON_KEY, Authorization: `Bearer ${ANON_KEY}` };

async function fetchEntityPhotos(slugs: string[]): Promise<Record<string, string[]>> {
  if (!slugs.length) return {};
  try {
    const entRes = await fetch(
      `${SUPABASE_URL}/rest/v1/entities?slug=in.(${slugs.join(",")})&select=id,slug`,
      { headers: HC_HEADERS },
    );
    if (!entRes.ok) return {};
    const entRows: { id: string; slug: string }[] = await entRes.json();
    if (!entRows.length) return {};

    const entityIds = entRows.map((e) => e.id);
    const slugById = Object.fromEntries(entRows.map((e) => [e.id, e.slug]));

    const mediaRes = await fetch(
      `${SUPABASE_URL}/rest/v1/media_items` +
        `?entity_ids=ov.{${entityIds.join(",")}}` +
        `&status=in.(approved,used)` +
        `&file_type=eq.image` +
        `&thumbnail_path=not.is.null` +
        `&select=thumbnail_path,entity_ids,content` +
        `&order=id`,
      { headers: HC_HEADERS },
    );
    if (!mediaRes.ok) return {};
    const rows: { thumbnail_path: string; entity_ids: string[]; content?: { thumbnail_v?: number } }[] =
      await mediaRes.json();

    const grouped: Record<string, string[]> = {};
    const idSet = new Set(entityIds);
    for (const m of rows) {
      for (const eid of m.entity_ids || []) {
        if (!idSet.has(eid)) continue;
        const slug = slugById[eid];
        if (!slug) continue;
        if (!grouped[slug]) grouped[slug] = [];
        const v = m.content?.thumbnail_v;
        grouped[slug].push(`${THUMB_BASE}${m.thumbnail_path}${v ? `?v=${v}` : ""}`);
      }
    }
    return grouped;
  } catch {
    return {};
  }
}

// --- Cache & exports ---

let cached: Lodge[] | null = null;

export async function getLodges(): Promise<Lodge[]> {
  if (cached) return cached;

  const { data, error } = await supabase
    .from("lodges")
    .select("id,slug,name,category,description,location,region,price_range,facilities,activities,highlights,email,phone,website,image_urls,logo_url,status,updated_at,website_status")
    .eq("status", "active")
    .order("name");

  if (error) {
    console.error("Failed to fetch lodges:", error);
    return [];
  }

  const lodges = (data as DbLodge[]).map(toLodge);

  // HopeContent-Fotos per Entity-Slug laden und überschreiben
  const slugs = lodges.map((l) => l.slug);
  const entityPhotos = await fetchEntityPhotos(slugs);
  for (const lodge of lodges) {
    const photos = entityPhotos[lodge.slug];
    if (photos && photos.length > 0) {
      lodge.heroImage = photos[0];
      lodge.gallery = photos;
    }
  }

  cached = lodges;
  return cached;
}

export async function getLodgesMap(): Promise<Record<string, Lodge>> {
  const all = await getLodges();
  return Object.fromEntries(all.map((l) => [l.slug, l]));
}

export async function getLodgesByRegion(regionSlug: string): Promise<Lodge[]> {
  const all = await getLodges();
  return all.filter((l) => l.region === regionSlug);
}

export async function getLodgesByCategory(cat: string): Promise<Lodge[]> {
  const all = await getLodges();
  return all.filter((l) => l.category === cat);
}

export async function getLodgesByPriceLevel(pl: string): Promise<Lodge[]> {
  const all = await getLodges();
  return all.filter((l) => l.priceLevel === pl);
}

export async function getFeaturedLodges(): Promise<Lodge[]> {
  const all = await getLodges();
  return all.filter((l) => l.featured);
}

export async function getFilteredLodges(filters: {
  region?: string;
  category?: string;
  priceLevel?: string;
  gorillaTracking?: boolean;
  chimpanzeeTrekking?: boolean;
  boatSafari?: boolean;
  gameDrive?: boolean;
  ecoLodge?: boolean;
  familyFriendly?: boolean;
}): Promise<Lodge[]> {
  const all = await getLodges();
  return all.filter((l) => {
    if (filters.region && l.region !== filters.region) return false;
    if (filters.category && l.category !== filters.category) return false;
    if (filters.priceLevel && l.priceLevel !== filters.priceLevel) return false;
    if (filters.gorillaTracking && !l.gorillaTracking) return false;
    if (filters.chimpanzeeTrekking && !l.chimpanzeeTrekking) return false;
    if (filters.boatSafari && !l.boatSafari) return false;
    if (filters.gameDrive && !l.gameDrive) return false;
    if (filters.ecoLodge && !l.ecoLodge) return false;
    if (filters.familyFriendly && !l.familyFriendly) return false;
    return true;
  });
}
