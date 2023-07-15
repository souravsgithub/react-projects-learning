import star from "/images/star.png";

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            <img src={`/images/${props.img}`} alt="" className="card-img"/>
            <div className="card-stats">
                <img src={star} alt="star-icon" className="card-star"/>
                <span>{`${props.rating}.0`}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
            {badgeText && <div className="sold-badge">{badgeText}</div>}
        </div>
    );
}