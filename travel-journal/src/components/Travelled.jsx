import locationLogo from "/images/location.png";
import japanImg from "/images/japan.jpg";

export default function Travelled() {
  return (
    <section className="travelled-card">
      <div className="travelled-img-container">
        <img
          src={japanImg}
          alt="image of a mountain"
          className="travelled-img"
        />
      </div>
      <div className="travelled-info-container">
        <div className="location-info-container">
          <img
            src={locationLogo}
            className="location-logo"
            alt="location-logo"
          />
          <span>JAPAN</span>
          <a href="#">View on Google Maps</a>
        </div>
        <h2>Mountain Fuji</h2>
        <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
        <p>
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </section>
  );
}
