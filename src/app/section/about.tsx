import React from "react";
import LogoLoop from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiGraphql,
  SiRedis,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiKubernetes />, title: "Kubernetes", href: "https://kubernetes.io" },
  { node: <SiGooglecloud />, title: "Google Cloud", href: "https://cloud.google.com" },
  { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
];

export default function AboutSection() {
  return (
    <section className="py-7">
      <div className="w-full">
        <div style={{ height: '70px', position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={68}
            gap={68}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology stack"
          />
        </div>
      </div>
    </section>
  );
}