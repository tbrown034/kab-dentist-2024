import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTooth,
  faSmile,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";

const ServicesSeparator = () => {
  return (
    <section className="flex items-center justify-center my-8">
      <Link
        href="#general-dentistry"
        className="flex items-center gap-2 mx-4 transition-colors hover:text-teal-900"
      >
        <FontAwesomeIcon icon={faTooth} />
        <span>General Dentistry</span>
      </Link>
      <div className="h-6 mx-4 border-l border-teal-800"></div>
      <Link
        href="#cosmetic-dentistry"
        className="flex items-center gap-2 mx-4 transition-colors hover:text-teal-900"
      >
        <FontAwesomeIcon icon={faSmile} />
        <span>Cosmetic Dentistry</span>
      </Link>
      <div className="h-6 mx-4 border-l border-teal-800"></div>
      <Link
        href="#emergency-dentistry"
        className="flex items-center gap-2 mx-4 transition-colors hover:text-teal-900"
      >
        <FontAwesomeIcon icon={faAmbulance} />
        <span>Emergency Dentistry</span>
      </Link>
    </section>
  );
};

export default ServicesSeparator;
