import { HeroTeaser } from '@/components/hero';
import { AboutTeaser } from '@/components/about';
import { ContactTeaser } from '@/components/contact';

export default function Home() {
  return (
    <>
      <HeroTeaser />
      <section id='projects'></section>
      <AboutTeaser />
      <ContactTeaser />
    </>
  );
}
