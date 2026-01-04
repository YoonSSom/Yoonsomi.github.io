import { Github, BookOpen, Mail, ArrowRight, Target, BarChart3, Users, Scale, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

// 프로덕트 엔지니어 핵심 역량 5가지
const coreCompetencies = [
  { 
    icon: Target, 
    title: "문제 정의와 Why", 
    desc: "스펙 구현이 아닌 문제 본질 이해" 
  },
  { 
    icon: BarChart3, 
    title: "데이터 기반 의사결정", 
    desc: "지표로 우선순위와 성공 여부 판단" 
  },
  { 
    icon: Users, 
    title: "사용자·비즈니스 중심", 
    desc: "기술보다 임팩트를 우선" 
  },
  { 
    icon: Scale, 
    title: "트레이드오프 제안", 
    desc: "공수·UX 양쪽 관점 조율" 
  },
  { 
    icon: MessageSquare, 
    title: "크로스펑셔널 협업", 
    desc: "비개발자도 이해하는 소통" 
  },
];

// 대표 프로젝트 2개 (핵심 역량이 드러나는 사례)
const featuredProjects = [
  {
    title: "비대면 전자서명 서비스",
    highlight: "의료진 인터뷰 → 문제 정의 → MVP 출시",
    metric: "완료율 94%",
    tags: ["Why 먼저", "사용자 중심", "빠른 검증"],
  },
  {
    title: "디저트 커머스 운영",
    highlight: "GA4 데이터 분석 → A/B 테스트 → 성장",
    metric: "광고비 ₩0",
    tags: ["데이터 기반", "지표 추적", "비개발자 협업"],
  },
];

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section
      id="welcome"
      className="h-screen flex items-center justify-center relative overflow-hidden py-4"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient overlays */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
      
      <div className="w-full max-w-5xl mx-auto px-4 relative z-10">
        {/* 상단: 한 줄 직무 요약 */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-border/50 mb-4 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-muted-foreground">현재 구직 중</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
            안녕하세요, <span className="text-gradient">윤소미</span>입니다
          </h1>
          
          {/* 핵심 직무 요약 */}
          <p className="text-lg md:text-xl text-muted-foreground mb-1">
            <span className="text-foreground font-semibold">Why부터 시작하는</span> Product Engineer
          </p>
          <p className="text-sm text-muted-foreground/80">
            문제 정의 → 데이터 기반 검증 → 크로스펑셔널 협업 | React + Python + AI
          </p>
        </div>

        {/* 프로덕트 엔지니어 핵심 역량 5가지 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6 max-w-4xl mx-auto">
          {coreCompetencies.map((item) => (
            <div
              key={item.title}
              className="text-center p-3 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
            >
              <item.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
              <p className="text-xs font-medium leading-tight mb-0.5">{item.title}</p>
              <p className="text-[10px] text-muted-foreground leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 대표 프로젝트 */}
        <div className="mb-6">
          <h3 className="text-xs font-medium text-center text-muted-foreground mb-3 uppercase tracking-wider">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                onClick={() => onNavigate("projects")}
                className="group p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{project.highlight}</p>
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded whitespace-nowrap">
                    {project.metric}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <Button
            onClick={() => onNavigate("projects")}
            size="default"
            className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-right transition-all duration-500 text-white border-0 px-6 gap-2"
          >
            전체 프로젝트 보기
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => onNavigate("about")}
            variant="outline"
            size="default"
            className="border-border/50 hover:bg-card/50 px-6"
          >
            이력 상세보기
          </Button>
        </div>
        
        {/* 소셜 링크 */}
        <div className="flex justify-center gap-2">
          <a
            href="https://github.com/YoonSoM"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.notion.so/it-s-my-Notion-496f12b2c46c4a7386dbbc0e5a6944a0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            aria-label="Notion"
          >
            <BookOpen className="w-4 h-4" />
          </a>
          <a
            href="mailto:ysomi010212@gmail.com"
            className="p-2 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
