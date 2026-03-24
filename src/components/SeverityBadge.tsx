/*
 * SeverityBadge — Clean Deposition design.
 * Small rounded pills. Traffic-light colors: red, amber, slate.
 */

interface SeverityBadgeProps {
  severity: "critical" | "major" | "minor";
}

const config = {
  critical: { label: "Critical", className: "sev-critical" },
  major: { label: "Major", className: "sev-major" },
  minor: { label: "Minor", className: "sev-minor" },
};

export function SeverityBadge({ severity }: SeverityBadgeProps) {
  const { label, className } = config[severity];
  return <span className={className}>{label}</span>;
}
