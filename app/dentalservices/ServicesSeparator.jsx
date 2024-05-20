import React from "react";
import Link from "next/link";

const ServicesSeparator = () => {
  return (
    <section className="flex my-8">
      <Link
        href="#general-dentistry"
        className="flex items-center gap-2 mx-4 transition-colors hover:text-teal-900"
      >
        <span>General Dentistry</span>
      </Link>
      <div className="h-6 border-l border-teal-800"></div>
      <Link
        href="#cosmetic-dentistry"
        className="flex items-center gap-2 mx-4 transition-colors hover:text-teal-900"
      >
        <span>Cosmetic Dentistry</span>
      </Link>
      <div className="h-6 border-l border-teal-800"></div>
      <Link
        href="#emergency-dentistry"
        className="flex items-center gap-2 mx-4 transition-colors hover:text-teal-900"
      >
        <span>Emergency Dentistry</span>
      </Link>
    </section>
  );
};

export default ServicesSeparator;
