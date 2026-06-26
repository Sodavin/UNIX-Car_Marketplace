import React, { useState, useEffect } from 'react';
import './Hero.css'; // We will create this file next

const HeroSlider = () => {
  // Array of your car images and texts
  const slides = [
    {
      image: "https://cdn.prod.website-files.com/65c3e2124e0ae36491eed349/65c3e2124e0ae36491eefca8_porcheinterior.jpeg",
      title: "Find Your Dream Premium Car",
      subtitle: "Discover, compare, and buy with confidence."
    },
    {
      image: "https://www.supercars.net/blog/wp-content/uploads/2024/06/Lamborghini-scaled.jpg",
      title: "Luxury Vehicles for Rent",
      subtitle: "Experience the ultimate drive today."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnGQNrydxNTAffjd_HXaG-DqbrN_CBXmW_YYJY8g0ZfANBHdafw2j5XvI&s=10",
      title: "Exclusive Marketplace",
      subtitle: "Unmatched performance, directly to your driveway."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer); // Clean up timer on unmount
  }, [slides.length]);

  return (
    <div className="hero-banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})` }}
        >
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;