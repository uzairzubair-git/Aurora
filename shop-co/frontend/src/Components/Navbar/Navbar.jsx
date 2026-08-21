import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SHOP.Co</div>

      <div className="navbar-links">
        <a href="#">Shop</a>
        <a href="#">On Sale</a>
        <a href="#">New Arrival</a>
        <a href="#">Brands</a>
      </div>

      <div className="navbar-actions">
        <input type="text" placeholder="Search For Prouducts.." />

        <button>🛒</button>
        <button>👤</button>
      </div>
    </nav>
  );
}

export default Navbar;