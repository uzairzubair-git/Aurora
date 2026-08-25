import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <main className="order-success">
      <div className="success-card">
        <div className="success-icon">✓</div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for your order. Your order has been
          received successfully.
        </p>

        <div className="success-actions">
          <Link to="/" className="home-button">
            Back to Home
          </Link>

          <Link to="/shop" className="shop-button">
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}

export default OrderSuccess;