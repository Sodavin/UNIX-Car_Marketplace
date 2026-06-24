import { Link } from 'react-router-dom';
import './Account.css';

function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Sign up successful');
    event.target.reset();
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
            <input type="text" placeholder="John Doe" required />
          </label>

          <label className="field-group">
            <span>Email</span>
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label className="field-group">
            <span>Password</span>
            <input type="password" placeholder="Create a password" required />
          </label>

          <label className="field-group">
            <span>Confirm password</span>
            <input type="password" placeholder="Repeat your password" required />
          </label>

          <button className="primary-btn" type="submit">
            Create account
          </button>
        </form>
      </section>
    </main>
  );
}

export default Signup;
