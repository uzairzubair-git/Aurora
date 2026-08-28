import { Link } from "react-router-dom";
import "./DressStyles.css";

function DressStyles() {
  const styles = [
    {
      name: "Casual",
      className: "casual",
    },
    {
      name: "Formal",
      className: "formal",
    },
    {
      name: "Party",
      className: "party",
    },
    {
      name: "Gym",
      className: "gym",
    },
  ];

  return (
    <section className="dress-styles">
      <h2>BROWSE BY DRESS STYLE</h2>

      <div className="dress-grid">
        {styles.map((style) => (
          <Link
            key={style.name}
            to={`/shop?category=${encodeURIComponent(style.name)}`}
            className={`dress-card ${style.className}`}
          >
            <h3>{style.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default DressStyles;