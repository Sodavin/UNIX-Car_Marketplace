import { useEffect, useState } from 'react';
import '../components/Contact/Contact.css';

function ContactPage() {
  useEffect(() => {
    document.title = 'UNIX | Contact';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      details: ['Phnom Penh, Cambodia']
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+855 12 345 678', 'Mon-Sun: 8AM-8PM']
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['support@unix.com', 'sales@unix.com']
    },
    {
      icon: '⏰',
      title: 'Hours',
      details: ['Monday - Sunday', '8:00 AM - 8:00 PM']
    }
  ];

  const faqItems = [
    {
      question: 'How quickly will I get a response?',
      answer: 'We typically respond to all inquiries within 24 hours during business hours. For urgent matters, please call us directly.'
    },
    {
      question: 'What are your payment methods?',
      answer: 'We accept all major credit cards, bank transfers, and online payment platforms. Payment plans are also available for vehicle purchases.'
    },
    {
      question: 'Can I schedule a test drive?',
      answer: 'Yes! You can schedule a test drive directly through our website or by contacting our sales team at sales@unix.com.'
    },
    {
      question: 'Do you offer vehicle inspection reports?',
      answer: 'Absolutely. Every vehicle comes with a detailed inspection report that you can review before making a purchase.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 7-day money-back guarantee on all purchases. Please contact our customer support team to initiate a return.'
    },
    {
      question: 'How do I track my order?',
      answer: 'Once you complete a purchase, you\'ll receive a tracking number and can monitor your order status through your account dashboard.'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="contact-section container">
        <div className="contact-info-grid">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-info-card">
              <div className="contact-icon">{info.icon}</div>
              <h3>{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you shortly</p>
            </div>

            {submitted && (
              <div className="success-message">
                <div className="success-content">
                  <span className="success-icon">✓</span>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting UNIX. We'll get back to you soon.</p>
                </div>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your inquiry in detail..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-section faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <details className="faq-details">
                  <summary className="faq-question">
                    <span>{item.question}</span>
                    <span className="faq-toggle">+</span>
                  </summary>
                  <p className="faq-answer">{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="contact-section social-section">
        <div className="container">
          <div className="social-content">
            <h2>Follow Us</h2>
            <p>Stay updated with the latest news and offers from UNIX</p>
            <div className="social-links">
              <a href="#instagram" className="social-link" aria-label="Instagram">
                <span>📱</span> Instagram
              </a>
              <a href="#facebook" className="social-link" aria-label="Facebook">
                <span>📱</span> Facebook
              </a>
              <a href="#twitter" className="social-link" aria-label="Twitter">
                <span>📱</span> Twitter
              </a>
              <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                <span>📱</span> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="contact-section map-section">
        <div className="map-placeholder">
          <p>📍 We're located in Phnom Penh, Cambodia</p>
          <p>Visit us for a test drive or personal consultation</p>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
