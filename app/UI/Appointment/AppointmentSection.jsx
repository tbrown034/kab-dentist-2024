import React from "react";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "@/app/UI/Other/FullTitle"; // Ensure the path is correct for your project structure
import AppointmentComboTab from "./AppointmentComboTab";
import { raleway } from "../../../app/font.js"; // Assuming you want to keep the font styling consistent

const AppointmentSection = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.appointmentSection;

  // Ensure there's content to display, otherwise return null
  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="flex flex-col gap-4" id="apptSection">
      <h2
        className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h2>
      {textBlock.map((block, blockIndex) => (
        <div
          key={blockIndex}
          className="flex flex-col gap-2 text-lg lg:text-xl"
        >
          <p>{block.text}</p>
        </div>
      ))}
      <div className="flex flex-col gap-2 p-4 text-white bg-teal-800 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Book Your Appointment
        </h2>
        <p className="mb-4">
          Welcome! Whether you have questions about our services, need
          assistance with billing and financing options, or want to understand
          how we can meet your dental health needs, we're here for you!
        </p>
        <div className="p-1">
          <AppointmentComboTab />
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
