import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function TeacherProfilePage() {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-container">
          
          {/* Header Card */}
          <div className="profile-header-card">
            <div className="profile-avatar-large">DS</div>
            <div className="profile-info">
              <h1>Dr. Sarah Mitchell</h1>
              <p>Faculty ID: TCH-2024-089</p>
              <p>Department: Mathematics</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon info">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="2" y1="20" x2="22" y2="20"></line>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-value primary">4</span>
                <span className="stat-label">Classes</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon success">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-value success">142</span>
                <span className="stat-label">Students</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon warning">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-value warning">12</span>
                <span className="stat-label">Pending Reviews</span>
              </div>
            </div>
          </div>

          {/* Info Panel / Teaching Schedule */}
          <div className="info-panel">
            <h2 className="info-panel-title">Teaching Schedule</h2>
            
            <div className="info-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="info-value" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Class 10-A</span>
                <span className="info-label" style={{ display: 'block', marginTop: '0.2rem', fontSize: '0.85rem' }}>Advanced Mathematics</span>
              </div>
              <span className="info-label" style={{ fontWeight: 500 }}>Mon, Wed, Fri - 9:00 AM</span>
            </div>
            
            <div className="info-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="info-value" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Class 10-B</span>
                <span className="info-label" style={{ display: 'block', marginTop: '0.2rem', fontSize: '0.85rem' }}>Mathematics</span>
              </div>
              <span className="info-label" style={{ fontWeight: 500 }}>Tue, Thu - 10:30 AM</span>
            </div>

            <div className="info-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="info-value" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Class 9-A</span>
                <span className="info-label" style={{ display: 'block', marginTop: '0.2rem', fontSize: '0.85rem' }}>Algebra Basics</span>
              </div>
              <span className="info-label" style={{ fontWeight: 500 }}>Mon, Wed - 2:00 PM</span>
            </div>

            <div className="info-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="info-value" style={{ fontSize: '1.1rem', fontWeight: 600 }}>Class 9-B</span>
                <span className="info-label" style={{ display: 'block', marginTop: '0.2rem', fontSize: '0.85rem' }}>Algebra Basics</span>
              </div>
              <span className="info-label" style={{ fontWeight: 500 }}>Tue, Thu - 3:30 PM</span>
            </div>
          </div>

          {/* Professional Information */}
          <div className="info-panel" style={{ marginTop: '1.5rem' }}>
            <h2 className="info-panel-title">Professional Information</h2>
            
            <div className="info-row">
              <span className="info-label">Joining Date</span>
              <span className="info-value">August 1, 2018</span>
            </div>
            
            <div className="info-row">
              <span className="info-label">Qualification</span>
              <span className="info-value">Ph.D. in Mathematics</span>
            </div>
            
            <div className="info-row">
              <span className="info-label">Experience</span>
              <span className="info-value">12 years</span>
            </div>

            <div className="info-row">
              <span className="info-label">Contact</span>
              <span className="info-value" style={{ color: '#1A365D', fontWeight: 500 }}>sarah.mitchell@lumen.edu</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
