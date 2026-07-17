export function HeroTeaser() {
  return (
    <section
      id="hero"
      className="min-h-[50vh] flex flex-col items-center justify-center gap-8 text-center px-4 sm:px-8 py-16 bg-background text-foreground border-t border-border/60"
    >
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
        Front-End Developer Building Accessible Enterprise Web Applications
      </h1>
      <p className="max-w-xl text-base sm:text-lg text-muted-foreground">
        Nearly five years of experience building React applications for
        enterprise training programs, with a focus on accessibility,
        multilingual user experiences, and content management systems.{" "}
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="inline-flex items-center rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:bg-accent/90"
        >
          See My Work
        </a>
        <a
          href="./assets/resumes/Lee_Paulison_Jr_Front_End_Developer_Resume.pdf"
          download
          className="inline-flex items-center rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:bg-accent/90"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
