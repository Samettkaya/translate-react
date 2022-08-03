import { MapContainer, TileLayer, Polygon, FeatureGroup } from "react-leaflet";

import { EditControl } from "react-leaflet-draw";

import "leaflet/dist/leaflet.css";

import "leaflet-draw/dist/leaflet.draw.css";

import { useRef, useState } from "react";

const PolygonMap = () => {
  const mapRef = useRef();

  const center = [51.505, -0.09];

  const _onCreate = (e) => {
    console.log(e);
  };

  const _onEdited = (e) => {
    console.log(e);
  };

  const _onDeleted = (e) => {
    console.log(e);
  };

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }}
      ref={mapRef}
    >

      <FeatureGroup>

        <EditControl
          position="topright"
          onCreated={_onCreate}
          onEdited={_onEdited}
          onDeleted={_onDeleted}
          draw={{
            rectangle: false,

            polyline: false,

            circle: false,

            circlemarker: false,

            marker: false,
          }}
        />
      
      </FeatureGroup>

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    </MapContainer>
  );
};

export default PolygonMap;
