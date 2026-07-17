import { Card, CardContent } from "@/components/ui/card";

export function AboutTeaser() {
  return (
    <section
      id="about"
      className="bg-muted/40 py-16  border-x border-border/60"
    >
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-background shadow-md">
          <CardContent className="py-8 px-6">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              About Lee
            </h2>

            <p className="text-muted-foreground mb-6">
              I'm a Front-End Developer with nearly five years of experience
              building React applications for enterprise training and e-learning
              platforms. My work focuses on creating accessible, maintainable
              user interfaces that help people learn, create, and collaborate
              more effectively.
            </p>

            <ul className="space-y-2 text-foreground list-disc list-inside mb-6">
              <li>
                Nearly 5 years of professional Front-End development experience
              </li>
              <li>
                React, Next.js, JavaScript, GraphQL, and modern UI frameworks
              </li>
              <li>
                WCAG 2.1 AA / Section 508 accessibility implementation and
                testing
              </li>
              <li>
                Enterprise training platforms, content management systems, and
                internal tools
              </li>
            </ul>

            <p className="text-muted-foreground mb-6">
              Most recently, I developed a content editing and revision tracking
              application for training content teams while continuing to expand
              my expertise through projects involving AI, real-time
              communication, and full-stack web application architecture.
            </p>

            <a
              href="/about"
              className="inline-block px-5 py-2 text-sm font-medium rounded-xl border border-accent text-primary hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Learn My Story{" "}
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
