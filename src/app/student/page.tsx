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

        </div>
      </main>
    </div>
  );
}
