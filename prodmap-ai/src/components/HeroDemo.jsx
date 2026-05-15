import React, { useState } from 'react';
import { ArrowRight, Sparkles, Film, Video, Calendar, Users, Briefcase } from 'lucide-react';

const roadmapItems = [
  { label: '기획 확정', status: '완료', detail: '콘셉트, 타깃, 형식과 납품 형태 정리', active: true },
  { label: '예산 구성', status: '진행중', detail: '인건비, 장비비, 장소비, 후반작업비 가예산 산출', active: false },
  { label: '촬영 준비', status: '대기', detail: '콜시트, 장비 체크리스트, 장소 체크리스트 생성 예정', active: false },
  { label: '후반 작업', status: '대기', detail: '편집 일정, 피드백 시트, 납품 체크리스트 연결', active: false },
];

export default function HeroDemo() {
  const [demoState, setDemoState] = useState('input'); // 'input' | 'analyzing' | 'result'
  const [formData, setFormData] = useState({ type: '브랜드 인터뷰', budget: '300만', team: '5명', duration: '14일' });

  const handleGenerate = () => {
    setDemoState('analyzing');
    setTimeout(() => {
      setDemoState('result');
    }, 1500);
  };

  return (
    <section className="hero" id="hero">

      <div className="container blueprint-container">
        <div className="hero-grid">
          {/* Left Copy Area */}
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
              프로젝트의 <strong>목적, 예산, 인원, 기간</strong>만 입력하세요. <br />
              <span className="text-highlight">맞춤형 제작 로드맵</span>을 자동으로 설계하고, <br />
              실행에 필요한 업무와 문서 파이프라인을 구축해 드립니다.
            </p>
          </div>

          {/* Right Interactive Demo Area */}
          <div className="preview-card" style={{ transition: 'all 0.5s ease' }}>
            <div className="tech-callout">
              {demoState === 'input' ? 'DEMO INPUT' : 'RESULT'}
            </div>

            {demoState === 'input' && (
              <div className="demo-input-form fade-in">
                <div className="preview-top" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>프로젝트 정보를 입력하세요</h3>
                </div>
                
                <div className="form-grid">
                  <div className="input-group">
                    <label><Video size={14} /> 영상 종류</label>
                    <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                      <option>브랜드 인터뷰</option>
                      <option>유튜브 예능</option>
                      <option>TV CF</option>
                      <option>숏폼 콘텐츠</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label><Briefcase size={14} /> 예산</label>
                    <select value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
                      <option>300만</option>
                      <option>1000만</option>
                      <option>3000만 이상</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label><Users size={14} /> 인원</label>
                    <select value={formData.team} onChange={e => setFormData({...formData, team: e.target.value})}>
                      <option>5명</option>
                      <option>10명</option>
                      <option>15명 이상</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label><Calendar size={14} /> 기간</label>
                    <select value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})}>
                      <option>14일</option>
                      <option>1개월</option>
                      <option>3개월 이상</option>
                    </select>
                  </div>
                </div>

                <button className="btn primary" style={{ width: '100%', marginTop: '24px' }} onClick={handleGenerate}>
                  로드맵 무료 생성 <ArrowRight size={18} />
                </button>
              </div>
            )}

            {demoState === 'analyzing' && (
              <div className="analyzing-state fade-in">
                <div className="spinner"></div>
                <p>AI가 제작 로드맵을 설계하고 있습니다...</p>
              </div>
            )}

            {demoState === 'result' && (
              <div className="demo-result fade-in">
                <div className="preview-top">
                  <div>
                    <p>생성된 프로젝트</p>
                    <h3>{formData.type} 영상</h3>
                  </div>
                  <span className="analysis-badge">설계 완료</span>
                </div>

                <div className="preview-stats">
                  <div>
                    <small>예산</small>
                    <strong>{formData.budget}</strong>
                  </div>
                  <div>
                    <small>인원</small>
                    <strong>{formData.team}</strong>
                  </div>
                  <div>
                    <small>기간</small>
                    <strong>{formData.duration}</strong>
                  </div>
                </div>

                <div className="roadmap-list" style={{ marginTop: '24px' }}>
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

                <button className="btn secondary" style={{ width: '100%', marginTop: '16px', fontSize: '13px', minHeight: '40px' }} onClick={() => setDemoState('input')}>
                  다시 입력하기
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
