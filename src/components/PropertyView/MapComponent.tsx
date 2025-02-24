"use client"; // Ensure this component runs only in the browser

import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

const MapComponent: React.FC<{ lat?: number; lng?: number }> = ({
  lat,
  lng,
}) => {
  const [LeafletComponents, setLeafletComponents] = useState<any>(null);
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      lat !== undefined &&
      lng !== undefined
    ) {
      const roundedLat = Number(lat.toFixed(2));
      const roundedLng = Number(lng.toFixed(2));
      setPosition([roundedLng, -roundedLat]);

      import("leaflet").then((L) => {
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconUrl: "/images/mark_map.png",
          iconSize: [25, 25],
          iconAnchor: [15, 15],
        });

        import("react-leaflet").then((RL) => {
          setLeafletComponents({
            MapContainer: RL.MapContainer,
            TileLayer: RL.TileLayer,
            Marker: RL.Marker,
            Popup: RL.Popup,
            Icon: new L.Icon({
              iconUrl: "/images/mark_map.png",
              iconSize: [30, 30],
              iconAnchor: [15, 15],
            }),
          });
        });
      });
    }
  }, [lat, lng]);

  if (!position || !LeafletComponents) return null;

  const { MapContainer, TileLayer, Marker, Popup, Icon } = LeafletComponents;

  return (
    <div
      className="relative w-full    p-2"
      style={{ height: "400px", width: "100%" }}
    >
      <MapContainer
        center={position}
        zoom={10}
        className="absolute left-0 top-0 h-full w-full"
        style={{ height: "100%", width: "100%", padding: "4px" }}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        <Marker position={position} icon={Icon}>
          <Popup>{`${lat}, ${lng}`}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
