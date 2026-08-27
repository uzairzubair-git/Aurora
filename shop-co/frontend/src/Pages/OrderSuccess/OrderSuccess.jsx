import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <main className="order-success-page">
      <div className="order-success-card">
        <div className="success-icon">
          ✓
        </div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for your order. Your order has been received
          and is being processed.
        </p>

        <div className="success-actions">
          <Link to="/shop" className="continue-shopping-button">
            Continue Shopping
          </Link>

          <Link to="/" className="home-button">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default OrderSuccess;