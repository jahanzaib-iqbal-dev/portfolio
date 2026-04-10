"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { localeLabels, locales, Locale } from "@/i18n/translations/index";
import styles from "./LanguageToggle.module.scss";

export const LanguageToggle = () => {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className={styles.wrapper}>
      <button
        className={styles.trigger}
        onClick={() => setOpen(!open)}
        aria-label="Select language"
      >
        <span className={styles.flag}>{localeLabels[locale].flag}</span>
        <span className={styles.code}>{locale.toUpperCase()}</span>
      </button>
      {open && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownInner}>
            {locales.map((l) => (
              <button
                key={l}
                className={`${styles.option} ${l === locale ? styles.active : ""}`}
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
              >
                <span className={styles.flag}>{localeLabels[l].flag}</span>
                <span className={styles.label}>{localeLabels[l].label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
