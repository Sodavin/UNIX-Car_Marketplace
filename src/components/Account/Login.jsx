import { Link, useNavigate } from 'react-router-dom';
import './Account.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === 'unixcar.hl67@gmail.com' && password === '12457878') {
      navigate('/dashboard');
    } else {
      alert('Login successful');
    }
    
    event.target.reset();
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
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label className="field-group">
            <span>Password</span>
            <input type="password" name="password" placeholder="Enter your password" required />
          </label>

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
