"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PainSlider from "../UI/Other/PainSlider";

const CallDialogue = ({ buttonName }) => {
  const [dialogContent, setDialogContent] = useState("initial");

  // Handles switching to the second dialog content
  const showSecondDialog = () => {
    setDialogContent("second");
  };

  // Reset dialog content to initial when closing the dialog
  const resetDialog = () => {
    setDialogContent("initial");
  };

  return (
    <>
      <Dialog onDismiss={resetDialog}>
        <DialogTrigger className="btn-primary">{buttonName}</DialogTrigger>
        {dialogContent === "initial" && (
          <DialogContent className="w-5/6 max-w-md p-4 bg-white rounded-md shadow-lg">
            <h3 className="text-xl font-semibold">
              Contact Dr. Brown's Office
            </h3>
            <p className="mt-2">
              We're happy to take your call! To direct your call appropriately,
              please select an option below.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <button
                onClick={showSecondDialog}
                className="p-2 px-4 text-white bg-teal-500 rounded-md hover:bg-teal-600"
              >
                General Inquiry (630-301-0589)
              </button>
              <button
                onClick={showSecondDialog}
                className="p-2 px-4 text-white bg-red-400 rounded-md hover:bg-red-500"
              >
                Afterhours & Emergency Care
              </button>
            </div>
          </DialogContent>
        )}
        {dialogContent === "second" && (
          <DialogContent className="w-5/6 max-w-md p-4 bg-white rounded-md shadow-lg">
            <h3 className="text-xl font-semibold text-red-700">
              Emergency and Afterhours Care
            </h3>
            <p>
              We are proud to offer 24/7 emergency care to our patients. Please
              fill out this brief form and we'll send your information to the
              doctor. You can expect a call or text shortly after.
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
            </form>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default CallDialogue;
