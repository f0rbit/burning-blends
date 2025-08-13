"use client";

import Map, { Marker } from "react-map-gl/mapbox";
import { useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapComponent({ location }: { location: [number, number] }) {
  const [viewport, setViewport] = useState({
    latitude: location[0],
    longitude: location[1],
    zoom: 14,
  });

  return (
    <div
      className="map-container"
      style={{ height: "400px", marginTop: "20px" }}
    >
      <Map
        {...viewport}
        onMove={(evt) => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken="pk.eyJ1IjoiZm9yYml0IiwiYSI6ImNtZTlhZGJ0eDBtbzYybXE0a2FqempsemMifQ.ghfgbxyGSY-fKtpkhktLgA"
      >
        <Marker latitude={location[0]} longitude={location[1]} anchor="center">
          <div className="mapboxgl-marker" style={{ backgroundColor: "#3b82f6", borderRadius: "50%", width: "15px", height: "15px", border: "2px solid white" }} />
        </Marker>
      </Map>
    </div>
  );
}
