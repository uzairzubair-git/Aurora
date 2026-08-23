import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>SHOP.Co</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum
          </p>

          <div className="social-icons">
            <span>🔗</span>
            <span>🔗</span>
            <span>🔗</span>
            <span>🔗</span>
          </div>
        </div>

        <div className="footer-column">
          <h3>COMPANY</h3>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Works</a>
          <a href="#">Career</a>
        </div>

        <div className="footer-column">
          <h3>HELP</h3>
          <a href="#">Customer Support</a>
          <a href="#">Delivery Details </a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-column">
          <h3>FAQ</h3>
          <a href="#">Account</a>
          <a href="#">Mange Deliveries</a>
          <a href="#">Order Tracking</a>
          <a href="#">Payments</a>
        </div>

        <div className="footer-column">
          <h3>RESOURCES</h3>
          <a href="#">Free Ebooks</a>
          <a href="#">Development Tutorial</a>
          <a href="#">How-to blog</a>
          <a href="#">Affiliate Program</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 SHOP.Co. All rights reserved.</p>

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
