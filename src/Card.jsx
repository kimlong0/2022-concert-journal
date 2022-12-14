import pinpoint from "./assets/pinpoint.svg"

export default function Card(props) {
    const concertData = props.concertData;
    return(
        <div className="card">
            <div className="card-container">
                <a href={concertData.spotify} target="_blank"><img src={concertData.imageUrl} alt={concertData.title} className="card-image"/></a>
                <div className="card-info">
                    <div className="location-info">
                        <img src={pinpoint} alt="Pinpoint"/>
                        <a href={concertData.googleMapsUrl} target="_blank" className=" map-link location">{(concertData.location).toUpperCase()}</a>
                    </div>
                    <h1 className="title">{concertData.title}</h1>
                    <p className="tour">{concertData.tour}</p>
                    <p className="trip-duration">{concertData.date}</p>
                    <p className="location-description">
                        {concertData.description}
                    </p>
                </div>
            </div>
        </div>
    )
}