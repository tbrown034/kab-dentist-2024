// components/sections/hero/HeroHighlights.jsx
// Server Component
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faSpa,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { telNumber, displayNumber } from "@/lib/constants/constants";

const HeroHighlights = ({ onPhoneClick }) => {
  return (
    <div className="flex flex-col gap-3 mt-2">
      <Link
        className="flex items-center gap-2 text-teal-600 underline transition duration-200 ease-in-out hover:text-teal-500 active:text-teal-400"
        href="/emergency"
      >
        <FontAwesomeIcon icon={faExclamationCircle} size="lg" />
        <span className="text-base font-bold md:text-xl lg:text-2xl">
          Offering 24/7 Emergency Care
        </span>
      </Link>
      <div className="text-sm md:text-base lg:text-lg">
        Life is unpredictable. We're reliable.
      </div>

      <Link
        className="flex items-center gap-2 text-teal-600 underline transition duration-200 ease-in-out hover:text-teal-500 active:text-teal-400"
        href="#servicesSection"
      >
        <FontAwesomeIcon icon={faSpa} size="lg" />
        <span className="text-base font-bold md:text-xl lg:text-2xl">
          Relaxation with Nitrous Oxide
        </span>
      </Link>
      <div className="text-sm md:text-base lg:text-lg">
        Don't stress. We offer complimentary laughing gas with all visits.
      </div>

      <button
        className="flex items-center gap-2 text-teal-600 underline transition duration-200 ease-in-out hover:text-teal-500 active:text-teal-400"
        data-track="phone-click"
        onClick={onPhoneClick}
      >
        <FontAwesomeIcon icon={faPhone} size="lg" />
        <div className="text-base font-bold md:text-xl lg:text-2xl">
          Give Us a Ring Anytime
        </div>
      </button>
      <span className="text-sm md:text-base lg:text-lg">
        Patients can call{" "}
        <a
          href={`tel:${telNumber}`}
          className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
          data-track="phone-click"
        >
          {displayNumber}
        </a>
        .
      </span>
    </div>
  );
};

export default HeroHighlights;
