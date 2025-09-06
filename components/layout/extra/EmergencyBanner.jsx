// components/layout/extra/EmergencyBanner.jsx
// Client Component
"use client";
import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import DisplayNumber from "@/components/DisplayNumber";
import { telNumber } from "@/lib/constants/constants";

const LS_KEY = "kbdds_emergency_banner_dismissed_v1";

const EmergencyBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = typeof window !== "undefined" && localStorage.getItem(LS_KEY) === "1";
    if (!dismissed) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[min(100%-2rem,72rem)]">
      <div className="flex items-center gap-3 rounded-xl border border-teal-800/20 bg-teal-700 text-white px-4 sm:px-5 py-3 shadow-lg">
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-800/60 text-sm font-semibold">!</span>
        <p className="flex-1 text-sm sm:text-base leading-snug">
          <strong>Dental emergency?</strong> Call now for immediate guidance.
        </p>
        <button
          className="whitespace-nowrap rounded-lg bg-white text-teal-800 px-3.5 py-2 text-sm font-semibold hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
        >
          Call:{" "}<DisplayNumber asLink={false} />
        </button>
        <button
          aria-label="Dismiss"
          onClick={() => {
            localStorage.setItem(LS_KEY, "1");
            setOpen(false);
          }}
          className="ml-1 rounded-md p-2 hover:bg-teal-800/40 transition-colors"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default EmergencyBanner;
