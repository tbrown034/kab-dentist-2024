"use client";
import { Checkbox } from "@/components/ui/checkbox";

const ContactUs = () => {
  return (
    <section className="">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white">
        Contact Us
      </h2>
      <p className="mb-8 font-light text-center lg:mb-16 dark:text-gray-400 sm:text-xl">
        Have questions about your teeth, our services, billing and financing
        options, or more? Get in touch, and our office will get back to you
        ASAP.
      </p>
      <form action="#" className="space-y-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your phone number (optional)
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
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Leave a comment..."
            required
          ></textarea>
        </div>
        <div className="flex items-center">
          <Checkbox
            id="returning-patient"
            className="text-teal-600 border-gray-300 focus:ring-teal-500"
          />
          <label
            htmlFor="returning-patient"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Are you a returning patient?
          </label>
        </div>
        <button
          type="submit"
          className="block w-full px-8 py-3 text-lg font-medium text-center text-white bg-teal-500 rounded-lg shadow hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700"
        >
          Send
        </button>
      </form>
      <p className="mt-4 text-center">
        In case of an emergency, please{" "}
        <a
          href="tel:+1234567890"
          className="text-teal-500 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          click here to call us
        </a>
        .
      </p>
    </section>
  );
};

export default ContactUs;
