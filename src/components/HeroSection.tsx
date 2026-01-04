import { Github, BookOpen, Mail, ArrowRight, Code2, Database, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

// 대표 프로젝트 2개
const featuredProjects = [
  {
    title: "비대면 전자서명 서비스",
    problem: "병원 방문 없이 수술 동의서 서명",
    metric: "서명 완료율 94%",
    tags: ["React", "TypeScript", "헬스케어"],
  },
  {
    title: "디저트 커머스 운영",
    problem: "오프라인→온라인 판로 확대",
    metric: "월 방문자 2,400+",
    tags: ["Next.js", "SEO", "GA4"],
  },
];

// 핵심 기술스택
const coreSkills = [
  { icon: Code2, label: "Frontend", skills: "React, TypeScript, Next.js" },
  { icon: Database, label: "Backend", skills: "Python, Node.js, Supabase" },
  { icon: Brain, label: "AI/ML", skills: "PyTorch, Computer Vision, NLP" },
];

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section
      id="welcome"
      className="h-screen flex items-center justify-center relative overflow-hidden py-4"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient overlays - 더 작게 */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
      
      <div className="w-full max-w-5xl mx-auto px-4 relative z-10">
        {/* 상단: 한 줄 직무 요약 - 간격 축소 */}
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
            <span className="text-foreground font-semibold">사용자 문제를 기술로 해결</span>하는 풀스택 개발자
          </p>
          <p className="text-sm text-muted-foreground/80">
            React + Python 기반 | AI/ML 경험 보유 | 헬스케어·커머스 도메인
          </p>
        </div>

        {/* 핵심 기술스택 - 3열, 컴팩트 */}
        <div className="grid grid-cols-3 gap-3 mb-6 max-w-xl mx-auto">
          {coreSkills.map((skill) => (
            <div
              key={skill.label}
              className="text-center p-3 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <skill.icon className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-xs text-muted-foreground">{skill.label}</p>
              <p className="text-[10px] font-medium leading-tight">{skill.skills}</p>
            </div>
          ))}
        </div>

        {/* 대표 프로젝트 - 더 컴팩트 */}
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
                    <p className="text-xs text-muted-foreground">{project.problem}</p>
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

        {/* CTA 버튼 - 더 눈에 띄게 */}
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