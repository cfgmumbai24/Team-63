import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 40.748817,
  lng: -73.985428,
};

const locations = [
  { lat: 19.13430281190811, lng: 72.85442859590874 },
  { lat: 19.14430281190811, lng: 72.85442859590874 },
  { lat: 19.16430281190811, lng: 72.85442859590874 },
  { lat: 19.17430281190811, lng: 72.85442859590874 },
  { lat: 19.14430281190811, lng: 72.85442859590874 },
  { lat: 19.17430281190811, lng: 72.85442859590874 },
  { lat: 19.12430281190811, lng: 72.85442859590874 },
  { lat: 19.15430281190811, lng: 72.85442859590874 },
  { lat: 19.16430281190811, lng: 72.85442859590874 },
  { lat: 19.17430281190811, lng: 72.85442859590874 },
  { lat: 19.14430281190811, lng: 72.85442859590874 },
  { lat: 19.12430281190811, lng: 72.85442859590874 },
  { lat: 19.16430281190811, lng: 72.85442859590874 },
  { lat: 19.14430281190811, lng: 72.85442859590874 },
  { lat: 19.12430281190811, lng: 72.85442859590874 },
  { lat: 19.15430281190811, lng: 72.85442859590874 },
  { lat: 19.13430281190811, lng: 72.85442859590874 },
  { lat: 19.14430281190811, lng: 72.85442859590874 },
  { lat: 19.16430281190811, lng: 72.85442859590874 },
  { lat: 19.17430281190811, lng: 72.85442859590874 },
];

const MyMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
