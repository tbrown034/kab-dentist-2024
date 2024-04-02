import React from "react";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "@/app/UI/Other/FullTitle"; // Ensure the path is correct for your project structure
import { raleway } from "../../../app/font.js"; // Assuming you want to keep the font styling consistent

const EmergencySection = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.emergencySection;

  // Ensure there's content to display, otherwise return null
  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="flex flex-col gap-4 mt-4">
      <h2
        className={`${raleway.className} text-3xl md:text-3xl font-extrabold tracking-tight`}
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
    </section>
  );
};

export default EmergencySection;
