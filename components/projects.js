import Link from 'next/link';
import { getAllFrontmatters } from '@/lib/get-all-frontmatters';

export async function ProjectsTeaser({ limit = 3 }) {
  const projects = getAllFrontmatters('projects').slice(0, limit);

  return (
    <section className='py-12 border-t border-muted'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-2xl font-bold mb-6'>Projects</h2>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map(({ slug, title, description }) => (
            <Link key={slug} href={`/projects/${slug}`} className='group block transition-opacity hover:opacity-80'>
              <div className='space-y-2'>
                <h3 className='text-lg font-semibold group-hover:underline'>{title}</h3>
                <p className='text-sm text-muted-foreground line-clamp-3'>{description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Optional View All link */}
        <div className='mt-8 text-center'>
          <Link href='/projects' className='text-sm font-medium text-primary hover:underline'>
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
