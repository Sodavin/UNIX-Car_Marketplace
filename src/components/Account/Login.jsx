import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Account.css';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = onLogin(formData);

    if (result.success) {
      navigate(result.role === 'admin' ? '/dashboard' : '/user-dashboard');
      return;
    }

    setError(result.message || 'Invalid username or password.');
  };

  return (
    <main className="account-page">
      <section className="account-panel">
        <div className="account-hero-panel">
          <div>
            <p className="eyebrow">Welcome back</p>
            <h1>Sign in to your account</h1>
            <p className="account-copy">
              Access your favorites, orders, and personalized store experience.
            </p>
          </div>
          <div className="account-cta-strip">
            <span>New here?</span>
            <Link to="/signup" className="account-ghost-btn">
              Create account
            </Link>
          </div>
        </div>

        <form className="account-form" onSubmit={handleSubmit}>
          <label className="field-group">
            <span>Username</span>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="admin"
              required
            />
          </label>

          <label className="field-group">
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </label>

          {error && <p className="text-link" style={{ color: '#ff6b6b' }}>{error}</p>}

          <div className="account-form-footer">
            <label className="checkbox-field">
              <input type="checkbox" /> Remember me
            </label>
            <a href="/contact" className="text-link">
              Forgot password?
            </a>
          </div>

          <button className="primary-btn" type="submit">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
