import { Mail, Github } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-container text-center">
        <p className="text-sm font-semibold text-foreground mb-1">Yoon Somi</p>
        <p className="text-xs text-muted-foreground mb-4">IT Service Planner / PM</p>
        <div className="flex justify-center gap-3 mb-6">
          <a
            href="mailto:ysomi010212@gmail.com"
            className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/YoonSoM"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
        <p className="text-[11px] text-muted-foreground">© 2025 Yoon Somi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
