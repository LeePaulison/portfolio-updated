export default function AboutPage() {
  return (
    <section className='max-w-4xl mx-auto px-4 sm:px-8 py-20 bg-background text-foreground'>
      <h1 className='text-3xl sm:text-4xl font-bold mb-6'>About Me</h1>

      <p className='text-muted-foreground mb-6'>
        I believe in simplicity, both in life and in design. I’m someone who enjoys clean lines, straightforward
        solutions, and the occasional deep dive into music.
      </p>

      <h2 className='text-2xl font-semibold mt-10 mb-4'>What I Do</h2>
      <p className='text-foreground mb-6'>
        As a front‑end developer based in Orlando, I build accessible, performant web experiences. Whether it’s an
        internal dashboard or GenAI‑powered tool, I prioritize clean code, responsive design, and 508a/WCAG
        accessibility.
      </p>

      <h2 className='text-2xl font-semibold mt-10 mb-4'>My Toolkit</h2>
      <ul className='grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-foreground list-disc list-inside mb-6'>
        <li>React & Next.js</li>
        <li>Tailwind CSS & ShadCN UI</li>
        <li>JavaScript (ES2023+)</li>
        <li>Framer Motion</li>
        <li>Accessibility (508a/WCAG)</li>
        <li>GraphQL, PostgreSQL, MongoDB</li>
      </ul>

      <h2 className='text-2xl font-semibold mt-10 mb-4'>A Few Passions</h2>
      <p className='text-muted-foreground mb-6'>
        When I’m not designing interfaces, I’m usually exploring Florida’s outdoors, listening to new music, or
        tinkering under the hood—whether it’s custom dev tools or a fresh PC build.
      </p>

      <a
        href='/resume.pdf'
        className='inline-block mt-4 px-5 py-2 text-sm font-medium rounded-xl border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
      >
        Download Résumé
      </a>
    </section>
  );
}
