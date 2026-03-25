"use client";

import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function AdminDashboardPage() {
  const activities = [
    { text: 'Teacher Smith marked attendance for Class 10-A', time: '2 min ago', color: 'blue' },
    { text: 'Student ID 402 (Emma Davis) paid fees — ₹12,500', time: '15 min ago', color: 'green' },
    { text: 'New student registered: Michael Chen (Grade 9-B)', time: '32 min ago', color: 'blue' },
    { text: 'Notice posted: "Annual Sports Day — March 28"', time: '1 hr ago', color: 'orange' },
    { text: 'Teacher Dr. Kumar submitted marks for Class 10-B Math', time: '1 hr ago', color: 'blue' },
    { text: 'Fee invoice generated for Grade 8 (45 students)', time: '2 hrs ago', color: 'green' },
    { text: 'Parent Mrs. Wilson requested meeting with class teacher', time: '2 hrs ago', color: 'orange' },
    { text: 'Student ID 389 marked absent — medical leave submitted', time: '3 hrs ago', color: 'red' },
    { text: 'Timetable updated for Class 9-A (Period 3 swap)', time: '3 hrs ago', color: 'blue' },
    { text: 'System backup completed successfully', time: '5 hrs ago', color: 'green' },
  ];

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      <main className="main-content">
        <div className="dashboard-container">

          {/* Admin Header */}
          <div className="admin-header-card">
            <div>
              <h1>Admin Dashboard</h1>
              <p>Welcome back, Administrator — here&apos;s your school overview</p>
            </div>
            <div style={{ fontSize: '0.8125rem', opacity: 0.7 }}>
              Academic Year 2025–2026
            </div>
          </div>

          {/* Metric Cards */}
          <div className="stats-grid-4">
            <div className="stat-card">
              <div className="stat-icon info">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-value primary">1,248</span>
                <span className="stat-label">Total Students</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon success">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-value success">64</span>
                <span className="stat-label">Total Teachers</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon info">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-value primary">92.4%</span>
                <span className="stat-label">Daily Attendance</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon warning">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-value warning">₹18.2L</span>
                <span className="stat-label">Monthly Revenue</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <button className="quick-action-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
              Register New Student
            </button>

            <button className="quick-action-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              Issue Notice
            </button>

            <button className="quick-action-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              Generate Fee Invoice
            </button>
          </div>

          {/* Activity Feed */}
          <div className="activity-feed">
            <h2 className="activity-feed-title">Recent Activity</h2>
            {activities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className={`activity-dot ${activity.color}`}></div>
                <div>
                  <div className="activity-text">{activity.text}</div>
                  <div className="activity-time">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
