import type { Metadata } from "next";
import { getLodges } from "@/lib/lodges-data";
import { regionsMap } from "@/lib/regions-data";
import { SITE_URL } from "@/lib/constants";
import { AdminDashboard } from "@/components/AdminDashboard";

export const metadata: Metadata = {
  title: "Admin — Lodge Management",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const lodges = await getLodges();
  return <AdminDashboard lodges={lodges} siteUrl={SITE_URL} />;
}
