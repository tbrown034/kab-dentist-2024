import React from "react";
import sectionContents from "@/lib/content/sectionContent.json";
import FullTitle from "@/components/shared/FullTitle";
import DentalServicesImgGroup from "@/components/sections/dentalservices/DentalServicesImgGroup";
import DentalServicesOptions from "@/components/sections/dentalservices/DentalServicesOptions";

const DentalServicesSection = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.dentalServicesSection;

  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="flex flex-col gap-4" id="servicesSection">
      <h2
        className={`font-header text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h2>
      {textBlock.map((block, blockIndex) => (
        <div key={blockIndex} className="flex flex-col gap-2">
          <p>{block.text}</p>
        </div>
      ))}
      <DentalServicesImgGroup />
      <DentalServicesOptions />
    </section>
  );
};

export default DentalServicesSection;
