/*
 * SummaryBar — Clean Deposition design.
 * Minimal stats row with monospaced numbers on a subtle surface.
 */

import { summaryStats } from "@/lib/reviewData";

export function SummaryBar() {
  const stats = [
    { value: summaryStats.totalIssues, label: "Issues Documented" },
    { value: summaryStats.criticalIssues, label: "Critical", accent: true },
    { value: summaryStats.majorIssues, label: "Major" },
    { value: summaryStats.totalExhibits, label: "Exhibits" },
  ];

  return (
    <div className="reading-col py-8" role="region" aria-label="Review summary statistics">
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
