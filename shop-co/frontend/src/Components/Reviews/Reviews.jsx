import { useState } from "react";
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Sarah",
    rating: 5,
    text: "The clothes are really good quality and the delivery was very fast. I'm really happy with my purchase.",
  },
  {
    id: 2,
    name: "John",
    rating: 4,
    text: "The clothes are really good quality and the delivery was very fast. I'm really happy with my purchase.",
  },
  {
    id: 3,
    name: "Jane",
    rating: 3,
    text: "I really love the style and quality. Everything was in good condition.",
  },
  {
    id: 4,
    name: "Mark",
    rating: 5,
    text: "The clothes are really good quality and the delivery was very fast. I'm really happy with my purchase.",
  },
];

function Reviews() {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((previous) =>
      previous === reviews.length - 1 ? 0 : previous + 1
    );
  };

  const previousReview = () => {
    setCurrent((previous) =>
      previous === 0 ? reviews.length - 1 : previous - 1
    );
  };

  return (
    <section className="reviews">
      <div className="reviews-header">
        <h2>OUR HAPPY CUSTOMERS</h2>

        <div className="reviews-arrows">
          <button type="button" onClick={previousReview}>
            ❮
          </button>

          <button type="button" onClick={nextReview}>
            ❯
          </button>
        </div>
      </div>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div
            className={`review-card ${
              index === current ? "active" : ""
            }`}
            key={review.id}
          >
            <div className="stars">
              {"✦".repeat(review.rating)}
            </div>

            <h3>
              {review.name}
              <span>✓</span>
            </h3>

            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;