"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function AdminAnnouncementsPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [recipients, setRecipients] = useState<Record<string, boolean>>({
    students: false,
    teachers: false,
    parents: false,
  });
  const [priority, setPriority] = useState('normal');
  const [sent, setSent] = useState(false);

  const pastAnnouncements = [
    { id: 1, title: 'Annual Sports Day — March 28', content: 'All students are expected to participate in the Annual Sports Day. Events include track & field, basketball, and cricket.', date: 'Mar 22, 2025', recipients: ['Students', 'Parents', 'Teachers'], priority: 'high' },
    { id: 2, title: 'Parent-Teacher Meeting', content: 'PTM scheduled for April 5. Parents are requested to attend between 10 AM – 1 PM.', date: 'Mar 20, 2025', recipients: ['Parents', 'Teachers'], priority: 'normal' },
    { id: 3, title: 'Holiday Notice — Holi Festival', content: 'School will remain closed on March 14 on account of Holi. Classes resume March 15.', date: 'Mar 12, 2025', recipients: ['Students', 'Parents', 'Teachers'], priority: 'normal' },
    { id: 4, title: 'Fee Reminder — Q4 Due', content: 'Quarterly fees for Q4 are due by March 31. Late fees will apply after the deadline.', date: 'Mar 10, 2025', recipients: ['Parents'], priority: 'high' },
    { id: 5, title: 'Science Exhibition', content: 'Students from Grade 8-10 are invited to showcase their science projects on April 12.', date: 'Mar 8, 2025', recipients: ['Students', 'Teachers'], priority: 'normal' },
  ];

  const toggleRecipient = (key: string) => {
    setRecipients(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSend = () => {
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setTitle('');
      setContent('');
      setRecipients({ students: false, teachers: false, parents: false });
      setPriority('normal');
    }, 2000);
  };

  const selectedCount = Object.values(recipients).filter(Boolean).length;

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      <main className="main-content">
        <div className="dashboard-container">

          <div className="admin-header-card">
            <div>
              <h1>Announcements</h1>
              <p>Create and broadcast announcements to students, teachers, and parents</p>
            </div>
          </div>

          {/* Compose Announcement */}
          <div className="admin-form-section">
            <h2>📢 Compose New Announcement</h2>

            <div className="admin-form-grid">
              <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                <label>Title</label>
                <input
                  type="text"
                  placeholder="Enter announcement title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                <label>Message</label>
                <textarea
                  placeholder="Write the announcement content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{ minHeight: '120px' }}
                />
              </div>

              <div className="admin-form-group">
                <label>Attach Image (optional)</label>
                <div style={{
                  border: '2px dashed #e2e8f0',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: '#f8fafc',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 0.5rem' }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <p style={{ fontSize: '0.8125rem', color: '#64748b', margin: 0 }}>Click to upload image</p>
                </div>
              </div>

              <div className="admin-form-group">
                <label>Priority</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option value="normal">Normal</option>
                  <option value="high">High Priority</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
            </div>

            {/* Recipients */}
            <div style={{ marginTop: '1.5rem' }}>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '0.75rem' }}>
                Send To
              </label>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {(['students', 'teachers', 'parents'] as const).map(role => (
                  <button
                    key={role}
                    onClick={() => toggleRecipient(role)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.25rem',
                      borderRadius: '10px',
                      border: recipients[role] ? '2px solid #1a365d' : '2px solid #e2e8f0',
                      backgroundColor: recipients[role] ? '#eff6ff' : '#ffffff',
                      color: recipients[role] ? '#1a365d' : '#64748b',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontFamily: 'inherit',
                    }}
                  >
                    <span style={{
                      width: '20px', height: '20px', borderRadius: '4px',
                      border: recipients[role] ? '2px solid #1a365d' : '2px solid #cbd5e1',
                      backgroundColor: recipients[role] ? '#1a365d' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'white', fontSize: '0.75rem'
                    }}>
                      {recipients[role] && '✓'}
                    </span>
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Send Button */}
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button className="admin-btn secondary">Save Draft</button>
              <button
                className="admin-btn primary"
                style={{
                  padding: '0.75rem 2rem',
                  opacity: (title && content && selectedCount > 0) ? 1 : 0.5,
                  backgroundColor: sent ? '#10B981' : undefined,
                }}
                disabled={!title || !content || selectedCount === 0}
                onClick={handleSend}
              >
                {sent ? '✓ Announcement Sent!' : `Send to ${selectedCount} group${selectedCount !== 1 ? 's' : ''}`}
              </button>
            </div>
          </div>

          {/* Past Announcements */}
          <div className="info-panel">
            <h2 className="info-panel-title">Past Announcements</h2>
            {pastAnnouncements.map((ann) => (
              <div key={ann.id} className="info-row" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>{ann.title}</span>
                    {ann.priority === 'high' && (
                      <span style={{
                        backgroundColor: '#fee2e2', color: '#ef4444',
                        padding: '0.125rem 0.5rem', borderRadius: '999px',
                        fontSize: '0.6875rem', fontWeight: 600
                      }}>HIGH</span>
                    )}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{ann.date}</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>{ann.content}</p>
                <div style={{ display: 'flex', gap: '0.375rem' }}>
                  {ann.recipients.map(r => (
                    <span key={r} style={{
                      backgroundColor: '#f1f5f9', padding: '0.125rem 0.5rem',
                      borderRadius: '4px', fontSize: '0.6875rem', fontWeight: 600, color: '#64748b'
                    }}>{r}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
