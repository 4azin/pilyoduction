import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle } from 'lucide-react';

const roadmapPhases = ['기획 확정', '예산 구성', '촬영 준비', '후반 작업'];

const documentsMap = {
  '기획 확정': [
    { name: '기획서', desc: '프로젝트의 전체 콘셉트와 레퍼런스를 정리합니다.', status: '생성 완료' },
    { name: '스토리보드(콘티)', desc: '장면별 앵글과 나레이션을 구성합니다.', status: '추천 문서' },
  ],
  '예산 구성': [
    { name: '가예산안', desc: '항목별 예상 지출 내역을 정리합니다.', status: '생성 완료' },
    { name: '인력 구성표', desc: '필요한 스태프와 출연진 목록을 관리합니다.', status: '생성 완료' },
  ],
  '촬영 준비': [
    { name: '콜시트 (Call Sheet)', desc: '촬영 당일 집합 시간, 장소, 역할을 정리합니다.', status: '생성 완료' },
    { name: '촬영 일정표', desc: '시간대별 촬영 샷 리스트를 관리합니다.', status: '생성 완료' },
    { name: '장비 체크리스트', desc: '카메라, 조명, 녹음 장비를 점검합니다.', status: '추천 문서' },
  ],
  '후반 작업': [
    { name: '편집 일정표', desc: '가편집부터 최종 납품까지의 일정을 관리합니다.', status: '생성 완료' },
    { name: '피드백 시트', desc: '클라이언트 및 내부 수정 요청사항을 취합합니다.', status: '생성 완료' },
  ]
};

export default function DocGeneration() {
  const [activeTab, setActiveTab] = useState('촬영 준비');
  const [visibleDocs, setVisibleDocs] = useState([]);
  
  useEffect(() => {
    // When tab changes, reset and trigger cascade animation
    setVisibleDocs([]);
    const docsForTab = documentsMap[activeTab] || [];
    
    docsForTab.forEach((doc, idx) => {
      setTimeout(() => {
        setVisibleDocs(prev => [...prev, doc]);
      }, 150 * (idx + 1)); // Staggered appearance
    });
  }, [activeTab]);

  return (
    <section id="pipeline" className="section" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container blueprint-container" style={{ border: 'none', padding: '0 20px' }}>
        <div className="section-head">
          <span className="section-label">DOCUMENT PIPELINE</span>
          <h2>로드맵에 맞는 문서가 자동으로 생성됩니다</h2>
          <p>
            고정된 템플릿을 고르는 것이 아닙니다.<br />사용자가 <strong>확정한 제작 로드맵 단계</strong>에 따라 지금 당장 필요한 문서 세트가 <br />
            <span className="text-highlight">자동으로 추천되고 구성</span>됩니다.
          </p>
        </div>

        <div className="doc-interaction-area">
          {/* Tabs */}
          <div className="doc-tabs">
            {roadmapPhases.map(phase => (
              <button 
                key={phase} 
                className={`doc-tab ${activeTab === phase ? 'active' : ''}`}
                onClick={() => setActiveTab(phase)}
              >
                {phase}
              </button>
            ))}
          </div>

          {/* Document Cards Area */}
          <div className="doc-cards-grid">
            {visibleDocs.map((doc, idx) => (
              <div className="doc-card cascade-in" key={idx}>
                <div className="doc-card-top">
                  <div className="doc-icon"><FileText size={20} /></div>
                  <span className={`doc-status ${doc.status === '생성 완료' ? 'done' : 'suggested'}`}>
                    {doc.status === '생성 완료' && <CheckCircle size={12} />}
                    {doc.status}
                  </span>
                </div>
                <h4>{doc.name}</h4>
                <p>{doc.desc}</p>
                <button className="btn secondary" style={{ width: '100%', minHeight: '36px', fontSize: '12px', marginTop: '16px' }}>
                  미리보기
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
