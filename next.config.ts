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
    ],
  },
  async redirects() {
    return lodgeRedirects.map((l: { slug: string; region: string }) => ({
      source: `/${l.slug}`,
      destination: `/lodges/${l.region}/${l.slug}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
