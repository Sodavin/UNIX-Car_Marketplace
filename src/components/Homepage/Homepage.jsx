import React from 'react';
import HeroSlider from './HeroSlider';
import BrandRow from './BrandRow';
import FeaturedCars from './FeaturedCars';
import RentalCars from './RentalCar';
const Homepage = () => {
  return (
    <div className="homepage-container" style={{ backgroundColor: '#0b0c10', minHeight: '100vh' }}>
      <HeroSlider />
      <BrandRow />
      <FeaturedCars />
      <RentalCars />
    </div>
  );
};

export default Homepage;
