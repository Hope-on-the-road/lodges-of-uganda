import { getLodges } from "./lodges-data";
import type { Lodge } from "./lodge-types";

export interface ComparePair {
  slug: string;
  lodgeA: Lodge;
  lodgeB: Lodge;
  reason: string;
}

function makeSlug(a: Lodge, b: Lodge): string {
  const [first, second] = [a.slug, b.slug].sort();
  return `${first}-vs-${second}`;
}

function hasEnoughContent(l: Lodge): boolean {
  return l.roomTypes.length > 0 || l.pros.length > 0 || (l.dining.length > 20 && l.highlights.length >= 4);
}

export async function generateComparePairs(): Promise<ComparePair[]> {
  const lodges = await getLodges();
  const pairs = new Map<string, ComparePair>();

  const eligible = lodges.filter(hasEnoughContent);

  for (let i = 0; i < eligible.length; i++) {
    for (let j = i + 1; j < eligible.length; j++) {
      const a = eligible[i];
      const b = eligible[j];

      if (a.id === b.id) continue;

      const sameRegion = a.region === b.region;
      const sameSubregion = a.subregion === b.subregion && a.subregion !== "";
      const sameActivity =
        (a.gorillaTracking && b.gorillaTracking) ||
        (a.gameDrive && b.gameDrive) ||
        (a.chimpanzeeTrekking && b.chimpanzeeTrekking) ||
        (a.boatSafari && b.boatSafari);

      if (!sameRegion && !sameActivity) continue;

      let reason = "";
      if (sameSubregion) {
        reason = `Both in ${a.subregion}`;
      } else if (sameRegion) {
        reason = `Both in ${a.region} region`;
      } else if (a.gorillaTracking && b.gorillaTracking) {
        reason = "Both offer gorilla trekking";
      } else if (a.gameDrive && b.gameDrive) {
        reason = "Both offer game drives";
      } else if (a.chimpanzeeTrekking && b.chimpanzeeTrekking) {
        reason = "Both offer chimpanzee trekking";
      }

      const slug = makeSlug(a, b);
      if (!pairs.has(slug)) {
        const [first] = [a.slug, b.slug].sort();
        pairs.set(slug, {
          slug,
          lodgeA: first === a.slug ? a : b,
          lodgeB: first === a.slug ? b : a,
          reason,
        });
      }
    }
  }

  return Array.from(pairs.values());
}

let cachedPairs: ComparePair[] | null = null;
let cachedMap: Map<string, ComparePair> | null = null;

export async function getComparePairs(): Promise<ComparePair[]> {
  if (cachedPairs) return cachedPairs;
  cachedPairs = await generateComparePairs();
  return cachedPairs;
}

export async function getComparePairsMap(): Promise<Map<string, ComparePair>> {
  if (cachedMap) return cachedMap;
  const pairs = await getComparePairs();
  cachedMap = new Map(pairs.map((p) => [p.slug, p]));
  return cachedMap;
}
