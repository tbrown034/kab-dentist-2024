"use client"; // Ensures client-side rendering for the component

import React, { useState, useCallback } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function MyGoogleMap() {
  const [infoOpen, setInfoOpen] = useState(false);
  const businessLocation = { lat: 41.74822087068904, lng: -88.16676740280504 };
  const [cameraProps, setCameraProps] = useState({
    center: businessLocation,
    zoom: 14,
  });
  const address = "1296 Rickert Drive Suite 300, Naperville, IL 60540";

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
      <div className="w-full overflow-hidden rounded-lg h-96">
        <Map
          {...cameraProps}
          onCameraChanged={handleCameraChange}
          style={{ width: "100%", height: "100%" }}
          mapId="d766611e3b68c09d" // Your custom Map ID
          options={{ gestureHandling: "cooperative" }} // This option allows the map to handle gestures more cooperatively
        >
          <AdvancedMarker
            position={businessLocation}
            onClick={handleMarkerClick}
          />
          {infoOpen && (
            <InfoWindow
              position={businessLocation}
              onCloseClick={() => setInfoOpen(false)}
            >
              <div style={{ fontSize: "16px", maxWidth: "250px" }}>
                <h2 style={{ color: "#0078A8", fontWeight: "bold" }}>
                  Keith Brown DDS
                </h2>
                <p>{address}</p>
                <p>Providing top-notch dental care.</p>
                <div style={{ display: "flex", gap: "8px" }}>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${businessLocation.lat},${businessLocation.lng}`}
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
                      textDecoration: "underline",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    Copy Address
                  </button>
                </div>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

export default MyGoogleMap;
