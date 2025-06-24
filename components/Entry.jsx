export default function Entry() {
    return (
        <article className="EntryCard">
            <img src="src\assets\fuji-mountain-in-autumn.jpg" alt="entry image" className="EntryImage" />
            <div className="info-container">
                <img src="src\assets\location-marker.png" alt="pin-img" className="LocationMarker" />
                <span className="Location">Japan</span>
                <a href="https://google.com/maps/place/Fuji+Mountain/@35.3606,138.7274,10z/data=!3m1!4b1!4m6!3m5!1s0x6018c2f7d9e8f0b7:0x2c5d8f8e9c8f8e8!8m2!3d35.3606!4d138.7274!16zL20vMDJjY2Q" className="MapLink">View on Google Maps</a>
                <h1>Mount Fuji</h1>
                <p className="Date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="Description">
                    Mount Fuji is Japan's highest peak, standing at 3,776 meters (12,389 feet). It is an active stratovolcano that last erupted in 1707. The mountain is a symbol of Japan and is known for its symmetrical cone shape. It is a popular destination for tourists and climbers, especially during the climbing season from July to September.
                </p>
            </div>
        </article>
    )
}