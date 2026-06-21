"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { submitChanges } from "@/lib/supabase";

type OperatorOption = { slug: string; name: string };

type FormData = {
  companyName: string;
  contactPerson: string;
  whatsapp: string;
  email: string;
  website: string;
  location: string;
  specializations: string;
  regions: string;
  description: string;
  message: string;
};

const INITIAL: FormData = {
  companyName: "",
  contactPerson: "",
  whatsapp: "",
  email: "",
  website: "",
  location: "",
  specializations: "",
  regions: "",
  description: "",
  message: "",
};

type UploadedFile = { name: string; url: string; size: number };

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-forest mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {hint && <p className="text-olive-dark/50 text-xs mb-1.5">{hint}</p>}
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-2.5 bg-white rounded-lg border border-sand focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm text-olive-dark placeholder:text-olive-dark/30";

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
        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        if (!cloudName) {
          onUpload({ name: file.name, url: `[uploaded: ${file.name}]`, size: file.size });
          continue;
        }
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "lodge_updates");
        formData.append("folder", "lodge-updates/tour-operators");
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: "POST", body: formData });
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
      <div className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${uploading ? "border-gold bg-gold/5" : "border-sand hover:border-gold/50"}`}>
        {uploading ? (
          <p className="text-gold text-sm font-medium">Uploading...</p>
        ) : (
          <>
            <svg className="w-10 h-10 text-olive-dark/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-olive-dark/60 text-sm mb-1">Drag files here or click to select</p>
            <p className="text-olive-dark/40 text-xs">JPG, PNG, WEBP -- max 10 MB per file</p>
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
            <div key={i} className="flex items-center gap-2 bg-forest/5 rounded-lg px-3 py-2">
              <svg className="w-4 h-4 text-forest shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-forest text-xs font-medium truncate flex-1">{f.name}</span>
              <span className="text-olive-dark/40 text-xs">{(f.size / 1024 / 1024).toFixed(1)} MB</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function AddOperatorForm({ operators = [] }: { operators?: OperatorOption[] }) {
  const searchParams = useSearchParams();
  const preselect = searchParams.get("select") || "";

  const [selectedSlug, setSelectedSlug] = useState(preselect);
  const [isNew, setIsNew] = useState(false);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [photos, setPhotos] = useState<UploadedFile[]>([]);
  const [logo, setLogo] = useState<UploadedFile[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (preselect && operators.some((o) => o.slug === preselect)) {
      setSelectedSlug(preselect);
      setIsNew(false);
    }
  }, [preselect, operators]);

  const selectedOperator = operators.find((o) => o.slug === selectedSlug);

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  function handleSelect(value: string) {
    if (value === "__new__") {
      setIsNew(true);
      setSelectedSlug("");
    } else {
      setIsNew(false);
      setSelectedSlug(value);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isNew && !selectedSlug) return;
    if (isNew && (!form.companyName || !form.contactPerson || !form.email)) return;
    if (!isNew && (!form.contactPerson || !form.email)) return;

    setStatus("sending");

    const entityId = isNew ? `new_${form.companyName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "")}` : `op_${selectedSlug}`;
    const entityName = isNew ? form.companyName : selectedOperator?.name || selectedSlug;
    const changeType = isNew ? "new_entity" : "new_field";
    const source = "https://lodgesofuganda.com/for-lodges/tour-operator";

    const fields: { field: string; value: string; type?: "new_field" | "updated_field" | "new_image" | "new_entity" }[] = [];

    fields.push({ field: "contact_person", value: form.contactPerson, type: changeType });
    fields.push({ field: "contact_email", value: form.email, type: changeType });

    if (form.whatsapp) fields.push({ field: "whatsapp", value: form.whatsapp, type: changeType });
    if (form.website) fields.push({ field: "website", value: form.website, type: changeType });
    if (form.description) fields.push({ field: "description", value: form.description, type: changeType });
    if (form.message) fields.push({ field: "message", value: form.message, type: changeType });

    if (isNew) {
      if (form.location) fields.push({ field: "location", value: form.location, type: "new_entity" });
      if (form.specializations) fields.push({ field: "specializations", value: form.specializations, type: "new_entity" });
      if (form.regions) fields.push({ field: "regions", value: form.regions, type: "new_entity" });
    }

    for (const photo of photos) {
      fields.push({ field: "gallery_image", value: photo.url, type: "new_image" });
    }
    if (logo.length > 0) {
      fields.push({ field: "logo_url", value: logo[0].url, type: "new_image" });
    }

    try {
      const result = await submitChanges("tour_operator", entityId, entityName, source, fields);
      setStatus(result.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
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
            <svg className="w-16 h-16 text-forest mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-3">
              Thank you! Your submission is being reviewed.
            </h2>
            <p className="text-olive-dark/80 text-sm mb-2">
              {isNew
                ? `We will review your information and create a free profile for ${form.companyName}.`
                : `We received your update for ${selectedOperator?.name}${photos.length > 0 ? ` with ${photos.length} photo${photos.length !== 1 ? "s" : ""}` : ""}.`}
            </p>
            <p className="text-olive-dark/60 text-xs mb-6">
              We will contact you at the email you provided if we have questions.
            </p>
            <Link
              href="/tour-operators"
              className="inline-flex items-center px-5 py-2.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              View Tour Operators
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="bg-forest py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-cream/60 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span>/</span>
            <Link href="/for-lodges" className="hover:text-cream transition-colors">For Partners</Link>
            <span>/</span>
            <span className="text-cream">Tour Operator</span>
          </nav>
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-cream text-3xl sm:text-4xl lg:text-5xl mb-4">
            Get Your Tour Company Listed
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto mb-2">
            Upload photos, your logo, and company details -- or update your existing profile.
          </p>
          <p className="text-cream/60 text-sm">Free. No account needed. Takes 2 minutes.</p>
        </div>
      </section>

      <section className="bg-sand/30 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-sm mb-1">Photos Build Trust</h3>
              <p className="text-olive-dark/60 text-xs leading-relaxed">Show your vehicles, team, and happy guests. Travellers book operators they can see.</p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-sm mb-1">Your Logo, Your Brand</h3>
              <p className="text-olive-dark/60 text-xs leading-relaxed">Upload your logo for instant recognition in our tour operator directory.</p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-forest text-sm mb-1">100% Free</h3>
              <p className="text-olive-dark/60 text-xs leading-relaxed">No fees, no commissions, no premium tiers. Every operator is listed equally.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          <fieldset className="space-y-4">
            <legend className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg">
              1. Select Your Company
            </legend>
            <select
              value={isNew ? "__new__" : selectedSlug}
              onChange={(e) => handleSelect(e.target.value)}
              required
              className={inputClass}
            >
              <option value="">-- Choose your company --</option>
              {operators.map((o) => (
                <option key={o.slug} value={o.slug}>{o.name}</option>
              ))}
              <option value="__new__">My company is not listed yet</option>
            </select>
            {selectedOperator && (
              <p className="text-olive-dark/50 text-xs">
                Current profile:{" "}
                <Link href={`/tour-operators/${selectedOperator.slug}`} className="text-gold hover:underline" target="_blank">
                  View on Lodges of Uganda
                </Link>
              </p>
            )}
          </fieldset>

          {(selectedSlug || isNew) && (
            <fieldset className="space-y-4">
              <legend className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg">
                2. {isNew ? "Company & Contact Details" : "Your Contact Details"}
              </legend>
              <p className="text-olive-dark/60 text-xs">
                {isNew ? "Tell us about your company." : "So we can verify the update. Not published."}
              </p>

              {isNew && (
                <Field label="Company Name" required>
                  <input type="text" value={form.companyName} onChange={set("companyName")} required className={inputClass} placeholder="e.g. Uganda Safari Adventures Ltd" />
                </Field>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Contact Person" required>
                  <input type="text" value={form.contactPerson} onChange={set("contactPerson")} required className={inputClass} placeholder="Full name" />
                </Field>
                <Field label="Email" required>
                  <input type="email" value={form.email} onChange={set("email")} required className={inputClass} placeholder="info@yourcompany.com" />
                </Field>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="WhatsApp">
                  <input type="tel" value={form.whatsapp} onChange={set("whatsapp")} className={inputClass} placeholder="+256 ..." />
                </Field>
                <Field label="Website">
                  <input type="url" value={form.website} onChange={set("website")} className={inputClass} placeholder="https://yourcompany.com" />
                </Field>
              </div>

              {isNew && (
                <>
                  <Field label="Location / Base">
                    <input type="text" value={form.location} onChange={set("location")} className={inputClass} placeholder="e.g. Kampala, Buhoma, Entebbe" />
                  </Field>
                  <Field label="Specializations">
                    <input type="text" value={form.specializations} onChange={set("specializations")} className={inputClass} placeholder="e.g. Gorilla Trekking, Wildlife Safari, Cultural Tours" />
                  </Field>
                  <Field label="Regions You Operate In">
                    <input type="text" value={form.regions} onChange={set("regions")} className={inputClass} placeholder="e.g. Bwindi, Queen Elizabeth, Murchison Falls" />
                  </Field>
                </>
              )}
            </fieldset>
          )}

          {(selectedSlug || isNew) && (
            <fieldset className="space-y-6">
              <legend className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg">
                3. Upload Photos & Logo
              </legend>
              <p className="text-olive-dark/60 text-xs">
                Show travellers your vehicles, team, office, and happy guests. This is what builds trust.
              </p>

              <PhotoUploader
                label="Company Photos"
                hint="Team, vehicles, office, safari moments, happy clients -- up to 10 photos."
                accept="image/*"
                multiple
                files={photos}
                onUpload={(f) => setPhotos((prev) => [...prev, f])}
                maxFiles={10}
              />

              <PhotoUploader
                label="Company Logo"
                hint="PNG with transparent background preferred."
                accept="image/png,image/svg+xml,image/jpeg,image/webp"
                multiple={false}
                files={logo}
                onUpload={(f) => setLogo([f])}
                maxFiles={1}
              />
            </fieldset>
          )}

          {(selectedSlug || isNew) && (
            <fieldset className="space-y-4">
              <legend className="font-[family-name:var(--font-heading)] font-bold text-forest text-lg">
                4. Description <span className="text-olive-dark/40 font-normal text-sm">(optional)</span>
              </legend>
              <p className="text-olive-dark/60 text-xs">
                {isNew
                  ? "Tell travellers what makes your company special (2-3 sentences)."
                  : "Add anything you want to highlight or correct on your profile."}
              </p>
              <textarea
                value={form.description}
                onChange={set("description")}
                className={`${inputClass} min-h-[100px] resize-y`}
                placeholder={isNew
                  ? "e.g. We are a locally owned safari company based in Kampala, specializing in..."
                  : "e.g. We recently added new 4x4 vehicles, expanded to Kidepo region..."}
              />
              <Field label="Anything else?" hint="Questions, corrections, links to review profiles.">
                <textarea value={form.message} onChange={set("message")} className={`${inputClass} min-h-[80px] resize-y`} placeholder="Any other information..." />
              </Field>
            </fieldset>
          )}

          {(selectedSlug || isNew) && (
            <div className="pt-4 border-t border-sand/50">
              {status === "error" && (
                <div className="bg-red-50 text-red-700 rounded-lg p-3 text-sm mb-4">
                  Something went wrong. Please try again or email us at info@lodgesofuganda.com.
                </div>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm disabled:opacity-50"
              >
                {status === "sending"
                  ? "Submitting..."
                  : isNew
                    ? `Submit${photos.length > 0 ? ` ${photos.length} Photo${photos.length !== 1 ? "s" : ""}` : ""}${logo.length > 0 ? " + Logo" : ""} -- Free`
                    : `Submit Update${photos.length > 0 ? ` with ${photos.length} Photo${photos.length !== 1 ? "s" : ""}` : ""}${logo.length > 0 ? " + Logo" : ""}`}
              </button>
              <p className="text-olive-dark/50 text-xs mt-3">
                {isNew
                  ? "We review submissions and create profiles within a few days. You will receive a confirmation email."
                  : "We process updates within 48 hours. By uploading you confirm you own the rights to these images."}
              </p>
            </div>
          )}
        </form>

        <div className="mt-10 bg-cream/50 rounded-xl p-5 border border-sand/50">
          <p className="text-olive-dark/50 text-xs leading-relaxed text-center">
            Lodges of Uganda is an independent information platform. Listings are free and do not create a contractual relationship. We never charge for being listed.
          </p>
        </div>
      </div>
    </>
  );
}
