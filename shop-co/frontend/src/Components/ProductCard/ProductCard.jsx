import "./ProductCard.css";

function ProductCard({product}) {
    return (
        <article className="product-card">
            <div className="product-image">
                <img src="{product.image}" alt="{product.name}" />
            </div>
            
            <h3>{product.name}</h3>

            <div className="product-rating">
                <span>✦✦✦✦✦</span>
                <span>{product.rating}/5</span>
            </div>

            <div className="product-price">
                ${product.price}
                </div>
            </article>
            );
            }

            export default ProductCard;