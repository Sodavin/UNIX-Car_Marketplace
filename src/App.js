import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import { WishlistProvider } from './components/Wishlist/WishlistContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/Backtotop';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import BuyPage from './pages/BuyPage';
import RentPage from './pages/RentPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WishlistPage from './components/Wishlist/WishlistPage.jsx';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Account/Login';
import Signup from './components/Account/Signup';
import DashboardPage from './pages/DashboardPage';
import UserDashboard from './pages/UserDashboard';
import ProductPage from './pages/ProductPage';

function App() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('unix-user'));
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('unix-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('unix-user');
    }
  }, [user]);

  const handleLogin = ({ username, password }) => {
    if (!username || !password) {
      return { success: false, message: 'Please enter your username and password.' };
    }

    if (username === 'admin' && password === '123') {
      setUser({ username, role: 'admin', fullName: 'Admin User' });
      return { success: true, role: 'admin' };
    }

    setUser({ username, role: 'user', fullName: username });
    return { success: true, role: 'user' };
  };

  const handleSignup = ({ fullName, username, password }) => {
    if (!fullName || !username || !password) {
      return { success: false, message: 'Please complete all fields.' };
    }

    setUser({ username, role: 'user', fullName });
    return { success: true, role: 'user' };
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <WishlistProvider>
      <div className="App">
        <Navbar user={user} onLogout={handleLogout} />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route
            path="/dashboard"
            element={user?.role === 'admin' ? <DashboardPage /> : <Navigate to="/user-dashboard" replace />}
          />
          <Route
            path="/user-dashboard"
            element={user?.role === 'admin' ? <Navigate to="/dashboard" replace /> : <UserDashboard user={user} />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        </Routes>

        <Footer />
        <BackToTop />
      </div>
    </WishlistProvider>
  );
}

export default App;
