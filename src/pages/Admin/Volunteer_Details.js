import React, { useState } from "react";
import SearchLocationInput from "./GooglePlcasesApi";
import MapComponent from "./Map";

function App() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
  });
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {/* <SearchLocationInput setSelectedLocation={setSelectedLocation} /> */}
      <MapComponent selectedLocation={selectedLocation} />
    </div>
  );
}

export default App;
