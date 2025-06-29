import { getMDXPage } from '@/lib/get-mdx-page';
import SetBreadcrumbs from '@/components/setBreadcrumbs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/mdxComponents';

export default async function ProjectPage({ params }) {
  const { frontmatter, content } = await getMDXPage({
    type: 'projects',
    slug: params.slug,
  });

  const pageTitle =
    frontmatter.title ||
    params.slug
      .split('-')
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(' ');

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/#projects' },
    { label: pageTitle },
  ];

  return (
    <div>
      {/* Inject the client breadcrumb setter */}
      <SetBreadcrumbs items={breadcrumbItems} />

      <h1 className='text-4xl font-bold mb-6'>{pageTitle}</h1>
      <MDXRemote source={content} components={MDXComponents} />
    </div>
  );
}
