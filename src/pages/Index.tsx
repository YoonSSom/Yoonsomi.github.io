import TopNav from "@/components/TopNav";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PersonaSection from "@/components/PersonaSection";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import UserFlowSection from "@/components/UserFlowSection";
import WireframeSection from "@/components/WireframeSection";
import EdgeCasesSection from "@/components/EdgeCasesSection";
import ImpactSection from "@/components/ImpactSection";
import ExpansionSection from "@/components/ExpansionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <MobileNav />
      <main>
        <HeroSection />
        <ProblemSection />
        <PersonaSection />
        <PainPointsSection />
        <SolutionSection />
        <FeaturesSection />
        <UserFlowSection />
        <WireframeSection />
        <EdgeCasesSection />
        <ImpactSection />
        <ExpansionSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
