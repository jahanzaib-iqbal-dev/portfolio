import {
  Column,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import ContactContent from "./ContactContent";

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

      <ContactContent />
    </Column>
  );
}
