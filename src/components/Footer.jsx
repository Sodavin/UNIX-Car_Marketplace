import '../App.css';

function Footer() {
  return (
    <footer className="site-footer footer-white">
      <div className="footer-grid">
        <div className="footer-column footer-brand-panel">
          <p className="footer-logo">UNIX</p>
          <p className="footer-copy">
            UNIX is the modern car marketplace for premium vehicles and user-first shopping.
            Discover, compare, and buy with confidence.
          </p>
          <div className="footer-socials">
            <a href="#instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
              </svg>
              Instagram
            </a>
            <a href="#facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M13.5 22V13.5h3.225l.485-3.75H13.5V7.5c0-1.075.3-1.807 1.85-1.807h1.98V2.14A26.82 26.82 0 0 0 14.44 2c-2.805 0-4.725 1.708-4.725 4.845v2.705H6V13.5h3.715V22h3.785Z" />
              </svg>
              Facebook
            </a>
            <a href="#twitter" aria-label="Twitter">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M22 5.799a8.388 8.388 0 0 1-2.356.646 4.114 4.114 0 0 0 1.804-2.27 8.22 8.22 0 0 1-2.605.996 4.108 4.108 0 0 0-6.994 3.743A11.654 11.654 0 0 1 3.172 4.8a4.108 4.108 0 0 0 1.27 5.487 4.072 4.072 0 0 1-1.86-.513v.05a4.108 4.108 0 0 0 3.292 4.025 4.09 4.09 0 0 1-1.852.07 4.108 4.108 0 0 0 3.833 2.852A8.233 8.233 0 0 1 2 19.54a11.616 11.616 0 0 0 6.29 1.84c7.547 0 11.675-6.254 11.675-11.674 0-.178-.004-.355-.012-.53A8.334 8.334 0 0 0 22 5.8Z" />
              </svg>
              Twitter
            </a>
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-heading">MARKETPLACE</p>
          <a href="#buy">Buy</a>
          <a href="#rent">Rent</a>
          <a href="#sell">Sell</a>
        </div>

        <div className="footer-column">
          <p className="footer-heading">COMPANY</p>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#login">Login</a>
        </div>

        <div className="footer-column footer-contact">
          <p className="footer-heading">GET IN TOUCH</p>
          <a href="mailto:support@unix.com">support@unix.com</a>
          <a href="tel:+85512345678">+855 12 345 678</a>
          <a href="#location">Phnom Penh, Cambodia</a>
        </div>
      </div>
      <div className="footer-bottom">© 2026 UNIX Car Market. All rights reserved.</div>
    </footer>
  );
}

export default Footer
