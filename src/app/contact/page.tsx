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

const contactMethods = [
  {
    icon: "email",
    label: "Email",
    value: "jahanzaib@gsoftconsulting.com",
    href: "mailto:jahanzaib@gsoftconsulting.com",
  },
  {
    icon: "email",
    label: "Sales",
    value: "sales@gsoftconsulting.com",
    href: "mailto:sales@gsoftconsulting.com",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/jahanzaib-iqbal-49a42b164/",
    href: "https://linkedin.com/in/jahanzaib-iqbal-49a42b164/",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "github.com/jahanzaib-iqbal-dev",
    href: "https://github.com/jahanzaib-iqbal-dev",
  },
];

const offices = [
  { name: "Pakistan (HQ)", city: "Lahore" },
  { name: "Netherlands", city: "" },
  { name: "Canada", city: "" },
  { name: "UK", city: "" },
  { name: "Australia", city: "" },
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

      <Column fillWidth maxWidth={40}>
        {/* Header */}
        <Column fillWidth minHeight="160" vertical="center" marginBottom="32">
          <Heading variant="display-strong-xl">Let&apos;s Build Something Together</Heading>
          <Text variant="display-default-xs" onBackground="neutral-weak" marginTop="m">
            Whether you&apos;re a startup looking for a technical partner or an enterprise needing
            to scale your team, I&apos;d love to hear about your project.
          </Text>
        </Column>

        {/* Contact Methods */}
        <Column fillWidth gap="l" marginBottom="xl">
          {contactMethods.map((method) => (
            <SmartLink key={method.label} href={method.href} style={{ textDecoration: "none" }}>
              <Row fillWidth vertical="center" gap="12">
                <Icon name={method.icon} onBackground="accent-weak" />
                <Column gap="4">
                  <Text variant="heading-strong-l">{method.label}</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {method.value}
                  </Text>
                </Column>
              </Row>
            </SmartLink>
          ))}
        </Column>

        {/* Offices */}
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          Offices
        </Heading>
        <Column fillWidth gap="l" marginBottom="xl">
          {offices.map((office) => (
            <Row key={office.name} fillWidth vertical="center" gap="12">
              <Icon name="globe" onBackground="accent-weak" />
              <Column gap="4">
                <Text variant="heading-strong-l">{office.name}</Text>
                {office.city && (
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {office.city}
                  </Text>
                )}
              </Column>
            </Row>
          ))}
        </Column>

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
            Ready to start a conversation?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
            Drop us an email and we will get back to you within 24 hours.
          </Text>
          <Row paddingTop="12">
            <Button
              href="mailto:jahanzaib@gsoftconsulting.com"
              variant="primary"
              size="l"
              prefixIcon="email"
              label="Get in Touch"
              data-border="rounded"
            />
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
