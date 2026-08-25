import "./Navbar.css";
import { useCart } from "../../context/context.jsx";
import { FaOpencart } from "react-icons/fa6";

function Navbar() {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0,
  );

  return (
    <nav className="navbar">
      <button className="menu-button">☰</button>

      <div className="navbar-logo">SHOP.Co</div>

      <div className="navbar-links">
        <a href="#">Shop</a>
        <a href="#">On Sale</a>
        <a href="#">New Arrival</a>
        <a href="#">Brands</a>
      </div>

      <div className="navbar-actions">
        <input type="text" placeholder="Search For Products.." />

        <div className="cart-icon">
          <FaOpencart />

          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>

        <button>👤</button>
      </div>
    </nav>
  );
}

export default Navbar;
