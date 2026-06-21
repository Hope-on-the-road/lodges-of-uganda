import { Suspense } from "react";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { getTourOperators } from "@/lib/tour-operators-data";
import { AddOperatorForm } from "@/components/AddOperatorForm";

export const metadata: Metadata = {
  title: "Add Your Tour Company — Free Listing",
  description:
    "Get your safari or tour company listed in Uganda's independent tour operator directory. Completely free — no fees, no commissions.",
  alternates: { canonical: `${SITE_URL}/for-lodges/tour-operator` },
  robots: { index: false, follow: true },
};

export default async function AddOperatorPage() {
  const tourOperators = await getTourOperators();
  const operators = tourOperators
    .map((o) => ({ slug: o.slug, name: o.name }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Suspense>
      <AddOperatorForm operators={operators} />
    </Suspense>
  );
}
