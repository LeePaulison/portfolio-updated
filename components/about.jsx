import { Card, CardContent } from "@/components/ui/card";

export function AboutTeaser() {
  return (
    <section id='about' className='bg-muted/40 py-16  border-t border-border/60'>
      <div className="container mx-auto max-w-2xl">
        <Card className='bg-background shadow-md'>
          <CardContent className='py-8 px-6'>
            <h2 className='text-2xl sm:text-3xl font-semibold mb-4'>About Lee</h2>
            <p className='text-muted-foreground mb-6'>
              I believe in simplicity—clean lines, accessible code, and building with the user in mind. My focus is on
              crafting responsive, performant interfaces that scale.
            </p>
            <ul className='space-y-2 text-foreground list-disc list-inside mb-6'>
              <li>4+ years experience in Front‑End Dev (HTML, CSS, JS, React, Next.JS)</li>
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
          </CardContent>
        </Card>
      </div>
    </section>

  )
}