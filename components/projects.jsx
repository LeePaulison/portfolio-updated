import { getAllFrontmatters } from "@/lib/get-all-frontmatters";
import { Project } from "./project";

export const ProjectsTeaser = async () => {
  const projects = await getAllFrontmatters("projects");

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-8 py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">Projects</h2>
        <ul className="space-y-8">
          {projects.map((project) => (
            <Project key={project.slug} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}
