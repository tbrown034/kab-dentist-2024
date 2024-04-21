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

  const handleSectionScrollAndClose = () => {
    closeDialog();
    setTimeout(() => {
      const section = document.getElementById("appointmentSection");
      if (section) {
        requestAnimationFrame(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }, 350);
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
          <DialogTitle className="text-2xl">Let's Get in Touch!</DialogTitle>
          <DialogDescription className="text-lg">
            We're happy to take your call! To direct your call appropriately,
            please select an option below.
          </DialogDescription>
        </DialogHeader>
        {/* Dialog content and actions */}
        <div className="flex flex-col items-start gap-2 ">
          <button
            onClick={() => (window.location.href = "tel:630-301-0589")}
            className="flex flex-col gap-1 p-4 text-white bg-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
          >
            <span>Call Our Office Now</span>
            <p>(630-296-8207)</p>
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
            className="p-4 text-center text-white bg-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
          >
            Request an Appointment
          </button>

          <button
            onClick={closeDialog}
            className="w-1/2 p-2 mt-4 text-center text-white bg-gray-500 rounded-lg cursor-pointer hover:bg-gray-400 active:bg-gray-300"
          >
            Back
          </button>
        </div>
        <Medicaid />
      </DialogContent>
    </Dialog>
  );
};

export default CallDialog;
