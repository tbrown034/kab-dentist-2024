"use client";
import { DatePicker } from "../Other/DatePicker";
import PainSlider from "../Other/PainSlider";
import InsuranceSelect from "./InsuranceSelect";

const BookAppointmentNew = () => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        New Patients
      </h2>
      <p className="mb-8 font-light lg:mb-16 dark:text-gray-400 sm:text-xl">
        Welcome! Whether you have questions about our services, need assistance
        with billing and financing options, or want to understand how we can
        meet your dental health needs, we're here for you!
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
        <div className="flex gap-4 ">
          <div>
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Insurance
            </label>{" "}
            <InsuranceSelect />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Requested Date
            </label>
            <DatePicker />
          </div>
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
          <button
            type="submit"
            className="p-3 px-16 text-lg text-white bg-teal-500 rounded-lg shadow hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookAppointmentNew;
