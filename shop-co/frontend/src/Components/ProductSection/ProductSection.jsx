import "./ProductSection.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../api/products";

function ProductSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setLoading(false);
      });
  }, []);

  // Show only the first 4 products on Home
  const newArrivals = products.slice(0, 4);

  return (
    <section className="product-section">
      <h2>NEW ARRIVALS</h2>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

      <Link
        to="/shop"
        className="view-all-button"
      >
        View All
      </Link>
    </section>
  );
}

export default ProductSection;