import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function ProfilePage() {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-container">
          
          {/* Header Card */}
          <div className="profile-header-card">
            <div className="profile-avatar-large">AJ</div>
            <div className="profile-info">
              <h1>Alex Johnson</h1>
              <p>Roll No: 2024-ST-1234</p>
              <p>Class 10-A, Section B</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon info">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-value primary">8</span>
                <span className="stat-label">Subjects</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon success">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-value success">92%</span>
                <span className="stat-label">Avg Attendance</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon warning">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-value warning">3</span>
                <span className="stat-label">Pending Tasks</span>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="info-panel">
            <h2 className="info-panel-title">Academic Information</h2>
            
            <div className="info-row">
              <span className="info-label">Academic Year</span>
              <span className="info-value">2025-2026</span>
            </div>
            
            <div className="info-row">
              <span className="info-label">Admission Date</span>
              <span className="info-value">August 15, 2020</span>
            </div>
            
            <div className="info-row">
              <span className="info-label">Date of Birth</span>
              <span className="info-value">January 15, 2010</span>
            </div>
            
            <div className="info-row">
              <span className="info-label">Guardian</span>
              <span className="info-value">Sarah Johnson</span>
            </div>
          </div>

          {/* Announcements */}
          <div className="info-panel">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a365d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <h2 className="info-panel-title" style={{ margin: 0 }}>School Announcements</h2>
            </div>

            {[
              { title: 'Annual Sports Day — March 28', content: 'All students are expected to participate in the Annual Sports Day. Events include track & field, basketball, and cricket.', date: 'Mar 22', priority: 'high' },
              { title: 'Holiday Notice — Holi Festival', content: 'School will remain closed on March 14 on account of Holi. Classes resume March 15.', date: 'Mar 12', priority: 'normal' },
              { title: 'Science Exhibition', content: 'Students from Grade 8-10 are invited to showcase their science projects on April 12.', date: 'Mar 8', priority: 'normal' },
            ].map((ann, i) => (
              <div key={i} className="info-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.375rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 600, color: '#0f172a', fontSize: '0.9rem' }}>{ann.title}</span>
                    {ann.priority === 'high' && (
                      <span style={{
                        backgroundColor: '#fee2e2', color: '#ef4444',
                        padding: '0.125rem 0.5rem', borderRadius: '999px',
                        fontSize: '0.6875rem', fontWeight: 600
                      }}>IMPORTANT</span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', whiteSpace: 'nowrap' }}>{ann.date}</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>{ann.content}</p>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
