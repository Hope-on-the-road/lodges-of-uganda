import { articles } from "@/data/taxonomy/articles";
import { allProgrammaticSlugs } from "@/lib/programmatic-pages";

interface SlugSource {
  slug: string;
  source: string;
}

const EXPLICIT_ROUTES = new Set([
  "lodges",
  "regions",
  "tour-operators",
  "compare",
  "blog",
  "best-of",
  "about",
  "privacy-policy",
  "legal-notice",
  "itineraries",
  "lodge-finder",
  "for-lodges",
  "admin",
  "update",
  "best-time-to-visit",
  "gorilla-permit-guide",
  "uganda-vs-rwanda-gorilla-trekking",
]);

export function assertUniqueRootSlugs(hubSlugs: string[]): void {
  const all: SlugSource[] = [];

  for (const r of EXPLICIT_ROUTES) {
    all.push({ slug: r, source: "explicit-route" });
  }

  for (const slug of allProgrammaticSlugs) {
    all.push({ slug, source: "programmatic-page" });
  }

  for (const a of articles) {
    all.push({ slug: a.slug, source: "static-article" });
  }

  for (const h of hubSlugs) {
    all.push({ slug: h, source: "hub" });
  }

  const seen = new Map<string, string>();
  const collisions: string[] = [];

  for (const { slug, source } of all) {
    const existing = seen.get(slug);
    if (existing) {
      collisions.push(`"${slug}" claimed by [${existing}] and [${source}]`);
    } else {
      seen.set(slug, source);
    }
  }

  if (collisions.length > 0) {
    throw new Error(
      `Slug collisions detected — build aborted:\n${collisions.join("\n")}`
    );
  }
}

export function getAllReservedSlugs(): Set<string> {
  const reserved = new Set<string>();
  for (const r of EXPLICIT_ROUTES) reserved.add(r);
  for (const slug of allProgrammaticSlugs) reserved.add(slug);
  for (const a of articles) reserved.add(a.slug);
  return reserved;
}
