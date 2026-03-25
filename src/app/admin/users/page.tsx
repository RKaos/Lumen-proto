"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import SubNav from '@/components/SubNav';

export default function AdminUsersPage() {
  const [activeTab, setActiveTab] = useState('students');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterClass, setFilterClass] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const students = [
    { id: 'STU-001', name: 'Alex Johnson', initials: 'AJ', class: '10-A', email: 'alex.j@lumen.edu', status: 'active' },
    { id: 'STU-002', name: 'Emma Davis', initials: 'ED', class: '10-A', email: 'emma.d@lumen.edu', status: 'active' },
    { id: 'STU-003', name: 'Michael Chen', initials: 'MC', class: '10-B', email: 'michael.c@lumen.edu', status: 'active' },
    { id: 'STU-004', name: 'Sophia Wilson', initials: 'SW', class: '9-A', email: 'sophia.w@lumen.edu', status: 'inactive' },
    { id: 'STU-005', name: 'James Taylor', initials: 'JT', class: '9-B', email: 'james.t@lumen.edu', status: 'active' },
    { id: 'STU-006', name: 'Olivia Brown', initials: 'OB', class: '10-A', email: 'olivia.b@lumen.edu', status: 'active' },
  ];

  const teachers = [
    { id: 'TCH-001', name: 'Dr. Sarah Mitchell', initials: 'SM', department: 'Mathematics', email: 'sarah.m@lumen.edu', status: 'active' },
    { id: 'TCH-002', name: 'Prof. Robert Kumar', initials: 'RK', department: 'Science', email: 'robert.k@lumen.edu', status: 'active' },
    { id: 'TCH-003', name: 'Ms. Priya Sharma', initials: 'PS', department: 'English', email: 'priya.s@lumen.edu', status: 'active' },
    { id: 'TCH-004', name: 'Mr. David Lee', initials: 'DL', department: 'History', email: 'david.l@lumen.edu', status: 'inactive' },
  ];

  const parents = [
    { id: 'PAR-001', name: 'Mrs. Susan Johnson', initials: 'SJ', child: 'Alex Johnson (10-A)', email: 'susan.j@email.com', status: 'active' },
    { id: 'PAR-002', name: 'Mr. Richard Davis', initials: 'RD', child: 'Emma Davis (10-A)', email: 'richard.d@email.com', status: 'active' },
    { id: 'PAR-003', name: 'Mrs. Li Chen', initials: 'LC', child: 'Michael Chen (10-B)', email: 'li.c@email.com', status: 'active' },
  ];

  const tabs = [
    { key: 'students', label: 'Students', count: students.length },
    { key: 'teachers', label: 'Teachers', count: teachers.length },
    { key: 'parents', label: 'Parents', count: parents.length },
  ];

  const filteredData = () => {
    let data: typeof students | typeof teachers | typeof parents = [];
    if (activeTab === 'students') data = students;
    else if (activeTab === 'teachers') data = teachers;
    else data = parents;

    return data.filter(item => {
      const matchSearch = searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchStatus = filterStatus === 'all' || item.status === filterStatus;
      return matchSearch && matchStatus;
    });
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      <SubNav />

      <main className="main-content">
        <div className="dashboard-container">

          {/* Header */}
          <div className="admin-header-card">
            <div>
              <h1>User Management</h1>
              <p>Manage students, teachers, and parents across the school</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="admin-tabs">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`admin-tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Search & Filter */}
          <div className="admin-search-bar">
            <input
              className="admin-search-input"
              type="text"
              placeholder="Search by Name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {activeTab === 'students' && (
              <select className="admin-select" value={filterClass} onChange={(e) => setFilterClass(e.target.value)}>
                <option value="all">All Classes</option>
                <option value="10-A">Class 10-A</option>
                <option value="10-B">Class 10-B</option>
                <option value="9-A">Class 9-A</option>
                <option value="9-B">Class 9-B</option>
              </select>
            )}
            <select className="admin-select" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          {/* User Table */}
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>{activeTab === 'students' ? 'Class' : activeTab === 'teachers' ? 'Department' : 'Child'}</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData().map((user) => (
                  <tr key={user.id}>
                    <td style={{ color: '#64748b', fontWeight: 500 }}>{user.id}</td>
                    <td>
                      <div className="user-cell">
                        <div className="avatar-sm">{user.initials}</div>
                        <span style={{ fontWeight: 600 }}>{user.name}</span>
                      </div>
                    </td>
                    <td>{'class' in user ? user.class : 'department' in user ? user.department : 'child' in user ? user.child : ''}</td>
                    <td style={{ color: '#64748b' }}>{user.email}</td>
                    <td>
                      <span className={`status-badge ${user.status}`}>
                        {user.status === 'active' ? '● Active' : '● Inactive'}
                      </span>
                    </td>
                    <td>
                      <div className="admin-btn-group">
                        <button className="admin-btn secondary">Edit</button>
                        <button className="admin-btn secondary">Reset PW</button>
                        <button className="admin-btn danger">
                          {user.status === 'active' ? 'Suspend' : 'Activate'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}
