import { useState, useEffect, useCallback } from "react";
import { ExternalLink, Calendar, Users, CheckCircle2, Circle, TrendingUp, GitBranch, FileText, Target, Briefcase, Wrench, BarChart3, MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
interface Project {
  id: string;
  title: string;
  summary: string; // 한 줄 요약
  problemGoal: string[]; // 문제/목표 bullets
  myRole: {
    planning: string[]; // 기획 역할
    development: string[]; // 개발 역할
    other: string[]; // 기타 역할
  };
  techStack: string[]; // 사용 기술
  results: string[]; // 성과 bullets (전/후 비교, 지표 변화)
  collaboration: string[]; // 협업·커뮤니케이션
  tags: { label: string; color: string }[];
  link?: string;
  github?: string;
  docs?: string;
  image: string;
  period: string;
  team: string;
}

const projects: Project[] = [
  {
    id: "todosign",
    title: "비대면 수술 동의서 전자서명 서비스",
    summary: "고령 환자의 병원 방문 부담을 줄이고, 수술 동의서 서명 완료율을 94%까지 끌어올린 모바일 최적화 전자서명 서비스",
    problemGoal: [
      "코로나19 이후 고령 환자의 병원 방문 부담 증가로 수술 동의서 서명 지연 빈발",
      "의료진 인터뷰 결과, 환자 10명 중 3명이 서명만을 위해 별도 내원하는 비효율 발생",
      "목표: 모바일 기반 전자서명으로 서명 완료율 80% 이상 달성",
    ],
    myRole: {
      planning: [
        "의료진 5명 대상 인터뷰 진행, 핵심 페인포인트 3가지 도출",
        "사용자 플로우 설계 및 법적 효력 요구사항 정리",
        "성공 지표(완료율, 처리 시간, 모바일 비율) 정의",
      ],
      development: [
        "React + TypeScript 기반 반응형 UI 구현",
        "고령층 접근성 고려한 터치 영역 확대(기존 대비 2배)",
        "전자서명 API 연동 및 Supabase 기반 데이터 저장",
      ],
      other: [
        "Figma 프로토타입으로 의료진과 3회 피드백 세션 진행",
        "법적 효력 관련 외부 법무 자문 결과 반영",
      ],
    },
    techStack: ["React", "TypeScript", "Tailwind CSS", "전자서명 API", "Supabase", "Figma"],
    results: [
      "서명 완료율: 기존 오프라인 대비 → 94% 달성 (목표 80% 초과)",
      "처리 시간: 30분 → 3분으로 90% 단축",
      "모바일 사용률: 78% (고령층 접근성 개선 확인)",
      "파일럿 테스트 후 의료진 만족도 4.5/5",
    ],
    collaboration: [
      "의료진(간호팀장, 외과 전문의)과 주 1회 피드백 미팅 진행",
      "비개발자 대상 전자서명 법적 요건 설명 및 플로우 조율",
      "Notion에 가설-실험-결과 문서화, 의사결정 히스토리 공유",
    ],
    tags: [
      { label: "End-to-End", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "헬스케어", color: "bg-purple-500/20 text-purple-400" },
      { label: "MVP", color: "bg-pink-500/20 text-pink-400" },
    ],
    link: "https://todosign.lovable.app",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    period: "2024.01 - 2024.03",
    team: "1인 (기획~배포)",
  },
  {
    id: "commercial",
    title: "디저트 커머스 웹사이트",
    summary: "SEO 최적화와 GA4 데이터 분석으로 광고비 0원에 월 2,400+ 방문자를 달성한 디저트 커머스 플랫폼",
    problemGoal: [
      "오프라인 중심 베이커리의 신규 고객 유입 한계",
      "광고비 지출 없이 온라인 판로 확대 필요",
      "목표: 6개월 내 월 2,000 방문자 + 전환율 2% 이상 달성",
    ],
    myRole: {
      planning: [
        "타겟 페르소나 정의 및 고객 여정 맵 작성",
        "SEO 키워드 리서치 및 콘텐츠 전략 수립",
        "주간 KPI 대시보드 설계 및 A/B 테스트 백로그 관리",
      ],
      development: [
        "Next.js SSG 기반 SEO 최적화 구현",
        "GA4 + GTM 세팅 및 이벤트 트래킹 구축",
        "Core Web Vitals 최적화 (LCP 2.1초 달성)",
      ],
      other: [
        "사장님(비개발자)에게 GA4 리포트 읽는 법 교육",
        "개선 사례 블로그 5편 작성",
      ],
    },
    techStack: ["React", "Next.js", "GA4", "GTM", "Google Search Console", "Tailwind CSS"],
    results: [
      "월 방문자: 0명 → 2,400+ (목표 2,000 초과)",
      "전환율: 3.2% (업계 평균 2% 대비 160%)",
      "광고비: ₩0 (100% 유기적 성장)",
      "평균 체류 시간: 2분 34초",
    ],
    collaboration: [
      "사장님(비개발자)과 주 1회 성과 리뷰 미팅",
      "SEO/데이터 분석 용어를 쉽게 설명하는 가이드 문서 제공",
      "가설-실험-결과 로그 30건+ 누적, 협업 히스토리 투명화",
    ],
    tags: [
      { label: "Growth", color: "bg-green-500/20 text-green-400" },
      { label: "Data-Driven", color: "bg-blue-500/20 text-blue-400" },
      { label: "운영중", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    link: "https://dessertlyn.lovable.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    period: "2023.06 - 현재",
    team: "1인 (기획~운영)",
  },
  {
    id: "medical-segmentation",
    title: "의료 영상 FTU 분할 모델",
    summary: "U-Net 앙상블 + TTA 전략으로 Dice Score 8.6% 향상, Kaggle 1,175팀 중 상위 12% 달성",
    problemGoal: [
      "의료 연구에서 FTU(Functional Tissue Unit) 수동 분할에 평균 2시간 소요",
      "연구 효율성 개선을 위한 자동화된 분할 모델 필요",
      "목표: 단일 모델 대비 Dice Score 5% 이상 개선",
    ],
    myRole: {
      planning: [
        "EDA 기반 데이터 특성 분석 및 가설 수립",
        "실험 파이프라인 설계: 가설-실험-분석 프로세스 정의",
        "47회 실험 계획 수립 및 우선순위 결정",
      ],
      development: [
        "EfficientNet 백본 U-Net 아키텍처 구현",
        "W&B 기반 실험 로깅 및 하이퍼파라미터 추적",
        "5-fold 앙상블 + TTA(Test Time Augmentation) 파이프라인 구축",
      ],
      other: [
        "팀원 2명에게 실험 설계 방법론 공유",
        "비전공 팀원 대상 모델 아키텍처 설명 세션 진행",
      ],
    },
    techStack: ["Python", "PyTorch", "U-Net", "EfficientNet", "W&B", "Albumentations"],
    results: [
      "Dice Score: 베이스라인 0.78 → 0.847 (8.6%↑, 목표 5% 초과)",
      "Kaggle 순위: 1,175팀 중 상위 12%",
      "TTA 단독 효과: 1.5% 성능 향상 (가장 가성비 높은 개선)",
      "실험 효율: 체계적 로깅으로 재현 가능한 47회 실험 완료",
    ],
    collaboration: [
      "팀원 3명 역할 분담: 데이터 전처리 / 모델 실험 / 앙상블 최적화",
      "Notion에 가설-결과 문서화, 주 2회 실험 결과 리뷰 미팅",
      "GitHub PR 기반 코드 리뷰로 품질 관리",
    ],
    tags: [
      { label: "ML Pipeline", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "실험관리", color: "bg-purple-500/20 text-purple-400" },
      { label: "Top 12%", color: "bg-pink-500/20 text-pink-400" },
    ],
    github: "https://github.com/username/hubmap-segmentation",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop",
    period: "2022.09 - 2022.12",
    team: "팀 (3인)",
  },
  {
    id: "ocr",
    title: "다국어 메뉴판 번역 시스템",
    summary: "이미지 전처리 최적화로 OCR 정확도 89% 달성, 외국인 관광객 메뉴 이해 문제 해결",
    problemGoal: [
      "외국인 관광객 10명 인터뷰 결과, 7명이 한국 식당 메뉴 이해에 어려움 호소",
      "기존 번역 앱의 메뉴판 인식률 저조 (조명/각도에 민감)",
      "목표: 조명/각도 보정 전처리로 OCR 정확도 80% 이상 달성",
    ],
    myRole: {
      planning: [
        "외국인 유학생 10명 대상 사용자 인터뷰 진행, 핵심 니즈 도출",
        "성공 지표 정의: OCR 정확도 80%+, 응답 시간 2초 이내",
        "MVP 기능 범위 결정 및 스프린트 계획 수립",
      ],
      development: [
        "OpenCV 기반 전처리 파이프라인 구축 (이진화, 노이즈 제거, 기울기 보정)",
        "Tesseract OCR + Google Translate API 연동",
        "Flask 기반 REST API 개발",
      ],
      other: [
        "디자이너와 UI/UX 협의, 모바일 최적화 플로우 조율",
        "외국인 유학생 10명 대상 사용성 테스트 진행",
      ],
    },
    techStack: ["Python", "Tesseract OCR", "OpenCV", "Google Translate API", "Flask"],
    results: [
      "OCR 정확도: 전처리 전 62% → 전처리 후 89% (27%p↑, 목표 80% 초과)",
      "응답 시간: 평균 1.2초 (목표 2초 이내 달성)",
      "지원 언어: 5개 (영어, 중국어, 일본어, 베트남어, 태국어)",
      "사용성 테스트 만족도: 4.2/5 (외국인 유학생 10명)",
    ],
    collaboration: [
      "팀원 4명 역할 분담: 사용자 리서치 / OCR 개발 / 번역 API / UI 구현",
      "Trello로 스프린트 관리, 주간 스탠드업 진행",
      "비개발자(외국인 유학생)에게 기술적 제약 설명 후 요구사항 조율",
    ],
    tags: [
      { label: "사용자중심", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "MVP", color: "bg-purple-500/20 text-purple-400" },
      { label: "팀협업", color: "bg-pink-500/20 text-pink-400" },
    ],
    github: "https://github.com/username/menu-translator",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop",
    period: "2022.03 - 2022.06",
    team: "팀 (4인)",
  },
  {
    id: "drowsy-detection",
    title: "실시간 졸음 운전 감지 시스템",
    summary: "YOLOv4 기반 실시간 감지로 정확도 96.3%, 45FPS 달성. 졸음 운전 조기 경고 시스템 구현",
    problemGoal: [
      "졸음 운전 교통사고 연간 2,000건+, 사망률이 일반 사고 대비 3배",
      "기존 솔루션은 실시간성 부족하거나 정확도 낮음",
      "목표: 문헌 기반 2초 이상 눈 감김 시 졸음 상태 감지, 실시간(30FPS+) 경고",
    ],
    myRole: {
      planning: [
        "졸음 운전 관련 문헌 조사, '2초 눈 감김' 기준 가설 수립",
        "정확도 vs 속도 트레이드오프 분석 및 우선순위 결정 (안전 시스템이므로 Recall 우선)",
        "데이터 수집 계획 수립: 눈 열림/감김 이미지 라벨링 가이드 작성",
      ],
      development: [
        "YOLOv4 커스텀 학습 (눈 열림/감김 2클래스 분류)",
        "CUDA 기반 GPU 가속 최적화",
        "OpenCV 기반 실시간 비디오 처리 파이프라인 구축",
      ],
      other: [
        "팀원에게 YOLO 아키텍처 및 학습 방법 교육",
        "시연 영상 제작 및 최종 발표 진행",
      ],
    },
    techStack: ["Python", "YOLOv4", "Darknet", "OpenCV", "CUDA"],
    results: [
      "감지 정확도: 96.3% (Recall 기준, 미탐 최소화)",
      "처리 속도: 45FPS (목표 30FPS 초과)",
      "경고 지연: 0.5초 이내",
      "시뮬레이션 테스트: 졸음 상태 100% 감지 성공",
    ],
    collaboration: [
      "팀원 3명 역할 분담: 데이터 라벨링 / 모델 학습 / 시스템 통합",
      "주 3회 진척 공유 미팅, Notion으로 실험 결과 문서화",
      "비전공 교수님께 '왜 2초인가' 기준 설명, 문헌 근거 제시",
    ],
    tags: [
      { label: "실시간", color: "bg-green-500/20 text-green-400" },
      { label: "트레이드오프", color: "bg-blue-500/20 text-blue-400" },
      { label: "Safety", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    github: "https://github.com/username/drowsy-detection",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    period: "2021.09 - 2021.12",
    team: "팀 (3인)",
  },
  {
    id: "socar",
    title: "공유차량 파손 자동 감지 시스템",
    summary: "Focal Loss로 클래스 불균형 해결, mIoU 0.72 달성. 스크래치 감지 IoU 0.81로 핵심 파손 유형 고성능 확보",
    problemGoal: [
      "공유차량 반납 시 파손 수동 확인에 평균 5분 소요, 인력 비용 및 고객 분쟁 발생",
      "파손 데이터 클래스 불균형 심각 (스크래치 80%, 찌그러짐 15%, 파손 5%)",
      "목표: Focal Loss 적용으로 소수 클래스 성능 개선, mIoU 0.7 이상 달성",
    ],
    myRole: {
      planning: [
        "EDA 기반 클래스 불균형 분석 및 가설 수립",
        "Loss 함수 실험 계획: Cross Entropy vs Focal Loss A/B 비교",
        "성공 지표 정의: mIoU 0.7+, 스크래치(핵심 유형) IoU 0.75+",
      ],
      development: [
        "DeepLab V3+ Semantic Segmentation 모델 구현",
        "Focal Loss + 클래스 가중치 적용",
        "Albumentations 기반 다양한 Augmentation 실험",
      ],
      other: [
        "팀원 4명에게 Semantic Segmentation 기초 개념 설명",
        "실험 결과 시각화 자료 제작",
      ],
    },
    techStack: ["Python", "PyTorch", "DeepLab V3+", "OpenCV", "Albumentations"],
    results: [
      "mIoU: 베이스라인 0.58 → 0.72 (24%↑, 목표 0.7 초과)",
      "스크래치 IoU: 0.81 (핵심 파손 유형에서 높은 성능)",
      "Focal Loss 효과: 소수 클래스(찌그러짐) IoU 0.34 → 0.52 (53%↑)",
      "학습 시간: V100 GPU 기준 8시간",
    ],
    collaboration: [
      "팀원 5명 역할 분담: 데이터 전처리 / 모델 구현 / Loss 실험 / Augmentation / 통합",
      "Git Flow 브랜치 전략, 주 1회 실험 결과 공유 미팅",
      "비전공 PM에게 mIoU, Focal Loss 개념을 비유로 설명",
    ],
    tags: [
      { label: "클래스불균형", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "팀협업", color: "bg-purple-500/20 text-purple-400" },
    ],
    github: "https://github.com/username/car-damage-detection",
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&h=500&fit=crop",
    period: "2022.01 - 2022.02",
    team: "팀 (5인)",
  },
  {
    id: "musinsa",
    title: "패션 리뷰 감성분석 및 트렌드 예측",
    summary: "데이터 증식으로 클래스 불균형 해결, KoBERT 분류 정확도 91.2% 달성. 52,000건 리뷰에서 시즌별 트렌드 인사이트 도출",
    problemGoal: [
      "시즌별 트렌드 파악을 위해 수만 건의 리뷰를 수동으로 읽는 것은 비효율적",
      "중립 리뷰 데이터 부족으로 3클래스(긍정/중립/부정) 분류 성능 저조",
      "목표: Back-translation 데이터 증식으로 분류 정확도 90% 이상 달성",
    ],
    myRole: {
      planning: [
        "EDA 기반 클래스 불균형 분석: 긍정 45%, 부정 40%, 중립 15%",
        "데이터 증식 전략 수립: Back-translation + EDA(Easy Data Augmentation)",
        "시즌별 트렌드 분석 방법론 설계",
      ],
      development: [
        "KoBERT Fine-tuning 파이프라인 구축",
        "Back-translation (한→영→한) + EDA로 중립 데이터 3배 증강",
        "Hugging Face Trainer API 활용 학습 자동화",
      ],
      other: [
        "마케팅팀(비개발자)에게 감성분석 결과 활용법 설명",
        "시즌별 트렌드 인사이트 보고서 15페이지 작성",
      ],
    },
    techStack: ["Python", "KoBERT", "PyTorch", "Pandas", "Hugging Face", "Matplotlib"],
    results: [
      "분류 정확도: 증식 전 78% → 증식 후 91.2% (목표 90% 초과)",
      "데이터 규모: 52,000건 리뷰 분석 완료",
      "중립 클래스 증강: 기존 대비 3배↑",
      "비즈니스 인사이트: 시즌별 긍정/부정 트렌드 5개 도출",
    ],
    collaboration: [
      "팀원 4명 역할 분담: 크롤링 / 전처리·증식 / 모델 학습 / 시각화·보고서",
      "주간 Zoom 미팅, 실험 결과 공유 스프레드시트 운영",
      "마케팅팀에 'AI가 리뷰를 읽는 법' 비유로 설명, 인사이트 활용 방안 협의",
    ],
    tags: [
      { label: "데이터품질", color: "bg-green-500/20 text-green-400" },
      { label: "NLP", color: "bg-blue-500/20 text-blue-400" },
      { label: "인사이트", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    github: "https://github.com/username/musinsa-sentiment",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
    period: "2022.04 - 2022.06",
    team: "팀 (4인)",
  },
];

const ProjectCard = ({ 
  project, 
  index, 
  onClick 
}: { 
  project: Project; 
  index: number; 
  onClick: () => void;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}
      style={{ 
        transitionDelay: `${index * 80}ms`,
        transitionProperty: "all"
      }}
    >
      {/* Image */}
      <div className="aspect-[2/1] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag.label}
              className={`px-2 py-0.5 text-[10px] font-medium rounded ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h3 className="text-sm font-semibold mb-1.5 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h3>
        
        {/* Summary */}
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {project.summary}
        </p>
        
        {/* Footer: Period + CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <span className="text-[10px] text-muted-foreground">{project.period}</span>
          <span className="text-[10px] text-primary font-medium flex items-center gap-1 group-hover:gap-1.5 transition-all">
            자세히
            <ExternalLink className="w-2.5 h-2.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

const BulletList = ({ items, icon: Icon, highlight = false }: { items: string[]; icon?: React.ElementType; highlight?: boolean }) => (
  <ul className="space-y-2">
    {items.map((item, idx) => (
      <li 
        key={idx} 
        className={`text-sm leading-relaxed flex items-start gap-2.5 ${
          highlight ? 'text-foreground' : 'text-foreground/80'
        }`}
      >
        {Icon ? (
          <Icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 flex-shrink-0" />
        )}
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section id="projects" className="min-h-screen py-24 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 md:mb-16 transition-all duration-700 ${
            headerVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            PROJECTS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            주요 <span className="text-gradient">프로젝트</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            문제 발견부터 성과 측정까지, End-to-End 프로젝트 경험
          </p>
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="-ml-2">
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="pl-2 basis-[85%]">
                  <ProjectCard
                    project={project}
                    index={0}
                    onClick={() => setSelectedProject(project)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Dot Indicators */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? "bg-primary w-4" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="w-[95vw] max-w-3xl max-h-[85vh] md:max-h-[90vh] overflow-hidden bg-card border-border p-0">
          {selectedProject && (
            <div className="flex flex-col max-h-[85vh] md:max-h-[90vh]">
              <VisuallyHidden>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.summary}</DialogDescription>
              </VisuallyHidden>
              
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Header Section */}
                <div className="p-4 md:p-8 pb-4 md:pb-6 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-medium rounded-full ${tag.color}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">{selectedProject.title}</h2>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed">{selectedProject.summary}</p>
                  
                  {/* Quick Info */}
                  <div className="flex items-center gap-4 md:gap-6 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border/30">
                    <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm">
                      <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                      <span className="font-medium">{selectedProject.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm">
                      <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                      <span className="font-medium">{selectedProject.team}</span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-4 md:p-8 space-y-5 md:space-y-8">
                  
                  {/* 문제/목표 */}
                  <div className="p-3 md:p-5 rounded-xl bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary">
                    <h4 className="text-xs md:text-sm font-bold text-foreground mb-2 md:mb-3 flex items-center gap-2">
                      <Target className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                      문제 / 목표
                    </h4>
                    <BulletList items={selectedProject.problemGoal} highlight />
                  </div>

                  {/* 나의 역할 - 모바일에서 세로 배치 */}
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                      나의 역할
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                      {selectedProject.myRole.planning.length > 0 && (
                        <div className="p-3 md:p-4 rounded-lg bg-muted/50 border border-border/50">
                          <p className="text-[10px] md:text-xs font-bold text-primary mb-2 md:mb-3 uppercase tracking-wide">기획</p>
                          <ul className="space-y-1.5 md:space-y-2">
                            {selectedProject.myRole.planning.map((item, idx) => (
                              <li key={idx} className="text-[11px] md:text-sm text-foreground/80 flex items-start gap-1.5 md:gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary mt-1.5 md:mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {selectedProject.myRole.development.length > 0 && (
                        <div className="p-3 md:p-4 rounded-lg bg-muted/50 border border-border/50">
                          <p className="text-[10px] md:text-xs font-bold text-primary mb-2 md:mb-3 uppercase tracking-wide">개발</p>
                          <ul className="space-y-1.5 md:space-y-2">
                            {selectedProject.myRole.development.map((item, idx) => (
                              <li key={idx} className="text-[11px] md:text-sm text-foreground/80 flex items-start gap-1.5 md:gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary mt-1.5 md:mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {selectedProject.myRole.other.length > 0 && (
                        <div className="p-3 md:p-4 rounded-lg bg-muted/50 border border-border/50">
                          <p className="text-[10px] md:text-xs font-bold text-primary mb-2 md:mb-3 uppercase tracking-wide">협업</p>
                          <ul className="space-y-1.5 md:space-y-2">
                            {selectedProject.myRole.other.map((item, idx) => (
                              <li key={idx} className="text-[11px] md:text-sm text-foreground/80 flex items-start gap-1.5 md:gap-2">
                                <span className="w-1 h-1 rounded-full bg-primary mt-1.5 md:mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 사용 기술 */}
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                      <Wrench className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                      사용 기술
                    </h4>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 md:px-3 py-1 md:py-1.5 text-[11px] md:text-sm bg-muted rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 성과 */}
                  <div className="p-3 md:p-5 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h4 className="text-xs md:text-sm font-bold text-foreground mb-2 md:mb-3 flex items-center gap-2">
                      <BarChart3 className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-500" />
                      성과 (전/후 비교 & 지표)
                    </h4>
                    <BulletList items={selectedProject.results} icon={TrendingUp} highlight />
                  </div>

                  {/* 협업·커뮤니케이션 */}
                  <div className="p-5 rounded-xl bg-muted/30 border border-border/50">
                    <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      협업 · 커뮤니케이션
                    </h4>
                    <BulletList items={selectedProject.collaboration} icon={CheckCircle2} />
                  </div>
                </div>

                {/* Footer - Links */}
                <div className="px-8 py-5 border-t border-border/50 bg-muted/20 flex flex-wrap gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      데모 보기
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <GitBranch className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                  {selectedProject.docs && (
                    <a
                      href={selectedProject.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      문서
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
