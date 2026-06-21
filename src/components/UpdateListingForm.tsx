"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import type { Lodge } from "@/lib/lodge-types";

type FormData = {
  contactName: string;
  contactEmail: string;
  contactRole: string;
  lodgePhone: string;
  lodgeWhatsApp: string;
  lodgeWebsite: string;
  lodgeEmail: string;
  description: string;
  roomInfo: string;
  amenities: string;
  activities: string;
  dining: string;
  specialFeatures: string;
  sustainability: string;
  message: string;
};

const INITIAL: FormData = {
  contactName: "",
  contactEmail: "",
  contactRole: "",
  lodgePhone: "",
  lodgeWhatsApp: "",
  lodgeWebsite: "",
  lodgeEmail: "",
  description: "",
  roomInfo: "",
  amenities: "",
  activities: "",
  dining: "",
  specialFeatures: "",
  sustainability: "",
  message: "",
};

type UploadedFile = {
  name: string;
  url: string;
  size: number;
};

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-forest font-medium text-sm mb-1">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      {hint && <p className="text-olive-dark/50 text-xs mb-1.5">{hint}</p>}
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-3 py-2.5 bg-white rounded-lg border border-sand text-sm text-forest focus:outline-none focus:ring-2 focus:ring-gold/50 placeholder:text-olive-dark/30";
const textareaClass = `${inputClass} min-h-[100px] resize-y`;

function PhotoUploader({
  lodgeSlug,
  onUpload,
  files,
}: {
  lodgeSlug: string;
  onUpload: (file: UploadedFile) => void;
  files: UploadedFile[];
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFiles(fileList: FileList | null) {
    if (!fileList) return;
    setError("");
    setUploading(true);

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];

      // Validate
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
        formData.append("folder", `lodge-updates/${lodgeSlug}`);

        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

        if (!cloudName) {
          // Fallback: encode as data URL for the email
          const reader = new FileReader();
          const dataUrl = await new Promise<string>((resolve) => {
            reader.onload = () => resolve(reader.result as string);
            reader.readAsDataURL(file);
          });
          onUpload({
            name: file.name,
            url: dataUrl.slice(0, 100) + "...[base64]",
            size: file.size,
          });
          continue;
        }

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          { method: "POST", body: formData }
        );

        if (!res.ok) throw new Error("Upload failed");

        const result = await res.json();
        onUpload({
          name: file.name,
          url: result.secure_url,
          size: file.size,
        });
      } catch {
        setError(`Failed to upload ${file.name}. Please try again.`);
      }
    }

    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div>
      <div
        className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
          uploading ? "border-gold bg-gold/5" : "border-sand hover:border-gold/50"
        }`}
      >
        {uploading ? (
          <p className="text-gold text-sm font-medium">Uploading...</p>
        ) : (
          <>
            <svg className="w-10 h-10 text-olive-dark/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-olive-dark/60 text-sm mb-2">
              Drag photos here or click to select
            </p>
            <p className="text-olive-dark/40 text-xs">
              JPG, PNG, WEBP — max 10 MB per file — up to 20 photos
            </p>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleFiles(e.target.files)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              style={{ position: "absolute" }}
            />
          </>
        )}
      </div>

      {error && <p className="text-red-600 text-xs mt-2">{error}</p>}

      {/* Uploaded files list */}
      {files.length > 0 && (
        <div className="mt-3 space-y-1.5">
          {files.map((f, i) => (
            <div key={i} className="flex items-center gap-2 bg-forest/5 rounded-lg px-3 py-2">
              <svg className="w-4 h-4 text-forest shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-forest text-xs font-medium truncate flex-1">{f.name}</span>
              <span className="text-olive-dark/40 text-xs">{(f.size / 1024 / 1024).toFixed(1)} MB</span>
            </div>
          ))}
          <p className="text-olive-dark/40 text-xs">{files.length} photo{files.length !== 1 ? "s" : ""} uploaded</p>
        </div>
      )}
    </div>
  );
}

export function UpdateListingForm({ lodge }: { lodge: Lodge }) {
  const [form, setForm] = useState<FormData>({
    ...INITIAL,
    lodgeWebsite: lodge.officialWebsite || "",
  });
  const [photos, setPhotos] = useState<UploadedFile[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const photoList = photos.length > 0
      ? photos.map((p, i) => `Photo ${i + 1}: ${p.url}`).join("\n")
      : "(no photos uploaded)";

    const message = [
      `Lodge: ${lodge.name}`,
      `Slug: ${lodge.slug}`,
      `Region: ${lodge.region}`,
      ``,
      `--- CONTACT (not published) ---`,
      `Name: ${form.contactName}`,
      `Email: ${form.contactEmail}`,
      `Role: ${form.contactRole || "-"}`,
      ``,
      `--- LODGE CONTACT ---`,
      `Email: ${form.lodgeEmail || "-"}`,
      `Website: ${form.lodgeWebsite || "-"}`,
      `Phone: ${form.lodgePhone || "-"}`,
      `WhatsApp: ${form.lodgeWhatsApp || "-"}`,
      ``,
      `--- DESCRIPTION ---`,
      form.description || "(not provided)",
      ``,
      `--- ROOMS ---`,
      form.roomInfo || "(not provided)",
      ``,
      `--- AMENITIES ---`,
      form.amenities || "(not provided)",
      ``,
      `--- ACTIVITIES ---`,
      form.activities || "(not provided)",
      ``,
      `--- DINING ---`,
      form.dining || "(not provided)",
      ``,
      `--- SPECIAL FEATURES ---`,
      form.specialFeatures || "(not provided)",
      ``,
      `--- SUSTAINABILITY ---`,
      form.sustainability || "(not provided)",
      ``,
      `--- PHOTOS (${photos.length}) ---`,
      photoList,
      ``,
      `--- MESSAGE ---`,
      form.message || "(not provided)",
    ].join("\n");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Lodge Update: ${lodge.name}${photos.length > 0 ? ` (${photos.length} photos)` : ""}`,
          from_name: `${form.contactName} (${lodge.name})`,
          reply_to: form.contactEmail,
          message,
        }),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-forest/5 rounded-xl p-8">
          <svg className="w-16 h-16 text-forest mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-3">
            Thank you!
          </h2>
          <p className="text-olive-dark/80 text-sm mb-2">
            Your update for <strong>{lodge.name}</strong> has been submitted
            {photos.length > 0 && ` with ${photos.length} photo${photos.length !== 1 ? "s" : ""}`}.
          </p>
          <p className="text-olive-dark/60 text-xs mb-6">
            We will review the information and update the listing within 48 hours. If we have questions, we will contact you at the email you provided.
          </p>
          <Link
            href={`/lodges/${lodge.region}/${lodge.slug}`}
            className="inline-flex items-center px-5 py-2.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
          >
            View your listing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-forest py-10 sm:py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-cream/60 text-sm mb-4" aria-label="Breadcrumb">
            <Link href={`/lodges/${lodge.region}/${lodge.slug}`} className="hover:text-cream transition-colors">
              {lodge.name}
            </Link>
            <span>/</span>
            <span className="text-cream">Update Listing</span>
          </nav>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-2xl sm:text-3xl mb-2">
            Update: {lodge.name}
          </h1>
          <p className="text-cream/70 text-sm">
            Help us keep your listing accurate. Fill in what you can and upload your photos — you do not need to fill everything at once.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Who are you */}
          <fieldset className="space-y-4">
            <legend className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-1">
              1. Your Contact Details
            </legend>
            <p className="text-olive-dark/60 text-xs mb-4">
              So we can verify the update. This will not be published.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Your Name" required>
                <input type="text" value={form.contactName} onChange={set("contactName")} required className={inputClass} placeholder="e.g. John Doe" />
              </Field>
              <Field label="Your Email" required>
                <input type="email" value={form.contactEmail} onChange={set("contactEmail")} required className={inputClass} placeholder="e.g. john@lodge.com" />
              </Field>
            </div>
            <Field label="Your Role" hint="e.g. Owner, General Manager, Marketing">
              <input type="text" value={form.contactRole} onChange={set("contactRole")} className={inputClass} placeholder="e.g. General Manager" />
            </Field>
          </fieldset>

          {/* Step 2: Lodge Contact */}
          <fieldset className="space-y-4">
            <legend className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-1">
              2. Lodge Contact Information
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Lodge Email">
                <input type="email" value={form.lodgeEmail} onChange={set("lodgeEmail")} className={inputClass} placeholder="info@yourlodge.com" />
              </Field>
              <Field label="Lodge Website">
                <input type="url" value={form.lodgeWebsite} onChange={set("lodgeWebsite")} className={inputClass} placeholder="https://www.yourlodge.com" />
              </Field>
              <Field label="Phone">
                <input type="tel" value={form.lodgePhone} onChange={set("lodgePhone")} className={inputClass} placeholder="+256 ..." />
              </Field>
              <Field label="WhatsApp">
                <input type="tel" value={form.lodgeWhatsApp} onChange={set("lodgeWhatsApp")} className={inputClass} placeholder="+256 ..." />
              </Field>
            </div>
          </fieldset>

          {/* Step 3: About the Lodge */}
          <fieldset className="space-y-4">
            <legend className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-1">
              3. About Your Lodge
            </legend>
            <p className="text-olive-dark/60 text-xs mb-4">
              Fill in what you can. Every detail helps visitors choose the right lodge.
            </p>
            <Field label="Description" hint="What makes your lodge special? Location, atmosphere, history.">
              <textarea value={form.description} onChange={set("description")} className={textareaClass} placeholder="Tell us about your lodge..." />
            </Field>
            <Field label="Rooms & Accommodation" hint="Room types, number of rooms, what is included.">
              <textarea value={form.roomInfo} onChange={set("roomInfo")} className={textareaClass} placeholder="e.g. 12 en suite cottages, 2 family rooms..." />
            </Field>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Amenities" hint="Pool, Wi-Fi, spa, parking...">
                <textarea value={form.amenities} onChange={set("amenities")} className={`${textareaClass} min-h-[80px]`} placeholder="e.g. Pool, free Wi-Fi..." />
              </Field>
              <Field label="Activities" hint="What can guests do?">
                <textarea value={form.activities} onChange={set("activities")} className={`${textareaClass} min-h-[80px]`} placeholder="e.g. Gorilla trekking..." />
              </Field>
            </div>
            <Field label="Dining" hint="Restaurant, meals included, cuisine style?">
              <textarea value={form.dining} onChange={set("dining")} className={`${textareaClass} min-h-[80px]`} placeholder="e.g. Full board, local and international cuisine..." />
            </Field>
            <Field label="What makes your lodge special?">
              <textarea value={form.specialFeatures} onChange={set("specialFeatures")} className={`${textareaClass} min-h-[80px]`} placeholder="e.g. Only lodge inside the park, community-owned..." />
            </Field>
            <Field label="Sustainability & Community" hint="Eco initiatives, community projects">
              <textarea value={form.sustainability} onChange={set("sustainability")} className={`${textareaClass} min-h-[80px]`} placeholder="e.g. Solar powered, supports local school..." />
            </Field>
          </fieldset>

          {/* Step 4: Photos */}
          <fieldset className="space-y-4">
            <legend className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg mb-1">
              4. Photos
            </legend>
            <p className="text-olive-dark/60 text-xs mb-4">
              Upload your own photos of the lodge — rooms, exterior, views, restaurant, activities. High resolution preferred. By uploading you confirm you own the rights to these images.
            </p>
            <div className="relative">
              <PhotoUploader
                lodgeSlug={lodge.slug}
                files={photos}
                onUpload={(file) => setPhotos((prev) => [...prev, file])}
              />
            </div>
          </fieldset>

          {/* Step 5: Anything else */}
          <Field label="Anything else?" hint="Questions, corrections, or other information.">
            <textarea value={form.message} onChange={set("message")} className={textareaClass} placeholder="Any other information..." />
          </Field>

          {/* Submit */}
          <div className="pt-4 border-t border-sand/50">
            {status === "error" && (
              <div className="bg-red-50 text-red-700 rounded-lg p-3 text-sm mb-4">
                Something went wrong. Please try again or contact us at info@lodgesofuganda.com.
              </div>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm disabled:opacity-50"
            >
              {status === "sending" ? "Submitting..." : `Submit Update${photos.length > 0 ? ` with ${photos.length} photo${photos.length !== 1 ? "s" : ""}` : ""}`}
            </button>
            <p className="text-olive-dark/50 text-xs mt-3">
              Your submission will be reviewed before any changes are published. We typically process updates within 48 hours.
            </p>
          </div>
        </form>

        <div className="mt-10 bg-sand/30 rounded-xl p-5">
          <p className="text-olive-dark/50 text-xs leading-relaxed">
            Lodges of Uganda is an independent information platform. Submitting an update does not create a contractual relationship. We reserve the right to edit submissions for clarity and consistency.
          </p>
        </div>
      </div>
    </>
  );
}
