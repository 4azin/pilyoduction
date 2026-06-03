import { useState } from 'react';
import { FileText, CheckCircle, CircleDashed } from 'lucide-react';

const roadmapPhases = ['기획', '프리프로덕션', '촬영', '후반/납품'];

const documentsMap = {
  기획: [
    { name: '제작계획서', desc: '프로젝트 개요, 목적, 제작 방향, 핵심 메시지를 정리합니다.', status: '필수 문서' },
    { name: '예산안', desc: '인건비, 장비, 장소, 후반작업 비용을 항목별로 구성합니다.', status: '필수 문서' },
    { name: '지원사업 제출 초안', desc: '제작계획서 기반으로 외부 제출용 서술 구조를 만듭니다.', status: '권장 문서' },
  ],
  프리프로덕션: [
    { name: '역할/담당표', desc: '한 사람이 여러 역할을 맡는 소규모 팀 구조까지 반영합니다.', status: '필수 문서' },
    { name: '로케이션 리스트', desc: '장소 정보, 주소, 담당자, 촬영 가능 여부를 관리합니다.', status: '필수 문서' },
    { name: '장비 리스트', desc: '촬영, 조명, 사운드 장비와 렌탈 리스크를 연결합니다.', status: '권장 문서' },
  ],
  촬영: [
    { name: '콜시트', desc: '촬영일 기준 장소, 콜타임, 출연진, 준비물을 정리합니다.', status: '필수 문서' },
    { name: '현장 요청 로그', desc: '공지, 호출, 확인 요청, 긴급 이슈의 처리 상태를 기록합니다.', status: '필수 문서' },
    { name: '촬영 체크리스트', desc: '촬영팀, 미술팀, 사운드팀의 준비 상태를 확인합니다.', status: '권장 문서' },
  ],
  '후반/납품': [
    { name: '편집 일정표', desc: '소스 수령, 1차 편집, 피드백 반영, 최종 납품 일정을 연결합니다.', status: '필수 문서' },
    { name: '피드백 시트', desc: '클라이언트와 내부 피드백을 태스크와 납품 일정에 반영합니다.', status: '권장 문서' },
    { name: '결과보고서', desc: '프로젝트 운영 데이터와 산출물을 외부 보고 문서로 정리합니다.', status: '필수 문서' },
  ],
};

export default function DocGeneration() {
  const [activeTab, setActiveTab] = useState('촬영');
  const visibleDocs = documentsMap[activeTab] || [];

  return (
    <section id="pipeline" className="section section-band">
      <div className="container blueprint-container flush-section">
        <div className="section-head">
          <span className="section-label">DOCUMENT PIPELINE</span>
          <h2>문서는 파일이 아니라 프로젝트 진행 조건입니다</h2>
          <p>
            로드맵 단계마다 필요한 문서를 자동으로 제안하고, 누락된 문서는 리스크와 태스크로 이어지게 설계합니다.
          </p>
        </div>

        <div className="doc-interaction-area">
          <div className="doc-tabs">
            {roadmapPhases.map((phase) => (
              <button
                key={phase}
                className={`doc-tab ${activeTab === phase ? 'active' : ''}`}
                onClick={() => setActiveTab(phase)}
              >
                {phase}
              </button>
            ))}
          </div>

          <div className="doc-cards-grid">
            {visibleDocs.map((doc, index) => (
              <div className="doc-card cascade-in" style={{ animationDelay: `${index * 120}ms` }} key={doc.name}>
                <div className="doc-card-top">
                  <div className="doc-icon"><FileText size={20} /></div>
                  <span className={`doc-status ${doc.status === '필수 문서' ? 'done' : 'suggested'}`}>
                    {doc.status === '필수 문서' ? <CheckCircle size={12} /> : <CircleDashed size={12} />}
                    {doc.status}
                  </span>
                </div>
                <h4>{doc.name}</h4>
                <p>{doc.desc}</p>
                <button className="btn secondary full-width compact-btn">
                  문서 초안 보기
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
