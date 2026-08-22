import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          FIND CLOTHES
          <br />
          THAT MATCH <br />
          YOUR STYLE <br />
        </h1>

        <P>
          Browser through our diverse range of meticulously crafted clothing
          pieces, designed to elevate your wardrobe and elevate your style.
        </P>

        <button>Shop Now</button>

        <div className="hero-stats">
          <div>
            <strong>100+ Brands</strong>
            <span>Internation Brands</span>
          </div>

          <div>
            <strong>2,000+</strong>
            <span>High-Quality Products</span>
          </div>

          <div>
            <strong>30,000+</strong>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Fashion Model"/>
      </div>
      
    </section>
  );
}

export default Hero;
