import React from "react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

import ImageWithFallback from "./imageWithFallback";

export function Project({ project }) {
  const imgSrc = project.media?.url
    ? `/assets/images/${project.media.url}.png`
    : null;
  const publishedDate = project.date
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      }).format(new Date(project.date))
    : null;
  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [];

  function displayLinks(arr) {
    return arr.map((link) => {
      if (link.type === "Ignore") return null;
      return (
        <Button
          key={`${link.type}-${link.url}`}
          asChild
          variant="secondary"
          className="text-sm"
        >
          <a href={link.url} target="_blank" rel="noreferrer">
            {link.type}
          </a>
        </Button>
      );
    });
  }

  return (
    <li
      className="mx-auto will-change-transform hover:scale-[1.01] transition-transform ease-[cubic-bezier(0.4,0,0.2,1)]
 duration-300"
    >
      <Card className="bg-card shadow-sm transition hover:shadow-md">
        <CardContent className="flex flex-col md:flex-row gap-6 items-start p-6">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 items-center mb-2">
              {publishedDate && (
                <span className="text-xs font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full">
                  {publishedDate}
                </span>
              )}
              {project.status && (
                <span className="text-sm text-muted-foreground">
                  {project.status}
                </span>
              )}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="text-2xl font-extrabold text-primary hover:underline mb-1 inline-block"
            >
              {project.title}
            </Link>

            <p className="text-muted-foreground mb-3">{project.description}</p>

            {technologies.length > 0 && (
              <div className="mb-3">
                <span className="font-semibold text-primary">Technologies:</span>
                {technologies.map((tech, idx) => (
                  <span key={tech} className="text-sm text-muted-foreground">
                    {` ${tech}${idx < technologies.length - 1 ? " |" : ""}`}
                  </span>
                ))}
              </div>
            )}

            {project?.links && project?.links.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center mb-4">
                <span className="font-semibold text-primary">Links:</span>
                {displayLinks(project?.links)}
              </div>
            )}

            <Button asChild variant="outline" className="mt-2 text-sm">
              <Link href={`/projects/${project.slug}`}>View Project →</Link>
            </Button>
          </div>

          {imgSrc ? (
            <ImageWithFallback
              src={imgSrc}
              alt={project.media.alt}
              width="256"
              height="144"
              className="rounded-md border border-border object-cover shadow-lg"
            />
          ) : (
            <div className="w-[256px] h-[144px] rounded-md border border-border bg-card font-semibold text-accent-foreground text-center flex items-center justify-center p-4 text-sm">
              {project.media?.alt || "No preview available"}
            </div>
          )}
        </CardContent>
      </Card>
    </li>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};
