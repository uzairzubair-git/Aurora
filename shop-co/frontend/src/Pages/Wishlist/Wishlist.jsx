import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

import "./Wishlist.css";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  return (
    <main className="wishlist-page">

      <div className="wishlist-header">
        <h1>My Wishlist</h1>

        <p>
          Your favorite products are saved here.
        </p>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">

          <h2>Your wishlist is empty</h2>

          <p>
            Start adding products you love.
          </p>

          <Link to="/shop">
            Browse Products
          </Link>

        </div>
      ) : (
        <div className="wishlist-grid">

          {wishlist.map((product) => (
            <article
              className="wishlist-card"
              key={product.id}
            >

              <Link to={`/product/${product.id}`}>

                <img
                  src={product.image}
                  alt={product.name}
                />

              </Link>

              <div className="wishlist-card-info">

                <p>{product.category}</p>

                <h2>{product.name}</h2>

                <strong>
                  ${product.price}
                </strong>

                <div className="wishlist-actions">

                  <Link
                    to={`/product/${product.id}`}
                    className="wishlist-view"
                  >
                    View Product
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>
      )}

    </main>
  );
}

export default Wishlist;