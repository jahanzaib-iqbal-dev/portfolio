"use client";

import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Icon,
  IconButton,
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";
import { TechMarquee } from "@/components/TechMarquee";
import { StatsCounter } from "@/components/StatsCounter";
import { useLanguage } from "@/i18n/LanguageContext";

export function HomeContent({
  projectsSlot,
  postsSlot,
}: {
  projectsSlot: React.ReactNode;
  postsSlot: React.ReactNode;
}) {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Section 1: Hero — Side by side ── */}
      <Row
        fillWidth
        gap="40"
        vertical="center"
        paddingY="40"
        s={{ direction: "column", gap: "24" }}
      >
        <Column style={{ flex: "0 0 25%" }} s={{ fillWidth: true, horizontal: "center" }}>
          <RevealFx translateY="4">
            <Column horizontal="center" gap="16">
              <Avatar src={person.avatar} size="xl" />
              <Column horizontal="center" gap="4">
                <Text variant="heading-strong-l">{person.name}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                  {t("hero.role")}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {t("hero.location")}
                </Text>
              </Column>
              <Row gap="4">
                {social.map(
                  (item) =>
                    item.link && (
                      <IconButton
                        key={item.name}
                        href={item.link}
                        icon={item.icon}
                        tooltip={item.name}
                        size="s"
                        variant="ghost"
                      />
                    ),
                )}
              </Row>
            </Column>
          </RevealFx>
        </Column>

        <Column flex={7} gap="20">
          <RevealFx translateY="4" delay={0.1} fillWidth>
            <Heading wrap="balance" variant="display-strong-l">
              {t("hero.headline")}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth>
            <Text onBackground="neutral-weak" variant="body-default-l">
              {t("hero.subline")}
            </Text>
          </RevealFx>
          <RevealFx delay={0.3}>
            <Row gap="16" wrap>
              <Button data-border="rounded" href="#built" variant="primary" size="m" arrowIcon>
                {t("hero.cta.built")}
              </Button>
              <Button
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                arrowIcon
              >
                {t("hero.cta.about")}
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Row>

      {/* ── Section 2: Currently / Now ── */}
      <RevealFx translateY="12" delay={0.5}>
        <Column
          fillWidth
          padding="l"
          radius="xl"
          border="brand-alpha-medium"
          background="brand-alpha-weak"
          gap="16"
        >
          <Row vertical="center" gap="8">
            <Icon name="refresh" size="s" onBackground="brand-strong" />
            <Text variant="heading-strong-m" onBackground="brand-strong">
              {t("now.title")}
            </Text>
          </Row>
          <Column as="ul" gap="8" paddingLeft="4">
            <Text as="li" variant="body-default-m">
              {t("now.1")}
            </Text>
            <Text as="li" variant="body-default-m">
              {t("now.2")}
            </Text>
            <Text as="li" variant="body-default-m">
              {t("now.3")}
            </Text>
          </Column>
        </Column>
      </RevealFx>

      {/* ── Section 3: Things I've Built ── */}
      <RevealFx translateY="16" delay={0.4}>
        <Column fillWidth gap="24" id="built">
          <Row fillWidth horizontal="between" vertical="end">
            <Heading as="h2" variant="display-strong-xs">
              {t("built.title")}
            </Heading>
            <Button href="/work" variant="secondary" size="s" arrowIcon data-border="rounded">
              {t("built.viewAll")}
            </Button>
          </Row>
          {projectsSlot}
        </Column>
      </RevealFx>

      {/* ── Section 4: Blog ── */}
      <RevealFx translateY="16" delay={0.4}>
        <Column fillWidth gap="24">
          <Row fillWidth horizontal="between" vertical="end">
            <Heading as="h2" variant="display-strong-xs">
              {t("blog.title")}
            </Heading>
            <Button href="/blog" variant="secondary" size="s" arrowIcon data-border="rounded">
              {t("blog.allPosts")}
            </Button>
          </Row>
          {postsSlot}
        </Column>
      </RevealFx>

      {/* ── Section 5: Stats ── */}
      <StatsCounter />

      {/* ── Section 6: Tools ── */}
      <RevealFx translateY="16" delay={0.4} fillWidth>
        <TechMarquee />
      </RevealFx>
    </>
  );
}
