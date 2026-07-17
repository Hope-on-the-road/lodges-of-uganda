import { readFileSync, readdirSync, existsSync } from "fs";
import { join, basename } from "path";
import { articles, articlesMap } from "@/data/taxonomy/articles";
import { categoriesMap } from "@/data/taxonomy/categories";
import { allHubs, hubsMap, indexableHubs } from "@/data/hubs";
import { getRelatedArticles, getArticlesForCategoryHub, getArticlesForEntityHub, getRelatedEntities } from "@/lib/hubs/engine";
import { getLodges } from "@/lib/lodges-data";
import { regions as allRegions } from "@/lib/regions-data";
import { nearPages, subregionPages, allProgrammaticSlugs } from "@/lib/programmatic-pages";
import { NAV_LINKS } from "@/lib/constants";

const ROOT = join(import.meta.dirname, "..");
const PUBLIC_DIR = join(ROOT, "public");

const FOOTER_LINKS = [
  "/blog", "/blog/uganda-safari-cost-guide", "/blog/bwindi-sectors-compared",
  "/blog/is-uganda-safe-for-tourists",
  "/buhoma-sector-lodges-bwindi", "/rushaga-sector-lodges-bwindi",
  "/ruhija-sector-lodges-bwindi", "/nkuringo-sector-lodges-bwindi",
  "/mweya-peninsula-lodges-queen-elizabeth", "/kasenyi-plains-lodges-queen-elizabeth",
  "/about", "/legal-notice", "/privacy-policy",
];

type LinkSource = "hub" | "article-to-article" | "navigation" | "footer" | "homepage" | "lodge-page" | "region-page" | "programmatic" | "blog";

interface InLink {
  from: string;
  source: LinkSource;
}

// ─── URL inventory ───

function buildUrlInventory(lodges: { slug: string; region: string }[]) {
  const urls = new Set<string>();

  urls.add("/");
  urls.add("/lodges");
  urls.add("/about");
  urls.add("/lodge-finder");
  urls.add("/itineraries");
  urls.add("/best-of");
  urls.add("/blog");
  urls.add("/tour-operators");
  urls.add("/legal-notice");
  urls.add("/privacy-policy");
  urls.add("/gorilla-permit-guide");
  urls.add("/best-time-to-visit");
  urls.add("/uganda-vs-rwanda-gorilla-trekking");

  for (const a of articles) urls.add(`/${a.slug}`);
  for (const h of allHubs) urls.add(`/${h.slug}`);
  for (const slug of allProgrammaticSlugs) urls.add(`/${slug}`);
  for (const l of lodges) urls.add(`/lodges/${l.region}/${l.slug}`);

  // Region pages (from regions-data, not just lodge regions)
  for (const r of allRegions) urls.add(`/regions/${r.slug}`);

  // Blog pages (scan directory)
  const blogDir = join(ROOT, "src", "app", "blog");
  try {
    const blogEntries = readdirSync(blogDir, { withFileTypes: true });
    for (const entry of blogEntries) {
      if (entry.isDirectory()) urls.add(`/blog/${entry.name}`);
    }
  } catch { /* no blog dir */ }

  // Itinerary pages
  const itinDir = join(ROOT, "src", "app", "itineraries");
  try {
    const entries = readdirSync(itinDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) urls.add(`/itineraries/${entry.name}`);
    }
  } catch { /* no dir */ }

  // Compare pages, tour operator pages — added via lodges data
  // For now add known static routes
  urls.add(`/for-lodges`);
  urls.add(`/update`);

  return urls;
}

// ─── Parse links from static HTML ───

function extractHrefs(html: string): string[] {
  const re = /href="(\/[^"#?]*?)"/g;
  const hrefs: string[] = [];
  let m;
  while ((m = re.exec(html))) {
    hrefs.push(m[1]);
  }
  return hrefs;
}

// ─── Build link graph ───

function buildLinkGraph(lodges: { slug: string; region: string; subregion: string; gorillaTracking: boolean }[]) {
  const inlinks = new Map<string, InLink[]>();
  const allUrls = buildUrlInventory(lodges);
  const brokenLinks: { from: string; to: string }[] = [];

  function addLink(from: string, to: string, source: LinkSource) {
    if (!to || to === from) return;
    // Normalize: strip trailing slash
    to = to.replace(/\/$/, "") || "/";
    if (!inlinks.has(to)) inlinks.set(to, []);
    inlinks.get(to)!.push({ from, source });
  }

  function checkBroken(from: string, to: string) {
    const normalized = to.replace(/\/$/, "") || "/";
    if (!allUrls.has(normalized)) {
      brokenLinks.push({ from, to: normalized });
    }
  }

  // 1. Navigation links (header — on every page)
  for (const link of NAV_LINKS) {
    const href = link.href.split("#")[0] || "/";
    addLink("HEADER_NAV", href, "navigation");
  }

  // 2. Footer links (on every page)
  for (const href of FOOTER_LINKS) {
    addLink("FOOTER", href, "footer");
  }

  // 3. Homepage links
  const homepageLinks = [
    "/lodges", "/lodge-finder",
    "/regions/bwindi", "/regions/queen-elizabeth", "/regions/murchison-falls",
    "/regions/kidepo",
    "/regions/karamoja", "/regions/mgahinga", "/regions/fort-portal",
    "/lodges/jinja/wildwaters-lodge", "/lodges/bwindi/gorilla-bluff-lodge",
    "/ssese-islands-guide",
    "/blog/uganda-safari-cost-guide", "/blog/bwindi-sectors-compared",
    "/blog/entebbe-to-bwindi-travel-options", "/blog",
    "/best-of",
    "/budget-vs-luxury-uganda", "/lodges-hotels-by-region", "/accommodation-types-uganda",
    "/blog/best-time-book-uganda-lodge", "/blog/food-uganda-safari-lodges",
    "/accommodation-guides", "/bwindi",
  ];
  for (const href of homepageLinks) {
    addLink("/", href, "homepage");
    checkBroken("/", href);
  }
  // Homepage region links (dynamic)
  const regionSlugs = [...new Set(lodges.map(l => l.region))];
  for (const r of regionSlugs) {
    addLink("/", `/regions/${r}`, "homepage");
  }

  // 4. Hub pages → articles
  for (const hub of allHubs) {
    const hubUrl = `/${hub.slug}`;
    const hubArticles = hub.type === "category" && hub.categoryId
      ? getArticlesForCategoryHub(hub.categoryId)
      : hub.entityRef
        ? getArticlesForEntityHub(hub.entityRef.id)
        : [];

    // All articles section
    for (const a of hubArticles) {
      addLink(hubUrl, `/${a.slug}`, "hub");
    }

    // Featured articles
    for (const slug of hub.featuredArticleSlugs) {
      addLink(hubUrl, `/${slug}`, "hub");
    }

    // Lodge links from hub
    if (hub.entityRef) {
      const hubLodges = lodges.filter(l => l.region === hub.entityRef!.id);
      for (const l of hubLodges) {
        addLink(hubUrl, `/lodges/${l.region}/${l.slug}`, "hub");
      }
    }

    // Related entities that have hubs
    const relatedEntities = getRelatedEntities(
      hubArticles,
      new Set(hub.entityRef ? [hub.entityRef.id] : []),
      10
    );
    for (const e of relatedEntities) {
      if (hubsMap[e.entity.id]) {
        addLink(hubUrl, `/${e.entity.id}`, "hub");
      }
    }

    // Related hubs
    for (const other of allHubs) {
      if (other.slug !== hub.slug) {
        addLink(hubUrl, `/${other.slug}`, "hub");
      }
    }

    // Related categories
    const catSlugs = hub.relatedCategorySlugs || [];
    for (const cs of catSlugs) {
      if (hubsMap[cs]) {
        addLink(hubUrl, `/${cs}`, "hub");
      }
    }
  }

  // 5. Static article HTML → parse outbound links
  const htmlFiles = readdirSync(PUBLIC_DIR).filter(f => f.endsWith(".html"));
  for (const file of htmlFiles) {
    const slug = basename(file, ".html");
    const articleUrl = `/${slug}`;
    const html = readFileSync(join(PUBLIC_DIR, file), "utf-8");
    const hrefs = extractHrefs(html);

    for (const href of hrefs) {
      // Classify the link source
      const isEnrichmentRelated = html.includes("hub-enrichment:related");
      // Check if this href is inside the enrichment block
      const relatedStart = html.indexOf("<!-- hub-enrichment:related:start -->");
      const relatedEnd = html.indexOf("<!-- hub-enrichment:related:end -->");
      const bcStart = html.indexOf("<!-- hub-enrichment:breadcrumb:start -->");
      const bcEnd = html.indexOf("<!-- hub-enrichment:breadcrumb:end -->");
      const hrefPos = html.indexOf(`href="${href}"`);

      let source: LinkSource = "article-to-article";
      if (hrefPos >= bcStart && hrefPos <= bcEnd) {
        source = "navigation"; // breadcrumb
      } else if (hrefPos >= relatedStart && hrefPos <= relatedEnd) {
        // Hub badge or computed related
        if (href.match(/^\/[a-z-]+$/) && hubsMap[href.slice(1)]) {
          source = "hub";
        } else {
          source = "article-to-article";
        }
      }

      addLink(articleUrl, href, source);
      checkBroken(articleUrl, href);
    }
  }

  // 6. Programmatic pages (BestOfPage) → lodge links
  for (const slug of allProgrammaticSlugs) {
    const pageUrl = `/${slug}`;
    // These pages link to lodges matching their filter
    // They also link to /lodges via breadcrumb
    addLink(pageUrl, "/lodges", "programmatic");
    // They link to hardcoded "Explore More" guides
    const bestOfLinks = [
      "/lodges/best/gorilla-trekking", "/lodges/best/luxury",
      "/lodges/best/budget", "/lodges/best/bwindi",
      "/lodges/best/queen-elizabeth", "/lodges/best/eco-lodges",
      "/lodges/best/honeymoon",
    ];
    for (const href of bestOfLinks) {
      addLink(pageUrl, href, "programmatic");
    }
  }

  return { inlinks, brokenLinks, allUrls };
}

// ─── BFS click depth ───

function computeClickDepth(
  allUrls: Set<string>,
  inlinks: Map<string, InLink[]>,
) {
  // Build adjacency: from → to[]
  const outlinks = new Map<string, Set<string>>();
  for (const [to, links] of inlinks) {
    for (const link of links) {
      const from = link.from;
      if (!outlinks.has(from)) outlinks.set(from, new Set());
      outlinks.get(from)!.add(to);
    }
  }
  // Header nav links are on every page
  const navTargets = NAV_LINKS.map(l => l.href.split("#")[0] || "/");

  const depth = new Map<string, number>();
  const queue: string[] = ["/"];
  depth.set("/", 0);

  while (queue.length > 0) {
    const current = queue.shift()!;
    const d = depth.get(current)!;
    const neighbors = new Set<string>();

    // Outlinks from this page
    const out = outlinks.get(current);
    if (out) for (const n of out) neighbors.add(n);

    // Nav links available on every page
    for (const n of navTargets) neighbors.add(n);

    // Footer links available on every page
    for (const n of FOOTER_LINKS) neighbors.add(n);

    for (const neighbor of neighbors) {
      if (!depth.has(neighbor) && allUrls.has(neighbor)) {
        depth.set(neighbor, d + 1);
        queue.push(neighbor);
      }
    }
  }

  return depth;
}

// ─── Main ───

getLodges().then(lodges => {
  const { inlinks, brokenLinks, allUrls } = buildLinkGraph(lodges);
  const depth = computeClickDepth(allUrls, inlinks);

  // Focus on static articles
  const articleSlugs = articles.map(a => a.slug);
  const articleUrls = articleSlugs.map(s => `/${s}`);

  let zeroInlinks = 0;
  let oneInlink = 0;
  let twoToFour = 0;
  let fivePlus = 0;
  const orphans: string[] = [];

  for (const url of articleUrls) {
    const links = inlinks.get(url) || [];
    // Don't count self-links, deduplicate by source page
    const uniqueSources = new Set(links.map(l => l.from));
    const count = uniqueSources.size;

    if (count === 0) { zeroInlinks++; orphans.push(url); }
    else if (count === 1) oneInlink++;
    else if (count <= 4) twoToFour++;
    else fivePlus++;
  }

  // Unreachable from homepage
  const unreachable: string[] = [];
  for (const url of allUrls) {
    if (!depth.has(url)) unreachable.push(url);
  }
  const unreachableArticles = unreachable.filter(u =>
    articleSlugs.includes(u.slice(1))
  );

  // Max click depth (all URLs)
  let maxDepth = 0;
  let maxDepthUrl = "/";
  for (const [url, d] of depth) {
    if (d > maxDepth) { maxDepth = d; maxDepthUrl = url; }
  }

  // Max click depth (articles only)
  let maxArticleDepth = 0;
  let maxArticleDepthUrl = "/";
  // Article click depth distribution
  const articleDepths: number[] = [];
  for (const url of articleUrls) {
    const d = depth.get(url);
    if (d !== undefined) {
      articleDepths.push(d);
      if (d > maxArticleDepth) { maxArticleDepth = d; maxArticleDepthUrl = url; }
    }
  }

  // Inlink source breakdown for articles
  let hubInlinks = 0;
  let articleToArticle = 0;
  let navFooterInlinks = 0;
  let otherInlinks = 0;

  for (const url of articleUrls) {
    const links = inlinks.get(url) || [];
    for (const l of links) {
      if (l.source === "hub") hubInlinks++;
      else if (l.source === "article-to-article") articleToArticle++;
      else if (l.source === "navigation" || l.source === "footer") navFooterInlinks++;
      else otherInlinks++;
    }
  }

  // ─── Output ───

  console.log("═══════════════════════════════════════════");
  console.log("  LINKGRAPH AUDIT — LodgesOfUganda");
  console.log("═══════════════════════════════════════════");
  console.log("");
  console.log("OVERVIEW");
  console.log(`  Total indexable URLs:                 ${allUrls.size}`);
  console.log(`  Static articles total:               ${articleUrls.length}`);
  console.log(`  Hub pages:                           ${allHubs.length} (${indexableHubs.length} indexable)`);
  console.log(`  Programmatic pages:                  ${allProgrammaticSlugs.length}`);
  console.log(`  Lodge pages:                         ${lodges.length}`);
  console.log("");

  console.log("STATIC ARTICLE INLINKS");
  console.log(`  Articles with 0 internal inlinks:    ${zeroInlinks}`);
  console.log(`  Articles with exactly 1 inlink:      ${oneInlink}`);
  console.log(`  Articles with 2–4 inlinks:           ${twoToFour}`);
  console.log(`  Articles with 5+ inlinks:            ${fivePlus}`);
  console.log("");

  console.log("INLINK SOURCE BREAKDOWN (for articles)");
  console.log(`  Hub inlinks:                         ${hubInlinks}`);
  console.log(`  Article-to-article inlinks:          ${articleToArticle}`);
  console.log(`  Navigation/footer inlinks:           ${navFooterInlinks}`);
  console.log(`  Homepage/lodge/region/other inlinks:  ${otherInlinks}`);
  console.log("");

  console.log("LINK HEALTH");
  console.log(`  Broken internal links:               ${brokenLinks.length}`);
  console.log(`  URLs unreachable from homepage:       ${unreachable.length}`);
  console.log(`  Articles unreachable from homepage:   ${unreachableArticles.length}`);
  console.log(`  Max article click depth:             ${maxArticleDepth} (${maxArticleDepthUrl})`);
  console.log(`  Max overall click depth:             ${maxDepth} (${maxDepthUrl})`);
  console.log("");

  // Click depth distribution for articles
  const depthBuckets: Record<number, number> = {};
  for (const d of articleDepths) {
    depthBuckets[d] = (depthBuckets[d] || 0) + 1;
  }
  console.log("ARTICLE CLICK DEPTH DISTRIBUTION");
  for (const [d, count] of Object.entries(depthBuckets).sort((a, b) => +a[0] - +b[0])) {
    console.log(`  Depth ${d}:  ${count} articles`);
  }
  console.log("");

  // ─── Phase 1 goals ───

  console.log("═══════════════════════════════════════════");
  console.log("  PHASE 1 GOALS");
  console.log("═══════════════════════════════════════════");
  const goals = [
    { label: "Articles with 0 inlinks", actual: zeroInlinks, target: 0 },
    { label: "Broken internal links", actual: brokenLinks.length, target: 0 },
    { label: "URLs unreachable from homepage", actual: unreachableArticles.length, target: 0 },
    { label: "Max article click depth ≤ 3", actual: maxArticleDepth, target: 3 },
  ];
  for (const g of goals) {
    const pass = g.label.includes("≤") ? g.actual <= g.target : g.actual === g.target;
    console.log(`  ${pass ? "✅" : "❌"} ${g.label}: ${g.actual} (target: ${g.target})`);
  }
  console.log("");

  // Details
  if (orphans.length > 0) {
    console.log("ORPHAN ARTICLES (0 inlinks):");
    for (const o of orphans.sort()) console.log(`  ${o}`);
    console.log("");
  }

  if (brokenLinks.length > 0) {
    console.log("BROKEN LINKS:");
    for (const b of brokenLinks.slice(0, 30)) {
      console.log(`  ${b.from} → ${b.to}`);
    }
    if (brokenLinks.length > 30) console.log(`  ... and ${brokenLinks.length - 30} more`);
    console.log("");
  }

  if (unreachableArticles.length > 0) {
    console.log("UNREACHABLE ARTICLES:");
    for (const u of unreachableArticles.sort()) console.log(`  ${u}`);
    console.log("");
  }
});
