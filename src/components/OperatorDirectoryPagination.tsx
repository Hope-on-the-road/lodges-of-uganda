import Link from "next/link";
import { operatorPagePath } from "@/lib/operator-directory";

/**
 * Serverseitig gerenderte Verzeichnis-Navigation mit echten <a href>-Links.
 * Jede Seite verlinkt alle anderen Seiten — Crawl-Tiefe bleibt damit bei 2,
 * unabhaengig davon wie viele Operatoren dazukommen.
 */
export function OperatorDirectoryPagination({
  currentPage,
  pageCount,
  totalOperators,
}: {
  currentPage: number;
  pageCount: number;
  totalOperators: number;
}) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Tour operator directory pages"
      className="mt-12 pt-8 border-t border-sand/60"
    >
      <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-1">
        Browse the full directory
      </h2>
      <p className="text-olive-dark/60 text-sm mb-5">
        All {totalOperators} operators, listed alphabetically across {pageCount} pages.
      </p>
      <ul className="flex flex-wrap items-center gap-2">
        {currentPage > 1 && (
          <li>
            <Link
              href={operatorPagePath(currentPage - 1)}
              rel="prev"
              className="inline-flex items-center px-3 py-2 bg-white text-forest text-sm font-medium rounded-lg border border-sand hover:border-gold transition-colors"
            >
              ← Previous
            </Link>
          </li>
        )}
        {pages.map((p) =>
          p === currentPage ? (
            <li key={p}>
              <span
                aria-current="page"
                className="inline-flex items-center justify-center min-w-10 px-3 py-2 bg-forest text-cream text-sm font-semibold rounded-lg"
              >
                {p}
              </span>
            </li>
          ) : (
            <li key={p}>
              <Link
                href={operatorPagePath(p)}
                className="inline-flex items-center justify-center min-w-10 px-3 py-2 bg-white text-forest text-sm font-medium rounded-lg border border-sand hover:border-gold transition-colors"
              >
                {p}
              </Link>
            </li>
          ),
        )}
        {currentPage < pageCount && (
          <li>
            <Link
              href={operatorPagePath(currentPage + 1)}
              rel="next"
              className="inline-flex items-center px-3 py-2 bg-white text-forest text-sm font-medium rounded-lg border border-sand hover:border-gold transition-colors"
            >
              Next →
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
