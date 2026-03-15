import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function AttendancePage() {
  const subjects = [
    { name: 'Mathematics', percentage: 93, attended: 42, total: 45 },
    { name: 'Physics', percentage: 84, attended: 38, total: 45 },
    { name: 'Chemistry', percentage: 78, attended: 35, total: 45 },
    { name: 'Biology', percentage: 98, attended: 44, total: 45 },
    { name: 'English', percentage: 89, attended: 40, total: 45 },
    { name: 'History', percentage: 71, attended: 32, total: 45 },
    { name: 'Computer Science', percentage: 96, attended: 43, total: 45 },
    { name: 'Physical Education', percentage: 91, attended: 41, total: 45 },
  ];

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      <main className="main-content">
        <div className="dashboard-container">
          
          {/* Overall Attendance Banner */}
          <div className="attendance-banner">
            <h2 className="attendance-banner-title">Overall Attendance</h2>
            <div className="attendance-banner-value">88%</div>
            <p className="attendance-banner-subtitle">315 of 360 classes attended</p>
          </div>

          {/* Subject Attendance List */}
          {subjects.map((subject) => {
            const isLowAttendance = subject.percentage < 80;
            
            return (
              <div key={subject.name} className="subject-card">
                <div className="subject-card-header">
                  <span className="subject-name">{subject.name}</span>
                  <span className={`attendance-badge ${isLowAttendance ? 'warning' : ''}`}>
                    {subject.percentage}%
                  </span>
                </div>
                
                <div className="progress-container-row">
                  <div className="progress-track">
                    <div 
                      className={`progress-fill ${isLowAttendance ? 'warning' : ''}`}
                      style={{ width: `${subject.percentage}%` }}
                    ></div>
                  </div>
                  <span className="progress-ratio">{subject.attended}/{subject.total}</span>
                </div>
              </div>
            );
          })}

        </div>
      </main>
    </div>
  );
}
