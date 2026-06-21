import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLodges, getLodgesMap } from "@/lib/lodges-data";
import { UpdateListingForm } from "@/components/UpdateListingForm";
import { SITE_URL } from "@/lib/constants";

export async function generateStaticParams() {
  const lodges = await getLodges();
  return lodges.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lodge = (await getLodgesMap())[slug];
  if (!lodge) return {};

  return {
    title: `Update Listing: ${lodge.name}`,
    description: `Update the listing information for ${lodge.name} on Lodges of Uganda.`,
    robots: { index: false, follow: false },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lodge = (await getLodgesMap())[slug];
  if (!lodge) notFound();

  return <UpdateListingForm lodge={lodge} />;
}
