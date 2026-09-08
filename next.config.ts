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
    return lodgeRedirects.map(
      (l: { slug: string; region: string; target?: string }) => ({
        source: `/${l.slug}`,
        destination: l.target ?? `/lodges/${l.region}/${l.slug}`,
        permanent: true,
      }),
    );
  },
};

export default nextConfig;
