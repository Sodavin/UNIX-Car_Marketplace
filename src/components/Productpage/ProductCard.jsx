import { useContext, useState } from 'react';
import { WishlistContext } from '../../context/WishlistContext';
import './Productpage.css';

function ProductCard({ product, hideButton, onProductClick }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  const [isFavorited, setIsFavorited] = useState(() => isInWishlist(product.id));

  const formattedPrice = product.price.toLocaleString();
  const formattedMonthlyPrice = product.monthlyPrice?.toLocaleString();

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorited) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
    setIsFavorited(!isFavorited);
  };

  const handleCardClick = (e) => {
    // Don't trigger if clicking on action buttons
    if (e.target.closest('.media-actions')) return;
    if (onProductClick) {
      onProductClick(product);
    }
  };

  const handleBuyClick = (e) => {
    e.stopPropagation();
    if (onProductClick) {
      onProductClick(product);
    }
  };

  return (
    <article className="product-card" onClick={handleCardClick} style={{ cursor: onProductClick ? 'pointer' : 'default' }}>
      <div className="product-card-media">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />

        <div className="media-actions">
          <button 
            type="button" 
            className={`media-action ${isFavorited ? 'favorited' : ''}`}
            aria-label="Favorite"
            onClick={handleFavoriteClick}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16" fill={isFavorited ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.8 4.6c-1.4-1.5-3.6-1.5-5 0l-.8.8-.8-.8c-1.4-1.5-3.6-1.5-5 0-1.4 1.5-1.4 3.9 0 5.4l5.8 6.1 5.8-6.1c1.4-1.5 1.4-3.9 0-5.4Z" />
            </svg>
          </button>
          <button type="button" className="media-action" aria-label="Share">
            <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <path d="M8.7 10.7 15.3 7.3" />
              <path d="M8.7 13.3 15.3 16.7" />
            </svg>
          </button>
        </div>

        <span className="media-count">{product.views || 0}</span>
      </div>

      <div className="product-card-body">
        <div className="product-card-top">
          <p className="product-card-meta">{product.year} {product.make}</p>
          <h3>{product.name}</h3>
          <p className="product-card-subtitle">Excl. Govt. Charges</p>
        </div>

        <div className="product-card-stats">
          <div className="stat-item">
            <span className="stat-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18" />
                <path d="M6 12V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
                <path d="M6 12v3a1 1 0 0 0 1 1h1" />
                <path d="M17 16h1a1 1 0 0 0 1-1v-3" />
                <circle cx="7.5" cy="17.5" r="1.5" />
                <circle cx="16.5" cy="17.5" r="1.5" />
              </svg>
            </span>
            <span>{product.bodyType || 'Sedan'}</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h10v7h3v9H3V3z" />
                <path d="M16 3v7" />
                <path d="M19 10h-3" />
                <path d="M8 8h1" />
                <path d="M8 12h1" />
              </svg>
            </span>
            <span>{product.fuel}</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M6 12h12" />
                <path d="M9 18h6" />
                <circle cx="19" cy="6" r="1" />
                <circle cx="5" cy="12" r="1" />
                <circle cx="19" cy="18" r="1" />
              </svg>
            </span>
            <span>{product.transmission || 'Automatic'}</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                <path d="m12 12 3.5-3.5" />
                <path d="M12 4v2" />
              </svg>
            </span>
            <span>{product.mileage} km</span>
          </div>
        </div>

        <div className="product-card-footer">
          <div>
            <p className="seller-label">{product.sellerType || 'Private Seller'}</p>
            <p className="seller-location">{product.location || 'Phnom Penh'}</p>
          </div>
          <div className="price-group">
            <div className="price-values">
              <span className="product-card-price">${formattedPrice}</span>
              {product.monthlyPrice ? (
                <>
                  <span className="price-period">/day</span>
                  <span className="price-monthly">· ${formattedMonthlyPrice}/mo</span>
                </>
              ) : null}
            </div>
            {!hideButton && (
              <button type="button" className="product-button" onClick={handleBuyClick}>
                Buy now
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
