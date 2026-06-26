import { useContext, useState } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import ProductDetail from './Productpage/ProductDetail';
import '../components/Wishlist/Wishlist.css';

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (selectedProduct) {
    return (
      <div>
        <button 
          onClick={() => setSelectedProduct(null)} 
          style={{
            position: 'fixed',
            top: 20,
            left: 20,
            zIndex: 1000,
            background: 'var(--panel)',
            border: '1px solid var(--card-border)',
            color: 'var(--black)',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          ← Back to Wishlist
        </button>
        <ProductDetail product={selectedProduct} />
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <section className="wishlist-hero">
        <div className="wishlist-hero-content">
          <h1>My Wishlist</h1>
          <p>{wishlist.length} vehicle{wishlist.length !== 1 ? 's' : ''} saved</p>
        </div>
      </section>

      <section className="wishlist-section container">
        {wishlist.length === 0 ? (
          <div className="wishlist-empty">
            <div className="empty-icon">❤️</div>
            <h2>Your Wishlist is Empty</h2>
            <p>Start adding your favorite cars to your wishlist!</p>
            <a href="/buy" className="btn btn-primary">Browse Vehicles</a>
          </div>
        ) : (
          <>
            <div className="wishlist-toolbar">
              <h2>Saved Vehicles</h2>
              <span className="wishlist-count">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''}</span>
            </div>

            <div className="wishlist-grid">
              {wishlist.map((product) => (
                <div key={product.id} className="wishlist-card">
                  <div className="wishlist-card-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      onClick={() => setSelectedProduct(product)}
                      style={{ cursor: 'pointer' }}
                    />
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => removeFromWishlist(product.id)}
                      aria-label="Remove from wishlist"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M20.8 4.6c-1.4-1.5-3.6-1.5-5 0l-.8.8-.8-.8c-1.4-1.5-3.6-1.5-5 0-1.4 1.5-1.4 3.9 0 5.4l5.8 6.1 5.8-6.1c1.4-1.5 1.4-3.9 0-5.4Z" />
                      </svg>
                    </button>
                  </div>

                  <div className="wishlist-card-body">
                    <p className="wishlist-card-meta">{product.year} {product.make}</p>
                    <h3 onClick={() => setSelectedProduct(product)} style={{ cursor: 'pointer' }}>
                      {product.name}
                    </h3>

                    <div className="wishlist-card-specs">
                      <span className="spec">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7">
                          <path d="M3 12h18" />
                          <path d="M6 12V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
                          <path d="M6 12v3a1 1 0 0 0 1 1h1" />
                          <path d="M17 16h1a1 1 0 0 0 1-1v-3" />
                          <circle cx="7.5" cy="17.5" r="1.5" />
                          <circle cx="16.5" cy="17.5" r="1.5" />
                        </svg>
                        {product.bodyType || 'Sedan'}
                      </span>
                      <span className="spec">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7">
                          <path d="M6 3h10v7h3v9H3V3z" />
                          <path d="M16 3v7" />
                          <path d="M19 10h-3" />
                          <path d="M8 8h1" />
                          <path d="M8 12h1" />
                        </svg>
                        {product.fuel}
                      </span>
                      <span className="spec">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7">
                          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                          <path d="m12 12 3.5-3.5" />
                          <path d="M12 4v2" />
                        </svg>
                        {product.mileage} km
                      </span>
                      <span className="spec">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7">
                          <path d="M3 6h18" />
                          <path d="M6 12h12" />
                          <path d="M9 18h6" />
                          <circle cx="19" cy="6" r="1" />
                          <circle cx="5" cy="12" r="1" />
                          <circle cx="19" cy="18" r="1" />
                        </svg>
                        {product.transmission || 'Auto'}
                      </span>
                    </div>

                    <div className="wishlist-card-footer">
                      <div>
                        <p className="seller-label">{product.sellerType || 'Private Seller'}</p>
                        <p className="seller-location">{product.location || 'Phnom Penh'}</p>
                      </div>
                      <div className="price-group">
                        <span className="wishlist-price">${product.price.toLocaleString()}</span>
                        <button
                          type="button"
                          className="view-btn"
                          onClick={() => setSelectedProduct(product)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default WishlistPage;
