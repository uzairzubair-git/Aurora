import "./ProductSection.css";

import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../api/products";

function ProductSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load products");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="product-section">
        <h2>NEW ARRIVALS</h2>
        <p>Loading products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="product-section">
        <h2>NEW ARRIVALS</h2>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="product-section">
      <h2>NEW ARRIVALS</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <button className="view-all-button">
        View All
      </button>
    </section>
  );
}

export default ProductSection;