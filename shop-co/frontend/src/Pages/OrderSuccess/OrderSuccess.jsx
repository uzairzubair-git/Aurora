import { Link } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  return (
    <main className="order-success">
      <div className="success-box">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for your purchase. Your order has been
          successfully placed.
        </p>

        <div className="success-actions">
          <Link to="/shop">
            Continue Shopping
          </Link>

          <Link to="/">
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}

export default OrderSuccess;