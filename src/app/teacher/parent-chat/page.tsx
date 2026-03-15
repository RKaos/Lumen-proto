"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function TeacherParentChatPage() {
  const [selectedChatId, setSelectedChatId] = useState("sarah");
  const [newMessage, setNewMessage] = useState("");

  const [chats, setChats] = useState([
    {
      id: "sarah",
      parentName: "Sarah Johnson",
      studentName: "Alex Johnson",
      initials: "SJ",
      unread: 2,
      lastMsg: "Thank you for the update!",
      time: "10:30 AM",
      messages: [
        { id: 1, text: "Good morning! I wanted to update you on Alex's recent progress.", sender: "teacher", time: "10:15 AM" },
        { id: 2, text: "Alex has shown significant improvement in mathematics this month.", sender: "teacher", time: "10:16 AM" },
        { id: 3, text: "That's wonderful to hear! Thank you for keeping me informed.", sender: "parent", time: "10:28 AM" },
        { id: 4, text: "Are there any areas we should focus on at home?", sender: "parent", time: "10:29 AM" },
        { id: 5, text: "Additional practice with word problems would be beneficial.", sender: "teacher", time: "10:30 AM" }
      ]
    },
    {
      id: "robert",
      parentName: "Robert Davis",
      studentName: "Emma Davis",
      initials: "RD",
      unread: 0,
      lastMsg: "I'll discuss with Emma",
      time: "Yesterday",
      messages: [
        { id: 1, text: "Hello Mr. Davis, just touching base regarding Emma.", sender: "teacher", time: "Yesterday" },
        { id: 2, text: "She doing well but seems tired in morning classes.", sender: "teacher", time: "Yesterday" },
        { id: 3, text: "I'll discuss with Emma. Thanks.", sender: "parent", time: "Yesterday" }
      ]
    },
    {
      id: "linda",
      parentName: "Linda Chen",
      studentName: "Michael Chen",
      initials: "LC",
      unread: 1,
      lastMsg: "Noted. Will follow up.",
      time: "2 days ago",
      messages: [
        { id: 1, text: "Hi Linda, Michael did great in the quiz today.", sender: "teacher", time: "2 days ago" },
        { id: 2, text: "Noted. Will follow up.", sender: "parent", time: "2 days ago" }
      ]
    },
    {
      id: "james",
      parentName: "James Williams",
      studentName: "Sophia Williams",
      initials: "JW",
      unread: 0,
      lastMsg: "Great to hear!",
      time: "3 days ago",
      messages: [
        { id: 1, text: "Sophia's project was excellent.", sender: "teacher", time: "3 days ago" },
        { id: 2, text: "Great to hear!", sender: "parent", time: "3 days ago" }
      ]
    }
  ]);

  const activeChat = chats.find(c => c.id === selectedChatId) || chats[0];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setChats(prev => prev.map(chat => {
      if (chat.id === selectedChatId) {
        return {
          ...chat,
          lastMsg: newMessage,
          time: timestamp,
          messages: [
            ...chat.messages,
            { id: Date.now(), text: newMessage, sender: "teacher", time: timestamp }
          ]
        };
      }
      return chat;
    }));

    setNewMessage("");
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', height: 'calc(100vh - 120px)', alignItems: 'stretch', width: '100%' }}>
          
          {/* Left Sidebar: Chat List */}
          <div style={{ flex: '1', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
            
            {/* Search Bar */}
            <div className="info-panel" style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Search parents..." 
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  fontSize: '0.9rem',
                  color: '#4B5563',
                  width: '100%'
                }}
              />
            </div>

            {/* Chats List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto', flex: 1 }}>
              {chats.map(chat => {
                const isActive = chat.id === selectedChatId;
                
                return (
                  <div 
                    key={chat.id}
                    onClick={() => setSelectedChatId(chat.id)}
                    className="info-panel"
                    style={{
                      padding: '1rem',
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'center',
                      cursor: 'pointer',
                      backgroundColor: isActive ? '#EFF6FF' : '#FFFFFF',
                      borderColor: isActive ? '#3B82F6' : 'transparent',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      transition: 'background-color 0.2s',
                    }}
                  >
                    {/* Initials Avatar */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#DBEAFE',
                      color: '#1E40AF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600,
                      fontSize: '0.85rem'
                    }}>
                      {chat.initials}
                    </div>

                    {/* Chat Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111827', margin: 0 }}>{chat.parentName}</h4>
                        {chat.unread > 0 && (
                          <span style={{
                            backgroundColor: '#FEF3C7',
                            color: '#D97706',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            padding: '0.1rem 0.4rem',
                            borderRadius: '10px'
                          }}>
                            {chat.unread}
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: '0 0 0.15rem 0' }}>{chat.studentName}</p>
                      <p style={{ 
                        fontSize: '0.8rem', 
                        color: isActive ? '#1E3A8A' : '#4B5563', 
                        margin: 0,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {chat.lastMsg}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Area: Chat Window */}
          <div className="info-panel" style={{ flex: '2', display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden', height: '100%' }}>
            
            {/* Header */}
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#DBEAFE',
                color: '#1E40AF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600
              }}>
                {activeChat.initials}
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#111827', margin: 0 }}>{activeChat.parentName}</h3>
                <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: 0 }}>Parent of {activeChat.studentName}</p>
              </div>
            </div>

            {/* Message History */}
            <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {activeChat.messages.map(msg => {
                const isTeacher = msg.sender === 'teacher';
                
                return (
                  <div key={msg.id} style={{ alignSelf: isTeacher ? 'flex-end' : 'flex-start', maxWidth: '70%' }}>
                    <div style={{
                      backgroundColor: isTeacher ? '#1E3A5F' : '#F3F4F6', // Dark blue vs grey
                      color: isTeacher ? '#FFFFFF' : '#111827',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      borderTopRightRadius: isTeacher ? '2px' : '12px',
                      borderTopLeftRadius: isTeacher ? '12px' : '2px',
                      fontSize: '0.9rem',
                      lineHeight: '1.4'
                    }}>
                      {msg.text}
                    </div>
                    <div style={{ 
                      fontSize: '0.7rem', 
                      color: '#6B7280', 
                      textAlign: isTeacher ? 'right' : 'left',
                      marginTop: '0.25rem' 
                    }}>
                      {msg.time}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input Bar */}
            <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #E5E7EB', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <input 
                type="text" 
                placeholder="Type your message..." 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                style={{
                  flex: 1,
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #E5E7EB',
                  backgroundColor: '#F9FAFB',
                  fontSize: '0.9rem',
                  color: '#111827',
                  outline: 'none'
                }}
              />
              <button 
                onClick={handleSendMessage}
                style={{
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: '#1E3A5F',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
