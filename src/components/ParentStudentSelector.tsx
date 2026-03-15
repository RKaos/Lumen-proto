"use client";

import { useState } from 'react';

export default function ParentStudentSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(0);

  const students = [
    {
      id: 0,
      name: "Alex Johnson",
      class: "10-A",
      avatar: "AJ",
      attendance: "93%",
      pending: "1 PENDING",
      badgeVal: "1",
      avatarBg: "#DBEAFE",
      avatarColor: "#1E40AF"
    },
    {
      id: 1,
      name: "Emma Johnson",
      class: "8-B",
      avatar: "EJ",
      attendance: "96%",
      pending: "",
      badgeVal: "",
      avatarBg: "#EDE9FE", // Light purple
      avatarColor: "#5B21B6"
    }
  ];

  const current = students[selectedStudent];

  return (
    <div style={{ position: 'relative', width: '100%', zIndex: 100 }}>
      {/* Top Panel (Trigger) */}
      <div 
        className="info-panel" 
        style={{ 
          padding: '1.25rem 1.5rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '1rem',
          cursor: 'pointer',
          borderBottomLeftRadius: isOpen ? '0px' : '15px',
          borderBottomRightRadius: isOpen ? '0px' : '15px',
          transition: 'border-radius 0s'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            backgroundColor: current.avatarBg,
            color: current.avatarColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '1rem'
          }}>
            {current.avatar}
          </div>
          <div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1E3A8A', margin: '0 0 0.15rem 0' }}>{current.name}</h2>
            <p style={{ fontSize: '0.8rem', color: '#6B7280', margin: 0, fontWeight: 500 }}>{current.class}</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{
            backgroundColor: '#DCFCE7',
            color: '#166534',
            padding: '0.25rem 0.6rem',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: 600
          }}>
            {current.attendance}
          </span>
          {current.pending && (
            <span style={{
              backgroundColor: '#FEF3C7',
              color: '#D97706',
              padding: '0.25rem 0.6rem',
              borderRadius: '12px',
              fontSize: '0.75rem',
              fontWeight: 600
            }}>
              {current.pending}
            </span>
          )}
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#6B7280" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            style={{ 
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s'
            }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="info-panel" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
          padding: '0.5rem 1.5rem 1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          backgroundColor: '#F8FAFC' // Slightly lighter background for overlay context
        }}>
          {students.map((student) => (
            <div 
              key={student.id}
              onClick={() => {
                setSelectedStudent(student.id);
                setIsOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 0',
                cursor: 'pointer',
                borderBottom: student.id === 0 ? '1px solid #F1F5F9' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: student.avatarBg,
                  color: student.avatarColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: '0.85rem'
                }}>
                  {student.avatar}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1E3A8A', margin: 0 }}>{student.name}</h4>
                  <p style={{ fontSize: '0.7rem', color: '#6B7280', margin: 0 }}>{student.class}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  backgroundColor: '#DCFCE7',
                  color: '#166534',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '12px',
                  fontSize: '0.7rem',
                  fontWeight: 600
                }}>
                  {student.attendance}
                </span>
                {student.badgeVal && (
                  <span style={{
                    backgroundColor: '#FEF3C7',
                    color: '#D97706',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    fontWeight: 700
                  }}>
                    {student.badgeVal}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
