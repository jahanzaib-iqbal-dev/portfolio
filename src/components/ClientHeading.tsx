"use client";

import { Heading } from "@once-ui-system/core";
import { useLanguage } from "@/i18n/LanguageContext";

interface ClientHeadingProps {
  translationKey: string;
  id?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  marginBottom?: any;
  align?: "left" | "center" | "right";
}

export function ClientHeading({
  translationKey,
  id,
  as = "h2",
  variant = "display-strong-s",
  marginBottom,
  align,
}: ClientHeadingProps) {
  const { t } = useLanguage();
  return (
    <Heading as={as} id={id} variant={variant} marginBottom={marginBottom} align={align}>
      {t(translationKey)}
    </Heading>
  );
}
