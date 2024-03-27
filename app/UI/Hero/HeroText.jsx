import React from "react";
import sectionContents from "../../../sectionContent.json";
import CallDiallogue from "@/app/Dialogues/CallDiallogue";
import FullTitle from "@/app/UI/Other/FullTitle"; // Adjust the path as necessary
import Link from "next/link";
const HeroText = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.heroText;

  if (!title || !textBlock) return null;

  return (
    <div className="flex flex-col items-start justify-center gap-4 md:gap-8 lg:gap-12">
      <h1 className="text-4xl font-extrabold leading-tight text-gray-900">
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h1>
      {textBlock.map((block, index) => (
        <p key={index} className="flex flex-col gap-2 text-lg lg:text-xl">
          {block.text}
        </p>
      ))}
      <div className="flex flex-row items-center gap-4 mt-4">
        <Link
          className="p-2 text-sm text-white bg-teal-500 rounded-lg shadow hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700"
          href="#apptSection"
        >
          Book Now
        </Link>
        <p>Or</p>
        <div className="p-2 text-sm border border-teal-800 rounded-lg shadow hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700">
          <CallDiallogue buttonName="Call us at (630) 301-0589" />
        </div>
      </div>
    </div>
  );
};

export default HeroText;
