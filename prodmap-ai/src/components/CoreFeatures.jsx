import { useState } from 'react';
import { ChevronDown, FileInput, Wand2, LayoutDashboard, ClipboardList, RadioTower, FileCheck2 } from 'lucide-react';

const flowSteps = [
  {
    icon: FileInput,
    title: '1. 프로젝트 브리프 입력',
    desc: (
      <>
        목적, 콘텐츠 유형, 예산, 기간, 팀 규모, 촬영일, 장소 수, 제출 여부를 짧은 질문형 입력으로 받습니다.
        사용자는 빈 페이지에서 시작하지 않고 <strong>제작 조건</strong>만 먼저 정리합니다.
      </>
    ),
  },
  {
    icon: Wand2,
    title: '2. AI 제작 운영안 생성',
    desc: (
      <>
        AI가 Global Roadmap, 역할별 Local Roadmap, 필수 문서, 초기 태스크, 주요 일정, 리스크를 제안합니다.
        결과는 자동 확정이 아니라 <span className="text-highlight">검토와 승인 대상</span>입니다.
      </>
    ),
  },
  {
    icon: LayoutDashboard,
    title: '3. 프로젝트 룸 생성',
    desc: (
      <>
        확정된 운영안은 로드맵, 문서, 태스크, 일정, 멤버, 알림이 연결된 프로젝트 룸으로 전환됩니다.
        프로젝트 룸은 해당 영상의 <strong>운영 본부</strong>가 됩니다.
      </>
    ),
  },
  {
    icon: ClipboardList,
    title: '4. 회의 결과와 태스크 반영',
    desc: (
      <>
        회의록에서 결정사항, 액션 아이템, 담당자, 마감일, 리스크를 추출해 프로젝트 반영안을 만듭니다.
        PM은 새 태스크 생성, 일정 변경, 알림 발송을 승인할 수 있습니다.
      </>
    ),
  },
  {
    icon: RadioTower,
    title: '5. 프로덕션 모드 Lite',
    desc: (
      <>
        촬영 현장에서는 큰 버튼과 매크로 액션으로 공지, 호출, 확인 요청, 긴급 이슈를 처리합니다.
        요청은 <strong>전송, 수신 확인, 처리 중, 완료</strong> 상태로 남습니다.
      </>
    ),
  },
  {
    icon: FileCheck2,
    title: '6. 제출 문서 생성',
    desc: (
      <>
        프로젝트 룸에 쌓인 로드맵, 예산, 역할, 일정, 결과 데이터를 바탕으로 제작계획서, 예산안,
        피치덱 초안, 결과보고서 같은 외부 제출 문서를 생성합니다.
      </>
    ),
  },
];

export default function CoreFeatures() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="product" className="section">
      <div className="container blueprint-container">
        <div className="section-head">
          <span className="section-label">CLOSED OPERATION LOOP</span>
          <h2>브리프에서 제출 문서까지, 하나의 닫힌 운영 루프</h2>
          <p>
            필요덕션 MVP는 거대한 협업툴이 아니라 하나의 영상 프로젝트가 실제로 굴러가는
            최소 운영 흐름에 집중합니다.
          </p>
        </div>

        <div className="accordion-flow">
          {flowSteps.map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`accordion-item ${isOpen ? 'open' : ''}`} key={step.title}>
                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                  <div className="accordion-title-group">
                    <div className="icon-box-small">
                      <step.icon size={20} />
                    </div>
                    <h3>{step.title}</h3>
                  </div>
                  <ChevronDown size={20} className={`accordion-chevron ${isOpen ? 'rotate' : ''}`} />
                </div>

                <div className="accordion-content">
                  <div className="accordion-inner">
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
