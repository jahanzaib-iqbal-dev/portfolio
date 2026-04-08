"use client";

import { Button, Column, Heading, Icon, Tag, Text, Meta, Row } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { motion } from "framer-motion";

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
  return (
    <Column maxWidth="m">
      <Column fillWidth>
        {/* Header */}
        <Column fillWidth minHeight="160" vertical="center" marginBottom="32">
          <Heading variant="display-strong-xl">Services</Heading>
          <Text variant="display-default-xs" onBackground="neutral-weak" marginTop="8">
            Building world-class software for startups and scale-ups
          </Text>
        </Column>

        {/* Service Cards */}
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
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
              key={`${offering.title}-${index}`}
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
                    {offering.title}
                  </Heading>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {offering.description}
                </Text>
                <Row vertical="center" gap="8" wrap>
                  <Text variant="body-default-s" onBackground="brand-strong">
                    Best for:
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {offering.bestFor}
                  </Text>
                </Row>
                {offering.tags.length > 0 && (
                  <Row wrap gap="8" style={{ marginTop: "auto" }}>
                    {offering.tags.map((tag, tagIndex) => (
                      <Tag key={`${offering.title}-tag-${tagIndex}`} size="l">
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
              Ready to build something great?
            </Heading>
            <Text
              variant="body-default-l"
              onBackground="neutral-weak"
              align="center"
              wrap="balance"
            >
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
        </motion.div>
      </Column>
    </Column>
  );
}
