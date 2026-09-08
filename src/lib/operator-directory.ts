/**
 * Verzeichnis-Pagination fuer Tour Operators.
 *
 * Hintergrund: Die Uebersicht /tour-operators rendert serverseitig nur die
 * erste Seite; alles weitere lief ueber einen React-State ("Show More").
 * Dadurch waren 458 von 495 Operator-Seiten ohne einen einzigen internen
 * <a href> erreichbar. Diese Helfer definieren die crawlbaren Seiten
 * /tour-operators (Seite 1) und /tour-operators/page/2 … /page/N.
 */

export const OPERATORS_PER_PAGE = 36;

export function operatorPageCount(total: number): number {
  return Math.max(1, Math.ceil(total / OPERATORS_PER_PAGE));
}

/** 1-basiert. Seite 1 entspricht /tour-operators. */
export function operatorsForPage<T>(operators: T[], page: number): T[] {
  const start = (page - 1) * OPERATORS_PER_PAGE;
  return operators.slice(start, start + OPERATORS_PER_PAGE);
}

export function operatorPagePath(page: number): string {
  return page <= 1 ? "/tour-operators" : `/tour-operators/page/${page}`;
}
