import { Film } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand footer-brand">
          <Film size={18} />
          <span>필요덕션</span>
        </div>
        <p>© 2026 필요덕션. AI 프로덕션 컨트롤룸 MVP.</p>
      </div>
    </footer>
  );
}
