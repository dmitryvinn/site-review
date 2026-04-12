/*
 * SeverityBadge — Clean Deposition design.
 * Small rounded pills. Traffic-light colors: red, amber, slate.
 * i18n: Uses useContent() for locale-aware labels.
 */

import { useContent } from "@/lib/useContent";

interface SeverityBadgeProps {
  severity: "critical" | "major" | "minor";
}

const classNames = {
  critical: "sev-critical",
  major: "sev-major",
  minor: "sev-minor",
};

export function SeverityBadge({ severity }: SeverityBadgeProps) {
  const { ui } = useContent();
  const label = ui.severityLabels[severity];
  return <span className={classNames[severity]}>{label}</span>;
}
