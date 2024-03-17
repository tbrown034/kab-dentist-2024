"use client";
import React, { useState, useCallback } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function MyGoogleMap() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [cameraProps, setCameraProps] = useState({
    center: { lat: 41.74840597561523, lng: -88.16671308810265 },
    zoom: 15,
  });

  const address = "1296 Rickert Dr #300, Naperville, IL 60540";

  const handleMarkerClick = useCallback(() => {
    setInfoOpen(true);
  }, []);

  const handleCameraChange = useCallback((ev) => {
    setCameraProps(ev.detail);
  }, []);

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
          {...cameraProps}
          onCameraChanged={handleCameraChange}
          style={{ width: "100%", height: "100%" }}
        >
          <Marker position={cameraProps.center} onClick={handleMarkerClick} />
          {infoOpen && (
            <InfoWindow
              position={cameraProps.center}
              onCloseClick={() => setInfoOpen(false)}
            >
              <div style={{ fontSize: "16px", maxWidth: "250px" }}>
                <h2 style={{ color: "#0078A8", fontWeight: "bold" }}>
                  Keith Brown DDS
                </h2>
                <p>{address}</p>
                <p>Providing top-notch dental care.</p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${cameraProps.center.lat},${cameraProps.center.lng}`}
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
