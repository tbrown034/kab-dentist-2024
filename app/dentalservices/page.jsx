"use client";
import React, { useState } from "react";
import FAQs from "./FAQs";
import { raleway } from "../font";
import FullTitle from "../UI/Other/FullTitle";
import sectionContents from "../../sectionContent.json";
import ServicesSeparator from "./ServicesSeparator";
import ServicesSearch from "./ServicesSearch";
import DocBot from "./DocBot";
import Link from "next/link";

const DentalServices = () => {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.dentalServicesPage;

  const [selectedService, setSelectedService] = useState(null);

  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <section className="flex flex-col gap-8 px-4 mt-6">
      <div className="flex flex-col gap-2">
        <h1
          className={`${raleway.className} text-3xl md:text-4xl font-extrabold tracking-tight`}
        >
          <FullTitle
            title={title}
            highlightedText={highlightedText}
            highlightInFront={highlightInFront}
          />
        </h1>
        {textBlock.map((block, blockIndex) => (
          <div key={blockIndex} className="flex flex-col gap-2 text-lg">
            <p>{block.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center gap-2 mt-2 text-xs md:text-base">
        <Link
          href="#browseServices"
          className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-lg lg:text-lg hover:bg-teal-500 active:bg-teal-400"
        >
          Browse Services
        </Link>
        <Link
          href="#docBot"
          className="p-2 text-white bg-teal-900 border-2 border-teal-900 rounded-lg lg:text-lg hover:bg-teal-800 active:bg-teal-600"
        >
          Doc Bot
        </Link>
        <Link
          href="/"
          className="p-2 text-black bg-white border-2 border-black rounded-lg bg-teal-white hover:bg-gray-100 active:bg-gray-400"
        >
          Back to Home
        </Link>
      </div>
      <ServicesSearch onSelectService={setSelectedService} />

      <ServicesSeparator />

      <FAQs />
      <DocBot />
    </section>
  );
};

export default DentalServices;
