import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  Bell,
  Bot,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardList,
  FileCheck2,
  FileText,
  Film,
  FolderKanban,
  GitBranch,
  LayoutDashboard,
  Megaphone,
  MessageSquareText,
  Plus,
  RadioTower,
  Search,
  Send,
  Sparkles,
  Upload,
  UsersRound,
} from 'lucide-react';
import './App.css';

const navItems = [
  { id: 'home', label: 'Home', icon: FolderKanban },
  { id: 'new', label: 'New Project', icon: Plus },
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'roadmap', label: 'Roadmap', icon: GitBranch },
  { id: 'docs', label: 'Docs', icon: FileText },
  { id: 'tasks', label: 'Tasks', icon: ClipboardList },
  { id: 'calendar', label: 'Calendar', icon: CalendarDays },
  { id: 'meeting', label: 'Meeting', icon: MessageSquareText },
  { id: 'production', label: 'Production', icon: RadioTower },
  { id: 'assistant', label: 'AI Assistant', icon: Bot },
  { id: 'submission', label: 'Submission', icon: FileCheck2 },
];

const projectCards = [
  { name: '브랜드 인터뷰 영상', progress: 42, day: '촬영 D-2', risks: 2, unread: 5, ai: 3 },
  { name: '독립 단편영화 A', progress: 68, day: '납품 D-14', risks: 1, unread: 2, ai: 1 },
  { name: '뮤직비디오 B', progress: 23, day: '프리프로덕션', risks: 4, unread: 7, ai: 5 },
];

const aiProposals = [
  {
    type: '태스크 생성',
    title: '출연자 동선 최종 확인',
    reason: '콜시트와 촬영 동선에 직접 영향',
    owner: '연출 / 제작부',
    impact: '높음',
  },
  {
    type: '리스크 등록',
    title: '로케이션 미확정으로 콜시트 지연 가능',
    reason: '촬영 준비 단계의 선행 조건 누락',
    owner: '제작부',
    impact: '긴급',
  },
  {
    type: '문서 제안',
    title: '지원사업 신청서 초안 생성 가능',
    reason: '프로젝트 목적과 예산 데이터가 충분함',
    owner: 'PM',
    impact: '중간',
  },
];

const globalRoadmap = [
  { title: '기획', status: '완료', progress: 100 },
  { title: '프리프로덕션', status: '진행중', progress: 64 },
  { title: '촬영', status: '위험', progress: 18 },
  { title: '후반작업', status: '예정', progress: 0 },
  { title: '납품/제출', status: '예정', progress: 0 },
];

const localRoadmaps = [
  { role: '연출', steps: ['기획 의도', '콘티', '샷리스트', '촬영 디렉션'], blocked: '샷리스트 검토중' },
  { role: '제작', steps: ['예산안', '섭외', '콜시트', '현장 운영'], blocked: '로케이션 미확정' },
  { role: '촬영', steps: ['장비 리스트', '로케이션 체크', '촬영 계획', '소스 전달'], blocked: '장비 렌탈 대기' },
  { role: '미술', steps: ['소품 리스트', '세트 준비', '촬영일 준비물', '반납'], blocked: '소품 리스트 승인 대기' },
];

const docs = [
  { title: '제작계획서', importance: '필수', status: '확정', owner: '김PD', risk: '없음' },
  { title: '로케이션 리스트', importance: '필수', status: '작성중', owner: '제작부', risk: '콜시트 작성 지연 가능' },
  { title: '콜시트', importance: '필수', status: '초안', owner: '조감독', risk: '촬영 D-1까지 확정 필요' },
  { title: '장비 리스트', importance: '권장', status: '검토 요청', owner: '촬영팀', risk: '렌탈 일정 영향' },
  { title: '결과보고서', importance: '선택', status: '미생성', owner: 'PM', risk: '제출 단계에서 필요' },
];

const tasks = [
  { title: '콜타임 변경안 확인', owner: '전체 스태프', due: '오늘 18:00', status: '검토중', priority: '긴급' },
  { title: '소품 리스트 최종 확정', owner: '미술팀', due: 'D-1', status: '진행중', priority: '높음' },
  { title: '장비 픽업 시간 확정', owner: '촬영팀', due: 'D-2', status: '막힘', priority: '높음' },
  { title: '지원사업 신청서 초안 검토', owner: 'PM', due: 'D-7', status: '예정', priority: '보통' },
];

const notifications = [
  { title: '[긴급] 콜타임 변경 확인 필요', target: '전체 스태프', status: '8명 중 5명 확인', linked: '5/18 촬영' },
  { title: '[AI] 회의록에서 태스크 4건 발견', target: 'PM', status: '승인 대기', linked: '회의록 05.16' },
  { title: '[확인 요청] 장비 리스트 업데이트', target: '촬영팀', status: '처리중', linked: '장비 리스트' },
];

const macroButtons = ['전체 공지', '촬영팀 호출', '미술팀 확인 요청', '사운드 체크 요청', '장소 이동 공지', '긴급 이슈 등록'];

function App() {
  const [activeScreen, setActiveScreen] = useState('home');
  const [briefStep, setBriefStep] = useState('input');
  const [selectedProject, setSelectedProject] = useState(projectCards[0]);
  const [roleView, setRoleView] = useState('PM');

  const screenTitle = useMemo(() => {
    const found = navItems.find((item) => item.id === activeScreen);
    return found?.label || 'Piryoduction';
  }, [activeScreen]);

  const openProject = (project = projectCards[0]) => {
    setSelectedProject(project);
    setActiveScreen('overview');
  };

  const startBriefAnalysis = () => {
    setBriefStep('loading');
    window.setTimeout(() => setBriefStep('review'), 800);
  };

  const confirmProjectRoom = () => {
    setSelectedProject(projectCards[0]);
    setActiveScreen('overview');
    setBriefStep('input');
  };

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <button className="brand-mark" onClick={() => setActiveScreen('home')}>
          <span className="brand-icon"><Film size={20} /></span>
          <span>
            <strong>필요덕션</strong>
            <small>AI Production Control Room</small>
          </span>
        </button>

        <nav className="side-nav" aria-label="주요 화면">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeScreen === item.id ? 'active' : ''}`}
              onClick={() => setActiveScreen(item.id)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-status">
          <span className="signal-dot" />
          <div>
            <strong>프로젝트 상태</strong>
            <small>운영중 · AI 제안 3건</small>
          </div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Piryoduction MVP Wireframe</p>
            <h1>{screenTitle}</h1>
          </div>
          <div className="topbar-actions">
            <label className="role-switch">
              <span>Role View</span>
              <select value={roleView} onChange={(event) => setRoleView(event.target.value)}>
                <option>PM</option>
                <option>연출</option>
                <option>촬영팀</option>
                <option>미술팀</option>
                <option>편집팀</option>
              </select>
            </label>
            <button className="icon-button" aria-label="알림"><Bell size={18} /></button>
            <button className="primary-button" onClick={() => setActiveScreen('new')}>
              <Plus size={18} /> 새 프로젝트
            </button>
          </div>
        </header>

        {activeScreen === 'home' && <HomeScreen openProject={openProject} />}
        {activeScreen === 'new' && (
          <NewProjectScreen
            briefStep={briefStep}
            onGenerate={startBriefAnalysis}
            onConfirm={confirmProjectRoom}
          />
        )}
        {activeScreen === 'overview' && <OverviewScreen project={selectedProject} roleView={roleView} />}
        {activeScreen === 'roadmap' && <RoadmapScreen />}
        {activeScreen === 'docs' && <DocsScreen />}
        {activeScreen === 'tasks' && <TasksScreen />}
        {activeScreen === 'calendar' && <CalendarScreen />}
        {activeScreen === 'meeting' && <MeetingScreen />}
        {activeScreen === 'production' && <ProductionScreen />}
        {activeScreen === 'assistant' && <AssistantScreen />}
        {activeScreen === 'submission' && <SubmissionScreen />}
      </section>
    </main>
  );
}

function HomeScreen({ openProject }) {
  return (
    <div className="screen-stack">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">Home</p>
          <h2>참여 중인 프로젝트 룸과 AI 제안을 한눈에 확인합니다.</h2>
        </div>
        <button className="primary-button">
          <Plus size={18} /> 새 프로젝트 만들기
        </button>
      </section>

      <div className="project-grid">
        {projectCards.map((project) => (
          <button className="project-card" key={project.name} onClick={() => openProject(project)}>
            <span className="card-kicker">{project.day}</span>
            <h3>{project.name}</h3>
            <ProgressBar value={project.progress} />
            <div className="metric-row">
              <Metric label="리스크" value={`${project.risks}건`} tone="risk" />
              <Metric label="미확인" value={`${project.unread}건`} tone="warn" />
              <Metric label="AI 제안" value={`${project.ai}건`} tone="ai" />
            </div>
          </button>
        ))}
      </div>

      <TwoColumn
        left={<NotificationList />}
        right={<AIProposalQueue compact />}
      />
    </div>
  );
}

function NewProjectScreen({ briefStep, onGenerate, onConfirm }) {
  if (briefStep === 'loading') {
    return (
      <section className="center-stage">
        <div className="analysis-orbit"><Sparkles size={36} /></div>
        <h2>AI가 제작 운영안을 구성하고 있습니다.</h2>
        <p>로드맵, 문서, 역할, 태스크, 일정, 리스크를 프로젝트 룸 구조로 연결합니다.</p>
        <div className="generation-list">
          {['브리프 분석', 'Global Roadmap 생성', 'Local Roadmap 연결', '필수 문서 구성', 'AI 제안 큐 준비'].map((item) => (
            <span key={item}><Check size={16} /> {item}</span>
          ))}
        </div>
      </section>
    );
  }

  if (briefStep === 'review') {
    return (
      <div className="screen-stack">
        <section className="hero-panel">
          <div>
            <p className="eyebrow">S06 · AI 운영안 검토</p>
            <h2>브랜드 인터뷰 영상 운영안이 준비되었습니다.</h2>
            <p>사용자가 승인한 항목만 프로젝트 룸에 반영됩니다.</p>
          </div>
          <button className="primary-button" onClick={onConfirm}>
            프로젝트 룸 생성 <ChevronRight size={18} />
          </button>
        </section>

        <div className="review-grid">
          <Panel title="Global Roadmap 초안" icon={GitBranch}>
            {globalRoadmap.map((item) => <StatusLine key={item.title} {...item} />)}
          </Panel>
          <Panel title="추천 역할군" icon={UsersRound}>
            <TagCloud tags={['PM', '연출', '제작부', '촬영팀', '미술팀', '편집팀', '클라이언트 대응']} />
          </Panel>
          <Panel title="필수 문서 8개" icon={FileText}>
            <TagCloud tags={['제작계획서', '예산안', '일정표', '역할/담당표', '콜시트', '장비 리스트', '로케이션 리스트', '회의록']} />
          </Panel>
          <AIProposalQueue />
        </div>
      </div>
    );
  }

  return (
    <div className="screen-stack">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">S04 · 프로젝트 브리프 입력</p>
          <h2>긴 설정 대신 제작 조건만 입력합니다.</h2>
          <p>빈 보드가 아니라 AI 운영안으로 시작하는 프로젝트 생성 플로우입니다.</p>
        </div>
      </section>

      <section className="brief-layout">
        <div className="form-panel">
          <Field label="프로젝트명" value="브랜드 인터뷰 영상" />
          <Field label="콘텐츠 유형" value="브랜드 인터뷰 / 홍보 영상" />
          <Field label="프로젝트 목적" value="신규 서비스 홍보 및 지원사업 제출" />
          <Field label="마감일" value="2026.05.31" />
          <Field label="예산 범위" value="300만원" />
          <Field label="현재 참여 인원" value="5명" />
          <Field label="촬영 장소 수" value="2곳" />
          <Field label="후반작업 범위" value="편집, 사운드, 색보정" />
          <div className="upload-zone">
            <Upload size={20} />
            <strong>기존 기획안 업로드</strong>
            <span>PDF, DOCX, Markdown 또는 텍스트 붙여넣기</span>
          </div>
          <button className="primary-button full" onClick={onGenerate}>
            <Sparkles size={18} /> AI 운영안 생성하기
          </button>
        </div>

        <Panel title="AI가 생성할 항목" icon={Sparkles}>
          <ul className="check-list">
            <li>Global / Local Roadmap 초안</li>
            <li>필요 역할군과 멤버 배정 제안</li>
            <li>필수 문서, 권장 문서, 선택 문서</li>
            <li>초기 태스크와 마감일</li>
            <li>일정/예산 현실성 코멘트</li>
            <li>지원사업 제출 문서 필요 여부</li>
          </ul>
        </Panel>
      </section>
    </div>
  );
}

function OverviewScreen({ project, roleView }) {
  const roleMessage = {
    PM: '전체 진행률, 리스크, AI 제안 큐, 일정 충돌을 우선 표시합니다.',
    연출: '기획 문서, 콘티, 샷리스트, 촬영 준비를 우선 표시합니다.',
    촬영팀: '촬영 일정, 장비, 로케이션, 샷리스트를 우선 표시합니다.',
    미술팀: '소품, 세트, 의상, 촬영일별 준비물을 우선 표시합니다.',
    편집팀: '소스 전달, 편집 일정, 피드백, 납품 일정을 우선 표시합니다.',
  };

  return (
    <div className="screen-stack">
      <section className="project-header">
        <div>
          <p className="eyebrow">S07 · Project Room Dashboard</p>
          <h2>{project.name}</h2>
          <p>{roleView} 화면: {roleMessage[roleView]}</p>
        </div>
        <div className="status-strip">
          <Metric label="진행률" value={`${project.progress}%`} tone="ai" />
          <Metric label="D-Day" value={project.day} tone="warn" />
          <Metric label="리스크" value={`${project.risks}건`} tone="risk" />
          <Metric label="미확인" value={`${project.unread}건`} tone="warn" />
        </div>
      </section>

      <div className="dashboard-grid">
        <Panel title="오늘의 운영 상태" icon={LayoutDashboard}>
          <div className="status-cards">
            <MiniStatus title="막힌 지점" value="로케이션 미확정" tone="risk" />
            <MiniStatus title="다음 액션" value="콜시트 초안 승인" tone="ai" />
            <MiniStatus title="확인 필요" value="콜타임 변경 3명 미확인" tone="warn" />
          </div>
        </Panel>
        <AIProposalQueue />
        <NotificationList />
        <Panel title="주요 리스크" icon={AlertTriangle}>
          <RiskCard />
        </Panel>
      </div>
    </div>
  );
}

function RoadmapScreen() {
  return (
    <div className="screen-stack">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">S08 · Roadmap</p>
          <h2>전체 로드맵과 역할별 로드맵을 연결합니다.</h2>
          <p>문서 누락, 담당자 미지정, 일정 지연, 역할 간 의존성을 함께 보여줍니다.</p>
        </div>
      </section>
      <div className="roadmap-layout">
        <Panel title="Global Roadmap" icon={GitBranch}>
          {globalRoadmap.map((item) => <StatusLine key={item.title} {...item} />)}
        </Panel>
        <Panel title="Local Roadmap" icon={UsersRound}>
          <div className="local-roadmaps">
            {localRoadmaps.map((roadmap) => (
              <article className="local-roadmap" key={roadmap.role}>
                <strong>{roadmap.role}</strong>
                <div>{roadmap.steps.map((step) => <span key={step}>{step}</span>)}</div>
                <p><AlertTriangle size={14} /> {roadmap.blocked}</p>
              </article>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}

function DocsScreen() {
  return (
    <ResourceScreen
      eyebrow="S09 · Docs"
      title="문서 목록, 상태, 중요도, 의존성을 관리합니다."
      description="문서는 단순 파일이 아니라 프로젝트 진행 조건으로 취급됩니다."
      columns={['문서', '중요도', '상태', '담당', '리스크']}
      rows={docs.map((doc) => [doc.title, doc.importance, doc.status, doc.owner, doc.risk])}
      action="AI 보완"
    />
  );
}

function TasksScreen() {
  return (
    <ResourceScreen
      eyebrow="S11 · Tasks"
      title="태스크 배정과 상태를 운영 데이터로 추적합니다."
      description="내 태스크, 역할별 태스크, AI 제안 태스크를 같은 화면에서 확인합니다."
      columns={['태스크', '담당', '마감', '상태', '중요도']}
      rows={tasks.map((task) => [task.title, task.owner, task.due, task.status, task.priority])}
      action="상세"
    />
  );
}

function CalendarScreen() {
  return (
    <div className="screen-stack">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">S12 · Calendar</p>
          <h2>전체 일정과 역할별 일정을 함께 봅니다.</h2>
          <p>촬영일, 회의 일정, 제출 일정, 문서 마감이 프로젝트 상태와 연결됩니다.</p>
        </div>
      </section>
      <div className="calendar-grid">
        {['5/16 회의록 반영', '5/17 장비 픽업', '5/18 촬영 1일차', '5/19 소스 백업', '5/24 1차 편집', '5/31 최종 납품'].map((event, index) => (
          <article className="calendar-card" key={event}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{event}</strong>
            <p>{index < 3 ? '마감 임박' : '예정'}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function MeetingScreen() {
  return (
    <div className="screen-stack">
      <section className="split-workflow">
        <Panel title="S15 · 회의록 입력" icon={MessageSquareText}>
          <div className="meeting-note">
            <p>다음 주 촬영 전에 출연자 동선 확인. 미술팀 소품 리스트와 촬영팀 장비 리스트를 콜시트 기준으로 맞춰야 함. 로케이션 B는 주차 가능 여부 재확인 필요.</p>
          </div>
          <button className="primary-button full"><Sparkles size={18} /> 회의 결과 분석</button>
        </Panel>
        <Panel title="프로젝트 반영 제안" icon={Sparkles}>
          {aiProposals.slice(0, 2).map((proposal) => <ProposalCard key={proposal.title} proposal={proposal} />)}
        </Panel>
      </section>
    </div>
  );
}

function ProductionScreen() {
  return (
    <div className="screen-stack production-screen">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">S16 · Production Mode Lite</p>
          <h2>현장에서는 3초 안에 요청을 보냅니다.</h2>
          <p>요청 전송, 수신 확인, 처리중, 완료 상태가 프로젝트 기록으로 남습니다.</p>
        </div>
      </section>
      <div className="macro-grid">
        {macroButtons.map((label) => (
          <button className="macro-button" key={label}>
            <Megaphone size={24} />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <Panel title="최근 현장 요청" icon={RadioTower}>
        {notifications.map((item) => <NotificationRow key={item.title} item={item} />)}
      </Panel>
    </div>
  );
}

function AssistantScreen() {
  return (
    <div className="assistant-layout">
      <Panel title="S17 · AI Assistant" icon={Bot}>
        <div className="chat-window">
          <div className="chat-bubble user">촬영시트 초안 만들어줘.</div>
          <div className="chat-bubble ai">로케이션 정보와 촬영 일정은 확인했습니다. 출연진 콜타임 2건이 비어 있어요. 콜시트 초안과 누락 정보 요청 태스크를 제안할까요?</div>
        </div>
        <div className="chat-input">
          <Search size={18} />
          <span>프로젝트 문서, 태스크, 회의록에서 검색하거나 생성 요청</span>
          <Send size={18} />
        </div>
      </Panel>
      <Panel title="참조 데이터" icon={FileText}>
        <TagCloud tags={['로케이션 리스트', '촬영 일정', '장비 리스트', '회의록 05.16', '콜시트 초안']} />
      </Panel>
    </div>
  );
}

function SubmissionScreen() {
  return (
    <div className="screen-stack">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">S18 · Submission</p>
          <h2>프로젝트 룸의 데이터를 제출 문서로 전환합니다.</h2>
          <p>별도 문서 생성툴이 아니라 운영 과정의 결과물로 자연스럽게 생성됩니다.</p>
        </div>
        <button className="primary-button"><FileCheck2 size={18} /> AI 문서 생성하기</button>
      </section>
      <div className="submission-grid">
        <Panel title="어떤 문서를 만들까요?" icon={FileCheck2}>
          <TagCloud tags={['지원사업 신청서', '제작계획서', '예산안', '결과보고서', '피치덱', '팀 소개서']} />
        </Panel>
        <Panel title="프로젝트 데이터 사용 가능 항목" icon={Check}>
          <ul className="check-list">
            <li>프로젝트 개요 사용 가능</li>
            <li>제작 일정 사용 가능</li>
            <li>역할/팀 구성 사용 가능</li>
            <li>예산 초안 사용 가능</li>
            <li className="warn">로케이션 정보 일부 누락</li>
          </ul>
        </Panel>
      </div>
    </div>
  );
}

function ResourceScreen({ eyebrow, title, description, columns, rows, action }) {
  return (
    <div className="screen-stack">
      <section className="hero-panel">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </section>
      <div className="data-table">
        <div className="table-row table-head">
          {columns.map((column) => <span key={column}>{column}</span>)}
          <span>액션</span>
        </div>
        {rows.map((row) => (
          <div className="table-row" key={row[0]}>
            {row.map((cell) => <span key={cell} className={String(cell).includes('막힘') || String(cell).includes('긴급') ? 'danger-text' : ''}>{cell}</span>)}
            <button className="ghost-button">{action}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Panel({ title, icon: Icon, children }) {
  return (
    <section className="panel">
      <header className="panel-head">
        <div>
          <Icon size={18} />
          <h3>{title}</h3>
        </div>
      </header>
      {children}
    </section>
  );
}

function TwoColumn({ left, right }) {
  return <div className="two-column"><div>{left}</div><div>{right}</div></div>;
}

function ProgressBar({ value }) {
  return <div className="progress"><span style={{ width: `${value}%` }} /></div>;
}

function Metric({ label, value, tone }) {
  return <div className={`metric ${tone || ''}`}><span>{label}</span><strong>{value}</strong></div>;
}

function Field({ label, value }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input value={value} readOnly />
    </label>
  );
}

function TagCloud({ tags }) {
  return <div className="tag-cloud">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>;
}

function StatusLine({ title, status, progress }) {
  return (
    <div className="status-line">
      <div>
        <strong>{title}</strong>
        <span>{status}</span>
      </div>
      <ProgressBar value={progress} />
    </div>
  );
}

function AIProposalQueue({ compact = false }) {
  return (
    <Panel title="AI 제안 대기" icon={Sparkles}>
      <div className={compact ? 'proposal-list compact' : 'proposal-list'}>
        {aiProposals.map((proposal) => <ProposalCard key={proposal.title} proposal={proposal} />)}
      </div>
    </Panel>
  );
}

function ProposalCard({ proposal }) {
  return (
    <article className="proposal-card">
      <span>{proposal.type}</span>
      <h4>{proposal.title}</h4>
      <p>{proposal.reason}</p>
      <div className="proposal-meta">
        <small>담당: {proposal.owner}</small>
        <small>영향도: {proposal.impact}</small>
      </div>
      <div className="proposal-actions">
        <button>승인</button>
        <button>수정</button>
        <button>보류</button>
      </div>
    </article>
  );
}

function NotificationList() {
  return (
    <Panel title="최근 알림 / 요청" icon={Bell}>
      {notifications.map((item) => <NotificationRow key={item.title} item={item} />)}
    </Panel>
  );
}

function NotificationRow({ item }) {
  return (
    <article className="notification-row">
      <div>
        <strong>{item.title}</strong>
        <span>대상: {item.target} · 관련: {item.linked}</span>
      </div>
      <em>{item.status}</em>
    </article>
  );
}

function RiskCard() {
  return (
    <article className="risk-card">
      <span>지연 위험</span>
      <h4>로케이션 미확정</h4>
      <p>영향: 콜시트 작성 지연 가능. 추천 대응: 장소 확정 마감일을 D-3로 설정하고 제작부 담당자를 지정합니다.</p>
      <button className="ghost-button">대응안 보기</button>
    </article>
  );
}

function MiniStatus({ title, value, tone }) {
  return (
    <article className={`mini-status ${tone}`}>
      <span>{title}</span>
      <strong>{value}</strong>
    </article>
  );
}

export default App;
