import React from "react";
import DoctorImgGroup from "./DoctorImgGroup";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "@/app/UI/Other/FullTitle";
import DoctorFAGD from "./DoctorFAGD";

const DoctorSection = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.doctorSection;

  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="flex flex-col gap-4" id="doctorSection">
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
      <DoctorImgGroup />
      <DoctorFAGD />
    </section>
  );
};

export default DoctorSection;
