export function HeroTeaser() {
  return (
    <section
      id='hero'
      className='min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 bg-background text-foreground'
    >
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

  )
}