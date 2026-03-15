"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function TeacherAssignmentsPage() {
  const [activeFilter, setActiveFilter] = useState<'posted' | 'submissions'>('posted');

  const assignments = [
    {
      id: 1,
      classId: "10-A",
      classColor: "#DBEAFE",
      classTextColor: "#1E3A8A",
      title: "Quadratic Equations Problem Set",
      dueDate: "Due: March 15, 2026",
      submitted: "28/35",
      allSubmitted: false
    },
    {
      id: 2,
      classId: "10-B",
      classColor: "#DBEAFE",
      classTextColor: "#1E3A8A",
      title: "Trigonometry Assignment",
      dueDate: "Due: March 18, 2026",
      submitted: "22/32",
      allSubmitted: false
    },
    {
      id: 3,
      classId: "9-A",
      classColor: "#DBEAFE",
      classTextColor: "#1E3A8A",
      title: "Algebra Worksheet",
      dueDate: "Due: March 20, 2026",
      submitted: "35/38",
      allSubmitted: false
    },
    {
      id: 4,
      classId: "9-B",
      classColor: "#DBEAFE",
      classTextColor: "#1E3A8A",
      title: "Geometry Proofs",
      dueDate: "Due: March 22, 2026",
      submitted: "25/30",
      allSubmitted: false
    }
  ];

  const submissions = [
    {
      id: 1,
      studentName: "Alex Johnson",
      studentId: "2024-ST-1234",
      fileName: "quadratic_solutions.pdf",
      submittedAt: "Submitted: 2026-03-09 10:30 AM"
    },
    {
      id: 2,
      studentName: "Emma Davis",
      studentId: "2024-ST-1235",
      fileName: "math_assignment.pdf",
      submittedAt: "Submitted: 2026-03-09 11:15 AM"
    },
    {
      id: 3,
      studentName: "Michael Chen",
      studentId: "2024-ST-1236",
      fileName: "solutions.pdf",
      submittedAt: "Submitted: 2026-03-09 02:45 PM"
    },
    {
      id: 4,
      studentName: "Sophia Williams",
      studentId: "2024-ST-1237",
      fileName: "homework.pdf",
      submittedAt: "Submitted: 2026-03-10 09:00 AM"
    }
  ];

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-container">
          
          {/* Action Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            {/* Filter Toggle */}
            <div style={{ display: 'flex', gap: '0.25rem', backgroundColor: '#F3F4F6', padding: '0.25rem', borderRadius: '8px' }}>
              <button 
                onClick={() => setActiveFilter('posted')}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  backgroundColor: activeFilter === 'posted' ? '#1E3A5F' : 'transparent',
                  color: activeFilter === 'posted' ? '#FFFFFF' : '#4B5563'
                }}
              >
                Posted
              </button>
              <button 
                onClick={() => setActiveFilter('submissions')}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  backgroundColor: activeFilter === 'submissions' ? '#1E3A5F' : 'transparent',
                  color: activeFilter === 'submissions' ? '#FFFFFF' : '#4B5563'
                }}
              >
                Submissions
              </button>
            </div>

            {/* New Assignment Button */}
            {activeFilter === 'posted' && (
              <button 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 1.25rem',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: '#F59E0B',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#D97706'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F59E0B'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                New Assignment
              </button>
            )}
          </div>

          {/* List Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {activeFilter === 'posted' ? (
              assignments.map(assign => (
                <div 
                  key={assign.id} 
                  className="info-panel" 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '1.25rem 1.5rem',
                    margin: 0
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ 
                        backgroundColor: assign.classColor, 
                        color: assign.classTextColor, 
                        padding: '0.2rem 0.6rem', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem', 
                        fontWeight: 600 
                      }}>
                        {assign.classId}
                      </span>
                      <span style={{ 
                        backgroundColor: '#FEF3C7', 
                        color: '#D97706', 
                        padding: '0.2rem 0.6rem', 
                        borderRadius: '12px', 
                        fontSize: '0.75rem', 
                        fontWeight: 600 
                      }}>
                        {assign.submitted} SUBMITTED
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', margin: '0 0 0.25rem 0' }}>{assign.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: '#6B7280', margin: 0 }}>{assign.dueDate}</p>
                  </div>

                  <button 
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: '#EFF6FF',
                      color: '#1E40AF',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#DBEAFE'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#EFF6FF'; }}
                  >
                    View Details
                  </button>
                </div>
              ))
            ) : (
              submissions.map(sub => (
                <div 
                  key={sub.id} 
                  className="info-panel" 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '1.25rem 1.5rem',
                    margin: 0
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.3rem' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111827', margin: 0 }}>{sub.studentName}</h4>
                      <span style={{ backgroundColor: '#F3F4F6', color: '#6B7280', padding: '0.15rem 0.5rem', borderRadius: '12px', fontSize: '0.75rem' }}>
                        {sub.studentId}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#4B5563', margin: '0 0 0.25rem 0', fontFamily: 'monospace' }}>{sub.fileName}</p>
                    <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: 0 }}>{sub.submittedAt}</p>
                  </div>

                  <button 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.5rem 1.25rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#1E3A5F',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#152C48'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#1E3A5F'; }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download
                  </button>
                </div>
              ))
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
