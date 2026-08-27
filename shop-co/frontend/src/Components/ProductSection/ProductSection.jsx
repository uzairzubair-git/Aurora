import "./ProductSection.css";

import { useEffect, useState } from "react";
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

  return (
    <section className="product-section">
      <h2>NEW ARRIVALS</h2>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

      <button className="view-all-button">
        View All
      </button>
    </section>
  );
}

export default ProductSection;