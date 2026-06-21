"use client";

import { useState, useMemo } from "react";
import type { Lodge } from "@/lib/lodge-types";
import { regionsMap } from "@/lib/regions-data";

const EMAIL_TEMPLATE = (lodgeName: string, updateUrl: string, listingUrl: string) =>
  `Subject: Your lodge is listed on LodgesOfUganda.com — please verify your information

Dear ${lodgeName} Team,

We are building LodgesOfUganda.com, an independent lodge guide for Uganda. Your property is already listed on our platform:

${listingUrl}

We want to make sure your listing is accurate and complete. Could you please take a few minutes to review and update your information?

Update your listing here:
${updateUrl}

You can update:
- Contact details (email, phone, website, WhatsApp)
- Description of your lodge
- Room types and amenities
- Activities and dining
- What makes your lodge special

We would also love to feature your own photos. Please send high-resolution images to:
photos@lodgesofuganda.com

This is a free service — there is no cost to be listed or to update your information.

If you have any questions, simply reply to this email.

Best regards,
Lodges of Uganda Team
info@lodgesofuganda.com`;

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
        copied
          ? "bg-forest text-cream"
          : "bg-cream text-forest hover:bg-sand"
      }`}
    >
      {copied ? "Copied!" : label}
    </button>
  );
}

export function AdminDashboard({ lodges, siteUrl }: { lodges: Lodge[]; siteUrl: string }) {
  const [regionFilter, setRegionFilter] = useState("All");
  const [contentFilter, setContentFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedLodge, setSelectedLodge] = useState<Lodge | null>(null);

  const filtered = useMemo(() => {
    return lodges.filter((l) => {
      if (regionFilter !== "All" && l.region !== regionFilter) return false;
      if (contentFilter === "with-content" && !l.longDescription) return false;
      if (contentFilter === "no-content" && l.longDescription) return false;
      if (contentFilter === "has-website" && !l.officialWebsite) return false;
      if (contentFilter === "no-website" && l.officialWebsite) return false;
      if (search) {
        const q = search.toLowerCase();
        return l.name.toLowerCase().includes(q) || l.subregion.toLowerCase().includes(q);
      }
      return true;
    });
  }, [lodges, regionFilter, contentFilter, search]);

  const withContent = lodges.filter((l) => l.longDescription).length;
  const withWebsite = lodges.filter((l) => l.officialWebsite).length;
  const regions = [...new Set(lodges.map((l) => l.region))].sort();

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-forest py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-cream font-bold text-xl">Lodge Admin</h1>
          <p className="text-cream/60 text-sm mt-1">Manage {lodges.length} lodges</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-2xl font-bold text-forest">{lodges.length}</p>
            <p className="text-olive-dark/60 text-xs">Total Lodges</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-2xl font-bold text-gold">{withContent}</p>
            <p className="text-olive-dark/60 text-xs">With Content</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-2xl font-bold text-olive-dark">{lodges.length - withContent}</p>
            <p className="text-olive-dark/60 text-xs">Need Content</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <p className="text-2xl font-bold text-forest">{withWebsite}</p>
            <p className="text-olive-dark/60 text-xs">Have Website</p>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 bg-white rounded-lg border border-sand text-sm"
          />
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="px-3 py-2 bg-white rounded-lg border border-sand text-sm"
          >
            <option value="All">All Regions</option>
            {regions.map((r) => (
              <option key={r} value={r}>{regionsMap[r]?.name || r}</option>
            ))}
          </select>
          <select
            value={contentFilter}
            onChange={(e) => setContentFilter(e.target.value)}
            className="px-3 py-2 bg-white rounded-lg border border-sand text-sm"
          >
            <option value="All">All</option>
            <option value="with-content">With Content</option>
            <option value="no-content">Needs Content</option>
            <option value="has-website">Has Website</option>
            <option value="no-website">No Website</option>
          </select>
          <p className="text-olive-dark/60 text-sm self-center">{filtered.length} results</p>
        </div>

        <div className="flex gap-6">
          {/* Table */}
          <div className="flex-1 overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
              <thead>
                <tr className="bg-cream text-left">
                  <th className="px-3 py-2 font-medium text-forest">Lodge</th>
                  <th className="px-3 py-2 font-medium text-forest">Region</th>
                  <th className="px-3 py-2 font-medium text-forest">Price</th>
                  <th className="px-3 py-2 font-medium text-forest">Email</th>
                  <th className="px-3 py-2 font-medium text-forest">UTB</th>
                  <th className="px-3 py-2 font-medium text-forest">Content</th>
                  <th className="px-3 py-2 font-medium text-forest">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((l) => (
                  <tr key={l.id} className="border-t border-sand/30 hover:bg-cream/50">
                    <td className="px-3 py-2">
                      <button
                        onClick={() => setSelectedLodge(l)}
                        className="text-left hover:text-gold transition-colors"
                      >
                        <span className="font-medium">{l.name}</span>
                        <br />
                        <span className="text-olive-dark/50 text-xs">{l.subregion}</span>
                      </button>
                    </td>
                    <td className="px-3 py-2 text-olive-dark/70 text-xs">{regionsMap[l.region]?.name || l.region}</td>
                    <td className="px-3 py-2 text-gold font-bold">{l.priceLevel}</td>
                    <td className="px-3 py-2 text-olive-dark/50 text-xs max-w-[120px] truncate">{l.email || "-"}</td>
                    <td className="px-3 py-2 text-olive-dark/50 text-xs">{l.licenceNumber ? "✓" : "-"}</td>
                    <td className="px-3 py-2">
                      {l.longDescription ? (
                        <span className="text-forest text-xs">✓ Full</span>
                      ) : (
                        <span className="text-olive-dark/40 text-xs">Basic</span>
                      )}
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex gap-1">
                        <CopyButton
                          text={`${siteUrl}/update/${l.slug}`}
                          label="Link"
                        />
                        <CopyButton
                          text={EMAIL_TEMPLATE(
                            l.name,
                            `${siteUrl}/update/${l.slug}`,
                            `${siteUrl}/lodges/${l.region}/${l.slug}`
                          )}
                          label="Email"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detail Panel */}
          {selectedLodge && (
            <div className="w-96 shrink-0 bg-white rounded-lg shadow-sm p-5 sticky top-6 self-start max-h-[80vh] overflow-y-auto">
              <div className="flex items-start justify-between mb-4">
                <h2 className="font-bold text-forest text-lg">{selectedLodge.name}</h2>
                <button onClick={() => setSelectedLodge(null)} className="text-olive-dark/40 hover:text-forest">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <dl className="space-y-2 text-sm">
                <div><dt className="text-olive-dark/50 text-xs">Region</dt><dd>{regionsMap[selectedLodge.region]?.name}</dd></div>
                <div><dt className="text-olive-dark/50 text-xs">Subregion</dt><dd>{selectedLodge.subregion}</dd></div>
                <div><dt className="text-olive-dark/50 text-xs">Category</dt><dd>{selectedLodge.category} · {selectedLodge.priceLevel}</dd></div>
                {selectedLodge.email && (
                  <div><dt className="text-olive-dark/50 text-xs">Email</dt><dd className="break-all">{selectedLodge.email}</dd></div>
                )}
                {selectedLodge.phone && (
                  <div><dt className="text-olive-dark/50 text-xs">Phone</dt><dd>{selectedLodge.phone}</dd></div>
                )}
                {selectedLodge.officialWebsite && (
                  <div><dt className="text-olive-dark/50 text-xs">Website</dt><dd className="text-gold break-all">{selectedLodge.officialWebsite}</dd></div>
                )}
                {selectedLodge.licenceNumber && (
                  <div><dt className="text-olive-dark/50 text-xs">UTB Licence</dt><dd className="font-mono text-xs">{selectedLodge.licenceNumber}</dd></div>
                )}
                {selectedLodge.operatorGroup && (
                  <div><dt className="text-olive-dark/50 text-xs">Operator Group</dt><dd>{selectedLodge.operatorGroup}</dd></div>
                )}
                <div><dt className="text-olive-dark/50 text-xs">Content Status</dt><dd>{selectedLodge.longDescription ? "Full content" : "Basic entry only"}</dd></div>
                <div><dt className="text-olive-dark/50 text-xs">Verified</dt><dd>{selectedLodge.verifiedVisit}</dd></div>
                <div><dt className="text-olive-dark/50 text-xs">Outreach</dt><dd>{selectedLodge.outreachStatus}</dd></div>
              </dl>

              <div className="mt-4 pt-4 border-t border-sand/50 space-y-2">
                <p className="text-olive-dark/50 text-xs font-medium">Quick Links</p>
                <div className="space-y-1">
                  <a href={`${siteUrl}/lodges/${selectedLodge.region}/${selectedLodge.slug}`} target="_blank" className="block text-gold text-xs hover:underline">View listing →</a>
                  <a href={`${siteUrl}/update/${selectedLodge.slug}`} target="_blank" className="block text-gold text-xs hover:underline">Update form →</a>
                  {selectedLodge.officialWebsite && (
                    <a href={selectedLodge.officialWebsite} target="_blank" rel="noopener" className="block text-gold text-xs hover:underline">Official website →</a>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-sand/50">
                <p className="text-olive-dark/50 text-xs font-medium mb-2">Email Template</p>
                <CopyButton
                  text={EMAIL_TEMPLATE(
                    selectedLodge.name,
                    `${siteUrl}/update/${selectedLodge.slug}`,
                    `${siteUrl}/lodges/${selectedLodge.region}/${selectedLodge.slug}`
                  )}
                  label="Copy full email"
                />
              </div>
            </div>
          )}
        </div>

        {/* Bulk Export */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-5">
          <h2 className="font-bold text-forest text-lg mb-3">Bulk Export</h2>
          <p className="text-olive-dark/60 text-sm mb-4">Copy all update links as CSV for mail merge.</p>
          <CopyButton
            text={[
              "Lodge Name,Region,Category,Price,Email,Website,Licence Number,Licence Type,Licence Year,Operator Group,Outreach Status,Has Content,Update URL,Listing URL",
              ...filtered.map((l) =>
                `"${l.name}","${regionsMap[l.region]?.name || l.region}","${l.category}","${l.priceLevel}","${l.email || ""}","${l.officialWebsite || ""}","${l.licenceNumber || ""}","${l.licenceType || ""}","${l.licenceYear || ""}","${l.operatorGroup || ""}","${l.outreachStatus}","${l.longDescription ? "yes" : "no"}","${siteUrl}/update/${l.slug}","${siteUrl}/lodges/${l.region}/${l.slug}"`
              ),
            ].join("\n")}
            label="Copy CSV (all filtered)"
          />
        </div>
      </div>
    </div>
  );
}
