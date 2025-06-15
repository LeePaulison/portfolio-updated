import { HeroTeaser } from '@/components/hero';
import { ProjectsTeaser } from '@/components/projects';
import { AboutTeaser } from '@/components/about';
import { ContactTeaser } from '@/components/contact';

export default function Home() {
  return (
    <>
      <HeroTeaser />
      <ProjectsTeaser limit={3} />
      <AboutTeaser />
      <ContactTeaser />
    </>
  );
}
