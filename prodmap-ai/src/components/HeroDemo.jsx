import { useState } from 'react';
import { ArrowRight, Sparkles, Video, Calendar, Users, Briefcase, MapPin } from 'lucide-react';

const roadmapItems = [
  {
    label: '브리프 정리',
    status: '완료',
    detail: '목적, 콘텐츠 유형, 예산, 인원, 제약사항을 제작 조건으로 구조화',
    active: true,
  },
  {
    label: 'AI 운영안 생성',
    status: '승인 대기',
    detail: 'Global Roadmap, 역할별 Local Roadmap, 필수 문서와 초기 태스크 제안',
    active: true,
  },
  {
    label: '프로젝트 룸 개설',
    status: '예정',
    detail: '로드맵, 문서, 태스크, 일정, 알림을 하나의 운영판으로 연결',
    active: false,
  },
  {
    label: '현장/회의 반영',
    status: '예정',
    detail: '회의 액션 아이템과 촬영 현장 요청을 상태 추적 가능한 업무로 전환',
    active: false,
  },
];

export default function HeroDemo() {
  const [demoState, setDemoState] = useState('input');
  const [formData, setFormData] = useState({
    type: '브랜디드 인터뷰',
    budget: '300만원',
    team: '5명',
    duration: '14일',
    locations: '2곳',
  });

  const handleGenerate = () => {
    setDemoState('analyzing');
    setTimeout(() => {
      setDemoState('result');
    }, 900);
  };

  return (
    <section className="hero" id="hero">
      <div className="container blueprint-container">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="tech-tag">
              <Sparkles size={14} color="var(--accent-cyan)" />
              AI 프로덕션 컨트롤룸 <span>MVP LOOP</span>
            </div>

            <h1>
              <span>기획안 하나로</span>
              <span>바로 움직이는 제작 운영판을 만듭니다.</span>
            </h1>

            <p className="hero-desc">
              프로젝트 목적, 예산, 인원, 기간만 입력하면 필요덕션이 <strong>로드맵, 역할,
              문서, 태스크, 일정, 리스크</strong>를 연결한 운영 초안을 제안합니다.
              AI가 결정하는 것이 아니라, 팀이 검토하고 승인하는 방식으로 시작합니다.
            </p>
          </div>

          <div className="preview-card">
            <div className="tech-callout">
              {demoState === 'input' ? 'BRIEF INPUT' : 'ROOM PREVIEW'}
            </div>

            {demoState === 'input' && (
              <div className="demo-input-form fade-in">
                <div className="preview-top compact">
                  <div>
                    <p>Step 1</p>
                    <h3>프로젝트 브리프 입력</h3>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="input-group">
                    <label><Video size={14} /> 콘텐츠 유형</label>
                    <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                      <option>브랜디드 인터뷰</option>
                      <option>뮤직비디오</option>
                      <option>숏폼 캠페인</option>
                      <option>독립 단편영화</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label><Briefcase size={14} /> 예산 범위</label>
                    <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}>
                      <option>300만원</option>
                      <option>1,000만원</option>
                      <option>3,000만원 이상</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label><Users size={14} /> 현재 인원</label>
                    <select value={formData.team} onChange={(e) => setFormData({ ...formData, team: e.target.value })}>
                      <option>5명</option>
                      <option>10명</option>
                      <option>15명 이상</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label><Calendar size={14} /> 예상 기간</label>
                    <select value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })}>
                      <option>14일</option>
                      <option>1개월</option>
                      <option>3개월 이상</option>
                    </select>
                  </div>
                  <div className="input-group form-wide">
                    <label><MapPin size={14} /> 촬영 장소 수</label>
                    <select value={formData.locations} onChange={(e) => setFormData({ ...formData, locations: e.target.value })}>
                      <option>2곳</option>
                      <option>4곳</option>
                      <option>미정</option>
                    </select>
                  </div>
                </div>

                <button className="btn primary full-width" onClick={handleGenerate}>
                  AI 운영안 생성 <ArrowRight size={18} />
                </button>
              </div>
            )}

            {demoState === 'analyzing' && (
              <div className="analyzing-state fade-in">
                <div className="spinner" />
                <p>로드맵, 문서, 태스크, 리스크를 연결하고 있습니다...</p>
              </div>
            )}

            {demoState === 'result' && (
              <div className="demo-result fade-in">
                <div className="preview-top">
                  <div>
                    <p>생성된 프로젝트 룸</p>
                    <h3>{formData.type} 제작본부</h3>
                  </div>
                  <span className="analysis-badge">승인 필요</span>
                </div>

                <div className="preview-stats">
                  <div>
                    <small>예산</small>
                    <strong>{formData.budget}</strong>
                  </div>
                  <div>
                    <small>팀</small>
                    <strong>{formData.team}</strong>
                  </div>
                  <div>
                    <small>기간</small>
                    <strong>{formData.duration}</strong>
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

                <button className="btn secondary full-width compact-btn" onClick={() => setDemoState('input')}>
                  브리프 다시 입력
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
