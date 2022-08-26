import pinpoint from "./assets/pinpoint.svg"

export default function Card(props) {
    return(
        <div className="card">
            <div className="card-container">
                <a href={props.item.spotify} target="_blank"><img src={props.item.imageUrl} alt="Japan" className="card-image"/></a>
                <div className="card-info">
                    <div className="location-info">
                        <img src={pinpoint} alt="Pinpoint"/>
                        <a href={props.item.googleMapsUrl} target="_blank" className=" map-link location">{(props.item.location).toUpperCase()}</a>
                    </div>
                    <h1 className="title">{props.item.title}</h1>
                    <p className="tour">{props.item.tour}</p>
                    <p className="trip-duration">{props.item.date}</p>
                    <p className="location-description">
                        {props.item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}