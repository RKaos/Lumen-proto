"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function TeacherAIAssistantPage() {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);
  const [displayedStudentName, setDisplayedStudentName] = useState("");

  const students = [
    { id: "2024-ST-1234", name: "Alex Johnson" },
    { id: "2024-ST-1235", name: "Emma Davis" },
    { id: "2024-ST-1236", name: "Michael Chen" },
    { id: "2024-ST-1237", name: "Sophia Williams" },
    { id: "2024-ST-1238", name: "James Brown" }
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setReportGenerated(false);
    
    // Cache the name so it doesn't change on simply changing select dropdown
    const studentName = students.find(s => s.id === selectedStudent)?.name || "";
    setDisplayedStudentName(studentName);

    setTimeout(() => {
      setIsGenerating(false);
      setReportGenerated(true);
    }, 1000); 
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-container">
          
          {/* AI Report Card */}
          <div className="info-panel" style={{ padding: '2rem' }}>
            
            {/* Header with Icon */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ 
                backgroundColor: '#EFF6FF', 
                color: '#1E40AF', 
                padding: '0.75rem', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', margin: '0 0 0.25rem 0' }}>AI Performance Report Generator</h2>
                <p style={{ fontSize: '0.85rem', color: '#6B7280', margin: 0 }}>Generate detailed student performance reports</p>
              </div>
            </div>

            {/* Dropdown Container */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#374151', marginBottom: '0.75rem' }}>
                Select Student
              </label>
              <div style={{ position: 'relative' }}>
                <select 
                  value={selectedStudent} 
                  onChange={(e) => setSelectedStudent(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #E5E7EB',
                    backgroundColor: '#F3F4F6', 
                    color: '#4B5563',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 1rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    cursor: 'pointer'
                  }}
                >
                  <option value="" disabled>Choose a student...</option>
                  {students.map(s => (
                    <option key={s.id} value={s.id}>{s.name} - {s.id}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Generate Button */}
            <button 
              disabled={!selectedStudent || isGenerating}
              onClick={handleGenerate}
              style={{
                width: '100%',
                padding: '0.875rem',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: selectedStudent ? '#F59E0B' : '#E5E7EB', // Fuller Amber from screenshot
                color: selectedStudent ? '#FFFFFF' : '#9CA3AF', 
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: selectedStudent && !isGenerating ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.2s',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              }}
              onMouseOver={(e) => {
                if (selectedStudent && !isGenerating) e.currentTarget.style.backgroundColor = '#D97706';
              }}
              onMouseOut={(e) => {
                if (selectedStudent && !isGenerating) e.currentTarget.style.backgroundColor = '#F59E0B';
              }}
            >
              {isGenerating ? "Generating..." : "Generate Report"}
            </button>

          </div>

          {/* Generated Report View */}
          {reportGenerated && (
            <div className="info-panel" style={{ padding: '2rem', marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#4B5563', margin: 0 }}>Generated Report</h3>
                <button style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.4rem', 
                  padding: '0.5rem 0.8rem', 
                  borderRadius: '6px', 
                  border: '1px solid #E5E7EB', 
                  backgroundColor: '#EFF6FF', 
                  color: '#1E40AF', 
                  fontSize: '0.85rem', 
                  fontWeight: 600,
                  cursor: 'pointer' 
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1"></path></svg>
                  Copy
                </button>
              </div>

              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1E3A8A', marginBottom: '1.25rem', fontFamily: 'serif' }}>
                Student Performance Report: {displayedStudentName}
              </h2>

              {/* Summary */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E3A8A', marginBottom: '0.5rem' }}>Summary</h4>
                <p style={{ fontSize: '0.9rem', color: '#1F2937', margin: 0, lineHeight: '1.6' }}>
                  {displayedStudentName} has demonstrated consistent academic performance throughout the semester with strong participation in class activities. The student shows particular strength in analytical problem-solving and collaborative learning.
                </p>
              </div>

              {/* Strengths */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E3A8A', marginBottom: '0.5rem' }}>Strengths</h4>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#1F2937', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  <li>Excellent attendance record (92%)</li>
                  <li>Strong performance in assignments and assessments</li>
                  <li>Active participation in class discussions</li>
                  <li>Good grasp of fundamental mathematical concepts</li>
                  <li>Demonstrates critical thinking skills</li>
                </ul>
              </div>

              {/* Areas for Improvement */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E3A8A', marginBottom: '0.5rem' }}>Areas for Improvement</h4>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#1F2937', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  <li>Could benefit from additional practice with complex word problems</li>
                  <li>Time management during examinations could be enhanced</li>
                  <li>Encourage more peer collaboration during group projects</li>
                </ul>
              </div>

              {/* Recommendations */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E3A8A', marginBottom: '0.5rem' }}>Recommendations</h4>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#1F2937', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  <li>Continue current study patterns while focusing on identified areas</li>
                  <li>Consider joining the advanced mathematics study group</li>
                  <li>Participate in upcoming math competition for additional challenge</li>
                  <li>Schedule office hours for personalized guidance on challenging topics</li>
                </ul>
              </div>

              {/* Overall Assessment */}
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E3A8A', marginBottom: '0.5rem' }}>Overall Assessment</h4>
                <p style={{ fontSize: '0.9rem', color: '#1F2937', margin: 0, lineHeight: '1.6' }}>
                  {displayedStudentName} is a dedicated student with strong potential for academic excellence. With continued effort and focus on the identified areas for improvement, the student is well-positioned for success in higher-level mathematics courses.
                </p>
              </div>

            </div>
          )}

        </div>
      </main>
    </div>
  );
}
