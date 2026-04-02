import { Github, BookOpen, Mail, ArrowRight, Lightbulb, BarChart3, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const experienceCards = [
  {
    type: "문제해결형",
    icon: Lightbulb,
    iconColor: "text-amber-400",
    bgColor: "bg-amber-400/10",
    desc: "복잡한 의료 프로세스의 문제를 정의하고, 기술을 활용해 실제 서비스 구조로 해결한 문제해결형 기획 경험",
    project: "AI 비대면 수술 동의서 전자서명 서비스(KT)",
  },
  {
    type: "데이터기반형",
    icon: BarChart3,
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    desc: "데이터 분석과 실험을 기반으로 유입과 전환을 개선하며 성과를 만든 데이터 기반 기획 경험",
    project: "디저트 커머스 웹사이트",
  },
  {
    type: "기술이해형",
    icon: Cpu,
    iconColor: "text-sky-400",
    bgColor: "bg-sky-400/10",
    desc: "OCR 파이프라인 구조를 분석하고 성능 개선을 설계하며 기술적 제약을 이해한 기획 경험",
    project: "한국어 메뉴판 OCR 서비스 개선",
  },
];

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section
      id="welcome"
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient overlays */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-[80px]" />
      
      <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 relative z-10">
        {/* 상단: 한 줄 직무 요약 */}
        <div className="text-center mb-4 lg:mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 lg:px-4 lg:py-1.5 rounded-full bg-card/50 border border-border/50 mb-3 lg:mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] lg:text-sm text-muted-foreground">현재 구직 중</span>
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 lg:mb-4 leading-tight">
            <span className="text-muted-foreground">"이게 될까요?"</span>를 <span className="text-gradient">"이게 되네요"</span>로 바꾸는 기획자
          </h1>
          
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold">
            안녕하세요, 윤소미입니다
          </p>
        </div>

        {/* 경험 카드 3가지 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 max-w-4xl lg:max-w-5xl mx-auto mb-4 lg:mb-8">
          {experienceCards.map((card) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.type}
                onClick={() => onNavigate("projects")}
                className="group p-3 lg:p-5 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1.5 lg:mb-2">
                  <div className={`w-6 h-6 lg:w-8 lg:h-8 rounded-lg ${card.bgColor} flex items-center justify-center`}>
                    <IconComp className={`w-3.5 h-3.5 lg:w-4 lg:h-4 ${card.iconColor}`} />
                  </div>
                  <span className="text-[10px] lg:text-xs font-semibold text-primary">
                    {card.type}
                  </span>
                </div>
                <p className="text-[11px] lg:text-sm text-muted-foreground mb-1.5 lg:mb-3 leading-relaxed line-clamp-3">
                  {card.desc}
                </p>
                <p className="text-xs lg:text-sm font-semibold group-hover:text-primary transition-colors flex items-center gap-1">
                  {card.project}
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA 버튼 */}
        <div className="flex gap-2 lg:gap-4 justify-center mb-3 lg:mb-6">
          <Button
            onClick={() => onNavigate("projects")}
            size="sm"
            className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-right transition-all duration-500 text-white border-0 px-4 lg:px-8 gap-1.5 text-xs lg:text-base lg:h-12"
          >
            프로젝트 보기
            <ArrowRight className="w-3 h-3 lg:w-5 lg:h-5" />
          </Button>
          <Button
            onClick={() => onNavigate("about")}
            variant="outline"
            size="sm"
            className="border-border/50 hover:bg-card/50 px-4 lg:px-8 text-xs lg:text-base lg:h-12"
          >
            이력 상세보기
          </Button>
        </div>
        
        {/* 소셜 링크 */}
        <div className="flex justify-center gap-1.5 lg:gap-3">
          <a
            href="https://github.com/YoonSoM"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 lg:p-3 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
          </a>
          <a
            href="https://www.notion.so/it-s-my-Notion-496f12b2c46c4a7386dbbc0e5a6944a0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 lg:p-3 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            aria-label="Notion"
          >
            <BookOpen className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
          </a>
          <a
            href="mailto:ysomi010212@gmail.com"
            className="p-1.5 lg:p-3 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            aria-label="Email"
          >
            <Mail className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
