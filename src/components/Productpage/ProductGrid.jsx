import ProductCard from './ProductCard';
import './Productpage.css';

function ProductGrid({ products, hideButton, onProductClick, onAddToCart }) {
  if (!products.length) {
    return (
      <div className="product-empty-state">
        <p>No cars match your filter selection yet. Try a different price range or keyword.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          hideButton={hideButton}
          onProductClick={onProductClick}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
