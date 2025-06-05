import React from "react";
import Link from "next/link";

const DentalServicesOptions = () => {
  return (
    <section className="p-4 rounded-lg shadow-2xl bg-teal-50">
      <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-center text-teal-800">
        Our Services
      </h2>
      <div className="space-y-6">
        <div>
          <Link
            href="/dental-services#general-dentistry"
            className="flex items-center mb-2 text-lg font-semibold text-teal-700"
          >
            General Dentistry
          </Link>
          <p className="mb-4 dark:text-black">
            Offering a comprehensive range of services for the whole family,
            from routine cleanings to advanced treatments, all aimed at
            maintaining and improving your oral health.
          </p>
        </div>

        <div>
          <Link
            href="/dental-services#emergency-dentistry"
            className="flex items-center mb-2 text-lg font-semibold text-teal-700"
          >
            Emergency Dentistry
          </Link>
          <p className="mb-4 dark:text-black ">
            Ready to handle dental emergencies with prompt, effective care to
            alleviate pain and prevent further complications.
          </p>
        </div>

        <div>
          <Link
            href="/dental-services#cosmetic-dentistry"
            className="flex items-center mb-2 text-lg font-semibold text-teal-700"
          >
            Cosmetic Dentistry
          </Link>
          <p className="dark:text-black">
            Enhancing your smile with treatments designed to improve the
            appearance of your teeth, giving you the confidence to show off your
            smile.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/dental-services"
          className="px-4 py-2 text-sm font-semibold text-white bg-teal-800 rounded-lg hover:bg-teal-700 active:bg-teal-900"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};

export default DentalServicesOptions;
