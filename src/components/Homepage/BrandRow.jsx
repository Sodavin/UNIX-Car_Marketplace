import React from 'react';
import './BrandRow.css';

const BrandRow = () => {
  // Common car brands
  const brands = [
    { name: 'BMW' },
    { name: 'Mercedes' },
    { name: 'Audi' },
    { name: 'Porsche' },
    { name: 'Tesla' },
    { name: 'Toyota' }
  ];

  return (
    <div className="brand-section">
      <h3 className="brand-title">Explore Top Brands</h3>
      <div className="brand-row">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <span className="brand-name">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandRow;
