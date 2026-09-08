import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/constants";
import { getTourOperators } from "@/lib/tour-operators-data";
import { OperatorCard } from "@/components/OperatorCard";
import { OperatorDirectoryPagination } from "@/components/OperatorDirectoryPagination";
import {
  OPERATORS_PER_PAGE,
  operatorPageCount,
  operatorsForPage,
} from "@/lib/operator-directory";

/**
 * Crawlbare Verzeichnis-Seiten /tour-operators/page/2 … /page/N.
 *
 * Seite 1 ist /tour-operators. Diese Seiten existieren, damit jede aktive
 * Operator-Detailseite ueber echte serverseitig gerenderte <a href>-Links
 * erreichbar ist — vorher waren 458 von 495 nur ueber die Sitemap auffindbar.
 * Sie stehen absichtlich nicht in der XML-Sitemap: die kanonischen
 * Detailseiten bleiben dort die indexierungsrelevanten URLs.
 */

async function resolvePage(n: string) {
  if (!/^[0-9]+$/.test(n)) notFound();
  const page = Number(n);
  const operators = await getTourOperators();
  const pageCount = operatorPageCount(operators.length);
  if (page < 2 || page > pageCount) notFound();
  return { page, pageCount, operators };
}

export async function generateStaticParams() {
  const operators = await getTourOperators();
  const pageCount = operatorPageCount(operators.length);
  return Array.from({ length: Math.max(0, pageCount - 1) }, (_, i) => ({
    n: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ n: string }>;
}): Promise<Metadata> {
  const { n } = await params;
  const operators = await getTourOperators();
  const pageCount = operatorPageCount(operators.length);
  const page = Number(n);
  if (!Number.isInteger(page) || page < 2 || page > pageCount) return {};

  const canonical = `${SITE_URL}/tour-operators/page/${page}`;
  const title = `Uganda Tour Operators — Page ${page} of ${pageCount}`;
  const description = `Page ${page} of the independent Uganda tour operator directory. ${operators.length} safari and tour operators listed alphabetically with location, specializations and trust score.`;

  return {
    title: { absolute: `${title} | Lodges of Uganda` },
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website" },
  };
}

export default async function TourOperatorDirectoryPage({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const { page, pageCount, operators } = await resolvePage(n);
  const pageOperators = operatorsForPage(operators, page);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Tour Operators", item: `${SITE_URL}/tour-operators` },
      {
        "@type": "ListItem",
        position: 3,
        name: `Page ${page}`,
        item: `${SITE_URL}/tour-operators/page/${page}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-forest py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-cream/60 text-sm mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span>/</span>
            <Link href="/tour-operators" className="hover:text-cream transition-colors">Tour Operators</Link>
            <span>/</span>
            <span className="text-cream">Page {page}</span>
          </nav>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl mb-3">
            Uganda Tour Operators — Page {page}
          </h1>
          <p className="text-cream/70 text-base max-w-2xl">
            Operators {(page - 1) * OPERATORS_PER_PAGE + 1}–
            {(page - 1) * OPERATORS_PER_PAGE + pageOperators.length} of{" "}
            {operators.length}, listed alphabetically. Every profile shows
            location, specializations and an independent trust score.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageOperators.map((op) => (
            <OperatorCard key={op.id} operator={op} />
          ))}
        </div>

        <OperatorDirectoryPagination
          currentPage={page}
          pageCount={pageCount}
          totalOperators={operators.length}
        />

        <p className="text-olive-dark/60 text-sm mt-10">
          Looking for something specific? Use the search and specialization filter on the{" "}
          <Link href="/tour-operators" className="text-gold hover:underline">
            tour operator directory
          </Link>{" "}
          — or compare <Link href="/lodges" className="text-gold hover:underline">lodges across Uganda</Link>.
        </p>
      </div>
    </>
  );
}
