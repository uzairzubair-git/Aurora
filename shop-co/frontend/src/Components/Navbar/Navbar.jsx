import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/context.jsx";
import { FaOpencart } from "react-icons/fa6";

function Navbar() {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  return (
    <nav className="navbar">

      {/* Mobile Menu */}
      <button className="menu-button" type="button">
        ☰
      </button>

      {/* Logo */}
      <Link to="/" className="navbar-logo">
        SHOP.Co
      </Link>

      {/* Navigation */}
      <div className="navbar-links">
        <Link to="/shop">Shop</Link>

        <Link to="/shop">On Sale</Link>

        <Link to="/">New Arrival</Link>

        <Link to="/shop">Brands</Link>
      </div>

      {/* Actions */}
      <div className="navbar-actions">

        {/* Search */}
        <input
          type="text"
          placeholder="Search For Products..."
        />

        {/* Cart */}
        <Link to="/cart" className="cart-icon">
          <FaOpencart />

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Account */}
        <Link to="/login" className="account-button">
          👤
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;