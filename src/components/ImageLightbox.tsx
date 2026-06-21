"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  initialIndex?: number;
  onClose: () => void;
}

export function ImageLightbox({ images, initialIndex = 0, onClose }: ImageLightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, next, prev]);

  const img = images[current];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      {images.length > 1 && (
        <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
          {current + 1} / {images.length}
        </span>
      )}

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative w-[90vw] h-[80vh] max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Caption */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs text-center max-w-md">
        {img.alt}
      </p>
    </div>
  );
}

/* Wrapper that manages lightbox state for a gallery */
export function GalleryWithLightbox({
  heroImage,
  gallery,
  lodgeName,
  subregion,
  category,
  verifiedVisit,
  verifiedDate,
}: {
  heroImage: string;
  gallery: string[];
  lodgeName: string;
  subregion?: string;
  category?: string;
  verifiedVisit: string;
  verifiedDate: string | null;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const locationSuffix = subregion ? `, ${subregion}, Uganda` : ", Uganda";
  const categoryLabel = category ? `${category.toLowerCase()} ` : "";

  const allImages = [
    ...(heroImage ? [{ src: heroImage, alt: `${lodgeName} — ${categoryLabel}accommodation${locationSuffix}` }] : []),
    ...gallery.map((src, i) => ({ src, alt: `${lodgeName} — ${categoryLabel}lodge photo ${i + 1}${locationSuffix}` })),
  ];

  // Gallery index offset (hero takes slot 0 if present)
  const galleryOffset = heroImage ? 1 : 0;

  return (
    <>
      {/* Photo Gallery */}
      {gallery.length > 0 && (
        <section>
          <h2 className="font-[family-name:var(--font-heading)] font-bold text-forest text-2xl mb-4">Photos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i + galleryOffset)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-sand cursor-zoom-in group"
              >
                <Image
                  src={src}
                  alt={`${lodgeName} — ${categoryLabel}lodge photo ${i + 1}${locationSuffix}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <svg className="w-6 h-6 text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
          {verifiedVisit === "personally-visited" && verifiedDate && (
            <p className="text-olive-dark/50 text-xs mt-3">
              Photos from personal visit, {verifiedDate}
            </p>
          )}
        </section>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={allImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

/* Clickable hero image */
export function HeroImageClickable({
  heroImage,
  gallery,
  lodgeName,
}: {
  heroImage: string;
  gallery: string[];
  lodgeName: string;
}) {
  const [open, setOpen] = useState(false);

  const allImages = [
    { src: heroImage, alt: `${lodgeName} — Main Photo` },
    ...gallery.map((src, i) => ({ src, alt: `${lodgeName} — Photo ${i + 1}` })),
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="absolute inset-0 z-10 cursor-zoom-in"
        aria-label="Enlarge photo"
      >
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/40 hover:bg-black/60 text-white text-xs font-medium rounded-full backdrop-blur-sm transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
          {allImages.length > 1 ? `${allImages.length} Photos` : "Enlarge"}
        </span>
      </button>
      {open && (
        <ImageLightbox
          images={allImages}
          initialIndex={0}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
