import type { HubDefinition, HubQuality } from "@/data/taxonomy/types";
import { getArticlesForCategoryHub, getArticlesForEntityHub, getRelatedEntities, detectCannibalizationRisk } from "./engine";

export function assessHubQuality(hub: HubDefinition): HubQuality {
  const hubArticles =
    hub.type === "category" && hub.categoryId
      ? getArticlesForCategoryHub(hub.categoryId)
      : hub.entityRef
        ? getArticlesForEntityHub(hub.entityRef.id)
        : [];

  const relatedEntities = getRelatedEntities(hubArticles);
  const cannibalizationRisks = detectCannibalizationRisk(hubArticles);

  return {
    hasUniqueIntroduction: hub.introduction.length >= 200,
    hasPrimaryEntity: hub.type === "entity" ? !!hub.entityRef : true,
    articleCount: hubArticles.length,
    distinctEntityCount: relatedEntities.length,
    relatedHubCount: 0,
    hasFaq: hub.faqs.length >= 3,
    hasUsefulLodges: hub.featuredLodgeSlugs.length > 0,
    duplicateIntentRisk: cannibalizationRisks.length > 0,
  };
}

export function isHubReadyForIndexing(hub: HubDefinition): { ready: boolean; reasons: string[] } {
  const q = assessHubQuality(hub);
  const reasons: string[] = [];

  if (!q.hasUniqueIntroduction) {
    reasons.push("Introduction too short (need 200+ characters)");
  }

  if (hub.tier === "A") {
    if (q.articleCount < 5) {
      reasons.push(`Only ${q.articleCount} articles (need 5+ for Tier A)`);
    }
    if (!q.hasFaq) {
      reasons.push("Missing FAQs (need 3+ for Tier A)");
    }
  }

  if (hub.tier === "B" && q.articleCount < 3) {
    reasons.push(`Only ${q.articleCount} articles (need 3+ for Tier B)`);
  }

  // Cannibalization is a warning, not a blocker — curated hubs
  // intentionally group closely related articles under one roof

  return { ready: reasons.length === 0, reasons };
}

export function getIndexableHubs(hubs: HubDefinition[]): HubDefinition[] {
  return hubs.filter((hub) => {
    if (hub.tier === "C") return false;
    const { ready } = isHubReadyForIndexing(hub);
    return ready;
  });
}
