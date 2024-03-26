import React from "react";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "@/app/UI/Other/FullTitle"; // Ensure the path is correct for your project structure
import DentalServicesImgGroup from "./DentalServicesImgGroup";

const DentalServicesSection = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.dentalServicesSection;

  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold tracking-tight">
          {/* Replace manual title handling with FullTitle component */}
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
      </div>
      <DentalServicesImgGroup />
    </section>
  );
};

export default DentalServicesSection;
