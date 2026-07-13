import { useState, useEffect, useCallback } from "react";
import { ExternalLink, Calendar, Users, CheckCircle2, Circle, TrendingUp, GitBranch, FileText, Target, Briefcase, Wrench, BarChart3, MessageSquare, Play, Radio, AlertTriangle, UserRound, Stethoscope, ShieldCheck, Sparkles, Mic, Lock, Layers, Rocket, HelpCircle, Search, Code2, Megaphone, ShoppingBag, Smartphone, LineChart, Cookie } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import PdfViewer from "@/components/PdfViewer";
import surgicalConsentPdf from "@/assets/Surgical_Consent.pdf.asset.json";


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
    summary: "AI 기반 대화형 UX와 데이터 기록 구조를 통해 의료 동의 프로세스를 개선한 서비스 기획 프로젝트",
    problemGoal: [
      "고령 환자의 의료 정보 이해 부족",
      "의료진의 반복 설명으로 인한 업무 과중",
      "설명 부족 관련 법적 분쟁 리스크 증가",
      "핵심: '설명 → 이해 → 동의'가 단절된 구조",
    ],
    myRole: {
      planning: [
        "문제 정의 및 서비스 기획 총괄",
        "UX 구조 설계: 고령층 맞춤 UI (큰 글씨, 음성 중심 인터랙션)",
        "One Task 구조로 인지 부담 최소화하는 사용자 흐름 설계",
        "사용자 행동 흐름 정의 (설명 → 질문 → 이해 → 서명)",
        "이해도 체크포인트 설계 및 서비스 검증 구조 수립",
        "기능 정의 및 서비스 프로세스 설계",
      ],
      development: [
        "웹 기반 데모 서비스 구현 참여",
        "전 과정 로그/녹취/타임스탬프 기록 구조 설계",
        "사용자 행동 데이터 기반 개선 가능 구조 구축",
      ],
      other: [
        "GA4 / GTM 기반 데이터 구조 이해 및 적용",
        "웹서비스 UI 설계 (Lovable 활용)",
        "AI 음성 인터랙션 구조 기획",
      ],
    },
    techStack: ["AI 아바타", "LLM 기반 Q&A", "STT/TTS", "전자서명", "GA4", "GTM", "Lovable"],
    results: [
      "수술 이해도: +80% 향상",
      "설명 시간: 60% 단축",
      "반복 설명: 70% 감소",
      "환자 경험 개선 + 의료진 업무 효율화 동시 달성",
    ],
    collaboration: [
      "기획 문서 기반 의사결정 구조 정립",
      "데모 공유를 통한 빠른 피드백 사이클 운영",
      "디자이너–개발자–의료진 간 커뮤니케이션 허브 역할 수행",
    ],
    tags: [
      { label: "PM/기획", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "헬스케어 DX", color: "bg-purple-500/20 text-purple-400" },
      { label: "AI·UX", color: "bg-pink-500/20 text-pink-400" },
    ],
    link: "https://todosign.lovable.app",
    image: "/todosign-preview.png",
    period: "2024.01 – 2024.03",
    team: "Agile 기반 협업 프로젝트 (PM / 서비스 기획)",
  },
  {
    id: "commercial",
    title: "디저트 린 – 수제 디저트 커머스 (SEO & 데이터 기반 성장)",
    summary: "프랑스 정통 레시피 기반 수제 디저트 브랜드 '디저트 린'의 웹사이트를 기획·개발·운영하며, 광고비 없이 월 방문자 500명과 전환율 3.2%를 달성",
    problemGoal: [
      "오프라인 중심 수제 디저트 매장의 신규 고객 유입 한계",
      "두바이 초콜릿·휘낭시에·마들렌 등 시그니처 메뉴의 온라인 노출 부재",
      "광고 의존도가 높은 구조 → 비용 대비 효율 낮음",
      "목표: 브랜드 웹사이트 구축, 광고비 없이 유입 구조 설계, 6개월 내 월 방문자 2,000명·전환율 2% 이상 달성",
    ],
    myRole: {
      planning: [
        "Google Search Console 기반 '수제 도넛', '두바이 초콜릿', '휘낭시에 맛집' 등 롱테일 키워드 발굴 및 검색 의도 기반 콘텐츠 구조 설계",
        "CTR 낮은 페이지 메타태그 개선 → 검색 노출 증가 및 유기적 트래픽 확보",
        "GA4 기반 '유입 → 메뉴 조회 → 매장 방문/주문' 퍼널 설계 및 이탈 구간 분석",
        "KPI 대시보드 구축 (주간 단위) 및 전환율 추적",
        "GTM 기반 주요 행동 이벤트 정의 (메뉴 탭 클릭, CTA 클릭, 인스타그램 연결 등)",
        "A/B 테스트 백로그 관리: CTA 문구/이미지/배치 실험, 메뉴 카테고리별 성과 비교 (30건+ 실험 축적)",
        "모바일 중심 UX 설계: 메뉴 탭 네비게이션, 인기메뉴·두바이초코세트·휘낭시에·마들렌 카테고리 구조 설계",
      ],
      development: [
        "Lovable(React + Vite) 기반 반응형 브랜드 웹사이트 구축",
        "히어로 섹션, 메뉴 탭 UI, 매장 소개, 인스타그램 연동 등 풀 페이지 구현",
        "Core Web Vitals 개선 (LCP 2.1초 달성) 및 SEO 최적화 (메타태그, OG 태그, 구조화 데이터)",
        "GA4 + GTM 이벤트 트래킹 설계 및 구축",
        "Tailwind CSS 기반 반응형 UI 스타일링 및 다크톤 프리미엄 브랜딩 적용",
      ],
      other: [
        "비개발 사업자 대상 데이터 리포트 해석 교육",
        "SEO 및 데이터 기반 의사결정 가이드 문서 제작",
        "주간 성과 리뷰 미팅 운영 → 비전문가도 데이터 기반 판단 가능한 문화 구축",
      ],
    },
    techStack: ["React", "Vite", "Tailwind CSS", "GA4", "GTM", "Google Search Console", "Lovable"],
    results: [
      "월 방문자: 0 → 500 (유기적 유입 기반 초기 성장)",
      "전환율: 3.2% (업계 평균 대비 약 160%)",
      "광고비: ₩0 (100% 유기적 유입)",
      "평균 체류 시간: 2분 34초",
      "가설–실험–검증 구조 정립, 30건 이상의 실험 데이터 축적",
    ],
    collaboration: [
      "주간 성과 리뷰 미팅을 통한 지속적 개선 문화 구축",
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
    image: "/dessertlyn-preview.png",
    period: "2023.06 – 현재",
    team: "1인 프로젝트 (기획 ~ 개발 ~ 운영)",
  },
  {
    id: "ocr",
    title: "한국어 메뉴판 OCR 서비스",
    summary: "YOLOv5 기반 OCR 시스템을 분석하고 실제 사용 환경(메뉴판)에 맞춰 인식 정확도와 처리 구조를 개선한 프로젝트",
    problemGoal: [
      "기존 OCR 시스템은 메뉴판 환경에서 전반적으로 낮은 인식률 발생",
      "세로 텍스트 및 기울어진 이미지에서 Detection/Recognition 정확도 저하",
      "1-stage Detection 구조로 인해 불필요한 영역이 포함되는 문제 발생",
      "목표: 메뉴판 환경에 특화된 OCR 구조 설계, 텍스트 방향 인식 정확도 향상, Detection 성능과 처리 속도 간 최적 균형 달성",
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
        "Google Colab 기반 실험 환경 공유 및 팀 협업",
      ],
    },
    techStack: ["YOLOv5", "SwinIR", "STARNet", "PyTorch", "Google Colab"],
    results: [
      "기존 구조에서 처리 불가능했던 세로 및 기울어진 텍스트 인식 가능 구조 확보",
      "2-stage Detection 도입으로 불필요한 영역 제거 및 텍스트 영역 추출 정밀도 향상",
      "서비스 환경(메뉴판) 기준 구조적 문제 해결 및 성능 개선 방향 도출 완료",
      "전체 파이프라인 정립: 입력 이미지 → SwinIR 초해상도 → YOLOv5 2-Stage → STARNet 인식 → 최종 출력",
    ],
    collaboration: [
      "테스트 이미지 기반 성능 검증 및 구조 개선 반복",
      "Google Colab 기반 실험 환경 공유 및 GPU 자원 활용",
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
      "졸음 운전은 교통사고의 주요 원인 중 하나로, 운전자가 스스로 졸음을 인지하지 못하는 경우가 많아 더욱 위험함",
      "기존 안전 장치는 사후 대응 중심으로 설계되어 사전 예방 기능이 부족한 구조적 한계 존재",
      "목표: 운전자의 눈 상태 기반 졸음 실시간 감지",
      "목표: 위험 상황 사전 인지 구조 설계 및 카메라 기반 범용 시스템 구현",
    ],
    myRole: {
      planning: [
        "졸음 운전 문제 분석 및 서비스 적용 시나리오 정의",
        "핵심 판단 기준(눈의 개폐 상태) 설정",
        "실시간 인지 기반 시스템 구조 설계",
        "단순 모델 구현을 넘어 서비스 확장 가능성 고려",
      ],
      development: [
        "YOLOv4 + Darknet 기반 실시간 객체 탐지 모델 구현",
        "운전자 얼굴 및 눈 상태 인식 기능 개발",
        "Google Colab GPU 환경에서 모델 학습 및 테스트 진행",
        "AIHub 운전자 얼굴/눈 상태 데이터셋 활용해 정확도 향상",
      ],
      other: [
        "차량 내 안전 시스템(ADAS) 연동 가능성 검토",
        "졸음 감지 시 알림/경고 시스템 추가 가능성 설계",
        "보험/모빌리티 서비스와 결합 가능성 도출",
      ],
    },
    techStack: ["YOLOv4", "Darknet", "Python", "Google Colab", "AIHub 데이터셋"],
    results: [
      "카메라 입력 기반 얼굴 및 눈(Open/Closed) 상태 실시간 인식 기능 구현",
      "차량 환경에 적용 가능한 졸음 운전 감지 프로토타입 확보",
      "단순 객체 인식 → 운전자 상태 판단으로 확장 가능성 확보, 서비스화 기반 마련",
    ],
    collaboration: [
      "5인 팀 역할 분담: 기획(시나리오·시스템 구조 설계) / 데이터 수집(AIHub 수집·전처리) / 모델 구현(YOLOv4 + Darknet) / 테스트(성능 검증·오류 수정) / 발표(결과 정리·최종 발표)",
      "지속적인 커뮤니케이션을 통해 기획 → 구현 → 발표 전 과정을 성공적으로 완수",
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

/* ============================================================
   TodoSign Detail – PPT 슬라이드 기반 풍부한 상세 뷰
   "아산병원 비대면 서명 기획안 (KT 2팀)" PDF 콘텐츠 기반
   ============================================================ */
const TodoSignDetail = ({ project }: { project: Project }) => {
  const sections = [
    { id: "intro", label: "01. 서비스 소개" },
    { id: "problem", label: "02. 문제 정의" },
    { id: "persona", label: "03. 페르소나" },
    { id: "market", label: "04. 시장 현황" },
    { id: "solution", label: "05. 솔루션 제안" },
    { id: "feature", label: "06. 서비스 특징" },
    { id: "demo", label: "07. 데모 화면" },
    { id: "impact", label: "08. 기대효과" },
    { id: "future", label: "09. 향후 계획" },
    { id: "summary", label: "10. 핵심 요약" },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      {/* Hero / Cover */}
      <header className="relative px-5 md:px-10 pt-10 md:pt-14 pb-8 md:pb-10 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent border-b border-border/40">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag.label} className={`px-3 py-1 text-[11px] md:text-xs font-semibold rounded-full ${tag.color}`}>
              {tag.label}
            </span>
          ))}
        </div>
        <p className="text-xs md:text-sm text-primary font-semibold tracking-wider uppercase mb-2">Team. 투두싸인 (TodoSign)</p>
        <h1 className="text-xl md:text-3xl font-bold leading-tight mb-3">
          AI 비대면 수술동의서 전자서명 서비스
        </h1>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
          노령환자를 위한 혁신적 의료 동의 솔루션 — AI 아바타 설명 + 실시간 음성대화로
          <br className="hidden md:block" />
          ‘설명 → 이해 → 동의’의 단절된 프로세스를 연결합니다.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-sm">
          <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /><span className="font-medium">{project.period}</span></div>
          <div className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /><span className="font-medium">{project.team}</span></div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-primary hover:underline font-semibold">
            <ExternalLink className="w-4 h-4" />Demo. todosign.lovable.app
          </a>
        </div>
      </header>

      {/* Anchor Nav */}
      <nav className="sticky top-0 z-10 bg-card/95 backdrop-blur border-b border-border/40 overflow-x-auto scrollbar-hide">
        <ul className="flex gap-1 px-3 md:px-6 py-2 min-w-max">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="block px-3 py-1.5 text-[11px] md:text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md whitespace-nowrap transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-5 md:px-10 py-8 md:py-12 space-y-12 md:space-y-16">

        {/* 01. 서비스 배경 */}
        <section id="intro" className="scroll-mt-16">
          <SectionHeader icon={Sparkles} number="01" title="서비스 배경" subtitle="노령인구 증가와 수술동의서의 문제점" />
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-5">
            급격히 증가하는 고령 환자들은 복잡한 의료용어와 수술동의서를 이해하는 데 심각한 어려움을 겪고 있습니다.
          </p>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <InfoCard title="고령층 수술 건수 급증" desc="전체 수술 환자 중 65세 이상 비율 지속적 증가 추세" />
            <InfoCard title="동의서 이해도 저하" desc="인지 능력 저하로 인한 수술 동의 과정의 어려움 가중" />
          </div>
        </section>

        {/* 02. 문제 정의 */}
        <section id="problem" className="scroll-mt-16">
          <SectionHeader icon={AlertTriangle} number="02" title="문제 정의" subtitle="증가하는 의료 분쟁, 동의서가 핵심입니다" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6">
            <StatCard value="2,500+" label="의료분쟁 조정 신청" desc="매년 발생하는 건수, 지속 증가 추세" />
            <StatCard value="48%" label="설명의무 위반 주장" desc="전체 분쟁 중 ‘설명부족’ 주장 비율" accent />
            <StatCard value="No.1" label="입증 책임의 중요성" desc="‘충분히 설명했음’의 객관적 증거" />
          </div>
          <div className="p-4 md:p-5 rounded-xl bg-muted/40 border border-border/50">
            <p className="text-xs md:text-sm font-bold mb-2 text-foreground">왜 분쟁이 발생할까요?</p>
            <p className="text-xs md:text-sm text-foreground/75 leading-relaxed">
              환자는 “충분히 이해하지 못했다”고 주장하고, 의료진은 “충분히 설명했다”고 주장하는 입장의 차이 때문입니다.
              이를 해결하려면 <span className="text-primary font-semibold">녹취 기록 · 화면 녹화 · 타임스탬프</span>의 객관적 증거 확보가 필수입니다.
            </p>
          </div>
          <p className="text-[11px] text-muted-foreground mt-3">출처: 한국의료분쟁조정중재원 통계연보 (2023)</p>
        </section>

        {/* 03. 페르소나 */}
        <section id="persona" className="scroll-mt-16">
          <SectionHeader icon={UserRound} number="03" title="페르소나 분석" subtitle="환자 + 의료진, 양측의 어려움" />
          <div className="grid md:grid-cols-2 gap-4">
            <PersonaCard
              icon={UserRound}
              name="김영숙 님 (65세, 여성)"
              role="자궁내막암 초기 진단"
              tags={["#의학지식_부족", "#디지털_취약계층", "#보호자_부재", "#심리적_불안"]}
              state="불안 · 혼란 · 위축"
              pains={[
                "빠른 설명 속도와 어려운 의료 용어",
                "복잡한 동의서 체크 항목",
                "‘집도의 변경’, ‘수술범위 추가’ 등 불안 문구",
                "상세 합병증 목록으로 인한 심리적 패닉",
                "질문 포인트를 몰라 침묵",
                "진료실을 나가면 내용을 거의 기억하지 못함",
              ]}
            />
            <PersonaCard
              icon={Stethoscope}
              name="이민우 전문의 (12년차)"
              role="부인 종양 전문의"
              tags={["#업무_과중", "#반복_설명", "#법적_리스크", "#시간_부족"]}
              state="피로 · 압박 · 부담"
              pains={[
                "복잡한 항목으로 환자당 설명 시간 과도",
                "환자 이해도 확인의 어려움",
                "반복 질문으로 인한 진료/수술 일정 지연",
                "보호자 대상 재설명 부담",
                "동의서 누락·서명 오류 시 행정 부담",
                "민감한 설명 시 환자 반발 우려",
              ]}
            />
          </div>
        </section>

        {/* 04. 시장 현황 */}
        <section id="market" className="scroll-mt-16">
          <SectionHeader icon={BarChart3} number="04" title="시장 현황" subtitle="전자서명 시장 성장 中, 의료 특화 서비스는 부재" />
          <div className="overflow-x-auto rounded-xl border border-border/50">
            <table className="w-full text-[11px] md:text-sm">
              <thead className="bg-muted/60">
                <tr>
                  <th className="text-left p-2.5 md:p-3 font-semibold">서비스</th>
                  <th className="p-2.5 md:p-3 font-semibold">비대면<br/>전자서명</th>
                  <th className="p-2.5 md:p-3 font-semibold">본인<br/>인증</th>
                  <th className="p-2.5 md:p-3 font-semibold">의료법<br/>준수</th>
                  <th className="p-2.5 md:p-3 font-semibold">AI 설명<br/>(상호작용)</th>
                  <th className="p-2.5 md:p-3 font-semibold">녹취/녹화<br/>증거확보</th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                <CompareRow name="카카오페이 인증" tag="일반 범용" cells={[true, true, false, false, false]} />
                <CompareRow name="네이버 인증서" tag="일반 범용" cells={[true, true, false, false, false]} />
                <CompareRow name="기존 전자동의서" tag="의료 (대면)" cells={[false, true, true, false, false]} />
                <CompareRow name="TodoSign" tag="의료 특화" cells={[true, true, true, true, true]} highlight />
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs md:text-sm text-foreground/80 p-3 md:p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
            ⚡ 현재 시장에는 <strong>AI가 수술 내용을 설명해주고 질의응답이 가능한 비대면 의료 동의 서비스는 전무</strong>한 실정입니다.
          </p>
        </section>

        {/* 05. 솔루션 제안 */}
        <section id="solution" className="scroll-mt-16">
          <SectionHeader icon={Rocket} number="05" title="솔루션 제안" subtitle="수술동의 프로세스의 혁신적 변화" />
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-5">
            디바이스 무관, <strong className="text-primary">SMS 링크 하나</strong>로 완성되는 동의 절차.
            환자는 별도의 앱 설치 없이 모든 절차를 완료하며, AI 아바타와의 대화 내용은 법적 효력이 있는 증거물로 자동 저장됩니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <FlowStep step="01" title="병원 (준비)" desc="환자 정보 입력 후 SMS 링크 발송" />
            <FlowStep step="02" title="환자 (TodoSign)" desc="링크 접속 → 본인인증 → AI 아바타 설명 → Q&A → 전자서명" />
            <FlowStep step="03" title="시스템 (완료)" desc="병원 EMR 자동 연동 + 녹취/녹화 증거 저장" />
          </div>
        </section>

        {/* 06. 서비스 특징 */}
        <section id="feature" className="scroll-mt-16">
          <SectionHeader icon={Layers} number="06" title="서비스 특징" subtitle="65세 이상 사용자 최적화 + 의료 분쟁 완벽 대비" />
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <FeatureCard icon={Sparkles} title="쉬운 용어 변환" desc="복잡한 전문 의료용어를 노령층이 이해하기 쉬운 일상 언어로 자동 풀이" />
            <FeatureCard icon={Mic} title="AI 음성 상담" desc="궁금증을 음성으로 남기면 AI가 즉시 인식하여 답변, 의료진에게도 전달" />
            <FeatureCard icon={ShieldCheck} title="안전한 본인확인" desc="휴대폰/접수번호 인증 + 실시간 얼굴 인식으로 철저한 신원 검증" />
            <FeatureCard icon={UserRound} title="고령층 UX" desc="큰 글씨, 명확한 대비, 터치 영역 확장, 중요 결정 더블체크 팝업" />
            <FeatureCard icon={Radio} title="전 과정 음성 녹음 + 화면 녹화" desc="AI 설명과 환자의 답변, 화면 조작을 실시간 저장 (객관적 증거)" />
            <FeatureCard icon={Lock} title="보안 & 암호화" desc="AES-256 암호화 + TLS 1.3 + 개인정보 비식별화 처리" />
          </div>

          <div className="mt-6 p-4 md:p-5 rounded-xl bg-muted/30 border border-border/50">
            <p className="text-xs md:text-sm font-bold mb-3 text-foreground">기술 아키텍처</p>
            <div className="grid md:grid-cols-2 gap-3 text-xs md:text-sm text-foreground/75">
              <div>
                <p className="font-semibold text-foreground mb-1">Client Side</p>
                <p>Responsive Web (React / Lovable) · WebRTC / Stream 미디어 처리</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">External API</p>
                <p>PASS 본인인증 · SMS 알림 · HL7 / FHIR 기반 병원 EMR 연동 (Option)</p>
              </div>
            </div>
            <p className="mt-3 text-[11px] md:text-xs text-primary">🔒 전 구간 데이터 암호화(TLS 1.3) 및 개인정보 비식별화 처리</p>
          </div>
        </section>

        {/* 07. 데모 화면 */}
        <section id="demo" className="scroll-mt-16">
          <SectionHeader icon={Play} number="07" title="데모 화면" subtitle="투두싸인 서비스 핵심 화면" />
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <InfoCard title="심플한 UI" desc="복잡한 메뉴를 제거하고 ‘동의서 작성’이라는 핵심 과업에만 집중하도록 설계" />
            <InfoCard title="신뢰감 전달" desc="의료 서비스에 걸맞은 전문적인 톤앤매너와 문구로 사용자 불안감 해소" />
            <InfoCard title="양방향 소통" desc="환자가 음성으로 질문 → AI가 즉시 인식하여 답변" />
            <InfoCard title="접근성 강화" desc="청력이 약한 노령층을 위해 큰 자막과 또렷한 음성으로 안내" />
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <ExternalLink className="w-4 h-4" /> 실제 데모 보기 (todosign.lovable.app)
          </a>
        </section>

        {/* 08. 기대효과 */}
        <section id="impact" className="scroll-mt-16">
          <SectionHeader icon={TrendingUp} number="08" title="기대효과" subtitle="투두싸인이 만들어낼 변화" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
            <StatCard value="+80%" label="수술 이해도 향상" desc="환자 인터뷰 기반 추정" accent />
            <StatCard value="60%" label="설명 시간 단축" desc="의료진 업무 효율화" />
            <StatCard value="70%" label="반복 설명 감소" desc="진료/수술 일정 지연 해소" />
          </div>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <InfoCard title="👤 환자 중심 의료 실현" desc="어렵고 무서운 수술 동의 과정을 환자의 눈높이에 맞춤" />
            <InfoCard title="🏥 병원 브랜드 가치 제고" desc="환자의 안전·권리를 최우선으로 하는 ‘믿을 수 있는 병원’ 이미지" />
            <InfoCard title="🌐 의료 접근성 보장 (ESG)" desc="디지털 소외 계층인 노령층을 포용하는 UX" />
            <InfoCard title="⚖️ 법적 리스크 완화" desc="객관적 증거 자동 확보로 의료 분쟁 사전 방지" />
          </div>
        </section>

        {/* 09. 향후 계획 */}
        <section id="future" className="scroll-mt-16">
          <SectionHeader icon={Rocket} number="09" title="향후 계획" subtitle="TodoSign의 성장 로드맵" />
          <div className="space-y-3">
            <PhaseRow phase="Phase 1" status="현재 진행 중" items={["MVP 개발 완료", "데모 서비스 운영", "핵심 기능 안정화", "초기 사용자 테스트"]} active />
            <PhaseRow phase="Phase 2" status="확장" items={["다양한 의료 동의서 (검사·시술·입원 약정)", "다국어 지원 (외국인 환자 AI 통역)", "병원 EMR 본격 연동"]} />
            <PhaseRow phase="Phase 3" status="플랫폼화" items={["의료 AI 플랫폼화", "종합 환자 케어 솔루션", "B2B 확장"]} />
          </div>
        </section>

        {/* 10. 핵심 요약 */}
        <section id="summary" className="scroll-mt-16">
          <SectionHeader icon={CheckCircle2} number="10" title="핵심 요약" subtitle="투두싸인이 해결하는 것" />
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <SummaryCard tag="환자 (Patient)" title="쉽고 명확한 수술 이해" desc="AI 아바타의 친절한 설명과 무제한 Q&A로 심리적 안정 확보" />
            <SummaryCard tag="의료진 (Doctor)" title="업무 효율 + 법적 안전망" desc="설명 시간 단축 + 객관적 증거 자동 저장으로 분쟁 리스크 완화" />
          </div>

          <div className="mt-6 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-transparent border border-primary/20 text-center">
            <HelpCircle className="w-7 h-7 text-primary mx-auto mb-3" />
            <p className="text-base md:text-lg font-bold mb-1">질문이 있으신가요?</p>
            <p className="text-xs md:text-sm text-muted-foreground">
              투두싸인은 여러분의 의견을 경청합니다. 수술 동의서의 새로운 표준, 함께 만들어가겠습니다.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="px-5 md:px-10 py-5 border-t border-border/50 bg-muted/20 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[11px] md:text-xs text-muted-foreground">
          원본: 아산병원 비대면 서명 기획안 (KT 2팀) · 23 슬라이드
        </p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            <ExternalLink className="w-4 h-4" /> 데모 보기
          </a>
        )}
      </footer>
    </div>
  );
};

/* ----- TodoSignDetail sub-components ----- */
const SectionHeader = ({ icon: Icon, number, title, subtitle }: { icon: React.ElementType; number: string; title: string; subtitle: string }) => (
  <div className="mb-5 md:mb-6">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary/15 flex items-center justify-center">
        <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
      </div>
      <span className="text-[11px] md:text-xs font-bold text-primary tracking-widest">{number}</span>
    </div>
    <h3 className="text-lg md:text-2xl font-bold mb-1">{title}</h3>
    <p className="text-xs md:text-sm text-muted-foreground">{subtitle}</p>
  </div>
);

const InfoCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-colors">
    <p className="text-sm md:text-base font-semibold mb-1.5 text-foreground">{title}</p>
    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

const StatCard = ({ value, label, desc, accent = false }: { value: string; label: string; desc: string; accent?: boolean }) => (
  <div className={`p-4 md:p-5 rounded-xl border ${accent ? "bg-primary/10 border-primary/30" : "bg-muted/40 border-border/50"}`}>
    <p className={`text-2xl md:text-4xl font-extrabold mb-1 ${accent ? "text-primary" : "text-foreground"}`}>{value}</p>
    <p className="text-xs md:text-sm font-semibold text-foreground mb-1">{label}</p>
    <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

const PersonaCard = ({ icon: Icon, name, role, tags, state, pains }: { icon: React.ElementType; name: string; role: string; tags: string[]; state: string; pains: string[] }) => (
  <div className="p-4 md:p-5 rounded-xl bg-card border border-border/50">
    <div className="flex items-start gap-3 mb-3">
      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm md:text-base font-bold">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-1 mb-3">
      {tags.map((t) => (
        <span key={t} className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-muted text-foreground/70">{t}</span>
      ))}
    </div>
    <p className="text-[11px] md:text-xs font-semibold text-primary mb-3">현재 상태: {state}</p>
    <p className="text-[11px] md:text-xs font-bold text-foreground mb-2">동의 과정 주요 Pain Points</p>
    <ul className="space-y-1.5">
      {pains.map((p, i) => (
        <li key={i} className="text-[11px] md:text-xs text-foreground/75 flex items-start gap-2">
          <span className="font-bold text-primary flex-shrink-0">0{i + 1}</span>
          <span className="leading-relaxed">{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CompareRow = ({ name, tag, cells, highlight = false }: { name: string; tag: string; cells: boolean[]; highlight?: boolean }) => (
  <tr className={`border-t border-border/40 ${highlight ? "bg-primary/10" : ""}`}>
    <td className="p-2.5 md:p-3">
      <p className={`font-semibold ${highlight ? "text-primary" : "text-foreground"}`}>{name}</p>
      <p className="text-[10px] md:text-xs text-muted-foreground">{tag}</p>
    </td>
    {cells.map((v, i) => (
      <td key={i} className="p-2.5 md:p-3 text-center">
        {v ? <span className="text-green-500 font-bold">✔</span> : <span className="text-muted-foreground/50">✖</span>}
      </td>
    ))}
  </tr>
);

const FlowStep = ({ step, title, desc }: { step: string; title: string; desc: string }) => (
  <div className="p-4 rounded-xl bg-card border border-border/50 relative">
    <span className="absolute -top-3 left-4 px-2 py-0.5 text-[10px] md:text-xs font-bold bg-primary text-primary-foreground rounded-md">STEP {step}</span>
    <p className="text-sm md:text-base font-bold mt-2 mb-1">{title}</p>
    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => (
  <div className="p-4 rounded-xl bg-card border border-border/50 flex gap-3">
    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <div>
      <p className="text-sm md:text-base font-semibold mb-1">{title}</p>
      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  </div>
);

const PhaseRow = ({ phase, status, items, active = false }: { phase: string; status: string; items: string[]; active?: boolean }) => (
  <div className={`p-4 rounded-xl border ${active ? "bg-primary/10 border-primary/30" : "bg-muted/30 border-border/50"}`}>
    <div className="flex items-center gap-2 mb-2">
      <p className={`text-sm md:text-base font-bold ${active ? "text-primary" : "text-foreground"}`}>{phase}</p>
      <span className={`text-[10px] md:text-xs px-2 py-0.5 rounded-full font-semibold ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{status}</span>
    </div>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
      {items.map((it, i) => (
        <li key={i} className="text-xs md:text-sm text-foreground/80 flex items-start gap-2">
          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
          {it}
        </li>
      ))}
    </ul>
  </div>
);

const SummaryCard = ({ tag, title, desc }: { tag: string; title: string; desc: string }) => (
  <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
    <p className="text-[11px] md:text-xs font-bold text-primary uppercase tracking-wider mb-2">{tag}</p>
    <p className="text-base md:text-lg font-bold mb-2">{title}</p>
    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);


/* ============================================================
   DessertLyn Detail – PPT 슬라이드 기반 상세 뷰
   "디저트 린 – 수제 디저트 커머스 (SEO & 데이터 기반 성장)"
   ============================================================ */
const DessertLynDetail = ({ project }: { project: Project }) => {
  const sections = [
    { id: "intro", label: "01. 프로젝트 소개" },
    { id: "metrics", label: "02. 핵심 성과" },
    { id: "problem", label: "03. 문제 / 목표" },
    { id: "tech", label: "04. 기술 스택" },
    { id: "planning", label: "05. 기획 – SEO & 퍼널" },
    { id: "dev", label: "06. 개발 – 풀스택" },
    { id: "collab", label: "07. 협업 – 데이터 문화" },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-background">
      {/* Hero / Cover */}
      <header className="relative px-5 md:px-10 pt-10 md:pt-14 pb-8 md:pb-10 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent border-b border-border/40">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag.label} className={`px-3 py-1 text-[11px] md:text-xs font-semibold rounded-full ${tag.color}`}>
              {tag.label}
            </span>
          ))}
        </div>
        <p className="text-xs md:text-sm text-primary font-semibold tracking-wider uppercase mb-2">Brand. 디저트 린 (Dessert Lyn)</p>
        <h1 className="text-xl md:text-3xl font-bold leading-tight mb-3">
          디저트 린 – 수제 디저트 커머스
        </h1>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
          프랑스 정통 레시피 기반 수제 디저트 브랜드 ‘디저트 린’의 웹사이트를 기획·개발·운영하며,
          <br className="hidden md:block" />
          광고비 없이 월 방문자 <span className="text-primary font-semibold">500명</span>과 전환율 <span className="text-primary font-semibold">3.2%</span>를 달성한 1인 풀스택 프로젝트입니다.
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-sm">
          <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-primary" /><span className="font-medium">{project.period}</span></div>
          <div className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /><span className="font-medium">{project.team}</span></div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-primary hover:underline font-semibold">
              <ExternalLink className="w-4 h-4" />Live. dessertlyn.lovable.app
            </a>
          )}
        </div>
      </header>

      {/* Anchor Nav */}
      <nav className="sticky top-0 z-10 bg-card/95 backdrop-blur border-b border-border/40 overflow-x-auto scrollbar-hide">
        <ul className="flex gap-1 px-3 md:px-6 py-2 min-w-max">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="block px-3 py-1.5 text-[11px] md:text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md whitespace-nowrap transition-colors">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-5 md:px-10 py-8 md:py-12 space-y-12 md:space-y-16">

        {/* 01. 프로젝트 소개 */}
        <section id="intro" className="scroll-mt-16">
          <SectionHeader icon={Cookie} number="01" title="프로젝트 소개" subtitle="1인 프로젝트로 운영 중인 수제 디저트 브랜드" />
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            오프라인 매장 중심의 수제 디저트 브랜드를 위한 온라인 채널을 구축하고,
            기획부터 개발·운영·데이터 분석까지 전 과정을 단독으로 수행한 그로스 프로젝트입니다.
            ‘두바이 초콜릿’, ‘휘낭시에’, ‘마들렌’ 등 시그니처 메뉴를 중심으로 SEO 기반 유기적 유입과
            데이터 기반 의사결정 체계를 구축했습니다.
          </p>
        </section>

        {/* 02. 핵심 성과 */}
        <section id="metrics" className="scroll-mt-16">
          <SectionHeader icon={TrendingUp} number="02" title="핵심 성과" subtitle="광고비 ₩0, 데이터로 만든 유기적 성장" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <StatCard value="500+" label="월 방문자" desc="" accent />
            <StatCard value="3.2%" label="전환율" desc="" />
            <StatCard value="30+" label="A/B 실험" desc="가설–실험–검증 구조 정립" />
            <StatCard value="2:34" label="평균 체류 시간" desc="높은 콘텐츠 몰입도 확인" />
          </div>
        </section>

        {/* 03. 문제 / 목표 */}
        <section id="problem" className="scroll-mt-16">
          <SectionHeader icon={AlertTriangle} number="03" title="문제 / 목표" subtitle="오프라인 한계와 광고 의존 구조의 탈피" />
          <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-5">
            <InfoCard title="오프라인 한계" desc="매장 중심 운영으로 신규 고객 유입에 구조적 한계 존재" />
            <InfoCard title="온라인 노출 부재" desc="두바이 초콜릿·휘낭시에·마들렌 등 시그니처 메뉴의 검색 노출 전무" />
            <InfoCard title="광고 의존 구조" desc="광고비 의존도가 높아 비용 대비 효율이 낮음" />
            <InfoCard title="목표 (KPI)" desc="광고비 없이 월 방문자 2,000명 · 전환율 2% 이상 달성" />
          </div>
        </section>

        {/* 04. 기술 스택 */}
        <section id="tech" className="scroll-mt-16">
          <SectionHeader icon={Wrench} number="04" title="사용 기술 스택" subtitle="Frontend · Analytics · SEO 도구" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: Code2, label: "React + Vite", desc: "반응형 SPA 기반" },
              { icon: Layers, label: "Tailwind CSS", desc: "다크톤 프리미엄 UI" },
              { icon: BarChart3, label: "GA4 + GTM", desc: "이벤트 트래킹 & 퍼널" },
              { icon: Search, label: "Search Console", desc: "키워드/CTR 분석" },
              { icon: Sparkles, label: "Lovable", desc: "풀스택 빌드 환경" },
            ].map((t) => (
              <div key={t.label} className="p-4 rounded-xl bg-card border border-border/50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <t.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm md:text-base font-semibold">{t.label}</p>
                  <p className="text-[11px] md:text-xs text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05. 기획 – SEO & 퍼널 */}
        <section id="planning" className="scroll-mt-16">
          <SectionHeader icon={Search} number="05" title="기획 – SEO & 퍼널 설계" subtitle="검색 의도 기반 콘텐츠 구조와 데이터 퍼널" />
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <FeatureCard icon={Search} title="롱테일 키워드 발굴" desc="Google Search Console 기반 ‘수제 도넛’, ‘두바이 초콜릿’, ‘휘낭시에 맛집’ 등 검색 의도 기반 키워드 발굴" />
            <FeatureCard icon={FileText} title="메타태그 / CTR 개선" desc="CTR 낮은 페이지 메타태그 개선으로 검색 노출 및 유기적 트래픽 확보" />
            <FeatureCard icon={LineChart} title="퍼널 설계" desc="GA4 기반 ‘유입 → 메뉴 조회 → 매장 방문/주문’ 퍼널 설계 및 이탈 구간 분석" />
            <FeatureCard icon={BarChart3} title="KPI 대시보드" desc="주간 단위 KPI 대시보드 구축 및 전환율 추적" />
            <FeatureCard icon={Target} title="이벤트 정의" desc="GTM 기반 메뉴 탭 클릭, CTA 클릭, 인스타그램 연결 등 주요 행동 이벤트 정의" />
            <FeatureCard icon={GitBranch} title="A/B 실험 백로그" desc="CTA 문구/이미지/배치 실험, 카테고리별 성과 비교 (30건+ 축적)" />
            <FeatureCard icon={Smartphone} title="모바일 UX 설계" desc="메뉴 탭 네비게이션, 인기메뉴·두바이초코세트·휘낭시에·마들렌 카테고리 구조 설계" />
            <FeatureCard icon={ShoppingBag} title="시그니처 강화" desc="히트 메뉴 중심의 카테고리 노출 우선순위 재배치" />
          </div>
        </section>

        {/* 06. 개발 – 풀스택 */}
        <section id="dev" className="scroll-mt-16">
          <SectionHeader icon={Code2} number="06" title="개발 – 풀스택 구현" subtitle="반응형 브랜드 웹사이트와 SEO 최적화" />
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <FeatureCard icon={Layers} title="반응형 웹사이트 구축" desc="Lovable(React + Vite) 기반 브랜드 웹사이트 풀 페이지 구현" />
            <FeatureCard icon={Sparkles} title="핵심 페이지 구현" desc="히어로 섹션, 메뉴 탭 UI, 매장 소개, 인스타그램 연동" />
            <FeatureCard icon={Rocket} title="Core Web Vitals" desc="LCP 2.1초 달성, SEO 메타태그·OG·구조화 데이터 적용" />
            <FeatureCard icon={BarChart3} title="이벤트 트래킹" desc="GA4 + GTM 이벤트 트래킹 설계 및 구축" />
            <FeatureCard icon={Smartphone} title="다크톤 프리미엄 UI" desc="Tailwind CSS 기반 반응형 스타일링 및 브랜드 톤 적용" />
          </div>
        </section>

        {/* 07. 협업 – 데이터 문화 */}
        <section id="collab" className="scroll-mt-16">
          <SectionHeader icon={MessageSquare} number="07" title="협업 – 데이터 문화 구축" subtitle="비전문가도 데이터 기반 판단이 가능한 구조" />
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <InfoCard title="데이터 리포트 해석 교육" desc="비개발 사업자 대상 GA4 / Search Console 리포트 해석 교육" />
            <InfoCard title="의사결정 가이드 문서화" desc="SEO 및 데이터 기반 의사결정 가이드 문서 제작" />
            <InfoCard title="주간 성과 리뷰 미팅" desc="비전문가도 데이터 기반 판단이 가능한 문화 구축" />
            <InfoCard title="실험 로그 축적" desc="가설–실험–결과 로그 30건 이상 축적, 의사결정 투명성 확보" />
          </div>

          <div className="mt-6 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-primary/15 via-accent/10 to-transparent border border-primary/20 text-center">
            <Megaphone className="w-7 h-7 text-primary mx-auto mb-3" />
            <p className="text-base md:text-lg font-bold mb-1">광고비 ₩0, 데이터로 만든 유기적 성장</p>
            <p className="text-xs md:text-sm text-muted-foreground">
              ‘이게 될까요?’를 ‘이게 되네요’로 — SEO와 실험 데이터로 증명한 1인 그로스 사례
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="px-5 md:px-10 py-5 border-t border-border/50 bg-muted/20 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[11px] md:text-xs text-muted-foreground">
          원본: 디저트 린 프로젝트 기획안 · 1 슬라이드
        </p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            <ExternalLink className="w-4 h-4" /> 홈페이지 바로가기
          </a>
        )}
      </footer>
    </div>
  );
};


interface ProjectsSectionProps {
  hideHeader?: boolean;
}

const ProjectsSection = ({ hideHeader = false }: ProjectsSectionProps = {}) => {
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
    <section id="projects" className={`${hideHeader ? "pt-12 md:pt-20 lg:pt-28 pb-16 md:pb-24" : "pt-2 pb-16 md:pt-4 md:pb-24"} px-4 md:px-6 lg:px-12 relative`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {!hideHeader && (
          <div 
            ref={headerRef}
            className={`text-center mb-6 md:mb-10 transition-all duration-700 ${
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
        )}

        {/* Mobile: Carousel */}
        <div className="md:hidden animate-fade-in" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
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
              <div
                key={project.id}
                className="animate-fade-in"
                style={{
                  animationDelay: `${150 + index * 120}ms`,
                  animationFillMode: "both",
                }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
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
        <DialogContent className="w-[96vw] max-w-[1200px] h-[85vh] md:h-[90vh] max-h-[85vh] md:max-h-[90vh] overflow-hidden bg-card border-border p-0">
          {selectedProject && (
            <div className="flex flex-col h-full min-h-0">
              <DialogTitle className="sr-only">{selectedProject.title}</DialogTitle>
              <DialogDescription className="sr-only">{selectedProject.summary}</DialogDescription>

              {selectedProject.id === "todosign" ? (
                <PdfViewer file={surgicalConsentPdf.url} />
              ) : selectedProject.id === "commercial" ? (
                <DessertLynDetail project={selectedProject} />
              ) : (
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
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
