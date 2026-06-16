import { getMDXPage } from "@/lib/get-mdx-page";
import SetBreadcrumbs from "@/components/setBreadcrumbs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdxComponents";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const { frontmatter, content } = await getMDXPage({
    type: "projects",
    slug,
  });

  const pageTitle =
    frontmatter.title ||
    slug
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: pageTitle },
  ];

  return (
    <div>
      {/* Inject the client breadcrumb setter */}
      <SetBreadcrumbs items={breadcrumbItems} />
      <article className="prose dark:prose-invert">
        <MDXRemote source={content} components={MDXComponents} />
      </article>
    </div>
  );
}
