"use client";

import { Button, Column, Heading, Row, Text, Tag } from "@once-ui-system/core";
import { StatsCounter } from "@/components/StatsCounter";
import { LazyImage } from "@/components/LazyLoad";
import { useLanguage } from "@/i18n/LanguageContext";

const capabilityKeys = [
  {
    titleKey: "team.cap.product.title",
    descKey: "team.cap.product.desc",
    tags: ["React", "Next.js", "React Native", "Node.js", "NestJS"],
  },
  {
    titleKey: "team.cap.ai.title",
    descKey: "team.cap.ai.desc",
    tags: ["Claude", "OpenAI", "Gemini", "LangChain", "MCP"],
  },
  {
    titleKey: "team.cap.cloud.title",
    descKey: "team.cap.cloud.desc",
    tags: ["AWS", "Docker", "GitHub Actions", "PostgreSQL", "MongoDB"],
  },
  {
    titleKey: "team.cap.uiux.title",
    descKey: "team.cap.uiux.desc",
    tags: ["Figma", "Design Systems", "Prototyping", "Responsive"],
  },
];

const industries = [
  "HealthTech",
  "E-Commerce",
  "FinTech",
  "SaaS",
  "Wellness",
  "Real Estate",
  "Food & Restaurant",
  "Local SEO",
  "AI / Automation",
];

const offices = ["Pakistan (HQ) — Lahore", "Netherlands", "Canada", "UK", "Australia"];

export default function TeamContent() {
  const { t } = useLanguage();
  return (
    <>
      {/* Header */}
      <Column fillWidth vertical="center" marginBottom="40">
        <Heading variant="display-strong-xl">{t("team.title")}</Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak" marginTop="m">
          {t("team.subtitle")}
        </Text>
      </Column>

      {/* Team Photo */}
      <Column fillWidth radius="xl" marginBottom="40">
        <LazyImage
          src="/images/team.jpg"
          alt="Global Software Consulting Team"
          sizes="(max-width: 768px) 100vw, 960px"
          aspectRatio="16 / 9"
        />
      </Column>

      {/* Stats */}
      <Column marginBottom="40">
        <StatsCounter
          items={[
            {
              value: 2016,
              prefix: "",
              suffix: "",
              label: t("team.stat.founded.label"),
              sublabel: t("team.stat.founded.sublabel"),
              theme: "brand",
            },
            {
              value: 40,
              prefix: "",
              suffix: "+",
              label: t("team.stat.engineers.label"),
              sublabel: t("team.stat.engineers.sublabel"),
              theme: "dark",
            },
            {
              value: 5,
              prefix: "",
              suffix: "",
              label: t("team.stat.countries.label"),
              sublabel: t("team.stat.countries.sublabel"),
              theme: "dark",
            },
            {
              value: 155,
              prefix: "",
              suffix: "+",
              label: t("team.stat.projects.label"),
              sublabel: t("team.stat.projects.sublabel"),
              theme: "light",
            },
          ]}
          useTranslationKeys={false}
        />
      </Column>

      {/* Mission */}
      <Column
        fillWidth
        padding="xl"
        radius="xl"
        border="brand-alpha-medium"
        background="brand-alpha-weak"
        marginBottom="40"
        gap="12"
      >
        <Heading as="h2" variant="heading-strong-xl">
          {t("team.who")}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {t("team.who.desc")}
        </Text>
      </Column>

      {/* Capabilities */}
      <Heading as="h2" variant="display-strong-s" marginBottom="20">
        {t("team.build")}
      </Heading>
      <Row
        fillWidth
        marginBottom="40"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "var(--static-space-16)",
        }}
      >
        {capabilityKeys.map((cap) => (
          <Column
            key={cap.titleKey}
            padding="24"
            radius="l"
            border="neutral-alpha-weak"
            background="neutral-alpha-weak"
            gap="12"
          >
            <Text variant="heading-strong-l">{t(cap.titleKey)}</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {t(cap.descKey)}
            </Text>
            <Row wrap gap="8">
              {cap.tags.map((tag) => (
                <Tag key={tag} size="l">
                  {tag}
                </Tag>
              ))}
            </Row>
          </Column>
        ))}
      </Row>

      {/* Industries */}
      <Heading as="h2" variant="display-strong-s" marginBottom="20">
        {t("team.industries")}
      </Heading>
      <Row wrap gap="8" marginBottom="40">
        {industries.map((industry) => (
          <Tag key={industry} size="l" variant="brand">
            {industry}
          </Tag>
        ))}
      </Row>

      {/* Offices */}
      <Heading as="h2" variant="display-strong-s" marginBottom="20">
        {t("team.offices")}
      </Heading>
      <Row wrap gap="8" marginBottom="40">
        {offices.map((office) => (
          <Tag key={office} size="l" prefixIcon="globe">
            {office}
          </Tag>
        ))}
      </Row>

      {/* CTA */}
      <Column
        fillWidth
        horizontal="center"
        align="center"
        padding="xl"
        radius="xl"
        border="brand-alpha-medium"
        background="brand-alpha-weak"
        gap="16"
        marginBottom="xl"
      >
        <Heading as="h2" variant="display-strong-s" align="center" wrap="balance">
          {t("team.cta.title")}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          {t("team.cta.desc")}
        </Text>
        <Row paddingTop="8" gap="16" wrap horizontal="center">
          <Button
            href="mailto:jahanzaib@gsoftconsulting.com"
            variant="primary"
            size="m"
            prefixIcon="email"
            label={t("team.cta.contact")}
            data-border="rounded"
          />
          <Button
            href="https://gsoftconsulting.com"
            variant="secondary"
            size="m"
            label={t("team.cta.website")}
            data-border="rounded"
            arrowIcon
          />
        </Row>
      </Column>
    </>
  );
}
