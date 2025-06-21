import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMDXPage } from '@/lib/get-mdx-page';
import { generateStaticParams as generate } from '@/lib/mdx-utils';
import { MDXComponents } from '@/components/mdxComponents';

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const { content, frontmatter } = await getMDXPage({
    type: 'projects',
    slug: slug,
  });

  return (
    <main className='container py-4 sm:px-6 lg:px-8 lg:py-12'>
      <article className='prose dark:prose-invert'>
        <MDXRemote source={content} components={MDXComponents} />
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return generate('projects');
}
