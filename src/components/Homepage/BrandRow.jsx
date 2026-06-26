import React from 'react';
import './BrandRow.css';

const brands = [
  { name: 'BMW', logo: require('../../assets/bmw-logo.png') },
  { name: 'Ford', logo: require('../../assets/ford-logo.png') },
  { name: 'Honda', logo: require('../../assets/honda-logo.png') },
  { name: 'Hyundai', logo: require('../../assets/hyundai-logo.png') },
  { name: 'Kia', logo: require('../../assets/kia-logo.png') },
  { name: 'Lexus', logo: require('../../assets/lexus-logo.png') },
  { name: 'Mercedes-Benz', logo: require('../../assets/mercedes-benz-logo.png') },
];

const BrandRow = () => {
  return (
    <section className="brand-section">
      <div className="brand-header">
        <h3 className="brand-title">Popular Brands</h3>
      </div>

      <div className="brand-row">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="brand-logo-wrap">
              <img src={brand.logo} alt={`${brand.name} logo`} className="brand-logo" />
            </div>
            <span className="brand-name">{brand.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandRow;