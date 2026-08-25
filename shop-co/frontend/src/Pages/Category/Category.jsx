import { useState } from "react";
import { Link } from "react-router-dom";

import products from "../../data/products";
import "./Category.css";

function Category() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "low-high") {
      return Number(a.price) - Number(b.price);
    }

    if (sortOption === "high-low") {
      return Number(b.price) - Number(a.price);
    }

    return 0;
  });

  return (
    <main className="category-page">
      {/* Header */}
      <div className="category-header">
        <h1>Shop</h1>

        <p>Find something you love from our collection.</p>
      </div>

      {/* Search + Sort */}
      <div className="shop-controls">
        <div className="shop-search">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="shop-sort">
          <label htmlFor="sort">Sort by:</label>

          <select
            id="sort"
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
          >
            <option value="default">Default</option>

            <option value="low-high">Price: Low → High</option>

            <option value="high-low">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="category-filters">
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>

        <button
          className={selectedCategory === "T-Shirts" ? "active" : ""}
          onClick={() => setSelectedCategory("T-Shirts")}
        >
          T-Shirts
        </button>

        <button
          className={selectedCategory === "Jeans" ? "active" : ""}
          onClick={() => setSelectedCategory("Jeans")}
        >
          Jeans
        </button>

        <button
          className={selectedCategory === "Shirts" ? "active" : ""}
          onClick={() => setSelectedCategory("Shirts")}
        >
          Shirts
        </button>

        <button
          className={selectedCategory === "Hoodies" ? "active" : ""}
          onClick={() => setSelectedCategory("Hoodies")}
        >
          Hoodies
        </button>
      </div>

      {/* Products */}
      {sortedProducts.length === 0 ? (
        <div className="no-products">
          <h2>No products found</h2>

          <p>Try another search or category.</p>
        </div>
      ) : (
        <div className="category-products">
          {sortedProducts.map((product) => (
            <article className="category-product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />

                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
              </div>

              <div className="product-card-info">
                <h2>{product.name}</h2>

                <p className="product-category">{product.category}</p>

                <div className="product-price">
                  <span>${product.price}</span>

                  {product.oldPrice && <del>${product.oldPrice}</del>}
                </div>

                <Link to={`/product/${product.id}`} className="view-product">
                  View Product
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default Category;
