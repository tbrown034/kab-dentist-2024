"use client"; // CallDialogue.jsx
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Medicaid from "../UI/Other/Medicaid";
import PainSlider from "../UI/Other/PainSlider";

const CallDialog = ({ buttonName }) => {
  const [dialogContent, setDialogContent] = useState("initial");

  const showSecondDialog = () => {
    setDialogContent("second");
  };

  const resetDialog = () => {
    setDialogContent("initial");
  };

  let phoneNumber = "6303010589";
  // Function to copy phone number to clipboard
  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      alert("Phone number copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <Dialog onDismiss={resetDialog}>
        <DialogTrigger className="btn-primary">{buttonName}</DialogTrigger>
        {dialogContent === "initial" && (
          <DialogContent className="w-5/6 p-4 text-left rounded-lg shadow-lg">
            <h3 className="text-xl font-extrabold ">
              Contact Dr. Brown's Office
            </h3>
            <p className="mt-2">
              We're happy to take your call! To direct your call appropriately,
              please select an option below.
            </p>
            <div className="flex gap-2 ">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 p-2 px-4 text-white bg-teal-500 rounded-md hover:bg-teal-600 active:bg-teal-700"
              >
                <i className="fa-solid fa-phone"></i>
                <span>Call Our Office</span>
              </a>
              <button
                onClick={copyPhoneNumber}
                className="flex items-center gap-2 p-2 px-4 text-white bg-teal-500 rounded-md hover:bg-teal-600 active:bg-teal-700"
              >
                <i className="fa-solid fa-copy"></i>
                <span>Copy Phone Number</span>
              </button>
            </div>
            <div className="flex ">
              <button
                onClick={showSecondDialog}
                className="flex items-center gap-2 p-2 px-4 text-white bg-red-500 rounded-lg hover:bg-red-600 active:bg-red-700"
              >
                <i className="fa-solid fa-note-medical"></i>
                <span>After-hours & Emergency Care</span>
              </button>
            </div>
            <Medicaid />
          </DialogContent>
        )}
        {dialogContent === "second" && (
          <DialogContent className="w-5/6 max-w-md p-4 bg-white rounded-md shadow-lg">
            <h3 className="text-xl font-semibold text-red-700">
              After-hours & Emergency Care
            </h3>
            <p className="mb-4">
              We are proud to offer 24/7 emergency care to our patients. Please
              fill out this brief form, and we'll send your information directly
              to the doctor. You can expect a call or text shortly after.
            </p>
            <form action="#" className="flex flex-col gap-2">
              <div className="flex gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="gap-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Location
                  </label>
                  <input
                    id="Location"
                    className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Naperville"
                  />
                </div>
              </div>
              <div className="flex gap-4 "></div>

              <div>
                <label
                  htmlFor="assistance"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  How Can We Assist You?
                </label>
                <textarea
                  id="assistance"
                  className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  rows="4"
                  placeholder="Please let us know how we can help you."
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="pain-slider"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Pain Level
                </label>

                <PainSlider />
              </div>
              <div className="p-2 mb-2">
                <Medicaid />
              </div>
              <div className="flex gap-4">
                <button
                  onClick={resetDialog}
                  className="p-3 px-16 text-lg text-teal-900 bg-teal-100 rounded-lg shadow hover:bg-teal-200 active:bg-teal-300"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="p-3 px-16 text-lg text-white bg-teal-500 rounded-lg shadow hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700"
                >
                  Submit
                </button>
              </div>
            </form>{" "}
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default CallDialog;
