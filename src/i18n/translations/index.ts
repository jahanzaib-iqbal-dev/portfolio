import { en } from "./en";
import { zh } from "./zh";
import { hi } from "./hi";
import { es } from "./es";
import { fr } from "./fr";
import { ar } from "./ar";
import { bn } from "./bn";
import { pt } from "./pt";
import { ru } from "./ru";
import { ja } from "./ja";
import { de } from "./de";
import { ko } from "./ko";
import { tr } from "./tr";
import { vi } from "./vi";
import { it } from "./it";
import { th } from "./th";
import { pl } from "./pl";
import { ms } from "./ms";
import { uk } from "./uk";
import { ro } from "./ro";
import { el } from "./el";
import { cs } from "./cs";
import { sv } from "./sv";
import { hu } from "./hu";
import { fa } from "./fa";
import { ta } from "./ta";
import { ur } from "./ur";
import { sw } from "./sw";
import { tl } from "./tl";
import { nl } from "./nl";
import { he } from "./he";

export type Locale =
  | "en" | "zh" | "hi" | "es" | "fr" | "ar" | "bn"
  | "pt" | "ru" | "ja" | "de" | "ko" | "tr"
  | "vi" | "it" | "th" | "pl" | "ms" | "uk"
  | "ro" | "el" | "cs" | "sv" | "hu" | "fa"
  | "ta" | "ur" | "sw" | "tl" | "nl" | "he";

export const localeLabels: Record<Locale, { flag: string; label: string }> = {
  en: { flag: "🇬🇧", label: "English" },
  zh: { flag: "🇨🇳", label: "中文" },
  hi: { flag: "🇮🇳", label: "हिन्दी" },
  es: { flag: "🇪🇸", label: "Español" },
  fr: { flag: "🇫🇷", label: "Français" },
  ar: { flag: "🇸🇦", label: "العربية" },
  bn: { flag: "🇧🇩", label: "বাংলা" },
  pt: { flag: "🇧🇷", label: "Português" },
  ru: { flag: "🇷🇺", label: "Русский" },
  ja: { flag: "🇯🇵", label: "日本語" },
  de: { flag: "🇩🇪", label: "Deutsch" },
  ko: { flag: "🇰🇷", label: "한국어" },
  tr: { flag: "🇹🇷", label: "Türkçe" },
  vi: { flag: "🇻🇳", label: "Tiếng Việt" },
  it: { flag: "🇮🇹", label: "Italiano" },
  th: { flag: "🇹🇭", label: "ไทย" },
  pl: { flag: "🇵🇱", label: "Polski" },
  ms: { flag: "🇲🇾", label: "Bahasa Melayu" },
  uk: { flag: "🇺🇦", label: "Українська" },
  ro: { flag: "🇷🇴", label: "Română" },
  el: { flag: "🇬🇷", label: "Ελληνικά" },
  cs: { flag: "🇨🇿", label: "Čeština" },
  sv: { flag: "🇸🇪", label: "Svenska" },
  hu: { flag: "🇭🇺", label: "Magyar" },
  fa: { flag: "🇮🇷", label: "فارسی" },
  ta: { flag: "🇱🇰", label: "தமிழ்" },
  ur: { flag: "🇵🇰", label: "اردو" },
  sw: { flag: "🇰🇪", label: "Kiswahili" },
  tl: { flag: "🇵🇭", label: "Filipino" },
  nl: { flag: "🇳🇱", label: "Nederlands" },
  he: { flag: "🇮🇱", label: "עברית" },
};

export const translations: Record<Locale, Record<string, string>> = {
  en, zh, hi, es, fr, ar, bn,
  pt, ru, ja, de, ko, tr,
  vi, it, th, pl, ms, uk,
  ro, el, cs, sv, hu, fa,
  ta, ur, sw, tl, nl, he,
};

export const locales = Object.keys(localeLabels) as Locale[];
