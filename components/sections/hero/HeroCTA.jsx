"use client";

import Link from "next/link";
import { CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/solid";
import DisplayNumber from "@/components/DisplayNumber";

const HeroCTA = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      {/* Book Appointment - Primary CTA */}
      <Link
        href="/appointment"
        className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-base font-medium bg-teal-600 text-white shadow-sm hover:bg-teal-700 active:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 transition-colors"
        aria-label="Book a dental appointment"
      >
        <CalendarDaysIcon className="w-5 h-5 mr-2 flex-shrink-0" />
        Book Appointment
      </Link>

      {/* Call Us - Secondary CTA */}
      <button 
        className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-base font-medium border-2 border-gray-400 dark:border-gray-500 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-400 active:bg-gray-100 dark:active:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 transition-all"
      >
        <PhoneIcon className="w-5 h-5 mr-2 text-teal-600 dark:text-teal-400 flex-shrink-0" />
        <span>Call </span><DisplayNumber />
      </button>
    </div>
  );
};

export default HeroCTA;
