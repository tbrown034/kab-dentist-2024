import React, { useState } from "react";
import { DatePicker } from "../Other/DatePicker";
import PainSlider from "../Other/PainSlider";

const AppointmentBook = () => {
  const [isReturning, setIsReturning] = useState(false); // false for new patients, true for returning

  return (
    <section className="text-teal-50">
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight">
        Book Your Appointment
      </h2>
      <p className="mb-8 font-light lg:mb-16 sm:text-xl">
        Welcome! Whether you have questions about our services, need assistance
        with billing and financing options, or want to understand how we can
        meet your dental health needs, we're here for you!
      </p>
      <div className="mb-4">
        <button
          className={`mr-4 p-2 ${
            isReturning ? "bg-gray-300" : "bg-teal-600 text-white"
          }`}
          onClick={() => setIsReturning(false)}
        >
          New Patients
        </button>
        <button
          className={`p-2 ${
            isReturning ? "bg-teal-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setIsReturning(true)}
        >
          Returning Patients
        </button>
      </div>

      <form action="#" className="flex flex-col gap-4">
        {/* Shared form fields can go here */}
        {!isReturning ? (
          // New patient form fields
          <>
            <div className="flex gap-4">
              {/* New Patient Specific Fields */}
              <div>
                <label
                  htmlFor="location"
                  className="block mb-2 text-sm font-medium"
                >
                  Location
                </label>
                <input
                  id="location"
                  className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Naperville"
                />
              </div>
            </div>
          </>
        ) : (
          // Returning patient form fields
          <>{/* Any returning patient specific fields */}</>
        )}
        {/* Fields common to both new and returning patients, like the DatePicker and PainSlider */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium">Requested Date</label>
          <DatePicker />
        </div>
        <div>
          <label
            htmlFor="pain-slider"
            className="block mb-2 text-sm font-medium"
          >
            Pain Level
          </label>
          <PainSlider />
        </div>
        <div>
          <textarea
            id="assistance"
            className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            rows="4"
            placeholder="Please let us know how we can help you."
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-5/6 p-2 text-lg text-white bg-teal-600 border border-teal-500 rounded-lg shadow hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-400 dark:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default AppointmentBook;
