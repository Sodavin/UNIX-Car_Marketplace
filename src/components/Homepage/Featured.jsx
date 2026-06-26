import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../Productpage/ProductGrid';
import '../Productpage/Productpage.css';
import './HomepageSections.css';

const featuredCars = [
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
    location: 'Phnom Penh',
    views: 12,
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
  },
];

export default function FeaturedCars() {
  return (
    <section className="homepage-section">
      <div className="section-heading">
        <div>
          <h2 className="section-title">Featured Cars</h2>
          <p className="section-copy">Premium listings curated for modern drivers who want style and performance.</p>
        </div>
        <Link to="/buy" className="section-action">View all</Link>
      </div>

      <ProductGrid products={featuredCars} hideButton={false} />
    </section>
  );
}
