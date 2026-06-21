import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getLodges } from "@/lib/lodges-data";
import { ForLodgesForm } from "@/components/ForLodgesForm";

export const metadata: Metadata = {
  title: `For Lodge Owners — Share Your Photos | ${SITE_NAME}`,
  description:
    "Lodge owners and managers: upload photos, your logo, and updated information to improve your free listing on Uganda's largest independent lodge guide.",
  alternates: { canonical: `${SITE_URL}/for-lodges/lodge` },
};

export default async function ForLodgesLodgePage() {
  const lodges = await getLodges();
  const lodgeOptions = lodges
    .map((l) => ({ slug: l.slug, name: l.name, region: l.region }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return <ForLodgesForm lodges={lodgeOptions} />;
}
