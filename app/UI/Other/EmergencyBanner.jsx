"use client";
import React, { useState } from "react";

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      id="banner"
      className="fixed bottom-0 z-50 flex items-center justify-between w-full gap-4 px-4 py-3 border-b border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
    >
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Need urgent dental care? Take advantage of our{" "}
        <a
          className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
          href="/emergency"
        >
          after-hours and emergency care.
        </a>
      </p>
      <div className="flex gap-2">
        <button className="p-2 text-sm bg-white border border-gray-600 rounded-xl dark:text-gray-900 border-opacity-85 hover:bg-gray-200 active:bg-gray-300">
          Call
        </button>
        <button
          onClick={() => setIsVisible(false)}
          type="button"
          className="flex items-center p-1.5 text-gray-400 rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EmergencyBanner;
