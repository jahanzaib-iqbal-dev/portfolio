"use client";

import { Button, Column, Heading, Icon, Row, SmartLink, Text } from "@once-ui-system/core";
import { person } from "@/resources";
import { LazyIframe } from "@/components/LazyLoad";
import { useLanguage } from "@/i18n/LanguageContext";

const contactLinks = (t: (key: string) => string) => [
  {
    icon: "email",
    label: "Email",
    value: "jahanzaib@gsoftconsulting.com",
    href: "mailto:jahanzaib@gsoftconsulting.com",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: t("contact.linkedin"),
    href: "https://www.linkedin.com/in/jahanzaib-iqbal-49a42b164/",
  },
  {
    icon: "github",
    label: "GitHub",
    value: t("contact.github"),
    href: "https://github.com/jahanzaib-iqbal-dev",
  },
];

export default function ContactContent() {
  const { t } = useLanguage();
  const links = contactLinks(t);
  return (
    <>
      {/* Header */}
      <Column fillWidth vertical="center" marginBottom="40">
        <Heading variant="display-strong-xl">{t("contact.title")}</Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak" marginTop="m">
          {t("contact.subtitle")}
        </Text>
      </Column>

      {/* Calendly — Full Width */}
      <Column
        fillWidth
        radius="l"
        border="neutral-alpha-weak"
        marginBottom="32"
        style={{ overflow: "hidden" }}
      >
        <LazyIframe
          src="https://calendly.com/jahanzaib-gsoftconsulting/30min?hide_gdpr_banner=1"
          height={700}
          title="Schedule a meeting with Jahanzaib Iqbal"
        />
      </Column>

      {/* Contact Links — Horizontal Grid */}
      <Heading as="h2" variant="heading-strong-xl" marginBottom="16">
        {t("contact.reach")}
      </Heading>
      <Row
        fillWidth
        marginBottom="xl"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
          gap: "var(--static-space-12)",
        }}
      >
        {links.map((method) => (
          <SmartLink
            key={method.label}
            href={method.href}
            style={{ textDecoration: "none", display: "flex", height: "100%", width: "100%" }}
          >
            <Column
              fillWidth
              horizontal="center"
              align="center"
              gap="12"
              padding="24"
              radius="l"
              border="neutral-alpha-weak"
              background="neutral-alpha-weak"
              style={{ height: "100%" }}
            >
              <Icon name={method.icon} size="l" onBackground="brand-strong" />
              <Text variant="heading-strong-m">{method.label}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {method.value}
              </Text>
            </Column>
          </SmartLink>
        ))}
      </Row>
    </>
  );
}
