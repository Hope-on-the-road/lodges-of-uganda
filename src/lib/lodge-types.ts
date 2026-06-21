export type LodgeCategory =
  | "Budget"
  | "Mid-range"
  | "Comfort"
  | "Luxury"
  | "Ultra Luxury"
  | "Community Lodge"
  | "Eco Lodge"
  | "Safari Camp"
  | "Guesthouse"
  | "Hotel"
  | "Resort";

export type PriceLevel = "$" | "$$" | "$$$" | "$$$$" | "$$$$$";

export type VerifiedStatus =
  | "not-visited"
  | "verified-online"
  | "personally-visited"
  | "featured-partner";

export type LicenceType =
  | "LD"  // Lodge
  | "TH"  // Hotel
  | "GH"  // Guest House
  | "SA"  // Serviced Apartment
  | "MO"  // Motel
  | "SC"  // Safari Camp
  | "CS"  // Campsite
  | "EL"  // Eco Lodge
  | "CV"  // Cottage/Villa
  | "VH"  // Vacation Home / Resort
  | "HT"  // Hostel
  | "";

export type OutreachStatus =
  | "not-contacted"
  | "contacted"
  | "replied"
  | "listing-updated"
  | "claimed";

export interface LodgeScore {
  location: number;
  rooms: number;
  views: number;
  food: number;
  service: number;
  value: number;
  overall: number;
}

export interface RoomType {
  name: string;
  description: string;
  maxGuests?: number;
}

export interface DriveTime {
  from: string;
  duration: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Lodge {
  id: string;
  name: string;
  slug: string;
  region: string;
  subregion: string;
  nationalPark: string;
  country: string;
  category: LodgeCategory;
  priceLevel: PriceLevel;
  officialWebsite: string;
  email: string;
  phone: string;
  whatsapp: string;
  licenceNumber: string;
  licenceType: LicenceType;
  licenceYear: string;
  operatorGroup: string;
  outreachStatus: OutreachStatus;
  claimed: boolean;
  active: boolean;
  bookingLinks: string[];
  googleMapsUrl: string;
  latitude: number | null;
  longitude: number | null;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  bestFor: string[];
  amenities: string[];
  activities: string[];
  roomTypes: RoomType[];
  dining: string;
  distanceToParkGate: string;
  driveTimes: DriveTime[];
  nearbyAttractions: string[];
  pros: string[];
  thingsToKnow: string[];
  faq: FAQ[];
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
  heroImage: string;
  gallery: string[];
  videoUrl: string;
  verifiedVisit: VerifiedStatus;
  verifiedDate: string | null;
  featured: boolean;
  partner: boolean;
  sourceUrls: string[];
  lastUpdated: string;
  score: LodgeScore | null;
  familyFriendly: boolean;
  gorillaTracking: boolean;
  chimpanzeeTrekking: boolean;
  boatSafari: boolean;
  gameDrive: boolean;
  ecoLodge: boolean;
}

export interface LodgeListItem {
  id: string;
  name: string;
  slug: string;
  region: string;
  subregion: string;
  category: LodgeCategory;
  priceLevel: PriceLevel;
  heroImage: string;
  shortDescription: string;
  verifiedVisit: VerifiedStatus;
  activities: string[];
  gorillaTracking: boolean;
  chimpanzeeTrekking: boolean;
  gameDrive: boolean;
  boatSafari: boolean;
  ecoLodge: boolean;
  familyFriendly: boolean;
}

export function toLodgeListItem(l: Lodge): LodgeListItem {
  return {
    id: l.id,
    name: l.name,
    slug: l.slug,
    region: l.region,
    subregion: l.subregion,
    category: l.category,
    priceLevel: l.priceLevel,
    heroImage: l.heroImage,
    shortDescription: l.shortDescription,
    verifiedVisit: l.verifiedVisit,
    activities: l.activities,
    gorillaTracking: l.gorillaTracking,
    chimpanzeeTrekking: l.chimpanzeeTrekking,
    gameDrive: l.gameDrive,
    boatSafari: l.boatSafari,
    ecoLodge: l.ecoLodge,
    familyFriendly: l.familyFriendly,
  };
}

export interface Region {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  highlights: string[];
  activities: string[];
  bestTimeToVisit: string;
  gettingThere: string;
  faq: FAQ[];
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
}
