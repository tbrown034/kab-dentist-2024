import React from "react";

import ContactForm from "./ContactForm";

const AppointmentSection = () => {
  return (
    <section className="p-6xw">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight ">
          Easy Scheduling for Your{" "}
          <span className="text-teal-500">Dental Care Needs</span>
        </h2>
        <p className="text-lg ">
          Ready to start your journey to a healthier, happier smile? With easy
          online scheduling and a commitment to patient convenience, we make it
          simpler than ever to access top-tier dental care.
        </p>
      </div>

      <ContactForm />
    </section>
  );
};

export default AppointmentSection;
