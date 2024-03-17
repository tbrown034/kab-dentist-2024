"use client";
import React, { useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function MyGoogleMap() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const position = {
    lat: 41.74840597561523,
    lng: -88.16671308810265,
  };
  const address = "1296 Rickert Dr #300, Naperville, IL 60540";

  const handleMarkerClick = () => {
    setSelectedPosition(position);
    setInfoOpen(true);
  };

  const copyAddressToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      alert("Address copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Map
          center={position}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
        >
          <Marker position={position} onClick={handleMarkerClick} />
          {infoOpen && selectedPosition && (
            <InfoWindow
              position={selectedPosition}
              onCloseClick={() => setInfoOpen(false)}
            >
              <div style={{ fontSize: "16px", maxWidth: "250px" }}>
                <h2 style={{ color: "#0078A8", fontWeight: "bold" }}>
                  Keith Brown DDS
                </h2>
                <p>{address}</p>
                <p>Providing top-notch dental care.</p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${position.lat},${position.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0078A8", textDecoration: "underline" }}
                >
                  Get Directions
                </a>
                <button
                  onClick={copyAddressToClipboard}
                  style={{
                    color: "#0078A8",
                    marginTop: "10px",
                    textDecoration: "underline",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Copy Address
                </button>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

export default MyGoogleMap;
