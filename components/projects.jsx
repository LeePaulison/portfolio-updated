import { getAllFrontmatters } from "@/lib/get-all-frontmatters";
import { Project } from "./project";

export const ProjectsTeaser = async () => {
  const projects = await getAllFrontmatters("projects");

  return (
    <section id='projects' className="bg-muted/40 py-16  border-t border-border/60">
      <h2 className="text-3xl font-bold text-primary mb-10 text-center">Projects</h2>
      <ul className="container mx-auto max-w-2xl space-y-8">
        {projects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}
