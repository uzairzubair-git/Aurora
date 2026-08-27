import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../../context/context.jsx';
import './Checkout.css';

function Checkout() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0,
  );

  const deliveryFee = cartItems.length > 0 ? 15 : 0;

  const total = subtotal + deliveryFee;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const orderData = {
        customerName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        items: cartItems,
        total: total,
      };

      const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      const createdOrder = await response.json();

      console.log('Order created:', createdOrder);

      // Clear the cart after successful order
      setCartItems([]);

      navigate('/order-success');
    } catch (error) {
      console.error('Order error:', error);
      alert('Something went wrong while placing your order.');
    }
  };

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <div className="empty-checkout">
          <h1>Your cart is empty</h1>

          <p>Add some products before checking out.</p>

          <Link to="/shop">Continue Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-header">
        <h1>Checkout</h1>

        <p>Complete your information to place your order.</p>
      </div>

      <div className="checkout-layout">
        {/* =========================
            BILLING FORM
        ========================== */}

        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Billing Information</h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>

              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>

              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+92 300 1234567"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>

            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="House number, street, area"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>

              <input
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Karachi"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>

              <input
                id="postalCode"
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="74000"
                required
              />
            </div>
          </div>

          <button type="submit" className="place-order-button">
            Place Order
          </button>
        </form>

        {/* =========================
            ORDER SUMMARY
        ========================== */}

        <aside className="checkout-summary">
          <h2>Your Order</h2>

          <div className="checkout-items">
            {cartItems.map((item, index) => (
              <div className="checkout-item" key={`${item.id}-${index}`}>
                <div className="checkout-item-image">
                  <img src={item.image} alt={item.name} />

                  <span>{item.quantity}</span>
                </div>

                <div className="checkout-item-info">
                  <h3>{item.name}</h3>

                  {item.selectedSize && <p>Size: {item.selectedSize}</p>}

                  {item.selectedColor && <p>Color: {item.selectedColor}</p>}
                </div>

                <strong>
                  ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                </strong>
              </div>
            ))}
          </div>

          <div className="summary-divider" />

          <div className="summary-row">
            <span>Subtotal</span>

            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>

            <span>${deliveryFee.toFixed(2)}</span>
          </div>

          <div className="summary-divider" />

          <div className="summary-total">
            <strong>Total</strong>

            <strong>${total.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;
