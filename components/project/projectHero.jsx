export default function ProjectHero({ title, subtitle, children }) {
  return (
    <section className="mb-10 text-center space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 max-w-3xl mx-auto">{children}</div>
    </section>
  );
}
