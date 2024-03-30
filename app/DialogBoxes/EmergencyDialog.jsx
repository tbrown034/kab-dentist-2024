"use client";
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PainSlider from "../UI/Other/PainSlider"; // Ensure the path matches your project structure
import Medicaid from "../UI/Other/Medicaid"; // Ensure the path matches your project structure

const EmergencyDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onDismiss={onClose}>
      <DialogContent className="w-5/6 max-w-md p-4 bg-white rounded-md shadow-lg">
        <h3 className="text-xl font-semibold text-red-700">
          After-hours & Emergency Care
        </h3>
        <p>
          We are proud to offer 24/7 emergency care to our patients. Please fill
          out this brief form, and we'll send your information directly to the
          doctor. You can expect a call or text shortly after.
        </p>
        <form action="#" className="flex flex-col gap-4">
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
          <div>
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
              required
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Location
            </label>
            <input
              id="location"
              className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Naperville"
              required
            />
          </div>
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
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="pain-level"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Pain Level
            </label>
            <PainSlider />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="p-2 mt-4 text-white bg-teal-500 rounded hover:bg-teal-600"
            >
              Submit
            </button>
            <button
              type="button" // This button is for closing the dialog, not submitting the form
              onClick={onClose} // Triggers the onClose function passed as a prop
              className="p-2 mt-4 text-white bg-gray-500 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </form>
        <Medicaid />
      </DialogContent>
    </Dialog>
  );
};

export default EmergencyDialog;
