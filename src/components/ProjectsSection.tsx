import { useState } from "react";
import { ExternalLink, Calendar, Users, Wrench, CheckCircle2, Circle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Progress } from "@/components/ui/progress";

interface TimelineStep {
  label: string;
  completed: boolean;
}

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: { label: string; color: string }[];
  link?: string;
  image: string;
  period: string;
  team: string;
  tools: string[];
  progress: number;
  timeline: TimelineStep[];
}

const projects: Project[] = [
  {
    id: "todosign",
    title: "비대면 수술 동의서 전자서명 서비스",
    description: "병원 방문 없이 **비대면**으로 수술 동의서에 **전자서명**을 할 수 있는 서비스. 환자와 의료진 모두의 편의성을 높이고, 종이 문서 관리의 번거로움을 해소합니다.",
    fullDescription: "코로나19 이후 **비대면 의료 서비스**의 필요성이 증가함에 따라, 환자들이 병원을 직접 방문하지 않고도 수술 동의서에 **전자서명**을 할 수 있는 웹 기반 서비스를 개발했습니다. **React**와 **TypeScript**를 활용하여 프론트엔드를 구축하고, 전자서명 API를 연동하여 **법적 효력**이 있는 서명 시스템을 구현했습니다. 환자 인증, 문서 열람, 서명, 제출까지의 전 과정을 모바일에서도 원활하게 진행할 수 있도록 **반응형 UI**를 적용했습니다.",
    tags: [
      { label: "React", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "전자서명", color: "bg-purple-500/20 text-purple-400" },
      { label: "의료 서비스", color: "bg-pink-500/20 text-pink-400" },
    ],
    link: "https://todosign.lovable.app",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    period: "2024.01 - 2024.03",
    team: "프론트엔드 개발 (1인)",
    tools: ["React", "TypeScript", "Tailwind CSS", "전자서명 API"],
    progress: 100,
    timeline: [
      { label: "기획 및 요구사항 분석", completed: true },
      { label: "UI/UX 설계", completed: true },
      { label: "프론트엔드 개발", completed: true },
      { label: "API 연동", completed: true },
      { label: "테스트 및 배포", completed: true },
    ],
  },
  {
    id: "commercial",
    title: "상업적 웹사이트 운영",
    description: "직접 **기획**하고 **개발**한 상업용 웹사이트를 통해 제품을 홍보하고 실질적인 **판매/문의 유입**을 목표로 운영.",
    fullDescription: "실제 **수익 창출**을 목표로 상업용 웹사이트를 기획부터 개발, 운영까지 전 과정을 직접 진행했습니다. **SEO 최적화**, **Google Analytics**를 활용한 사용자 행동 분석, **A/B 테스트**를 통한 전환율 개선 등 마케팅 관점에서의 개발을 경험했습니다. 실제 고객 문의와 판매로 이어지는 성과를 달성하며, 기술과 비즈니스를 연결하는 역량을 키웠습니다.",
    tags: [
      { label: "웹 개발", color: "bg-green-500/20 text-green-400" },
      { label: "기획", color: "bg-blue-500/20 text-blue-400" },
      { label: "운영", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    period: "2023.06 - 현재",
    team: "1인 운영",
    tools: ["React", "Next.js", "Google Analytics", "SEO"],
    progress: 80,
    timeline: [
      { label: "아이디어 기획", completed: true },
      { label: "웹사이트 개발", completed: true },
      { label: "SEO 최적화", completed: true },
      { label: "마케팅 및 운영", completed: true },
      { label: "지속적 개선", completed: false },
    ],
  },
  {
    id: "medical-segmentation",
    title: "의료 영상 분석 대회",
    description: "5개 기관의 조직 내 주요 기능 세포(FTUs)를 정확하게 **분할(Segmentation)**하는 **의료 영상 분석** 대회 참가.",
    fullDescription: "**Kaggle**에서 주최한 **HuBMAP + HPA** 대회에 참가하여 5개 장기(신장, 대장, 비장, 전립선, 폐)의 조직 이미지에서 기능적 조직 단위(FTUs)를 정확하게 분할하는 모델을 개발했습니다. **U-Net** 기반의 Segmentation 모델을 구현하고, 다양한 **Data Augmentation** 기법과 **앙상블 전략**을 적용하여 성능을 최적화했습니다. 의료 영상의 특성을 고려한 전처리와 후처리 파이프라인을 구축했습니다.",
    tags: [
      { label: "AI", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "Segmentation", color: "bg-purple-500/20 text-purple-400" },
      { label: "의료 영상", color: "bg-pink-500/20 text-pink-400" },
    ],
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop",
    period: "2022.09 - 2022.12",
    team: "팀 프로젝트 (3인)",
    tools: ["Python", "PyTorch", "U-Net", "OpenCV"],
    progress: 100,
    timeline: [
      { label: "데이터 분석", completed: true },
      { label: "모델 설계", completed: true },
      { label: "학습 및 실험", completed: true },
      { label: "앙상블 전략", completed: true },
      { label: "제출 및 평가", completed: true },
    ],
  },
  {
    id: "ocr",
    title: "OCR 메뉴판 번역 시스템",
    description: "한국을 방문한 외국인 관광객이 식당에서 한국어 메뉴판을 **실시간으로 인식**하고 **번역**할 수 있는 시스템. **다국어 지원**으로 언어 장벽을 해소합니다.",
    fullDescription: "한국을 방문한 외국인 관광객들이 식당에서 겪는 **언어 장벽 문제**를 해결하기 위한 OCR 기반 메뉴판 번역 시스템을 개발했습니다. **Tesseract OCR**을 활용하여 한국어 텍스트를 인식하고, **Google Translate API**를 연동하여 영어, 중국어, 일본어 등 **다국어로 번역**하는 기능을 구현했습니다. 메뉴판 이미지의 전처리(노이즈 제거, 이진화)를 통해 **인식률을 향상**시켰습니다.",
    tags: [
      { label: "OCR", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "Python", color: "bg-purple-500/20 text-purple-400" },
      { label: "번역", color: "bg-pink-500/20 text-pink-400" },
    ],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop",
    period: "2022.03 - 2022.06",
    team: "팀 프로젝트 (4인)",
    tools: ["Python", "Tesseract OCR", "OpenCV", "Google Translate API"],
    progress: 100,
    timeline: [
      { label: "요구사항 정의", completed: true },
      { label: "OCR 엔진 연동", completed: true },
      { label: "번역 API 구현", completed: true },
      { label: "UI 개발", completed: true },
      { label: "테스트", completed: true },
    ],
  },
  {
    id: "drowsy-detection",
    title: "안전운전 (졸음 인식)",
    description: "**YOLOv4**와 **Darknet**을 활용해 사용자의 눈 상태를 **실시간으로 인식**하여 **졸음 운전을 예방**하는 시스템. 운전자 안전을 최우선으로 합니다.",
    fullDescription: "**졸음 운전**으로 인한 교통사고를 예방하기 위해 **실시간 졸음 감지 시스템**을 개발했습니다. **YOLOv4** 객체 탐지 모델을 커스텀 학습하여 운전자의 눈 상태(떠있음/감김)를 실시간으로 분류합니다. 일정 시간 이상 눈을 감고 있으면 **경고음**을 발생시켜 운전자에게 알립니다. **Darknet** 프레임워크를 활용하여 **GPU 가속**을 적용했으며, 웹캠을 통한 실시간 처리가 가능하도록 최적화했습니다.",
    tags: [
      { label: "YOLOv4", color: "bg-green-500/20 text-green-400" },
      { label: "Darknet", color: "bg-blue-500/20 text-blue-400" },
      { label: "안전", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    period: "2021.09 - 2021.12",
    team: "팀 프로젝트 (3인)",
    tools: ["Python", "YOLOv4", "Darknet", "OpenCV"],
    progress: 100,
    timeline: [
      { label: "데이터 수집", completed: true },
      { label: "모델 학습", completed: true },
      { label: "실시간 처리 최적화", completed: true },
      { label: "경고 시스템 구현", completed: true },
      { label: "데모 및 발표", completed: true },
    ],
  },
  {
    id: "socar",
    title: "차량 파손 인식 (쏘카)",
    description: "**Semantic Segmentation** 기법을 활용해 자동차 외관 **파손 부위**를 **픽셀 단위**로 인식하는 AI 모델. 보험 처리 및 차량 관리 자동화에 기여합니다.",
    fullDescription: "공유 차량 서비스에서 반납 시 **차량 파손 여부를 자동으로 감지**하는 AI 모델을 개발했습니다. **DeepLab V3+** 기반의 **Semantic Segmentation** 모델을 학습하여 스크래치, 찌그러짐, 깨짐 등의 파손 유형을 **픽셀 단위로 분류**합니다. 다양한 조명 조건과 촬영 각도에서도 안정적으로 동작하도록 **Data Augmentation**을 적용했으며, 실제 쏘카 차량 이미지 데이터셋을 활용하여 학습했습니다.",
    tags: [
      { label: "Semantic Segmentation", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "AI", color: "bg-purple-500/20 text-purple-400" },
    ],
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&h=500&fit=crop",
    period: "2022.01 - 2022.02",
    team: "팀 프로젝트 (5인)",
    tools: ["Python", "PyTorch", "DeepLab V3+", "OpenCV"],
    progress: 100,
    timeline: [
      { label: "데이터 전처리", completed: true },
      { label: "모델 구현", completed: true },
      { label: "학습 및 튜닝", completed: true },
      { label: "성능 평가", completed: true },
    ],
  },
  {
    id: "musinsa",
    title: "MUSINSA 감성 분석",
    description: "리뷰를 읽고 감정을 해석해 다음 시즌을 설계. **감성 분석**부터 **데이터 증식**, **별점 예측**까지 진행한 **NLP** 프로젝트입니다.",
    fullDescription: "무신사 쇼핑몰의 상품 리뷰 데이터를 수집하여 **감성 분석 모델**을 개발했습니다. **KoBERT**를 Fine-tuning하여 리뷰의 긍정/부정/중립 감정을 분류하고, **별점을 예측**하는 회귀 모델도 함께 구현했습니다. **데이터 불균형 문제**를 해결하기 위해 **Back-translation**, **EDA(Easy Data Augmentation)** 등의 데이터 증식 기법을 적용했습니다. 분석 결과를 시각화하여 **시즌별 트렌드 인사이트**를 도출했습니다.",
    tags: [
      { label: "감성 분석", color: "bg-green-500/20 text-green-400" },
      { label: "NLP", color: "bg-blue-500/20 text-blue-400" },
      { label: "데이터", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
    period: "2022.04 - 2022.06",
    team: "팀 프로젝트 (4인)",
    tools: ["Python", "KoBERT", "PyTorch", "Pandas"],
    progress: 100,
    timeline: [
      { label: "데이터 수집", completed: true },
      { label: "데이터 증식", completed: true },
      { label: "모델 학습", completed: true },
      { label: "결과 시각화", completed: true },
      { label: "인사이트 도출", completed: true },
    ],
  },
];

// Helper function to render text with bold keywords
const renderDescriptionWithHighlights = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const keyword = part.slice(2, -2);
      return (
        <span key={index} className="font-semibold text-primary">
          {keyword}
        </span>
      );
    }
    return part;
  });
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block opacity-0 animate-fade-in">
            PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
            주요 <span className="text-gradient">프로젝트</span>
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
            실제로 진행했던 프로젝트들을 소개합니다
          </p>
        </div>

        {/* All Projects - 2 column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 opacity-0 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Image overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent group-hover:via-background/80 transition-colors duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md ${tag.color} group-hover:scale-105 transition-transform duration-300`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300">
                  {renderDescriptionWithHighlights(project.description)}
                </p>
                
                {/* Link */}
                <span className="inline-flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all duration-300">
                  <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  자세히 보기
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden bg-card border-border p-0">
          {selectedProject && (
            <div className="flex flex-col max-h-[90vh]">
              <VisuallyHidden>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </VisuallyHidden>
              
              {/* Image - Fixed at top */}
              <div className="relative w-full h-48 flex-shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 -mt-8 relative z-10">
                {/* Title */}
                <h2 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h2>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

              {/* Project Info */}
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">기간</p>
                    <p className="text-sm font-medium">{selectedProject.period}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">참여</p>
                    <p className="text-sm font-medium">{selectedProject.team}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Wrench className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">기술 스택</p>
                    <p className="text-sm font-medium">{selectedProject.tools.length}개</p>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3 text-muted-foreground">사용 기술</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-sm bg-muted rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-muted-foreground">진행률</h4>
                  <span className="text-sm font-bold text-primary">{selectedProject.progress}%</span>
                </div>
                <Progress value={selectedProject.progress} className="h-2" />
              </div>

              {/* Timeline */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-4 text-muted-foreground">프로젝트 타임라인</h4>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border" />
                  
                  <div className="space-y-3">
                    {selectedProject.timeline.map((step, index) => (
                      <div key={index} className="flex items-center gap-3 relative">
                        {step.completed ? (
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 bg-card z-10" />
                        ) : (
                          <Circle className="w-6 h-6 text-muted-foreground flex-shrink-0 bg-card z-10" />
                        )}
                        <span className={`text-sm ${step.completed ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3 text-muted-foreground">프로젝트 설명</h4>
                <div className="p-5 rounded-lg bg-muted/30 border border-border/50">
                  <p className="text-base leading-8 text-foreground">
                    {renderDescriptionWithHighlights(selectedProject.fullDescription)}
                  </p>
                </div>
              </div>

              {/* External Link */}
              {selectedProject.link && (
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    프로젝트 바로가기
                  </a>
                </div>
              )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
