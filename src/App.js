import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { WishlistProvider } from './context/WishlistContext';
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
import Login from './components/Account/Login';
import Signup from './components/Account/Signup';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <WishlistProvider>
      <div className="App">
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
        <BackToTop />
      </div>
    </WishlistProvider>
  );
}

export default App;
