import {
  Button,
  Column,
  Heading,
  Icon,
  Row,
  Text,
  Tag,
  Media,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { StatsCounter } from "@/components/StatsCounter";

export async function generateMetadata() {
  return Meta.generate({
    title: "Team – Global Software Consulting",
    description:
      "Meet the team behind Global Software Consulting. 40+ engineers across 5 countries building world-class software since 2016.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Our Team")}`,
    path: "/team",
  });
}

const stats = [
  { value: "2016", label: "Founded" },
  { value: "40+", label: "Engineers" },
  { value: "5", label: "Countries" },
  { value: "155+", label: "Projects" },
];

const capabilities = [
  {
    title: "Product Engineering",
    description: "Full-stack web and mobile apps with React, Next.js, React Native, and Node.js.",
    tags: ["React", "Next.js", "React Native", "Node.js", "NestJS"],
  },
  {
    title: "AI & Automation",
    description: "AI agents, MCP servers, RAG pipelines, and LLM integration.",
    tags: ["Claude", "OpenAI", "Gemini", "LangChain", "MCP"],
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable infrastructure on AWS, GCP, and Azure with CI/CD pipelines.",
    tags: ["AWS", "Docker", "GitHub Actions", "PostgreSQL", "MongoDB"],
  },
  {
    title: "UI/UX Design",
    description: "User research, wireframing, prototyping, and design systems in Figma.",
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

export default function Team() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Team – Global Software Consulting"
        description="Meet the team behind Global Software Consulting."
        path="/team"
        image={`/api/og/generate?title=${encodeURIComponent("Our Team")}`}
        author={{
          name: person.name,
          url: `${baseURL}/team`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Header */}
      <Column fillWidth vertical="center" marginBottom="40">
        <Heading variant="display-strong-xl">Global Software Consulting</Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak" marginTop="m">
          Engineering, AI & Product Development — Since 2016
        </Text>
      </Column>

      {/* Team Photo */}
      <Column fillWidth radius="xl" marginBottom="40" style={{ overflow: "hidden" }}>
        <Media
          src="/images/team.jpg"
          alt="Global Software Consulting Team"
          sizes="(max-width: 768px) 100vw, 960px"
          aspectRatio="16 / 9"
          radius="xl"
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
              label: "Founded",
              sublabel: "in Lahore, Pakistan",
              theme: "brand",
            },
            {
              value: 40,
              prefix: "",
              suffix: "+",
              label: "Engineers",
              sublabel: "across the globe",
              theme: "dark",
            },
            {
              value: 5,
              prefix: "",
              suffix: "",
              label: "Countries",
              sublabel: "Pakistan · NL · CA · UK · AU",
              theme: "dark",
            },
            {
              value: 155,
              prefix: "",
              suffix: "+",
              label: "Projects",
              sublabel: "delivered",
              theme: "light",
            },
          ]}
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
          Who We Are
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          We&apos;re a product engineering company that builds, ships, and scales software for
          startups and enterprises. We don&apos;t just write code — we become your long-term
          technology partner. From first idea to funded product, we stay with you through every
          stage.
        </Text>
      </Column>

      {/* Capabilities */}
      <Heading as="h2" variant="display-strong-s" marginBottom="20">
        What We Build
      </Heading>
      <Row
        fillWidth
        marginBottom="40"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--static-space-16)",
        }}
        s={{ style: { gridTemplateColumns: "1fr" } }}
      >
        {capabilities.map((cap) => (
          <Column
            key={cap.title}
            padding="24"
            radius="l"
            border="neutral-alpha-weak"
            background="neutral-alpha-weak"
            gap="12"
          >
            <Text variant="heading-strong-l">{cap.title}</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {cap.description}
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
        Industries We Serve
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
        Where We Are
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
          Want to join our team?
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
          We&apos;re always looking for talented engineers. Remote-friendly, growth-focused.
        </Text>
        <Row paddingTop="8" gap="16" wrap horizontal="center">
          <Button
            href="mailto:jahanzaib@gsoftconsulting.com"
            variant="primary"
            size="m"
            prefixIcon="email"
            label="Get in Touch"
            data-border="rounded"
          />
          <Button
            href="https://gsoftconsulting.com"
            variant="secondary"
            size="m"
            label="Visit GSoft Website"
            data-border="rounded"
            arrowIcon
          />
        </Row>
      </Column>
    </Column>
  );
}
