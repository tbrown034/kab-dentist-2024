import React from "react";

import ContactForm from "./ContactForm";

const AppointmentSection = () => {
  return (
    <section className="p-6xw">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-center">
          Easy Scheduling for Your{" "}
          <span className="text-teal-500">Dental Care Needs</span>
        </h2>
        <p className="text-xl text-center">
          Ready to start your journey to a healthier, happier smile? With easy
          online scheduling and a commitment to patient convenience, Dr. Keith
          A. Brown and his dedicated team make it simpler than ever to access
          top-tier dental care. Join our family of satisfied patients and
          experience the difference today!
        </p>
      </div>

      <ContactForm />
    </section>
  );
};

export default AppointmentSection;
