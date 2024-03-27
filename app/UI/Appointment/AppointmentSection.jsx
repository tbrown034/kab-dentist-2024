import React from "react";
import sectionContents from "../../../sectionContent.json";
import AppointmentComboTab from "./AppointmentComboTab";
import FullTitle from "@/app/UI/Other/FullTitle"; // Ensure the path is correct for your project structure

const AppointmentSection = () => {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.appointmentSection;

  const fullTitle = (
    <FullTitle
      title={title}
      highlightedText={highlightedText}
      highlightInFront={highlightInFront}
    />
  );

  return (
    <section className="flex flex-col gap-4 " id="apptSection">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight">{fullTitle}</h2>
        {textBlock.map((block, blockIndex) => (
          <div key={blockIndex} className="flex flex-col gap-2 text-lg">
            <p>{block.text}</p>
          </div>
        ))}
      </div>
      <div className="p-2 ">
        <AppointmentComboTab />
      </div>
    </section>
  );
};

export default AppointmentSection;
