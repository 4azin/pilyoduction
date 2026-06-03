import { Cpu } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <a href="/" className="brand">
          <div className="brand-icon">
            <Cpu size={20} />
          </div>
          <span>필요덕션</span>
        </a>

        <nav className="nav-links">
          <a href="#product">운영 루프</a>
          <a href="#pipeline">문서 파이프라인</a>
          <a href="#labs">프로젝트 룸</a>
        </nav>

        <a href="#hero" className="nav-cta">
          운영안 생성
        </a>
      </div>
    </header>
  );
}
