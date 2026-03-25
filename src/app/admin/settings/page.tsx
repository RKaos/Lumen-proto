"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function AdminSettingsPage() {
  const [schoolName, setSchoolName] = useState('Lumen School');
  const [address, setAddress] = useState('42 Academy Road, Sector 15, New Delhi — 110001');
  const [phone, setPhone] = useState('+91 11 2345 6789');
  const [email, setEmail] = useState('admin@lumen.edu');
  const [website, setWebsite] = useState('www.lumen.edu');
  const [smsProvider, setSmsProvider] = useState('twilio');
  const [smsApiKey, setSmsApiKey] = useState('sk-••••••••••••••••');
  const [emailProvider, setEmailProvider] = useState('sendgrid');
  const [emailApiKey, setEmailApiKey] = useState('SG.••••••••••••••••');
  const [activeSession, setActiveSession] = useState('2025-2026');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      <main className="main-content">
        <div className="dashboard-container">

          <div className="admin-header-card">
            <div>
              <h1>System Settings</h1>
              <p>Configure school identity, communications, and academic sessions</p>
            </div>
          </div>

          {/* School Identity */}
          <div className="admin-form-section">
            <h2>School Identity</h2>
            <div className="admin-form-grid">
              <div className="admin-form-group">
                <label>School Name</label>
                <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>Phone Number</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>Website</label>
                <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>
              <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                <label>Address</label>
                <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>School Logo</label>
                <div style={{
                  border: '2px dashed #e2e8f0',
                  borderRadius: '8px',
                  padding: '2rem',
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: '#f8fafc',
                  transition: 'border-color 0.2s',
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 0.5rem' }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <p style={{ fontSize: '0.8125rem', color: '#64748b' }}>Click to upload logo</p>
                  <p style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>PNG, JPG up to 2MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Communication Gateway */}
          <div className="admin-form-section">
            <h2>Communication Gateway</h2>
            <div className="admin-form-grid">
              <div className="admin-form-group">
                <label>SMS Provider</label>
                <select value={smsProvider} onChange={(e) => setSmsProvider(e.target.value)}>
                  <option value="twilio">Twilio</option>
                  <option value="msg91">MSG91</option>
                  <option value="textlocal">TextLocal</option>
                </select>
              </div>
              <div className="admin-form-group">
                <label>SMS API Key</label>
                <input type="password" value={smsApiKey} onChange={(e) => setSmsApiKey(e.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>Email Provider</label>
                <select value={emailProvider} onChange={(e) => setEmailProvider(e.target.value)}>
                  <option value="sendgrid">SendGrid</option>
                  <option value="mailgun">Mailgun</option>
                  <option value="ses">Amazon SES</option>
                </select>
              </div>
              <div className="admin-form-group">
                <label>Email API Key</label>
                <input type="password" value={emailApiKey} onChange={(e) => setEmailApiKey(e.target.value)} />
              </div>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <button className="admin-btn secondary">Send Test SMS</button>
              <button className="admin-btn secondary" style={{ marginLeft: '0.5rem' }}>Send Test Email</button>
            </div>
          </div>

          {/* Session Management */}
          <div className="admin-form-section">
            <h2>Session Management</h2>
            <div className="admin-form-grid">
              <div className="admin-form-group">
                <label>Active Academic Year</label>
                <select value={activeSession} onChange={(e) => setActiveSession(e.target.value)}>
                  <option value="2025-2026">2025–2026</option>
                  <option value="2024-2025">2024–2025</option>
                  <option value="2023-2024">2023–2024</option>
                </select>
              </div>
              <div className="admin-form-group">
                <label>Session Status</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 0' }}>
                  <span className="status-badge active">● Active</span>
                  <span style={{ fontSize: '0.8125rem', color: '#64748b' }}>Started April 1, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
            <button className="admin-btn secondary">Cancel</button>
            <button
              className="admin-btn primary"
              style={{
                padding: '0.75rem 2rem',
                backgroundColor: saved ? '#10B981' : undefined,
              }}
              onClick={handleSave}
            >
              {saved ? '✓ Saved!' : 'Save Settings'}
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
