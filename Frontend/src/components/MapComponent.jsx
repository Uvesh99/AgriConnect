import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"; 

mapboxgl.accessToken = "pk.eyJ1Ijoic291amFueWEyMCIsImEiOiJjbHo5em1oYm8wamFwMm1yNm4yOHIwaDZrIn0.880f0LJ3VumHq6AA1s0RMA";


const MapComponent = ({ onCoordinatesUpdate }) => {
    const mapContainerRef = useRef(null);
    const [marker, setMarker] = useState(null);
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [78.9629, 20.5937],
            zoom: 4,
        });

        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker: false,
            placeholder: "Search for a location",
        });

        map.addControl(geocoder);

        geocoder.on("result", (e) => {
            const resultCoordinates = e.result.geometry.coordinates;

            if (marker) {
                marker.setLngLat(resultCoordinates);
            } else {
                const newMarker = new mapboxgl.Marker({ color: "blue" })
                    .setLngLat(resultCoordinates)
                    .addTo(map);
                setMarker(newMarker);
            }

            setCoordinates({
                lng: resultCoordinates[0],
                lat: resultCoordinates[1],
            });

            // Notify parent of new coordinates
            onCoordinatesUpdate({ lat: resultCoordinates[1], lng: resultCoordinates[0] }); // Call the update function
            map.flyTo({ center: resultCoordinates, zoom: 10 });
        });

        map.on("click", (e) => {
            const lngLat = e.lngLat;

            if (marker) {
                marker.setLngLat(lngLat);
            } else {
                const newMarker = new mapboxgl.Marker({ color: "blue" })
                    .setLngLat(lngLat)
                    .addTo(map);
                setMarker(newMarker);
            }

            setCoordinates(lngLat);
            onCoordinatesUpdate({ lat: lngLat.lat, lng: lngLat.lng }); // Call the update function
        });

        return () => map.remove();
    }, [marker, onCoordinatesUpdate]);

    return (
        <div>
            <h1>Pick or Search for a Location</h1>
            <div
                ref={mapContainerRef}
                style={{ width: "100%", height: "500px" }}
            ></div>
            {coordinates && (
                <p>
                    Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
                </p>
            )}
        </div>
    );
};

export default MapComponent;