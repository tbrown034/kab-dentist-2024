"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { trackingNumber } from "@/lib/constants/constants";
const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-20 flex items-center w-full gap-4 px-6 py-3 text-xs bg-teal-800 border-t border-gray-200 sm:text-sm lg:text-lg sm:gap-2 dark:border-gray-700">
      <p className="flex-1 font-light text-white">
        Need urgent dental care? Take advantage of our{" "}
        <Link
          href="/emergency"
          className="font-medium text-white underline hover:no-underline"
        >
          after-hours and emergency care.
        </Link>
      </p>
      <div className="flex items-center gap-4">
        <Link href={`tel:${trackingNumber}`} data-track="phone-click">
          <div className="flex items-center p-2 text-teal-800 bg-white border border-gray-600 rounded-xl dark:text-gray-900 border-opacity-85 hover:bg-gray-200 active:bg-gray-300">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            <span>Call</span>
            <span className="ml-1">{trackingNumber}</span>
          </div>
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          type="button"
          className="p-2 text-gray-400 rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
          aria-label="Close banner"
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default EmergencyBanner;
