"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function AdminFinancePage() {
  const [activeTab, setActiveTab] = useState('structure');
  const [paymentSearch, setPaymentSearch] = useState('');
  const [paymentStatusFilter, setPaymentStatusFilter] = useState('all');

  const feeStructure = [
    { type: 'Monthly Tuition', amount: '₹8,000', frequency: 'Monthly', applicable: 'All Grades' },
    { type: 'Lab Fee', amount: '₹2,500', frequency: 'Per Semester', applicable: 'Grade 8–10' },
    { type: 'Sports Fee', amount: '₹1,500', frequency: 'Annual', applicable: 'All Grades' },
    { type: 'Admission Fee', amount: '₹15,000', frequency: 'One-Time', applicable: 'New Admissions' },
    { type: 'Library Fee', amount: '₹1,000', frequency: 'Annual', applicable: 'All Grades' },
    { type: 'Computer Lab', amount: '₹2,000', frequency: 'Per Semester', applicable: 'Grade 6–10' },
  ];

  const invoices = [
    { id: 'INV-2025-001', class: 'Grade 10-A', students: 44, amount: '₹3,52,000', date: 'Mar 1, 2025', status: 'sent' },
    { id: 'INV-2025-002', class: 'Grade 10-B', students: 44, amount: '₹3,52,000', date: 'Mar 1, 2025', status: 'sent' },
    { id: 'INV-2025-003', class: 'Grade 9-A', students: 45, amount: '₹3,60,000', date: 'Mar 1, 2025', status: 'pending' },
    { id: 'INV-2025-004', class: 'Grade 9-B', students: 45, amount: '₹3,60,000', date: 'Mar 1, 2025', status: 'pending' },
  ];

  const payments = [
    { student: 'Alex Johnson', id: 'STU-001', class: '10-A', amount: '₹8,000', month: 'March 2025', method: 'Bank Transfer', status: 'paid' },
    { student: 'Emma Davis', id: 'STU-002', class: '10-A', amount: '₹8,000', month: 'March 2025', method: 'Cash', status: 'paid' },
    { student: 'Michael Chen', id: 'STU-003', class: '10-B', amount: '₹8,000', month: 'March 2025', method: '—', status: 'unpaid' },
    { student: 'Sophia Wilson', id: 'STU-004', class: '9-A', amount: '₹8,000', month: 'March 2025', method: '—', status: 'unpaid' },
    { student: 'James Taylor', id: 'STU-005', class: '9-B', amount: '₹8,000', month: 'March 2025', method: 'Bank Transfer', status: 'paid' },
    { student: 'Olivia Brown', id: 'STU-006', class: '10-A', amount: '₹8,000', month: 'February 2025', method: '—', status: 'unpaid' },
  ];

  const filteredPayments = payments.filter(pay => {
    const matchSearch = paymentSearch === '' ||
      pay.student.toLowerCase().includes(paymentSearch.toLowerCase()) ||
      pay.id.toLowerCase().includes(paymentSearch.toLowerCase());
    const matchStatus = paymentStatusFilter === 'all' || pay.status === paymentStatusFilter;
    return matchSearch && matchStatus;
  });

  const tabs = [
    { key: 'structure', label: 'Fee Structure' },
    { key: 'invoicing', label: 'Invoicing' },
    { key: 'payments', label: 'Payment Tracking' },
  ];

  const paidCount = payments.filter(p => p.status === 'paid').length;
  const unpaidCount = payments.filter(p => p.status === 'unpaid').length;

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      <main className="main-content">
        <div className="dashboard-container">

          <div className="admin-header-card">
            <div>
              <h1>Finance &amp; Billing</h1>
              <p>Manage fee structures, generate invoices, and track payments</p>
            </div>
          </div>

          <div className="admin-tabs">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`admin-tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Fee Structure */}
          {activeTab === 'structure' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="admin-btn primary">+ Add Fee Type</button>
              </div>
              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Fee Type</th>
                      <th>Amount</th>
                      <th>Frequency</th>
                      <th>Applicable To</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600 }}>{fee.type}</td>
                        <td style={{ fontWeight: 600, color: '#1a365d' }}>{fee.amount}</td>
                        <td>
                          <span style={{
                            backgroundColor: '#f1f5f9', padding: '0.25rem 0.625rem',
                            borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600
                          }}>{fee.frequency}</span>
                        </td>
                        <td style={{ color: '#64748b' }}>{fee.applicable}</td>
                        <td>
                          <div className="admin-btn-group">
                            <button className="admin-btn secondary">Edit</button>
                            <button className="admin-btn danger">Remove</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Invoicing */}
          {activeTab === 'invoicing' && (
            <>
              <div className="admin-search-bar">
                <select className="admin-select" defaultValue="all">
                  <option value="all">All Classes</option>
                  <option value="10-A">Grade 10-A</option>
                  <option value="10-B">Grade 10-B</option>
                  <option value="9-A">Grade 9-A</option>
                  <option value="9-B">Grade 9-B</option>
                </select>
                <select className="admin-select" defaultValue="march">
                  <option value="march">March 2025</option>
                  <option value="february">February 2025</option>
                  <option value="january">January 2025</option>
                </select>
                <button className="admin-btn primary">Generate Bulk Invoices</button>
              </div>
              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Invoice ID</th>
                      <th>Class</th>
                      <th>Students</th>
                      <th>Total Amount</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((inv, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 500, color: '#64748b' }}>{inv.id}</td>
                        <td style={{ fontWeight: 600 }}>{inv.class}</td>
                        <td>{inv.students}</td>
                        <td style={{ fontWeight: 600, color: '#1a365d' }}>{inv.amount}</td>
                        <td style={{ color: '#64748b' }}>{inv.date}</td>
                        <td>
                          <span className={`status-badge ${inv.status === 'sent' ? 'active' : 'pending'}`}>
                            {inv.status === 'sent' ? '● Sent' : '● Pending'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Payment Tracking */}
          {activeTab === 'payments' && (
            <>
              <div className="stats-grid" style={{ marginBottom: '0' }}>
                <div className="stat-card">
                  <div className="stat-details">
                    <span className="stat-label" style={{ fontSize: '0.85rem', color: '#6B7280' }}>Paid</span>
                    <span className="stat-value" style={{ color: '#10B981', fontSize: '1.5rem' }}>{paidCount}</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-details">
                    <span className="stat-label" style={{ fontSize: '0.85rem', color: '#6B7280' }}>Unpaid / Defaulters</span>
                    <span className="stat-value" style={{ color: '#EF4444', fontSize: '1.5rem' }}>{unpaidCount}</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-details">
                    <span className="stat-label" style={{ fontSize: '0.85rem', color: '#6B7280' }}>Collection Rate</span>
                    <span className="stat-value" style={{ color: '#1a365d', fontSize: '1.5rem' }}>{Math.round(paidCount / payments.length * 100)}%</span>
                  </div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="admin-search-bar">
                <input
                  className="admin-search-input"
                  type="text"
                  placeholder="Search by student name or ID..."
                  value={paymentSearch}
                  onChange={(e) => setPaymentSearch(e.target.value)}
                />
                <select className="admin-select" value={paymentStatusFilter} onChange={(e) => setPaymentStatusFilter(e.target.value)}>
                  <option value="all">All Status</option>
                  <option value="paid">Paid</option>
                  <option value="unpaid">Unpaid</option>
                </select>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Student</th>
                      <th>ID</th>
                      <th>Class</th>
                      <th>Amount</th>
                      <th>Month</th>
                      <th>Method</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPayments.map((pay, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600 }}>{pay.student}</td>
                        <td style={{ color: '#64748b' }}>{pay.id}</td>
                        <td>{pay.class}</td>
                        <td style={{ fontWeight: 600 }}>{pay.amount}</td>
                        <td style={{ color: '#64748b' }}>{pay.month}</td>
                        <td>{pay.method}</td>
                        <td>
                          <span className={`status-badge ${pay.status}`}>
                            {pay.status === 'paid' ? '● Paid' : '● Unpaid'}
                          </span>
                        </td>
                        <td>
                          <div className="admin-btn-group">
                            {pay.status === 'unpaid' ? (
                              <button className="admin-btn success">Mark Paid</button>
                            ) : (
                              <button className="admin-btn secondary">Receipt ↓</button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

        </div>
      </main>
    </div>
  );
}
