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
    <div className="fixed top-16 left-0 right-0 z-30 animate-slide-down">
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600/95 to-teal-700/95 backdrop-blur-sm text-white shadow-lg border-b border-teal-800">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-white/5 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpolygon points='0 10 10 10 10 0'/%3E%3Cpolygon points='10 10 20 10 20 20'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="relative flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 max-w-7xl mx-auto">
          {/* Icon and Text */}
          <div className="flex items-center gap-2 flex-1">
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold animate-pulse">
              !
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold">
                Dental Emergency? <span className="hidden sm:inline text-teal-50/90 font-normal">Get immediate assistance 24/7</span>
              </p>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              className="whitespace-nowrap rounded-lg bg-white text-teal-700 px-3 py-1.5 text-sm font-semibold hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all"
            >
              <DisplayNumber asLink={false} />
            </button>
            <button
              aria-label="Dismiss banner"
              onClick={() => {
                localStorage.setItem(LS_KEY, "1");
                setOpen(false);
              }}
              className="rounded-lg p-1.5 hover:bg-white/20 transition-colors"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
