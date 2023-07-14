import grid from "/image-grid.png";

export default function Hero() {
    return (
        <>
        <div className="container hero">
            <img src={grid} alt="grid-image" className="image-grid" />
            <h1>Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind-hosts-all without leaving home.</p>
        </div>
        </>
    );
}