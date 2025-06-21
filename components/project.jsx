import React from "react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";

export function Project({ project }) {
  const imgSrc = project.media?.url
    ? `/assets/images/${project.media.url}.png`
    : null;

  function displayLinks(arr) {
    return arr.map((link) => (
      <Button
        key={crypto.randomUUID()}
        asChild
        variant="secondary"
        className="text-sm"
      >
        <a href={link.url} target="_blank" rel="noreferrer">
          {link.type}
        </a>
      </Button>
    ));
  }

  return (
    <li className="rounded-xl border border-border bg-card shadow-sm p-6 flex flex-col md:flex-row gap-6 items-start transition hover:shadow-md">
      <div className="flex-1">
        <div className="flex flex-wrap gap-2 items-center mb-2">
          <span className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
            {new Date(project.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="text-sm text-muted-foreground">{project.status}</span>
        </div>

        <h3 className="text-2xl font-bold text-primary mb-1">{project.title}</h3>
        <p className="text-muted-foreground mb-3">{project.description}</p>

        <div className="mb-3">
          <span className="font-medium text-primary">Technologies: </span>
          {project.technologies.map((tech, idx) => (
            <span key={tech} className="text-sm text-muted-foreground">
              {` ${tech}${idx < project.technologies.length - 1 ? " |" : ""}`}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-medium text-primary">Links:</span>
            {displayLinks(project.links)}
          </div>
        )}
      </div>

      {imgSrc ? (
        <img
          src={imgSrc}
          alt={project.media.alt}
          width="256"
          height="144"
          className="rounded-md border border-border object-cover shadow-lg"
        />
      ) : (
        <div className="w-[256px] h-[144px] rounded-md border border-border bg-card text-muted-foreground text-center flex items-center justify-center p-4 text-sm">
          {project.media?.alt || "No preview available"}
        </div>
      )}
    </li>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
};
