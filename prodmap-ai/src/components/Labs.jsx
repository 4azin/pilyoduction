import { useEffect, useState } from 'react';
import { Bell, Bot, GitBranch, Megaphone, X } from 'lucide-react';

const labsData = [
  {
    id: 'roadmap',
    icon: GitBranch,
    title: 'Global / Local Roadmap',
    subtitle: 'PROJECT ROOM',
    modalContent: {
      headline: <>전체 흐름과 역할별 작업 흐름을 함께 봅니다.</>,
      description: (
        <>
          Global Roadmap은 기획, 프리프로덕션, 촬영, 후반, 납품, 제출을 보여주고,
          Local Roadmap은 연출, 제작, 촬영, 미술, 편집 같은 역할별 준비 상태를 보여줍니다.
          로케이션 리스트 지연이 콜시트와 촬영 준비 리스크로 이어지는 관계까지 표시합니다.
        </>
      ),
      features: ['전체 단계와 역할별 단계 연결', '문서 누락과 담당자 미지정 표시', '마감 임박과 의존성 충돌 감지'],
    },
  },
  {
    id: 'notifications',
    icon: Bell,
    title: '상태 기반 알림',
    subtitle: 'STATUS SIGNAL',
    modalContent: {
      headline: <>알림은 메시지가 아니라 업무 상태입니다.</>,
      description: (
        <>
          필요덕션의 알림은 공지로 흘러가고 끝나는 메시지가 아닙니다. 담당자, 관련 문서,
          관련 일정, 확인 여부, 처리 상태를 함께 남겨 프로젝트 상태에 반영합니다.
        </>
      ),
      features: ['확인 대기, 확인 완료, 처리 중, 완료, 보류', '관련 문서와 일정 연결', '미확인 알림을 프로젝트 리스크로 반영'],
    },
  },
  {
    id: 'production',
    icon: Megaphone,
    title: '프로덕션 모드 Lite',
    subtitle: 'FIELD COMMAND',
    modalContent: {
      headline: <>촬영 현장에서는 큰 버튼만 누르면 됩니다.</>,
      description: (
        <>
          촬영팀 호출, 미술팀 확인 요청, 사운드 체크, 장소 이동 공지, 긴급 이슈 등록 같은
          현장 액션을 매크로 버튼으로 처리합니다. 요청은 수신 확인과 처리 상태로 남습니다.
        </>
      ),
      features: ['부서별 매크로 액션', '요청 전송에서 완료까지 상태 추적', '현장 이슈 로그 자동 축적'],
    },
  },
  {
    id: 'assistant',
    icon: Bot,
    title: 'AI 프로젝트 어시스턴트',
    subtitle: 'PROJECT MEMORY',
    modalContent: {
      headline: <>단순 챗봇이 아니라 프로젝트 메모리로 작동합니다.</>,
      description: (
        <>
          AI 어시스턴트는 로케이션, 촬영 일정, 출연진, 장비 리스트, 회의록을 함께 확인하고
          누락 정보를 짚어줍니다. 촬영시트 초안, 태스크 제안, 리스크 요약, 제출 문서 초안을 생성합니다.
        </>
      ),
      features: ['프로젝트 내부 정보 검색', '누락 정보 안내', '문서와 태스크 생성 보조'],
    },
  },
];

export default function Labs() {
  const [selectedLab, setSelectedLab] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedLab ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedLab]);

  const openModal = (lab) => {
    setSelectedLab(lab);
  };

  const closeModal = () => {
    setSelectedLab(null);
  };

  return (
    <section id="labs" className="section">
      <div className="container blueprint-container">
        <div className="section-head">
          <span className="section-label">PROJECT ROOM MODULES</span>
          <h2>팀이 계속 켜두는 제작 본부</h2>
          <p>
            MVP의 핵심 화면은 홈, 프로젝트 룸, 로드맵, 문서, 태스크, 일정, 알림, 회의 모드,
            프로덕션 모드, AI 어시스턴트로 구성됩니다.
          </p>
        </div>

        <div className="mvp-grid">
          {labsData.map((item, index) => (
            <article key={item.id} className="feature-card clickable" onClick={() => openModal(item)}>
              <div className="tech-callout">ROOM_0{index + 1}</div>
              <div className="icon-box">
                <item.icon size={24} />
              </div>
              <div className="deco-font feature-kicker">{item.subtitle}</div>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>

      {selectedLab && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="닫기">
              <X size={20} />
            </button>

            <div className="modal-header">
              <div className="icon-box modal-icon">
                <selectedLab.icon size={28} />
              </div>
              <div>
                <div className="deco-font modal-kicker">{selectedLab.subtitle}</div>
                <h2>{selectedLab.title}</h2>
              </div>
            </div>

            <div className="modal-body">
              <h3 className="modal-headline">{selectedLab.modalContent.headline}</h3>
              <p className="modal-desc">{selectedLab.modalContent.description}</p>

              <div className="modal-features">
                <h4>주요 기능</h4>
                <ul>
                  {selectedLab.modalContent.features.map((feat) => (
                    <li key={feat}>{feat}</li>
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
