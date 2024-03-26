import React from "react";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "@/app/UI/Other/FullTitle"; // Make sure the import path is correct
import MapImgGroup from "./MapImgGroup";
import MyGoogleMap from "./MyGoogleMap";
const MapSection = () => {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.mapSection;
  if (!title || !textBlock || textBlock.length === 0) return null;
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-3xl font-extrabold tracking-tight">
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h2>
      {textBlock.map((block, blockIndex) => (
        <div
          key={blockIndex}
          className="flex flex-col gap-2 text-lg lg:text-xl"
        >
          <p>{block.text}</p>
        </div>
      ))}
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div className="overflow-hidden border-4 border-teal-800 rounded-2xl">
          <MyGoogleMap />
        </div>
        <MapImgGroup />
      </div>
    </section>
  );
};

export default MapSection;
