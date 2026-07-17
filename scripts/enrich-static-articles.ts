import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, basename } from "path";
import { articles, articlesMap } from "@/data/taxonomy/articles";
import { categoriesMap } from "@/data/taxonomy/categories";
import { allHubs, hubsMap, indexableHubs } from "@/data/hubs";
import { getRelatedArticles } from "@/lib/hubs/engine";
import type { Article, HubDefinition } from "@/data/taxonomy/types";

const indexableHubSlugs = new Set(indexableHubs.map((h) => h.slug));

const PUBLIC_DIR = join(import.meta.dirname, "..", "public");
const SITE_URL = "https://lodgesofuganda.com";

const MARKER_BREADCRUMB_START = "<!-- hub-enrichment:breadcrumb:start -->";
const MARKER_BREADCRUMB_END = "<!-- hub-enrichment:breadcrumb:end -->";
const MARKER_RELATED_START = "<!-- hub-enrichment:related:start -->";
const MARKER_RELATED_END = "<!-- hub-enrichment:related:end -->";

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function getCategoryHub(categoryId: string): HubDefinition | undefined {
  return allHubs.find(
    (h) => h.type === "category" && h.categoryId === categoryId,
  );
}

function getIndexableCategoryHub(categoryId: string): HubDefinition | undefined {
  const hub = getCategoryHub(categoryId);
  return hub && indexableHubSlugs.has(hub.slug) ? hub : undefined;
}

function getEntityHub(entityId: string): HubDefinition | undefined {
  return allHubs.find(
    (h) => h.type === "entity" && h.entityRef?.id === entityId,
  );
}

function getIndexableEntityHub(entityId: string): HubDefinition | undefined {
  const hub = getEntityHub(entityId);
  return hub && indexableHubSlugs.has(hub.slug) ? hub : undefined;
}

function buildBreadcrumb(article: Article): string {
  const category = categoriesMap[article.primaryCategory];
  const indexableCategoryHub = getIndexableCategoryHub(article.primaryCategory);
  const title = slugToTitle(article.slug);

  const crumbs: string[] = [
    `<a href="/" class="text-gold hover:text-gold-light">Home</a>`,
  ];

  if (indexableCategoryHub) {
    crumbs.push(
      `<a href="/${indexableCategoryHub.slug}" class="text-gold hover:text-gold-light">${category.label}</a>`,
    );
  } else if (category) {
    crumbs.push(`<span class="text-olive-dark">${category.label}</span>`);
  }

  crumbs.push(`<span class="text-olive-dark">${title}</span>`);

  return `${MARKER_BREADCRUMB_START}
<nav aria-label="Breadcrumb" class="max-w-4xl mx-auto px-4 pt-4 pb-2">
  <ol class="flex flex-wrap items-center gap-1 text-sm text-olive-dark">
    ${crumbs.map((c, i) => `<li class="flex items-center gap-1">${i > 0 ? '<span class="text-sand">/</span> ' : ""}${c}</li>`).join("\n    ")}
  </ol>
</nav>
${MARKER_BREADCRUMB_END}`;
}

function findIndexableEntityHub(article: Article): HubDefinition | undefined {
  const allEntityIds = [
    article.primaryEntity.id,
    ...article.entities.map((e) => e.id),
  ];
  for (const id of allEntityIds) {
    const hub = getIndexableEntityHub(id);
    if (hub) return hub;
  }
  return undefined;
}

function buildRelatedSection(article: Article, extraSlugs: string[] = []): string {
  const related = getRelatedArticles(article.slug, 6);
  // Add coverage-guarantee articles that wouldn't otherwise appear
  for (const slug of extraSlugs) {
    if (!related.some((r) => r.article.slug === slug)) {
      const extra = articlesMap[slug];
      if (extra) related.push({ article: extra, score: 0 });
    }
  }
  const category = categoriesMap[article.primaryCategory];
  const categoryHub = getIndexableCategoryHub(article.primaryCategory);
  const entityHub = findIndexableEntityHub(article);

  const lines: string[] = [];
  lines.push(MARKER_RELATED_START);
  lines.push(
    `<nav class="max-w-3xl mx-auto px-4 py-12" aria-label="Related content">`,
  );

  // Hub navigation badges
  const badges: string[] = [];
  if (categoryHub) {
    badges.push(
      `<a href="/${categoryHub.slug}" class="inline-block px-4 py-2 rounded-full text-sm font-semibold transition-colors" style="background-color:#2F4A3A;color:#F7F4ED">${category.label} Hub &rarr;</a>`,
    );
  }
  if (
    entityHub &&
    article.primaryEntity.id !== "uganda" &&
    entityHub.slug !== categoryHub?.slug
  ) {
    badges.push(
      `<a href="/${entityHub.slug}" class="inline-block px-4 py-2 rounded-full text-sm font-semibold transition-colors" style="background-color:#C49A4A;color:#2F4A3A">${entityHub.title.split(" — ")[0]} Hub &rarr;</a>`,
    );
  }
  if (badges.length > 0) {
    lines.push(`  <div class="flex flex-wrap gap-3 mb-8">`);
    for (const b of badges) {
      lines.push(`    ${b}`);
    }
    lines.push(`  </div>`);
  }

  // Related articles
  if (related.length > 0) {
    lines.push(
      `  <h2 class="text-xl font-bold mb-6" style="color:#2F4A3A">Related Articles</h2>`,
    );
    lines.push(`  <div class="grid sm:grid-cols-2 gap-4">`);
    for (const { article: rel } of related) {
      lines.push(
        `    <a href="/${rel.slug}" class="block p-4 rounded-lg border hover:shadow-md transition-shadow" style="border-color:#E8E0D0">`,
      );
      lines.push(
        `      <span class="font-semibold" style="color:#2F4A3A">${slugToTitle(rel.slug)}</span>`,
      );
      lines.push(`    </a>`);
    }
    lines.push(`  </div>`);
  }

  lines.push(`</nav>`);
  lines.push(MARKER_RELATED_END);

  return lines.join("\n");
}

function stripMarkerBlock(
  html: string,
  startMarker: string,
  endMarker: string,
): string {
  const re = new RegExp(
    startMarker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
      "[\\s\\S]*?" +
      endMarker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
      "\\n?",
    "g",
  );
  return html.replace(re, "");
}

function stripOldRelatedArticles(html: string): string {
  // Pattern 1: <nav class="max-w-3xl mx-auto px-4 py-12"> ... </nav> (outside main)
  html = html.replace(
    /<nav class="max-w-3xl mx-auto px-4 py-12">[\s\S]*?<\/nav>/g,
    "",
  );

  // Pattern 2: footer inside article with "Related Articles" heading
  html = html.replace(
    /\s*<!-- Related Articles -->\s*<footer class="border-t border-sand[^"]*">[\s\S]*?<\/footer>/g,
    "",
  );

  return html;
}

function enrichArticle(filePath: string, slug: string, extraSlugs: string[] = []): boolean {
  const article = articlesMap[slug];
  if (!article) {
    return false;
  }

  let html = readFileSync(filePath, "utf-8");

  // Strip any existing enrichment
  html = stripMarkerBlock(html, MARKER_BREADCRUMB_START, MARKER_BREADCRUMB_END);
  html = stripMarkerBlock(html, MARKER_RELATED_START, MARKER_RELATED_END);

  // Strip old hand-coded related articles
  html = stripOldRelatedArticles(html);

  // Inject breadcrumb after opening <body...> tag (before <main>)
  const bodyMatch = html.match(/<body[^>]*>/);
  if (bodyMatch) {
    const insertPos = bodyMatch.index! + bodyMatch[0].length;
    const breadcrumb = buildBreadcrumb(article);
    html = html.slice(0, insertPos) + "\n" + breadcrumb + html.slice(insertPos);
  }

  // Inject related section before the footer
  const footerMatch = html.match(
    /\s*<footer class="bg-forest[^"]*">/,
  );
  if (footerMatch && footerMatch.index !== undefined) {
    const relatedSection = buildRelatedSection(article, extraSlugs);
    html =
      html.slice(0, footerMatch.index) +
      "\n\n" +
      relatedSection +
      "\n" +
      html.slice(footerMatch.index);
  } else {
    // Fallback: insert before </body>
    const bodyClose = html.lastIndexOf("</body>");
    if (bodyClose !== -1) {
      const relatedSection = buildRelatedSection(article, extraSlugs);
      html =
        html.slice(0, bodyClose) +
        "\n" +
        relatedSection +
        "\n" +
        html.slice(bodyClose);
    }
  }

  writeFileSync(filePath, html, "utf-8");
  return true;
}

// ─── Coverage guarantee ───
// After computing all standard related sections, find articles that would
// receive zero inlinks and inject them into their best-match's related section.

function computeCoverageMap(): Map<string, string[]> {
  const inlinkedBy = new Map<string, Set<string>>();
  for (const a of articles) {
    const related = getRelatedArticles(a.slug, 6);
    for (const { article: rel } of related) {
      if (!inlinkedBy.has(rel.slug)) inlinkedBy.set(rel.slug, new Set());
      inlinkedBy.get(rel.slug)!.add(a.slug);
    }
  }

  // Also count hub inlinks
  for (const hub of allHubs) {
    if (!indexableHubSlugs.has(hub.slug)) continue;
    const hubArticles =
      hub.type === "category" && hub.categoryId
        ? articles.filter((a) => a.primaryCategory === hub.categoryId)
        : hub.entityRef
          ? articles.filter(
              (a) =>
                a.primaryEntity.id === hub.entityRef!.id ||
                a.entities.some((e) => e.id === hub.entityRef!.id),
            )
          : [];
    for (const a of hubArticles) {
      if (!inlinkedBy.has(a.slug)) inlinkedBy.set(a.slug, new Set());
      inlinkedBy.get(a.slug)!.add(`HUB:${hub.slug}`);
    }
  }

  // Find orphans and assign each to best-match article
  const orphanAssignments = new Map<string, string[]>();
  const orphanSlugs = new Set<string>();
  for (const a of articles) {
    const sources = inlinkedBy.get(a.slug);
    if (!sources || sources.size === 0) orphanSlugs.add(a.slug);
  }

  for (const slug of orphanSlugs) {
    const a = articlesMap[slug];
    let bestSlug = "";
    let bestScore = 0;
    for (const candidate of articles) {
      if (candidate.slug === a.slug) continue;
      if (orphanSlugs.has(candidate.slug)) continue;
      const s = scoreRelationship(candidate, a);
      if (s > bestScore) {
        bestScore = s;
        bestSlug = candidate.slug;
      }
    }
    if (bestSlug) {
      if (!orphanAssignments.has(bestSlug)) orphanAssignments.set(bestSlug, []);
      orphanAssignments.get(bestSlug)!.push(slug);
    }
  }

  // Detect isolated clusters: groups of articles that only link to each other
  // After orphan assignment, check if any cluster of related articles is
  // disconnected from the wider graph
  const articleRelated = new Map<string, Set<string>>();
  for (const a of articles) {
    const related = getRelatedArticles(a.slug, 6);
    const relSlugs = new Set(related.map(r => r.article.slug));
    // Add coverage-guarantee extras
    const extras = orphanAssignments.get(a.slug);
    if (extras) for (const e of extras) relSlugs.add(e);
    articleRelated.set(a.slug, relSlugs);
  }

  // Find connected components via BFS from articles that have hub inlinks
  const connected = new Set<string>();
  const queue: string[] = [];
  for (const a of articles) {
    const sources = inlinkedBy.get(a.slug);
    if (sources) {
      for (const src of sources) {
        if (src.startsWith("HUB:")) {
          connected.add(a.slug);
          queue.push(a.slug);
          break;
        }
      }
    }
  }

  // Also seed with articles assigned as orphans to connected hosts
  for (const [host, orphans] of orphanAssignments) {
    if (connected.has(host)) {
      for (const o of orphans) {
        if (!connected.has(o)) {
          connected.add(o);
          queue.push(o);
        }
      }
    }
  }

  // BFS: follow FORWARD links only (matching actual HTML outlinks)
  while (queue.length > 0) {
    const current = queue.shift()!;
    const fwd = articleRelated.get(current);
    if (fwd) {
      for (const target of fwd) {
        if (!connected.has(target)) {
          connected.add(target);
          queue.push(target);
        }
      }
    }
  }

  // Any article not in connected set needs a bridge link
  for (const a of articles) {
    if (connected.has(a.slug)) continue;
    let bestSlug = "";
    let bestScore = 0;
    for (const candidate of articles) {
      if (candidate.slug === a.slug) continue;
      if (!connected.has(candidate.slug)) continue;
      const s = scoreRelationship(candidate, a);
      if (s > bestScore) {
        bestScore = s;
        bestSlug = candidate.slug;
      }
    }
    if (bestSlug) {
      if (!orphanAssignments.has(bestSlug)) orphanAssignments.set(bestSlug, []);
      orphanAssignments.get(bestSlug)!.push(a.slug);
      connected.add(a.slug);
      // Also connect the rest of this article's cluster
      const clusterQueue = [a.slug];
      while (clusterQueue.length > 0) {
        const cur = clusterQueue.shift()!;
        const rel = articleRelated.get(cur);
        if (rel) {
          for (const r of rel) {
            if (!connected.has(r)) {
              connected.add(r);
              clusterQueue.push(r);
            }
          }
        }
      }
    }
  }

  // Depth flattening: compute BFS depth from hub-seeded articles
  // and inject bridge links for any article at depth 4+
  const depthMap = new Map<string, number>();
  const depthQueue: string[] = [];

  // Seed: articles directly linked from hubs (depth 1)
  for (const a of articles) {
    const sources = inlinkedBy.get(a.slug);
    if (sources) {
      for (const src of sources) {
        if (src.startsWith("HUB:")) {
          depthMap.set(a.slug, 1);
          depthQueue.push(a.slug);
          break;
        }
      }
    }
  }

  // Also treat articles reachable from homepage at depth 1
  // (homepage links + footer links present on every page)
  const homepageArticles = ["ssese-islands-guide", "budget-vs-luxury-uganda",
    "lodges-hotels-by-region", "accommodation-types-uganda",
    "buhoma-sector-lodges-bwindi", "rushaga-sector-lodges-bwindi",
    "ruhija-sector-lodges-bwindi", "nkuringo-sector-lodges-bwindi",
    "mweya-peninsula-lodges-queen-elizabeth", "kasenyi-plains-lodges-queen-elizabeth"];
  for (const slug of homepageArticles) {
    if (!depthMap.has(slug)) {
      depthMap.set(slug, 1);
      depthQueue.push(slug);
    }
  }

  // Rebuild articleRelated with current orphan assignments
  for (const a of articles) {
    const related = getRelatedArticles(a.slug, 6);
    const relSlugs = new Set(related.map((r) => r.article.slug));
    const extras = orphanAssignments.get(a.slug);
    if (extras) for (const e of extras) relSlugs.add(e);
    articleRelated.set(a.slug, relSlugs);
  }

  // BFS forward only
  while (depthQueue.length > 0) {
    const current = depthQueue.shift()!;
    const d = depthMap.get(current)!;
    const fwd = articleRelated.get(current);
    if (fwd) {
      for (const target of fwd) {
        if (!depthMap.has(target)) {
          depthMap.set(target, d + 1);
          depthQueue.push(target);
        }
      }
    }
  }

  // Inject bridge links for depth 4+ or unreachable articles
  // Try depth-1 targets first, fall back to depth-2
  const depth1Articles = articles.filter((a) => depthMap.get(a.slug) === 1);
  const depth2Articles = articles.filter((a) => depthMap.get(a.slug) === 2);
  let bridged = 0;
  for (const a of articles) {
    const d = depthMap.get(a.slug);
    if (d !== undefined && d < 4) continue;

    let bestSlug = "";
    let bestScore = 0;
    // Prefer depth-1 targets
    for (const candidate of depth1Articles) {
      if (candidate.slug === a.slug) continue;
      const s = scoreRelationship(candidate, a);
      if (s > bestScore) {
        bestScore = s;
        bestSlug = candidate.slug;
      }
    }
    // Fall back to depth-2 only if no depth-1 match
    if (!bestSlug) {
      for (const candidate of depth2Articles) {
        if (candidate.slug === a.slug) continue;
        const s = scoreRelationship(candidate, a);
        if (s > bestScore) {
          bestScore = s;
          bestSlug = candidate.slug;
        }
      }
    }
    if (bestSlug) {
      if (!orphanAssignments.has(bestSlug))
        orphanAssignments.set(bestSlug, []);
      orphanAssignments.get(bestSlug)!.push(a.slug);
      bridged++;
    }
  }
  if (bridged > 0) {
    console.log(`  Depth-flattening bridges: ${bridged}`);
  }

  return orphanAssignments;
}

import { scoreRelationship } from "@/lib/hubs/engine";

// Main
const htmlFiles = readdirSync(PUBLIC_DIR).filter((f) => f.endsWith(".html"));
let enriched = 0;
let skipped = 0;
const notInTaxonomy: string[] = [];

// Compute which articles need coverage guarantees
const orphanAssignments = computeCoverageMap();
let orphansPlaced = 0;

for (const file of htmlFiles) {
  const slug = basename(file, ".html");
  const filePath = join(PUBLIC_DIR, file);
  const extraSlugs = orphanAssignments.get(slug) || [];
  if (enrichArticle(filePath, slug, extraSlugs)) {
    enriched++;
    orphansPlaced += extraSlugs.length;
  } else {
    skipped++;
    notInTaxonomy.push(slug);
  }
}

console.log(`\nArticle Enrichment Complete`);
console.log(`  Enriched: ${enriched}`);
console.log(`  Skipped (not in taxonomy): ${skipped}`);
console.log(`  Orphans placed via coverage guarantee: ${orphansPlaced}`);
if (notInTaxonomy.length > 0) {
  console.log(`  Missing slugs: ${notInTaxonomy.join(", ")}`);
}
