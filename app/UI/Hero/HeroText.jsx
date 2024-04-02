import React from "react";
import Link from "next/link";
import CallDialog from "@/app/DialogBoxes/CallDialog";
import FullTitle from "@/app/UI/Other/FullTitle";
import sectionContents from "../../../sectionContent.json";
import HeroImgSlider from "./HeroImgSlider";

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
      <HeroImgSlider />

      {textBlock.map((block, index) => (
        <p key={index} className="flex flex-col gap-2 lg:text-lg">
          {block.text}
        </p>
      ))}
      <div className="flex flex-row items-center gap-4">
        <Link
          href="#apptSection"
          className="p-2 py-4 text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
        >
          Book Appointment
        </Link>
        <div className="p-2 py-4 bg-white border-2 border-gray-300 rounded-lg text border-opacity-85 hover:bg-gray-200 active:bg-gray-300">
          <CallDialog buttonName="Contact Us" />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-sm lg:flex-row ">
        {additionalInfo.map((info, index) => (
          <Link
            href={info.link}
            key={index}
            className="flex items-center gap-4 transition-transform duration-200 cursor-pointer hover:scale-105 active:scale-95 "
          >
            <div
              className="flex items-center justify-center rounded-full "
              aria-hidden="true"
            >
              <i className={`fa-solid text-teal-900  ${info.icon} `}></i>
            </div>
            <p className="transition-colors duration-200 hover:text-teal-500 active:text-teal-600">
              {info.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroText;
