import"./ProductSection.css";

import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";

function ProductSection() {
    return (
        <section className="product-section">
            <h2>NEW ARRIVALS</h2>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>

            <button className="view-all-button">View All</button>
            </section>
            );
            }

            export default ProductSection;