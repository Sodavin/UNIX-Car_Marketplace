import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/Backtotop';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import BuyPage from './pages/BuyPage';
import RentPage from './pages/RentPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
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
      </Routes>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
