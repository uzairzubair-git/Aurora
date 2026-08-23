import "./Reviews.css";

const reviews = [
    {
        id:1,
        name:"Sarah",
        rating:5,
        text: "The colthes are really good quality and the delivery was very fast. I'm really happy with my purchase.",
    },

    {
        id:2,
        name:"John",
        rating:4,
        text: "The colthes are really good quality and the delivery was very fast. I'm really happy with my purchase.",
    },

    {
        id:3,
        name:"Jane",
        rating:3,
        text: "I really love the style and qualit. Everthing was in good condition."
    },

    {
        id:4,
        name:"Mark",
        rating:5,
        text: "The colthes are really good quality and the delivery was very fast. I'm really happy with my purchase."
    }
];

function Reviews() {
    return (
        <section className="reviews">
            <div className="reviews-header">
                <h2>OUR HAPPY CUSTOMERS</h2>

                <div className="reviews-arrows">
                    <button>❮</button>
                    <button>❯</button>
                </div>
            </div>

            <div className="reviews-container">
                {reviews.map((review) => (
                    <div className="review-card" key={review.id} >

                        <div className="stars">
                            {"✦".repeat(review.rating)}
                        </div>

                        <h3>{review.name}
                            <span>⎷</span>
                        </h3>

                        <p>{review.text}</p>
                        </div>
                ))}
            </div>
        </section>
    );
}
        

export default Reviews;