"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function AdminAcademicsPage() {
  const [activeTab, setActiveTab] = useState('classes');

  const classes = [
    { grade: 'Grade 6', sections: ['A', 'B'], students: 78, classTeachers: ['Ms. Priya Sharma', 'Mr. Anil Gupta'] },
    { grade: 'Grade 7', sections: ['A', 'B', 'C'], students: 112, classTeachers: ['Mrs. Rekha Patel', 'Mr. David Lee', 'Ms. Neha Rao'] },
    { grade: 'Grade 8', sections: ['A', 'B'], students: 85, classTeachers: ['Mr. Suresh Nair', 'Ms. Kavita Joshi'] },
    { grade: 'Grade 9', sections: ['A', 'B'], students: 90, classTeachers: ['Prof. Robert Kumar', 'Mr. Rajesh Menon'] },
    { grade: 'Grade 10', sections: ['A', 'B'], students: 88, classTeachers: ['Dr. Sarah Mitchell', 'Ms. Fatima Khan'] },
  ];

  const subjects = [
    { name: 'Mathematics', code: 'MATH', classes: ['Grade 6–10'], teacher: 'Dr. Sarah Mitchell' },
    { name: 'Science', code: 'SCI', classes: ['Grade 6–10'], teacher: 'Prof. Robert Kumar' },
    { name: 'English', code: 'ENG', classes: ['Grade 6–10'], teacher: 'Ms. Priya Sharma' },
    { name: 'History', code: 'HIST', classes: ['Grade 6–10'], teacher: 'Mr. David Lee' },
    { name: 'Hindi', code: 'HIN', classes: ['Grade 6–10'], teacher: 'Mrs. Rekha Patel' },
    { name: 'Computer Science', code: 'CS', classes: ['Grade 8–10'], teacher: 'Mr. Suresh Nair' },
    { name: 'Physical Education', code: 'PE', classes: ['Grade 6–10'], teacher: 'Mr. Anil Gupta' },
  ];

  const timetable = {
    periods: ['Period 1', 'Period 2', 'Period 3', 'Period 4', 'Lunch', 'Period 5', 'Period 6', 'Period 7', 'Period 8'],
    times: ['8:00', '8:45', '9:30', '10:15', '11:00', '11:30', '12:15', '1:00', '1:45'],
    schedule: [
      ['Math', 'Eng', 'Sci', 'Hindi', '—', 'Hist', 'CS', 'PE', 'Math'],
      ['Eng', 'Math', 'Hindi', 'Sci', '—', 'PE', 'Hist', 'Math', 'CS'],
      ['Sci', 'Hindi', 'Math', 'Eng', '—', 'CS', 'Math', 'Hist', 'PE'],
      ['Hindi', 'Sci', 'Eng', 'Math', '—', 'Math', 'PE', 'CS', 'Hist'],
      ['Math', 'Eng', 'Hist', 'PE', '—', 'Sci', 'Hindi', 'Math', 'CS'],
    ],
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  };

  const tabs = [
    { key: 'classes', label: 'Classes & Sections' },
    { key: 'subjects', label: 'Subject Mapping' },
    { key: 'allocation', label: 'Teacher Allocation' },
    { key: 'timetable', label: 'Master Timetable' },
  ];

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      <main className="main-content">
        <div className="dashboard-container">

          <div className="admin-header-card">
            <div>
              <h1>Academic Architecture</h1>
              <p>Manage classes, subjects, teacher allocation, and timetables</p>
            </div>
          </div>

          <div className="admin-tabs">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`admin-tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Classes & Sections */}
          {activeTab === 'classes' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="admin-btn primary">+ Add Class</button>
              </div>
              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Grade</th>
                      <th>Sections</th>
                      <th>Total Students</th>
                      <th>Class Teachers</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classes.map((cls, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600 }}>{cls.grade}</td>
                        <td>
                          <div style={{ display: 'flex', gap: '0.375rem' }}>
                            {cls.sections.map(s => (
                              <span key={s} style={{
                                backgroundColor: '#f1f5f9', padding: '0.25rem 0.625rem',
                                borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600
                              }}>{s}</span>
                            ))}
                          </div>
                        </td>
                        <td>{cls.students}</td>
                        <td style={{ fontSize: '0.8125rem', color: '#64748b' }}>{cls.classTeachers.join(', ')}</td>
                        <td>
                          <div className="admin-btn-group">
                            <button className="admin-btn secondary">Edit</button>
                            <button className="admin-btn secondary">+ Section</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Subject Mapping */}
          {activeTab === 'subjects' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="admin-btn primary">+ Add Subject</button>
              </div>
              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Code</th>
                      <th>Applicable Classes</th>
                      <th>Lead Teacher</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((subj, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600 }}>{subj.name}</td>
                        <td>
                          <span style={{
                            backgroundColor: '#eff6ff', color: '#3b82f6', padding: '0.25rem 0.5rem',
                            borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600
                          }}>{subj.code}</span>
                        </td>
                        <td style={{ color: '#64748b' }}>{subj.classes.join(', ')}</td>
                        <td>{subj.teacher}</td>
                        <td>
                          <div className="admin-btn-group">
                            <button className="admin-btn secondary">Edit</button>
                            <button className="admin-btn danger">Remove</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Teacher Allocation */}
          {activeTab === 'allocation' && (
            <>
              <div className="admin-search-bar">
                <select className="admin-select" defaultValue="10-A">
                  <option value="10-A">Class 10-A</option>
                  <option value="10-B">Class 10-B</option>
                  <option value="9-A">Class 9-A</option>
                  <option value="9-B">Class 9-B</option>
                </select>
              </div>
              <div className="info-panel">
                <h2 className="info-panel-title">Class 10-A — Teacher Allocation</h2>
                <div className="info-row">
                  <span className="info-label">Class Teacher</span>
                  <span className="info-value" style={{ color: '#1a365d' }}>Dr. Sarah Mitchell</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Mathematics</span>
                  <span className="info-value">Dr. Sarah Mitchell</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Science</span>
                  <span className="info-value">Prof. Robert Kumar</span>
                </div>
                <div className="info-row">
                  <span className="info-label">English</span>
                  <span className="info-value">Ms. Priya Sharma</span>
                </div>
                <div className="info-row">
                  <span className="info-label">History</span>
                  <span className="info-value">Mr. David Lee</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Computer Science</span>
                  <span className="info-value">Mr. Suresh Nair</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Physical Education</span>
                  <span className="info-value">Mr. Anil Gupta</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="admin-btn primary">Edit Allocation</button>
              </div>
            </>
          )}

          {/* Master Timetable */}
          {activeTab === 'timetable' && (
            <>
              <div className="admin-search-bar">
                <select className="admin-select" defaultValue="10-A">
                  <option value="10-A">Class 10-A</option>
                  <option value="10-B">Class 10-B</option>
                  <option value="9-A">Class 9-A</option>
                  <option value="9-B">Class 9-B</option>
                </select>
                <button className="admin-btn primary">Edit Timetable</button>
              </div>
              <div className="timetable-grid">
                <table>
                  <thead>
                    <tr>
                      <th>Day</th>
                      {timetable.periods.map((p, i) => (
                        <th key={i}>
                          <div>{p}</div>
                          <div style={{ fontSize: '0.625rem', fontWeight: 400, textTransform: 'none' }}>{timetable.times[i]}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timetable.days.map((day, di) => (
                      <tr key={day}>
                        <td style={{ fontWeight: 600, backgroundColor: '#f8fafc' }}>{day}</td>
                        {timetable.schedule[di].map((subj, si) => (
                          <td key={si} style={subj === '—' ? { backgroundColor: '#f8fafc', color: '#94a3b8' } : {}}>
                            {subj === '—' ? 'Break' : (
                              <div>
                                <div className="tt-subject">{subj}</div>
                              </div>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

        </div>
      </main>
    </div>
  );
}
