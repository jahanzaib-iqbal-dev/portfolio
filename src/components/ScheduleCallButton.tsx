"use client";

import { Icon, Row, IconButton } from "@once-ui-system/core";
import { useLanguage } from "@/i18n/LanguageContext";

export function ScheduleCallButton({ href }: { href: string }) {
  const { t } = useLanguage();
  return (
    <Row
      fitWidth
      border="brand-alpha-medium"
      background="brand-alpha-weak"
      radius="full"
      padding="4"
      gap="8"
      vertical="center"
      style={{
        backdropFilter: "blur(var(--static-space-1))",
      }}
    >
      <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
      <Row paddingX="8">{t("about.schedule")}</Row>
      <IconButton
        href={href}
        data-border="rounded"
        variant="secondary"
        icon="chevronRight"
      />
    </Row>
  );
}
