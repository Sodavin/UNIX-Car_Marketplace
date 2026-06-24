import { useEffect, useState } from 'react';
import './ProductDetail.css';

function ProductDetail({ product, rentMode = false }) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  // Use product images or fallback to sample images
  const images = product?.images ? product.images : [
    product?.image,
    product?.image,
    product?.image,
  ].filter(Boolean);

  const handlePrevImage = () => {
    setMainImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setMainImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  const formattedPrice = product?.price?.toLocaleString();

  return (
    <div className="product-detail-container">
      {/* Image Gallery Section */}
      <section className="image-gallery-section">
        <div className="main-image-container">
          <button
            type="button"
            className="image-nav-button image-nav-prev"
            onClick={handlePrevImage}
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <img
            src={images[mainImageIndex]}
            alt={`${product?.name} - View ${mainImageIndex + 1}`}
            className="main-image"
          />

          <button
            type="button"
            className="image-nav-button image-nav-next"
            onClick={handleNextImage}
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="image-counter">{mainImageIndex + 1} / {images.length}</div>
        </div>

        {/* Thumbnail Images */}
        <div className="thumbnail-gallery">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              className={`thumbnail ${index === mainImageIndex ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      </section>

      {/* Right Column: Seller & Details */}
      <div className="right-column">
        {/* Seller Info and Actions - TOP SECTION */}
        <section className="seller-section">
          <div className="seller-info">
            <h3 className="seller-type-label">{product?.sellerType || 'PRIVATE SELLER'}</h3>
            <p className="seller-name">{product?.sellerName || 'CarMarket Admin'}</p>
          </div>

          <div className="action-buttons">
            <button type="button" className="action-button call-button">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call seller
            </button>

            <button type="button" className="action-button telegram-button">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M23.91 3.79L2.26 10.98c-.97.33-1.02.91-.21 1.14l5.15 1.56 11.94-7.51c.56-.36.85-.17.52.19l-9.67 8.72c-.07.07-.14.26-.02.42l.91 13.28c.12 1.75.68 2.05 1.56 1.3l3.72-3.6 3.73 2.81c.68.48 1.19.23 1.35-1.15l1.99-19.05c.19-.66-.23-.97-.74-.76z" />
              </svg>
              Telegram
            </button>

            <button type="button" className="action-button enquiry-button">
              Send enquiry
            </button>

            {rentMode ? (
              <button type="button" className="action-button request-button">
                Request rental
              </button>
            ) : (
              <button type="button" className="action-button buy-button">
                Buy now
              </button>
            )}
          </div>
        </section>

        {/* Details Section - BELOW */}
        <section className="details-section">
          {/* Header with Title and Price */}
          <div className="product-detail-header">
            <h1 className="product-detail-title">
              {product?.year} {product?.make} {product?.name}
            </h1>
            <div className="price-and-info">
              <span className="detail-price">${formattedPrice}{rentMode ? '/day' : ''}</span>
              <span className="seller-badge">{product?.sellerType || (rentMode ? 'RENTAL COMPANY' : 'PRIVATE SELLER')}</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="quick-stats">
            <div className="stat-row">
              <span className="stat-label">Location</span>
              <span className="stat-value">{product?.location || 'Phnom Penh'}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Views</span>
              <span className="stat-value">{product?.views || 0}</span>
            </div>
          </div>

          {/* Specifications */}
          <div className="specifications-section">
            <h2 className="section-title">Specifications</h2>
            
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Year From</span>
                <span className="spec-value">{product?.year}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Mileage</span>
                <span className="spec-value">{product?.mileage} km</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Transmission</span>
                <span className="spec-value">{product?.transmission || 'Automatic'}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Fuel</span>
                <span className="spec-value">{product?.fuel}</span>
              </div>
            </div>

            <div className="specs-extended">
              <div className="spec-row">
                <span className="spec-label">Body</span>
                <span className="spec-value">{product?.bodyType || 'Sedan'}</span>
                <span className="spec-label">Engine</span>
                <span className="spec-value">{product?.engine || 'N/A'}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Condition</span>
                <span className="spec-value">{product?.condition || 'Used'}</span>
                <span className="spec-label">Colour</span>
                <span className="spec-value">{product?.color || 'N/A'}</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Seller Type</span>
                <span className="spec-value">{product?.sellerType || 'Private'}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="description-section">
            <h2 className="section-title">Description</h2>
            <p className="description-text">
              {product?.description || 'No description provided.'}
            </p>
            <button type="button" className="report-link">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              Report this listing
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDetail;
