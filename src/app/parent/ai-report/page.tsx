"use client";

import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';
import ParentStudentSelector from '@/components/ParentStudentSelector';

export default function AIReportPage() {
  return (
    <div className="dashboard-layout">
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Top Student Profile Card (Dropdown) */}
          <ParentStudentSelector />

          <SubNav />

          {/* AI Performance Report Card */}
          <div className="info-panel" style={{ 
            padding: '2.5rem', 
            borderLeft: '4px solid #F59E0B', // Yellow/Orange accent border from screenshot
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div>
              <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1E3A8A', margin: '0 0 0.25rem 0' }}>AI Performance Report</h1>
              <p style={{ fontSize: '0.8rem', color: '#6B7280', margin: 0 }}>Last updated: March 10, 2026</p>
            </div>

            {/* Summary Section */}
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1E3A8A', marginBottom: '0.75rem' }}>Summary</h3>
              <p style={{ fontSize: '0.9rem', color: '#4B5563', lineHeight: '1.6', margin: 0 }}>
                Alex Johnson has demonstrated consistent academic performance throughout the semester with strong participation in class activities. 
                The student shows particular strength in analytical problem-solving and collaborative learning. Overall attendance stands at an excellent 92%, 
                with strong engagement across all subjects.
              </p>
            </div>

            {/* Strengths Section */}
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1E3A8A', marginBottom: '0.75rem' }}>Strengths</h3>
              <ul style={{ 
                listStyleType: 'none', 
                padding: 0, 
                margin: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.6rem' 
              }}>
                {[
                  "Excellent performance in Mathematics and Computer Science",
                  "Strong analytical and problem-solving abilities",
                  "Consistent assignment submission and quality work",
                  "Active participation in class discussions",
                  "Good collaboration skills with peers"
                ].map((strength, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#4B5563' }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#10B981', // Green dot
                      borderRadius: '50%'
                    }} />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas for Improvement Section */}
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1E4085', marginBottom: '0.75rem' }}>Areas for Improvement</h3>
              <ul style={{ 
                listStyleType: 'none', 
                padding: 0, 
                margin: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.6rem' 
              }}>
                {[
                  "History attendance needs attention (currently at 71%)",
                  "Could benefit from additional practice with complex word problems",
                  "Time management during examinations could be enhanced"
                ].map((area, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#4B5563' }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#F59E0B', // Amber dot
                      borderRadius: '50%'
                    }} />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations Section */}
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1E4085', marginBottom: '0.75rem' }}>Recommendations</h3>
              <ul style={{ 
                listStyleType: 'none', 
                padding: 0, 
                margin: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.6rem' 
              }}>
                {[
                  "Continue current study patterns while focusing on identified areas",
                  "Ensure regular attendance in History classes",
                  "Consider joining the advanced mathematics study group",
                  "Practice time-bound problem solving at home"
                ].map((rec, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#4B5563' }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#1E3A8A', // Blue dot
                      borderRadius: '50%'
                    }} />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Overall Assessment Banner */}
            <div style={{
              backgroundColor: '#EFF6FF',
              padding: '1rem 1.25rem',
              borderRadius: '10px',
              marginTop: '0.5rem'
            }}>
              <p style={{ fontSize: '0.85rem', color: '#1E3A8A', lineHeight: '1.5', margin: 0 }}>
                <strong style={{ fontWeight: 700 }}>Overall Assessment:</strong> Alex is a dedicated student with strong potential for academic excellence. With continued effort and focus on the identified areas for improvement, the student is well-positioned for success in higher-level courses.
              </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
