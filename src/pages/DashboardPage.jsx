import React, { useState } from 'react';
import '../components/Dashboard/Dashboard.css';
import { Link } from 'react-router-dom';

// Sample car data with images
const sampleCars = [
  { id: 1, name: '2021 Honda Civic EX', price: '$22,500', year: 2021, make: 'Honda', model: 'Civic', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop', status: 'live' },
  { id: 2, name: '2019 Toyota Camry SE', price: '$19,800', year: 2019, make: 'Toyota', model: 'Camry', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop', status: 'live' },
  { id: 3, name: '2023 Tesla Model 3', price: '$42,000', year: 2023, make: 'Tesla', model: 'Model 3', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop', status: 'pending' },
  { id: 4, name: '2022 BMW M340i', price: '$48,500', year: 2022, make: 'BMW', model: 'M340i', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop', status: 'live' },
  { id: 5, name: '2020 Mazda CX-5', price: '$28,900', year: 2020, make: 'Mazda', model: 'CX-5', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop', status: 'live' },
  { id: 6, name: '2018 Volkswagen Golf', price: '$15,200', year: 2018, make: 'Volkswagen', model: 'Golf', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop', status: 'live' },
];

const wishlistCars = [
  { id: 7, name: '2020 Porsche 911 Carrera', price: '$105,000', year: 2020, make: 'Porsche', model: '911', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop' },
  { id: 8, name: '2022 BMW M3 Competition', price: '$82,500', year: 2022, make: 'BMW', model: 'M3', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop' },
  { id: 9, name: '2023 Mercedes-AMG C63', price: '$75,000', year: 2023, make: 'Mercedes', model: 'C63', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop' },
  { id: 10, name: '2021 Audi S4', price: '$68,900', year: 2021, make: 'Audi', model: 'S4', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop' },
  { id: 11, name: '2020 Lamborghini Huracán', price: '$250,000', year: 2020, make: 'Lamborghini', model: 'Huracán', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop' },
  { id: 12, name: '2023 Ferrari F8', price: '$280,000', year: 2023, make: 'Ferrari', model: 'F8', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop' },
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [garageCars, setGarageCars] = useState(sampleCars);
  const [modalType, setModalType] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    price: '',
    year: '',
    make: '',
    model: '',
    status: 'live',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
  });

  const emptyCarForm = {
    id: null,
    name: '',
    price: '',
    year: '',
    make: '',
    model: '',
    status: 'live',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
  };

  const openAddModal = () => {
    setSelectedCar(null);
    setFormData(emptyCarForm);
    setModalType('add');
  };

  const openViewModal = (car) => {
    setSelectedCar(car);
    setModalType('view');
  };

  const openEditModal = (car) => {
    setSelectedCar(car);
    setFormData({
      id: car.id,
      name: car.name,
      price: car.price,
      year: car.year,
      make: car.make,
      model: car.model,
      status: car.status,
      image: car.image,
    });
    setModalType('edit');
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedCar(null);
  };

  const handleDeleteCar = (carId) => {
    setGarageCars((prevState) => prevState.filter((car) => car.id !== carId));
    if (selectedCar?.id === carId) {
      closeModal();
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    setGarageCars((prevState) =>
      prevState.map((car) =>
        car.id === formData.id ? { ...car, ...formData } : car
      )
    );
    closeModal();
  };

  const handleAddCar = () => {
    const newCar = {
      ...formData,
      id: Date.now(),
      image:
        formData.image ||
        'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop',
    };
    setGarageCars((prevState) => [newCar, ...prevState]);
    closeModal();
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewContent />;
      case 'garage':
        return (
          <GarageContent
            garageCars={garageCars}
            modalType={modalType}
            selectedCar={selectedCar}
            formData={formData}
            openAddModal={openAddModal}
            openViewModal={openViewModal}
            openEditModal={openEditModal}
            handleDeleteCar={handleDeleteCar}
            handleFormChange={handleFormChange}
            handleSaveEdit={handleSaveEdit}
            handleAddCar={handleAddCar}
            closeModal={closeModal}
          />
        );
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

const GarageContent = ({
  garageCars,
  modalType,
  selectedCar,
  formData,
  openAddModal,
  openViewModal,
  openEditModal,
  handleDeleteCar,
  handleFormChange,
  handleSaveEdit,
  handleAddCar,
  closeModal,
}) => {
  const modalLabel =
    modalType === 'view'
      ? 'View Car'
      : modalType === 'edit'
      ? 'Edit Car'
      : 'Add New Car';

  return (
    <div className="tab-pane">
      <header className="dashboard-header">
        <div className="header-title">
          <h1>My Garage</h1>
          <p>Manage your active vehicle listings.</p>
        </div>
        <button className="btn-primary" onClick={openAddModal}>
          + Add New Car
        </button>
      </header>
      
      <div className="product-cards-grid">
        {garageCars.map((car) => (
          <div key={car.id} className="product-card-item">
            <div className="product-card-image">
              <img src={car.image} alt={car.name} />
              <div className={`product-status ${car.status}`}>
                {car.status === 'live' ? '● Live' : '● Pending'}
              </div>
            </div>
            <div className="product-card-body">
              <p className="product-meta">{car.year} {car.make}</p>
              <h3 className="product-name">{car.model}</h3>
              <p className="product-price">{car.price}</p>
              <div className="product-actions">
                <button className="btn-outline" onClick={() => openEditModal(car)}>
                  Edit
                </button>
                <button className="btn-outline" onClick={() => openViewModal(car)}>
                  View
                </button>
                <button className="btn-outline" onClick={() => handleDeleteCar(car.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalType && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p className="eyebrow">Garage</p>
                <h3>{modalLabel}</h3>
              </div>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>

            {modalType === 'view' ? (
              <div className="modal-view">
                <img src={selectedCar?.image} alt={selectedCar?.name} />
                <div className="modal-view-details">
                  <h4>{selectedCar?.name}</h4>
                  <div className="modal-field">
                    <span className="field-label">Make</span>
                    <span>{selectedCar?.make}</span>
                  </div>
                  <div className="modal-field">
                    <span className="field-label">Model</span>
                    <span>{selectedCar?.model}</span>
                  </div>
                  <div className="modal-field">
                    <span className="field-label">Year</span>
                    <span>{selectedCar?.year}</span>
                  </div>
                  <div className="modal-field">
                    <span className="field-label">Price</span>
                    <span>{selectedCar?.price}</span>
                  </div>
                  <div className="modal-field">
                    <span className="field-label">Status</span>
                    <span>{selectedCar?.status}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="modal-form">
                <div className="form-row">
                  <label htmlFor="name">Listing name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="2024 Lexus RX 350"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="make">Make</label>
                  <input
                    id="make"
                    type="text"
                    name="make"
                    value={formData.make}
                    onChange={handleFormChange}
                    placeholder="Lexus"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="model">Model</label>
                  <input
                    id="model"
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleFormChange}
                    placeholder="RX 350"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="year">Year</label>
                  <input
                    id="year"
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleFormChange}
                    placeholder="2024"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="price">Price</label>
                  <input
                    id="price"
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleFormChange}
                    placeholder="$45,000"
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleFormChange}
                  >
                    <option value="live">Live</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="image">Photo URL</label>
                  <input
                    id="image"
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleFormChange}
                    placeholder="Image URL"
                  />
                </div>
                <div className="form-buttons">
                  <button className="btn-primary" type="button" onClick={modalType === 'edit' ? handleSaveEdit : handleAddCar}>
                    {modalType === 'edit' ? 'Save Changes' : 'Add Car'}
                  </button>
                  <button className="btn-outline" type="button" onClick={closeModal}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

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
    
    <div className="product-cards-grid">
      {wishlistCars.map((car) => (
        <div key={car.id} className="product-card-item">
          <div className="product-card-image">
            <img src={car.image} alt={car.name} />
          </div>
          <div className="product-card-body">
            <p className="product-meta">{car.year} {car.make}</p>
            <h3 className="product-name">{car.model}</h3>
            <p className="product-price">{car.price}</p>
            <button className="btn-primary" style={{width: '100%', padding: '0.6rem'}}>Contact Seller</button>
          </div>
        </div>
      ))}
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
    
    <div className="settings-grid">
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
      
      <div className="form-section">
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
