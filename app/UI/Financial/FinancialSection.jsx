import React from "react";
import FinancialImgGroup from "./FinancialImgGroup";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "@/app/UI/Other/FullTitle"; // Ensure the path is correct for your project structure
import FinancialFAQs from "./FinancialFAQs";

const FinancialSection = () => {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.financialSection;

  if (!title || !textBlock || textBlock.length === 0) return null;

  const fullTitle = (
    <FullTitle
      title={title}
      highlightedText={highlightedText}
      highlightInFront={highlightInFront}
    />
  );

  return (
    <section className="flex flex-col gap-4" id="financialSection">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold tracking-tight">{fullTitle}</h2>
        {textBlock.map((block, blockIndex) => (
          <div key={blockIndex} className="flex flex-col gap-2 text-lg">
            <p>{block.text}</p>
          </div>
        ))}
      </div>
      <FinancialImgGroup />
      <FinancialFAQs />
    </section>
  );
};

export default FinancialSection;
