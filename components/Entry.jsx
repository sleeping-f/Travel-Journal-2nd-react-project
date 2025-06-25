export default function Entry({ imageSrc, location, mapLink, date, description, title }) {
    return (
        <article className="EntryCard">
            <img src={imageSrc} alt="entry image" className="EntryImage" />
            <div className="info-container">
                <img src="src\assets\location-marker.png" alt="pin-img" className="LocationMarker" />
                <span className="Location">{location}</span>
                <a href={mapLink} className="MapLink">View on Google Maps</a>
                <h1>{title}</h1>
                <p className="Date">{date}</p>
                <p className="Description">{description}</p>
            </div>
        </article >
    )
}