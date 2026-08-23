import "./Newsletter.css";

function Newsletter() {
    return (
        <section className="newsletter">
            <h2>STAY UP TO DATE WITH
            <br/>
            OUR LATEST OFFERS </h2>

            <form className="newsletter-form">
            <input type="email" 
            placeholder="Enter your email address" />
            <button type="submit">Subscribe to Newsletter</button>
            </form>
        </section>
    );
}

export default Newsletter;