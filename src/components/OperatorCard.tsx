import Link from "next/link";
import type { TourOperator } from "@/lib/tour-operator-types";
import { calculateTrustScore } from "@/lib/tour-operator-types";

/**
 * Operator-Karte. Bewusst ohne "use client" — so rendert sie in
 * Server-Komponenten (Verzeichnis-Seiten) direkt zu HTML und wird in
 * Client-Komponenten (interaktive Uebersicht) mitgebundelt.
 */
export function OperatorCard({ operator }: { operator: TourOperator }) {
  const trustScore = calculateTrustScore(operator.trustIndicators);

  return (
    <Link
      href={`/tour-operators/${operator.slug}`}
      className="block bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group"
    >
      <div className="relative bg-white h-40 flex items-center justify-center p-4">
        {operator.logo ? (
          <img src={operator.logo} alt={`${operator.name} logo`} className="max-h-28 max-w-full object-contain" />
        ) : (
          <div className="text-center px-4">
            <svg className="w-10 h-10 text-forest/20 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-forest/30 text-[10px] font-medium tracking-wider uppercase">{operator.name}</span>
          </div>
        )}
        {/* Trust Score Badge */}
        <span className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm font-bold text-xs rounded-full shadow-sm">
          <span className="text-forest">{trustScore}</span>
          <span className="text-olive-dark/40">/100</span>
        </span>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-base group-hover:text-gold transition-colors leading-tight mb-1">
          {operator.name}
        </h3>
        <p className="text-olive-dark/50 text-xs mb-2.5">
          {operator.location}
        </p>
        <p className="text-olive-dark/70 text-sm leading-relaxed line-clamp-2">
          {operator.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {operator.specializations.slice(0, 3).map((s) => (
            <span key={s} className="px-2 py-0.5 bg-forest/5 text-forest/70 text-[11px] font-medium rounded-full">
              {s}
            </span>
          ))}
          {operator.specializations.length > 3 && (
            <span className="px-2 py-0.5 bg-sand/50 text-olive-dark/40 text-[11px] font-medium rounded-full">
              +{operator.specializations.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
