import { useState } from "react";
import { ExternalLink, Calendar, Users, CheckCircle2, Circle, TrendingUp, GitBranch, FileText, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface TimelineStep {
  label: string;
  completed: boolean;
}

interface Metric {
  label: string;
  value: string;
  description: string;
}

interface Decision {
  question: string;
  answer: string;
}

interface Project {
  id: string;
  title: string;
  problem: string; // 해결한 문제
  description: string;
  fullDescription: string;
  tags: { label: string; color: string }[];
  link?: string;
  github?: string;
  docs?: string;
  image: string;
  period: string;
  team: string;
  myRole: string; // 나의 역할
  tools: string[];
  progress: number;
  timeline: TimelineStep[];
  metrics: Metric[]; // 성과 수치
  decisions: Decision[]; // 설계 결정 이유
  collaboration: string[]; // 협업/문서화 흔적
  growth: string; // 성장 포인트
}

const projects: Project[] = [
  {
    id: "todosign",
    title: "비대면 수술 동의서 전자서명 서비스",
    problem: "코로나19 이후 병원 방문이 어려운 환자들이 수술 동의서 서명을 위해 내원해야 하는 비효율 해결",
    description: "병원 방문 없이 **비대면**으로 수술 동의서에 **전자서명**을 할 수 있는 서비스. 환자와 의료진 모두의 편의성을 높이고, 종이 문서 관리의 번거로움을 해소합니다.",
    fullDescription: "코로나19 이후 **비대면 의료 서비스**의 필요성이 증가함에 따라, 환자들이 병원을 직접 방문하지 않고도 수술 동의서에 **전자서명**을 할 수 있는 웹 기반 서비스를 개발했습니다. **React**와 **TypeScript**를 활용하여 프론트엔드를 구축하고, 전자서명 API를 연동하여 **법적 효력**이 있는 서명 시스템을 구현했습니다. 환자 인증, 문서 열람, 서명, 제출까지의 전 과정을 모바일에서도 원활하게 진행할 수 있도록 **반응형 UI**를 적용했습니다.",
    tags: [
      { label: "React", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "전자서명", color: "bg-purple-500/20 text-purple-400" },
      { label: "헬스케어", color: "bg-pink-500/20 text-pink-400" },
    ],
    link: "https://todosign.lovable.app",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    period: "2024.01 - 2024.03",
    team: "프론트엔드 개발 (1인)",
    myRole: "풀스택 개발 (기획, UI/UX 설계, 프론트엔드, API 연동)",
    tools: ["React", "TypeScript", "Tailwind CSS", "전자서명 API", "Supabase"],
    progress: 100,
    timeline: [
      { label: "문제 정의 및 사용자 리서치", completed: true },
      { label: "와이어프레임 & 프로토타입", completed: true },
      { label: "컴포넌트 설계 및 개발", completed: true },
      { label: "전자서명 API 연동", completed: true },
      { label: "QA 테스트 및 배포", completed: true },
    ],
    metrics: [
      { label: "서명 완료율", value: "94%", description: "전체 발송 대비 서명 완료 비율" },
      { label: "평균 처리 시간", value: "3분", description: "기존 내원 대비 90% 단축" },
      { label: "모바일 사용률", value: "78%", description: "전체 서명의 모바일 비율" },
    ],
    decisions: [
      { question: "왜 React를 선택했나요?", answer: "복잡한 폼 상태 관리와 단계별 UI 전환이 필요했고, React의 컴포넌트 기반 아키텍처가 재사용성과 유지보수에 적합했습니다." },
      { question: "왜 Supabase를 선택했나요?", answer: "MVP 빠른 출시를 위해 BaaS를 선택했고, PostgreSQL 기반으로 추후 마이그레이션 용이성을 고려했습니다." },
    ],
    collaboration: [
      "Figma로 의료진과 UI/UX 리뷰 진행",
      "GitHub Projects로 태스크 관리",
      "Notion에 API 문서 및 기술 결정 기록",
    ],
    growth: "처음으로 실제 사용자(환자, 의료진)를 대상으로 한 서비스를 개발하며, 법적 요구사항과 UX 사이의 균형을 맞추는 경험을 했습니다. 특히 고령 환자도 쉽게 사용할 수 있는 접근성 있는 UI 설계의 중요성을 배웠습니다.",
  },
  {
    id: "commercial",
    title: "디저트 커머스 웹사이트",
    problem: "오프라인 베이커리의 온라인 판로 확대 및 신규 고객 유치 어려움 해결",
    description: "직접 **기획**하고 **개발**한 상업용 웹사이트를 통해 제품을 홍보하고 실질적인 **판매/문의 유입**을 목표로 운영.",
    fullDescription: "실제 **수익 창출**을 목표로 상업용 웹사이트를 기획부터 개발, 운영까지 전 과정을 직접 진행했습니다. **SEO 최적화**, **Google Analytics**를 활용한 사용자 행동 분석, **A/B 테스트**를 통한 전환율 개선 등 마케팅 관점에서의 개발을 경험했습니다. 실제 고객 문의와 판매로 이어지는 성과를 달성하며, 기술과 비즈니스를 연결하는 역량을 키웠습니다.",
    tags: [
      { label: "커머스", color: "bg-green-500/20 text-green-400" },
      { label: "SEO", color: "bg-blue-500/20 text-blue-400" },
      { label: "운영", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    link: "https://dessertlyn.lovable.app",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    period: "2023.06 - 현재",
    team: "1인 운영",
    myRole: "기획, 개발, 마케팅, 운영 전 과정 담당",
    tools: ["React", "Next.js", "Google Analytics", "Google Search Console", "Tailwind CSS"],
    progress: 80,
    timeline: [
      { label: "시장 조사 및 기획", completed: true },
      { label: "웹사이트 MVP 개발", completed: true },
      { label: "SEO 최적화 적용", completed: true },
      { label: "GA4 연동 및 데이터 분석", completed: true },
      { label: "A/B 테스트 및 개선 중", completed: false },
    ],
    metrics: [
      { label: "월간 방문자", value: "2,400+", description: "SEO 최적화 후 6개월간 성장" },
      { label: "전환율", value: "3.2%", description: "문의/주문 전환율" },
      { label: "평균 체류 시간", value: "2분 34초", description: "이탈률 대비 높은 참여도" },
    ],
    decisions: [
      { question: "왜 Next.js를 선택했나요?", answer: "SSR/SSG 지원으로 SEO에 유리하고, 이미지 최적화 기능이 제품 사진이 많은 커머스에 적합했습니다." },
      { question: "왜 직접 운영하나요?", answer: "개발자로서 비즈니스 도메인 이해와 데이터 기반 의사결정 경험을 쌓기 위해 직접 운영을 선택했습니다." },
    ],
    collaboration: [
      "GA4 대시보드로 주간 KPI 리뷰",
      "Google Search Console로 SEO 성과 모니터링",
      "운영 노하우 블로그 포스팅 (5편)",
    ],
    growth: "기술만으로는 성공할 수 없다는 것을 배웠습니다. 사용자 행동 데이터를 분석하고, 가설을 세우고, 실험하고, 개선하는 PDCA 사이클을 체득했습니다. 개발자가 비즈니스를 이해하면 더 좋은 제품을 만들 수 있다는 확신을 얻었습니다.",
  },
  {
    id: "medical-segmentation",
    title: "의료 영상 FTU 분할 모델",
    problem: "의료 연구에서 수동 FTU 분할에 소요되는 시간과 인력 비용 절감",
    description: "5개 기관의 조직 내 주요 기능 세포(FTUs)를 정확하게 **분할(Segmentation)**하는 **의료 영상 분석** 대회 참가.",
    fullDescription: "**Kaggle**에서 주최한 **HuBMAP + HPA** 대회에 참가하여 5개 장기(신장, 대장, 비장, 전립선, 폐)의 조직 이미지에서 기능적 조직 단위(FTUs)를 정확하게 분할하는 모델을 개발했습니다. **U-Net** 기반의 Segmentation 모델을 구현하고, 다양한 **Data Augmentation** 기법과 **앙상블 전략**을 적용하여 성능을 최적화했습니다. 의료 영상의 특성을 고려한 전처리와 후처리 파이프라인을 구축했습니다.",
    tags: [
      { label: "Computer Vision", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "Segmentation", color: "bg-purple-500/20 text-purple-400" },
      { label: "Kaggle", color: "bg-pink-500/20 text-pink-400" },
    ],
    github: "https://github.com/username/hubmap-segmentation",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop",
    period: "2022.09 - 2022.12",
    team: "팀 프로젝트 (3인)",
    myRole: "모델 아키텍처 설계 및 학습 파이프라인 구축",
    tools: ["Python", "PyTorch", "U-Net", "EfficientNet", "OpenCV", "Albumentations"],
    progress: 100,
    timeline: [
      { label: "EDA 및 데이터 특성 분석", completed: true },
      { label: "베이스라인 모델 구현", completed: true },
      { label: "하이퍼파라미터 튜닝", completed: true },
      { label: "앙상블 및 TTA 적용", completed: true },
      { label: "최종 제출 및 회고", completed: true },
    ],
    metrics: [
      { label: "최종 순위", value: "상위 12%", description: "1,175팀 중 상위권 달성" },
      { label: "Dice Score", value: "0.847", description: "Public LB 기준" },
      { label: "실험 횟수", value: "47회", description: "체계적인 실험 기록" },
    ],
    decisions: [
      { question: "왜 U-Net을 선택했나요?", answer: "의료 영상 분할에서 검증된 아키텍처이며, skip connection이 세밀한 경계 검출에 효과적이기 때문입니다." },
      { question: "왜 EfficientNet 백본을 사용했나요?", answer: "파라미터 효율성이 높아 제한된 GPU 메모리에서도 큰 배치 사이즈로 학습 가능했습니다." },
    ],
    collaboration: [
      "팀 Notion에 실험 로그 및 인사이트 공유",
      "주 2회 온라인 미팅으로 진척 공유",
      "GitHub PR 코드 리뷰 진행",
    ],
    growth: "대회를 통해 체계적인 실험 관리의 중요성을 배웠습니다. W&B로 실험을 추적하고, 가설-실험-분석 사이클을 반복하며 과학적 사고방식을 익혔습니다. 또한 팀원들과 지식을 공유하며 함께 성장하는 경험을 했습니다.",
  },
  {
    id: "ocr",
    title: "다국어 메뉴판 번역 시스템",
    problem: "외국인 관광객이 한국 식당에서 메뉴 이해 어려움으로 인한 불편 해소",
    description: "한국을 방문한 외국인 관광객이 식당에서 한국어 메뉴판을 **실시간으로 인식**하고 **번역**할 수 있는 시스템. **다국어 지원**으로 언어 장벽을 해소합니다.",
    fullDescription: "한국을 방문한 외국인 관광객들이 식당에서 겪는 **언어 장벽 문제**를 해결하기 위한 OCR 기반 메뉴판 번역 시스템을 개발했습니다. **Tesseract OCR**을 활용하여 한국어 텍스트를 인식하고, **Google Translate API**를 연동하여 영어, 중국어, 일본어 등 **다국어로 번역**하는 기능을 구현했습니다. 메뉴판 이미지의 전처리(노이즈 제거, 이진화)를 통해 **인식률을 향상**시켰습니다.",
    tags: [
      { label: "OCR", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "NLP", color: "bg-purple-500/20 text-purple-400" },
      { label: "관광", color: "bg-pink-500/20 text-pink-400" },
    ],
    github: "https://github.com/username/menu-translator",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop",
    period: "2022.03 - 2022.06",
    team: "팀 프로젝트 (4인)",
    myRole: "OCR 파이프라인 및 이미지 전처리 담당",
    tools: ["Python", "Tesseract OCR", "OpenCV", "Google Translate API", "Flask"],
    progress: 100,
    timeline: [
      { label: "사용자 인터뷰 및 요구사항 정의", completed: true },
      { label: "이미지 전처리 파이프라인 구축", completed: true },
      { label: "OCR 엔진 튜닝", completed: true },
      { label: "번역 API 연동", completed: true },
      { label: "사용성 테스트 및 개선", completed: true },
    ],
    metrics: [
      { label: "OCR 정확도", value: "89%", description: "전처리 적용 후 인식률" },
      { label: "지원 언어", value: "5개", description: "영/중/일/베/태 지원" },
      { label: "평균 응답 시간", value: "1.2초", description: "이미지 업로드 ~ 결과" },
    ],
    decisions: [
      { question: "왜 Tesseract를 선택했나요?", answer: "오픈소스로 비용 부담 없이 시작할 수 있고, 한국어 인식 성능이 상용 수준이었습니다." },
      { question: "왜 전처리에 집중했나요?", answer: "실제 메뉴판 사진은 조명, 각도가 다양해서 OCR 전 이미지 품질 개선이 정확도에 가장 큰 영향을 미쳤습니다." },
    ],
    collaboration: [
      "Trello로 스프린트 단위 태스크 관리",
      "실제 외국인 유학생 10명 대상 사용성 테스트",
      "프로젝트 발표 자료 및 데모 영상 제작",
    ],
    growth: "실제 사용자를 만나 인터뷰하고, 피드백을 받아 개선하는 과정이 가장 값진 경험이었습니다. 기술적으로 완벽하지 않아도 사용자 문제를 해결할 수 있다는 것을 배웠고, 빠른 피드백 루프의 중요성을 체감했습니다.",
  },
  {
    id: "drowsy-detection",
    title: "실시간 졸음 운전 감지 시스템",
    problem: "졸음 운전으로 인한 교통사고 사망률 증가 문제 해결",
    description: "**YOLOv4**와 **Darknet**을 활용해 사용자의 눈 상태를 **실시간으로 인식**하여 **졸음 운전을 예방**하는 시스템. 운전자 안전을 최우선으로 합니다.",
    fullDescription: "**졸음 운전**으로 인한 교통사고를 예방하기 위해 **실시간 졸음 감지 시스템**을 개발했습니다. **YOLOv4** 객체 탐지 모델을 커스텀 학습하여 운전자의 눈 상태(떠있음/감김)를 실시간으로 분류합니다. 일정 시간 이상 눈을 감고 있으면 **경고음**을 발생시켜 운전자에게 알립니다. **Darknet** 프레임워크를 활용하여 **GPU 가속**을 적용했으며, 웹캠을 통한 실시간 처리가 가능하도록 최적화했습니다.",
    tags: [
      { label: "Object Detection", color: "bg-green-500/20 text-green-400" },
      { label: "Real-time", color: "bg-blue-500/20 text-blue-400" },
      { label: "Safety", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    github: "https://github.com/username/drowsy-detection",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    period: "2021.09 - 2021.12",
    team: "팀 프로젝트 (3인)",
    myRole: "YOLOv4 모델 학습 및 추론 최적화",
    tools: ["Python", "YOLOv4", "Darknet", "OpenCV", "CUDA"],
    progress: 100,
    timeline: [
      { label: "문헌 조사 및 데이터셋 수집", completed: true },
      { label: "라벨링 및 데이터 전처리", completed: true },
      { label: "모델 학습 및 튜닝", completed: true },
      { label: "실시간 추론 최적화", completed: true },
      { label: "경고 시스템 통합 및 데모", completed: true },
    ],
    metrics: [
      { label: "감지 정확도", value: "96.3%", description: "눈 감김 상태 인식률" },
      { label: "추론 속도", value: "45 FPS", description: "RTX 2080 기준" },
      { label: "경고 지연", value: "<0.5초", description: "감지 후 경고까지" },
    ],
    decisions: [
      { question: "왜 YOLOv4를 선택했나요?", answer: "실시간 처리가 핵심이었고, YOLOv4가 속도와 정확도의 최적 균형점을 제공했습니다." },
      { question: "왜 눈 감김 시간을 2초로 설정했나요?", answer: "문헌 조사 결과 2초 이상 눈을 감으면 사고 위험이 급증한다는 연구를 참고했습니다." },
    ],
    collaboration: [
      "역할 분담: 데이터/모델/UI 각 1명",
      "주 3회 대면 미팅으로 진척 공유",
      "최종 발표 및 시연 영상 제작",
    ],
    growth: "실시간 시스템의 어려움을 체감했습니다. 정확도만 높이면 속도가 떨어지고, 속도만 높이면 정확도가 떨어지는 트레이드오프 속에서 적절한 균형점을 찾는 엔지니어링 감각을 키웠습니다.",
  },
  {
    id: "socar",
    title: "공유차량 파손 자동 감지 시스템",
    problem: "공유차량 반납 시 파손 여부 수동 확인에 따른 시간/인력 비용 절감",
    description: "**Semantic Segmentation** 기법을 활용해 자동차 외관 **파손 부위**를 **픽셀 단위**로 인식하는 AI 모델. 보험 처리 및 차량 관리 자동화에 기여합니다.",
    fullDescription: "공유 차량 서비스에서 반납 시 **차량 파손 여부를 자동으로 감지**하는 AI 모델을 개발했습니다. **DeepLab V3+** 기반의 **Semantic Segmentation** 모델을 학습하여 스크래치, 찌그러짐, 깨짐 등의 파손 유형을 **픽셀 단위로 분류**합니다. 다양한 조명 조건과 촬영 각도에서도 안정적으로 동작하도록 **Data Augmentation**을 적용했으며, 실제 쏘카 차량 이미지 데이터셋을 활용하여 학습했습니다.",
    tags: [
      { label: "Semantic Seg.", color: "bg-cyan-500/20 text-cyan-400" },
      { label: "모빌리티", color: "bg-purple-500/20 text-purple-400" },
    ],
    github: "https://github.com/username/car-damage-detection",
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&h=500&fit=crop",
    period: "2022.01 - 2022.02",
    team: "팀 프로젝트 (5인)",
    myRole: "DeepLab V3+ 구현 및 학습 담당",
    tools: ["Python", "PyTorch", "DeepLab V3+", "OpenCV", "Albumentations"],
    progress: 100,
    timeline: [
      { label: "데이터 EDA 및 라벨 분석", completed: true },
      { label: "베이스라인 모델 구현", completed: true },
      { label: "Augmentation 실험", completed: true },
      { label: "성능 평가 및 최종 모델 선정", completed: true },
    ],
    metrics: [
      { label: "mIoU", value: "0.72", description: "전체 클래스 평균 IoU" },
      { label: "스크래치 IoU", value: "0.81", description: "가장 빈번한 파손 유형" },
      { label: "학습 시간", value: "8시간", description: "V100 GPU 기준" },
    ],
    decisions: [
      { question: "왜 DeepLab V3+를 선택했나요?", answer: "ASPP 모듈이 다양한 크기의 파손을 잘 잡아내고, Encoder-Decoder 구조가 경계를 정밀하게 분할합니다." },
      { question: "가장 어려웠던 점은?", answer: "클래스 불균형이 심해서 Focal Loss와 클래스 가중치 조정이 필수였습니다." },
    ],
    collaboration: [
      "Git Flow 브랜치 전략 적용",
      "코드 리뷰를 통한 품질 관리",
      "실험 결과 공유 회의 주 1회",
    ],
    growth: "대규모 팀(5인)에서의 협업 경험을 통해 코드 컨벤션과 문서화의 중요성을 배웠습니다. 각자 다른 실험을 병렬로 진행하면서도 결과를 효과적으로 통합하는 방법을 익혔습니다.",
  },
  {
    id: "musinsa",
    title: "패션 리뷰 감성분석 및 트렌드 예측",
    problem: "대량의 리뷰 데이터에서 시즌별 트렌드와 고객 인사이트 추출 자동화",
    description: "리뷰를 읽고 감정을 해석해 다음 시즌을 설계. **감성 분석**부터 **데이터 증식**, **별점 예측**까지 진행한 **NLP** 프로젝트입니다.",
    fullDescription: "무신사 쇼핑몰의 상품 리뷰 데이터를 수집하여 **감성 분석 모델**을 개발했습니다. **KoBERT**를 Fine-tuning하여 리뷰의 긍정/부정/중립 감정을 분류하고, **별점을 예측**하는 회귀 모델도 함께 구현했습니다. **데이터 불균형 문제**를 해결하기 위해 **Back-translation**, **EDA(Easy Data Augmentation)** 등의 데이터 증식 기법을 적용했습니다. 분석 결과를 시각화하여 **시즌별 트렌드 인사이트**를 도출했습니다.",
    tags: [
      { label: "NLP", color: "bg-green-500/20 text-green-400" },
      { label: "감성분석", color: "bg-blue-500/20 text-blue-400" },
      { label: "패션", color: "bg-yellow-500/20 text-yellow-400" },
    ],
    github: "https://github.com/username/musinsa-sentiment",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
    period: "2022.04 - 2022.06",
    team: "팀 프로젝트 (4인)",
    myRole: "KoBERT Fine-tuning 및 데이터 증식 담당",
    tools: ["Python", "KoBERT", "PyTorch", "Pandas", "Hugging Face", "Matplotlib"],
    progress: 100,
    timeline: [
      { label: "크롤링 및 데이터 수집", completed: true },
      { label: "EDA 및 전처리", completed: true },
      { label: "데이터 증식 적용", completed: true },
      { label: "모델 학습 및 평가", completed: true },
      { label: "인사이트 시각화 및 발표", completed: true },
    ],
    metrics: [
      { label: "분류 정확도", value: "91.2%", description: "3클래스 감성 분류" },
      { label: "별점 예측 MAE", value: "0.32", description: "5점 만점 기준" },
      { label: "분석 리뷰 수", value: "52,000건", description: "6개월치 데이터" },
    ],
    decisions: [
      { question: "왜 KoBERT를 선택했나요?", answer: "한국어 리뷰 분석에 특화되어 있고, BERT 기반이라 문맥 이해가 뛰어납니다." },
      { question: "왜 데이터 증식을 적용했나요?", answer: "중립 리뷰가 적어 클래스 불균형이 심했고, Back-translation으로 중립 데이터를 3배 증강했습니다." },
    ],
    collaboration: [
      "역할: 크롤링/전처리/모델/시각화 분담",
      "매주 Zoom 미팅으로 진행 상황 공유",
      "최종 인사이트 보고서 작성 (15페이지)",
    ],
    growth: "데이터의 품질이 모델 성능을 결정한다는 것을 체감했습니다. 전처리와 증식에 투자한 시간만큼 결과가 좋아졌고, 'Garbage In, Garbage Out' 원칙을 몸소 배웠습니다.",
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
        {/* Tags + Metric Badge */}
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag.label}
              className={`px-2 py-0.5 text-[10px] font-medium rounded ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
          {project.metrics && project.metrics.length > 0 && (
            <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-primary/20 text-primary">
              {project.metrics[0].label}: {project.metrics[0].value}
            </span>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-sm font-semibold mb-1.5 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h3>
        
        {/* Problem - 핵심 한 줄 */}
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {project.problem}
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

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="projects" className="min-h-screen py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            주요 <span className="text-gradient">프로젝트</span>
          </h2>
          <p className="text-muted-foreground">
            실제로 진행했던 프로젝트들을 소개합니다
          </p>
        </div>

        {/* All Projects - 3 column grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden bg-card border-border p-0">
          {selectedProject && (
            <div className="flex flex-col max-h-[85vh]">
              <VisuallyHidden>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </VisuallyHidden>
              
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Header Section */}
                <div className="p-6 pb-4 border-b border-border/50">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag.label}
                        className={`px-2 py-0.5 text-xs font-medium rounded ${tag.color}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-sm text-muted-foreground">{selectedProject.problem}</p>
                </div>

                {/* Metrics */}
                {selectedProject.metrics && selectedProject.metrics.length > 0 && (
                  <div className="px-6 py-4 bg-muted/30 border-b border-border/50">
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-xl font-bold text-primary">{metric.value}</p>
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Main Content */}
                <div className="p-6 space-y-6">
                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedProject.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedProject.team}</span>
                    </div>
                  </div>

                  {/* My Role */}
                  {selectedProject.myRole && (
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">역할</h4>
                      <p className="text-sm">{selectedProject.myRole}</p>
                    </div>
                  )}

                  {/* Tools */}
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">기술 스택</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tools.map((tool) => (
                        <span key={tool} className="px-2 py-1 text-xs bg-muted rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">프로젝트 설명</h4>
                    <p className="text-sm leading-relaxed text-foreground/90">
                      {renderDescriptionWithHighlights(selectedProject.fullDescription)}
                    </p>
                  </div>

                  {/* Design Decisions */}
                  {selectedProject.decisions && selectedProject.decisions.length > 0 && (
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5" />
                        설계 결정
                      </h4>
                      <div className="space-y-2">
                        {selectedProject.decisions.map((decision, idx) => (
                          <div key={idx} className="p-3 rounded-lg bg-muted/50">
                            <p className="text-xs font-medium text-primary mb-1">{decision.question}</p>
                            <p className="text-xs text-foreground/80">{decision.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Growth */}
                  {selectedProject.growth && (
                    <div>
                      <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        성장 포인트
                      </h4>
                      <p className="text-sm text-foreground/90 leading-relaxed pl-3 border-l-2 border-primary/50">
                        {selectedProject.growth}
                      </p>
                    </div>
                  )}

                  {/* Timeline - Compact */}
                  <div>
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">타임라인</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.timeline.map((step, index) => (
                        <span 
                          key={index} 
                          className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded ${
                            step.completed 
                              ? 'bg-primary/10 text-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {step.completed ? (
                            <CheckCircle2 className="w-3 h-3" />
                          ) : (
                            <Circle className="w-3 h-3" />
                          )}
                          {step.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer - Links */}
                <div className="px-6 py-4 border-t border-border/50 flex flex-wrap gap-2">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      데모
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded-md hover:bg-muted/80 transition-colors"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                  {selectedProject.docs && (
                    <a
                      href={selectedProject.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded-md hover:bg-muted/80 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
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
