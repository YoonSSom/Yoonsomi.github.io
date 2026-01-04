import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "todosign",
    title: "비대면 수술 동의서 전자서명 서비스",
    description: "병원 방문 없이 비대면으로 수술 동의서에 전자서명을 할 수 있는 서비스. 환자와 의료진 모두의 편의성을 높이고, 종이 문서 관리의 번거로움을 해소합니다.",
    tags: [
      { label: "React", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "전자서명", color: "bg-purple-500/20 text-purple-400" },
      { label: "의료 서비스", color: "bg-pink-500/20 text-pink-400" },
    ],
    link: "https://todosign.lovable.app",
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
  },
  {
    id: "commercial",
    title: "상업적 웹사이트 운영",
    description: "직접 기획하고 개발한 상업용 웹사이트를 통해 제품(또는 서비스)을 홍보하고 실질적인 판매/문의 유입을 목표로 운영.",
    tags: [
      { label: "웹 개발", color: "bg-green-500/20 text-green-400" },
      { label: "기획", color: "bg-blue-500/20 text-blue-400" },
      { label: "운영", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  },
  {
    id: "medical-segmentation",
    title: "의료 영상 분석 대회",
    description: "5개 기관의 조직 내 주요 기능 세포(FTUs)를 정확하게 분할(Segmentation)하는 의료 영상 분석 대회 참가.",
    tags: [
      { label: "AI", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "Segmentation", color: "bg-purple-500/20 text-purple-400" },
      { label: "의료 영상", color: "bg-pink-500/20 text-pink-400" },
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop",
  },
  {
    id: "ocr",
    title: "OCR 메뉴판 번역 시스템",
    description: "한국을 방문한 외국인 관광객이 식당에서 한국어 메뉴판을 실시간으로 인식하고 번역할 수 ...",
    tags: [
      { label: "OCR", color: "bg-gray-500/20 text-gray-300" },
      { label: "Python", color: "bg-gray-500/20 text-gray-300" },
    ],
    featured: false,
  },
  {
    id: "drowsy-detection",
    title: "안전운전 (졸음 인식)",
    description: "YOLOv4와 Darknet을 활용해 사용자의 눈 상태(감김/떠짐)를 실시간으로 인식하여 졸음...",
    tags: [
      { label: "YOLOv4", color: "bg-gray-500/20 text-gray-300" },
      { label: "Darknet", color: "bg-gray-500/20 text-gray-300" },
    ],
    featured: false,
  },
  {
    id: "socar",
    title: "차량 파손 인식 (쏘카)",
    description: "Semantic Segmentation 기법을 활용해 자동차 외관 파손 부위를 픽셀 단위로 인식하는 AI...",
    tags: [
      { label: "Semantic Segmentation", color: "bg-gray-500/20 text-gray-300" },
      { label: "AI", color: "bg-gray-500/20 text-gray-300" },
    ],
    featured: false,
  },
  {
    id: "musinsa",
    title: "MUSINSA 감성 분석",
    description: "리뷰를 읽고 감정을 해석해 다음 시즌을 설계. 감성 분석부터 데이터 증식, 별점 예측까지 진...",
    tags: [
      { label: "감성 분석", color: "bg-gray-500/20 text-gray-300" },
      { label: "NLP", color: "bg-gray-500/20 text-gray-300" },
    ],
    featured: false,
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

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

        {/* Featured Projects - 2 column grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featuredProjects.slice(0, 2).map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Link */}
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  자세히 보기
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Third featured project - full width or centered */}
        {featuredProjects.length > 2 && (
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 opacity-0 animate-fade-in md:col-span-2 md:max-w-[calc(50%-12px)]"
              style={{ animationDelay: "400ms" }}
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={featuredProjects[2].image}
                  alt={featuredProjects[2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {featuredProjects[2].tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{featuredProjects[2].title}</h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {featuredProjects[2].description}
                </p>
                
                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  자세히 보기
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Regular Projects - 4 column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regularProjects.map((project, index) => (
            <div
              key={project.id}
              className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${500 + index * 50}ms` }}
            >
              {/* Header with tags and arrow */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-2 py-0.5 text-xs font-medium rounded ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              {/* Title */}
              <h3 className="text-base font-bold mb-2">{project.title}</h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
