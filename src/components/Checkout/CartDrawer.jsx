import { Link } from 'react-router-dom';
import { useCart } from './Cart';

export default function CartDrawer({ open, onClose }) {
  const { items, addItem, removeItem, clearCart } = useCart();
  const total = items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0);

  return (
    <div className={`cart-drawer-overlay ${open ? 'open' : ''}`} onClick={onClose}>
      <aside className={`cart-drawer ${open ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="cart-drawer-header">
          <div>
            <p className="cart-drawer-label">Your Cart</p>
            <h2 className="cart-drawer-title">Ready to checkout</h2>
          </div>
          <button type="button" className="drawer-close" onClick={onClose} aria-label="Close cart drawer">
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer-empty">
            <strong>Your cart is empty</strong>
            <p>Add products to your cart to start checkout.</p>
          </div>
        ) : (
          <>
            <div className="cart-drawer-items">
              {items.map((item) => (
                <div className="drawer-item" key={item.id}>
                  <button
                    type="button"
                    className="item-remove item-remove-top"
                    onClick={() => removeItem(item)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M6 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      <path d="M9 7V5.5C9 4.67157 9.67157 4 10.5 4h3c.8284 0 1.5.67157 1.5 1.5V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      <path d="M8 7V18a2 2 0 002 2h4a2 2 0 002-2V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 11v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      <path d="M14 11v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <img src={item.image} alt={item.name} />
                  <div className="drawer-item-body">
                    <div className="item-meta">
                      <h3>{item.name}</h3>
                      <p>{item.make} · {item.year}</p>
                      <span className="item-source">{item.source || 'Buy'}</span>
                    </div>
                    <div className="item-price">${Number(item.price).toLocaleString()}</div>
                  </div> 
                  <div className="item-controls">
                    <div className="quantity-control">
                      <button type="button" onClick={() => addItem(item, -1)} disabled={Number(item.quantity || 1) <= 1}>
                        -
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button type="button" onClick={() => addItem(item, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-drawer-summary">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <div className="cart-drawer-actions">
              <button type="button" className="clear-cart-btn" onClick={clearCart}>
                Clear cart
              </button>
              <Link to="/checkout" className="drawer-button drawer-button-primary" onClick={onClose}>
                Proceed to checkout
              </Link>
              <button type="button" className="drawer-button drawer-button-secondary" onClick={onClose}>
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
