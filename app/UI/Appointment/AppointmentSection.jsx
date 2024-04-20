import React from "react";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "@/app/UI/Other/FullTitle";
import { raleway } from "../../../app/font.js";
import ContactUs from "./ContactUs";

const AppointmentSection = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.appointmentSection;

  // Create a new date object
  const currentDate = new Date();
  // Format the date as a string e.g., "April 12, 2024"
  const dateString = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="flex flex-col gap-4" id="appointmentSection">
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
      <div className="flex flex-col gap-2 p-4 text-gray-100 bg-teal-600 rounded-lg shadow">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Book Your Appointment
        </h2>
        <p>
          Welcome! As of {dateString}, we are accepting new patients and
          returning patients!{" "}
        </p>
        <p>
          Fill out the form below and we'll be in touch shortly to confirm your
          appointment and answer any questions you might have!
        </p>
        <ContactUs />
      </div>
    </section>
  );
};

export default AppointmentSection;
