"use client";
import React, { useState } from "react";
import Link from "next/link";
import CallDialog from "@/app/DialogBoxes/CallDialog";
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
    <div className="flex flex-col gap-4 text-lg lg:text-xl">
      <div className="flex flex-row items-center gap-4">
        <Link
          href="#appointmentSection"
          className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-xl md:p-4 xl:p-5 hover:bg-teal-500 active:bg-teal-400"
        >
          Book Appointment Now
        </Link>
        <div className="p-2 bg-white border border-gray-600 rounded-xl md:p-4 xl:p-5 dark:text-gray-900 border-opacity-85 hover:bg-gray-200 active:bg-gray-300">
          <button onClick={openCallDialog} className="btn-primary">
            Call Us
          </button>
          <CallDialog
            openExternal={isCallDialogOpen}
            onExternalClose={closeCallDialog}
          />
        </div>
      </div>
      <HeroHighlights onPhoneClick={openCallDialog} />
    </div>
  );
};

export default HeroCTA;
