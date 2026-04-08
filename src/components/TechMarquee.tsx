"use client";

import { Column, Heading } from "@once-ui-system/core";
import styles from "./TechMarquee.module.scss";

const techStack = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    url: "https://react.dev",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    url: "https://nextjs.org",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    url: "https://reactnative.dev",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    url: "https://nodejs.org",
  },
  {
    name: "NestJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    url: "https://nestjs.com",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    url: "https://www.postgresql.org",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    url: "https://www.mongodb.com",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    url: "https://aws.amazon.com",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    url: "https://www.docker.com",
  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    url: "https://graphql.org",
  },
  {
    name: "Redis",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    url: "https://redis.io",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    url: "https://vuejs.org",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    url: "https://firebase.google.com",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    url: "https://www.figma.com",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    url: "https://www.python.org",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    url: "https://git-scm.com",
  },
  {
    name: "Stripe",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stripe.svg",
    url: "https://stripe.com",
  },
];

export const TechMarquee = () => {
  const items = [...techStack, ...techStack];

  return (
    <Column fillWidth gap="24" horizontal="center">
      <Heading as="h2" variant="display-strong-xs">
        Tools I Build With
      </Heading>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {items.map((tech, index) => (
            <a
              key={`${tech.name}-${index}`}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.marqueeItem}
            >
              <img src={tech.logo} alt={tech.name} className={styles.logo} loading="lazy" />
              <span className={styles.name}>{tech.name}</span>
            </a>
          ))}
        </div>
      </div>
    </Column>
  );
};
