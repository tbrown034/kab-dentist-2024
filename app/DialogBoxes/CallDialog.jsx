"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Medicaid from "../UI/Other/Medicaid";
import EmergencyForm from "../UI/Appointment/EmergencyForm";

const CallDialog = ({ buttonName }) => {
  const [dialogContent, setDialogContent] = useState("initial");
  const phoneNumber = "630-301-0589";
  const address = "123 Dental St, Tooth Town, Smile State, 12345"; // Example address

  const showSecondDialog = () => setDialogContent("second");
  const resetDialog = () => setDialogContent("initial");

  // Handler to initiate a phone call
  const callOffice = () => (window.location.href = `tel:${phoneNumber}`);

  // Function to copy text to the clipboard
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <Dialog onDismiss={resetDialog}>
        <DialogTrigger className="btn-primary">{buttonName}</DialogTrigger>
        {dialogContent === "initial" && (
          <DialogContent className="flex flex-col w-4/5 p-4 rounded-lg shadow-lg">
            <h3 className="font-bold ">Let's Get in Touch</h3>
            <p className="">
              We're happy to take your call! To direct your call appropriately,
              please select an option below.
            </p>
            <p className="p-1 text-base font-semibold">Contact Us Now</p>

            <button
              onClick={callOffice}
              className="p-4 text-white bg-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
            >
              Call Our Office Now
            </button>

            {/* After-hours & Emergency Care Button */}
            <button
              onClick={showSecondDialog}
              className="p-4 text-white bg-red-500 rounded-lg hover:bg-red-400 active:bg-red-300"
            >
              After-hours & Emergency Care
            </button>
            <p className="p-1 text-base font-semibold">Send Us a Message</p>

            {/* Request an Appointment Button */}
            <button className="p-4 text-white bg-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400">
              Request an Appointment
            </button>

            {/* General Inquiry Button */}
            <button className="p-4 text-white bg-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400">
              General Inquiry
            </button>

            {/* Find Us Later Header */}
            <p className="p-1 text-base font-semibold">Save for Later</p>

            {/* Copy Phone Number Button */}
            <button
              onClick={() => copyToClipboard(phoneNumber)}
              className="flex items-center justify-center w-4/5 gap-2 p-4 text-white bg-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
            >
              <p>Copy Phone Number</p>
              <i className="fa-solid fa-copy"></i>
            </button>

            {/* Copy Address Button */}
            <button
              onClick={() => copyToClipboard(address)}
              className="flex justify-center w-4/5 gap-8 p-4 text-white bg-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
            >
              {" "}
              <p> Copy Address</p>
              <i className="fa-solid fa-copy"></i>
            </button>

            <Medicaid />
          </DialogContent>
        )}
        {dialogContent === "second" && <EmergencyForm />}
      </Dialog>
    </>
  );
};

export default CallDialog;
