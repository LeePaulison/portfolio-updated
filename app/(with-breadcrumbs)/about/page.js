"use client";

import React from "react";
import { useBreadcrumbs } from "@/app/breadcrumbs-context";

export default function AboutPage() {
  const { setBreadcrumbs } = useBreadcrumbs();

  // Set breadcrumbs for this page
  React.useEffect(() => {
    setBreadcrumbs([{ label: "Home", href: "/" }, { label: "About" }]);
  }, [setBreadcrumbs]);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-8 py-20 bg-background text-foreground">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h1>

      <p className="text-muted-foreground mb-6">
        I&apos;m a Front-End Developer based in Orlando, Florida, with nearly
        five years of experience building React applications for enterprise
        training and e-learning platforms. Throughout my career, I&apos;ve
        focused on creating accessible, maintainable user interfaces that help
        people learn, create, and collaborate more effectively.
      </p>

      <p className="text-muted-foreground mb-6">
        My professional experience includes multilingual training applications,
        accessibility-focused user interfaces, and content management tools used
        by training and content teams. I enjoy solving complex UI challenges and
        finding practical solutions that balance user needs, business goals, and
        long-term maintainability.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">What I Do</h2>

      <p className="text-foreground mb-6">
        I specialize in modern front-end development using React, Next.js,
        JavaScript, and related technologies. Whether I&apos;m building
        enterprise training software, internal business tools, or personal
        projects, I focus on accessibility, performance, and creating
        experiences that are intuitive for users and maintainable for
        developers.
      </p>

      <p className="text-foreground mb-6">
        Recently, I&apos;ve been expanding my skills into full-stack
        development, GraphQL, authentication systems, real-time communication,
        and AI-powered applications through projects such as Saigely.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">My Toolkit</h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-foreground list-disc list-inside mb-6">
        <li>React & Next.js</li>
        <li>JavaScript</li>
        <li>GraphQL</li>
        <li>Tailwind CSS</li>
        <li>Radix UI & ShadCN</li>
        <li>Accessibility (WCAG 2.1 / Section 508)</li>
        <li>Redux Toolkit</li>
        <li>React Hook Form</li>
        <li>PostgreSQL & MongoDB</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Beyond Development</h2>

      <p className="text-muted-foreground mb-6">
        Outside of software development, I enjoy music, gaming, exploring new
        technologies, and continuously learning. I&apos;m particularly
        interested in understanding how systems work beneath the surface,
        whether that&apos;s application architecture, emerging AI tools, or the
        technologies that power modern web experiences.
      </p>

      <p className="text-muted-foreground mb-6">
        I believe good software comes from curiosity, thoughtful design, and a
        willingness to keep learning. Those principles continue to guide both my
        professional work and personal projects.
      </p>

      <a
        href="/Lee_Paulison_Front_End_Developer_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-5 py-2 text-sm font-medium rounded-xl border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        View Resume
      </a>
    </section>
  );
}
