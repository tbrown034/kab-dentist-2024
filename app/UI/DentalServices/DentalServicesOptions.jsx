import React from "react";

const DentalServicesOptions = () => {
  return (
    <section className="p-4">
      <div className="text-left border-t border-gray-200">
        {/* General Dentistry */}
        <div className="mb-6">
          <h3 className="flex items-center mb-2 text-xl font-semibold">
            <i className="mr-2 fa-solid fa-tooth fa-fw"></i>
            General Dentistry
          </h3>
          <p className="mb-4">
            Offering a comprehensive range of services for the whole family,
            from routine cleanings to advanced treatments, all aimed at
            maintaining your oral health.
          </p>
          <button className="px-4 py-2 text-sm text-white bg-teal-500 rounded-lg shadow hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700">
            Learn More
          </button>
        </div>

        {/* Emergency Dentistry */}
        <div className="mb-6">
          <h3 className="flex items-center mb-2 text-xl font-semibold">
            <i className="mr-2 fa-solid fa-kit-medical fa-fw"></i>
            Emergency Dentistry
          </h3>
          <p className="mb-4">
            Ready to handle dental emergencies with prompt, effective care to
            alleviate pain and prevent further complications.
          </p>
          <button className="px-4 py-2 text-sm text-white bg-teal-500 rounded-lg shadow hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700">
            Learn More
          </button>
        </div>

        {/* Cosmetic Dentistry */}
        <div className="mb-6">
          <h3 className="flex items-center mb-2 text-xl font-semibold">
            <i className="mr-2 fa-solid fa-smile fa-fw"></i>
            Cosmetic Dentistry
          </h3>
          <p className="mb-4">
            Enhancing your smile with treatments designed to improve the
            appearance of your teeth, giving you the confidence to show off your
            smile.
          </p>
          <button className="px-4 py-2 text-sm text-white bg-teal-500 rounded-lg shadow hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DentalServicesOptions;
