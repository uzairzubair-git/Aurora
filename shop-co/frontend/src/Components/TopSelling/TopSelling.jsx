import "./TopSelling.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../api/products";

function TopSelling() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading top selling products:", error);
        setLoading(false);
      });
  }, []);

  const topProducts = products.slice(0, 2);

  return (
    <section className="top-selling">
      <h2>TOP SELLING</h2>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid">
          {topProducts.map((product) => (
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

export default TopSelling;