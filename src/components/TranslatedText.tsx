"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export const T = ({ k, fallback }: { k: string; fallback?: string }) => {
  const { t } = useLanguage();
  const result = t(k);
  return <>{result === k && fallback ? fallback : result}</>;
};
