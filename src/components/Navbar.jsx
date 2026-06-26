import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';
import { useCart } from './Checkout/Cart';
import CartDrawer from './Checkout/CartDrawer';
import '../App.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { wishlistCount } = useContext(WishlistContext);
  const { items: cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + Number(item.quantity || 1), 0);

  return (
    <header className="site-navbar">
      <div className="navbar-left">
        <div className="brand-copy-only">
          <Link to="/home" className="brand-link">
            <img src="/logo.png" alt="UNIX logo" className="brand-logo" />
          </Link>
        </div>
      </div>

      <nav className="navbar-center" aria-label="Primary navigation">
        <Link to="/home">Home</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="navbar-right">
        <Link to="/wishlist" className="icon-button icon-outline wishlist-link" aria-label="Wishlist">
          <svg width="18" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12.001 21s-7.5-4.872-9.5-7.25C-0.057 9.3 3.3 4 8.5 4 10.9 4 12.001 6 12.001 6s1.101-2 3.5-2c5.2 0 8.557 5.3 5.999 9.75C19.501 16.128 12.001 21 12.001 21z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
        </Link>

        <div
          className={`account-menu ${dropdownOpen ? 'open' : ''}`}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setDropdownOpen(false);
            }
          }}
        >
          <button
            className="account-button"
            type="button"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((value) => !value)}
          >
            <svg className="user-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M4.5 20c1.6-3 5-5 7.5-5s5.9 2 7.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Account</span>
          </button>

          <div className="account-dropdown">
            <Link className="dropdown-item" to="/signup">Sign up</Link>
            <Link className="dropdown-item" to="/login">Login</Link>
            <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
          </div>
        </div>
        
          <button type="button" className="icon-button icon-outline" aria-label="Cart" onClick={() => setDrawerOpen(true)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M3 3h2l1.7 8.4a2 2 0 0 0 2 1.6h9.6a2 2 0 0 0 2-1.6L21 7H6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="20" r="1.5" fill="currentColor" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>
            {cartCount > 0 && <span className="wishlist-badge">{cartCount}</span>}
          </button>
      </div>
      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}

export default Navbar
