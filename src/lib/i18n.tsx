/*
 * i18n.tsx — Lightweight locale context for EN/RU language switching.
 * Uses URL hash (#/ru) for routing to avoid needing react-router.
 * Persists language preference in localStorage.
 */

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

export type Locale = "en" | "ru";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  setLocale: () => {},
});

export function useLocale() {
  return useContext(I18nContext);
}

function getInitialLocale(): Locale {
  // Check URL path first
  if (window.location.pathname.startsWith("/ru")) return "ru";
  // Then check hash
  if (window.location.hash === "#/ru") return "ru";
  // Then check localStorage
  const stored = localStorage.getItem("locale");
  if (stored === "ru") return "ru";
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    // Update the URL hash without reload
    if (newLocale === "ru") {
      window.history.replaceState(null, "", "/ru");
    } else {
      window.history.replaceState(null, "", "/");
    }
    // Update the html lang attribute
    document.documentElement.lang = newLocale;
  }, []);

  // Set initial lang attribute
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  // Listen for popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const newLocale = window.location.pathname.startsWith("/ru") ? "ru" : "en";
      setLocaleState(newLocale);
      document.documentElement.lang = newLocale;
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <I18nContext.Provider value={{ locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}
