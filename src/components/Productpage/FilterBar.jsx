import { useEffect, useRef, useState } from 'react';
import './Productpage.css';

const priceOptions = [
  { value: 'all', label: 'All prices' },
  { value: 'under-20k', label: 'Under $20k' },
  { value: '20k-40k', label: '$20k – $40k' },
  { value: '40k-60k', label: '$40k – $60k' },
  { value: '60k-100k', label: '$60k – $100k' },
  { value: '100k+', label: '$100k+' },
];

const sortOptions = [
  'Newest',
  'Price: Low to High',
  'Price: High to Low',
];

const bodyOptions = [
  { value: 'all', label: 'Any' },
  { value: 'Sedan', label: 'Sedan' },
  { value: 'SUV', label: 'SUV' },
  { value: 'Coupe', label: 'Coupe' },
  { value: 'Hatchback', label: 'Hatchback' },
  { value: 'Convertible', label: 'Convertible' },
];

const transmissionOptions = [
  { value: 'all', label: 'Any' },
  { value: 'Automatic', label: 'Automatic' },
  { value: 'Manual', label: 'Manual' },
];

const locationOptions = [
  { value: 'all', label: 'Any' },
  { value: 'Phnom Penh', label: 'Phnom Penh' },
  { value: 'Siem Reap', label: 'Siem Reap' },
  { value: 'Sihanoukville', label: 'Sihanoukville' },
  { value: 'Battambang', label: 'Battambang' },
];

function CustomDropdown({ id, value, options, onChange, className }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const selectedOption = options.find((option) => option.value === value) || options[0];

  return (
    <div className={`custom-dropdown ${className || ''}`} ref={dropdownRef}>
      <button
        id={id}
        type="button"
        className="custom-dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false);
          }
        }}
      >
        <span className="custom-dropdown-value">{selectedOption.label}</span>
        <span className={`custom-dropdown-arrow ${open ? 'open' : ''}`} />
      </button>

      <ul
        className={`custom-dropdown-panel ${open ? 'open' : ''}`}
        role="listbox"
        aria-labelledby={id}
        tabIndex={-1}
      >
        {options.map((option) => (
          <li
            key={option.value}
            role="option"
            aria-selected={option.value === value}
            className={`custom-dropdown-item ${option.value === value ? 'selected' : ''}`}
            onClick={() => {
              onChange(option.value);
              setOpen(false);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onChange(option.value);
                setOpen(false);
              }
            }}
            tabIndex={0}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilterBar({
  searchText,
  selectedPrice,
  selectedSort,
  onSearchChange,
  onPriceChange,
  onSortChange,
  rentMode,
  selectedBody,
  selectedTransmission,
  selectedLocation,
  onBodyChange,
  onTransmissionChange,
  onLocationChange,
}) {
  return (
    <section className={`filter-bar ${rentMode ? 'rent-mode' : 'buy-mode'}`}>
      <div className="filter-bar-search">
        <label htmlFor="search" className="sr-only">
          Search vehicles
        </label>
        <input
          id="search"
          type="search"
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search cars..."
          className="filter-input"
        />
      </div>

      {rentMode ? (
        <div className="filter-bar-fields">
          <div className="select-group">
            <label className="select-label" htmlFor="bodyType">Body</label>
            <CustomDropdown
              id="bodyType"
              value={selectedBody}
              options={bodyOptions}
              onChange={onBodyChange}
            />
          </div>
          <div className="select-group">
            <label className="select-label" htmlFor="transmission">Transmission</label>
            <CustomDropdown
              id="transmission"
              value={selectedTransmission}
              options={transmissionOptions}
              onChange={onTransmissionChange}
            />
          </div>
          <div className="select-group">
            <label className="select-label" htmlFor="location">Location</label>
            <CustomDropdown
              id="location"
              value={selectedLocation}
              options={locationOptions}
              onChange={onLocationChange}
            />
          </div>
        </div>
      ) : (
        <div className="filter-bar-chips" aria-label="Price filters">
          {priceOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`filter-chip ${selectedPrice === option.value ? 'active' : ''}`}
              onClick={() => onPriceChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      <div className="filter-bar-actions">
        {rentMode ? (
          <div className="select-group sort-group">
            <label htmlFor="sort" className="select-label">
              Sort by
            </label>
            <CustomDropdown
              id="sort"
              value={selectedSort}
              options={sortOptions.map((option) => ({ value: option, label: option }))}
              onChange={onSortChange}
              className="sort-dropdown"
            />
          </div>
        ) : (
          <div className="sort-inline">
            <label htmlFor="sort" className="sort-label">
              Sort by
            </label>
            <CustomDropdown
              id="sort"
              value={selectedSort}
              options={sortOptions.map((option) => ({ value: option, label: option }))}
              onChange={onSortChange}
              className="sort-dropdown inline"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default FilterBar;
