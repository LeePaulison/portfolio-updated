import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactTeaser() {
  return (
    <section id='contact' className="bg-muted/40 py-16 border-y border-border/60">
      <div className="container mx-auto max-w-2xl text-center">
        <Card className="bg-card text-card-foreground ">
          <CardContent className="py-8 px-6">
            <h2 className="text-2xl font-semibold mb-2 tracking-tight">
              Let’s Connect
            </h2>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind or just want to say hello, I'm just a click away.
            </p>
            <Button asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
