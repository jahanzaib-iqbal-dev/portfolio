"use client";

import { Button, Column, Heading, Icon, Tag, Text, Meta, Row } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const services = {
  path: "/services",
  title: "Services – Jahanzaib Iqbal",
  description: "Software development services by Jahanzaib Iqbal and Global Software Consulting.",
};

const offerings = [
  {
    titleKey: "services.offer1.title",
    icon: "globe" as const,
    descKey: "services.offer1.desc",
    bestForKey: "services.offer1.bestfor",
    tags: ["Architecture", "DevOps", "Full-Stack", "Cloud"],
  },
  {
    titleKey: "services.offer2.title",
    icon: "rocket" as const,
    descKey: "services.offer2.desc",
    bestForKey: "services.offer2.bestfor",
    tags: ["Prototyping", "Product Strategy", "Launch"],
  },
  {
    titleKey: "services.offer3.title",
    icon: "arrowUpRight" as const,
    descKey: "services.offer3.desc",
    bestForKey: "services.offer3.bestfor",
    tags: ["Performance", "Microservices", "Infrastructure"],
  },
  {
    titleKey: "services.offer4.title",
    icon: "person" as const,
    descKey: "services.offer4.desc",
    bestForKey: "services.offer4.bestfor",
    tags: ["React", "Node.js", "Java", "DevOps"],
  },
  {
    titleKey: "services.offer5.title",
    icon: "grid" as const,
    descKey: "services.offer5.desc",
    bestForKey: "services.offer5.bestfor",
    tags: ["LLM", "RAG", "Agents", "Automation"],
  },
  {
    titleKey: "services.offer6.title",
    icon: "figma" as const,
    descKey: "services.offer6.desc",
    bestForKey: "services.offer6.bestfor",
    tags: ["Figma", "Design Systems", "Prototyping", "Research"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 14 },
  },
};

export default function Services() {
  const { t } = useLanguage();
  return (
    <Column maxWidth="m">
      <Column fillWidth>
        {/* Header */}
        <Column fillWidth minHeight="160" vertical="center" marginBottom="32">
          <Heading variant="display-strong-xl">{t("services.title")}</Heading>
          <Text variant="display-default-xs" onBackground="neutral-weak" marginTop="8">
            {t("services.subtitle")}
          </Text>
        </Column>

        {/* Service Cards */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "var(--static-space-20)",
            width: "100%",
            marginBottom: "var(--static-space-40)",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {offerings.map((offering, index) => (
            <motion.div
              key={`${offering.titleKey}-${index}`}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              style={{
                borderRadius: "var(--radius-l)",
                overflow: "hidden",
              }}
            >
              <Column
                fillWidth
                padding="l"
                border="neutral-alpha-weak"
                radius="l"
                gap="m"
                background="neutral-alpha-weak"
                style={{ height: "100%" }}
              >
                <Row vertical="center" gap="12">
                  <Column
                    horizontal="center"
                    vertical="center"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      flexShrink: 0,
                    }}
                    background="brand-alpha-weak"
                    border="brand-alpha-medium"
                  >
                    <Icon name={offering.icon} onBackground="brand-strong" size="s" />
                  </Column>
                  <Heading as="h2" variant="heading-strong-l">
                    {t(offering.titleKey)}
                  </Heading>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {t(offering.descKey)}
                </Text>
                <Row vertical="center" gap="8" wrap>
                  <Text variant="body-default-s" onBackground="brand-strong">
                    {t("services.bestfor")}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {t(offering.bestForKey)}
                  </Text>
                </Row>
                {offering.tags.length > 0 && (
                  <Row wrap gap="8" style={{ marginTop: "auto" }}>
                    {offering.tags.map((tag, tagIndex) => (
                      <Tag key={`${offering.titleKey}-tag-${tagIndex}`} size="l">
                        {tag}
                      </Tag>
                    ))}
                  </Row>
                )}
              </Column>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.2 }}
        >
          <Column
            fillWidth
            horizontal="center"
            align="center"
            padding="xl"
            radius="xl"
            border="brand-alpha-medium"
            background="brand-alpha-weak"
            gap="m"
            marginBottom="xl"
          >
            <Heading as="h2" variant="display-strong-s" align="center" wrap="balance">
              {t("services.cta.title")}
            </Heading>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
              wrap="balance"
            >
              {t("services.cta.desc")}
            </Text>
            <Row paddingTop="12">
              <Button
                href={`mailto:${person.email}`}
                label={t("services.cta.button")}
                variant="primary"
                size="l"
                prefixIcon="email"
                data-border="rounded"
              />
            </Row>
          </Column>
        </motion.div>
      </Column>
    </Column>
  );
}
