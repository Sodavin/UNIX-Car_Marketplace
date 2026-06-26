import { useEffect } from 'react';
import React from 'react';
import HeroSlider from '../components/Homepage/Hero.jsx';
import BrandRow from '../components/Homepage/BrandRow.jsx';
import FeaturedCars from '../components/Homepage/Featured.jsx';
import RentalCars from '../components/Homepage/Rental.jsx';

function Homepage() {
  useEffect(() => {
    document.title = 'UNIX | Home';
  }, []);

  return (
    <div className="homepage-container" style={{ backgroundColor: '#0b0c10', minHeight: '100vh' }}>
      <HeroSlider />
      <BrandRow />
      <FeaturedCars />
      <RentalCars />
    </div>
  );
}

export default Homepage;
