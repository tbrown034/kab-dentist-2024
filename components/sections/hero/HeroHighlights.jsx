"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faSpa,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import DisplayNumber from "@/components/DisplayNumber";

const HeroHighlights = ({ onPhoneClick }) => {
  return (
    <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 dark:border-gray-700">
      <div className="space-y-2">
        <Link
          className="flex items-center gap-2.5 text-teal-600 hover:text-teal-700 transition-colors"
          href="/emergency"
        >
          <FontAwesomeIcon icon={faExclamationCircle} className="w-5 h-5 flex-shrink-0" />
          <span className="text-base font-semibold sm:text-lg">
            Offering 24/7 Emergency Care
          </span>
        </Link>
        <p className="text-sm text-gray-600 ml-7 sm:text-base dark:text-gray-300">
          Life is unpredictable. We're reliable.
        </p>
      </div>

      <div className="space-y-2">
        <Link
          className="flex items-center gap-2.5 text-teal-600 hover:text-teal-700 transition-colors"
          href="#servicesSection"
        >
          <FontAwesomeIcon icon={faSpa} className="w-5 h-5 flex-shrink-0" />
          <span className="text-base font-semibold sm:text-lg">
            Relaxation with Nitrous Oxide
          </span>
        </Link>
        <p className="text-sm text-gray-600 ml-7 sm:text-base dark:text-gray-300">
          Don't stress. We offer complimentary laughing gas with all visits.
        </p>
      </div>

      <div className="space-y-2">
        <button
          className="flex items-center gap-2.5 text-teal-600 hover:text-teal-700 transition-colors"
          data-track="phone-click"
          onClick={onPhoneClick}
        >
          <FontAwesomeIcon icon={faPhone} className="w-5 h-5 flex-shrink-0" />
          <span className="text-base font-semibold sm:text-lg">
            Give Us a Ring Anytime
          </span>
        </button>
        <p className="text-sm text-gray-600 ml-7 sm:text-base dark:text-gray-300">
          Patients can call <DisplayNumber />.
        </p>
      </div>
    </div>
  );
};

export default HeroHighlights;
