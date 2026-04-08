import { Row, Column, IconButton, Button, Text, Heading } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              I&apos;m always open to conversations
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Whether it&apos;s about engineering, building products,
              <br />
              scaling teams, or just talking shop — I&apos;d love to hear from you.
            </Text>
            <Row gap="16" paddingTop="8" wrap vertical="center" fillWidth horizontal="between">
              <Row gap="16" wrap vertical="center">
                <Button href="/contact" variant="primary" size="m" data-border="rounded" arrowIcon>
                  Let&apos;s Talk
                </Button>
                <Button href="/team" variant="secondary" size="m" data-border="rounded" arrowIcon>
                  Looking to hire my team?
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
