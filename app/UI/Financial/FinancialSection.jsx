import React from "react";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "@/app/UI/Other/FullTitle";
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
      <h2
        className={`${raleway.className} text-2xl md:text-3xl  font-extrabold tracking-tight`}
      >
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h2>
      {textBlock.map((block, blockIndex) => (
        <React.Fragment key={blockIndex}>
          {Object.keys(block).map((key) => (
            <div key={key} className="flex flex-col gap-2 ">
              <p>{block[key]}</p>
            </div>
          ))}
        </React.Fragment>
      ))}
      <FinancialImgGroup />
      <FinancialPills />
      <FinancialFAQs />
    </section>
  );
};

export default FinancialSection;
