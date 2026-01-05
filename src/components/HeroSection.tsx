import { Github, BookOpen, Mail, ArrowRight, Target, BarChart3, Users, Scale, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

// 프로덕트 엔지니어 핵심 역량 5가지
const coreCompetencies = [
  { icon: Target, title: "문제 정의", desc: "Why 먼저" },
  { icon: BarChart3, title: "데이터 기반", desc: "지표로 판단" },
  { icon: Users, title: "사용자 중심", desc: "임팩트 우선" },
  { icon: Scale, title: "트레이드오프", desc: "양쪽 조율" },
  { icon: MessageSquare, title: "협업", desc: "명확한 소통" },
];

// 대표 프로젝트 2개
const featuredProjects = [
  {
    title: "비대면 전자서명 서비스",
    metric: "완료율 94%",
    tags: ["Why 먼저", "사용자 중심"],
  },
  {
    title: "디저트 커머스 운영",
    metric: "광고비 ₩0",
    tags: ["데이터 기반", "협업"],
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
            안녕하세요, <span className="text-gradient">윤소미</span>입니다
          </h1>
          
          <p className="text-sm md:text-base lg:text-xl text-muted-foreground">
            <span className="text-foreground font-semibold">Why부터 시작하는</span> Product Engineer
          </p>
        </div>

        {/* 핵심 역량 5가지 - 한 줄 */}
        <div className="flex justify-center gap-1.5 md:gap-3 lg:gap-4 mb-4 lg:mb-8 flex-wrap">
          {coreCompetencies.map((item) => (
            <div
              key={item.title}
              className="text-center px-2 py-1.5 md:px-3 md:py-2 lg:px-5 lg:py-3 rounded-md lg:rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-6 lg:h-6 text-primary mx-auto mb-0.5 lg:mb-1" />
              <p className="text-[10px] md:text-xs lg:text-sm font-medium leading-tight">{item.title}</p>
            </div>
          ))}
        </div>

        {/* 대표 프로젝트 - 간결하게 */}
        <div className="grid grid-cols-2 gap-2 lg:gap-4 max-w-md lg:max-w-xl mx-auto mb-4 lg:mb-8">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              onClick={() => onNavigate("projects")}
              className="group p-2.5 md:p-3 lg:p-5 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-1 lg:mb-2">
                <h4 className="text-[11px] md:text-xs lg:text-base font-semibold group-hover:text-primary transition-colors truncate">
                  {project.title}
                </h4>
              </div>
              <span className="text-[10px] md:text-xs lg:text-lg font-bold text-primary">
                {project.metric}
              </span>
            </div>
          ))}
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
