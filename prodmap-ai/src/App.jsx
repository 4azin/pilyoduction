import React from 'react';
import {
  ArrowRight,
  Bell,
  Bot,
  CheckCircle2,
  ClipboardList,
  Edit3,
  FileSearch,
  Film,
  FlaskConical,
  Megaphone,
  MousePointerClick,
  Play,
  Rocket,
  Sparkles,
  UsersRound,
  Wand2,
  Workflow,
} from 'lucide-react';
import './App.css';

const mvpFeatures = [
  {
    icon: Sparkles,
    title: 'AI 제작 로드맵 생성',
    desc: '목적, 예산, 인원, 기간을 입력하면 프로젝트 조건에 맞는 제작 흐름을 제안합니다.',
  },
  {
    icon: Edit3,
    title: '로드맵 수정',
    desc: 'AI가 만든 초안을 팀의 제작 방식에 맞게 단계 추가, 삭제, 순서 변경할 수 있습니다.',
  },
  {
    icon: ClipboardList,
    title: '로드맵 기반 문서 생성',
    desc: '고정 템플릿이 아니라 확정된 로드맵에 맞춰 필요한 문서를 자동 구성합니다.',
  },
  {
    icon: UsersRound,
    title: '업무와 담당자 정리',
    desc: '각 단계별로 누가, 무엇을, 언제까지 해야 하는지 실행 단위로 정리합니다.',
  },
  {
    icon: Bell,
    title: '일정 알림',
    desc: '촬영 준비, 콜시트 공유, 피드백 마감, 납품 일정 등을 놓치지 않도록 알려줍니다.',
  },
];

const workflowSteps = [
  '프로젝트 목적과 규모 입력',
  'AI가 맞춤 제작 로드맵 제안',
  '팀 방식에 맞게 로드맵 수정',
  '문서, 업무, 일정 자동 생성',
];

const roadmapItems = [
  {
    label: '기획 확정',
    status: '완료',
    detail: '콘셉트, 타깃, 형식과 납품 형태 정리',
  },
  {
    label: '예산 구성',
    status: '진행중',
    detail: '인건비, 장비비, 장소비, 후반작업비 가예산 산출',
  },
  {
    label: '촬영 준비',
    status: '대기',
    detail: '콜시트, 장비 체크리스트, 장소 체크리스트 생성 예정',
  },
  {
    label: '후반 작업',
    status: '대기',
    detail: '편집 일정, 피드백 시트, 납품 체크리스트 연결',
  },
];

const labs = [
  {
    icon: FileSearch,
    title: 'Production Memory',
    subtitle: 'RAG 기반 문서 검색 챗봇',
    desc: '작성한 기획안, 예산안, 콜시트, 피드백 문서를 대화로 빠르게 찾습니다.',
  },
  {
    icon: Megaphone,
    title: 'Production Mode',
    subtitle: '촬영 현장의 콜 버튼',
    desc: '촬영팀, 조명팀, 출연자, 클라이언트에게 부서별로 빠르게 알림을 보냅니다.',
  },
  {
    icon: Wand2,
    title: 'Post-production Assistant',
    subtitle: '후반작업 보완 추천',
    desc: '촬영 후 부족한 산출물과 보완 가능한 AI 작업 방식을 제안합니다.',
  },
  {
    icon: Rocket,
    title: 'Funding Kit',
    subtitle: '지원사업용 문서 생성',
    desc: '완성된 기획서와 예산안을 바탕으로 홍보 문서와 지원사업 문서를 만듭니다.',
  },
];

function Button({ children, variant = 'primary' }) {
  return <button className={`btn ${variant}`}>{children}</button>;
}

function IconBox({ children, dark = false }) {
  return <div className={dark ? 'icon-box dark' : 'icon-box'}>{children}</div>;
}

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <div className="container nav">
          <a href="/" className="brand">
            <div className="brand-icon">
              <Film size={20} />
            </div>
            <span>필요덕션</span>
          </a>

          <nav className="nav-links">
            <a href="#product">Product</a>
            <a href="#workflow">Workflow</a>
            <a href="#labs">Labs</a>
          </nav>

          <a href="#beta" className="nav-cta">
            베타 신청
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="glow glow-one" />
        <div className="glow glow-two" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="badge">
              <Sparkles size={16} />
              piryoduction, 소규모 프로덕션을 위한 AI 제작 PM
            </div>

            <h1>
              프로젝트 조건만 입력하면,
              <br />
              제작 로드맵부터 일정까지.
            </h1>

            <p className="hero-desc">
              목적, 예산, 인원, 기간만 입력하세요. 필요덕션이 맞춤형 제작 로드맵을 제안하고,
              그 흐름에 맞는 문서, 업무, 담당자, 마감일, 알림을 자동으로 구성합니다.
            </p>

            <div className="hero-buttons">
              <Button>
                무료로 로드맵 만들기
                <ArrowRight size={18} />
              </Button>
              <Button variant="secondary">
                <Play size={18} />
                데모 보기
              </Button>
            </div>

            <div className="hero-tags">
              <span>광고, 브랜드 콘텐츠</span>
              <span>유튜브, 숏폼 제작팀</span>
              <span>프리랜서 PD, 감독</span>
            </div>
          </div>

          <div className="preview-card">
            <div className="preview-top">
              <div>
                <p>새 프로젝트</p>
                <h3>브랜드 인터뷰 영상</h3>
              </div>
              <span className="analysis-badge">AI 분석중</span>
            </div>

            <div className="preview-stats">
              <div>
                <small>예산</small>
                <strong>300만원</strong>
              </div>
              <div>
                <small>인원</small>
                <strong>5명</strong>
              </div>
              <div>
                <small>기간</small>
                <strong>14일</strong>
              </div>
            </div>

            <div className="ai-result">
              <IconBox>
                <Bot size={20} />
              </IconBox>
              <div>
                <strong>AI 제작 로드맵 생성 완료</strong>
                <p>필요 문서 7개, 업무 18개, 알림 9개</p>
              </div>
              <CheckCircle2 className="result-check" size={24} />
            </div>

            <div className="roadmap-list">
              {roadmapItems.map((item, index) => (
                <div className="roadmap-item" key={item.label}>
                  <div className="roadmap-number">{index + 1}</div>
                  <div className="roadmap-content">
                    <div className="roadmap-title">
                      <strong>{item.label}</strong>
                      <span>{item.status}</span>
                    </div>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="container section">
        <div className="section-head">
          <span className="section-label">CORE MVP</span>
          <h2>문서를 만들기 전에, 제작 흐름을 먼저 설계합니다.</h2>
          <p>
            필요덕션의 MVP는 단순 문서 자동화가 아닙니다. 소규모 프로덕션의 프로젝트 시작 전
            전체 흐름을 이해하고, 그 흐름을 실행 가능한 업무와 문서로 바꾸는 데 집중합니다.
          </p>
        </div>

        <div className="mvp-grid">
          {mvpFeatures.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <IconBox dark>
                <feature.icon size={23} />
              </IconBox>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="workflow-section">
        <div className="container workflow-grid">
          <div className="workflow-copy">
            <span className="section-label">WORKFLOW</span>
            <h2>30분 안에 제작의 첫 구조를 만듭니다.</h2>
            <p>
              촬영 전에 가장 필요한 것은 예쁜 문서가 아니라 팀 전체가 공유할 수 있는 실행 가능한
              제작 로드맵입니다.
            </p>
          </div>

          <div className="step-grid">
            {workflowSteps.map((step, index) => (
              <div className="step-card" key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container dark-panel">
        <div className="dark-copy">
          <span className="section-label light">FOR SMALL TEAMS</span>
          <h2>제작관리자가 없어도, 제작은 관리되어야 하니까.</h2>
          <p>
            한 사람이 여러 역할을 맡는 소규모 팀일수록 준비 누락과 커뮤니케이션 비용이 커집니다.
            필요덕션은 로드맵을 문서, 업무, 일정, 알림으로 연결합니다.
          </p>
        </div>

        <div className="dark-stats">
          <div>
            <strong>7+</strong>
            <span>자동 생성 문서</span>
          </div>
          <div>
            <strong>18+</strong>
            <span>업무, 마감일 정리</span>
          </div>
          <div>
            <strong>9+</strong>
            <span>상황별 알림</span>
          </div>
        </div>
      </section>

      <section id="labs" className="labs-section">
        <div className="container">
          <div className="labs-head">
            <div>
              <span className="section-label labs-label">
                <FlaskConical size={16} />
                PIRYODUCTION LABS
              </span>
              <h2>로드맵 이후의 제작 경험을 실험합니다.</h2>
            </div>
            <p>
              MVP는 제작 로드맵과 문서, 일정 자동화에 집중합니다. Labs에서는 촬영 현장,
              후반작업, 지원사업까지 이어지는 확장 기능을 실험합니다.
            </p>
          </div>

          <div className="labs-grid">
            {labs.map((item) => (
              <article className="lab-card" key={item.title}>
                <IconBox>
                  <item.icon size={23} />
                </IconBox>
                <span>{item.subtitle}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="beta" className="container cta-section">
        <IconBox dark>
          <MousePointerClick size={28} />
        </IconBox>

        <h2>첫 프로젝트 로드맵을 만들어보세요.</h2>
        <p>
          지금은 제품의 데모 단계입니다. 사용자의 입력 흐름과 핵심 가치를 먼저 검증하고,
          이후 실제 AI 생성과 협업 기능을 연결합니다.
        </p>

        <div className="hero-buttons center">
          <Button>
            베타 신청하기
            <ArrowRight size={18} />
          </Button>
          <Button variant="secondary">
            <Workflow size={18} />
            데모 플로우 보기
          </Button>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="/" className="brand footer-brand">
            <div className="brand-icon small">
              <Film size={17} />
            </div>
            <span>필요덕션</span>
          </a>
          <p>piryoduction, AI production roadmap platform for small video teams.</p>
        </div>
      </footer>
    </main>
  );
}
