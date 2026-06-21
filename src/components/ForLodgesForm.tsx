"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { submitChanges } from "@/lib/supabase";

type LodgeOption = { slug: string; name: string; region: string };

type UploadedFile = { name: string; url: string; size: number };

const inputClass =
  "w-full px-3 py-2.5 bg-white rounded-lg border border-sand text-sm text-forest focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder:text-olive-dark/30";

function PhotoUploader({
  label,
  hint,
  accept,
  multiple,
  files,
  onUpload,
  maxFiles,
}: {
  label: string;
  hint: string;
  accept: string;
  multiple: boolean;
  files: UploadedFile[];
  onUpload: (file: UploadedFile) => void;
  maxFiles: number;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFiles(fileList: FileList | null) {
    if (!fileList) return;
    setError("");
    setUploading(true);

    for (let i = 0; i < fileList.length; i++) {
      if (files.length + i >= maxFiles) {
        setError(`Maximum ${maxFiles} files allowed.`);
        break;
      }
      const file = fileList[i];

      if (!file.type.startsWith("image/")) {
        setError(`${file.name} is not an image file.`);
        continue;
      }
      if (file.size > 10 * 1024 * 1024) {
        setError(`${file.name} is too large (max 10 MB).`);
        continue;
      }

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "lodge_updates");
        formData.append("folder", "lodge-updates/for-lodges");

        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

        if (!cloudName) {
          onUpload({
            name: file.name,
            url: `[uploaded: ${file.name}]`,
            size: file.size,
          });
          continue;
        }

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          { method: "POST", body: formData },
        );

        if (!res.ok) throw new Error("Upload failed");

        const result = await res.json();
        onUpload({ name: file.name, url: result.secure_url, size: file.size });
      } catch {
        setError(`Failed to upload ${file.name}. Please try again.`);
      }
    }

    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div>
      <p className="block text-forest font-medium text-sm mb-1">{label}</p>
      <p className="text-olive-dark/50 text-xs mb-2">{hint}</p>
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${uploading ? "border-gold bg-gold/5" : "border-sand hover:border-gold/50"}`}
      >
        {uploading ? (
          <p className="text-gold text-sm font-medium">Uploading...</p>
        ) : (
          <>
            <svg
              className="w-10 h-10 text-olive-dark/30 mx-auto mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-olive-dark/60 text-sm mb-1">
              Drag files here or click to select
            </p>
            <p className="text-olive-dark/40 text-xs">
              JPG, PNG, WEBP -- max 10 MB per file
            </p>
            <input
              ref={inputRef}
              type="file"
              accept={accept}
              multiple={multiple}
              onChange={(e) => handleFiles(e.target.files)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </>
        )}
      </div>

      {error && <p className="text-red-600 text-xs mt-2">{error}</p>}

      {files.length > 0 && (
        <div className="mt-3 space-y-1.5">
          {files.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-forest/5 rounded-lg px-3 py-2"
            >
              <svg
                className="w-4 h-4 text-forest shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-forest text-xs font-medium truncate flex-1">
                {f.name}
              </span>
              <span className="text-olive-dark/40 text-xs">
                {(f.size / 1024 / 1024).toFixed(1)} MB
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ForLodgesForm({ lodges }: { lodges: LodgeOption[] }) {
  const [selectedSlug, setSelectedSlug] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactRole, setContactRole] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState<UploadedFile[]>([]);
  const [logo, setLogo] = useState<UploadedFile[]>([]);
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const selectedLodge = lodges.find((l) => l.slug === selectedSlug);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedSlug || !contactName || !contactEmail) return;
    setStatus("sending");

    const entityId = `lodge_${selectedSlug}`;
    const entityName = selectedLodge?.name || selectedSlug;
    const source = "https://lodgesofuganda.com/for-lodges/lodge";

    const fields: { field: string; value: string; type?: "new_field" | "updated_field" | "new_image" | "new_entity" }[] = [];

    fields.push({ field: "contact_person", value: contactName, type: "new_field" });
    fields.push({ field: "contact_email", value: contactEmail, type: "new_field" });
    if (contactRole) fields.push({ field: "contact_role", value: contactRole, type: "new_field" });
    if (description) fields.push({ field: "description", value: description, type: "new_field" });

    for (const photo of photos) {
      fields.push({ field: "gallery_image", value: photo.url, type: "new_image" });
    }
    if (logo.length > 0) {
      fields.push({ field: "logo_url", value: logo[0].url, type: "new_image" });
    }

    try {
      const result = await submitChanges("lodge", entityId, entityName, source, fields);
      setStatus(result.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <>
        <section className="bg-forest py-12">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl">
              Thank You!
            </h1>
          </div>
        </section>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-forest/5 rounded-xl p-8">
            <svg
              className="w-16 h-16 text-forest mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-3">
              Thank you! Your submission is being reviewed.
            </h2>
            <p className="text-olive-dark/80 text-sm mb-2">
              We received{" "}
              <strong>
                {photos.length} photo{photos.length !== 1 ? "s" : ""}
                {logo.length > 0 ? " and your logo" : ""}
              </strong>{" "}
              for <strong>{selectedLodge?.name}</strong>.
            </p>
            <p className="text-olive-dark/60 text-xs mb-6">
              We will contact you at the email you provided if we have questions.
            </p>
            {selectedLodge && (
              <Link
                href={`/lodges/${selectedLodge.region}/${selectedLodge.slug}`}
                className="inline-flex items-center px-5 py-2.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
              >
                View your listing
              </Link>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="bg-forest py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav
            className="flex items-center justify-center gap-2 text-cream/60 text-sm mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-cream transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/for-lodges" className="hover:text-cream transition-colors">
              For Partners
            </Link>
            <span>/</span>
            <span className="text-cream">Lodge</span>
          </nav>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Show Travellers Your Lodge
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto mb-3">
            Your lodge is already listed on Lodges of Uganda -- now make it stand
            out with your own photos and logo.
          </p>
          <p className="text-cream/60 text-sm">
            Free. No account needed. Takes 2 minutes.
          </p>
        </div>
      </section>

      <section className="bg-sand/30 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-sm mb-1">
                Photos Get Bookings
              </h3>
              <p className="text-olive-dark/60 text-xs leading-relaxed">
                Lodges with photos receive 5x more clicks than those without.
                Show travellers what makes your place special.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-sm mb-1">
                Your Logo, Your Brand
              </h3>
              <p className="text-olive-dark/60 text-xs leading-relaxed">
                Upload your logo and it appears on your listing card -- instant
                recognition for travellers browsing our guide.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-sm mb-1">
                100% Free
              </h3>
              <p className="text-olive-dark/60 text-xs leading-relaxed">
                No fees, no commissions, no account. We are an independent guide
                -- your listing is free forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          <fieldset className="space-y-4">
            <legend className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg">
              1. Select Your Lodge
            </legend>
            <select
              value={selectedSlug}
              onChange={(e) => setSelectedSlug(e.target.value)}
              required
              className={inputClass}
            >
              <option value="">-- Choose your lodge --</option>
              {lodges.map((l) => (
                <option key={l.slug} value={l.slug}>
                  {l.name}
                </option>
              ))}
            </select>
            {selectedLodge && (
              <p className="text-olive-dark/50 text-xs">
                Current listing:{" "}
                <Link
                  href={`/lodges/${selectedLodge.region}/${selectedLodge.slug}`}
                  className="text-gold hover:underline"
                  target="_blank"
                >
                  View on Lodges of Uganda
                </Link>
              </p>
            )}
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg">
              2. Your Contact Details
            </legend>
            <p className="text-olive-dark/60 text-xs">
              So we can verify the submission. Not published.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-forest font-medium text-sm mb-1">
                  Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                  className={inputClass}
                  placeholder="e.g. John Doe"
                />
              </div>
              <div>
                <label className="block text-forest font-medium text-sm mb-1">
                  Email <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                  className={inputClass}
                  placeholder="e.g. john@lodge.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-forest font-medium text-sm mb-1">
                Your Role
              </label>
              <input
                type="text"
                value={contactRole}
                onChange={(e) => setContactRole(e.target.value)}
                className={inputClass}
                placeholder="e.g. Owner, General Manager, Marketing"
              />
            </div>
          </fieldset>

          <fieldset className="space-y-6">
            <legend className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg">
              3. Upload Photos & Logo
            </legend>
            <p className="text-olive-dark/60 text-xs">
              This is the most important part. Good photos make all the
              difference for travellers choosing where to stay.
            </p>

            <PhotoUploader
              label="Lodge Photos"
              hint="Rooms, exterior, views, restaurant, pool, activities -- show what makes your lodge special. Up to 20 photos."
              accept="image/*"
              multiple
              files={photos}
              onUpload={(f) => setPhotos((prev) => [...prev, f])}
              maxFiles={20}
            />

            <PhotoUploader
              label="Lodge Logo"
              hint="Your logo will appear on your listing card. PNG with transparent background preferred."
              accept="image/png,image/svg+xml,image/jpeg,image/webp"
              multiple={false}
              files={logo}
              onUpload={(f) => setLogo([f])}
              maxFiles={1}
            />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg">
              4. Description{" "}
              <span className="text-olive-dark/40 font-normal text-sm">
                (optional)
              </span>
            </legend>
            <p className="text-olive-dark/60 text-xs">
              We already have basic information from your website. Add anything
              you want to highlight or correct.
            </p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`${inputClass} min-h-[120px] resize-y`}
              placeholder="e.g. We recently renovated all rooms, added a swimming pool, our restaurant now offers vegetarian options..."
            />
          </fieldset>

          <div className="pt-4 border-t border-sand/50">
            {status === "error" && (
              <div className="bg-red-50 text-red-700 rounded-lg p-3 text-sm mb-4">
                Something went wrong. Please try again or email us directly at
                info@lodgesofuganda.com.
              </div>
            )}
            <button
              type="submit"
              disabled={status === "sending" || !selectedSlug}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm disabled:opacity-50"
            >
              {status === "sending"
                ? "Submitting..."
                : `Submit${photos.length > 0 ? ` ${photos.length} Photo${photos.length !== 1 ? "s" : ""}` : ""}${logo.length > 0 ? " + Logo" : ""}`}
            </button>
            <p className="text-olive-dark/50 text-xs mt-3">
              By uploading you confirm you own the rights to these images and
              grant Lodges of Uganda permission to display them.
            </p>
          </div>
        </form>

        <div className="mt-10 bg-sand/30 rounded-xl p-6 text-center">
          <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-sm mb-2">
            Need to update more details?
          </h3>
          <p className="text-olive-dark/60 text-xs mb-3">
            Each lodge has a detailed update form for rooms, amenities,
            activities, and more.
          </p>
          {selectedLodge ? (
            <Link
              href={`/update/${selectedLodge.slug}`}
              className="text-gold hover:underline text-sm font-medium"
            >
              Go to full update form for {selectedLodge.name}
            </Link>
          ) : (
            <p className="text-olive-dark/40 text-xs">
              Select your lodge above to see its detailed update form.
            </p>
          )}
        </div>

        <div className="mt-6 bg-cream/50 rounded-xl p-5 border border-sand/50">
          <p className="text-olive-dark/50 text-xs leading-relaxed text-center">
            Lodges of Uganda is an independent information platform. Submitting
            photos does not create a contractual relationship. All listings are
            free -- we never charge for being listed or for uploading content.
          </p>
        </div>
      </div>
    </>
  );
}
