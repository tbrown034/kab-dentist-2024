"use client";

import Link from "next/link";
import { CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/solid";
import DisplayNumber from "@/components/DisplayNumber";

const HeroCTA = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Book Appointment - Primary CTA with glassmorphism */}
      <Link
        href="/appointment"
        className="group relative inline-flex items-center justify-center gap-3 sm:gap-2.5 rounded-2xl px-6 sm:px-7 py-4 text-base sm:text-lg font-semibold text-white overflow-hidden transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 bg-gradient-to-r from-teal-600 to-teal-700 shadow-xl hover:shadow-2xl hover:from-teal-700 hover:to-teal-800"
        aria-label="Book a dental appointment"
      >
        <CalendarDaysIcon className="w-5 h-5 sm:w-5 sm:h-5 flex-shrink-0" />
        <span className="tracking-wide">Book Appointment</span>
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
      </Link>

      {/* Call Us - Secondary CTA with glassmorphism */}
      <button 
        className="group relative inline-flex items-center justify-center gap-3 sm:gap-2.5 rounded-2xl px-6 sm:px-7 py-4 text-base sm:text-lg font-semibold backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-100 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-white/90 dark:hover:bg-gray-800/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
      >
        <PhoneIcon className="w-5 h-5 sm:w-5 sm:h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
        <span className="tracking-wide"><DisplayNumber /></span>
      </button>
    </div>
  );
};

export default HeroCTA;
