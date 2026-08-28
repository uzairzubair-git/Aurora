import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  const handleWishlistClick = (event) => {
    // stop the click from also triggering the Link navigation
    event.preventDefault();
    event.stopPropagation();

    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <article className="product-card">

      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
          />

          {product.badge && (
            <span className="product-badge">{product.badge}</span>
          )}

          <button
            type="button"
            className={`wishlist-button ${inWishlist ? "active" : ""}`}
            onClick={handleWishlistClick}
            aria-label={
              inWishlist ? "Remove from wishlist" : "Add to wishlist"
            }
          >
            {inWishlist ? "♥" : "♡"}
          </button>
        </div>
      </Link>

      <h3>
        <Link to={`/product/${product.id}`}>
          {product.name}
        </Link>
      </h3>

      <div className="product-rating">
        <span>★★★★★</span>

        <span>
          {product.rating || "4.5"}/5
        </span>
      </div>

      <div className="product-price">
        ${product.price}
      </div>

    </article>
  );
}

export default ProductCard;
