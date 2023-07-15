import star from "/star.png";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="katie's photo" className="card-img"/>
            <div className="card-stats">
                <img src={star} alt="star-icon" className="card-star"/>
                <span>{`${props.rating}.0`}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}