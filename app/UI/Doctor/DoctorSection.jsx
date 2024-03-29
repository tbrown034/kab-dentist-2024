import React from "react";
import DoctorImgGroup from "./DoctorImgGroup";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "@/app/UI/Other/FullTitle";
import DoctorFAGD from "./DoctorFAGD";
import { raleway } from "../../../app/font.js";

const DoctorSection = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.doctorSection;

  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="flex flex-col gap-4" id="doctorSection">
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
        <div key={blockIndex} className="flex flex-col gap-2 ">
          <p>{block.text}</p>
        </div>
      ))}

      <div className="flex flex-col gap-4">
        <DoctorImgGroup />
        <DoctorFAGD />
      </div>
    </section>
  );
};

export default DoctorSection;
