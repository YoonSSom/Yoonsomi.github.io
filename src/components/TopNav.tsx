import { Button } from "@/components/ui/button";

interface TopNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "welcome", label: "홈" },
  { id: "about", label: "소개" },
  { id: "contact", label: "연락처" },
];

const TopNav = ({ activeSection, onNavigate }: TopNavProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={() => onNavigate("welcome")}
          className="text-xl font-bold text-foreground hover:text-primary transition-colors"
        >
          Yoonsomi
        </button>
        
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                activeSection === item.id 
                  ? "text-primary-foreground bg-primary font-medium shadow-lg shadow-primary/30" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
              )}
            </button>
          ))}
        </nav>
        
        <Button 
          className="hidden md:flex bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white border-0"
          onClick={() => window.open('https://github.com/YoonSoM', '_blank')}
        >
          이력서 다운로드
        </Button>
      </div>
    </header>
  );
};

export default TopNav;
