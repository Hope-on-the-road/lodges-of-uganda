import type { CategoryDefinition } from "./types";

export const categories: CategoryDefinition[] = [
  {
    id: "accommodation-industry",
    label: "Accommodation Industry",
    slug: "accommodation-industry",
    description: "Statistics, standards, registration, compliance, and market data for Uganda's hospitality sector.",
  },
  {
    id: "accommodation-guides",
    label: "Accommodation Guides",
    slug: "accommodation-guides",
    description: "Lodge comparisons, best-of lists, and practical guides for choosing where to stay in Uganda.",
  },
  {
    id: "activities",
    label: "Activities",
    slug: "activities",
    description: "Safari experiences, gorilla trekking, camping, agrotourism, and tour operator reviews.",
  },
  {
    id: "travel-planning",
    label: "Travel Planning",
    slug: "travel-planning",
    description: "Transport, roads, stopovers, and practical infrastructure for planning a Uganda trip.",
  },
  {
    id: "destinations",
    label: "Destinations",
    slug: "destinations",
    description: "Guides to specific places in Uganda — towns, islands, parks, recreation centres, and eco-sites.",
  },
  {
    id: "wildlife",
    label: "Wildlife",
    slug: "wildlife",
    description: "Species guides, population data, and where to see Uganda's iconic wildlife.",
  },
  {
    id: "practical-information",
    label: "Practical Information",
    slug: "practical-information",
    description: "Licensing, financing, connectivity, energy, land tenure, MICE infrastructure, and compliance.",
  },
  {
    id: "culture-community",
    label: "Culture & Community",
    slug: "culture-community",
    description: "Craft tourism, community partnerships, and cultural experiences in Uganda.",
  },
  {
    id: "conservation",
    label: "Conservation",
    slug: "conservation",
    description: "Leisure parks, eco-sites, and conservation-focused tourism in Uganda.",
  },
];

export const categoriesMap = Object.fromEntries(
  categories.map((c) => [c.id, c])
) as Record<string, CategoryDefinition>;

export const categoryBySlug = Object.fromEntries(
  categories.map((c) => [c.slug, c])
) as Record<string, CategoryDefinition>;
