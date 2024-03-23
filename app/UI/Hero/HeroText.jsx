import React from "react";
import sectionContents from "../../../sectionContent.json"; // Ensure this path is correct
import CallUsAtDialogue from "@/app/Dialogues/CallUsAtDialogue.jsx";

const HeroText = () => {
  const content = sectionContents.heroText; // Use the relevant section from the imported content

  if (!content) return null; // Ensure there's content to render

  return (
    <div className="flex flex-col items-start justify-center gap-4 md:gap-8 lg:gap-12">
      <h1 className="text-4xl font-extrabold leading-tight text-gray-900">
        {content.title}
      </h1>
      {content.paragraphs.map((paragraph, index) => (
        <p className="text-lg lg:text-xl" key={index}>
          {paragraph}
        </p>
      ))}
      <div className="flex flex-row items-center gap-4">
        <button className="px-8 py-3 text-lg font-medium text-white bg-teal-500 rounded-md hover:bg-teal-600">
          Book Now
        </button>
        <p className="text-lg">Or</p>
        <div className="text-lg font-bold">
          Call Us At <CallUsAtDialogue />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-star-of-life"></i>{" "}
          <p>
            Now Offering{" "}
            <span className="text-teal-900 underline underline-offset-4 hover:cursor-pointer hover:text-teal-800 active:text-teal-700">
              24/7 Emergency Care
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <i className="fa-regular fa-face-smile-relaxed"></i>{" "}
          <p>
            Complimentary nitrous to ensure a{" "}
            <span className="text-teal-900 underline underline-offset-4 hover:cursor-pointer hover:text-teal-800 active:text-teal-700">
              relaxed and pain-free
            </span>{" "}
            visit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
