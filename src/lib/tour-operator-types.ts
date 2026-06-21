export type Specialization = string;

export interface TrustIndicators {
  companyRegistration: boolean;
  physicalAddress: boolean;
  websiteAvailable: boolean;
  emailAvailable: boolean;
  phoneAvailable: boolean;
  whatsappAvailable: boolean;
  socialMediaAvailable: boolean;
  safariBookingsProfile: string;
  tripadvisorProfile: string;
  googleBusinessProfile: string;
  yearsActive: number;
}

export interface TourOperator {
  id: string;
  name: string;
  slug: string;
  logo: string;
  website: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  country: string;
  foundedYear: number | null;
  description: string;
  longDescription: string;
  specializations: Specialization[];
  regions: string[]; // region slugs
  recommendedLodges: string[]; // lodge slugs
  trustIndicators: TrustIndicators;
  seoTitle: string;
  seoDescription: string;
  imageUrls: string[];
  claimed: boolean;
  active: boolean;
  lastUpdated: string;
}

export function calculateTrustScore(t: TrustIndicators): number {
  let score = 0;
  const max = 100;

  // Registration & Address (25 points)
  if (t.companyRegistration) score += 15;
  if (t.physicalAddress) score += 10;

  // Online presence (25 points)
  if (t.websiteAvailable) score += 10;
  if (t.emailAvailable) score += 5;
  if (t.phoneAvailable) score += 5;
  if (t.whatsappAvailable) score += 5;

  // Social proof (30 points)
  if (t.socialMediaAvailable) score += 5;
  if (t.safariBookingsProfile) score += 10;
  if (t.tripadvisorProfile) score += 10;
  if (t.googleBusinessProfile) score += 5;

  // Longevity (20 points)
  if (t.yearsActive >= 1) score += 5;
  if (t.yearsActive >= 3) score += 5;
  if (t.yearsActive >= 5) score += 5;
  if (t.yearsActive >= 10) score += 5;

  return Math.min(score, max);
}
