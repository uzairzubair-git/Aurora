import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          FIND CLOTHES
          <br />
          THAT MATCHES
          <br />
          YOUR STYLE
        </h1>

        <p>
          Browse through our diverse range of meticulously crafted
          garments, designed to bring out your individuality.
        </p>

        <Link to="/shop" className="hero-shop-button">
          Shop Now
        </Link>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1622519407650-3df9883f76a5?q=80&w=1364&auto=format&fit=crop"
          alt="Fashion collection"
        />
      </div>
    </section>
  );
}

export default Hero;