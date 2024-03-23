import React from "react";
import FinancialImgGroup from "./FinancialImgGroup";

const FinancialSection = ({ content }) => {
  if (!content) return null; // Render nothing if no content is provided

  const { title, highlight, paragraphs } = content;

  return (
    <section className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold tracking-tight">
          {title} <span className="text-teal-500">{highlight}</span>
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p className="text-lg" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
      <FinancialImgGroup />
    </section>
  );
};

export default FinancialSection;
