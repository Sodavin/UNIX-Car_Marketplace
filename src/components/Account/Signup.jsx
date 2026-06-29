import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Account.css';

function Signup({ onSignup }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const result = onSignup({
      fullName: formData.fullName,
      username: formData.username,
      password: formData.password,
    });

    if (result.success) {
      navigate('/user-dashboard');
      return;
    }

    setError(result.message || 'Unable to create account.');
  };

  return (
    <main className="account-page">
      <section className="account-panel">
        <div className="account-hero-panel">
          <div>
            <p className="eyebrow">Create your account</p>
            <h1>Join the UNIX experience</h1>
            <p className="account-copy">
              Start saving items, tracking orders, and unlocking faster checkout.
            </p>
          </div>
          <div className="account-cta-strip">
            <span>Already have an account?</span>
            <Link to="/login" className="account-ghost-btn">
              Sign in
            </Link>
          </div>
        </div>

        <form className="account-form" onSubmit={handleSubmit}>
          <label className="field-group">
            <span>Full name</span>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" required />
          </label>

          <label className="field-group">
            <span>Email</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
          </label>

          <label className="field-group">
            <span>Username</span>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="johndoe" required />
          </label>

          <label className="field-group">
            <span>Password</span>
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create a password" required />
          </label>

          <label className="field-group">
            <span>Confirm password</span>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Repeat your password" required />
          </label>

          {error && <p className="text-link" style={{ color: '#ff6b6b' }}>{error}</p>}

          <button className="primary-btn" type="submit">
            Create account
          </button>
        </form>
      </section>
    </main>
  );
}

export default Signup;
