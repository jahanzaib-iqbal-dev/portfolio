"use client";

import { Row, Column, IconButton, Button, Text, Heading } from "@once-ui-system/core";
import { person, social } from "@/resources";
import { useLanguage } from "@/i18n/LanguageContext";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <Column as="footer" fillWidth padding="8" horizontal="center">
      {/* CTA Banner */}
      <Column
        maxWidth="m"
        fillWidth
        radius="xl"
        background="neutral-alpha-weak"
        border="neutral-alpha-weak"
        padding="xl"
        marginBottom="20"
      >
        <Row
          fillWidth
          horizontal="between"
          gap="40"
          vertical="center"
          s={{ direction: "column", gap: "32" }}
        >
          {/* Left — Message */}
          <Column gap="16" flex={1}>
            <Heading as="h2" variant="heading-strong-xl">
              {t("footer.title")}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {t("footer.desc.1")}
              <br />
              {t("footer.desc.2")}
            </Text>
            <Row gap="16" paddingTop="8" wrap vertical="center" fillWidth horizontal="between">
              <Row gap="16" wrap vertical="center">
                <Button href="/contact" variant="primary" size="m" data-border="rounded" arrowIcon>
                  {t("footer.cta.talk")}
                </Button>
                <Button href="/team" variant="secondary" size="m" data-border="rounded" arrowIcon>
                  {t("footer.cta.team")}
                </Button>
              </Row>
              <Row gap="8">
                {social.map(
                  (item) =>
                    item.link && (
                      <IconButton
                        key={item.name}
                        href={item.link}
                        icon={item.icon}
                        tooltip={item.name}
                        size="m"
                        variant="secondary"
                      />
                    ),
                )}
              </Row>
            </Row>
          </Column>
        </Row>
      </Column>

      {/* Bottom Bar */}
      <Row
        className={styles.mobile}
        maxWidth="m"
        fillWidth
        paddingY="16"
        paddingX="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
          gap: "8",
        }}
      >
        <Text variant="body-default-xs" onBackground="neutral-weak">
          {person.name}
        </Text>
        <Text variant="body-default-xs" onBackground="neutral-weak">
          © Copyright {currentYear}
        </Text>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Column>
  );
};
