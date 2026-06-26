import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/Backtotop";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./components/cart/CartContext";

import Homepage from "./pages/Homepage";
import BuyPage from "./pages/BuyPage";
import RentPage from "./pages/RentPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import Login from "./components/Account/Login";
import Signup from "./components/Account/Signup";

// Checkout & Receipt
import Checkout from "./components/Checkout";
import Receipt from "./components/Receipt";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <ScrollToTop />

        <Routes>
        {/* Redirect */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Main Pages */}
        <Route path="/home" element={<Homepage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Account */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>

      <Footer />
      <BackToTop />
      </div>
    </CartProvider>
  );
}

export default App;