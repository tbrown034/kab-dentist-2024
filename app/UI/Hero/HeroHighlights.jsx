import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faSpa,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const HeroHighlights = () => {
  return (
    <div className="flex flex-col gap-3 mt-2">
      <Link
        className="flex items-center gap-2 text-teal-700 underline transition duration-200 ease-in-out hover:text-teal-500 active:text-teal-400"
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
        className="flex items-center gap-2 text-teal-700 underline transition duration-200 ease-in-out hover:text-teal-500 active:text-teal-400"
        href="/emergency"
      >
        <FontAwesomeIcon icon={faSpa} size="lg" />
        <span className="text-base font-bold md:text-xl lg:text-2xl">
          Relaxation with Nitrous Oxide
        </span>
      </Link>
      <div className="text-sm md:text-base lg:text-lg">
        Don't stress. We offer complimentary nitrous oxide (laughing gas) with
        any visit.
      </div>

      <Link
        className="flex items-center gap-2 text-teal-700 underline transition duration-200 ease-in-out hover:text-teal-500 active:text-teal-400"
        href="tel:6303010589"
      >
        <FontAwesomeIcon icon={faPhone} size="lg" />
        <div className="text-base font-bold md:text-xl lg:text-2xl">
          Give Us a Ring at (630) 296-0589
        </div>
      </Link>
      <span className="text-sm md:text-base lg:text-lg">
        We offer a wide range of dental services. If it can be done, we probably
        can do it.
      </span>
    </div>
  );
};

export default HeroHighlights;
