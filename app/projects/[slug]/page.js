import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMDXPage } from '@/lib/get-mdx-page';
import { generateStaticParams as generate } from '@/lib/mdx-utils';

export default async function ProjectPage({ params }) {
  const { content, frontmatter } = await getMDXPage({
    type: 'projects',
    slug: params.slug,
  });

  return (
    <main className='container px-4 py-4 sm:px-6 lg:px-8 py-12'>
      <h1 className='text-3xl font-bold mb-4'>{frontmatter.title}</h1>
      {frontmatter.description && <p className='text-muted-foreground mb-6'>{frontmatter.description}</p>}
      <div className='prose dark:prose-invert'>
        <h2>Prose Test</h2>
        <p>This should be styled like a paragraph.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
      <article className='prose dark:prose-invert'>
        <MDXRemote source={content} />
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return generate('projects');
}
