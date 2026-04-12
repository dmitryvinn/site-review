/*
 * LanguageToggle — Clean pill-style EN/RU language switcher.
 * Fixed position in the top-right corner.
 * Matches the Clean Deposition design system.
 */

import { useLocale } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="fixed top-4 right-4 z-40 flex items-center bg-white border border-[oklch(0.91_0.005_255)] rounded-full shadow-sm"
      role="radiogroup"
      aria-label="Language selection"
    >
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1.5 text-sm font-[var(--font-mono)] font-medium rounded-full transition-all duration-200 ${
          locale === "en"
            ? "bg-[oklch(0.15_0.02_255)] text-white"
            : "text-[oklch(0.45_0.02_255)] hover:text-[oklch(0.25_0.02_255)]"
        }`}
        role="radio"
        aria-checked={locale === "en"}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => setLocale("ru")}
        className={`px-3 py-1.5 text-sm font-[var(--font-mono)] font-medium rounded-full transition-all duration-200 ${
          locale === "ru"
            ? "bg-[oklch(0.15_0.02_255)] text-white"
            : "text-[oklch(0.45_0.02_255)] hover:text-[oklch(0.25_0.02_255)]"
        }`}
        role="radio"
        aria-checked={locale === "ru"}
        aria-label="Русский"
      >
        RU
      </button>
    </div>
  );
}
