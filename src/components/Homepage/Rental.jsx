import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Checkout/Cart';
import ProductGrid from '../Productpage/ProductGrid';
import '../Productpage/Productpage.css';
import './HomepageSections.css';

const rentalCars = [
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
    location: 'Phnom Penh',
    views: 25,
    badge: 'Rental',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
  },
];

export default function RentalCars() {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleRentalCheckout = () => {
    const product = rentalCars[0];
    addItem(product, 1);
    navigate('/checkout');
  };

  return (
    <section className="homepage-section">
      <div className="section-heading">
        <div>
          <h2 className="section-title">Rental Fleet</h2>
          <p className="section-copy">Browse premium rental cars with flexible terms and high-end comfort.</p>
        </div>
        <button type="button" className="section-action" onClick={handleRentalCheckout}>
          Checkout rental
        </button>
      </div>

      <ProductGrid products={rentalCars} hideButton={true} />
    </section>
  );
}
