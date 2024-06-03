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
      <DialogContent className="w-4/5 text-left shadow dark:bg-gray-200 rounded-xl text-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-black">
            Let's Get in Touch!
          </DialogTitle>
          <DialogDescription className="text-left ">
            We are happy to take your call! Give us a ring at (630) 357-9358 or
            select one of the options below:
          </DialogDescription>
        </DialogHeader>
        {/* Dialog content and actions */}
        <div className="flex flex-col gap-2 ">
          <button
            onClick={() => (window.location.href = "tel:630-357-9358")}
            className="gap-1 p-2 px-4 text-center text-white bg-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
          >
            Call Our Office Now
          </button>

          <button
            onClick={handleSectionScrollAndClose}
            className="p-2 px-4 text-center text-white bg-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
          >
            Request an Appointment
          </button>
          <button
            onClick={() => {
              window.location.href = "/emergency";
              closeDialog();
            }}
            className="p-2 px-4 text-white bg-red-500 rounded-lg hover:bg-red-400 active:bg-red-300"
          >
            After-hours/Emergency Care
          </button>
          <button
            onClick={closeDialog}
            className="p-2 px-4 text-center text-white bg-gray-500 rounded-lg cursor-pointer hover:bg-gray-400 active:bg-gray-300"
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
