import "./DressStyles.css"

function DressStyles() {
    return (
        <section className="dress-styles">
            <h2>BROWSE BY DRESS STYLE </h2>

            <div className="dress-grid">

                <div className="dress-card casual">
                    <h3>Casual</h3>
                </div>

                <div className="dress-card formal">
                    <h3>Formal</h3>
                </div>

                <div className="dress-card party">
                    <h3>Party</h3>
                </div>

                <div className="dress-card gym">
                    <h3>Gym</h3>
                </div>

            </div>
        </section>
    );
}

export default DressStyles;