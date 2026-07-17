import type { HubDefinition } from "@/data/taxonomy/types";
import { accommodationGuidesHub } from "./accommodation-guides";
import { bwindiHub } from "./bwindi";
import { assertUniqueRootSlugs } from "@/lib/hubs/slug-registry";
import { getIndexableHubs } from "@/lib/hubs/quality";

export const allHubs: HubDefinition[] = [
  accommodationGuidesHub,
  bwindiHub,
];

export const hubsMap = Object.fromEntries(
  allHubs.map((h) => [h.slug, h])
) as Record<string, HubDefinition>;

export const hubSlugs = allHubs.map((h) => h.slug);

assertUniqueRootSlugs(hubSlugs);

export const indexableHubs = getIndexableHubs(allHubs);

export const indexableHubSlugs = new Set(indexableHubs.map((h) => h.slug));
