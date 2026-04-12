/*
 * SummaryBar — Clean Deposition design.
 * Minimal stats row with monospaced numbers on a subtle surface.
 * i18n: Uses useContent() for locale-aware labels.
 */

import { useContent } from "@/lib/useContent";

export function SummaryBar() {
  const { summaryStats, ui } = useContent();

  const stats = [
    { value: summaryStats.totalIssues, label: ui.issuesDocumented },
    { value: summaryStats.criticalIssues, label: ui.critical, accent: true },
    { value: summaryStats.majorIssues, label: ui.major },
    { value: summaryStats.totalExhibits, label: ui.exhibits },
  ];

  return (
    <div className="reading-col py-8" role="region" aria-label={ui.issuesDocumented}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 px-6 bg-[oklch(0.985_0.002_255)] border border-[oklch(0.91_0.005_255)] rounded-lg">
        {stats.map(({ value, label, accent }) => (
          <div key={label} className="text-center">
            <p
              className={`text-4xl font-[var(--font-mono)] font-semibold ${
                accent ? "text-[oklch(0.45_0.18_25)]" : "text-[oklch(0.15_0.02_255)]"
              }`}
            >
              {value}
            </p>
            <p className="text-[0.8rem] font-[var(--font-mono)] font-medium text-[oklch(0.45_0.02_255)] mt-1.5 tracking-wide">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
