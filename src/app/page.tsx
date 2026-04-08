import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Line,
  Icon,
  IconButton,
  Tag,
} from "@once-ui-system/core";
import { home, about, person, social, baseURL } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { TechMarquee } from "@/components/TechMarquee";
import { StatsCounter } from "@/components/StatsCounter";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="64" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ── Section 1: Hero — Side by side ── */}
      <Row
        fillWidth
        gap="40"
        vertical="center"
        paddingY="40"
        s={{ direction: "column", gap: "24" }}
      >
        {/* Left — Avatar + Details (30%) */}
        <RevealFx translateY="4" style={{ flex: "0 0 25%" }}>
          <Column horizontal="center" gap="16">
            <Avatar src={person.avatar} size="xl" />
            <Column horizontal="center" gap="4">
              <Text variant="heading-strong-l">{person.name}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Software Engineer &middot; Co-founder
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Lahore, Pakistan
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

        {/* Right — Headline + Bio + CTAs (70%) */}
        <Column flex={7} gap="20">
          <RevealFx translateY="4" delay={0.1} fillWidth>
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth>
            <Text onBackground="neutral-weak" variant="body-default-l">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={0.3}>
            <Row gap="16" wrap>
              <Button data-border="rounded" href="#built" variant="primary" size="m" arrowIcon>
                See what I&apos;ve built
              </Button>
              <Button
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                arrowIcon
              >
                More about me
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
              What I&apos;m focused on now
            </Text>
            <Text variant="body-default-xs" onBackground="neutral-weak">
              — April 2026
            </Text>
          </Row>
          <Column as="ul" gap="8" paddingLeft="4">
            <Text as="li" variant="body-default-m">
              Scaling AI agent tooling and MCP server development at Global Software Consulting
            </Text>
            <Text as="li" variant="body-default-m">
              Building open-source developer tools — project scaffolding skills for Claude Code
            </Text>
            <Text as="li" variant="body-default-m">
              Writing about engineering leadership and taking products from zero to $1M+ ARR
            </Text>
          </Column>
        </Column>
      </RevealFx>

      {/* ── Section 3: Things I've Built ── */}
      <RevealFx translateY="16" delay={0.4}>
        <Column fillWidth gap="24" id="built">
          <Row fillWidth horizontal="between" vertical="end">
            <Heading as="h2" variant="display-strong-xs">
              Things I&apos;ve built
            </Heading>
            <Button href="/work" variant="secondary" size="s" arrowIcon data-border="rounded">
              View All
            </Button>
          </Row>
          <Projects range={[1, 1]} />
        </Column>
      </RevealFx>

      {/* ── Section 4: Writing ── */}
      <RevealFx translateY="16" delay={0.4}>
        <Column fillWidth gap="24">
          <Row fillWidth horizontal="between" vertical="end">
            <Heading as="h2" variant="display-strong-xs">
              Blog
            </Heading>
            <Button href="/blog" variant="secondary" size="s" arrowIcon data-border="rounded">
              All Posts
            </Button>
          </Row>
          <Posts range={[1, 2]} columns="2" />
        </Column>
      </RevealFx>

      {/* ── Section 5: By the Numbers — Animated ── */}
      <StatsCounter />

      {/* ── Section 6: Tools I Build With — Marquee ── */}
      <RevealFx translateY="16" delay={0.4} fillWidth>
        <TechMarquee />
      </RevealFx>
    </Column>
  );
}
