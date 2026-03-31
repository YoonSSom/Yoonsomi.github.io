import { useState, useEffect } from "react";
import TopNav from "@/components/TopNav";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("welcome");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displaySection, setDisplaySection] = useState("welcome");

  const handleNavigate = (section: string) => {
    if (section === activeSection) return;
    
    setIsTransitioning(true);
    
    // Wait for fade out, then switch section
    setTimeout(() => {
      setDisplaySection(section);
      setActiveSection(section);
      // Small delay then fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  const renderSection = () => {
    switch (displaySection) {
      case "welcome":
        return <HeroSection onNavigate={handleNavigate} />;
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HeroSection onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav activeSection={activeSection} onNavigate={handleNavigate} />
      <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="pt-12 md:pt-16 min-h-screen">
        <div
          className={`transition-all duration-300 ease-out ${
            isTransitioning 
              ? "opacity-0 translate-y-4" 
              : "opacity-100 translate-y-0"
          }`}
        >
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
