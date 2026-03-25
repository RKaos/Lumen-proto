"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function AdminDocumentsPage() {
  const [activeTab, setActiveTab] = useState('id-cards');
  const [selectedRole, setSelectedRole] = useState('student');

  const studentData = {
    name: 'Alex Johnson',
    initials: 'AJ',
    id: 'STU-2024-001',
    class: 'Grade 10 – Section A',
    dob: '15 May 2010',
    blood: 'B+',
    parent: 'Mrs. Susan Johnson',
    phone: '+91 98765 43210',
  };

  const teacherData = {
    name: 'Dr. Sarah Mitchell',
    initials: 'SM',
    id: 'TCH-2024-089',
    department: 'Mathematics',
    doj: 'August 1, 2018',
    qualification: 'Ph.D. in Mathematics',
    phone: '+91 98765 12345',
    email: 'sarah.mitchell@lumen.edu',
  };

  const certificates = [
    { type: 'Bonafide Certificate', desc: 'Certifies that the student is a bonafide student of this institution', icon: '📜' },
    { type: 'Character Certificate', desc: 'Certifies the student\'s good character and conduct during enrollment', icon: '🏅' },
    { type: 'Transfer Certificate', desc: 'Issued when a student transfers to another school', icon: '📋' },
    { type: 'Study Certificate', desc: 'Certifies the period of study completed by the student', icon: '📄' },
  ];

  const tabs = [
    { key: 'id-cards', label: 'Digital ID Cards' },
    { key: 'certificates', label: 'Certificates' },
  ];

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      <main className="main-content">
        <div className="dashboard-container">

          <div className="admin-header-card">
            <div>
              <h1>Documents & ID Generation</h1>
              <p>Generate digital ID cards and school certificates</p>
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

          {/* ID Cards */}
          {activeTab === 'id-cards' && (
            <>
              <div className="admin-search-bar">
                <select className="admin-select" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                  <option value="student">Student ID Card</option>
                  <option value="teacher">Teacher ID Card</option>
                </select>
                <input className="admin-search-input" type="text" placeholder="Search by name or ID..." style={{ flex: 1 }} />
                <button className="admin-btn primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
                  Print ID Card
                </button>
              </div>

              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* ID Card Preview */}
                <div className="id-card-preview">
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem', color: '#64748b' }}>Preview</h3>
                  <div className="id-card">
                    <div className="id-card-header">
                      <h3>LUMEN SCHOOL</h3>
                      <p>Excellence in Education</p>
                    </div>
                    <div className="id-card-body">
                      <div className="id-card-avatar">
                        {selectedRole === 'student' ? studentData.initials : teacherData.initials}
                      </div>
                      <div className="id-card-details">
                        {selectedRole === 'student' ? (
                          <>
                            <p><strong>{studentData.name}</strong></p>
                            <p>ID: {studentData.id}</p>
                            <p>{studentData.class}</p>
                            <p>DOB: {studentData.dob}</p>
                            <p>Blood Group: {studentData.blood}</p>
                          </>
                        ) : (
                          <>
                            <p><strong>{teacherData.name}</strong></p>
                            <p>ID: {teacherData.id}</p>
                            <p>Dept: {teacherData.department}</p>
                            <p>{teacherData.qualification}</p>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="id-card-footer">
                      {selectedRole === 'student'
                        ? `Guardian: ${studentData.parent} | Phone: ${studentData.phone}`
                        : `Phone: ${teacherData.phone} | ${teacherData.email}`
                      }
                    </div>
                  </div>
                </div>

                {/* Batch Print Info */}
                <div className="info-panel" style={{ flex: 1, minWidth: '300px' }}>
                  <h2 className="info-panel-title">Batch Print</h2>
                  <div className="info-row">
                    <span className="info-label">Print by Class</span>
                    <select className="admin-select" defaultValue="10-A">
                      <option value="all">All Classes</option>
                      <option value="10-A">Grade 10-A</option>
                      <option value="10-B">Grade 10-B</option>
                      <option value="9-A">Grade 9-A</option>
                      <option value="9-B">Grade 9-B</option>
                    </select>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Cards to Print</span>
                    <span className="info-value">44 cards</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Format</span>
                    <span className="info-value">PVC Card Size (3.375&quot; × 2.125&quot;)</span>
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <button className="admin-btn primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}>
                      Generate All ID Cards (PDF)
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Certificates */}
          {activeTab === 'certificates' && (
            <>
              <div className="admin-search-bar">
                <input className="admin-search-input" type="text" placeholder="Enter student name or ID..." style={{ flex: 1 }} />
                <button className="admin-btn secondary">Search</button>
              </div>

              <div className="info-panel" style={{ marginBottom: '1.5rem' }}>
                <h2 className="info-panel-title">Student: Alex Johnson (STU-2024-001) — Grade 10-A</h2>
                <p style={{ fontSize: '0.8125rem', color: '#64748b' }}>Select a certificate type to generate</p>
              </div>

              <div className="admin-cards-grid">
                {certificates.map((cert, i) => (
                  <div key={i} className="info-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.75rem' }}>{cert.icon}</span>
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a' }}>{cert.type}</h3>
                        <p style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '0.25rem' }}>{cert.desc}</p>
                      </div>
                    </div>
                    <button className="admin-btn primary" style={{ alignSelf: 'flex-start' }}>
                      Generate PDF
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </main>
    </div>
  );
}
