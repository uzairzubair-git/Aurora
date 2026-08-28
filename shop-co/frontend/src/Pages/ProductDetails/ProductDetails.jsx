import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useCart } from "../../context/context.jsx";
import { getProduct, getProducts } from "../../api/products";
import Reviews from "../../Components/Reviews/Reviews.jsx";
import ProductCard from "../../Components/ProductCard/ProductCard.jsx";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { setCartItems } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // NEW: tabs
  const [activeTab, setActiveTab] = useState("details");

  // NEW: related products
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    setLoading(true);

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

  // NEW: fetch related products once we know this product's category
  useEffect(() => {
    if (!product) return;

    getProducts()
      .then((allProducts) => {
        const related = allProducts
          .filter(
            (item) =>
              item.category === product.category &&
              item.id !== product.id
          )
          .slice(0, 4);

        setRelatedProducts(related);
      })
      .catch((error) => {
        console.error("Error loading related products:", error);
      });
  }, [product]);

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
          {/* Simple thumbnail row using the same image 4x, per your choice to keep single image for now */}
          <div className="product-thumbnails">
            {[0, 1, 2, 3].map((index) => (
              <img
                key={index}
                src={product.image}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="product-thumbnail"
              />
            ))}
          </div>

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

      {/* NEW: Product Details / Rating & Reviews tabs */}
      <section className="product-tabs">
        <div className="product-tabs-buttons">
          <button
            type="button"
            className={activeTab === "details" ? "active" : ""}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>

          <button
            type="button"
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Rating & Reviews
          </button>
        </div>

        <div className="product-tabs-content">
          {activeTab === "details" ? (
            <p>
              This product is made with high-quality materials
              and designed for comfort, style, and everyday use.
              Category: {product.category}. Available in multiple
              sizes and colors to fit your style.
            </p>
          ) : (
            <Reviews />
          )}
        </div>
      </section>

      {/* NEW: You Might Also Like */}
      {relatedProducts.length > 0 && (
        <section className="related-products">
          <h2>YOU MIGHT ALSO LIKE</h2>

          <div className="related-products-grid">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default ProductDetails;