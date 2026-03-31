import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-14">
      <div className="section-container text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
          IT Service Planning Portfolio
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight tracking-tight">
          Untact Surgical Consent<br />
          Electronic Signature Service
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-3 max-w-2xl mx-auto">
          Problem-solving based service planning portfolio
        </p>
        <p className="text-sm text-muted-foreground mb-10 max-w-lg mx-auto">
          A real-world case study demonstrating structured problem analysis,
          user-centered design, and service planning methodology.
        </p>
        <div className="flex gap-3 justify-center mb-16">
          <Button asChild size="lg" className="rounded-md">
            <a href="#problem">View Project</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-md">
            <a href="#impact">See Results</a>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto text-center mb-16">
          <div>
            <div className="text-2xl font-bold text-foreground">PM</div>
            <div className="text-xs text-muted-foreground mt-1">Role</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">KT</div>
            <div className="text-xs text-muted-foreground mt-1">Client</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">2024</div>
            <div className="text-xs text-muted-foreground mt-1">Year</div>
          </div>
        </div>

        <a href="#problem" className="inline-flex animate-bounce text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
