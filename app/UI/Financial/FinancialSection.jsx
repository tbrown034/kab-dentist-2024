import React from "react";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "@/app/UI/Other/FullTitle"; // Ensure the path is correct for your project structure
import FinancialImgGroup from "./FinancialImgGroup";
import FinancialPills from "./FinancialPills";
import FinancialFAQs from "./FinancialFAQs";
import { raleway } from "../../../app/font.js";

const FinancialSection = () => {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.financialSection;

  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="flex flex-col gap-4" id="financialSection">
      <div className="flex flex-col gap-2">
        <h2
          className={`${raleway.className} text-2xl font-extrabold tracking-tight`}
        >
          <FullTitle
            title={title}
            highlightedText={highlightedText}
            highlightInFront={highlightInFront}
          />
        </h2>
        {/* Dynamically rendering text blocks, taking into account the different keys (text, text2, etc.) */}
        {textBlock.map((block, blockIndex) => (
          <React.Fragment key={blockIndex}>
            {Object.keys(block).map((key) => (
              <div key={key} className="flex flex-col gap-2 text-lg lg:text-xl">
                <p>{block[key]}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <FinancialImgGroup />
      <FinancialPills />
      <FinancialFAQs />
    </section>
  );
};

export default FinancialSection;
