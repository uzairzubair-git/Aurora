import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import { getProducts } from '../../api/products';
import './Shop.css';

function Shop() {
  const [searchParams] = useSearchParams();

  // Get search and category from URL
  const searchQuery = searchParams.get('search') || '';
  const categoryQuery = searchParams.get('category') || '';

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  // Start search/category with URL values
  const [search, setSearch] = useState(searchQuery);
  const [category, setCategory] = useState(categoryQuery || 'All');

  // Get products from backend
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading products:', error);
        setLoading(false);
      });
  }, []);

  // Update search when URL changes
// Update category when URL changes
useEffect(() => {
  setCategory(categoryQuery || "All");
}, [categoryQuery]);

  // Categories
  const categories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ];

  // Search + category filtering
  useEffect(() => {
    let result = products;

    // Category filter
    if (category !== 'All') {
      result = result.filter((product) => product.category === category);
    }

    // Search filter
    if (search.trim() !== '') {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    setFilteredProducts(result);
  }, [search, category, products]);

  return (
    <main className="shop-page">
      {/* Header */}
      <section className="shop-header">
        <h1>Shop</h1>

        <p>Discover our latest collection of stylish products.</p>
      </section>

      {/* Search + Filters */}
      <section className="shop-controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="category-buttons">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={category === item ? 'active' : ''}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Search message */}
      {search && (
        <p className="search-result-text">
          Showing results for: <strong>{search}</strong>
        </p>
      )}

      {/* Products */}
      <section className="shop-products">
        {loading ? (
          <p className="shop-message">Loading products...</p>
        ) : filteredProducts.length === 0 ? (
          <p className="shop-message">No products found.</p>
        ) : (
          <div className="shop-grid">
            {filteredProducts.map((product) => (
              <article className="shop-product-card" key={product.id}>
                {/* Product Image */}
                <Link to={`/product/${product.id}`}>
                  <div className="shop-product-image">
                    <img src={product.image} alt={product.name} />

                    {product.badge && <span>{product.badge}</span>}
                  </div>
                </Link>

                {/* Product Info */}
                <div className="shop-product-info">
                  <p>{product.category}</p>

                  <h2>{product.name}</h2>

                  <div className="shop-rating">
                    ★★★★★
                    <span>{product.rating || '4.5'}/5</span>
                  </div>

                  <div className="shop-price">
                    <strong>${product.price}</strong>

                    {product.oldPrice && <del>${product.oldPrice}</del>}
                  </div>

                  <Link
                    to={`/product/${product.id}`}
                    className="shop-view-button"
                  >
                    View Product
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Shop;
