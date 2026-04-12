/*
 * useContent.ts — Returns the correct content data based on current locale.
 */

import { useLocale } from "@/lib/i18n";
import {
  siteInfo,
  introContent,
  overallExperience,
  sections,
  summaryStats,
} from "@/lib/reviewData";
import {
  siteInfoRu,
  introContentRu,
  overallExperienceRu,
  pullQuoteRu,
  sectionsRu,
  uiStringsRu,
} from "@/lib/reviewDataRu";

// Default English UI strings
const uiStringsEn = {
  independentReview: "INDEPENDENT CUSTOMER REVIEW",
  location: "WATERTOWN, MA",
  customerReviewOf: "Customer Review of",
  theOverallExperience: "The Overall Experience",
  tableOfContents: "Table of Contents",
  issuePrefix: "Issue",
  issuesDocumented: "Issues Documented",
  critical: "Critical",
  major: "Major",
  exhibits: "Exhibits",
  severityLabels: {
    critical: "Critical",
    major: "Major",
    minor: "Minor",
  },
  imageUnavailable: "Image unavailable",
  viewFullSize: "View full size",
  videoNotSupported: "Your browser does not support the video tag.",
  figLabel: "Fig.",
  viewFigure: "View figure",
  enlargedView: "Enlarged view:",
  closeEnlargedView: "Close enlarged view",
  scrollToTop: "Scroll to top",
  sectionNavigation: "Section navigation",
  navigateToSection: "Navigate to section:",
  closingNote:
    "This review may be updated as additional details come to mind. All photographs and videos shown are original, unedited documentation of the work performed. This page exists solely to share one homeowner\u2019s experience and is not affiliated with, endorsed by, or sponsored by Maestro Renovation in any way.",
  independentReviewFooter: "Independent review",
  notAffiliatedWith: "Not affiliated with",
  allRightsReserved: "All rights reserved",
  seoSuffix: "— Maestro Renovation project documentation",
};

const pullQuoteEn =
  "I had to monitor everything daily and call the company\u2019s owner several times a day.";

export function useContent() {
  const { locale } = useLocale();
  const isRu = locale === "ru";

  return {
    siteInfo: isRu ? siteInfoRu : siteInfo,
    introContent: isRu ? introContentRu : introContent,
    overallExperience: isRu ? overallExperienceRu : overallExperience,
    pullQuote: isRu ? pullQuoteRu : pullQuoteEn,
    sections: isRu ? sectionsRu : sections,
    summaryStats, // numbers are the same in both languages
    ui: isRu ? uiStringsRu : uiStringsEn,
  };
}
