"use client";

import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';
import ParentStudentSelector from '@/components/ParentStudentSelector';

export default function ParentDashboardPage() {
  return (
    <div className="dashboard-layout">
      <Navbar />
      
      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Top Student Profile Card (Dropdown) */}
          <ParentStudentSelector />

          <SubNav />

          {/* Today's Attendance Panel */}
          <div className="info-panel" style={{ padding: '2rem', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: 0 }}>Today&apos;s Attendance</h3>
              <span style={{
                backgroundColor: '#DCFCE7',
                color: '#10B981',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: 700
              }}>
                PRESENT
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              {/* Donut Chart (Simulated with SVG) */}
              <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                <svg className="donut" width="100%" height="100%" viewBox="0 0 40 40">
                  <circle className="donut-hole" cx="20" cy="20" r="15.915494309189533" fill="#fff"></circle>
                  <circle className="donut-ring" cx="20" cy="20" r="15.915494309189533" fill="transparent" stroke="#F3F4F6" strokeWidth="3.5"></circle>
                  <circle className="donut-segment" cx="20" cy="20" r="15.915494309189533" fill="transparent" stroke="#1E3A5F" strokeWidth="3.5" strokeDasharray="93 7" strokeDashoffset="25"></circle>
                </svg>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center'
                }}>
                  <span style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1E3A5F' }}>93%</span>
                </div>
              </div>

              {/* Attendance Description */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ 
                  backgroundColor: '#EFF6FF', 
                  color: '#1E40AF', 
                  padding: '0.6rem', 
                  borderRadius: '10px' 
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: '#6B7280', margin: '0 0 0.15rem 0', fontWeight: 500 }}>Classes Attended</p>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: '0 0 0.25rem 0' }}>42 of 45</h4>
                  <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>This month: March 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Scores Panel */}
          <div className="info-panel" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: 0 }}>Recent Scores</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { subject: "Mathematics", score: "88", grade: "A" },
                { subject: "Physics", score: "82", grade: "A" },
                { subject: "Chemistry", score: "92", grade: "A+" }
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.85rem 1.25rem',
                  backgroundColor: '#F9FAFB',
                  borderRadius: '10px',
                  transition: 'background-color 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#374151' }}>{item.subject}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: '#111827' }}>{item.score}</span>
                    <span style={{
                      backgroundColor: item.grade === 'A+' ? '#F0FDFA' : '#DCFCE7',
                      color: item.grade === 'A+' ? '#0F766E' : '#166534',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      minWidth: '24px',
                      textAlign: 'center'
                    }}>
                      {item.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Panel */}
          <div className="info-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: '0 0 1.25rem 0' }}>Quick Stats</h3>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Assignments Card */}
              <div style={{
                flex: 1,
                backgroundColor: '#DCFCE7', // Light Green
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '0.8rem', color: '#15803D', fontWeight: 500, opacity: 0.8, marginBottom: '0.25rem' }}>Assignments</span>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#10B981', margin: '0 0 0.15rem 0' }}>5/6</h4>
                <span style={{ fontSize: '0.7rem', color: '#15803D', opacity: 0.7 }}>Completed</span>
              </div>

              {/* Pending Card */}
              <div style={{
                flex: 1,
                backgroundColor: '#FEF3C7', // Light Amber
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '0.8rem', color: '#B45309', fontWeight: 500, opacity: 0.8, marginBottom: '0.25rem' }}>Pending</span>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F59E0B', margin: '0 0 0.15rem 0' }}>1</h4>
                <span style={{ fontSize: '0.7rem', color: '#B45309', opacity: 0.7 }}>Task due soon</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
