"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function AdminAttendancePage() {
  const [selectedDate, setSelectedDate] = useState('2025-03-25');
  const [selectedClass, setSelectedClass] = useState('10-A');
  const [searchQuery, setSearchQuery] = useState('');

  const attendanceLog = [
    { id: 'STU-001', name: 'Alex Johnson', initials: 'AJ', status: 'present', markedBy: 'Dr. Sarah Mitchell', time: '8:15 AM' },
    { id: 'STU-002', name: 'Emma Davis', initials: 'ED', status: 'present', markedBy: 'Dr. Sarah Mitchell', time: '8:15 AM' },
    { id: 'STU-003', name: 'Michael Chen', initials: 'MC', status: 'late', markedBy: 'Dr. Sarah Mitchell', time: '8:15 AM' },
    { id: 'STU-004', name: 'Sophia Wilson', initials: 'SW', status: 'absent', markedBy: 'Dr. Sarah Mitchell', time: '8:15 AM' },
    { id: 'STU-005', name: 'James Taylor', initials: 'JT', status: 'present', markedBy: 'Dr. Sarah Mitchell', time: '8:15 AM' },
    { id: 'STU-006', name: 'Olivia Brown', initials: 'OB', status: 'present', markedBy: 'Dr. Sarah Mitchell', time: '8:15 AM' },
    { id: 'STU-007', name: 'William Jones', initials: 'WJ', status: 'present', markedBy: 'Dr. Sarah Mitchell', time: '8:15 AM' },
    { id: 'STU-008', name: 'Isabella Miller', initials: 'IM', status: 'absent', markedBy: 'Dr. Sarah Mitchell', time: '8:15 AM' },
  ];

  const [overrides, setOverrides] = useState<Record<string, string>>({});

  const getEffectiveStatus = (studentId: string, originalStatus: string) => {
    return overrides[studentId] || originalStatus;
  };

  const handleOverride = (studentId: string, newStatus: string) => {
    setOverrides(prev => ({ ...prev, [studentId]: newStatus }));
  };

  const filteredLog = attendanceLog.filter(s =>
    searchQuery === '' ||
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const stats = filteredLog.reduce((acc, s) => {
    const status = getEffectiveStatus(s.id, s.status);
    if (status === 'present') acc.present++;
    else if (status === 'absent') acc.absent++;
    else if (status === 'late') acc.late++;
    return acc;
  }, { present: 0, absent: 0, late: 0 });

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      <main className="main-content">
        <div className="dashboard-container">

          <div className="admin-header-card">
            <div>
              <h1>Attendance Archive</h1>
              <p>View, override, and export attendance records for all classes</p>
            </div>
          </div>

          {/* Filters */}
          <div className="admin-search-bar">
            <input
              className="admin-search-input"
              type="text"
              placeholder="Search by student name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ flex: 1 }}
            />
            <div className="admin-form-group" style={{ gap: '0.25rem' }}>
              <label style={{ fontSize: '0.75rem' }}>Date</label>
              <input
                type="date"
                className="admin-search-input"
                style={{ minWidth: '160px', flex: 'unset' }}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <div className="admin-form-group" style={{ gap: '0.25rem' }}>
              <label style={{ fontSize: '0.75rem' }}>Class</label>
              <select className="admin-select" value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
                <option value="10-A">Class 10-A</option>
                <option value="10-B">Class 10-B</option>
                <option value="9-A">Class 9-A</option>
                <option value="9-B">Class 9-B</option>
              </select>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
              <button className="admin-btn secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Export CSV
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card" style={{ padding: '1.25rem' }}>
              <div className="stat-details">
                <span className="stat-label" style={{ fontSize: '0.85rem', color: '#6B7280' }}>Present</span>
                <span className="stat-value" style={{ color: '#10B981', fontSize: '1.5rem' }}>{stats.present}</span>
              </div>
            </div>
            <div className="stat-card" style={{ padding: '1.25rem' }}>
              <div className="stat-details">
                <span className="stat-label" style={{ fontSize: '0.85rem', color: '#6B7280' }}>Absent</span>
                <span className="stat-value" style={{ color: '#EF4444', fontSize: '1.5rem' }}>{stats.absent}</span>
              </div>
            </div>
            <div className="stat-card" style={{ padding: '1.25rem' }}>
              <div className="stat-details">
                <span className="stat-label" style={{ fontSize: '0.85rem', color: '#6B7280' }}>Late</span>
                <span className="stat-value" style={{ color: '#F59E0B', fontSize: '1.5rem' }}>{stats.late}</span>
              </div>
            </div>
          </div>

          {/* Attendance Log Table */}
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>ID</th>
                  <th>Original Status</th>
                  <th>Marked By</th>
                  <th>Time</th>
                  <th>Override</th>
                </tr>
              </thead>
              <tbody>
                {filteredLog.map((student) => {
                  const effectiveStatus = getEffectiveStatus(student.id, student.status);
                  const isOverridden = overrides[student.id] !== undefined;
                  return (
                    <tr key={student.id}>
                      <td>
                        <div className="user-cell">
                          <div className="avatar-sm">{student.initials}</div>
                          <span style={{ fontWeight: 600 }}>{student.name}</span>
                        </div>
                      </td>
                      <td style={{ color: '#64748b' }}>{student.id}</td>
                      <td>
                        <span className={`status-badge ${effectiveStatus === 'present' ? 'active' : effectiveStatus === 'late' ? 'pending' : 'inactive'}`}>
                          ● {effectiveStatus.charAt(0).toUpperCase() + effectiveStatus.slice(1)}
                          {isOverridden && ' (overridden)'}
                        </span>
                      </td>
                      <td style={{ color: '#64748b', fontSize: '0.8125rem' }}>{student.markedBy}</td>
                      <td style={{ color: '#64748b' }}>{student.time}</td>
                      <td>
                        <div className="admin-btn-group">
                          {effectiveStatus !== 'present' && (
                            <button className="admin-btn success" onClick={() => handleOverride(student.id, 'present')}>
                              → Present
                            </button>
                          )}
                          {effectiveStatus !== 'absent' && (
                            <button className="admin-btn danger" onClick={() => handleOverride(student.id, 'absent')}>
                              → Absent
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}
