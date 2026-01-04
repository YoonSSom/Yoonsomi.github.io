import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "welcome", label: "홈" },
  { id: "about", label: "소개" },
  { id: "projects", label: "프로젝트" },
  { id: "contact", label: "연락처" },
];

const MobileNav = ({ activeSection, onNavigate }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
        <button 
          onClick={() => handleNavigate("welcome")}
          className="text-lg font-bold text-foreground"
        >
          Yoonsomi
        </button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`relative text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/30"
                    : "text-muted-foreground hover:bg-card hover:text-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary-foreground rounded-full" />
                )}
              </button>
            ))}
            <Button 
              className="mt-2 bg-gradient-to-r from-primary to-accent text-white border-0"
              onClick={() => window.open('https://github.com/YoonSoM', '_blank')}
            >
              이력서 다운로드
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
