"use client";
import React, { useState, useEffect } from "react";
import { officeNumber, trackingNumber } from "@/lib/constants/constants";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/shadcn-ui/dialog";
import Medicaid from "@/components/shared/Medicaid";
import Link from "next/link";

const CallDialog = ({ buttonName, openExternal, onExternalClose }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(openExternal || false);

  useEffect(() => {
    if (openExternal !== undefined) {
      setIsDialogOpen(openExternal);
    }
  }, [openExternal]);

  // Closes the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
    if (onExternalClose) onExternalClose();
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
        <button onClick={() => setIsDialogOpen(true)} className="btn-primary">
          {buttonName}
        </button>
      </DialogTrigger>
      <DialogContent className="w-4/5 text-left shadow dark:bg-gray-200 rounded-xl text-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-black">
            Let's Get in Touch!
          </DialogTitle>
          <DialogDescription className="text-left">
            We are happy to take your call! Give us a ring at our office at{" "}
            <Link
              href={`tel:${officeNumber}`}
              className="font-semibold text-teal-700 underline hover:text-teal-600 active:text-teal-400"
            >
              {officeNumber}
            </Link>{" "}
            or our after-hours service at{" "}
            <Link
              href={`tel:${trackingNumber}`}
              className="font-semibold text-teal-700 underline hover:text-teal-600 active:text-teal-400"
            >
              {trackingNumber}
            </Link>{" "}
            or select one of the options below:
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => (window.location.href = `tel:${trackingNumber}`)}
              className="gap-1 p-2 px-4 text-center text-white bg-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
            >
              Call (New Patients)
            </button>
            <button
              onClick={() => (window.location.href = `tel:${officeNumber}`)}
              className="gap-1 p-2 px-4 text-center text-white bg-teal-700 rounded-lg hover:bg-teal-600 active:bg-teal-500"
            >
              Call (Returning Patients)
            </button>
          </div>
          <button
            onClick={handleSectionScrollAndClose}
            className="p-2 px-4 text-center text-white bg-teal-800 rounded-lg hover:bg-teal-700 active:bg-teal-600"
          >
            Request an Appointment Online
          </button>
          <button
            onClick={() => {
              window.location.href = "/emergency";
              closeDialog();
            }}
            className="p-2 px-4 text-white bg-red-500 rounded-lg hover:bg-red-400 active:bg-red-300"
          >
            Emergency Care
          </button>
          <button
            onClick={closeDialog}
            className="p-2 px-4 text-center text-black bg-white border-2 border-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 active:bg-gray-200"
          >
            Back
          </button>
        </div>
        <div className="dark:text-black">
          <Medicaid />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallDialog;
