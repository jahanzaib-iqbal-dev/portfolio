import { Button, Column, Heading, Icon, Tag, Text, Meta, Schema, Row } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

const services = {
  path: "/services",
  title: "Services – Jahanzaib Iqbal",
  description: "Software development services by Jahanzaib Iqbal and Global Software Consulting.",
};

const offerings = [
  {
    title: "Your IT Partner",
    icon: "globe" as const,
    description:
      "We become your dedicated tech team. You focus on the business, we handle everything from architecture to deployment.",
    bestFor: "Startups without a CTO or in-house dev team.",
    tags: ["Architecture", "DevOps", "Full-Stack", "Cloud"],
  },
  {
    title: "MVP Development",
    icon: "rocket" as const,
    description:
      "From idea validation to launch-ready product. We build MVPs that are production-grade from day one — no throwaway code.",
    bestFor: "Founders who need to ship fast and raise funding.",
    tags: ["Prototyping", "Product Strategy", "Launch"],
  },
  {
    title: "Product Scaling",
    icon: "arrowUpRight" as const,
    description:
      "Take your proven MVP to the next level. We re-architect, optimize, and scale your product for thousands of users.",
    bestFor: "Startups post-funding that need to handle growth.",
    tags: ["Performance", "Microservices", "Infrastructure"],
  },
  {
    title: "Team Augmentation",
    icon: "person" as const,
    description:
      "Senior engineers embedded in your existing team. They work in your tools, your sprints, your codebase.",
    bestFor: "Scaling fast, filling skill gaps, meeting deadlines.",
    tags: ["React", "Node.js", "Java", "DevOps"],
  },
  {
    title: "AI & Intelligent Automation",
    icon: "grid" as const,
    description:
      "AI agent development, MCP servers, RAG pipelines, and LLM integration using Claude, OpenAI, and Gemini.",
    bestFor: "Companies looking to integrate AI into their products.",
    tags: ["LLM", "RAG", "Agents", "Automation"],
  },
  {
    title: "UI/UX Design",
    icon: "figma" as const,
    description:
      "User research, wireframing, high-fidelity prototyping in Figma, design systems, and responsive design.",
    bestFor: "Products that need a polished, user-centered interface.",
    tags: ["Figma", "Design Systems", "Prototyping", "Research"],
  },
];

const process = [
  { step: "Discovery", description: "Understand your goals, constraints, and users." },
  { step: "Design", description: "Architecture, wireframes, and technical planning." },
  { step: "Build", description: "Iterative development with weekly demos." },
  { step: "Launch", description: "Deploy, monitor, and go live with confidence." },
  { step: "Support", description: "Ongoing maintenance, optimization, and scaling." },
];

export async function generateMetadata() {
  return Meta.generate({
    title: services.title,
    description: services.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(services.title)}`,
    path: services.path,
  });
}

export default function Services() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={services.title}
        description={services.description}
        path={services.path}
        image={`/api/og/generate?title=${encodeURIComponent(services.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${services.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column fillWidth>
        {/* Header */}
        <Column fillWidth minHeight="160" vertical="center" marginBottom="32">
          <Heading variant="display-strong-xl">Services</Heading>
          <Text variant="display-default-xs" onBackground="neutral-weak" marginTop="8">
            Building world-class software for startups and scale-ups
          </Text>
        </Column>

        {/* Service Cards */}
        <Row
          fillWidth
          marginBottom="xl"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--static-space-20)" }}
          s={{ style: { gridTemplateColumns: "1fr" } }}
        >
          {offerings.map((offering, index) => (
            <Column
              key={`${offering.title}-${index}`}
              fillWidth
              padding="l"
              border="neutral-alpha-weak"
              radius="l"
              gap="m"
              background="neutral-alpha-weak"
            >
              <Row vertical="center" gap="12">
                <Icon name={offering.icon} onBackground="accent-weak" size="m" />
                <Heading as="h2" variant="heading-strong-l">
                  {offering.title}
                </Heading>
              </Row>
              <Text variant="body-default-m">{offering.description}</Text>
              <Row vertical="center" gap="8" wrap>
                <Text variant="body-default-s" onBackground="brand-weak">
                  Best for:
                </Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {offering.bestFor}
                </Text>
              </Row>
              {offering.tags.length > 0 && (
                <Row wrap gap="8">
                  {offering.tags.map((tag, tagIndex) => (
                    <Tag key={`${offering.title}-tag-${tagIndex}`} size="l">
                      {tag}
                    </Tag>
                  ))}
                </Row>
              )}
            </Column>
          ))}
        </Row>

        {/* How We Work */}
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          How We Work
        </Heading>
        <Column fillWidth gap="l" marginBottom="xl">
          {process.map((item, index) => (
            <Row key={`process-${index}`} fillWidth gap="16" vertical="center">
              <Column
                horizontal="center"
                vertical="center"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
                border="brand-medium"
                background="brand-alpha-weak"
              >
                <Text variant="heading-strong-s" onBackground="brand-weak">
                  {index + 1}
                </Text>
              </Column>
              <Column gap="4">
                <Text variant="heading-strong-l">{item.step}</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {item.description}
                </Text>
              </Column>
            </Row>
          ))}
        </Column>

        {/* Process Flow */}
        <Row fillWidth horizontal="center" gap="8" wrap marginBottom="xl">
          {process.map((item, index) => (
            <Row key={`flow-${index}`} vertical="center" gap="8">
              <Tag size="l">{item.step}</Tag>
              {index < process.length - 1 && (
                <Icon name="chevronRight" onBackground="neutral-weak" size="s" />
              )}
            </Row>
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
          gap="m"
          marginBottom="xl"
        >
          <Heading as="h2" variant="display-strong-s" align="center" wrap="balance">
            Ready to build something great?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
            Let&apos;s discuss your project and find the right engagement model for your team.
          </Text>
          <Row paddingTop="12">
            <Button
              href={`mailto:${person.email}`}
              label="Let's Build Together"
              variant="primary"
              size="l"
              prefixIcon="email"
              data-border="rounded"
            />
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
