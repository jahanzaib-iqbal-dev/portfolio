import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jahanzaib",
  lastName: "Iqbal",
  name: `Jahanzaib Iqbal`,
  role: "Co-founder & Director at Global Software Consulting",
  avatar: "/images/avatar.jpg",
  email: "jahanzaib@gsoftconsulting.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>Insights on building startups, scaling engineering teams, and shipping great software</>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jahanzaib-iqbal-dev",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jahanzaib-iqbal-49a42b164/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>I build products, lead teams, and ship software that scales</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Global Software Consulting</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Software engineer turned founder. Co-founded{" "}
      <Text as="span" size="xl" weight="strong">
        Global Software Consulting
      </Text>
      , built Obenan from zero to $1M+ ARR, and now leading 40+ engineers. I specialize in React,
      Node.js, and AI — but my real skill is shipping products that scale.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/jahanzaib-gsoftconsulting/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Software engineer turned founder. I co-founded Global Software Consulting in 2026 and built
        it into a 40+ person engineering team. My proudest build: taking Obenan from zero to $1M+
        ARR as the technical lead. I specialize in React, Node.js, and AI — but my real skill is
        shipping products that scale and building teams that last.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Global Software Consulting",
        timeframe: "2026 - Present",
        role: "Co-founder & Director",
        achievements: [
          <>
            Co-founded and scaled a software development company delivering high-quality products
            for startups and growing businesses across multiple industries.
          </>,
          <>
            Built and manage a team of 40+ engineers, establishing engineering processes, code
            quality standards, and delivery pipelines from the ground up.
          </>,
          <>
            Drove the company's technical vision, helping clients go from initial MVP to
            production-ready products with scalable architectures.
          </>,
        ],
        images: [],
      },
      {
        company: "Obenan",
        timeframe: "2022 - 2026",
        role: "Technical Team Lead",
        achievements: [
          <>
            Led the development and technical execution of core products, managing both engineering
            and business logic implementation across the platform.
          </>,
          <>
            Architected and delivered key product features using JavaScript, PostgreSQL, and modern
            web technologies in a hybrid team across the Netherlands.
          </>,
          <>
            Mentored and grew the engineering team, establishing best practices for code reviews,
            testing, and continuous delivery.
          </>,
        ],
        images: [],
      },
      {
        company: "Global Software Consulting",
        timeframe: "2019 - 2022",
        role: "Software Engineer",
        achievements: [
          <>
            Built mobile and web applications using React Native, React.js, and Node.js, delivering
            end-to-end solutions for clients.
          </>,
          <>
            Gained deep hands-on experience across the full stack, contributing to projects ranging
            from consumer apps to enterprise platforms.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // hidden as requested
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            Building modern, responsive interfaces with React, Next.js, and React Native for web and
            mobile.
          </>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React Native",
            icon: "react",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Backend & Infrastructure",
        description: (
          <>
            Designing scalable backends and infrastructure with Node.js, PostgreSQL, MongoDB, AWS,
            and Docker.
          </>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Docker",
            icon: "docker",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "AI & Automation",
        description: (
          <>
            Building AI agents, MCP servers, RAG pipelines, and LLM integrations with Claude,
            OpenAI, and Gemini.
          </>
        ),
        tags: [
          {
            name: "Claude",
          },
          {
            name: "OpenAI",
          },
          {
            name: "LangChain",
          },
          {
            name: "MCP Servers",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Software projects and products by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
