import { Column, Schema, Meta, Text } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import { HomeContent } from "@/components/HomeContent";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

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
      <HomeContent
        projectsSlot={<Projects range={[1, 1]} />}
        postsSlot={<Posts range={[1, 2]} columns="2" />}
      />
    </Column>
  );
}
