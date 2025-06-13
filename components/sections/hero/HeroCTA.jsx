"use client";

import Link from "next/link";
import { CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/solid";

const HeroCTA = () => {
  return (
    <section className="flex flex-col items-center gap-6 p-4 sm:flex-row">
      {/* Primary CTA - Book Appointment */}
      <Link
        href="/appointment"
        className="inline-flex items-center w-full gap-2 px-6 py-3 text-lg font-semibold text-center text-white transition-colors duration-200 bg-teal-600 rounded-lg lg:px-8 lg:py-4 hover:bg-teal-700 lg:text-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
        aria-label="Book a dental appointment"
      >
        <CalendarDaysIcon className="w-5 h-5" />
        Book Appointment
      </Link>

      {/* Secondary CTA - Call Us */}
      <a
        href="tel:6302968702"
        className="inline-flex items-center w-full gap-2 px-6 py-3 text-lg font-semibold text-center text-gray-900 transition-colors duration-200 bg-white border border-gray-300 rounded-lg lg:px-8 lg:py-4 hover:bg-gray-50 lg:text-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
        aria-label="Call our dental office"
      >
        <PhoneIcon className="w-5 h-5 text-teal-600" />
        Call (630-296-8702)
      </a>
    </section>
  );
};

export default HeroCTA;
