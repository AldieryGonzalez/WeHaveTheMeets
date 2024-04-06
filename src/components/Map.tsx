import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

const Map = () => {
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    const mapContainer = useRef(null);
    const map = useRef<mapboxgl.Map>(null);
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            accessToken: import.meta.env.VITE_MAPBOX_TOKEN as string,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom,
        });
    });
    return (
        <div id='map'>
            <div
                ref={mapContainer}
                style={{ width: "100vw", height: "100vh" }}
            />
        </div>
    );
};

export default Map;
