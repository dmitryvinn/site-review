/*
 * ScrollToTop — Clean Deposition design.
 * Minimal rounded button, subtle border.
 */

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useContent } from "@/lib/useContent";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { ui } = useContent();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-[oklch(0.88_0.005_255)] text-[oklch(0.35_0.03_255)] hover:bg-[oklch(0.96_0.003_255)] hover:border-[oklch(0.70_0.01_255)] transition-all shadow-sm"
      aria-label={ui.scrollToTop}
    >
      <ArrowUp size={14} />
    </button>
  );
}
