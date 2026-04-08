import {
  Button,
  Column,
  Heading,
  Icon,
  Row,
  SmartLink,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Contact – Jahanzaib Iqbal",
    description:
      "Get in touch with Jahanzaib Iqbal for software development, team augmentation, and AI solutions.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Contact")}`,
    path: "/contact",
  });
}

const contactLinks = [
  {
    icon: "email",
    label: "Email",
    value: "jahanzaib@gsoftconsulting.com",
    href: "mailto:jahanzaib@gsoftconsulting.com",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/jahanzaib-iqbal-49a42b164/",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "View my projects",
    href: "https://github.com/jahanzaib-iqbal-dev",
  },
];

export default function Contact() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title="Contact – Jahanzaib Iqbal"
        description="Get in touch with Jahanzaib Iqbal for software development, team augmentation, and AI solutions."
        path="/contact"
        image={`/api/og/generate?title=${encodeURIComponent("Contact")}`}
        author={{
          name: person.name,
          url: `${baseURL}/contact`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Header */}
      <Column fillWidth vertical="center" marginBottom="40">
        <Heading variant="display-strong-xl">Let&apos;s Build Something Together</Heading>
        <Text variant="display-default-xs" onBackground="neutral-weak" marginTop="m">
          Book a free 30-minute call or reach out directly.
        </Text>
      </Column>

      {/* Calendly — Full Width */}
      <Column
        fillWidth
        radius="l"
        border="neutral-alpha-weak"
        marginBottom="32"
        style={{ overflow: "hidden" }}
      >
        <iframe
          src="https://calendly.com/jahanzaib-gsoftconsulting/30min?hide_gdpr_banner=1"
          width="100%"
          height="700"
          frameBorder="0"
          title="Schedule a meeting with Jahanzaib Iqbal"
          style={{ border: "none", minWidth: "320px" }}
        />
      </Column>

      {/* Contact Links — Horizontal Grid */}
      <Heading as="h2" variant="heading-strong-xl" marginBottom="16">
        Or reach out directly
      </Heading>
      <Row
        fillWidth
        marginBottom="xl"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "var(--static-space-12)",
        }}
        s={{ style: { gridTemplateColumns: "1fr" } }}
      >
        {contactLinks.map((method) => (
          <SmartLink
            key={method.label}
            href={method.href}
            style={{ textDecoration: "none", display: "flex", height: "100%", width: "100%" }}
          >
            <Column
              fillWidth
              horizontal="center"
              align="center"
              gap="12"
              padding="24"
              radius="l"
              border="neutral-alpha-weak"
              background="neutral-alpha-weak"
              style={{ height: "100%" }}
            >
              <Icon name={method.icon} size="l" onBackground="brand-strong" />
              <Text variant="heading-strong-m">{method.label}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {method.value}
              </Text>
            </Column>
          </SmartLink>
        ))}
      </Row>
    </Column>
  );
}
