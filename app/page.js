import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className='min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 bg-background text-foreground'>
        <h1 className='text-3xl sm:text-5xl font-bold tracking-tight'>Hi, I’m Lee — Front‑End Developer in Orlando</h1>
        <p className='mt-4 max-w-xl text-base sm:text-lg text-muted-foreground'>
          I build pixel‑perfect, accessible web experiences with React, Next.JS, Tailwind, and 508a compliance.
        </p>
        <a
          href='#projects'
          className='mt-6 inline-block px-6 py-3 text-sm font-medium rounded-xl bg-primary text-primary-foreground hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
        >
          See My Work
        </a>
      </section>
      <section id='projects'></section>
      <section id='about' className='max-w-4xl mx-auto px-4 sm:px-8 py-20 bg-card text-card-foreground'>
        <h2 className='text-2xl sm:text-3xl font-semibold mb-4'>About Lee</h2>
        <p className='text-muted-foreground mb-6'>
          I believe in simplicity—clean lines, accessible code, and building with the user in mind. My focus is on
          crafting responsive, performant interfaces that scale.
        </p>
        <ul className='space-y-2 text-foreground list-disc list-inside mb-6'>
          <li>3+ years experience in Front‑End Dev (HTML, CSS, JS, React)</li>
          <li>508a / WCAG accessibility compliance</li>
          <li>Performance-first and scalable UI solutions</li>
        </ul>
        <p className='text-muted-foreground mb-6'>
          Outside of coding, you’ll find me enjoying music, exploring Florida’s outdoors, or refining my custom dev
          tools.
        </p>
        <a
          href='/about'
          className='inline-block px-5 py-2 text-sm font-medium rounded-xl border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
        >
          Learn My Story
        </a>
      </section>
    </>
  );
}
