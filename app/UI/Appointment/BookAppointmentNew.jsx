"use client";
import { DatePicker } from "../Other/DatePicker";
import PainSlider from "../Other/PainSlider";
import InsuranceSelect from "./InsuranceSelect";

const BookAppointmentNew = () => {
  return (
    <section className="mt-8 border-t border-opacity-55 border-teal-50 text-teal-50">
      <form action="#" className="flex flex-col gap-4 mt-4">
        <div className="flex gap-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="gap-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@example.com"
              required
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="(555) 555-5555"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">
              Location
            </label>
            <input
              id="Location"
              className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Naperville"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <label className="mb-2 text-sm font-medium ">Insurance</label>
            <div className="text-gray-500">
              {" "}
              <InsuranceSelect />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium ">Requested Date</label>
            <DatePicker />
          </div>
        </div>
        <div>
          <label htmlFor="pain-slider" className="">
            Pain Level
          </label>
          <PainSlider />
        </div>
        <div>
          <label
            htmlFor="assistance"
            className="block mb-2 text-sm font-medium "
          >
            How Can We Assist You?
          </label>
          <textarea
            id="assistance"
            className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            rows="4"
            placeholder="Please let us know how we
            can help you."
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

export default BookAppointmentNew;
