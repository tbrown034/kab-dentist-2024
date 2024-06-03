// app/UI/Other/EmergencyBanner.jsx
"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 z-20 flex items-center justify-between w-full gap-6 px-4 py-3 bg-teal-800 border-t border-gray-200 dark:border-gray-700">
      <p className="text-sm font-light text-white">
        Need urgent dental care? Take advantage of our{" "}
        <a
          className="font-medium text-white underline hover:no-underline"
          href="/emergency"
        >
          after-hours and emergency care.
        </a>
      </p>
      <div className="flex gap-2">
        <a
          href="tel:630-296-8702"
          className="flex items-center p-2 text-sm text-teal-800 bg-white border border-gray-600 rounded-xl dark:text-gray-900 border-opacity-85 hover:bg-gray-200 active:bg-gray-300"
        >
          <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
          Call
        </a>
        <button
          onClick={() => setIsVisible(false)}
          type="button"
          className="flex items-center p-1.5 text-gray-400 rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default EmergencyBanner;
