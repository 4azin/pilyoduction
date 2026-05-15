import React from 'react';
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
          <a href="#product">Product System</a>
          <a href="#pipeline">Document Pipeline</a>
          <a href="#labs">Labs</a>
        </nav>

        <a href="#beta" className="nav-cta">
          베타 신청하기
        </a>
      </div>
    </header>
  );
}
