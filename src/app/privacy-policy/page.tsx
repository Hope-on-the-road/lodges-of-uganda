import type { Metadata } from "next";
import { SITE_URL, EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Lodges of Uganda.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-[family-name:var(--font-heading)] font-bold text-forest text-3xl mb-8">Privacy Policy</h1>

      <div className="space-y-6 text-olive-dark/80 text-sm leading-relaxed">
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">Overview</h2>
          <p>
            This website does not collect personal data through forms or user accounts. We do not use cookies for tracking or advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">Hosting</h2>
          <p>
            This website is hosted by a third-party provider. The hosting provider may collect technical data such as IP addresses, browser type, and access times in server log files. This data is used for technical operation and security purposes only.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">External Links</h2>
          <p>
            This website contains links to external websites, including lodge websites and WhatsApp. When you click these links, you leave our website and are subject to the privacy policies of the respective external services.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">Google Fonts</h2>
          <p>
            This website uses Google Fonts, which are loaded from Google servers. This may result in your IP address being transmitted to Google. For more information, see Google&apos;s privacy policy.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-xl mb-3">Contact</h2>
          <p>
            If you have questions about this privacy policy, please contact us at {EMAIL}.
          </p>
        </section>
      </div>
    </div>
  );
}
