import { Button } from "@/components/ui/button";

export default function CTA({ children }) {
  return (
    <div className="mt-10 flex flex-wrap gap-4 justify-center">
      {children}
    </div>
  );
}

CTA.Link = function CTALink({ href, children, variant = "default" }) {
  return (
    <Button
      asChild
      variant={variant}
      className="text-base"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
};
