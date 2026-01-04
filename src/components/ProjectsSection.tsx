import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "todosign",
    title: "비대면 수술 동의서 전자서명 서비스",
    subtitle: "TodoSign",
    description: "병원 방문 없이 비대면으로 수술 동의서에 전자서명을 할 수 있는 서비스. 환자와 의료진 모두의 편의성을 높이고, 종이 문서 관리의 번거로움을 해소합니다.",
    tags: ["React", "전자서명", "의료 서비스", "UX/UI"],
    link: "https://todosign.lovable.app",
    featured: true,
  },
  {
    id: "commercial",
    title: "상업적 웹사이트 운영",
    description: "직접 기획하고 개발한 상업용 웹사이트를 통해 제품(또는 서비스)을 홍보하고 실질적인 판매/문의 유입을 목표로 운영",
    tags: ["웹 개발", "마케팅", "운영"],
    featured: false,
  },
  {
    id: "medical-segmentation",
    title: "의료 영상 분석 대회",
    description: "5개 기관의 조직 내 주요 기능 세포(FTUs)를 정확하게 분할(Segmentation)하는 의료 영상 분석 대회 참가",
    tags: ["Deep Learning", "Segmentation", "의료 AI"],
    featured: false,
  },
  {
    id: "ocr",
    title: "한국어 메뉴판 OCR 번역",
    subtitle: "한국어 메뉴, 더 이상 외국인에게 장벽이 되지 않도록!",
    description: "포스트 코로나 시대, 한국을 방문한 외국인 관광객이 식당에서 한국어 메뉴판을 실시간으로 인식하고 번역할 수 있는 OCR 시스템 개발",
    tags: ["OCR", "번역", "Python", "AI"],
    featured: false,
  },
  {
    id: "drowsy-detection",
    title: "졸음운전 방지 시스템",
    subtitle: "눈을 감았는가, 떴는가?",
    description: "YOLOv4와 Darknet을 활용해 사용자의 눈 상태를 실시간으로 인식. Webcam을 통해 졸음운전 방지나 피로도 모니터링에 응용 가능한 기술 구현",
    tags: ["YOLOv4", "Darknet", "Computer Vision"],
    featured: false,
  },
  {
    id: "socar",
    title: "차량 파손 인식 (쏘카)",
    subtitle: "한정된 데이터 속에서도 정확한 분석을!",
    description: "Semantic Segmentation 기법을 활용해 자동차 외관 파손 부위를 픽셀 단위로 인식하는 AI 모델 개발",
    tags: ["Semantic Segmentation", "AI", "자동차"],
    featured: false,
  },
  {
    id: "musinsa",
    title: "무신사 리뷰 감성 분석",
    subtitle: "리뷰를 읽고, 감정을 해석해, 다음 시즌을 설계하다",
    description: "감성 분석부터 데이터 증식, 별점 예측까지. 신뢰 가능한 추천의 시작은 텍스트 한 줄에서 출발했습니다.",
    tags: ["NLP", "감성분석", "데이터 분석"],
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-24 px-6 lg:px-12 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-gradient opacity-0 animate-fade-in">
          What Did I Do
        </h2>
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
          다양한 프로젝트를 통해 실력을 쌓아왔습니다.
        </p>

        <div className="grid gap-8">
          {/* Featured Project */}
          {projects.filter(p => p.featured).map((project) => (
            <div
              key={project.id}
              className="project-card p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/30 opacity-0 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                  NEW
                </span>
                <span className="text-sm text-muted-foreground">{project.subtitle}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    데모 보기
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          ))}

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={project.id}
                className="project-card p-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                {project.subtitle && (
                  <p className="text-xs text-accent mb-2">{project.subtitle}</p>
                )}
                <h3 className="text-lg font-display font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
