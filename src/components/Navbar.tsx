"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isTeacher = pathname.startsWith('/teacher');
  const isParent = pathname.startsWith('/parent');
  const avatar = isTeacher ? 'DS' : (isParent ? 'SJ' : 'AJ');

  return (
    <nav className="top-nav">
      <div className="nav-brand">
        <div className="nav-brand-icon">
          <img src="/logo-blue.png" alt="Lumen Logo" />
        </div>
        <span className="nav-brand-title">Lumen</span>
      </div>
      
      <div className="nav-user">
        <div className="user-avatar-small">{avatar}</div>
        <Link href="/" className="logout-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Logout
        </Link>
      </div>
    </nav>
  );
}
