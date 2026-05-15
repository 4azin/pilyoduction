import React, { useState } from 'react';
import { ChevronDown, Edit3, ClipboardList, UsersRound, Bell, PenTool } from 'lucide-react';

const flowSteps = [
  {
    icon: PenTool,
    title: '1. AI 제작 로드맵 가안 제안',
    desc: <>목적, 예산, 인원, 기간을 입력하면 프로젝트 조건에 맞는 <strong>제작 흐름 초안</strong>을 빠르게 제안합니다.<br />이것은 <span className="text-highlight">확정된 계획이 아니라 시작을 위한 가이드</span>입니다.</>,
  },
  {
    icon: Edit3,
    title: '2. 로드맵 커스터마이징 (개인화)',
    desc: <>AI가 만든 초안을 팀의 제작 방식에 맞게 <strong>직접 수정</strong>합니다.<br />불필요한 단계를 삭제하거나 순서를 변경하여 <span className="text-highlight">우리 팀만의 확정된 플랜</span>을 만듭니다.</>,
  },
  {
    icon: ClipboardList,
    title: '3. 로드맵 기반 문서 생성',
    desc: <>고정 템플릿이 아니라, 사용자가 확정한 로드맵에 맞춰<br /><strong>기획서, 콜시트 등 꼭 필요한 문서 세트</strong>를 <span className="text-highlight">자동 구성</span>합니다.</>,
  },
  {
    icon: UsersRound,
    title: '4. 업무와 담당자 할당',
    desc: <>각 단계별로 누가, 무엇을, 언제까지 해야 하는지<br />실행 단위의 <strong>태스크(Task)</strong>로 정리하고 <span className="text-highlight">담당자를 배정</span>합니다.</>,
  },
  {
    icon: Bell,
    title: '5. 자동 일정 알림',
    desc: <>촬영 준비, 콜시트 공유, 피드백 마감, 납품 일정 등을 놓치지 않도록<br /><strong>적절한 시점</strong>에 <span className="text-highlight">알림을 전송</span>합니다.</>,
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
          <span className="section-label">PRODUCT SYSTEM</span>
          <h2>AI는 초안을 주고, 확정은 당신이 합니다</h2>
          <p>
            AI가 일방적으로 계획을 강요하지 않습니다. 필요덕션은 가안을 제시하고, <br />
            제작자가 이를 자유롭게 수정하여 개인화된 제작 플랜을 완성하도록 돕습니다.
          </p>
        </div>

        <div className="accordion-flow">
          {flowSteps.map((step, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`accordion-item ${isOpen ? 'open' : ''}`} key={step.title}>
                <div 
                  className="accordion-header" 
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="accordion-title-group">
                    <div className="icon-box-small">
                      <step.icon size={20} />
                    </div>
                    <h3>{step.title}</h3>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`accordion-chevron ${isOpen ? 'rotate' : ''}`} 
                  />
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
