export type CategoryId =
  | "accommodation-industry"
  | "accommodation-guides"
  | "activities"
  | "travel-planning"
  | "destinations"
  | "wildlife"
  | "practical-information"
  | "culture-community"
  | "conservation";

export type EntityType =
  | "country"
  | "region"
  | "district"
  | "town"
  | "village"
  | "park"
  | "lodge"
  | "operator"
  | "species"
  | "activity"
  | "style"
  | "transport"
  | "season"
  | "month"
  | "permit"
  | "audience";

export type SearchIntent =
  | "informational"
  | "commercial-investigation"
  | "transactional"
  | "navigational";

export interface EntityRef {
  type: EntityType;
  id: string;
  label: string;
}

export interface Article {
  slug: string;
  primaryCategory: CategoryId;
  primaryEntity: EntityRef;
  entities: EntityRef[];
  searchIntent: SearchIntent;
}

export interface CategoryDefinition {
  id: CategoryId;
  label: string;
  description: string;
  slug: string;
}

export type HubTier = "A" | "B" | "C";

export interface HubDefinition {
  slug: string;
  type: "category" | "entity";
  tier: HubTier;
  categoryId?: CategoryId;
  entityRef?: EntityRef;
  title: string;
  seoTitle: string;
  seoDescription: string;
  introduction: string;
  faqs: { question: string; answer: string }[];
  featuredArticleSlugs: string[];
  featuredLodgeSlugs: string[];
  relatedCategorySlugs?: string[];
  sections: HubSectionConfig[];
}

export type HubSectionType =
  | "featured-articles"
  | "all-articles"
  | "lodges"
  | "activities"
  | "related-entities"
  | "related-categories"
  | "related-hubs"
  | "wildlife"
  | "planning"
  | "faqs"
  | "cta";

export interface HubSectionConfig {
  type: HubSectionType;
  title?: string;
  limit?: number;
}

export interface HubQuality {
  hasUniqueIntroduction: boolean;
  hasPrimaryEntity: boolean;
  articleCount: number;
  distinctEntityCount: number;
  relatedHubCount: number;
  hasFaq: boolean;
  hasUsefulLodges: boolean;
  duplicateIntentRisk: boolean;
}
