import { useState } from "react";
import { Menu, X, Github, FileText, Mail } from "lucide-react";

interface MobileNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "welcome", label: "WELCOME" },
  { id: "about", label: "WHO AM I" },
  { id: "projects", label: "WHAT DID I DO" },
  { id: "contact", label: "GET IN TOUCH" },
];

const MobileNav = ({ activeSection, onNavigate }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 p-2 bg-card rounded-lg border border-border"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2"
          >
            <X className="w-6 h-6" />
          </button>

          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-lg uppercase tracking-[0.2em] transition-colors ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="flex gap-6 pt-8 border-t border-border">
              <a
                href="https://github.com/YoonSoM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.notion.so/it-s-my-Notion-496f12b2c46c4a7386dbbc0e5a6944a0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText className="w-6 h-6" />
              </a>
              <a
                href="mailto:ysomi010212@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
