import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Bell,
  ClipboardList,
  Edit3,
  FileSearch,
  Film,
  Megaphone,
  Play,
  Rocket,
  Sparkles,
  UsersRound,
  Wand2,
  Cpu,
  PenTool
} from 'lucide-react';
import './App.css';

const mvpFeatures = [
  {
    icon: PenTool,
    title: 'AI 제작 로드맵 생성',
    desc: '목적, 예산, 인원, 기간을 입력하면 프로젝트 조건에 맞는 제작 흐름을 제안합니다.',
    tag: 'REV.1'
  },
  {
    icon: Edit3,
    title: '로드맵 수정',
    desc: 'AI가 만든 초안을 팀의 제작 방식에 맞게 단계 추가, 삭제, 순서 변경할 수 있습니다.',
    tag: 'REV.2'
  },
  {
    icon: ClipboardList,
    title: '로드맵 기반 문서 생성',
    desc: '고정 템플릿이 아니라 확정된 로드맵에 맞춰 필요한 문서를 자동 구성합니다.',
    tag: 'REV.3'
  },
  {
    icon: UsersRound,
    title: '업무와 담당자 정리',
    desc: '각 단계별로 누가, 무엇을, 언제까지 해야 하는지 실행 단위로 정리합니다.',
    tag: 'REV.4'
  },
  {
    icon: Bell,
    title: '일정 알림',
    desc: '촬영 준비, 콜시트 공유, 피드백 마감, 납품 일정 등을 놓치지 않도록 알려줍니다.',
    tag: 'REV.5'
  },
];

const roadmapItems = [
  {
    label: '기획 확정',
    status: '완료',
    detail: '콘셉트, 타깃, 형식과 납품 형태 정리',
    active: true
  },
  {
    label: '예산 구성',
    status: '진행중',
    detail: '인건비, 장비비, 장소비, 후반작업비 가예산 산출',
    active: false
  },
  {
    label: '촬영 준비',
    status: '대기',
    detail: '콜시트, 장비 체크리스트, 장소 체크리스트 생성 예정',
    active: false
  },
  {
    label: '후반 작업',
    status: '대기',
    detail: '편집 일정, 피드백 시트, 납품 체크리스트 연결',
    active: false
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

export default function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    
    if (isHoveringHero) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHoveringHero]);

  return (
    <main className="page">
      <header className="header">
        <div className="container nav">
          <a href="/" className="brand">
            <div className="brand-icon">
              <Cpu size={20} />
            </div>
            <span>필요덕션</span>
          </a>

          <nav className="nav-links">
            <a href="#product">Core Features</a>
            <a href="#workflow">Workflow</a>
            <a href="#labs">Labs</a>
          </nav>

          <a href="#beta" className="nav-cta">
            시작하기
          </a>
        </div>
      </header>

      <section 
        className="hero"
        onMouseEnter={() => setIsHoveringHero(true)}
        onMouseLeave={() => setIsHoveringHero(false)}
      >
        {isHoveringHero && (
          <>
            <div className="crosshair-x" style={{ left: coords.x }}></div>
            <div className="crosshair-y" style={{ top: coords.y }}></div>
          </>
        )}

        <div className="container blueprint-container">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="tech-tag">
                <Sparkles size={14} color="var(--accent-cyan)" />
                AI 제작 PM <span>v2.0</span>
              </div>

              <h1>
                <span>영상 제작의 모든 것,</span>
                <span>설계부터 실행까지.</span>
              </h1>

              <p className="hero-desc">
                프로젝트의 목적, 예산, 인원, 기간만 입력하세요. 
                맞춤형 제작 로드맵을 자동으로 설계하고, 실행에 필요한 업무와 문서 파이프라인을 구축해 드립니다.
              </p>

              <div className="hero-buttons">
                <Button>
                  로드맵 무료 생성
                  <ArrowRight size={18} />
                </Button>
                <Button variant="secondary">
                  <Play size={18} />
                  데모 보기
                </Button>
              </div>
            </div>

            <div className="preview-card">
              <div className="tech-callout">PREVIEW</div>
              <div className="preview-top">
                <div>
                  <p>새 프로젝트</p>
                  <h3>브랜드 인터뷰 영상</h3>
                </div>
                <span className="analysis-badge">분석 완료</span>
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

              <div className="roadmap-list">
                {roadmapItems.map((item, index) => (
                  <div className={`roadmap-item ${item.active ? 'active' : ''}`} key={item.label}>
                    <div className="roadmap-number">{index + 1}</div>
                    <div className="roadmap-title">
                      <strong>{item.label}</strong>
                      <span>{item.status}</span>
                    </div>
                    <div className="roadmap-content">
                      <p>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="section">
        <div className="container blueprint-container">
          <div className="section-head">
            <span className="section-label">CORE FEATURES</span>
            <h2>단순 문서 자동화가 아닌, 실행 가능한 흐름 설계</h2>
            <p>
              소규모 영상 프로덕션 팀을 위해, 프로젝트 시작 전 전체 흐름을 이해하고
              그 흐름을 실행 가능한 업무 노드로 자동 변환합니다.
            </p>
          </div>

          <div className="mvp-grid">
            {mvpFeatures.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="tech-callout">{feature.tag}</div>
                <div className="icon-box">
                  <feature.icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="labs" className="section">
        <div className="container blueprint-container">
          <div className="section-head">
            <span className="section-label">EXPERIMENTAL LABS</span>
            <h2>로드맵 그 이후, 제작 경험의 확장</h2>
            <p>
              초기 기획과 로드맵 구축 완료 후, 현장 제어와 후반 작업,
              나아가 데이터 아카이빙까지 지원하는 확장 기능을 연구합니다.
            </p>
          </div>

          <div className="mvp-grid">
            {labs.map((item, idx) => (
              <article className="feature-card" key={item.title}>
                <div className="tech-callout">EXP.{idx + 1}</div>
                <div className="icon-box">
                  <item.icon size={24} />
                </div>
                <div className="deco-font" style={{marginBottom: '10px'}}>{item.subtitle}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand" style={{fontSize: '16px'}}>
            <Film size={18} />
            <span>PIRYODUCTION</span>
          </div>
          <p>© 2026 Piryoduction. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
