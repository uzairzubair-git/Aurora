import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useCart } from "../../context/context.jsx";
import products from "../../data/products";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const { setCartItems } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // Find product from URL
  const product = products.find((item) => item.id === Number(id));

  // Product doesn't exist
  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Product Not Found</h1>

        <p>Sorry, we couldn't find this product.</p>

        <Link to="/shop">Back to Shop</Link>
      </main>
    );
  }

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity((previousQuantity) =>
      previousQuantity > 1 ? previousQuantity - 1 : 1,
    );
  };

  // Add to cart
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

    setCartItems((previousItems) => [...previousItems, cartProduct]);
  };

  return (
    <main className="product-details-page">
      {/* Breadcrumb */}
      <div className="product-breadcrumb">
        <Link to="/">Home</Link>

        <span>/</span>

        <Link to="/shop">Shop</Link>

        <span>/</span>

        <span>{product.name}</span>
      </div>

      <section className="product-details">
        {/* Product Image */}
        <div className="product-details-image">
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.name} />

            {product.badge && (
              <span className="product-details-badge">{product.badge}</span>
            )}
          </div>
        </div>

        {/* Product Information */}
        <div className="product-details-info">
          <p className="product-details-category">{product.category}</p>

          <h1>{product.name}</h1>

          {/* Rating */}
          <div className="product-rating">
            <span className="stars">★★★★★</span>

            <span>{product.rating || "4.5"}/5</span>
          </div>

          {/* Price */}
          <div className="product-details-price">
            <strong>${product.price}</strong>

            {product.oldPrice && <del>${product.oldPrice}</del>}
          </div>

          {/* Description */}
          <p className="product-description">
            This product is made with high-quality materials and designed for
            comfort, style, and everyday use.
          </p>

          <hr />

          {/* Color */}
          <div className="product-option">
            <h3>Select Color</h3>

            <div className="color-options">
              <button
                type="button"
                aria-label="Black"
                className={`color-option black ${
                  selectedColor === "Black" ? "active" : ""
                }`}
                onClick={() => setSelectedColor("Black")}
              />

              <button
                type="button"
                aria-label="White"
                className={`color-option white ${
                  selectedColor === "White" ? "active" : ""
                }`}
                onClick={() => setSelectedColor("White")}
              />

              <button
                type="button"
                aria-label="Green"
                className={`color-option green ${
                  selectedColor === "Green" ? "active" : ""
                }`}
                onClick={() => setSelectedColor("Green")}
              />
            </div>

            <p className="selected-option">
              {selectedColor
                ? `Selected: ${selectedColor}`
                : "Please select a color"}
            </p>
          </div>

          {/* Size */}
          <div className="product-option">
            <h3>Select Size</h3>

            <div className="size-options">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
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
              ))}
            </div>

            <p className="selected-option">
              {selectedSize
                ? `Selected: ${selectedSize}`
                : "Please select a size"}
            </p>
          </div>

          {/* Quantity + Add Cart */}
          <div className="product-actions">
            <div className="product-quantity">
              <button type="button" onClick={decreaseQuantity}>
                −
              </button>

              <span>{quantity}</span>

              <button type="button" onClick={increaseQuantity}>
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
