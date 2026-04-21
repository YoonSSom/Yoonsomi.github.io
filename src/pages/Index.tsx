import { useState, useEffect } from "react";
import TopNav from "@/components/TopNav";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import IntroOverlay from "@/components/IntroOverlay";

const Index = () => {
  const [activeSection, setActiveSection] = useState("welcome");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displaySection, setDisplaySection] = useState("welcome");
  const [showIntro, setShowIntro] = useState(true);
  // Keep the hero headline hidden until the intro's FLIP transition lands
  // on top of it; flipping to visible at the same instant the overlay
  // unmounts produces a seamless handoff.
  const [introExiting, setIntroExiting] = useState(false);

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
        return (
          <div className="relative overflow-hidden">
            {/* Shared background layer for hero + projects */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-[40%] right-[10%] w-80 h-80 bg-accent/20 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[30%] w-72 h-72 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <HeroSection
                onNavigate={handleNavigate}
                hideHeadline={showIntro && !introExiting}
              />
              <ProjectsSection hideHeader />
            </div>
          </div>
        );
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
      {showIntro && (
        <IntroOverlay
          onDismiss={() => {
            setShowIntro(false);
            setIntroExiting(false);
          }}
          onExitStart={() => setIntroExiting(true)}
        />
      )}
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
