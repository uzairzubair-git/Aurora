import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/context.jsx";
import { FaOpencart } from "react-icons/fa6";
import "./Navbar.css";

function Navbar() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const handleSearch = (event) => {
    event.preventDefault();

    if (search.trim() === "") {
      navigate("/shop");
      return;
    }

    navigate(`/shop?search=${encodeURIComponent(search.trim())}`);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Mobile menu */}
      <button
        className="menu-button"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Logo */}
      <Link to="/" className="navbar-logo">
        SHOP.Co
      </Link>

      {/* Navigation */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>
          Shop
        </Link>

        <Link to="/shop?category=Sale" onClick={() => setMenuOpen(false)}>
          On Sale
        </Link>

        <Link to="/shop?category=New%20Arrival" onClick={() => setMenuOpen(false)}>
          New Arrival
        </Link>

        <Link to="/shop?category=Brands" onClick={() => setMenuOpen(false)}>
          Brands
        </Link>
      </div>

      {/* Actions */}
      <div className="navbar-actions">

        {/* Search */}
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search For Products.."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>

        {/* Cart */}
        <Link to="/cart" className="cart-icon">
          <FaOpencart />

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>

        {/* User */}
        <Link to="/login" className="user-button">
          👤
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;