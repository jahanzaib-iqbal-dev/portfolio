import {
  Column,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import TeamContent from "./TeamContent";

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

      <TeamContent />
    </Column>
  );
}
