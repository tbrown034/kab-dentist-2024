import React from "react";
import Link from "next/link";
import CallDialogue from "@/app/Dialogues/CallDiallogue";
import FullTitle from "@/app/UI/Other/FullTitle";
import sectionContents from "../../../sectionContent.json";

const HeroText = () => {
  const {
    title,
    textBlock,
    highlightedText,
    highlightInFront,
    additionalInfo,
  } = sectionContents.heroText;

  if (!title || !textBlock) return null;

  return (
    <div className="flex flex-col items-start justify-center gap-4 md:gap-8 lg:gap-12">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h1>
      {textBlock.map((block, index) => (
        <p key={index} className="flex flex-col gap-2 lg:text-lg">
          {block.text}
        </p>
      ))}
      <div className="flex flex-row items-center gap-4">
        <Link
          href="#apptSection"
          className="p-2 text-sm text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
        >
          Book Now
        </Link>
        <div className="p-2 text-sm bg-white border-2 border-gray-300 rounded-lg border-opacity-85 hover:bg-gray-200 active:bg-gray-300">
          <CallDialogue buttonName="Call us at (630) 301-0589" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {additionalInfo.map((info, index) => (
          <div key={index} className="flex items-center gap-2">
            <i className={info.icon}></i>
            <p>{info.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroText;
