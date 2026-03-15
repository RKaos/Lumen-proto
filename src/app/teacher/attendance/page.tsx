"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function TeacherAttendancePage() {
  const [selectedClass, setSelectedClass] = useState("Class 10-A");

  // Mock Students Data
  const mockStudents = [
    { id: "2024-ST-1234", name: "Alex Johnson", initials: "AJ" },
    { id: "2024-ST-1235", name: "Emma Davis", initials: "ED" },
    { id: "2024-ST-1236", name: "Michael Chen", initials: "MC" },
    { id: "2024-ST-1237", name: "Sophia Wilson", initials: "SW" },
    { id: "2024-ST-1238", name: "James Taylor", initials: "JT" },
    { id: "2024-ST-1239", name: "Olivia Brown", initials: "OB" },
    { id: "2024-ST-1240", name: "William Jones", initials: "WJ" },
    { id: "2024-ST-1241", name: "Isabella Miller", initials: "IM" }
  ];

  // Attendance State: { [id]: 'present' | 'late' | 'absent' }
  const [attendance, setAttendance] = useState<Record<string, string>>({
    "2024-ST-1234": "present",
    "2024-ST-1235": "present",
    "2024-ST-1236": "late",
    "2024-ST-1237": "present",
    "2024-ST-1238": "present",
    "2024-ST-1239": "present",
    "2024-ST-1240": "present",
    "2024-ST-1241": "absent"
  });

  const handleStatusChange = (studentId: string, status: string) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  // Calculate stats dynamically
  const stats = Object.values(attendance).reduce(
    (acc, status) => {
      if (status === 'present') acc.present++;
      else if (status === 'absent') acc.absent++;
      else if (status === 'late') acc.late++;
      return acc;
    },
    { present: 0, absent: 0, late: 0 }
  );

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-container">
          
          {/* Class Selector Card */}
          <div className="info-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 className="info-panel-title" style={{ marginBottom: '1rem', fontSize: '1rem', color: '#4B5563' }}>Select Class</h2>
            <div className="input-group" style={{ maxWidth: '200px', marginBottom: 0 }}>
              <select 
                value={selectedClass} 
                onChange={(e) => setSelectedClass(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.625rem',
                  borderRadius: '8px',
                  border: '1px solid #E5E7EB',
                  backgroundColor: '#F9FAFB',
                  color: '#111827',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                  cursor: 'pointer'
                }}
              >
                <option value="Class 10-A">Class 10-A</option>
                <option value="Class 10-B">Class 10-B</option>
                <option value="Class 9-A">Class 9-A</option>
                <option value="Class 9-B">Class 9-B</option>
              </select>
            </div>
          </div>

          {/* Stats Row */}
          <div className="stats-grid" style={{ marginBottom: '1.5rem' }}>
            <div className="stat-card" style={{ padding: '1.25rem' }}>
              <div className="stat-details">
                <span className="stat-label" style={{ fontSize: '0.85rem', color: '#6B7280' }}>Present</span>
                <span className="stat-value" style={{ color: '#10B981', fontSize: '1.5rem', fontWeight: 600 }}>{stats.present}</span>
              </div>
            </div>

            <div className="stat-card" style={{ padding: '1.25rem' }}>
              <div className="stat-details">
                <span className="stat-label" style={{ fontSize: '0.85rem', color: '#6B7280' }}>Absent</span>
                <span className="stat-value" style={{ color: '#EF4444', fontSize: '1.5rem', fontWeight: 600 }}>{stats.absent}</span>
              </div>
            </div>

            <div className="stat-card" style={{ padding: '1.25rem' }}>
              <div className="stat-details">
                <span className="stat-label" style={{ fontSize: '0.85rem', color: '#6B7280' }}>Late</span>
                <span className="stat-value" style={{ color: '#F59E0B', fontSize: '1.5rem', fontWeight: 600 }}>{stats.late}</span>
              </div>
            </div>
          </div>

          {/* Student List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {mockStudents.map(student => {
              const currentStatus = attendance[student.id] || "absent";
              
              return (
                <div 
                  key={student.id} 
                  className="info-panel" 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '1rem 1.5rem',
                    margin: 0
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div className="profile-avatar-large" style={{ width: '40px', height: '40px', fontSize: '0.9rem' }}>{student.initials}</div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111827', margin: 0 }}>{student.name}</h4>
                      <p style={{ fontSize: '0.8rem', color: '#6B7280', margin: '0.1rem 0 0 0' }}>{student.id}</p>
                    </div>
                  </div>

                  {/* Button Group */}
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      onClick={() => handleStatusChange(student.id, 'present')}
                      style={{
                        padding: '0.5rem 1.25rem',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        backgroundColor: currentStatus === 'present' ? '#10B981' : '#DCFCE7',
                        color: currentStatus === 'present' ? '#FFFFFF' : '#166534'
                      }}
                    >
                      Present
                    </button>
                    <button 
                      onClick={() => handleStatusChange(student.id, 'late')}
                      style={{
                        padding: '0.5rem 1.25rem',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        backgroundColor: currentStatus === 'late' ? '#F59E0B' : '#FEF3C7',
                        color: currentStatus === 'late' ? '#FFFFFF' : '#92400E'
                      }}
                    >
                      Late
                    </button>
                    <button 
                      onClick={() => handleStatusChange(student.id, 'absent')}
                      style={{
                        padding: '0.5rem 1.25rem',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        backgroundColor: currentStatus === 'absent' ? '#EF4444' : '#FEE2E2',
                        color: currentStatus === 'absent' ? '#FFFFFF' : '#991B1B'
                      }}
                    >
                      Absent
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Footer */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button 
              style={{
                padding: '0.75rem 1.75rem',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#1E3A5F',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#152C48'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1E3A5F'}
            >
              Submit Attendance
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
