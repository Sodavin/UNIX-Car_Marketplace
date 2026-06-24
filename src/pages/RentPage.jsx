import { useMemo, useState } from 'react';
import '../components/Productpage/Productpage.css';
import FilterBar from '../components/Productpage/FilterBar';
import ProductGrid from '../components/Productpage/ProductGrid';

const rentalData = [
  {
    id: 'r1',
    make: 'Toyota',
    name: 'Corolla SE',
    year: 2024,
    price: 65,
    monthlyPrice: 1475,
    mileage: '5,200',
    fuel: 'Petrol',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    sellerType: 'Rental Company',
    location: 'Phnom Penh',
    views: 28,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'r2',
    make: 'Honda',
    name: 'Civic Sport',
    year: 2024,
    price: 75,
    monthlyPrice: 1700,
    mileage: '3,800',
    fuel: 'Petrol',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    sellerType: 'Rental Company',
    location: 'Phnom Penh',
    views: 35,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'r3',
    make: 'Lexus',
    name: 'NX 350',
    year: 2024,
    price: 125,
    monthlyPrice: 2835,
    mileage: '2,100',
    fuel: 'Hybrid',
    bodyType: 'SUV',
    transmission: 'Automatic',
    sellerType: 'Luxury Rental',
    location: 'Phnom Penh',
    views: 22,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'r4',
    make: 'BMW',
    name: '3 Series',
    year: 2024,
    price: 150,
    monthlyPrice: 3400,
    mileage: '1,800',
    fuel: 'Petrol',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    sellerType: 'Premium Rental',
    location: 'Phnom Penh',
    views: 18,
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'r5',
    make: 'Mercedes-Benz',
    name: 'C-Class',
    year: 2024,
    price: 180,
    monthlyPrice: 4080,
    mileage: '2,900',
    fuel: 'Petrol',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    sellerType: 'Executive Rental',
    location: 'Phnom Penh',
    views: 14,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'r6',
    make: 'Audi',
    name: 'A6',
    year: 2024,
    price: 195,
    monthlyPrice: 4420,
    mileage: '900',
    fuel: 'Diesel',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    sellerType: 'Exclusive Rental',
    location: 'Phnom Penh',
    views: 10,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
  },
];

function RentPage() {
  const [searchText, setSearchText] = useState('');
  const [selectedBody, setSelectedBody] = useState('all');
  const [selectedTransmission, setSelectedTransmission] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedSort, setSelectedSort] = useState('Newest');

  const filteredProducts = useMemo(() => {
    let items = rentalData.filter((product) => {
      const keyword = searchText.trim().toLowerCase();
      if (!keyword) return true;
      return (
        product.make.toLowerCase().includes(keyword) ||
        product.name.toLowerCase().includes(keyword) ||
        product.bodyType.toLowerCase().includes(keyword)
      );
    });

    if (selectedBody !== 'all') {
      items = items.filter((product) => product.bodyType === selectedBody);
    }

    if (selectedTransmission !== 'all') {
      items = items.filter((product) => product.transmission === selectedTransmission);
    }

    if (selectedLocation !== 'all') {
      items = items.filter((product) => product.location === selectedLocation);
    }

    if (selectedSort === 'Price: Low to High') {
      items = [...items].sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'Price: High to Low') {
      items = [...items].sort((a, b) => b.price - a.price);
    } else {
      items = [...items].sort((a, b) => a.id.localeCompare(b.id));
    }

    return items;
  }, [searchText, selectedBody, selectedTransmission, selectedLocation, selectedSort]);

  return (
    <main className="site-main">
      <section className="buy-section">
        <div className="buy-header">
          <div>
            <p className="eyebrow">Rent</p>
            <h1>Rent premium vehicles for short trips</h1>
            <p className="section-copy">
              Discover our rental fleet with flexible booking options and high-end service.
            </p>
          </div>
        </div>

        <FilterBar
          searchText={searchText}
          rentMode
          selectedSort={selectedSort}
          selectedBody={selectedBody}
          selectedTransmission={selectedTransmission}
          selectedLocation={selectedLocation}
          onSearchChange={setSearchText}
          onBodyChange={setSelectedBody}
          onTransmissionChange={setSelectedTransmission}
          onLocationChange={setSelectedLocation}
          onSortChange={setSelectedSort}
        />

        <ProductGrid products={filteredProducts} hideButton />
      </section>
    </main>
  );
}

export default RentPage;
