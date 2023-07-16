import locationLogo from "/images/location.png";
import japanImg from "/images/japan.jpg";

export default function Travelled(props) {
  return (
    <section className="travelled-card container">
      <div className="travelled-img-container">
        <img
          src={`/images/${props.imageUrl}`}
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
          <span>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <h3>
          {props.startDate} - {props.endDate}
        </h3>
        <p>{props.description}</p>
      </div>
    </section>
  );
}
