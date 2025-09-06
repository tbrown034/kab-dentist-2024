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
      <div className="w-full overflow-hidden h-[400px] sm:h-[450px] lg:h-[500px]">
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
              <div className="p-3 min-w-[250px]">
                <h2 className="text-teal-700 font-bold text-lg mb-2">
                  Dr. Keith A. Brown DDS
                </h2>
                <p className="text-gray-700 text-sm mb-1">{address}</p>
                <p className="text-gray-600 text-sm mb-3">Providing exceptional dental care since 1982.</p>
                <div className="flex gap-3">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${businessLocation.lat},${businessLocation.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 underline text-sm font-medium"
                  >
                    Get Directions
                  </a>
                  <button
                    onClick={copyAddressToClipboard}
                    className="text-teal-600 hover:text-teal-700 underline text-sm font-medium bg-transparent border-0 cursor-pointer p-0"
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
