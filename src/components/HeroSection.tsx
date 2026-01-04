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
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-12"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        {/* 상단: 한 줄 직무 요약 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">현재 구직 중</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            안녕하세요, <span className="text-gradient">윤소미</span>입니다
          </h1>
          
          {/* 핵심 직무 요약 - 한 줄 */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            <span className="text-foreground font-semibold">사용자 문제를 기술로 해결</span>하는 풀스택 개발자
          </p>
          <p className="text-base text-muted-foreground/80">
            React + Python 기반 | AI/ML 경험 보유 | 헬스케어·커머스 도메인
          </p>
        </div>

        {/* 핵심 기술스택 - 3열 */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {coreSkills.map((skill) => (
            <div
              key={skill.label}
              className="text-center p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors"
            >
              <skill.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground mb-1">{skill.label}</p>
              <p className="text-xs font-medium">{skill.skills}</p>
            </div>
          ))}
        </div>

        {/* 대표 프로젝트 2개 미리보기 */}
        <div className="mb-12">
          <h3 className="text-sm font-medium text-center text-muted-foreground mb-4 uppercase tracking-wider">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                onClick={() => onNavigate("projects")}
                className="group p-5 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.metric}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            onClick={() => onNavigate("projects")}
            size="lg"
            className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-right transition-all duration-500 text-white border-0 px-8 gap-2"
          >
            전체 프로젝트 보기
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => onNavigate("about")}
            variant="outline"
            size="lg"
            className="border-border/50 hover:bg-card/50 px-8"
          >
            이력 상세보기
          </Button>
        </div>
        
        {/* 소셜 링크 - 간소화 */}
        <div className="flex justify-center gap-3">
          <a
            href="https://github.com/YoonSoM"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.notion.so/it-s-my-Notion-496f12b2c46c4a7386dbbc0e5a6944a0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            aria-label="Notion"
          >
            <BookOpen className="w-4 h-4" />
          </a>
          <a
            href="mailto:ysomi010212@gmail.com"
            className="p-2.5 rounded-full bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
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