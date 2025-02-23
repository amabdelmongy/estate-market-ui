import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customMarkerIcon = new L.Icon({
  iconUrl: "/images/mark_map.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
});

interface MapProps {
  lat?: number;
  lng?: number;
  width?: number;
  height?: number;
}

const MapComponent: React.FC<MapProps> = ({ lat, lng, width, height }) => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        if (lng && lat) {
          const roundedLat = Number(lat.toFixed(2));
          const roundedLng = Number(lng.toFixed(2));
          setPosition([roundedLng, -roundedLat]);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchCoordinates();
  }, [lat, lng]);
  if (!position) return null; // Hide the component entirely when no position is available

  return (
    <div className="h-full min-h-[400px] w-full border border-gray-300 p-2">
      {position ? (
        <MapContainer
          center={position}
          zoom={10}
          className="h-full w-full flex-1"
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />

          <Marker position={position} icon={customMarkerIcon}>
            <Popup>{`${lat}, ${lng}`}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapComponent;
