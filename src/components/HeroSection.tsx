import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section
      id="welcome"
      className="min-h-screen flex items-center justify-center relative bg-hero-gradient geometric-bg"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full animate-glow-pulse" />
      <div className="absolute bottom-40 left-20 w-20 h-20 border border-accent/20 rounded-full animate-glow-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 opacity-0 animate-fade-in">
          2025 portfolio
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
          소스코드 저장소{" "}
          <a
            href="https://github.com/YoonSoM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
        </p>
        <p className="text-lg md:text-xl text-foreground/70 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
          자기 개발 일지{" "}
          <a
            href="https://www.notion.so/it-s-my-Notion-496f12b2c46c4a7386dbbc0e5a6944a0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Notion
          </a>
        </p>
        <Button
          onClick={() => onNavigate("about")}
          variant="outline"
          className="opacity-0 animate-fade-in border-foreground/30 hover:bg-foreground/10 hover:border-foreground/50"
          style={{ animationDelay: "400ms" }}
        >
          LEARN MORE
          <ArrowDown className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
