import { supabase } from "./supabase";
import type { TourOperator, TrustIndicators } from "./tour-operator-types";

interface DbOperator {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  location: string | null;
  country: string | null;
  website: string | null;
  email: string | null;
  phone: string | null;
  whatsapp: string | null;
  founding_year: number | null;
  specialties: string[] | null;
  areas_served: string[] | null;
  social_links: Record<string, string> | null;
  logo_url: string | null;
  source_url: string | null;
  status: string;
  image_urls: string[];
  hidden_image_urls: string[];
  website_status: string | null;
  updated_at: string | null;
}

// --- Trust Indicators ---

function buildTrustIndicators(db: DbOperator): TrustIndicators {
  const currentYear = new Date().getFullYear();
  const yearsActive = db.founding_year ? currentYear - db.founding_year : 0;

  return {
    companyRegistration: false,
    physicalAddress: !!db.location,
    websiteAvailable: !!db.website && db.website_status === "active",
    emailAvailable: !!db.email,
    phoneAvailable: !!db.phone,
    whatsappAvailable: !!db.whatsapp,
    socialMediaAvailable: !!db.social_links && Object.keys(db.social_links).length > 0,
    safariBookingsProfile: db.social_links?.safaribookings ?? "",
    tripadvisorProfile: db.social_links?.tripadvisor ?? "",
    googleBusinessProfile: db.social_links?.google ?? "",
    yearsActive: Math.max(0, yearsActive),
  };
}

// --- Specialty classification for content generation ---

const GORILLA_RE = /gorilla/i;
const CHIMP_RE = /chimp/i;
const WILDLIFE_RE = /wildlife|game.drive|big.five|migration/i;
const BIRD_RE = /bird/i;
const HIKING_RE = /hiking|mountain|rwenzori|elgon|volcano|climbing/i;
const CULTURAL_RE = /cultur|community|tribal/i;
const LUXURY_RE = /luxu/i;
const BUDGET_RE = /budget/i;
const PHOTO_RE = /photo/i;
const FAMILY_RE = /family|famil/i;
const HONEYMOON_RE = /honeymoon|flitterwochen/i;
const RAFTING_RE = /raft/i;

function hasSpec(specs: string[], re: RegExp): boolean {
  return specs.some((s) => re.test(s));
}

function formatList(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

// --- English description (hero) ---

function generateDescription(db: DbOperator): string {
  const name = db.name;
  const loc = db.location;
  const country = db.country || "Uganda";
  const specs = db.specialties ?? [];
  const areas = db.areas_served ?? [];
  const year = db.founding_year;
  const hasWebsite = db.website_status === "active";

  if (specs.length === 0 && !loc) {
    return `${name} is a tour operator in ${country}. Contact them directly for safari packages and travel arrangements across East Africa.`;
  }

  const parts: string[] = [];

  // Opening sentence
  if (loc && year) {
    parts.push(`${name} is a tour operator based in ${loc}, ${country}, operating since ${year}.`);
  } else if (loc) {
    parts.push(`${name} is a tour operator based in ${loc}, ${country}.`);
  } else {
    parts.push(`${name} is a tour operator in ${country}.`);
  }

  // Specializations sentence
  if (specs.length > 0) {
    const topSpecs = specs.slice(0, 4);
    parts.push(`They specialize in ${formatList(topSpecs)}.`);
  }

  // Areas sentence
  if (areas.length > 1) {
    parts.push(`They organize tours across ${formatList(areas)}.`);
  } else if (areas.length === 1 && areas[0] !== country) {
    parts.push(`They organize tours in ${areas[0]}.`);
  }

  return parts.join(" ");
}

// --- Long description (About section, multi-paragraph) ---

function generateLongDescription(db: DbOperator): string {
  const name = db.name;
  const loc = db.location;
  const country = db.country || "Uganda";
  const specs = db.specialties ?? [];
  const areas = db.areas_served ?? [];
  const year = db.founding_year;
  const currentYear = new Date().getFullYear();
  const yearsActive = year ? currentYear - year : 0;

  const paragraphs: string[] = [];

  // Paragraph 1: Introduction
  const intro: string[] = [];
  if (loc && year && yearsActive > 0) {
    intro.push(`${name} is a locally operated tour company headquartered in ${loc}, ${country}. Founded in ${year}, they have been organizing safaris and tours for over ${yearsActive} years.`);
  } else if (loc) {
    intro.push(`${name} is a locally operated tour company based in ${loc}, ${country}. They arrange safaris, wildlife experiences and cultural tours in East Africa.`);
  } else {
    intro.push(`${name} is a tour operator in ${country}, offering safari packages and travel services across East Africa.`);
  }
  if (db.website_status === "active" && db.website) {
    intro.push(`Their official website provides detailed itineraries and booking information.`);
  }
  paragraphs.push(intro.join(" "));

  // Paragraph 2: Services & Specializations
  if (specs.length > 0) {
    const services: string[] = [];

    if (hasSpec(specs, GORILLA_RE)) {
      services.push(`gorilla trekking in Bwindi Impenetrable National Park and Mgahinga Gorilla National Park, including assistance with UWA gorilla permit booking ($800 per person)`);
    }
    if (hasSpec(specs, CHIMP_RE)) {
      services.push(`chimpanzee trekking in Kibale Forest National Park and Budongo Forest`);
    }
    if (hasSpec(specs, WILDLIFE_RE)) {
      services.push(`wildlife safaris featuring game drives in Queen Elizabeth National Park, Murchison Falls National Park and Kidepo Valley National Park`);
    }
    if (hasSpec(specs, BIRD_RE)) {
      services.push(`birding tours across Uganda's diverse habitats, home to over 1,000 bird species`);
    }
    if (hasSpec(specs, HIKING_RE)) {
      services.push(`mountain trekking and hiking expeditions, including the Rwenzori Mountains and Mount Elgon`);
    }
    if (hasSpec(specs, CULTURAL_RE)) {
      services.push(`cultural and community tourism experiences that connect visitors with local traditions`);
    }
    if (hasSpec(specs, PHOTO_RE)) {
      services.push(`photography safaris designed for capturing East Africa's iconic wildlife`);
    }
    if (hasSpec(specs, RAFTING_RE)) {
      services.push(`white water rafting on the Nile at Jinja`);
    }

    if (services.length > 0) {
      paragraphs.push(`Their core services include ${formatList(services)}.`);
    } else {
      paragraphs.push(`They offer a range of safari and travel services including ${formatList(specs.slice(0, 5))}.`);
    }
  }

  // Paragraph 3: Travel styles
  const styles: string[] = [];
  if (hasSpec(specs, LUXURY_RE)) styles.push("luxury lodges and premium camps");
  if (hasSpec(specs, BUDGET_RE)) styles.push("budget-friendly camping and guesthouse options");
  if (hasSpec(specs, FAMILY_RE)) styles.push("family-friendly safari itineraries with child-appropriate activities");
  if (hasSpec(specs, HONEYMOON_RE)) styles.push("romantic honeymoon packages in scenic safari lodges");

  if (styles.length > 0) {
    paragraphs.push(`${name} caters to different travel styles, offering ${formatList(styles)}.`);
  }

  // Paragraph 4: Operating regions
  if (areas.length > 1) {
    const regionDetail: string[] = [];
    for (const area of areas) {
      const lower = area.toLowerCase();
      if (lower === "uganda") {
        regionDetail.push("Uganda with its national parks and primate habitats");
      } else if (lower === "rwanda") {
        regionDetail.push("Rwanda for Volcanoes National Park gorilla trekking");
      } else if (lower === "kenya") {
        regionDetail.push("Kenya's Masai Mara and other iconic reserves");
      } else if (lower === "tanzania") {
        regionDetail.push("Tanzania including the Serengeti and Ngorongoro Crater");
      } else {
        regionDetail.push(area);
      }
    }
    paragraphs.push(`They operate across multiple countries in East Africa, covering ${formatList(regionDetail)}. Cross-border itineraries combining several destinations are available on request.`);
  }

  // Paragraph 5: Booking & contact
  const contact: string[] = [];
  contact.push(`To plan a trip with ${name}, visitors can reach out directly through their profile on Lodges of Uganda.`);
  if (db.whatsapp) {
    contact.push(`WhatsApp is available for quick inquiries and itinerary discussions.`);
  }
  if (db.email) {
    contact.push(`Email inquiries are welcome for detailed trip planning.`);
  }
  contact.push(`All tour operator profiles on this site are independent and fact-based — no paid placements or subjective ratings.`);
  paragraphs.push(contact.join(" "));

  return paragraphs.join("\n\n");
}

// --- SEO ---

function generateSeoTitle(db: DbOperator): string {
  const loc = db.location || db.country || "Uganda";
  const specs = db.specialties ?? [];
  if (hasSpec(specs, GORILLA_RE)) {
    return `${db.name} — Gorilla Trekking & Safaris in ${loc}`;
  }
  if (hasSpec(specs, WILDLIFE_RE)) {
    return `${db.name} — Wildlife Safaris in ${loc}`;
  }
  return `${db.name} — Tour Operator in ${loc}`;
}

function generateSeoDescription(db: DbOperator): string {
  const loc = db.location;
  const specs = db.specialties?.slice(0, 3) ?? [];
  const areas = db.areas_served ?? [];

  const parts: string[] = [`${db.name}`];
  if (loc) parts.push(`based in ${loc}`);
  if (specs.length > 0) parts.push(`specializing in ${formatList(specs)}`);
  if (areas.length > 1) parts.push(`operating across ${formatList(areas)}`);

  return `${parts.join(", ")}. Independent profile with trust score, contact details and verified business information.`;
}

// --- Main mapping ---

function toTourOperator(db: DbOperator): TourOperator {
  const specializations = db.specialties ?? [];
  const regions = db.areas_served ?? [];
  const trustIndicators = buildTrustIndicators(db);

  return {
    id: db.id,
    name: db.name,
    slug: db.slug,
    logo: db.logo_url ?? "",
    website: db.website ?? "",
    email: db.email ?? "",
    phone: db.phone ?? "",
    whatsapp: db.whatsapp ?? "",
    location: db.location ?? "",
    country: db.country ?? "Uganda",
    foundedYear: db.founding_year,
    description: generateDescription(db),
    longDescription: generateLongDescription(db),
    specializations,
    regions,
    recommendedLodges: [],
    trustIndicators,
    seoTitle: generateSeoTitle(db),
    seoDescription: generateSeoDescription(db),
    imageUrls: db.image_urls ?? [],
    claimed: false,
    active: db.status === "active",
    lastUpdated: db.updated_at ?? "",
  };
}

let cached: TourOperator[] | null = null;

export async function getTourOperators(): Promise<TourOperator[]> {
  if (cached) return cached;

  const { data, error } = await supabase
    .from("tour_operators")
    .select("id,slug,name,description,location,country,website,email,phone,whatsapp,founding_year,specialties,areas_served,social_links,logo_url,source_url,status,image_urls,website_status,updated_at")
    .eq("status", "active")
    .order("name");

  if (error) {
    console.error("Failed to fetch tour operators:", error);
    return [];
  }

  cached = (data as DbOperator[]).map(toTourOperator);
  return cached;
}

export async function getTourOperatorsMap(): Promise<Record<string, TourOperator>> {
  const ops = await getTourOperators();
  return Object.fromEntries(ops.map((op) => [op.slug, op]));
}
