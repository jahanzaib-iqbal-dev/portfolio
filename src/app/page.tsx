import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Icon,
  Tag,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";

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
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
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

      {/* Hero Section */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="32">
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l" align="center">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
              align="center"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center">
            <Row gap="16" wrap horizontal="center">
              <Button
                id="services"
                data-border="rounded"
                href="/services"
                variant="primary"
                size="m"
                weight="default"
                arrowIcon
              >
                Work With Us
              </Button>
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  About Me
                </Row>
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>

      {/* Metrics Strip */}
      <RevealFx translateY="12" delay={0.6}>
        <Row fillWidth horizontal="center" gap="40" paddingY="32" wrap s={{ gap: "24" }}>
          <Column horizontal="center" gap="4">
            <Heading variant="display-strong-l" onBackground="brand-strong">
              Since 2016
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Building Software
            </Text>
          </Column>
          <Column horizontal="center" gap="4">
            <Heading variant="display-strong-l" onBackground="brand-strong">
              40+
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Engineers
            </Text>
          </Column>
          <Column horizontal="center" gap="4">
            <Heading variant="display-strong-l" onBackground="brand-strong">
              5
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Countries
            </Text>
          </Column>
          <Column horizontal="center" gap="4">
            <Heading variant="display-strong-l" onBackground="brand-strong">
              155+
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Projects Delivered
            </Text>
          </Column>
        </Row>
      </RevealFx>

      {/* Services Preview */}
      <RevealFx translateY="16" delay={0.8}>
        <Column fillWidth gap="24">
          <Line />
          <Column fillWidth gap="24">
            <Column gap="12">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                What we do
              </Heading>
              <Text onBackground="neutral-weak" variant="body-default-m">
                From first idea to funded product, we stay with you through every stage.
              </Text>
            </Column>
            <Row
              fillWidth
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "var(--static-space-12)",
              }}
              s={{ style: { gridTemplateColumns: "1fr" } }}
            >
              <Column
                border="neutral-alpha-weak"
                radius="l"
                padding="24"
                gap="12"
                background="neutral-alpha-weak"
              >
                <Icon name="rocket" size="l" onBackground="brand-strong" />
                <Text variant="heading-strong-m">MVP Development</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  From idea to launch-ready product. Production-grade from day one.
                </Text>
              </Column>
              <Column
                border="neutral-alpha-weak"
                radius="l"
                padding="24"
                gap="12"
                background="neutral-alpha-weak"
              >
                <Icon name="arrowUpRight" size="l" onBackground="brand-strong" />
                <Text variant="heading-strong-m">Product Scaling</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Re-architect and scale your product for thousands of users.
                </Text>
              </Column>
              <Column
                border="neutral-alpha-weak"
                radius="l"
                padding="24"
                gap="12"
                background="neutral-alpha-weak"
              >
                <Icon name="person" size="l" onBackground="brand-strong" />
                <Text variant="heading-strong-m">Team Augmentation</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  Senior engineers embedded in your team, your tools, your sprints.
                </Text>
              </Column>
              <Column
                border="neutral-alpha-weak"
                radius="l"
                padding="24"
                gap="12"
                background="neutral-alpha-weak"
              >
                <Icon name="grid" size="l" onBackground="brand-strong" />
                <Text variant="heading-strong-m">AI & Automation</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  AI agents, MCP servers, RAG pipelines, and LLM integration.
                </Text>
              </Column>
            </Row>
            <Button href="/services" variant="secondary" size="s" arrowIcon data-border="rounded">
              View All Services
            </Button>
          </Column>
          <Line />
        </Column>
      </RevealFx>

      {/* Featured Work */}
      <RevealFx translateY="16" delay={0.4}>
        <Column fillWidth gap="24">
          <Row fillWidth horizontal="between" vertical="end">
            <Heading as="h2" variant="display-strong-xs">
              Featured Work
            </Heading>
            <Button href="/work" variant="secondary" size="s" arrowIcon data-border="rounded">
              View All
            </Button>
          </Row>
          <Projects range={[1, 1]} />
        </Column>
      </RevealFx>

      {/* Industries */}
      <RevealFx translateY="16" delay={0.4}>
        <Column fillWidth gap="20" horizontal="center" paddingY="20">
          <Heading as="h2" variant="display-strong-xs">
            Industries We Serve
          </Heading>
          <Row wrap gap="8" horizontal="center" paddingTop="12">
            <Tag size="l">HealthTech</Tag>
            <Tag size="l">E-Commerce</Tag>
            <Tag size="l">FinTech</Tag>
            <Tag size="l">SaaS</Tag>
            <Tag size="l">Wellness</Tag>
            <Tag size="l">Real Estate</Tag>
            <Tag size="l">Food & Restaurant</Tag>
            <Tag size="l">Local SEO</Tag>
            <Tag size="l">AI / Automation</Tag>
          </Row>
        </Column>
      </RevealFx>

      {/* Tech Stack */}
      <RevealFx translateY="16" delay={0.4}>
        <Column fillWidth gap="20" horizontal="center" paddingY="20">
          <Heading as="h2" variant="display-strong-xs">
            Tech Stack
          </Heading>
          <Row wrap gap="8" horizontal="center" paddingTop="12">
            <Tag size="l" variant="brand">
              React
            </Tag>
            <Tag size="l" variant="brand">
              Next.js
            </Tag>
            <Tag size="l" variant="brand">
              React Native
            </Tag>
            <Tag size="l" variant="brand">
              TypeScript
            </Tag>
            <Tag size="l" variant="brand">
              Node.js
            </Tag>
            <Tag size="l" variant="brand">
              NestJS
            </Tag>
            <Tag size="l" variant="brand">
              PostgreSQL
            </Tag>
            <Tag size="l" variant="brand">
              MongoDB
            </Tag>
            <Tag size="l" variant="brand">
              AWS
            </Tag>
            <Tag size="l" variant="brand">
              Docker
            </Tag>
            <Tag size="l" variant="brand">
              GraphQL
            </Tag>
            <Tag size="l" variant="brand">
              Redis
            </Tag>
          </Row>
        </Column>
      </RevealFx>

      {/* CTA */}
      <RevealFx translateY="16" delay={0.4}>
        <Column
          fillWidth
          horizontal="center"
          align="center"
          gap="20"
          padding="xl"
          border="brand-alpha-medium"
          radius="xl"
          background="brand-alpha-weak"
        >
          <Heading as="h2" variant="display-strong-s" wrap="balance" align="center">
            Ready to build your next product?
          </Heading>
          <Text onBackground="neutral-weak" variant="body-default-l" wrap="balance" align="center">
            Let&apos;s talk about how we can help you ship faster.
          </Text>
          <Row gap="16" paddingTop="12" wrap horizontal="center">
            <Button
              href="mailto:jahanzaib@gsoftconsulting.com"
              variant="primary"
              size="m"
              data-border="rounded"
            >
              Get In Touch
            </Button>
            <Button href="/services" variant="secondary" size="m" data-border="rounded" arrowIcon>
              Our Services
            </Button>
          </Row>
        </Column>
      </RevealFx>

      <Mailchimp />
    </Column>
  );
}
