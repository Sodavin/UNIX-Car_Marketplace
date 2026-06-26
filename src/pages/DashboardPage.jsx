import React, { useState } from 'react';
import './DashboardPage.css';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewContent />;
      case 'garage':
        return <GarageContent />;
      case 'messages':
        return <MessagesContent />;
      case 'wishlist':
        return <WishlistContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <OverviewContent />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-logo">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>UNIX Auto</Link>
        </div>
        <nav className="sidebar-nav">
          <div 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span>📊</span> Overview
          </div>
          <div 
            className={`nav-item ${activeTab === 'garage' ? 'active' : ''}`}
            onClick={() => setActiveTab('garage')}
          >
            <span>🚗</span> My Garage
          </div>
          <div 
            className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <span>💬</span> Messages
          </div>
          <div 
            className={`nav-item ${activeTab === 'wishlist' ? 'active' : ''}`}
            onClick={() => setActiveTab('wishlist')}
          >
            <span>⭐</span> Wishlist
          </div>
          <div 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <span>⚙️</span> Settings
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {renderContent()}
      </main>
    </div>
  );
};

// --- Sub-components for each tab ---

const OverviewContent = () => (
  <>
    <header className="dashboard-header">
      <div className="header-title">
        <h1>Welcome back, Alex!</h1>
        <p>Here is what's happening with your listings today.</p>
      </div>
      <div className="header-actions">
        <button className="btn-primary">+ Add New Listing</button>
      </div>
    </header>

    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-title">Total Views</div>
        <div className="stat-value">12,450</div>
        <div className="stat-trend trend-up">↑ 14% vs last week</div>
      </div>
      <div className="stat-card">
        <div className="stat-title">Active Inquiries</div>
        <div className="stat-value">28</div>
        <div className="stat-trend trend-up">↑ 5 new today</div>
      </div>
      <div className="stat-card">
        <div className="stat-title">Saved to Wishlist</div>
        <div className="stat-value">156</div>
        <div className="stat-trend trend-up">↑ 22% vs last week</div>
      </div>
      <div className="stat-card">
        <div className="stat-title">Avg. Listing Score</div>
        <div className="stat-value">9.2</div>
        <div className="stat-trend trend-down">↓ 0.1 vs last month</div>
      </div>
    </div>

    <div className="dashboard-content-grid">
      <div className="content-section">
        <div className="section-header">
          <h2>Listing Views Over Time</h2>
        </div>
        <div className="mock-chart">
          <div className="chart-bar" style={{ height: '40%' }} data-label="Mon"></div>
          <div className="chart-bar" style={{ height: '65%' }} data-label="Tue"></div>
          <div className="chart-bar" style={{ height: '50%' }} data-label="Wed"></div>
          <div className="chart-bar" style={{ height: '80%' }} data-label="Thu"></div>
          <div className="chart-bar" style={{ height: '100%' }} data-label="Fri"></div>
          <div className="chart-bar" style={{ height: '75%' }} data-label="Sat"></div>
          <div className="chart-bar" style={{ height: '90%' }} data-label="Sun"></div>
        </div>
      </div>

      <div className="content-section">
        <div className="section-header">
          <h2>Recent Activity</h2>
        </div>
        <ul className="activity-list">
          <li className="activity-item">
            <div className="activity-icon bg-blue">💬</div>
            <div className="activity-details">
              <h4>New Message</h4>
              <p>John Doe asked about the 2021 Civic</p>
            </div>
            <div className="activity-time">10m ago</div>
          </li>
          <li className="activity-item">
            <div className="activity-icon bg-green">🚗</div>
            <div className="activity-details">
              <h4>Listing Approved</h4>
              <p>Your 2019 Toyota Camry is now live</p>
            </div>
            <div className="activity-time">2h ago</div>
          </li>
          <li className="activity-item">
            <div className="activity-icon bg-purple">⭐</div>
            <div className="activity-details">
              <h4>New Save</h4>
              <p>Someone saved your Honda Accord</p>
            </div>
            <div className="activity-time">5h ago</div>
          </li>
        </ul>
      </div>
    </div>
  </>
);

const GarageContent = () => (
  <div className="tab-pane">
    <header className="dashboard-header">
      <div className="header-title">
        <h1>My Garage</h1>
        <p>Manage your active vehicle listings.</p>
      </div>
      <button className="btn-primary">+ Add New Car</button>
    </header>
    
    <div className="garage-grid">
      {/* Mock Car Listing 1 */}
      <div className="garage-card">
        <div className="garage-image-mockup bg-blue-img">2021 Honda Civic</div>
        <div className="garage-details">
          <h3>2021 Honda Civic EX</h3>
          <p className="price">$22,500</p>
          <div className="garage-status live">● Live</div>
          <div className="garage-actions">
            <button className="btn-outline">Edit</button>
            <button className="btn-outline">View</button>
          </div>
        </div>
      </div>
      {/* Mock Car Listing 2 */}
      <div className="garage-card">
        <div className="garage-image-mockup bg-green-img">2019 Toyota Camry</div>
        <div className="garage-details">
          <h3>2019 Toyota Camry SE</h3>
          <p className="price">$19,800</p>
          <div className="garage-status live">● Live</div>
          <div className="garage-actions">
            <button className="btn-outline">Edit</button>
            <button className="btn-outline">View</button>
          </div>
        </div>
      </div>
      {/* Mock Car Listing 3 */}
      <div className="garage-card">
        <div className="garage-image-mockup bg-purple-img">2023 Tesla Model 3</div>
        <div className="garage-details">
          <h3>2023 Tesla Model 3</h3>
          <p className="price">$42,000</p>
          <div className="garage-status pending">● Pending Review</div>
          <div className="garage-actions">
            <button className="btn-outline">Edit</button>
            <button className="btn-outline">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MessagesContent = () => (
  <div className="tab-pane">
    <header className="dashboard-header">
      <div className="header-title">
        <h1>Messages</h1>
        <p>Communicate with potential buyers and sellers.</p>
      </div>
    </header>
    
    <div className="messages-layout">
      <div className="messages-list">
        <div className="message-thread unread">
          <div className="msg-avatar">JD</div>
          <div className="msg-info">
            <h4>John Doe</h4>
            <p>Is the Civic still available?</p>
          </div>
          <span className="msg-time">10m ago</span>
        </div>
        <div className="message-thread">
          <div className="msg-avatar">SM</div>
          <div className="msg-info">
            <h4>Sarah Miller</h4>
            <p>Thanks for the quick reply.</p>
          </div>
          <span className="msg-time">1d ago</span>
        </div>
        <div className="message-thread">
          <div className="msg-avatar">AL</div>
          <div className="msg-info">
            <h4>Alex Lee</h4>
            <p>Can I come see the Camry tomorrow?</p>
          </div>
          <span className="msg-time">2d ago</span>
        </div>
      </div>
      <div className="messages-view">
        <div className="msg-view-header">
          <h3>John Doe</h3>
          <p>Regarding: 2021 Honda Civic EX</p>
        </div>
        <div className="msg-view-body">
          <div className="chat-bubble theirs">
            Hi, is the Civic still available? Can we negotiate on the price?
          </div>
        </div>
        <div className="msg-view-input">
          <input type="text" placeholder="Type your message..." />
          <button className="btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>
);

const WishlistContent = () => (
  <div className="tab-pane">
    <header className="dashboard-header">
      <div className="header-title">
        <h1>Wishlist</h1>
        <p>Vehicles you've saved for later.</p>
      </div>
    </header>
    
    <div className="garage-grid">
      <div className="garage-card">
        <div className="garage-image-mockup bg-purple-img">Porsche 911</div>
        <div className="garage-details">
          <h3>2020 Porsche 911 Carrera</h3>
          <p className="price">$105,000</p>
          <div className="garage-actions">
            <button className="btn-primary" style={{width: '100%'}}>Contact Seller</button>
          </div>
        </div>
      </div>
      <div className="garage-card">
        <div className="garage-image-mockup bg-green-img">BMW M3</div>
        <div className="garage-details">
          <h3>2022 BMW M3 Competition</h3>
          <p className="price">$82,500</p>
          <div className="garage-actions">
            <button className="btn-primary" style={{width: '100%'}}>Contact Seller</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SettingsContent = () => (
  <div className="tab-pane">
    <header className="dashboard-header">
      <div className="header-title">
        <h1>Account Settings</h1>
        <p>Update your personal information and preferences.</p>
      </div>
    </header>
    
    <div className="settings-form">
      <div className="form-section">
        <h3>Profile Information</h3>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" defaultValue="Alex User" />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" defaultValue="unixcar.hl67@gmail.com" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" defaultValue="(555) 123-4567" />
        </div>
        <button className="btn-primary" style={{marginTop: '1rem'}}>Save Changes</button>
      </div>
      
      <div className="form-section" style={{marginTop: '2rem'}}>
        <h3>Security</h3>
        <div className="form-group">
          <label>Current Password</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input type="password" placeholder="Enter new password" />
        </div>
        <button className="btn-primary" style={{marginTop: '1rem', background: '#475569'}}>Update Password</button>
      </div>
    </div>
  </div>
);

export default DashboardPage;
