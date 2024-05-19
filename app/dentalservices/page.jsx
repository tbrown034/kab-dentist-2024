"use client";
import React, { useState } from "react";
import FAQs from "./FAQs";
import { raleway } from "../font";
import FullTitle from "../UI/Other/FullTitle";
import sectionContents from "../../sectionContent.json";
import ServicesSeparator from "./ServicesSeparator";
import ServicesSearch from "./ServicesSearch";

const DentalServices = () => {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.dentalServicesPage;

  const [selectedService, setSelectedService] = useState(null);

  // Guard clause to ensure rendering only occurs if data is available
  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="flex flex-col gap-6 mt-6">
      <div className="flex flex-col gap-2">
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
          <div key={blockIndex} className="flex flex-col gap-2">
            <p>{block.text}</p>
          </div>
        ))}
      </div>
      <ServicesSearch onSelectService={setSelectedService} />
      <ServicesSeparator />
      <FAQs />
    </section>
  );
};

export default DentalServices;
