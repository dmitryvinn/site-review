/*
 * FloatingTOC — Clean Deposition design.
 * A minimal floating table of contents on the left margin (desktop only).
 * Shows section numbers as small dots/numbers. Appears after scrolling past hero.
 * i18n: Uses useContent() for locale-aware labels and section titles.
 */

import { useEffect, useState } from "react";
import { useContent } from "@/lib/useContent";

export function FloatingTOC() {
  const [visible, setVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const { sections, ui } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === entry.target.id);
            if (idx >= 0) setActiveIdx(idx);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  if (!visible) return null;

  return (
    <nav
      className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-2"
      aria-label={ui.sectionNavigation}
    >
      {sections.map((section, idx) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center gap-2"
          title={section.title}
          aria-label={`${ui.navigateToSection} ${section.title}`}
        >
          <span
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              idx === activeIdx
                ? "bg-[oklch(0.35_0.03_255)] scale-[1.8]"
                : idx < activeIdx
                ? "bg-[oklch(0.55_0.02_255)]"
                : "bg-[oklch(0.82_0.005_255)]"
            }`}
          />
          <span
            className={`text-[0.7rem] font-[var(--font-mono)] transition-opacity duration-200 ${
              idx === activeIdx
                ? "opacity-100 text-[oklch(0.35_0.03_255)]"
                : "opacity-0 group-hover:opacity-100 text-[oklch(0.55_0.02_255)]"
            }`}
          >
            {String(idx + 1).padStart(2, "0")}
          </span>
        </a>
      ))}
    </nav>
  );
}
