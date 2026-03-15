"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';
import ParentStudentSelector from '@/components/ParentStudentSelector';

export default function TeacherChatPage() {
  const [activeChat, setActiveChat] = useState(0);
  const [messageText, setMessageText] = useState("");

  const teachers = [
    {
      id: 0,
      name: "Dr. Sarah Mitchell",
      subject: "Mathematics",
      avatar: "DS",
      lastMessage: "Additional practice would be beneficial.",
      time: "10:30 AM",
      messages: [
        { text: "Good morning! How is Alex performing in mathematics?", sender: "parent", time: "10:15 AM" },
        { text: "Good morning! Alex has shown significant improvement this month.", sender: "teacher", time: "10:20 AM" },
        { text: "That's wonderful to hear! Are there any areas we should focus on at home?", sender: "parent", time: "10:28 AM" },
        { text: "Additional practice with word problems would be beneficial.", sender: "teacher", time: "10:30 AM" }
      ]
    },
    {
      id: 1,
      name: "Prof. James Anderson",
      subject: "Physics",
      avatar: "PJ",
      lastMessage: "Great improvement this week!",
      time: "Yesterday",
      messages: []
    },
    {
      id: 2,
      name: "Ms. Emily Roberts",
      subject: "Chemistry",
      avatar: "ME",
      lastMessage: "Lab report submitted on time.",
      time: "2 days ago",
      messages: []
    },
    {
      id: 3,
      name: "Mr. David Lee",
      subject: "English",
      avatar: "MD",
      lastMessage: "Essay writing skills improving.",
      time: "3 days ago",
      messages: []
    }
  ];

  const currentChat = teachers[activeChat];

  return (
    <div className="dashboard-layout">
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Top Student Profile Card (Dropdown) */}
          <ParentStudentSelector />

          <SubNav />

          {/* Chat Container Interface */}
          <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
            
            {/* Left Sidebar (Teacher List) */}
            <div className="info-panel" style={{ width: '320px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Search Bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#F3F4F6',
                padding: '0.6rem 0.75rem',
                borderRadius: '10px',
                marginBottom: '0.25rem'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input 
                  type="text" 
                  placeholder="Search teachers..." 
                  style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.85rem', color: '#374151', width: '100%' }}
                />
              </div>

              {/* Teacher Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {teachers.map((teacher) => (
                  <div 
                    key={teacher.id}
                    onClick={() => setActiveChat(teacher.id)}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      backgroundColor: activeChat === teacher.id ? '#EFF6FF' : 'transparent', // Light blue highlight
                      border: activeChat === teacher.id ? '1px solid #DBEAFE' : '1px solid transparent',
                      transition: 'background-color 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#E0E7FF',
                        color: '#3730A3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 600,
                        fontSize: '0.85rem'
                      }}>
                        {teacher.avatar}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', margin: 0 }}>{teacher.name}</h4>
                        <p style={{ fontSize: '0.7rem', color: '#6B7280', margin: '0 0 0.15rem 0' }}>{teacher.subject}</p>
                        <p style={{ fontSize: '0.65rem', color: '#9CA3AF', margin: 0, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          {teacher.lastMessage}
                        </p>
                      </div>
                      <span style={{ fontSize: '0.65rem', color: '#9CA3AF', alignSelf: 'flex-start', paddingTop: '0.2rem' }}>{teacher.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Chat Window */}
            <div className="info-panel" style={{ flex: 1, padding: 0, display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <div style={{ 
                padding: '1rem 1.5rem', 
                borderBottom: '1px solid #E5E7EB', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem' 
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#E0E7FF',
                  color: '#3730A3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: '0.8rem'
                }}>
                  {currentChat.avatar}
                </div>
                <div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827', margin: 0 }}>{currentChat.name}</h3>
                  <p style={{ fontSize: '0.7rem', color: '#6B7280', margin: 0 }}>{currentChat.subject} Teacher</p>
                </div>
              </div>

              {/* Messages Area */}
              <div style={{ 
                flex: 1, 
                padding: '1.5rem', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem',
                height: '350px', // Min height for standard look
                overflowY: 'auto'
              }}>
                {currentChat.messages.length > 0 ? (
                  currentChat.messages.map((msg, idx) => {
                    const isParent = msg.sender === 'parent';
                    return (
                      <div 
                        key={idx} 
                        style={{ 
                          alignSelf: isParent ? 'flex-end' : 'flex-start',
                          maxWidth: '70%'
                        }}
                      >
                        <div style={{
                          backgroundColor: isParent ? '#1E3A8A' : '#F3F4F6', // Dark blue vs Light Grey
                          color: isParent ? '#FFFFFF' : '#1F2937',
                          padding: '0.75rem 1rem',
                          borderRadius: '12px',
                          borderBottomRightRadius: isParent ? '2px' : '12px',
                          borderBottomLeftRadius: isParent ? '12px' : '2px',
                          fontSize: '0.85rem',
                          lineHeight: '1.4'
                        }}>
                          {msg.text}
                        </div>
                        <span style={{ 
                          fontSize: '0.65rem', 
                          color: '#9CA3AF', 
                          marginTop: '0.25rem', 
                          display: 'block',
                          textAlign: isParent ? 'right' : 'left'
                        }}>
                          {msg.time}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div style={{ margin: 'auto', color: '#9CA3AF', fontSize: '0.85rem' }}>No messages yet</div>
                )}
              </div>

              {/* Input Footer */}
              <div style={{ 
                padding: '0.75rem 1.25rem', 
                borderTop: '1px solid #E5E7EB', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem' 
              }}>
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  style={{ 
                    flex: 1, 
                    border: 'none', 
                    backgroundColor: '#F3F4F6', 
                    padding: '0.6rem 1rem', 
                    borderRadius: '8px', 
                    outline: 'none', 
                    fontSize: '0.85rem', 
                    color: '#374151' 
                  }}
                />
                <button style={{
                  backgroundColor: '#1E3A8A', // Dark Blue button from screenshot
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
