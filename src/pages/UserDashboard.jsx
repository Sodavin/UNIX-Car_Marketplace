import { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserDashboard.css';

const recentOrders = [
  { id: 'ORD-1024', item: 'BMW 3 Series', status: 'Delivered', date: '24 Jun 2026' },
  { id: 'ORD-1023', item: 'Lexus NX 350', status: 'In Transit', date: '20 Jun 2026' },
];

const savedCars = [
  { name: 'Audi A6', price: '$108,900' },
  { name: 'Mercedes C-Class', price: '$85,900' },
];

const supportNotes = [
  { title: 'Preferred contact', detail: 'WhatsApp only' },
  { title: 'Delivery preference', detail: 'Same-day pickup' },
];

function UserDashboard({ user }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const displayName = user?.fullName || user?.username || 'Valued Customer';

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '◉' },
    { id: 'orders', label: 'Orders', icon: '🧾' },
    { id: 'wishlist', label: 'Wishlist', icon: '♡' },
    { id: 'profile', label: 'Profile', icon: '👤' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <div className="user-dashboard-section">
            <div className="user-dashboard-card">
              <h2>Order history</h2>
              <div className="user-list">
                {recentOrders.map((order) => (
                  <div key={order.id} className="user-item">
                    <div>
                      <strong>{order.item}</strong>
                      <span>{order.id} • {order.date}</span>
                    </div>
                    <span>{order.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="user-dashboard-card">
              <h3>Need help with an order?</h3>
              <p className="section-copy">Contact support for updates, returns, or delivery questions.</p>
              <Link to="/contact" className="user-dashboard-link">Contact support</Link>
            </div>
          </div>
        );
      case 'wishlist':
        return (
          <div className="user-dashboard-section">
            <div className="user-dashboard-card">
              <h2>Saved vehicles</h2>
              <div className="user-list">
                {savedCars.map((car) => (
                  <div key={car.name} className="user-item">
                    <div>
                      <strong>{car.name}</strong>
                      <span>Wishlist item</span>
                    </div>
                    <span>{car.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="user-dashboard-card">
              <h3>Quick access</h3>
              <p className="section-copy">Keep exploring more cars and add favorites whenever you find a match.</p>
              <Link to="/buy" className="user-dashboard-link">Browse inventory</Link>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="user-dashboard-section">
            <div className="user-dashboard-card">
              <h2>Profile details</h2>
              <div className="user-profile-list">
                <div className="user-profile-item">
                  <div>
                    <strong>Full name</strong>
                    <span>{displayName}</span>
                  </div>
                  <span>Personal</span>
                </div>
                <div className="user-profile-item">
                  <div>
                    <strong>Username</strong>
                    <span>{user?.username || 'guest'}</span>
                  </div>
                  <span>Login</span>
                </div>
                <div className="user-profile-item">
                  <div>
                    <strong>Phone</strong>
                    <span>+855 12 345 678</span>
                  </div>
                  <span>Verified</span>
                </div>
              </div>
            </div>
            <div className="user-dashboard-card">
              <h3>Preferences</h3>
              <div className="user-notes">
                {supportNotes.map((note) => (
                  <div key={note.title} className="user-note-item">
                    <div>
                      <strong>{note.title}</strong>
                      <span>{note.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'dashboard':
      default:
        return (
          <div className="user-dashboard-section">
            <section className="user-dashboard-hero">
              <div className="user-dashboard-title">
                <h1>Welcome back, {displayName}</h1>
                <p>Here’s a quick overview of your account, saved vehicles, and recent activity.</p>
              </div>
              <div className="user-dashboard-actions">
                <Link to="/buy" className="user-dashboard-btn primary">Explore cars</Link>
                <Link to="/wishlist" className="user-dashboard-btn secondary">View wishlist</Link>
              </div>
            </section>

            <section className="user-dashboard-stats">
              <div className="stat-box">
                <span className="label">Saved items</span>
                <span className="value">8</span>
              </div>
              <div className="stat-box">
                <span className="label">Orders</span>
                <span className="value">3</span>
              </div>
              <div className="stat-box">
                <span className="label">Messages</span>
                <span className="value">5</span>
              </div>
              <div className="stat-box">
                <span className="label">Membership</span>
                <span className="value">Gold</span>
              </div>
            </section>

            <section className="user-dashboard-grid">
              <div className="user-dashboard-card">
                <h2>Recent activity</h2>
                <div className="user-list">
                  <div className="user-item">
                    <div>
                      <strong>Wishlist updated</strong>
                      <span>Two new vehicles added</span>
                    </div>
                    <span>Today</span>
                  </div>
                  <div className="user-item">
                    <div>
                      <strong>Order status changed</strong>
                      <span>BMW 3 Series is delivered</span>
                    </div>
                    <span>2 days ago</span>
                  </div>
                </div>
              </div>

              <div className="user-dashboard-card">
                <h2>Quick links</h2>
                <div className="user-list">
                  <div className="user-item">
                    <div>
                      <strong>Browse inventory</strong>
                      <span>Discover new listings</span>
                    </div>
                    <Link to="/buy" className="user-dashboard-link">Open</Link>
                  </div>
                  <div className="user-item">
                    <div>
                      <strong>Wishlist</strong>
                      <span>Review your favorites</span>
                    </div>
                    <Link to="/wishlist" className="user-dashboard-link">Open</Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <main className="user-dashboard-page">
      <div className="user-dashboard-shell">
        <aside className="user-dashboard-sidebar">
          <div className="sidebar-profile-card">
            <div className="sidebar-avatar">{displayName.charAt(0).toUpperCase()}</div>
            <div>
              <h3>{displayName}</h3>
              <p>{user?.username || 'customer'}</p>
            </div>
          </div>

          <nav className="sidebar-nav" aria-label="User dashboard sections">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>

          <Link to="/buy" className="sidebar-cta">
            Browse inventory
          </Link>
        </aside>

        <section className="user-dashboard-content">{renderContent()}</section>
      </div>
    </main>
  );
}

export default UserDashboard;
