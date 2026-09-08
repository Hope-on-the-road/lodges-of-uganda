import type { NextConfig } from "next";
import lodgeRedirects from "./src/lib/lodge-redirects.json";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eqlnmpmfhxdllkuetury.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "lodgesofuganda.com",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    // `target` setzen nur Legacy-Slugs, deren Lodge in der Datenbank neu
    // geslugt wurde — dort laesst sich das Ziel nicht aus dem Slug ableiten.
    const legacySlugRedirects = lodgeRedirects.map(
      (l: { slug: string; region: string; target?: string }) => ({
        source: `/${l.slug}`,
        destination: l.target ?? `/lodges/${l.region}/${l.slug}`,
        permanent: true,
      }),
    );

    // Duplicate-Merge: "bush-lodge" und "queen-elizabeth-bush-lodge" waren
    // zwei DB-Datensaetze fuer dieselbe reale Lodge (belegt ueber die
    // Betreiber-Website). "bush-lodge" ist auf status "inactive" gesetzt
    // (existiert also nicht mehr als generierte Seite); die alte kanonische
    // URL leitet direkt auf den verbliebenen Datensatz weiter.
    const duplicateLodgeMerges = [
      {
        source: "/lodges/queen-elizabeth/bush-lodge",
        destination: "/lodges/queen-elizabeth/queen-elizabeth-bush-lodge",
        permanent: true,
      },
    ];

    return [...legacySlugRedirects, ...duplicateLodgeMerges];
  },
};

export default nextConfig;
