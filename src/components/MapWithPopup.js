import React from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { getCenter } from "geolib";
import { MapWithPopupdata } from "../Data/MapWithPopupdata";

Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png"
});
const MapWithPopup = () => {
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
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {MapWithPopupdata.data?.map((atm, index) => {
        return (
          <Marker key={index} position={[atm.latitude, atm.longitude]}>
            <Popup maxWidth="100%">
              {atm.name}
              <br />
              {atm.id}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapWithPopup;
