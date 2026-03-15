"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function AssignmentsPage() {
  // Hardcoded assignments data
  const initialAssignments = [
    { id: 1, subject: 'Mathematics', title: 'Quadratic Equations Problem Set', due: 'March 15, 2026', tag: null },
    { id: 2, subject: 'Physics', title: 'Motion and Force Lab Report', due: 'March 12, 2026', tag: 'submitted', isSubmitted: true },
    { id: 3, subject: 'Chemistry', title: 'Chemical Bonding Assignment', due: 'March 18, 2026', tag: null },
    { id: 4, subject: 'English', title: 'Shakespearean Essay', due: 'March 8, 2026', tag: 'overdue' },
    { id: 5, subject: 'Biology', title: 'Cell Structure Diagram', due: 'March 20, 2026', tag: 'submitted', isSubmitted: true },
    { id: 6, subject: 'Computer Science', title: 'Python Programming Project', due: 'March 25, 2026', tag: null },
  ];

  // State to track which assignments have been uploaded dynamically
  const [uploadedIds, setUploadedIds] = useState<number[]>([]);

  const handleUpload = (id: number) => {
    setUploadedIds((prev) => [...prev, id]);
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      <main className="main-content">
        <div className="dashboard-container">
          
          {/* Assignments List */}
          {initialAssignments.map((assignment) => {
            const hasUploaded = assignment.isSubmitted || uploadedIds.includes(assignment.id);
            const isOverdue = assignment.tag === 'overdue' && !hasUploaded;

            return (
              <div key={assignment.id} className="assignment-card">
                <div className="assignment-info">
                  <div className="assignment-tags">
                    <span className="assignment-tag">{assignment.subject}</span>
                    {assignment.tag === 'submitted' || hasUploaded ? (
                      <span className="assignment-tag submitted">Submitted</span>
                    ) : assignment.tag === 'overdue' ? (
                      <span className="assignment-tag overdue">Overdue</span>
                    ) : null}
                  </div>
                  <h3 className="assignment-title">{assignment.title}</h3>
                  <p className="assignment-due">Due: {assignment.due}</p>
                </div>

                <div className="assignment-action">
                  {hasUploaded ? (
                    <div className="status-submitted">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Submitted
                    </div>
                  ) : (
                    <button 
                      className="upload-btn"
                      onClick={() => handleUpload(assignment.id)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      Upload
                    </button>
                  )}
                </div>
              </div>
            );
          })}

        </div>
      </main>
    </div>
  );
}
