"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

type AssessmentRow = {
  assessment: string;
  max: number;
  obtained: number;
  percentage: string;
};

type SubjectData = {
  grade: string;
  assessments: AssessmentRow[];
  total: {
    max: number;
    obtained: number;
    percentage: string;
  };
};

export default function MarksPage() {
  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 
    'English', 'History', 'Computer Science', 'Physical Education'
  ];

  // Dummy data for each subject
  const marksData: Record<string, SubjectData> = {
    'Mathematics': {
      grade: 'A',
      assessments: [
        { assessment: 'Quiz', max: 20, obtained: 18, percentage: '90%' },
        { assessment: 'Midterm', max: 40, obtained: 38, percentage: '95%' },
        { assessment: 'Final Exam', max: 100, obtained: 85, percentage: '85%' },
      ],
      total: { max: 160, obtained: 141, percentage: '88%' }
    },
    'Physics': {
      grade: 'B+',
      assessments: [
        { assessment: 'Quiz 1', max: 20, obtained: 15, percentage: '75%' },
        { assessment: 'Lab Report', max: 30, obtained: 27, percentage: '90%' },
        { assessment: 'Midterm', max: 50, obtained: 42, percentage: '84%' },
        { assessment: 'Final Exam', max: 100, obtained: 78, percentage: '78%' },
      ],
      total: { max: 200, obtained: 162, percentage: '81%' }
    },
    'Chemistry': {
      grade: 'A-',
      assessments: [
        { assessment: 'Quiz', max: 20, obtained: 17, percentage: '85%' },
        { assessment: 'Midterm', max: 40, obtained: 34, percentage: '85%' },
        { assessment: 'Final Exam', max: 100, obtained: 84, percentage: '84%' },
      ],
      total: { max: 160, obtained: 135, percentage: '84%' }
    },
    'Biology': {
      grade: 'A+',
      assessments: [
        { assessment: 'Quiz 1', max: 20, obtained: 20, percentage: '100%' },
        { assessment: 'Quiz 2', max: 20, obtained: 19, percentage: '95%' },
        { assessment: 'Midterm', max: 60, obtained: 56, percentage: '93%' },
        { assessment: 'Final Exam', max: 100, obtained: 95, percentage: '95%' },
      ],
      total: { max: 200, obtained: 190, percentage: '95%' }
    },
    'English': {
      grade: 'B',
      assessments: [
        { assessment: 'Essay 1', max: 30, obtained: 24, percentage: '80%' },
        { assessment: 'Midterm', max: 70, obtained: 52, percentage: '74%' },
        { assessment: 'Final Exam', max: 100, obtained: 79, percentage: '79%' },
      ],
      total: { max: 200, obtained: 155, percentage: '78%' }
    },
    'History': {
      grade: 'C+',
      assessments: [
        { assessment: 'Quiz', max: 20, obtained: 14, percentage: '70%' },
        { assessment: 'Midterm', max: 40, obtained: 28, percentage: '70%' },
        { assessment: 'Final Exam', max: 100, obtained: 73, percentage: '73%' },
      ],
      total: { max: 160, obtained: 115, percentage: '72%' }
    },
    'Computer Science': {
      grade: 'A',
      assessments: [
        { assessment: 'Coding Quiz', max: 25, obtained: 24, percentage: '96%' },
        { assessment: 'Project', max: 50, obtained: 45, percentage: '90%' },
        { assessment: 'Final Exam', max: 100, obtained: 86, percentage: '86%' },
      ],
      total: { max: 175, obtained: 155, percentage: '89%' }
    },
    'Physical Education': {
      grade: 'A+',
      assessments: [
        { assessment: 'Fitness Test', max: 50, obtained: 48, percentage: '96%' },
        { assessment: 'Main Participation', max: 50, obtained: 50, percentage: '100%' },
        { assessment: 'Final Exam', max: 50, obtained: 45, percentage: '90%' },
      ],
      total: { max: 150, obtained: 143, percentage: '95%' }
    }
  };

  const [activeSubject, setActiveSubject] = useState<string>('Mathematics');
  const currentData = marksData[activeSubject];

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      <main className="main-content">
        <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Subject pills container floating with card shadows */}
          <div className="subject-pills-bar">
            {subjects.map((sub) => (
              <button 
                key={sub} 
                className={`subject-pill ${activeSubject === sub ? 'active' : ''}`}
                onClick={() => setActiveSubject(sub)}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* Details layout */}
          <div className="marks-details-card">
            <div className="marks-card-header">
              <h2 className="marks-subject-title">{activeSubject}</h2>
              <span className="grade-badge">GRADE: {currentData.grade}</span>
            </div>

            <div className="marks-table-container">
              <table className="marks-table">
                <thead>
                  <tr>
                    <th>Assessment</th>
                    <th>Max Marks</th>
                    <th>Obtained</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.assessments.map((row, index) => (
                    <tr key={index}>
                      <td>{row.assessment}</td>
                      <td>{row.max}</td>
                      <td>{row.obtained}</td>
                      <td className="percentage-col">{row.percentage}</td>
                    </tr>
                  ))}
                  <tr className="total-row">
                    <td>Total</td>
                    <td>{currentData.total.max}</td>
                    <td>{currentData.total.obtained}</td>
                    <td className="percentage-col">{currentData.total.percentage}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
