import { useState, useEffect, useCallback } from "react";
import { ExternalLink, Calendar, Users, CheckCircle2, Circle, TrendingUp, GitBranch, FileText, Target, Briefcase, Wrench, BarChart3, MessageSquare, Play, Radio } from "lucide-react";
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
  isLive?: boolean;
  github?: string;
  docs?: string;
  image: string;
  period: string;
  team: string;
  
}

const technicalProjects: Project[] = [
  {
    id: "medical-segmentation",
    title: "Hacking The Human Body Hubmap 대회",
    summary: "HuBMAP 데이터셋 기반 Semantic Segmentation을 통해 FTU를 자동 분할하고, 다양한 데이터 처리 및 앙상블 전략으로 모델 성능을 개선한 프로젝트",
    problemGoal: [
      "FTU 분할은 의료 연구에서 필수적이지만 수작업 비용이 매우 큼",
      "제공된 이미지 해상도(최대 3000×3000)로 인해 메모리 및 학습 효율 문제 발생",
      "테스트 데이터의 해상도가 다양하여 일반화 성능 확보가 어려움",
      "목표: Dice Score 기준 Baseline 대비 +5% 이상 성능 개선, 대용량 이미지 처리 효율 개선, 다양한 데이터 분포에 대응 가능한 모델 구축",
    ],
    myRole: {
      planning: [
        "EDA 기반 데이터 특성 분석 및 가설 수립",
        "RLE 기반 마스크 처리로 메모리 효율 개선 전략 설계",
        "이미지 타일링(256×256, 512×512) 및 stride 기반 데이터 확장 전략 수립",
        "Multi-scale dataset 구성 및 Multi-class 라벨링 전략 설계",
      ],
      development: [
        "U-Net 기반 segmentation 모델 구현 (EfficientNet b1/b3/b5, ResNeSt 101/200/269 encoder 비교 실험)",
        "K-Fold Cross Validation 및 Fast-AI 기반 Head training → Full fine-tuning 적용",
        "Inference 최적화: size 512, reduce 3, threshold 0.225 최적 파라미터 도출",
        "Heterogeneous ensemble (EfficientNet + ResNeSt, 다양한 해상도 조합) 및 TTA 적용",
      ],
      other: [
        "Notion 기반 가설–결과 기록 및 주 5회 실험 리뷰 미팅",
        "GitHub PR 기반 코드 리뷰",
      ],
    },
    techStack: ["Python", "PyTorch", "Fast-AI", "MMSegmentation", "Albumentations", "OpenCV", "Pandas", "Sklearn", "W&B", "Google Colab", "AWS"],
    results: [
      "Public Score: 0.78 / Private Score: 0.76 (Final)",
      "Rank: 124 / 1,245 팀 (상위 약 12%)",
      "Stride 적용 시 성능 유의미하게 향상 (stride 128 → 10,943개, stride 64 → 34,412개)",
      "모델 복잡도에 따른 최적 데이터셋 차이 확인 (b1/b3 → 256+stride128, b5 → stride64)",
    ],
    collaboration: [
      "역할 분담: 데이터 전처리 / 모델링 / 앙상블 최적화",
      "Notion 기반 가설–결과 기록, 주 5회 실험 리뷰 미팅",
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
    team: "팀 프로젝트 (5인)",
  },
];

const projects: Project[] = [
  {
    id: "todosign",
    title: "AI 기반 비대면 수술 동의 서비스 기획 (KT)",
    summary: "AI·UX·데이터 기반 의료 동의 프로세스 디지털 전환(DX) — AI 아바타 설명, LLM Q&A, 전자서명을 결합하여 환자 이해도를 높이고 의료진 업무 효율 및 법적 리스크를 개선한 서비스 기획 프로젝트",
    problemGoal: [
      "복잡한 수술 동의서 → 환자 이해도 저하",
      "반복 설명 → 의료진 리소스 낭비",
      "증빙 부족 → 법적 리스크 발생",
      "JTBD: '환자는 수술 전, 정확한 이해를 바탕으로 안전하게 동의하고 싶다'",
      "KPI 설계: 설명 시간(↓), 환자 이해도(↑), 반복 질문 수(↓), 동의 과정 기록률(100%)",
      "프레임워크: 5 Whys, JTBD(Jobs To Be Done) 적용",
    ],
    myRole: {
      planning: [
        "Product Manager / 서비스 기획 총괄",
        "사용자 정의(Persona): 고령 환자(디지털 이해도 낮음), 의료진(시간 효율 중요)",
        "핵심 접근: AI 아바타 설명 + LLM Q&A + STT/TTS 음성 인터랙션 + 전자서명·녹취/녹화",
        "'설명 → 이해 → 증빙'을 하나의 UX로 통합하는 Product Thinking",
        "User Flow 설계: 인증 → AI 설명 → Q&A → 이해 확인 → 전자서명 → 기록 저장",
        "고령 사용자를 고려한 음성 중심 UX 전략 수립",
        "기능 정의서(PRD) 작성 및 요구사항 명세화",
        "AARRR 기반 그로스 관점 설계 (Acquisition~Referral)",
      ],
      development: [
        "Agile / Sprint 기반 운영: 기획 → UX 설계 → 개발 협업 → QA → 테스트 → 개선",
        "AI 설명 vs 기존 설명 비교, Q&A 도입 전/후 비교 (A/B 테스트 관점 적용)",
        "사용자 반응 기반 UX 개선 반복",
      ],
      other: [
        "개발·디자인·의료진 간 커뮤니케이션 허브 역할 수행",
        "기획 문서 기반 의사결정 구조 수립",
        "데모 중심 피드백 사이클 운영",
        "LLM 자연어 응답, STT/TTS, WebRTC, TLS/AES 보안 구조 이해 기반 기획",
      ],
    },
    techStack: ["React (Responsive Web)", "LLM 기반 Q&A", "STT/TTS", "WebRTC", "TLS 1.3", "AES-256", "PASS / SMS 인증"],
    results: [
      "설명 시간: 60분 → 30분 (약 50% 감소)",
      "환자 이해도: 약 80% 향상",
      "반복 질문: 약 70% 감소",
      "법적 증거 확보: 녹취/녹화 기반 100% 기록 가능",
      "UX 개선 → 이해도 상승 → 반복 질문 감소 → 효율 증가 (퍼널 구조 해석)",
    ],
    collaboration: [
      "기획 문서 기반 의사결정 구조 정립",
      "데모 공유를 통한 빠른 피드백 사이클 운영",
      "디자이너–개발자–의료진 간 커뮤니케이션 허브 역할 수행",
      "이해관계자 협업 문서 작성 및 의료 용어·기술 용어 간 중재",
    ],
    tags: [
      { label: "PM/기획", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "헬스케어 DX", color: "bg-purple-500/20 text-purple-400" },
      { label: "AI·UX", color: "bg-pink-500/20 text-pink-400" },
    ],
    link: "https://todosign.lovable.app",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    period: "2024.01 – 2024.03",
    team: "Agile 기반 협업 프로젝트 (PM / 서비스 기획)",
  },
  {
    id: "commercial",
    title: "디저트 커머스 웹사이트",
    summary: "SEO 최적화 및 GA4 데이터 분석을 기반으로 광고비 없이 유입을 확보하고 전환율을 개선한 디저트 커머스 플랫폼",
    problemGoal: [
      "오프라인 중심 베이커리의 신규 고객 유입 한계",
      "광고 의존도가 높은 구조 → 비용 대비 효율 낮음",
      "온라인 채널 부재로 확장성 제한",
      "목표: 광고비 없이 유입 구조 구축, 6개월 내 월 방문자 2,000명 이상, 전환율 2% 이상 달성",
    ],
    myRole: {
      planning: [
        "타겟 페르소나 정의 및 고객 여정 맵(Customer Journey Map) 설계",
        "SEO 키워드 리서치 및 콘텐츠 전략 수립",
        "KPI 정의 및 주간 성과 대시보드 설계",
        "A/B 테스트 백로그 관리 및 실험 설계",
      ],
      development: [
        "Next.js 기반 SEO 최적화 구조 설계 및 구현 (SSG 적용)",
        "GA4 + GTM 이벤트 트래킹 설계 및 구축",
        "Core Web Vitals 개선 (LCP 2.1초 달성)",
      ],
      other: [
        "비개발자인 사업자 대상 데이터 리포트 해석 교육",
        "SEO 및 데이터 기반 의사결정을 위한 가이드 문서 작성",
        "성과 개선 사례 콘텐츠 제작 (블로그 5건)",
      ],
    },
    techStack: ["React", "Next.js (SSG)", "GA4", "GTM", "Google Search Console", "Tailwind CSS"],
    results: [
      "월 방문자: 0 → 2,400+ (목표 대비 120% 달성)",
      "전환율: 3.2% (업계 평균 대비 약 160%)",
      "광고비: ₩0 (100% 유기적 유입)",
      "평균 체류 시간: 2분 34초",
    ],
    collaboration: [
      "주 1회 성과 리뷰 미팅을 통한 지속적 개선",
      "SEO 및 데이터 분석 개념을 비전문가 기준으로 재정의 및 전달",
      "가설–실험–결과 로그 30건 이상 축적 → 의사결정 투명성 확보",
    ],
    tags: [
      { label: "Growth", color: "bg-green-500/20 text-green-400" },
      { label: "Data-Driven", color: "bg-blue-500/20 text-blue-400" },
      { label: "운영중", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    link: "https://dessertlyn.lovable.app",
    isLive: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    period: "2023.06 – 현재",
    team: "1인 프로젝트 (기획 ~ 운영)",
  },
  {
    id: "ocr",
    title: "한국어 메뉴판 OCR 서비스 개선",
    summary: "YOLOv5 기반 OCR 시스템을 분석하고 실제 사용 환경(메뉴판)에 맞춰 인식 정확도와 처리 구조를 개선한 프로젝트",
    problemGoal: [
      "기존 OCR 시스템은 메뉴판 환경에서 낮은 인식률 발생",
      "세로 텍스트 및 기울어진 이미지에서 Detection/Recognition 정확도 저하",
      "1-stage Detection 구조로 인해 불필요한 영역 포함",
      "목표: 메뉴판 환경 최적화 OCR 구조 설계, 텍스트 방향 인식 정확도 개선, Detection 성능과 처리 속도 간 균형 확보",
    ],
    myRole: {
      planning: [
        "OCR 전체 파이프라인 구조 분석 및 개선 방향 도출",
        "Detection–Recognition 분리 구조(2-stage) 설계",
        "성능 저하 원인 분석 및 개선 우선순위 정의",
        "실제 사용 시나리오 기반 요구사항 정리",
      ],
      development: [
        "YOLOv5, SwinIR, STARNet 기반 파이프라인 구현",
        "2-Stage Detection 구조 도입 (1차 Detection → 텍스트 영역 재검출)",
        "세로/기울기 텍스트 Detection 및 Recognition 처리 구조 구현",
        "SwinIR 기반 Super Resolution 적용으로 저해상도 환경 대응",
      ],
      other: [
        "테스트 이미지 기반 성능 검증 및 구조 개선 반복",
      ],
    },
    techStack: ["YOLOv5", "SwinIR", "STARNet", "PyTorch", "Google Colab"],
    results: [
      "세로 및 기울어진 텍스트 인식 가능 구조 확보",
      "텍스트 영역 추출 정확도 개선",
      "서비스 환경 기준 구조적 문제 해결 및 성능 개선 방향 도출",
    ],
    collaboration: [
      "Google Colab 기반 실험 및 구현",
    ],
    tags: [
      { label: "OCR", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "Computer Vision", color: "bg-purple-500/20 text-purple-400" },
      { label: "구조개선", color: "bg-pink-500/20 text-pink-400" },
    ],
    github: "https://github.com/username/menu-ocr",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop",
    period: "2022.03 - 2022.06",
    team: "팀 프로젝트 (5인)",
  },
  {
    id: "drowsy-detection",
    title: "실시간 졸음 운전 감지 시스템",
    summary: "운전자 상태(눈의 개폐)를 실시간으로 분석하여 졸음 운전을 사전에 감지하고 사고를 예방하는 안전 보조 시스템 기획 및 구현 프로젝트",
    problemGoal: [
      "졸음 운전은 교통사고의 주요 원인 중 하나",
      "운전자가 스스로 졸음을 인지하지 못하는 경우가 많음",
      "기존 안전 장치는 사후 대응 중심으로 사전 예방 기능 부족",
      "목표: 운전자의 눈 상태 기반 졸음 실시간 감지, 위험 상황 사전 인지 구조 설계, 카메라 기반 범용 시스템 구현",
    ],
    myRole: {
      planning: [
        "졸음 운전 문제 분석 및 서비스 적용 시나리오 정의",
        "핵심 판단 기준(눈의 개폐 상태) 설정",
        "실시간 인지 기반 시스템 구조 설계",
        "단순 모델 구현을 넘어 서비스 확장 가능성 고려",
      ],
      development: [
        "YOLOv4 + Darknet 기반 객체 탐지 모델 구현",
        "운전자 얼굴 및 눈 상태 인식 기능 개발",
        "Colab 환경에서 학습 및 테스트 진행",
      ],
      other: [
        "차량 내 안전 시스템(ADAS) 연동 가능성 검토",
        "졸음 감지 시 알림/경고 시스템 추가 가능성 설계",
        "보험/모빌리티 서비스와 결합 가능성 도출",
      ],
    },
    techStack: ["YOLOv4", "Darknet", "Python", "Google Colab", "AIHub 데이터셋"],
    results: [
      "얼굴/눈(Open/Closed) 상태 실시간 인식 가능",
      "카메라 기반 졸음 운전 감지 구조 구현",
      "단순 객체 인식 → 운전자 상태 판단으로 확장 가능성 확보",
    ],
    collaboration: [
      "팀 5인 역할 분담: 기획 / 데이터 수집 / 모델 구현 / 테스트 / 발표",
    ],
    tags: [
      { label: "서비스확장", color: "bg-green-500/20 text-green-400" },
      { label: "Safety", color: "bg-yellow-500/20 text-yellow-400" },
      { label: "Computer Vision", color: "bg-purple-500/20 text-purple-400" },
    ],
    github: "https://github.com/username/drowsy-detection",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    period: "2021.09 - 2021.12",
    team: "팀 프로젝트 (5인)",
  },
  {
    id: "socar",
    title: "자동차 파손 자동 판별 시스템",
    summary: "차량 이미지 기반으로 파손 부위를 자동 탐지하고, 보험 및 차량 점검 과정의 비효율적인 검수 구조를 개선하기 위한 서비스 기획 프로젝트",
    problemGoal: [
      "차량 파손 여부 및 범위를 사람이 직접 확인해야 하는 비효율적인 프로세스",
      "검수자마다 기준이 달라 결과의 일관성이 떨어짐",
      "보험 처리 및 견적 산정 과정에서 시간과 인력 비용이 과도하게 발생",
      "목표: 이미지 기반 파손 부위 자동 판별 구조 설계, 파손 유형 및 범위 정량화, 검수 프로세스 효율성과 일관성 확보",
    ],
    myRole: {
      planning: [
        "차량 파손 검수 프로세스 분석 및 문제 정의",
        "기술 적용 방향 및 모델 선택 기준 수립 (Object Detection vs Semantic Segmentation)",
        "데이터 구조 및 분류 기준 설계 (파손 '형태' 기준 분류 체계)",
        "서비스 적용을 고려한 전체 구조 기획 (보험/견적 시스템 연동)",
      ],
      development: [
        "데이터셋 직접 구축 및 정제",
        "Segmentation 모델 적용 및 성능 비교",
        "실험 로그 관리 및 개선 반복",
      ],
      other: [
        "보험사 자동 견적 시스템 연동 가능성 검토",
        "중고차 거래 시 상태 평가 자동화 방안 도출",
        "렌터카/카셰어링 차량 점검 효율화 시나리오 설계",
      ],
    },
    techStack: ["Python", "PyTorch", "Semantic Segmentation", "OpenCV", "Albumentations"],
    results: [
      "차량 파손 부위를 픽셀 단위로 탐지 가능한 구조 구현",
      "파손 유형별 분류 가능 → 데이터 기반 판단 가능성 확보",
      "수작업 검수 프로세스의 자동화 가능성 검증",
    ],
    collaboration: [
      "기술 구현을 통해 기획 검증까지 수행",
    ],
    tags: [
      { label: "서비스기획", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "Computer Vision", color: "bg-purple-500/20 text-purple-400" },
      { label: "프로세스개선", color: "bg-green-500/20 text-green-400" },
    ],
    github: "https://github.com/username/car-damage-detection",
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&h=500&fit=crop",
    period: "2022.01 - 2022.02",
    team: "팀 (5인)",
  },
  {
    id: "musinsa",
    title: "리뷰 기반 상품 평점 신뢰도 개선 시스템",
    summary: "리뷰 텍스트를 기반으로 실제 사용자 만족도를 재분석하여 별점 왜곡 문제를 개선하고, 신뢰도 높은 평가 지표를 제공하기 위한 서비스 기획 프로젝트",
    problemGoal: [
      "기존 별점 시스템은 주관적 기준에 의해 왜곡될 가능성 존재",
      "리뷰 내용과 별점이 일치하지 않는 경우 발생 (예: 낮은 별점 + 긍정 리뷰)",
      "사용자 및 입점 브랜드 모두에게 신뢰도 낮은 평가 기준 제공",
      "목표: 리뷰 텍스트 기반 실제 감정(만족도) 분석 및 신뢰도 높은 상품 평가 지표 설계",
    ],
    myRole: {
      planning: [
        "리뷰 기반 평점 시스템의 문제 정의 및 개선 방향 설계",
        "데이터 수집 및 보완 전략 기획 (부정 리뷰 부족 문제 해결을 위한 외부 데이터 확보)",
        "감성 분석 결과를 평점으로 활용하는 구조 설계",
        "서비스 적용 가능성 및 활용 시나리오 정의",
      ],
      development: [
        "리뷰 데이터 크롤링 및 전처리",
        "텍스트 데이터 증강 전략 적용",
        "감성 분석 모델 기반 결과 검증",
      ],
      other: [
        "커머스 플랫폼 내 신뢰도 높은 평점 시스템 구축 가능성 검토",
        "리뷰 조작 및 평점 왜곡 방지 시나리오 설계",
        "입점 브랜드 평가 및 추천 알고리즘 고도화 방향 제시",
      ],
    },
    techStack: ["KoBERT", "KoGPT2", "Python", "Pandas", "BeautifulSoup", "Selenium", "Hugging Face Transformers", "Google Colab"],
    results: [
      "리뷰 기반 감성 분석을 통해 별점 재산정 구조 구현",
      "리뷰–별점 불일치 문제 개선 가능성 확인",
      "데이터 기반 상품 평가 시스템 설계 경험 확보",
    ],
    collaboration: [
      "팀원 5명 역할 분담: 크롤링 / 전처리 / 감성 분석 / 평점 설계 / 검증",
    ],
    tags: [
      { label: "감성분석", color: "bg-green-500/20 text-green-400" },
      { label: "NLP", color: "bg-blue-500/20 text-blue-400" },
      { label: "데이터기반", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    github: "https://github.com/username/review-reliability",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
    period: "2022.04 - 2022.06",
    team: "팀 프로젝트 (5인)",
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
      className={`${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        transitionDuration: "700ms",
        transitionProperty: "all",
      }}
    >
      <div
        onClick={onClick}
        className="group relative overflow-hidden rounded-3xl bg-card border border-border cursor-pointer transition-all duration-500 hover:scale-105 hover:border-primary/50 hover:shadow-lg"
      >
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden relative">
          {/* Demo/Live Badge */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-xl backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-110 ${
                project.isLive 
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" 
                  : "bg-gradient-to-r from-primary to-purple-500 text-white hover:from-primary/90 hover:to-purple-500/90"
              }`}
            >
              {project.isLive ? (
                <>
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span>Live</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-current" />
                  <span>Demo</span>
                </>
              )}
            </a>
          )}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Content */}
        <div className="p-5 bg-gradient-to-b from-card to-card/95">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.label}
                className={`px-2.5 py-1 text-[10px] font-semibold rounded-full ${tag.color}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h3 className="text-base font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
            {project.title}
          </h3>
          
          {/* Summary */}
          <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
            {project.summary}
          </p>
          
          {/* Footer: Period + CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-border/30">
            <span className="text-[11px] text-muted-foreground font-medium">{project.period}</span>
            <span className="text-[11px] text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              자세히 보기
              <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BulletList = ({ items, icon: Icon, highlight = false, iconColor = "text-primary" }: { items: string[]; icon?: React.ElementType; highlight?: boolean; iconColor?: string }) => (
  <ul className="space-y-2.5">
    {items.map((item, idx) => (
      <li 
        key={idx} 
        className={`text-sm leading-relaxed flex items-start gap-2.5 ${
          highlight ? 'text-foreground' : 'text-foreground/80'
        }`}
      >
        {Icon ? (
          <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon className={`w-3 h-3 ${iconColor} flex-shrink-0`} />
          </div>
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

        {/* Desktop: 3D Perspective Grid */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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

        {/* Technical Projects Section */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              TECHNICAL
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              기술 <span className="text-gradient">프로젝트</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              ML/AI 기반 기술 심화 프로젝트
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {technicalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
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
                <div className="p-4 md:p-8 pb-4 md:pb-6 pt-8 md:pt-10 bg-gradient-to-br from-primary/5 to-accent/5">
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
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Target className="w-3.5 h-3.5 text-primary" />
                      </div>
                      문제 / 목표
                    </h4>
                    <BulletList items={selectedProject.problemGoal} icon={Circle} highlight />
                  </div>

                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="w-3.5 h-3.5 text-primary" />
                      </div>
                      나의 역할
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                      {selectedProject.myRole.planning.length > 0 && (
                        <div className="p-3 md:p-4 rounded-lg bg-muted/50 border border-border/50">
                          <div className="flex items-center gap-2 mb-2 md:mb-3">
                            <div className="w-5 h-5 rounded-md bg-amber-400/10 flex items-center justify-center">
                              <FileText className="w-3 h-3 text-amber-400" />
                            </div>
                            <p className="text-[10px] md:text-xs font-bold text-amber-400 uppercase tracking-wide">기획</p>
                          </div>
                          <ul className="space-y-1.5 md:space-y-2">
                            {selectedProject.myRole.planning.map((item, idx) => (
                              <li key={idx} className="text-[11px] md:text-sm text-foreground/80 flex items-start gap-1.5 md:gap-2">
                                <span className="w-1 h-1 rounded-full bg-amber-400 mt-1.5 md:mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {selectedProject.myRole.development.length > 0 && (
                        <div className="p-3 md:p-4 rounded-lg bg-muted/50 border border-border/50">
                          <div className="flex items-center gap-2 mb-2 md:mb-3">
                            <div className="w-5 h-5 rounded-md bg-sky-400/10 flex items-center justify-center">
                              <Wrench className="w-3 h-3 text-sky-400" />
                            </div>
                            <p className="text-[10px] md:text-xs font-bold text-sky-400 uppercase tracking-wide">개발</p>
                          </div>
                          <ul className="space-y-1.5 md:space-y-2">
                            {selectedProject.myRole.development.map((item, idx) => (
                              <li key={idx} className="text-[11px] md:text-sm text-foreground/80 flex items-start gap-1.5 md:gap-2">
                                <span className="w-1 h-1 rounded-full bg-sky-400 mt-1.5 md:mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {selectedProject.myRole.other.length > 0 && (
                        <div className="p-3 md:p-4 rounded-lg bg-muted/50 border border-border/50">
                          <div className="flex items-center gap-2 mb-2 md:mb-3">
                            <div className="w-5 h-5 rounded-md bg-purple-400/10 flex items-center justify-center">
                              <MessageSquare className="w-3 h-3 text-purple-400" />
                            </div>
                            <p className="text-[10px] md:text-xs font-bold text-purple-400 uppercase tracking-wide">협업</p>
                          </div>
                          <ul className="space-y-1.5 md:space-y-2">
                            {selectedProject.myRole.other.map((item, idx) => (
                              <li key={idx} className="text-[11px] md:text-sm text-foreground/80 flex items-start gap-1.5 md:gap-2">
                                <span className="w-1 h-1 rounded-full bg-purple-400 mt-1.5 md:mt-2 flex-shrink-0" />
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
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Wrench className="w-3.5 h-3.5 text-primary" />
                      </div>
                      사용 기술
                    </h4>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2.5 md:px-3 py-1 md:py-1.5 text-[11px] md:text-sm bg-muted rounded-lg font-medium border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 성과 */}
                  <div className="p-3 md:p-5 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500">
                    <h4 className="text-xs md:text-sm font-bold text-foreground mb-2 md:mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <BarChart3 className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      성과 (전/후 비교 & 지표)
                    </h4>
                    <BulletList items={selectedProject.results} icon={TrendingUp} highlight iconColor="text-green-500" />
                  </div>

                  {/* 협업·커뮤니케이션 */}
                  <div className="p-3 md:p-5 rounded-xl bg-muted/30 border border-border/50">
                    <h4 className="text-xs md:text-sm font-bold text-foreground mb-2 md:mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MessageSquare className="w-3.5 h-3.5 text-primary" />
                      </div>
                      협업 · 커뮤니케이션
                    </h4>
                    <BulletList items={selectedProject.collaboration} icon={CheckCircle2} />
                  </div>

                </div>

                {/* Footer - Links */}
                <div className="px-4 md:px-8 py-4 md:py-5 border-t border-border/50 bg-muted/20 flex flex-wrap gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {selectedProject.isLive ? "홈페이지 바로 가기" : "데모 보기"}
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
