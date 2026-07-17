import { getMDXPage } from "@/lib/get-mdx-page";
import SetBreadcrumbs from "@/components/setBreadcrumbs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "@/components/mdxComponents";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const page = await getMDXPage({
    type: "projects",
    slug,
  });

  if (!page) {
    notFound();
  }

  const { frontmatter, content } = page;

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
