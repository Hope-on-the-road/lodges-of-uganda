import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, basename } from "path";
import { articles, articlesMap } from "@/data/taxonomy/articles";
import { categoriesMap } from "@/data/taxonomy/categories";
import { allHubs, hubsMap } from "@/data/hubs";
import { getRelatedArticles } from "@/lib/hubs/engine";
import type { Article } from "@/data/taxonomy/types";

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

function getCategoryHub(categoryId: string) {
  return allHubs.find(
    (h) => h.type === "category" && h.categoryId === categoryId,
  );
}

function getEntityHub(entityId: string) {
  return allHubs.find(
    (h) => h.type === "entity" && h.entityRef?.id === entityId,
  );
}

function buildBreadcrumb(article: Article): string {
  const category = categoriesMap[article.primaryCategory];
  const categoryHub = getCategoryHub(article.primaryCategory);
  const title = slugToTitle(article.slug);

  const crumbs: string[] = [
    `<a href="/" class="text-gold hover:text-gold-light">Home</a>`,
  ];

  if (categoryHub) {
    crumbs.push(
      `<a href="/${categoryHub.slug}" class="text-gold hover:text-gold-light">${category.label}</a>`,
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

function findEntityHub(article: Article) {
  const allEntityIds = [
    article.primaryEntity.id,
    ...article.entities.map((e) => e.id),
  ];
  for (const id of allEntityIds) {
    const hub = getEntityHub(id);
    if (hub) return hub;
  }
  return undefined;
}

function buildRelatedSection(article: Article): string {
  const related = getRelatedArticles(article.slug, 6);
  const category = categoriesMap[article.primaryCategory];
  const categoryHub = getCategoryHub(article.primaryCategory);
  const entityHub = findEntityHub(article);

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

function enrichArticle(filePath: string, slug: string): boolean {
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
    const relatedSection = buildRelatedSection(article);
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
      const relatedSection = buildRelatedSection(article);
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

// Main
const htmlFiles = readdirSync(PUBLIC_DIR).filter((f) => f.endsWith(".html"));
let enriched = 0;
let skipped = 0;
const notInTaxonomy: string[] = [];

for (const file of htmlFiles) {
  const slug = basename(file, ".html");
  const filePath = join(PUBLIC_DIR, file);
  if (enrichArticle(filePath, slug)) {
    enriched++;
  } else {
    skipped++;
    notInTaxonomy.push(slug);
  }
}

console.log(`\nArticle Enrichment Complete`);
console.log(`  Enriched: ${enriched}`);
console.log(`  Skipped (not in taxonomy): ${skipped}`);
if (notInTaxonomy.length > 0) {
  console.log(`  Missing slugs: ${notInTaxonomy.join(", ")}`);
}
