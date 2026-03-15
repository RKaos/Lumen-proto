"use client";

import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';
import ParentStudentSelector from '@/components/ParentStudentSelector';

export default function FeesPage() {
  return (
    <div className="dashboard-layout">
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Top Student Profile Card (Dropdown) */}
          <ParentStudentSelector />

          <SubNav />

          {/* Fee Status Card */}
          <div className="info-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', margin: 0 }}>Fee Status</h3>
              <span style={{
                backgroundColor: '#FEF3C7',
                color: '#D97706',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: 600
              }}>
                PENDING
              </span>
            </div>

            {/* Fees Breakdown Cards */}
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              {/* Total Annual Fees */}
              <div style={{
                flex: 1,
                backgroundColor: '#EFF6FF', // Light Blue
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '0.8rem', color: '#6B7280', fontWeight: 500 }}>Total Annual Fees</span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1E3A8A', margin: 0 }}>₹45,000</h2>
              </div>

              {/* Paid Amount */}
              <div style={{
                flex: 1,
                backgroundColor: '#DCFCE7', // Light Green
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 500 }}>Paid Amount</span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#10B981', margin: 0 }}>₹30,000</h2>
              </div>

              {/* Pending Amount */}
              <div style={{
                flex: 1,
                backgroundColor: '#FEF3C7', // Light Yellow
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <span style={{ fontSize: '0.8rem', color: '#D97706', fontWeight: 500 }}>Pending Amount</span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#D97706', margin: 0 }}>₹15,000</h2>
              </div>
            </div>

            {/* Pay Now Button */}
            <button style={{
              width: '100%',
              backgroundColor: '#F59E0B', // Orange
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '10px',
              padding: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              marginTop: '0.5rem',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#D97706'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#F59E0B'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
              Pay Now - ₹15,000
            </button>

          </div>

          {/* Fee Breakdown Card */}
          <div className="info-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: 0, paddingBottom: '0.25rem' }}>Fee Breakdown</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: "Tuition Fees", amount: "₹35,000" },
                { label: "Laboratory Fees", amount: "₹5,000" },
                { label: "Library Fees", amount: "₹2,000" },
                { label: "Sports & Activities", amount: "₹3,000" }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#4B5563', fontWeight: 500 }}>{item.label}</span>
                  <span style={{ fontSize: '0.85rem', color: '#111827', fontWeight: 600 }}>{item.amount}</span>
                </div>
              ))}
            </div>

            {/* Total Row */}
            <div style={{
              backgroundColor: '#EFF6FF', // Light Blue total bar
              padding: '1rem 1.25rem',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '0.5rem'
            }}>
              <span style={{ fontSize: '0.9rem', color: '#1E3A8A', fontWeight: 700 }}>Total</span>
              <span style={{ fontSize: '1rem', color: '#1E3A8A', fontWeight: 800 }}>₹45,000</span>
            </div>
          </div>

          {/* Payment History Card */}
          <div className="info-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', margin: 0 }}>Payment History</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { term: "Term 1 (2025-26)", status: "PAID", statusBg: "#DCFCE7", statusColor: "#10B981", date: "Paid on: 15 August 2025", amount: "₹15,000", action: true },
                { term: "Term 2 (2025-26)", status: "PAID", statusBg: "#DCFCE7", statusColor: "#10B981", date: "Paid on: 20 November 2025", amount: "₹15,000", action: true },
                { term: "Term 3 (2025-26)", status: "PENDING", statusBg: "#FEF3C7", statusColor: "#D97706", date: "Due on: 15 March 2026", amount: "₹15,000", action: false }
              ].map((item, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#F9FAFB',
                  padding: '1rem 1.25rem',
                  borderRadius: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827' }}>{item.term}</span>
                      <span style={{
                        backgroundColor: item.statusBg,
                        color: item.statusColor,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '12px',
                        fontSize: '0.65rem',
                        fontWeight: 700
                      }}>
                        {item.status}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{item.date}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827' }}>{item.amount}</span>
                    {item.action && (
                      <button style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        backgroundColor: '#EFF6FF',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: '#1E3A8A'
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
