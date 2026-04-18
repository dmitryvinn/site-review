/*
 * Home.tsx — Clean Deposition design with SEO-optimized semantic HTML.
 *
 * Layout: Wide 1100px reading column. Figures break out to 1200px.
 * Floating dot-nav on left (XL). Reading progress bar at top.
 * Maximum whitespace. Content-first.
 *
 * Typography: Instrument Serif (headings), Inter (body), Geist Mono (labels).
 * Colors: Pure white, slate-700 accent, traffic-light severity.
 * All images/videos are original evidence from the actual renovation.
 *
 * SEO: Uses <main>, <article>, <section>, <nav>, proper heading hierarchy,
 * descriptive aria-labels, and structured content for crawlers.
 *
 * i18n: Uses useContent() hook for EN/RU bilingual support.
 */

import { ReadingProgress } from "@/components/ReadingProgress";
import { FloatingTOC } from "@/components/FloatingTOC";
import { MobileNav } from "@/components/MobileNav";
import { SummaryBar } from "@/components/SummaryBar";
import { ReviewSectionBlock } from "@/components/ReviewSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useContent } from "@/lib/useContent";
import { Scale } from "lucide-react";

export default function Home() {
  const { siteInfo, introContent, overallExperience, pullQuote, sections, ui } =
    useContent();

  return (
    <div className="min-h-screen bg-white">
      {/* Reading progress bar */}
      <ReadingProgress />

      {/* Language toggle */}
      <LanguageToggle />

      {/* Floating dot navigation — XL only */}
      <FloatingTOC />

      <main>
        <article itemScope itemType="https://schema.org/Review">
          {/* Hidden structured data attributes for SEO */}
          <meta itemProp="datePublished" content="2025-01-01" />
          <meta itemProp="dateModified" content="2026-04-12" />
          <div itemProp="itemReviewed" itemScope itemType="https://schema.org/HomeAndConstructionBusiness">
            <meta itemProp="name" content="Maestro Renovation LLC" />
            <meta itemProp="url" content="https://maestro-renovation.com" />
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <meta itemProp="streetAddress" content="27 Chatham St" />
              <meta itemProp="addressLocality" content="Lynn" />
              <meta itemProp="addressRegion" content="MA" />
              <meta itemProp="postalCode" content="01902" />
              <meta itemProp="addressCountry" content="US" />
            </div>
          </div>
          <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
            <meta itemProp="ratingValue" content="1" />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
          </div>
          <div itemProp="author" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="Verified Homeowner" />
          </div>

          {/* Hero */}
          <header className="pt-16 sm:pt-24 pb-8" id="overview">
            <div className="reading-col">
              {/* Kicker */}
              <p className="font-[var(--font-mono)] text-[0.8rem] font-medium tracking-[0.12em] text-[oklch(0.45_0.02_255)] mb-6">
                {ui.independentReview} &middot; {ui.location}
              </p>

              {/* Title — h1 is the single most important SEO element */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[oklch(0.10_0.02_255)] mb-4 leading-[1.05]" itemProp="name">
                {ui.customerReviewOf}{" "}
                <span className="italic">Maestro Renovation</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-[oklch(0.35_0.02_255)] font-light leading-relaxed mb-10">
                {siteInfo.subtitle}
              </p>

              {/* Thin rule */}
              <hr className="border-[oklch(0.91_0.005_255)] mb-8" />

              {/* Disclaimer */}
              <p className="text-base text-[oklch(0.40_0.02_255)] leading-relaxed">
                {siteInfo.disclaimer}
              </p>
            </div>
          </header>

          {/* Mobile TOC */}
          <MobileNav />

          {/* Summary stats */}
          <SummaryBar />

          {/* Legal note */}
          <div className="reading-col mb-10">
            <div className="flex items-start gap-3 px-5 py-4 bg-[oklch(0.985_0.002_255)] border border-[oklch(0.91_0.005_255)] rounded-lg">
              <Scale size={17} className="text-[oklch(0.45_0.02_255)] mt-0.5 shrink-0" aria-hidden="true" />
              <p className="text-base text-[oklch(0.35_0.02_255)] leading-relaxed">
                {siteInfo.legalNote}
              </p>
            </div>
          </div>

          {/* Introduction */}
          <section className="reading-col" aria-label="Introduction">
            {introContent.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-[1.9] text-[oklch(0.15_0.02_255)] mb-6"
                itemProp="description"
              >
                {p}
              </p>
            ))}
          </section>

          {/* Overall Experience */}
          <section className="reading-col" id="overall-experience" aria-label={ui.theOverallExperience}>
            <hr className="clean-rule" />
            <h2 className="text-4xl sm:text-5xl text-[oklch(0.05_0.02_255)] mb-8">
              {ui.theOverallExperience}
            </h2>
            {overallExperience.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-[1.9] text-[oklch(0.15_0.02_255)] mb-6"
              >
                {p}
              </p>
            ))}

            {/* Pull quote */}
            <blockquote className="my-10 pl-6 border-l-2 border-[oklch(0.35_0.03_255)]">
              <p className="text-3xl sm:text-4xl font-[var(--font-heading)] italic text-[oklch(0.10_0.02_255)] leading-snug">
                &ldquo;{pullQuote}&rdquo;
              </p>
            </blockquote>
          </section>

          {/* All documented issues — each is a semantic <section> with proper h2 */}
          <div itemProp="reviewBody">
            {sections.map((section, idx) => (
              <ReviewSectionBlock
                key={section.id}
                section={section}
                index={idx}
              />
            ))}
          </div>

          {/* Closing note */}
          <section className="reading-col" aria-label="Closing Note">
            <hr className="clean-rule" />
            <div className="px-5 py-4 bg-[oklch(0.985_0.002_255)] border border-[oklch(0.91_0.005_255)] rounded-lg mb-16">
              <p className="text-base text-[oklch(0.35_0.02_255)] leading-relaxed">
                {ui.closingNote}
              </p>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-[oklch(0.91_0.005_255)]">
        <div className="reading-col py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="text-base font-medium text-[oklch(0.15_0.02_255)]">
                {siteInfo.title}
              </p>
              <p className="text-sm text-[oklch(0.45_0.02_255)] mt-0.5">
                {ui.independentReviewFooter} &middot; {ui.notAffiliatedWith}{" "}
                {siteInfo.company}
              </p>
            </div>
            <p className="text-sm text-[oklch(0.45_0.02_255)]">
              &copy; {new Date().getFullYear()} {ui.allRightsReserved}
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
}
