import React from 'react';
import { Film } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand" style={{fontSize: '16px'}}>
          <Film size={18} />
          <span>필요덕션</span>
        </div>
        <p>© 2026 필요덕션. All rights reserved.</p>
      </div>
    </footer>
  );
}
