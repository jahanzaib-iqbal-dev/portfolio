"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { translations, locales, Locale } from "./translations/index";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // Priority: URL param > localStorage > default (en)
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang") as Locale;

    if (urlLang && locales.includes(urlLang)) {
      setLocaleState(urlLang);
      localStorage.setItem("locale", urlLang);
    } else {
      const saved = localStorage.getItem("locale") as Locale;
      if (saved && locales.includes(saved)) {
        setLocaleState(saved);
      }
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);

    // Update URL without reload
    const url = new URL(window.location.href);
    if (newLocale === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", newLocale);
    }
    window.history.replaceState({}, "", url.toString());
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[locale]?.[key] || translations["en"][key] || key;
    },
    [locale],
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
