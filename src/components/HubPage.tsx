"use client";

import { useState } from "react";
import Link from "next/link";
import type { HubDefinition, HubSectionConfig, Article } from "@/data/taxonomy/types";
import type { Lodge } from "@/lib/lodge-types";
import { categoriesMap } from "@/data/taxonomy/categories";
import { WHATSAPP_URL } from "@/lib/constants";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-forest text-sm sm:text-base pr-4">{question}</span>
        <svg
          className={`w-5 h-5 shrink-0 text-gold transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-sm text-olive-dark/80 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

function ArticleCard({ article }: { article: Article & { featured?: boolean } }) {
  const cat = categoriesMap[article.primaryCategory];
  return (
    <Link
      href={`/${article.slug}`}
      className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-sm sm:text-base group-hover:text-gold transition-colors leading-tight">
          {article.slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
        </h3>
      </div>
      {cat && (
        <span className="inline-block px-2 py-0.5 bg-cream text-forest/70 text-xs rounded-full mb-2">
          {cat.label}
        </span>
      )}
      <div className="flex flex-wrap gap-1.5 mt-1">
        <span className="px-2 py-0.5 bg-gold/10 text-gold text-xs rounded-full">
          {article.primaryEntity.label}
        </span>
        {article.entities.slice(0, 3).map((e) => (
          <span key={e.id} className="px-2 py-0.5 bg-sand/50 text-olive-dark/60 text-xs rounded-full">
            {e.label}
          </span>
        ))}
      </div>
    </Link>
  );
}

function LodgeCard({ lodge }: { lodge: Lodge }) {
  return (
    <Link
      href={`/lodges/${lodge.region}/${lodge.slug}`}
      className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group"
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-sm sm:text-base group-hover:text-gold transition-colors leading-tight">
          {lodge.name}
        </h3>
        <span className="text-gold font-bold text-sm shrink-0">{lodge.priceLevel}</span>
      </div>
      <p className="text-olive-dark/60 text-xs mb-2">
        {lodge.subregion} &middot; {lodge.category}
      </p>
      <p className="text-olive-dark/80 text-sm leading-relaxed line-clamp-2">
        {lodge.shortDescription || "Information currently limited."}
      </p>
      {lodge.highlights.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {lodge.highlights.slice(0, 3).map((h) => (
            <span key={h} className="px-2 py-0.5 bg-cream text-forest text-xs rounded-full">{h}</span>
          ))}
        </div>
      )}
    </Link>
  );
}

interface HubPageProps {
  hub: HubDefinition;
  articles: Article[];
  featuredArticles: Article[];
  lodges: Lodge[];
  relatedEntities: { id: string; label: string; slug: string; count: number }[];
  relatedHubs: { slug: string; title: string; type: string }[];
}

export function HubPage({
  hub,
  articles,
  featuredArticles,
  lodges,
  relatedEntities,
  relatedHubs,
}: HubPageProps) {
  const [showAllArticles, setShowAllArticles] = useState(false);
  const displayedArticles = showAllArticles ? articles : articles.slice(0, 12);

  const breadcrumbLabel = hub.type === "category"
    ? "Guides"
    : hub.entityRef?.label || hub.title;

  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-cream/60 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span>/</span>
            <span className="text-cream">{breadcrumbLabel}</span>
          </nav>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            {hub.title}
          </h1>
          <p className="text-cream/70 text-lg max-w-3xl">
            {hub.seoDescription}
          </p>
          <p className="text-cream/40 text-sm mt-4">
            {articles.length} articles{lodges.length > 0 ? ` · ${lodges.length} lodges` : ""} · Independent guide · Updated 2026
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {hub.sections.map((section, idx) => (
          <HubSection
            key={`${section.type}-${idx}`}
            config={section}
            hub={hub}
            articles={articles}
            featuredArticles={featuredArticles}
            lodges={lodges}
            relatedEntities={relatedEntities}
            relatedHubs={relatedHubs}
            showAllArticles={showAllArticles}
            displayedArticles={displayedArticles}
            onShowAll={() => setShowAllArticles(true)}
          />
        ))}

        {/* Disclaimer */}
        <section className="bg-sand/30 rounded-xl p-6 mt-8">
          <p className="text-olive-dark/50 text-xs leading-relaxed text-center">
            Lodges of Uganda is an independent information platform. Prices change by season and availability.
            Contact lodges or tour operators directly for current rates.
          </p>
        </section>
      </div>
    </>
  );
}

function HubSection({
  config,
  hub,
  articles,
  featuredArticles,
  lodges,
  relatedEntities,
  relatedHubs,
  showAllArticles,
  displayedArticles,
  onShowAll,
}: {
  config: HubSectionConfig;
  hub: HubDefinition;
  articles: Article[];
  featuredArticles: Article[];
  lodges: Lodge[];
  relatedEntities: { id: string; label: string; slug: string; count: number }[];
  relatedHubs: { slug: string; title: string; type: string }[];
  showAllArticles: boolean;
  displayedArticles: Article[];
  onShowAll: () => void;
}) {
  switch (config.type) {
    case "featured-articles":
      if (featuredArticles.length === 0) return null;
      return (
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-2">
            {config.title || "Featured"}
          </h2>
          <p className="text-olive-dark/60 text-sm mb-6">
            Curated guides with the most detailed information.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      );

    case "all-articles":
      if (articles.length === 0) return null;
      return (
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-1">
                {config.title || "All Articles"}
              </h2>
              <p className="text-olive-dark/60 text-sm">{articles.length} articles</p>
            </div>
            {!showAllArticles && articles.length > 12 && (
              <button onClick={onShowAll} className="text-gold hover:underline text-sm font-medium">
                Show all {articles.length}
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
          {!showAllArticles && articles.length > 12 && (
            <div className="text-center mt-8">
              <button
                onClick={onShowAll}
                className="inline-flex items-center px-6 py-3 bg-forest text-cream font-semibold rounded-lg hover:bg-olive-dark transition-colors text-sm"
              >
                Show all {articles.length} articles
              </button>
            </div>
          )}
        </section>
      );

    case "lodges":
      if (lodges.length === 0) return null;
      return (
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-2">
            {config.title || "Lodges"}
          </h2>
          <p className="text-olive-dark/60 text-sm mb-6">
            {lodges.length} verified lodges in this area.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lodges.slice(0, config.limit || 12).map((l) => (
              <LodgeCard key={l.id} lodge={l} />
            ))}
          </div>
          {lodges.length > (config.limit || 12) && (
            <div className="text-center mt-6">
              <Link
                href="/lodges"
                className="text-gold hover:underline text-sm font-medium"
              >
                View all {lodges.length} lodges →
              </Link>
            </div>
          )}
        </section>
      );

    case "related-entities":
      if (relatedEntities.length === 0) return null;
      return (
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-4">
            {config.title || "Related Topics"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {relatedEntities.slice(0, config.limit || 8).map((e) => (
              <Link
                key={e.id}
                href={`/${e.slug}`}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm text-forest font-medium"
              >
                {e.label}
                <span className="text-olive-dark/40 text-xs ml-1">({e.count})</span>
              </Link>
            ))}
          </div>
        </section>
      );

    case "related-categories": {
      const selectedSlugs = hub.relatedCategorySlugs;
      const cats = selectedSlugs
        ? selectedSlugs.map((s) => categoriesMap[s]).filter(Boolean)
        : Object.values(categoriesMap)
            .filter((c) => c.id !== hub.categoryId)
            .slice(0, 4);
      if (cats.length === 0) return null;
      return (
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-4">
            {config.title || "Browse by Category"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {cats.map((c) => (
              <Link
                key={c.id}
                href={`/${c.slug}`}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-sm text-forest font-medium">{c.label}</span>
                <p className="text-olive-dark/50 text-xs mt-1 line-clamp-2">{c.description}</p>
              </Link>
            ))}
          </div>
        </section>
      );
    }

    case "related-hubs":
      if (relatedHubs.length === 0) return null;
      return (
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-4">
            {config.title || "Explore More"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {relatedHubs.slice(0, config.limit || 6).map((h) => (
              <Link
                key={h.slug}
                href={`/${h.slug}`}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm text-forest font-medium"
              >
                {h.title}
              </Link>
            ))}
          </div>
        </section>
      );

    case "faqs":
      if (hub.faqs.length === 0) return null;
      return (
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {hub.faqs.map((f) => (
              <FAQItem key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </section>
      );

    case "cta":
      return (
        <section className="bg-forest rounded-xl p-8 text-cream text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-3">
            Need help planning your trip?
          </h2>
          <p className="text-cream/70 text-sm mb-6 max-w-xl mx-auto">
            Tell us your travel dates, budget and interests. We can help you compare options
            and connect with trusted local operators.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask on WhatsApp
          </a>
        </section>
      );

    case "activities":
    case "wildlife":
    case "planning":
      return null;

    default:
      return null;
  }
}
