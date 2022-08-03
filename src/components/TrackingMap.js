import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";

import { getCenter } from "geolib";


import Routing from "./Routing";
import { MapWithPopupdata } from "../Data/MapWithPopupdata";

const TrackingMap = () => {
  const centerCoordinates = getCenter(
    MapWithPopupdata.data.map((item) => ({
      latitude: item.latitude,
      longitude: item.longitude
    }))
  );

  return (
    <MapContainer
      center={[centerCoordinates.latitude, centerCoordinates.longitude]}
      zoom={8}
      scrollWheelZoom={true}
    >
      <Routing />
    </MapContainer>
  );
};

export default TrackingMap;
