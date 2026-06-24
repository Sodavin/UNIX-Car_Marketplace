import { useMemo, useState } from 'react';
import '../components/Productpage/Productpage.css';
import FilterBar from '../components/Productpage/FilterBar';
import ProductGrid from '../components/Productpage/ProductGrid';

const productData = [
  {
    id: 'p1',
    make: 'Toyota',
    name: 'Corolla SE',
    year: 2024,
    price: 18900,
    mileage: '12,500',
    fuel: 'Petrol',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    sellerType: 'Private Seller',
    location: 'Phnom Penh',
    views: 33,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p2',
    make: 'Honda',
    name: 'Civic Sport',
    year: 2023,
    price: 25400,
    mileage: '8,200',
    fuel: 'Petrol',
    bodyType: 'Sedan',
    transmission: 'Automatic',
    sellerType: 'Certified Seller',
    location: 'Phnom Penh',
    views: 42,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p3',
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
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p4',
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
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p5',
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
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p6',
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
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
  },
];

function BuyPage() {
  const [searchText, setSearchText] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedSort, setSelectedSort] = useState('Newest');

  const filteredProducts = useMemo(() => {
    let items = productData.filter((product) => {
      const keyword = searchText.trim().toLowerCase();
      if (!keyword) return true;
      return (
        product.make.toLowerCase().includes(keyword) ||
        product.name.toLowerCase().includes(keyword) ||
        product.bodyType.toLowerCase().includes(keyword)
      );
    });

    if (selectedPrice === 'under-20k') {
      items = items.filter((product) => product.price < 20000);
    } else if (selectedPrice === '20k-40k') {
      items = items.filter((product) => product.price >= 20000 && product.price < 40000);
    } else if (selectedPrice === '40k-60k') {
      items = items.filter((product) => product.price >= 40000 && product.price < 60000);
    } else if (selectedPrice === '60k-100k') {
      items = items.filter((product) => product.price >= 60000 && product.price < 100000);
    } else if (selectedPrice === '100k+') {
      items = items.filter((product) => product.price >= 100000);
    }

    if (selectedSort === 'Price: Low to High') {
      items = [...items].sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'Price: High to Low') {
      items = [...items].sort((a, b) => b.price - a.price);
    } else {
      items = [...items].sort((a, b) => a.id.localeCompare(b.id));
    }

    return items;
  }, [searchText, selectedPrice, selectedSort]);

  return (
    <main className="site-main">
      <section className="buy-section">

        <FilterBar
          searchText={searchText}
          selectedPrice={selectedPrice}
          selectedSort={selectedSort}
          onSearchChange={setSearchText}
          onPriceChange={setSelectedPrice}
          onSortChange={setSelectedSort}
        />

        <ProductGrid products={filteredProducts} />
      </section>
    </main>
  );
}

export default BuyPage;
