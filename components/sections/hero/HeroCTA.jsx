"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/solid";
import CallDialog from "@/components/dialogs/CallDialog";
import HeroHighlights from "./HeroHighlights";

const HeroCTA = () => {
  const [isCallDialogOpen, setIsCallDialogOpen] = useState(false);

  const openCallDialog = () => {
    setIsCallDialogOpen(true);
  };

  const closeCallDialog = () => {
    setIsCallDialogOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Main CTA Buttons */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        {/* Primary CTA - Book Appointment */}
        <Link
          href="#appointmentSection"
          className="inline-flex items-center w-full gap-2 px-6 py-3 text-lg font-semibold text-center text-white transition-colors duration-200 bg-teal-600 rounded-lg lg:px-8 lg:py-4 hover:bg-teal-700 lg:text-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
          aria-label="Book a dental appointment"
        >
          <CalendarDaysIcon className="w-5 h-5" />
          Book Appointment!
        </Link>

        {/* Secondary CTA - Call Us */}
        <button
          onClick={openCallDialog}
          className="inline-flex items-center w-full gap-2 px-6 py-3 text-lg font-semibold text-center text-gray-900 transition-colors duration-200 bg-white border border-gray-300 rounded-lg lg:px-8 lg:py-4 hover:bg-gray-50 lg:text-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
          aria-label="Call our dental office"
        >
          <PhoneIcon className="w-5 h-5 text-teal-600" />
          Call Us
        </button>
      </div>

      {/* Call Dialog */}
      <CallDialog
        openExternal={isCallDialogOpen}
        onExternalClose={closeCallDialog}
      />

      {/* Hero Highlights */}
      <HeroHighlights onPhoneClick={openCallDialog} />
    </div>
  );
};

export default HeroCTA;
