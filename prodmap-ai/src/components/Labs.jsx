import React, { useState } from 'react';
import { FileSearch, Megaphone, Wand2, Rocket, X } from 'lucide-react';

const labsData = [
  {
    id: 'memory',
    icon: FileSearch,
    title: '대화형 문서 검색 챗봇',
    subtitle: 'PRODUCTION MEMORY',
    shortDesc: '작성된 문서를 대화형 채팅으로 검색합니다.',
    modalContent: {
      headline: <>흩어진 프로젝트 문서를<br/>대화형으로 한 번에 검색하세요.</>,
      description: <>기획안, 예산안, 콜시트, 피드백 등 프로젝트 도중 생성된 수많은 문서들을 일일이 폴더에서 찾을 필요가 없습니다.<br/><br/>RAG(Retrieval-Augmented Generation) 기술을 기반으로, "내일 강남역 촬영 콜타임이 언제야?" 혹은 "저번 A프로젝트 예산안 찾아줘"라고 채팅하듯 물어보면 AI가 정확한 문서와 내용을 즉시 찾아줍니다.</>,
      features: [
        '프로젝트별 문서 자동 인덱싱 (RAG)',
        '자연어 질의응답을 통한 문서 내용 요약',
        '필요한 문서 원본 즉시 다운로드 링크 제공'
      ]
    }
  },
  {
    id: 'mode',
    icon: Megaphone,
    title: '현장 부서별 호출 시스템',
    subtitle: 'PRODUCTION MODE',
    shortDesc: '부서별 콜 버튼으로 현장 알림을 보냅니다.',
    modalContent: {
      headline: <>복잡한 촬영 현장,<br/>터치 한 번으로 소통을 통합하세요.</>,
      description: <>현장에서 발생하는 동시다발적인 커뮤니케이션을 간소화합니다.<br/><br/>조명팀, 촬영팀, 연출팀, 출연자 등 부서별로 사전 세팅된 "콜 버튼(Call Button)"을 누르기만 하면, 해당 부서 전체에 즉각적으로 푸시 알림이 전송됩니다. 무전기나 단체 카톡방의 한계를 넘는 현장 지휘 시스템입니다.</>,
      features: [
        '역할별/부서별 맞춤형 콜 버튼 UI 제공',
        '긴급도에 따른 푸시 알림 차등 전송',
        '콜 버튼 사용 기록 로깅 (현장 타임라인 자동 생성)'
      ]
    }
  },
  {
    id: 'assistant',
    icon: Wand2,
    title: '후반작업 AI 어시스턴트',
    subtitle: 'POST-PRODUCTION',
    shortDesc: '산출물을 점검하고 AI 작업 방식을 제안합니다.',
    modalContent: {
      headline: <>촬영 후 아쉬운 부분,<br/>AI가 후반 작업 솔루션을 제안합니다.</>,
      description: <>촬영이 끝난 후 부족한 컷이나 음향 마스킹 등 보완해야 할 부분들을 분석합니다.<br/><br/>기존에는 재촬영을 고려해야 했던 문제들을, 최신 생성 AI(GenAI) 툴과 편집 기법을 활용하여 후반 작업(Post-production)에서 어떻게 보완할 수 있는지 구체적인 방법론을 제안합니다.</>,
      features: [
        '누락된 에셋에 대한 AI 생성 툴(비디오/오디오) 추천',
        '편집 및 CG 보완을 위한 워크플로우 가이드',
        '에셋 관리 및 버전 컨트롤 지원'
      ]
    }
  },
  {
    id: 'funding',
    icon: Rocket,
    title: '지원사업 문서 자동화',
    subtitle: 'FUNDING KIT',
    shortDesc: '홍보 팜플렛과 지원사업 문서를 자동 구성합니다.',
    modalContent: {
      headline: <>창작물에 날개를 달아줄 지원사업 문서,<br/>1초 만에 완성하세요.</>,
      description: <>제작이 완료되거나 기획 단계에 있는 프로젝트 데이터를 활용하여, 각종 정부 지원사업이나 펀딩 피칭(Pitching)에 필요한 문서를 자동으로 변환·생성합니다.<br/><br/>번거로운 폼 맞추기 작업 없이, 기획 의도와 예산안을 바탕으로 설득력 있는 기획안 초안을 제공합니다.</>,
      features: [
        '주요 지원사업 양식 맞춤형 문서 변환',
        '프로젝트 데이터를 활용한 피칭 덱(Pitch Deck) 초안 생성',
        '포트폴리오 및 홍보용 텍스트 자동 요약'
      ]
    }
  },
];

export default function Labs() {
  const [selectedLab, setSelectedLab] = useState(null);

  const openModal = (lab) => {
    setSelectedLab(lab);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedLab(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="labs" className="section">
      <div className="container blueprint-container">
        <div className="section-head">
          <span className="section-label">PIRYODUCTION LABS</span>
          <h2>로드맵 그 이후, 제작 경험의 확장</h2>
          <p>
            초기 기획과 로드맵 구축 완료 후, 현장 제어와 후반 작업,<br />
            나아가 데이터 아카이빙까지 지원하는 확장 기능을 연구합니다.
          </p>
        </div>

        <div className="mvp-grid">
          {labsData.map((item) => (
            <article 
              key={item.id} 
              className="feature-card clickable"
              onClick={() => openModal(item)}
            >
              <div className="tech-callout">LAB_0{labsData.indexOf(item) + 1}</div>
              <div className="icon-box">
                <item.icon size={24} />
              </div>
              <div className="deco-font" style={{marginBottom: '10px'}}>{item.subtitle}</div>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedLab && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={20} />
            </button>
            
            <div className="modal-header">
              <div className="icon-box modal-icon">
                <selectedLab.icon size={28} />
              </div>
              <div>
                <div className="deco-font" style={{marginBottom: '8px'}}>{selectedLab.subtitle}</div>
                <h2>{selectedLab.title}</h2>
              </div>
            </div>
            
            <div className="modal-body">
              <h3 className="modal-headline">{selectedLab.modalContent.headline}</h3>
              <p className="modal-desc">{selectedLab.modalContent.description}</p>
              
              <div className="modal-features">
                <h4>주요 기능</h4>
                <ul>
                  {selectedLab.modalContent.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="btn primary" onClick={closeModal}>확인</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
