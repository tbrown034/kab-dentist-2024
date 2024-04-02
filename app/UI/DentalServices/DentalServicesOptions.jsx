import React from "react";

const DentalServicesOptions = () => {
  return (
    <section className="p-2 px-4 ">
      <h2 className="mb-2 text-xl font-extrabold tracking-tight ">
        Our Services
      </h2>
      <div className="pt-4 text-left border-t border-teal-800 border-opacity-55">
        <div className="">
          <h3 className="flex items-center mb-2 text-lg font-semibold">
            General Dentistry
          </h3>
          <p className="mb-4">
            Offering a comprehensive range of services for the whole family,
            from routine cleanings to advanced treatments, all aimed at
            maintaining your oral health.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="flex items-center mb-2 text-lg font-semibold">
            <p>Emergency Dentistry</p>
          </h3>
          <p className="mb-4">
            Ready to handle dental emergencies with prompt, effective care to
            alleviate pain and prevent further complications.
          </p>
        </div>
        <div className="">
          <h3 className="flex items-center mb-2 text-lg font-semibold">
            Cosmetic Dentistry
          </h3>
          <p className="">
            Enhancing your smile with treatments designed to improve the
            appearance of your teeth, giving you the confidence to show off your
            smile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DentalServicesOptions;
