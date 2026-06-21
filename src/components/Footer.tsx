import Link from "next/link";
import { SITE_NAME, EMAIL_ENCODED, WHATSAPP_URL } from "@/lib/constants";
import { regions } from "@/lib/regions-data";
import { comparisonPages } from "@/lib/comparison-pages";
import { Logo } from "@/components/Logo";
import { ProtectedContact } from "@/components/ProtectedContact";

export function Footer() {
  const topRegions = [...regions].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 8);
  const topComparisons = comparisonPages.slice(0, 6);

  return (
    <footer className="bg-forest text-cream/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-cream mb-3">
              <Logo className="h-12" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Independent lodge information for Uganda. Helping travelers find the right accommodation for gorilla trekking, safaris and more.
            </p>
            <ProtectedContact value={EMAIL_ENCODED} type="email" className="text-gold hover:underline text-sm" />
          </div>

          {/* Regions */}
          <div>
            <h4 className="font-semibold text-cream text-sm mb-3">Regions</h4>
            <ul className="space-y-1.5">
              {topRegions.map((r) => (
                <li key={r.slug}>
                  <Link href={`/regions/${r.slug}`} className="text-sm hover:text-cream transition-colors">
                    {r.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/lodges#regions" className="text-gold hover:underline text-sm">
                  All regions
                </Link>
              </li>
            </ul>
          </div>

          {/* Best Of */}
          <div>
            <h4 className="font-semibold text-cream text-sm mb-3">Best Of</h4>
            <ul className="space-y-1.5">
              {topComparisons.map((p) => (
                <li key={p.slug}>
                  <Link href={`/lodges/best/${p.slug}`} className="text-sm hover:text-cream transition-colors">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-cream text-sm mb-3">Guides & Info</h4>
            <ul className="space-y-1.5">
              <li><Link href="/blog" className="text-sm hover:text-cream transition-colors">Travel Blog</Link></li>
              <li><Link href="/blog/uganda-safari-cost-guide" className="text-sm hover:text-cream transition-colors">Safari Cost Guide</Link></li>
              <li><Link href="/blog/bwindi-sectors-compared" className="text-sm hover:text-cream transition-colors">Bwindi Sectors Compared</Link></li>
              <li><Link href="/blog/is-uganda-safe-for-tourists" className="text-sm hover:text-cream transition-colors">Is Uganda Safe?</Link></li>
              <li><Link href="/about" className="text-sm hover:text-cream transition-colors">About</Link></li>
              <li><Link href="/legal-notice" className="text-sm hover:text-cream transition-colors">Legal Notice</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:text-cream transition-colors">Privacy Policy</Link></li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cream transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 text-center">
          <p className="text-xs text-cream/40">
            {SITE_NAME} is an independent lodge information platform. We are not the official website of the listed lodges unless clearly stated. Information may change and should be confirmed directly with the lodge or travel provider before booking.
          </p>
          <p className="text-xs text-cream/30 mt-3">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-cream/20 mt-2">
            A project by{" "}
            <a href="https://mistygorillaexpeditions.com" target="_blank" rel="noopener noreferrer" className="text-cream/30 hover:text-gold transition-colors">
              Misty Gorilla Expeditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
