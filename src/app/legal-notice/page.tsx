import type { Metadata } from "next";
import { SITE_URL, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice and imprint for Lodges of Uganda.",
  alternates: { canonical: `${SITE_URL}/legal-notice` },
  robots: { index: false },
};

export default function LegalNoticePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-[family-name:var(--font-heading)] font-bold text-forest text-3xl mb-8">Legal Notice</h1>

      <div className="space-y-6 text-olive-dark/80 text-sm leading-relaxed">
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">Information according to § 5 TMG</h2>
          <p className="font-semibold">Misty Gorilla Expeditions Ltd</p>
          <p>Buhoma, Kanungu District</p>
          <p>Western Region, Uganda</p>
          <p className="mt-2 text-olive-dark/50 text-xs">Postal: P.O Box 120781, Wakiso, Uganda</p>
          <p className="mt-2">Managing Director: Duncan Tayebwa</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">Contact</h2>
          <p>Email: {EMAIL}</p>
          <p>WhatsApp: +256 763 463229</p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">Disclaimer</h2>
          <p>
            Lodges of Uganda is an independent lodge information platform. We are not the official website of the listed lodges unless clearly stated. Information may change and should be confirmed directly with the lodge or travel provider before booking.
          </p>
          <p className="mt-3">
            Despite careful content control, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">Copyright</h2>
          <p>
            The content and works created on these pages are subject to copyright law. Reproduction, editing, distribution and any kind of use beyond the limits of copyright law require the written consent of the respective author or creator.
          </p>
        </section>
      </div>
    </div>
  );
}
