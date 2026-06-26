import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./cart/CartContext";
import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaPhone,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import Receipt from "./Receipt";
import QRImage from "./QRCode/QR.jpg";
import "./Productpage/Checkout.css";

export default function Checkout() {
  const navigate = useNavigate();

  const { items: cartItems, addItem, removeItem, clearCart } = useCart();

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
      {/* LEFT */}
      <div className="left-section">
        {/* ADDRESS */}
        <div className="card">
          <h2>Descript Information</h2>

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

        {/* CART */}
        <div className="card">
          <div className="card-header">
            <h2>My Shopping Bag ({cartItems.length})</h2>
            {cartItems.length > 0 && (
              <button
                type="button"
                className="clear-cart-btn"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <p>Your shopping bag is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="product" key={index}>
                <img src={item.image} alt={item.name} className="product-img" />

                <div className="product-info">
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity || 1}</p>
                  <h4>${item.price}</h4>
                </div>

                <div className="qty-controls">
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => addItem(item, -1)}
                    disabled={Number(item.quantity || 1) <= 1}
                  >
                    <FaMinus />
                  </button>
                  <span className="qty-value">{item.quantity || 1}</span>
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => addItem(item, 1)}
                  >
                    <FaPlus />
                  </button>
                </div>

                <button className="remove-btn" onClick={() => removeItem(item)}>
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* RIGHT */}
      <div className="right-section">
        {/* PAYMENT */}
        <div className="card">
          <h2>Payment Method</h2>

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

        {/* CONTACT */}
        <div className="card">
          <h2>Preferred Contact</h2>

          <div className="contact-buttons">
            <button
              className={contact === "Phone" ? "active" : ""}
              onClick={() => setContact("Phone")}
            >
              <FaPhone /> Phone
            </button>

            <button
              className={contact === "Telegram" ? "active" : ""}
              onClick={() => setContact("Telegram")}
            >
              <FaTelegramPlane /> Telegram
            </button>

            <button
              className={contact === "WhatsApp" ? "active" : ""}
              onClick={() => setContact("WhatsApp")}
            >
              <FaWhatsapp /> WhatsApp
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

        {/* TOTAL */}
        <div className="card total-box">
          <div className="row">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>
          <hr />

          <div className="row amount">
            <span>Amount to Pay</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            Pay
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
