"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function TeacherMarksPage() {
  const [selectedClass, setSelectedClass] = useState("Class 9-A");

  const [marksData, setMarksData] = useState([
    { id: "2024-ST-1234", name: "Alex Johnson", quiz: 18, midterm: 38, final: 85 },
    { id: "2024-ST-1235", name: "Emma Davis", quiz: 19, midterm: 40, final: 88 },
    { id: "2024-ST-1236", name: "Michael Chen", quiz: 16, midterm: 35, final: 80 },
    { id: "2024-ST-1237", name: "Sophia Williams", quiz: 17, midterm: 36, final: 82 },
    { id: "2024-ST-1238", name: "James Brown", quiz: 15, midterm: 32, final: 75 }
  ]);

  const handleUpdate = (id: string, field: 'quiz' | 'midterm' | 'final', value: string) => {
    const numValue = value === '' ? 0 : parseInt(value, 10);
    setMarksData(prev => prev.map(student => {
      if (student.id === id) {
        return { ...student, [field]: numValue };
      }
      return student;
    }));
  };

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

          {/* Marks Table Card */}
          <div className="info-panel" style={{ padding: '0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #1E3A5F' }}>
                  <th style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: '#1E3A5F', fontWeight: 600 }}>Student</th>
                  <th style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: '#1E3A5F', fontWeight: 600 }}>Roll No</th>
                  <th style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: '#1E3A5F', fontWeight: 600 }}>Quiz (20)</th>
                  <th style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: '#1E3A5F', fontWeight: 600 }}>Midterm (40)</th>
                  <th style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: '#1E3A5F', fontWeight: 600 }}>Final (100)</th>
                  <th style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: '#1E3A5F', fontWeight: 600 }}>Total (160)</th>
                  <th style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: '#1E3A5F', fontWeight: 600 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {marksData.map(student => {
                  const total = student.quiz + student.midterm + student.final;
                  
                  return (
                    <tr key={student.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                      <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#111827' }}>{student.name}</td>
                      <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.85rem', color: '#6B7280' }}>{student.id}</td>
                      
                      <td style={{ padding: '1.25rem 1.5rem' }}>
                        <input 
                          type="text" 
                          value={student.quiz} 
                          onChange={(e) => handleUpdate(student.id, 'quiz', e.target.value)}
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            padding: '0.25rem',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: '#F3F4F6',
                            color: '#111827',
                            fontWeight: 500,
                            fontSize: '0.875rem'
                          }}
                        />
                      </td>

                      <td style={{ padding: '1.25rem 1.5rem' }}>
                        <input 
                          type="text" 
                          value={student.midterm} 
                          onChange={(e) => handleUpdate(student.id, 'midterm', e.target.value)}
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            padding: '0.25rem',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: '#F3F4F6',
                            color: '#111827',
                            fontWeight: 500,
                            fontSize: '0.875rem'
                          }}
                        />
                      </td>

                      <td style={{ padding: '1.25rem 1.5rem' }}>
                        <input 
                          type="text" 
                          value={student.final} 
                          onChange={(e) => handleUpdate(student.id, 'final', e.target.value)}
                          style={{
                            width: '40px',
                            textAlign: 'center',
                            padding: '0.25rem',
                            borderRadius: '4px',
                            border: 'none',
                            backgroundColor: '#F3F4F6',
                            color: '#111827',
                            fontWeight: 500,
                            fontSize: '0.875rem'
                          }}
                        />
                      </td>

                      <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.9rem', fontWeight: 700, color: '#1E3A5F' }}>
                        {total}
                      </td>

                      <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.85rem', color: '#10B981', fontWeight: 600 }}>
                        {total >= 80 ? 'Passed' : 'Failed'}
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
