/*
 * MobileNav — Clean Deposition design.
 * Clean collapsible section list for mobile/tablet.
 * i18n: Uses useContent() for locale-aware labels and section titles.
 */

import { useState } from "react";
import { useContent } from "@/lib/useContent";
import { ChevronDown, List } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { sections, ui } = useContent();

  return (
    <nav className="xl:hidden reading-col mt-6" aria-label={ui.tableOfContents}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-[oklch(0.985_0.002_255)] border border-[oklch(0.91_0.005_255)] rounded-lg text-[oklch(0.35_0.03_255)] hover:bg-[oklch(0.96_0.003_255)] transition-colors"
      >
        <span className="flex items-center gap-2 text-base font-medium">
          <List size={16} />
          {ui.tableOfContents}
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="mt-2 bg-white border border-[oklch(0.91_0.005_255)] rounded-lg px-4 py-3 max-h-[50vh] overflow-y-auto">
          <ol className="space-y-0.5">
            {sections.map((section, idx) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 py-2.5 text-base text-[oklch(0.30_0.02_255)] hover:text-[oklch(0.10_0.02_255)] transition-colors"
                >
                  <span className="font-[var(--font-mono)] text-[0.75rem] text-[oklch(0.55_0.01_255)] w-5 text-right shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{section.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </nav>
  );
}
