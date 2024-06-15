import React, { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
const Volunteer_Details = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
  });

  const [selectedLocation, setSelectedLocation] = useState("");
  const center = {
    lat: 31.1048,
    lng: 77.1734,
  };
  const mapRef = React.useRef;
  const onMapLoad = React.useCallback((map) => {
    mapRef.currentMap = map;
  });

  if (loadError) return "ERROR";
  if (!isLoaded) return "Maps";
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSelectedLocation(e.target.value)}
      />
      <GoogleMap
        mapContainerStyle={{
          height: "800px",
        }}
        center={center}
        zoom={13}
        onLoad={onMapLoad}
      ></GoogleMap>
    </div>
  );
};

export default Volunteer_Details;
