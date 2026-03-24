/*
 * ExhibitCard — Clean Deposition design with SEO-optimized image handling.
 * Uses <figure>/<figcaption> for semantic markup.
 * All images have descriptive alt text for image search indexing.
 * Lazy loading for below-fold performance.
 */

import { useState } from "react";
import type { Exhibit } from "@/lib/reviewData";
import { ImageOff } from "lucide-react";

interface ExhibitCardProps {
  exhibit: Exhibit;
}

export function ExhibitCard({ exhibit }: ExhibitCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Build a descriptive alt text that includes "Maestro Renovation" for SEO
  const seoAlt = exhibit.caption.includes("Maestro")
    ? exhibit.caption
    : `${exhibit.caption} — Maestro Renovation project documentation`;

  return (
    <>
      <figure className="my-8" itemScope itemType="https://schema.org/ImageObject">
        <div className="fig-frame">
          {exhibit.type === "image" ? (
            <>
              {imageError ? (
                <div className="w-full h-48 flex flex-col items-center justify-center gap-2 text-[oklch(0.55_0.02_255)]">
                  <ImageOff size={20} aria-hidden="true" />
                  <p className="text-sm font-[var(--font-mono)]">
                    Image unavailable
                  </p>
                </div>
              ) : (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="w-full block focus:outline-none relative group"
                  aria-label={`View figure ${exhibit.id} full size: ${exhibit.caption}`}
                >
                  {!imageLoaded && (
                    <div className="w-full h-64 bg-[oklch(0.96_0.003_255)] animate-pulse" />
                  )}
                  <img
                    src={exhibit.src}
                    alt={seoAlt}
                    loading="lazy"
                    decoding="async"
                    itemProp="contentUrl"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full max-h-[640px] object-contain transition-opacity duration-300 ${
                      imageLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <span className="bg-[oklch(0.15_0.02_255)]/70 text-white text-sm font-[var(--font-body)] font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                      View full size
                    </span>
                  </div>
                </button>
              )}
            </>
          ) : (
            <video
              controls
              preload="metadata"
              className="w-full max-h-[640px] bg-black"
              aria-label={exhibit.caption}
            >
              <source src={exhibit.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Caption — uses figcaption for semantic SEO */}
        <figcaption className="mt-3 flex items-start gap-2" itemProp="caption">
          <span className="fig-label shrink-0 mt-0.5" aria-hidden="true">Fig. {exhibit.id}</span>
          <span className="text-base text-[oklch(0.35_0.02_255)] leading-relaxed">
            {exhibit.caption}
          </span>
        </figcaption>
      </figure>

      {/* Lightbox */}
      {isExpanded && exhibit.type === "image" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md p-6 cursor-zoom-out"
          onClick={() => setIsExpanded(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged view: ${exhibit.caption}`}
        >
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-5 right-5 text-[oklch(0.35_0.03_255)] hover:text-[oklch(0.15_0.02_255)] z-10 w-8 h-8 flex items-center justify-center rounded-full border border-[oklch(0.91_0.005_255)] hover:border-[oklch(0.70_0.01_255)] transition-colors bg-white"
            aria-label="Close enlarged view"
          >
            <span className="text-lg leading-none" aria-hidden="true">&times;</span>
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={exhibit.src}
              alt={seoAlt}
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
            <p className="text-center mt-4 text-base text-[oklch(0.35_0.02_255)]">
              <span className="fig-label mr-2">Fig. {exhibit.id}</span>
              {exhibit.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
