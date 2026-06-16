export function Experience() {
  return (
    <section className="py-12">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="mb-3 text-lg font-semibold">Enterprise Training</h3>
          <p className="text-muted-foreground">
            Built and maintained React-based training applications used by
            1,000+ learners across enterprise programs.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="mb-3 text-lg font-semibold">Accessibility</h3>
          <p className="text-muted-foreground">
            Developed WCAG 2.1 AA and Section 508 compliant interfaces with
            screen reader and keyboard support.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="mb-3 text-lg font-semibold">Content Management</h3>
          <p className="text-muted-foreground">
            Built content editing, revision tracking, and reporting tools for
            enterprise training teams.
          </p>
        </div>
      </div>
    </section>
  );
}
