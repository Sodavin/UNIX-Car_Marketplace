import { useEffect } from 'react';
import '../components/About/About.css';

function AboutPage() {
  useEffect(() => {
    document.title = 'UNIX | About';
  }, []);

  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '5K+', label: 'Vehicles Listed' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const features = [
    {
      icon: '🔍',
      title: 'Smart Search',
      description: 'Find your perfect car with our advanced filtering and search capabilities'
    },
    {
      icon: '🛡️',
      title: 'Verified Vehicles',
      description: 'Every car is inspected and verified for quality and authenticity'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Competitive pricing with transparent terms and no hidden fees'
    },
    {
      icon: '🚗',
      title: 'Multiple Options',
      description: 'Buy or rent - choose the option that works best for you'
    },
    {
      icon: '📱',
      title: 'Easy Process',
      description: 'Simple, user-friendly booking and documentation process'
    },
    {
      icon: '⭐',
      title: 'Expert Support',
      description: 'Our dedicated team is here to help you every step of the way'
    }
  ];

  const team = [
    { name: 'Yan Vanthorn', role: 'CEO & Founder', image: '👨‍💼' },
    { name: 'Ty Hongly', role: 'Head of Operations', image: '👩‍💼' },
    { name: 'Rann Tepitou', role: 'Head of Sales', image: '👨‍💼' },
    { name: 'Theam Bunlong', role: 'Customer Success Lead', image: '👩‍💼' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About UNIX</h1>
          <p>Revolutionizing the car marketplace with transparency, quality, and customer-first service</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="about-section container">
        <div className="about-grid">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              UNIX is Southeast Asia's leading digital car marketplace, connecting buyers and sellers with verified, high-quality vehicles. Since our founding in 2026, we've been committed to making car shopping and renting transparent, secure, and hassle-free.
            </p>
            <p>
              With a team of automotive experts and technology innovators, we've built a platform that serves over 10,000 happy customers and manages more than 5,000 vehicles at any given time.
            </p>
          </div>
          <div className="about-highlight">
            <div className="highlight-card">
              <p>"We believe everyone deserves access to quality cars without the complexity"</p>
              <span>- Our Mission</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To democratize car ownership and rental by providing a trusted, transparent platform where customers can discover, compare, and purchase vehicles with confidence.
              </p>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>
                To become the most customer-centric car marketplace in Southeast Asia, setting new standards for quality, transparency, and innovation in the automotive industry.
              </p>
            </div>
            <div className="mission-card">
              <h3>Our Values</h3>
              <p>
                Integrity in every transaction, customer success as our priority, continuous innovation, and a commitment to sustainability and community responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-section stats-section">
        <div className="container">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-section features-section">
        <div className="container">
          <h2>Why Choose UNIX?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section team-section">
        <div className="container">
          <h2>Meet Our Leadership</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.image}</div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Explore our marketplace and find your perfect car today</p>
            <div className="cta-buttons">
              <a href="/buy" className="btn btn-primary">Browse Vehicles</a>
              <a href="/contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
