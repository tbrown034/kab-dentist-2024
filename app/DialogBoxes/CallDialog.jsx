"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Medicaid from "../UI/Other/Medicaid";

const CallDialog = ({ buttonName }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Opens the dialog
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  // Closes the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // Handles scrolling to the appointment section and then closing the dialog
  // Handles scrolling to the appointment section and then closing the dialog
  const handleSectionScrollAndClose = () => {
    // Close the dialog immediately
    closeDialog();

    // Increase the delay to ensure the dialog has fully closed and the page layout has stabilized
    setTimeout(() => {
      const section = document.getElementById("appointmentSection");
      if (section) {
        // Ensure the browser has a moment to reflow if necessary
        requestAnimationFrame(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }, 350); // Adjust this value as needed based on your dialog's closing animation time
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <button onClick={openDialog} className="btn-primary">
          {buttonName}
        </button>
      </DialogTrigger>
      <DialogContent className="w-4/5 shadow rounded-xl">
        <DialogHeader>
          <DialogTitle>Let's Get in Touch</DialogTitle>
          <DialogDescription>
            We're happy to take your call! To direct your call appropriately,
            please select an option below.
          </DialogDescription>
        </DialogHeader>
        {/* Dialog content and actions */}
        <button
          onClick={() => (window.location.href = "tel:630-301-0589")}
          className="p-4 text-white bg-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
        >
          Call Our Office Now
        </button>
        <button
          onClick={() => {
            window.location.href = "/emergency";
            closeDialog();
          }}
          className="p-4 text-white bg-red-500 rounded-lg hover:bg-red-400 active:bg-red-300"
        >
          After-hours & Emergency Care
        </button>
        <button
          onClick={handleSectionScrollAndClose}
          className="w-full p-4 my-2 text-center text-white bg-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
        >
          Request an Appointment
        </button>
        <button
          onClick={handleSectionScrollAndClose}
          className="w-full p-4 mb-4 text-center text-white bg-teal-600 rounded-lg cursor-pointer hover:bg-teal-500 active:bg-teal-400"
        >
          General Inquiry
        </button>
        <button
          onClick={closeDialog}
          className="w-1/2 p-2 mt-4 text-center text-white bg-gray-500 rounded-lg cursor-pointer hover:bg-gray-400 active:bg-gray-300"
        >
          Back
        </button>
        <Medicaid />
      </DialogContent>
    </Dialog>
  );
};

export default CallDialog;
