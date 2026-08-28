import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">
          <h2>SHOP.Co</h2>

          <p>
            Find clothes that match your style. Quality fashion
            for everyday life.
          </p>

          <div className="social-icons">
            <span>🔗</span>
            <span>🔗</span>
            <span>🔗</span>
            <span>🔗</span>
          </div>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>COMPANY</h3>

          <Link to="/">About</Link>
          <Link to="/shop">Features</Link>
          <Link to="/shop">Works</Link>
          <Link to="/login">Career</Link>
        </div>

        {/* Help */}
        <div className="footer-column">
          <h3>HELP</h3>

          <Link to="/cart">Customer Support</Link>
          <Link to="/checkout">Delivery Details</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </div>

        {/* FAQ */}
        <div className="footer-column">
          <h3>FAQ</h3>

          <Link to="/login">Account</Link>
          <Link to="/checkout">Manage Deliveries</Link>
          <Link to="/orders">Order Tracking</Link>
          <Link to="/checkout">Payments</Link>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h3>RESOURCES</h3>

          <Link to="/shop">Free Ebooks</Link>
          <Link to="/shop">Development Tutorial</Link>
          <Link to="/shop">How-to Blog</Link>
          <Link to="/shop">Affiliate Program</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 SHOP.Co. All rights reserved.</p>

        <div className="payment-methods">
          <span>VISA</span>
          <span>MC</span>
          <span>APPLE PAY</span>
          <span>G PAY</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;