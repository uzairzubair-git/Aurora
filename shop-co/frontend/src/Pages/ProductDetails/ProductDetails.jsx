import { useParams } from "react-router-dom";
import { useState } from "react";

import { useCart } from "../../context/context.jsx";
import products from "../../data/products";

import "./ProductDetails.css";

function ProductDetails() {
  // Get product ID from the URL
  const { id } = useParams();

  // Find the product
  const product = products.find((item) => item.id === Number(id));

  // Product states
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // Cart
  const { setCartItems } = useCart();

  // Product doesn't exist
  if (!product) {
    return <h1>Product not found</h1>;
  }

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Add product to cart
  const addToCart = () => {
    const cartProduct = {
      ...product,
      quantity,
      selectedSize,
      selectedColor,
    };

    setCartItems((previousItems) => [...previousItems, cartProduct]);
  };

  return (
    <main className="product-details">
      {/* Product Image */}
      <div className="product-details-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Product Information */}
      <div className="product-details-info">
        <h1>{product.name}</h1>

        {/* Rating */}
        <div className="product-details-rating">
          <span>★★★★★</span>
          <span>{product.rating}/5</span>
        </div>

        {/* Price */}
        <h2>${product.price}</h2>

        {/* Description */}
        <p className="product-description">
          This product is designed with high-quality materials and a modern
          style that fits your everyday wardrobe.
        </p>

        <hr />

        {/* Colors */}
        <p>Select Color</p>

        <div className="color-options">
          <button
            className="color black"
            onClick={() => setSelectedColor("Black")}
            aria-label="Black"
          ></button>

          <button
            className="color white"
            onClick={() => setSelectedColor("White")}
            aria-label="White"
          ></button>

          <button
            className="color green"
            onClick={() => setSelectedColor("Green")}
            aria-label="Green"
          ></button>
        </div>

        <p>Selected color: {selectedColor || "None"}</p>

        {/* Sizes */}
        <p>Select Size</p>

        <div className="size-options">
          <button onClick={() => setSelectedSize("Small")}>Small</button>

          <button onClick={() => setSelectedSize("Medium")}>Medium</button>

          <button onClick={() => setSelectedSize("Large")}>Large</button>

          <button onClick={() => setSelectedSize("X-Large")}>X-Large</button>
        </div>

        <p>Selected size: {selectedSize || "None"}</p>

        {/* Quantity + Cart */}
        <div className="cart-controls">
          <div className="quantity">
            <button onClick={decreaseQuantity}>-</button>

            <span>{quantity}</span>

            <button onClick={increaseQuantity}>+</button>
          </div>

          <button className="add-cart" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
