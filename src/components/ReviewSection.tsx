/*
 * ReviewSection — Clean Deposition design with SEO-optimized semantic HTML.
 * Each section is a proper <section> with h2 heading for crawlers.
 * Figures use <figure>/<figcaption> (already in ExhibitCard).
 * i18n: Uses useContent() for locale-aware labels.
 */

import type { ReviewSection as ReviewSectionType } from "@/lib/reviewData";
import { ExhibitCard } from "./ExhibitCard";
import { SeverityBadge } from "./SeverityBadge";
import { useContent } from "@/lib/useContent";

interface ReviewSectionProps {
  section: ReviewSectionType;
  index: number;
}

export function ReviewSectionBlock({ section, index }: ReviewSectionProps) {
  const { ui } = useContent();
  const exhibitInsertPoints = getExhibitInsertPoints(
    section.content.length,
    section.exhibits.length
  );

  return (
    <section
      id={section.id}
      className="scroll-mt-16"
      aria-label={`${ui.issuePrefix} ${index + 1}: ${section.title}`}
    >
      {/* Divider */}
      <div className="reading-col">
        <hr className="clean-rule" />
      </div>

      {/* Section header with inline number */}
      <div className="reading-col">
        <div className="flex items-baseline gap-4 mb-6">
          {/* Section number — small, inline, muted */}
          <span
            className="text-[0.9rem] font-[var(--font-mono)] font-medium text-[oklch(0.55_0.01_255)] tracking-wider shrink-0"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="flex flex-wrap items-baseline gap-3">
            <h2 className="text-4xl sm:text-5xl text-[oklch(0.05_0.02_255)]">
              {section.title}
            </h2>
            <SeverityBadge severity={section.severity} />
          </div>
        </div>
      </div>

      {/* Interleaved content and exhibits */}
      {section.content.map((paragraph, pIdx) => {
        const exhibitsAfterThis = exhibitInsertPoints
          .filter((ep) => ep.afterParagraph === pIdx)
          .map((ep) => section.exhibits[ep.exhibitIndex]);

        return (
          <div key={pIdx}>
            <div className="reading-col">
              <p className="text-lg leading-[1.9] text-[oklch(0.15_0.02_255)] mb-6">
                {paragraph}
              </p>
            </div>
            {exhibitsAfterThis.map((exhibit) => (
              <div key={exhibit.id} className="breakout">
                <ExhibitCard exhibit={exhibit} />
              </div>
            ))}
          </div>
        );
      })}

      {/* Remaining exhibits */}
      {section.exhibits
        .filter(
          (_, eIdx) =>
            !exhibitInsertPoints.some((ep) => ep.exhibitIndex === eIdx)
        )
        .map((exhibit) => (
          <div key={exhibit.id} className="breakout">
            <ExhibitCard exhibit={exhibit} />
          </div>
        ))}
    </section>
  );
}

function getExhibitInsertPoints(
  paragraphCount: number,
  exhibitCount: number
): { afterParagraph: number; exhibitIndex: number }[] {
  if (exhibitCount === 0 || paragraphCount === 0) return [];

  const points: { afterParagraph: number; exhibitIndex: number }[] = [];

  if (exhibitCount <= paragraphCount) {
    for (let i = 0; i < exhibitCount; i++) {
      const paragraphIdx = Math.min(
        paragraphCount - 1,
        Math.floor(((i + 1) * paragraphCount) / exhibitCount) - 1
      );
      points.push({ afterParagraph: paragraphIdx, exhibitIndex: i });
    }
  } else {
    for (let i = 0; i < exhibitCount; i++) {
      points.push({ afterParagraph: paragraphCount - 1, exhibitIndex: i });
    }
  }

  return points;
}
