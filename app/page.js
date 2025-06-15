import { HeroTeaser } from '@/components/hero';
import { ProjectsTeaser } from '@/components/projects';
import { AboutTeaser } from '@/components/about';
import { ContactTeaser } from '@/components/contact';

export default function Home() {
  return (
    <>
      <div className='prose dark:prose-invert p-8'>
        <h1>Prose Test</h1>
        <p>This should be styled like a normal paragraph with max-width and spacing.</p>
      </div>

      <HeroTeaser />
      <ProjectsTeaser limit={3} />
      <AboutTeaser />
      <ContactTeaser />
    </>
  );
}
