import { useState } from "react";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("Thanks! You have subscribed to our newsletter.");
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h2>
        STAY UP TO DATE WITH
        <br />
        OUR LATEST OFFERS
      </h2>

      <form
        className="newsletter-form"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <button type="submit">
          Subscribe to Newsletter
        </button>
      </form>

      {message && (
        <p className="newsletter-message">
          {message}
        </p>
      )}
    </section>
  );
}

export default Newsletter;