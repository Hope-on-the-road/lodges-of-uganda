import type { Article, EntityRef } from "@/data/taxonomy/types";
import { articles, articlesByCategory, articlesByEntity } from "@/data/taxonomy/articles";

interface ScoredArticle {
  article: Article;
  score: number;
}

const WEIGHT: Record<string, number> = {
  "same-primary-entity": 10,
  "same-primary-category": 5,
  "shared-park": 5,
  "shared-region": 4,
  "shared-destination": 4,
  "shared-activity": 3,
  "shared-style": 2,
  "shared-operator": 2,
  "shared-species": 3,
  "shared-district": 2,
  "shared-town": 3,
  "shared-transport": 1,
  "same-search-intent": 2,
};

const ZERO_WEIGHT_ENTITIES = new Set(["uganda"]);

function entityWeight(type: string): number {
  switch (type) {
    case "park": return WEIGHT["shared-park"];
    case "region": return WEIGHT["shared-region"];
    case "activity": return WEIGHT["shared-activity"];
    case "style": return WEIGHT["shared-style"];
    case "operator": return WEIGHT["shared-operator"];
    case "species": return WEIGHT["shared-species"];
    case "district": return WEIGHT["shared-district"];
    case "town": return WEIGHT["shared-town"];
    case "transport": return WEIGHT["shared-transport"];
    default: return 1;
  }
}

function allEntities(article: Article): EntityRef[] {
  return [article.primaryEntity, ...article.entities];
}

export function scoreRelationship(a: Article, b: Article): number {
  if (a.slug === b.slug) return 0;

  let score = 0;

  if (
    a.primaryEntity.id === b.primaryEntity.id &&
    !ZERO_WEIGHT_ENTITIES.has(a.primaryEntity.id)
  ) {
    score += WEIGHT["same-primary-entity"];
  }

  if (a.primaryCategory === b.primaryCategory) {
    score += WEIGHT["same-primary-category"];
  }

  if (a.searchIntent === b.searchIntent) {
    score += WEIGHT["same-search-intent"];
  }

  const aEntities = allEntities(a);
  const bEntityIds = new Set(
    allEntities(b)
      .filter((e) => !ZERO_WEIGHT_ENTITIES.has(e.id))
      .map((e) => `${e.type}:${e.id}`)
  );

  const primaryPairKey = `${a.primaryEntity.type}:${a.primaryEntity.id}`;
  for (const entity of aEntities) {
    if (ZERO_WEIGHT_ENTITIES.has(entity.id)) continue;
    const key = `${entity.type}:${entity.id}`;
    if (key === primaryPairKey && score > 0) continue;
    if (bEntityIds.has(key)) {
      score += entityWeight(entity.type);
    }
  }

  return score;
}

export function getRelatedArticles(
  slug: string,
  limit: number = 8,
): { article: Article; score: number }[] {
  const source = articles.find((a) => a.slug === slug);
  if (!source) return [];

  const scored: ScoredArticle[] = [];
  for (const candidate of articles) {
    const s = scoreRelationship(source, candidate);
    if (s > 0) scored.push({ article: candidate, score: s });
  }

  return scored.sort((a, b) => b.score - a.score).slice(0, limit);
}

export function getArticlesForCategoryHub(categoryId: string): Article[] {
  return articlesByCategory(categoryId);
}

export function getArticlesForEntityHub(entityId: string): Article[] {
  return articlesByEntity(entityId);
}

export function getRelatedEntities(
  sourceArticles: Article[],
  excludeEntityIds: Set<string> = new Set(),
  limit: number = 10,
): { entity: EntityRef; count: number }[] {
  const entityCounts = new Map<string, { entity: EntityRef; count: number }>();

  for (const article of sourceArticles) {
    for (const entity of allEntities(article)) {
      if (ZERO_WEIGHT_ENTITIES.has(entity.id)) continue;
      if (excludeEntityIds.has(entity.id)) continue;
      const key = `${entity.type}:${entity.id}`;
      const existing = entityCounts.get(key);
      if (existing) {
        existing.count++;
      } else {
        entityCounts.set(key, { entity, count: 1 });
      }
    }
  }

  return Array.from(entityCounts.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export function detectCannibalizationRisk(
  hubArticles: Article[],
): { a: string; b: string; score: number }[] {
  const risks: { a: string; b: string; score: number }[] = [];

  for (let i = 0; i < hubArticles.length; i++) {
    for (let j = i + 1; j < hubArticles.length; j++) {
      const a = hubArticles[i];
      const b = hubArticles[j];
      if (
        a.searchIntent === b.searchIntent &&
        a.primaryEntity.id === b.primaryEntity.id &&
        a.primaryCategory === b.primaryCategory
      ) {
        const score = scoreRelationship(a, b);
        if (score >= 20) {
          risks.push({ a: a.slug, b: b.slug, score });
        }
      }
    }
  }

  return risks.sort((a, b) => b.score - a.score);
}
