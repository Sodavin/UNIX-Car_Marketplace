import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductDetail from '../components/Productpage/ProductDetail';

// Combined data from Featured and Rental sections
const allProducts = [
  // Featured Cars
  {
    id: 'f1',
    make: 'BMW',
    name: '3 Series',
    year: 2024,
    price: 62000,
    mileage: '3,800',
    fuel: 'Petrol',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    sellerType: 'Premium Dealer',
    sellerName: 'BMW Premium Dealers',
    location: 'Phnom Penh',
    views: 21,
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'f2',
    make: 'Lexus',
    name: 'NX 350',
    year: 2025,
    price: 49850,
    mileage: '4,100',
    fuel: 'Hybrid',
    bodyType: 'SUV',
    transmission: 'Automatic',
    sellerType: 'Luxury Dealer',
    sellerName: 'Lexus Luxury Cars',
    location: 'Phnom Penh',
    views: 28,
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'f3',
    make: 'Mercedes-Benz',
    name: 'C-Class',
    year: 2024,
    price: 85900,
    mileage: '6,200',
    fuel: 'Petrol',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    sellerType: 'Executive Seller',
    sellerName: 'Mercedes Luxury Motors',
    location: 'Phnom Penh',
    views: 17,
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'f4',
    make: 'Audi',
    name: 'A6',
    year: 2025,
    price: 108900,
    mileage: '1,900',
    fuel: 'Diesel',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    sellerType: 'Exclusive Dealer',
    sellerName: 'Audi Exclusive',
    location: 'Phnom Penh',
    views: 12,
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
  },
  // Rental Cars
  {
    id: 'r1',
    make: 'Toyota',
    name: 'Highlander Hybrid',
    year: 2024,
    price: 35000,
    mileage: '9,100',
    fuel: 'Hybrid',
    bodyType: 'SUV',
    transmission: 'Automatic',
    sellerType: 'Rental Company',
    sellerName: 'Toyota Rentals',
    location: 'Phnom Penh',
    views: 46,
    badge: 'Rental',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'r2',
    make: 'Honda',
    name: 'CR-V',
    year: 2023,
    price: 28000,
    mileage: '12,800',
    fuel: 'Petrol',
    bodyType: 'SUV',
    transmission: 'Automatic',
    sellerType: 'Premium Rental',
    sellerName: 'Honda Premium Rentals',
    location: 'Phnom Penh',
    views: 31,
    badge: 'Rental',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'r3',
    make: 'Kia',
    name: 'Telluride',
    year: 2024,
    price: 34000,
    mileage: '7,600',
    fuel: 'Petrol',
    bodyType: 'SUV',
    transmission: 'Automatic',
    sellerType: 'Executive Rental',
    sellerName: 'Kia Executive Fleet',
    location: 'Phnom Penh',
    views: 29,
    badge: 'Rental',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'r4',
    make: 'Mazda',
    name: 'CX-9',
    year: 2024,
    price: 32000,
    mileage: '8,900',
    fuel: 'Petrol',
    bodyType: 'SUV',
    transmission: 'Automatic',
    sellerType: 'Luxury Rental',
    sellerName: 'Mazda Luxury Fleet',
    location: 'Phnom Penh',
    views: 25,
    badge: 'Rental',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
  },
];

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product by ID
    const foundProduct = allProducts.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      document.title = `${foundProduct.make} ${foundProduct.name} | UNIX`;
    } else {
      // Redirect to home if product not found
      navigate('/home');
    }
  }, [id, navigate]);

  if (!product) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>;
  }

  const isRental = product.badge === 'Rental';

  return (
    <div style={{ backgroundColor: '#0b0c10', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            position: 'relative',
            top: '1rem',
            left: '3rem',
            background: 'none',
            border: 'none',
            color: 'var(--purple-600)',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 0',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to listings
        </button>
        <div style={{ padding: '0 20px 40px 20px' }}>
          <ProductDetail product={product} rentMode={isRental} />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
