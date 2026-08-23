import './TopSelling.css';

import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";

function TopSelling() {
        const topProducts = products.slice(4,8);

        return (
            <section className="top-selling">
                <h2>TOP SELLING</h2>

                <div className="product-grid">
                    {topProducts.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
                
                <button className="view-all-button">View All</button>
                </section>
    );}

    export default TopSelling;