/**
 * Normalisierung externer URLs aus der Datenbank.
 *
 * Manche Datensaetze enthalten die Website ohne Protokoll ("www.marasa.net",
 * "mysticadventuresug.com"). Als href gerendert behandelt der Browser das als
 * relativen Pfad — daraus wurden interne 404er wie /compare/www.marasa.net.
 */
export function normalizeExternalUrl(url: string | null | undefined): string {
  const raw = (url ?? "").trim();
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw)) return raw;
  // Protokoll-relative URLs ("//example.com")
  if (raw.startsWith("//")) return `https:${raw}`;
  // Alles ohne Schema, aber mit Host-Anmutung: https:// ergaenzen
  if (/^[a-z0-9.-]+\.[a-z]{2,}(\/|$|\?)/i.test(raw)) return `https://${raw}`;
  return "";
}
