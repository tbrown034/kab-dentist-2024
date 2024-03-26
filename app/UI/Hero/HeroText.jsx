import React from "react";
import sectionContents from "../../../sectionContent.json";
import CallUsAtDialogue from "@/app/Dialogues/CallUsAtDialogue.jsx";
import BookNowDialogue from "@/app/Dialogues/BookNowDialogue";
import FullTitle from "@/app/UI/Other/FullTitle"; // Adjust the path as necessary

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
        <BookNowDialogue />
        <CallUsAtDialogue />
      </div>
    </div>
  );
};

export default HeroText;
