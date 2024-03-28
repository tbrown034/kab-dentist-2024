import React from "react";
import sectionContents from "../../../sectionContent.json";
import CallDialogue from "@/app/Dialogues/CallDiallogue";
import FullTitle from "@/app/UI/Other/FullTitle"; // Adjust the path as necessary
import Link from "next/link";
const HeroText = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.heroText;

  if (!title || !textBlock) return null;

  return (
    <div className="flex flex-col items-start justify-center gap-4 md:gap-8 lg:gap-12">
      <h1 className="text-4xl font-bold leading-tight text-gray-900">
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
          className="p-2 text-sm text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 0 active:bg-teal-400 "
          href="#apptSection"
        >
          Book Now
        </Link>

        <div className="p-2 text-sm bg-white border-2 border-gray-300 rounded-lg border-opacity-85 hover:bg-gray-200 active:bg-gray-300">
          <CallDialogue buttonName="Call us at (630) 301-0589" />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm sm:text-lg">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-star-of-life"></i>{" "}
          <p>
            Now Providing{" "}
            <span className="text-teal-900 underline underline-offset-4 hover:cursor-pointer hover:text-teal-800 active:text-teal-700">
              24/7 Emergency Care.
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-sharp fa-light fa-mask-ventilator"></i>
          <p>Free Nitrous for Anxiety and Pain-Free visits.</p>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-notes-medical"></i>
          <p>Affordable Care, Flexible Plans</p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
