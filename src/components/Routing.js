import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { MapWithPopupdata } from "../Data/MapWithPopupdata";


L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

const Routing = () => {
  const map = useMap();
  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: MapWithPopupdata.data.map((item) =>
        L.latLng(item.latitude, item.longitude)
      ),
      createMarker: function (waypointIndex, waypoint, numberOfWaypoints) {
        return L.marker(waypoint.latLng).bindPopup("Hello");
      },
      lineOptions: {
        styles: [
          {
            color: "blue",
            opacity: 0.6,
            weight: 4
          }
        ]
      },
      addWaypoints: false
    }).addTo(map);
    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
};
export default Routing;
