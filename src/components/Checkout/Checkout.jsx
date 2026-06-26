import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./Cart";
import Receipt from "./Receipt";
import QRImage from "../QR/QR.jpg";
import "./Checkout.css";

export default function Checkout() {
  const navigate = useNavigate();

  const { items: cartItems, addItem, clearCart } = useCart();

  const [payment, setPayment] = useState("ABA PAY");
  const [contact, setContact] = useState("Phone");
  const [showQRCode, setShowQRCode] = useState(false);
  const [showCODConfirm, setShowCODConfirm] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [paymentReference, setPaymentReference] = useState("");
  const [orderData, setOrderData] = useState(null);

  const [customer, setCustomer] = useState({
    fullname: "",
    phone: "",
    address: "",
  });

  const [contactValue, setContactValue] = useState("");

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1),
    0,
  );

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = () => {
    if (!customer.fullname || !customer.phone || !customer.address) {
      alert("Please fill all information.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const reference = `UNX-${Math.floor(100000 + Math.random() * 900000)}`;
    const paymentLabel = payment === "Cash" ? "Cash on Delivery" : payment;
    setPaymentReference(reference);
    setOrderData({
      customer,
      cartItems,
      payment: paymentLabel,
      contact,
      contactValue,
      total,
      paymentReference: reference,
    });

    if (payment === "Cash") {
      setShowCODConfirm(true);
    } else {
      setShowQRCode(true);
    }
  };

  const handleCancelQRCode = () => {
    setShowQRCode(false);
    setPaymentReference("");
    setOrderData(null);
  };

  const handleCancelCOD = () => {
    setShowCODConfirm(false);
    setOrderData(null);
    setPaymentReference("");
  };

  const handleConfirmPayment = () => {
    clearCart();
    setShowQRCode(false);
    setShowCODConfirm(false);
    setShowReceipt(true);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-copy">
          <p className="eyebrow">Checkout</p>
          <h1>Complete your order</h1>
          <p className="checkout-subtitle">
            Review your cart, choose a payment method, and place your order with confidence.
          </p>
        </div>
      </div>

      <div className="left-section">
        <div className="card">
          <div className="card-headline">
            <p className="eyebrow">Billing details</p>
            <h2>Customer information</h2>
          </div>

          <div className="form-grid">
            <input
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={customer.fullname}
              onChange={handleChange}
              className="input"
            />

            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              className="input"
            />

            <textarea
              placeholder="Address"
              name="address"
              value={customer.address}
              onChange={handleChange}
              className="textarea"
            />
          </div>
        </div>

        <div className="card cart-card">
          <div className="card-header">
            <div>
              <p className="eyebrow">Order summary</p>
              <h2>My Shopping Bag ({cartItems.length})</h2>
            </div>
            {cartItems.length > 0 && (
              <button
                type="button"
                className="clear-cart-btn"
                onClick={clearCart}
              >
                Clear cart
              </button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <p className="empty-note">Your shopping bag is empty. Add products to continue.</p>
          ) : (
            <div className="product-list">
              {cartItems.map((item, index) => (
                <div className="product" key={index}>
                  <img src={item.image} alt={item.name} className="product-img" />

                  <div className="product-meta">
                    <div className="product-title">
                      <h3>{item.name}</h3>
                      <span className="product-source">{item.source || 'Buy'}</span>
                      <span className="product-quantity">Qty {item.quantity || 1}</span>
                    </div>
                    <p className="product-price">${Number(item.price).toLocaleString()}</p>
                  </div>

                  <div className="qty-controls">
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => addItem(item, -1)}
                      disabled={Number(item.quantity || 1) <= 1}
                    >
                      -
                    </button>
                    <span className="qty-value">{item.quantity || 1}</span>
                    <button
                      type="button"
                      className="qty-btn"
                      onClick={() => addItem(item, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="right-section">
        <div className="card">
          <div className="card-headline">
            <p className="eyebrow">Payment</p>
            <h2>Choose a payment method</h2>
          </div>

          <select
            className="input"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option>ABA PAY</option>
            <option>ACLEDA PAY</option>
            <option>Wing Bank</option>
            <option>Cash</option>
          </select>
        </div>

        <div className="card">
          <div className="card-headline">
            <p className="eyebrow">Contact</p>
            <h2>Preferred channel</h2>
          </div>

          <div className="contact-buttons">
            <button
              className={contact === "Phone" ? "active" : ""}
              onClick={() => setContact("Phone")}
            >
              Phone
            </button>

            <button
              className={contact === "Telegram" ? "active" : ""}
              onClick={() => setContact("Telegram")}
            >
              Telegram
            </button>

            <button
              className={contact === "WhatsApp" ? "active" : ""}
              onClick={() => setContact("WhatsApp")}
            >
              WhatsApp
            </button>
          </div>

          <input
            type="text"
            className="input"
            placeholder={`Enter ${contact}`}
            value={contactValue}
            onChange={(e) => setContactValue(e.target.value)}
          />
        </div>

        <div className="card summary-card">
          <div className="card-headline">
            <p className="eyebrow">Order total</p>
            <h2>Ready to place</h2>
          </div>

          <div className="summary-list">
            <div className="summary-row">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            Pay now
          </button>
        </div>
      </div>

      {showQRCode && (
        <div className="qr-modal" onClick={handleCancelQRCode}>
          <div className="qr-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="qr-close"
              onClick={handleCancelQRCode}
            >
              ✕
            </button>
            <div className="qr-header">
              <h3>Scan to Pay</h3>
              <p>{payment} payment reference</p>
            </div>
            <div className="qr-body">
              <div className="qr-code">
                <img src={QRImage} alt="QR Code" />
              </div>
              <div className="qr-details">
                <span className="qr-label">Reference</span>
                <strong>{paymentReference}</strong>
                <span className="qr-label">Amount</span>
                <strong>${total.toFixed(2)}</strong>
                <p className="qr-note">
                  Please scan this code in your banking app to complete the
                  payment.
                </p>
              </div>
            </div>
            <div className="qr-actions">
              <button
                className="receipt-button receipt-button--secondary"
                onClick={handleCancelQRCode}
              >
                Cancel
              </button>
              <button className="receipt-button" onClick={handleConfirmPayment}>
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* when click Cash */}
      {showCODConfirm && orderData && (
        <div className="qr-modal" onClick={handleCancelCOD}>
          <div className="qr-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="qr-close"
              onClick={handleCancelCOD}
            >
              ✕
            </button>
            <div className="qr-header">
              <h3>Cash on Delivery</h3>
              <p>Please confirm your order for cash payment at delivery.</p>
            </div>
            <div className="qr-body">
              <div className="qr-details">
                <span className="qr-label">Reference</span>
                <strong>{paymentReference}</strong>
                <span className="qr-label">Amount</span>
                <strong>${total.toFixed(2)}</strong>
                <p className="qr-note">
                  Your order will be confirmed and the receipt will be shown
                  once you tap Confirm Order.
                </p>
              </div>
            </div>
            <div className="qr-actions">
              <button
                className="receipt-button receipt-button--secondary"
                onClick={handleCancelCOD}
              >
                Cancel
              </button>
              <button className="receipt-button" onClick={handleConfirmPayment}>
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      )}

      {showReceipt && orderData && (
        <div className="receipt-overlay" onClick={() => setShowReceipt(false)}>
          <div className="receipt-slide" onClick={(e) => e.stopPropagation()}>
            <Receipt
              orderData={orderData}
              onBackToStore={() => {
                setShowReceipt(false);
                navigate("/home");
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}