import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <h3>{product.name}</h3>

        <div className="product-rating">
          <span>✦✦✦✦✦</span>
          <span>{product.rating}/5</span>
        </div>

        <div className="product-price">${product.price}</div>
      </Link>
    </article>
  );
}

export default ProductCard;
