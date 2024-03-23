import React from "react";
import sectionContents from "../../../sectionContent.json"; // Adjust the import path as needed
import AppointmentComboTab from "./AppointmentComboTab";
import ContactUs from "./ContactUs";

const AppointmentSection = () => {
  const { title, highlight, paragraph } = sectionContents.appointmentSection;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight">
          {title} <span className="text-teal-500">{highlight}</span>
        </h2>
        <p className="text-lg">{paragraph}</p>
      </div>
      <AppointmentComboTab />
      {/* Optionally include ContactUs if it's meant to be part of this section */}
      {/* <ContactUs /> */}
    </section>
  );
};

export default AppointmentSection;
