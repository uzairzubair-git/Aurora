import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useCart } from "../../context/context.jsx";
import { getProduct } from "../../api/products";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { setCartItems } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    getProduct(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <main className="product-not-found">
        <h1>Loading product...</h1>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product Not Found</h1>
        <p>Sorry, we couldn't find this product.</p>
        <Link to="/shop">Back to Shop</Link>
      </main>
    );
  }

  const increaseQuantity = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previousQuantity) =>
      previousQuantity > 1 ? previousQuantity - 1 : 1
    );
  };

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color.");
      return;
    }

    const cartProduct = {
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    };

    setCartItems((previousItems) => {
      const existingProduct = previousItems.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
      );

      if (existingProduct) {
        return previousItems.map((item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [...previousItems, cartProduct];
    });

    alert("Product added to cart!");
  };

  return (
    <main className="product-details-page">
      <div className="product-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <section className="product-details">
        <div className="product-details-image">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name} />

            {product.badge && (
              <span className="product-details-badge">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        <div className="product-details-info">
          <p className="product-details-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <div className="product-rating">
            <span className="stars">★★★★★</span>
            <span>{product.rating || "4.5"}/5</span>
          </div>

          <div className="product-details-price">
            <strong>${product.price}</strong>

            {product.oldPrice && (
              <del>${product.oldPrice}</del>
            )}
          </div>

          <p className="product-description">
            This product is made with high-quality materials
            and designed for comfort, style, and everyday use.
          </p>

          <hr />

          <div className="product-option">
            <h3>Select Color</h3>

            <div className="color-options">
              {["Black", "White", "Green"].map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`color-option ${color.toLowerCase()} ${
                    selectedColor === color ? "active" : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                  aria-label={color}
                />
              ))}
            </div>

            <p className="selected-option">
              {selectedColor
                ? `Selected: ${selectedColor}`
                : "Please select a color"}
            </p>
          </div>

          <div className="product-option">
            <h3>Select Size</h3>

            <div className="size-options">
              {["Small", "Medium", "Large", "X-Large"].map(
                (size) => (
                  <button
                    key={size}
                    type="button"
                    className={`size-option ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                )
              )}
            </div>

            <p className="selected-option">
              {selectedSize
                ? `Selected: ${selectedSize}`
                : "Please select a size"}
            </p>
          </div>

          <div className="product-actions">
            <div className="product-quantity">
              <button
                type="button"
                onClick={decreaseQuantity}
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="add-to-cart-button"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;