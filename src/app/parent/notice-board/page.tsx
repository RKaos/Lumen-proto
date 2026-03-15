"use client";

import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';
import ParentStudentSelector from '@/components/ParentStudentSelector';

export default function NoticeBoardPage() {
  const notices = [
    {
      type: "exam",
      iconColor: "#FEF3C7",
      iconTextColor: "#D97706",
      badgeBg: "#FEF3C7",
      badgeTextColor: "#D97706",
      title: "Midterm Examinations Schedule",
      badge: "EXAM",
      body: "Mathematics midterm exam scheduled for March 15, 2026. Topics covered: Chapters 1-5.",
      date: "March 8, 2026",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      type: "homework",
      iconColor: "#DBEAFE",
      iconTextColor: "#1E40AF",
      badgeBg: "#DBEAFE",
      badgeTextColor: "#1E40AF",
      title: "Chemistry Assignment Due",
      badge: "HOMEWORK",
      body: "Chemical Bonding assignment must be submitted by March 18, 2026.",
      date: "March 9, 2026",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      )
    },
    {
      type: "announcement",
      iconColor: "#DCFCE7",
      iconTextColor: "#166534",
      badgeBg: "#DCFCE7",
      badgeTextColor: "#10B981",
      title: "Parent-Teacher Meeting",
      badge: "ANNOUNCEMENT",
      body: "Annual parent-teacher meeting scheduled for March 22, 2026 at 10:00 AM.",
      date: "March 10, 2026",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    },
    {
      type: "alert",
      iconColor: "#FEE2E2",
      iconTextColor: "#991B1B",
      badgeBg: "#FEE2E2",
      badgeTextColor: "#EF4444",
      title: "Attendance Alert",
      badge: "ALERT",
      body: "Your child's attendance in History class has fallen below 75%. Please ensure regular attendance.",
      date: "March 7, 2026",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      )
    },
    {
      type: "announcement",
      iconColor: "#DCFCE7",
      iconTextColor: "#166534",
      badgeBg: "#DCFCE7",
      badgeTextColor: "#10B981",
      title: "School Sports Day",
      badge: "ANNOUNCEMENT",
      body: "Annual sports day celebration on March 28, 2026. All parents are invited.",
      date: "March 6, 2026",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="dashboard-layout">
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Top Student Profile Card (Dropdown) */}
          <ParentStudentSelector />

          <SubNav />

          {/* Notices List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {notices.map((notice, idx) => (
              <div key={idx} className="info-panel" style={{ 
                padding: '1.5rem', 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem',
                position: 'relative'
              }}>
                <div style={{
                  backgroundColor: notice.iconColor,
                  color: notice.iconTextColor,
                  padding: '0.75rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {notice.icon}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: 0 }}>{notice.title}</h3>
                    <span style={{
                      backgroundColor: notice.badgeBg,
                      color: notice.badgeTextColor,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '12px',
                      fontSize: '0.65rem',
                      fontWeight: 800
                    }}>
                      {notice.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#6B7280', margin: '0 0 0.75rem 0', lineHeight: '1.4' }}>{notice.body}</p>
                  <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{notice.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
