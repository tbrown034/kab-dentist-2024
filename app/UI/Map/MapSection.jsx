import React from "react";
import sectionContents from "../../../sectionContent.json";
import FullTitle from "@/app/UI/Other/FullTitle"; // Make sure the import path is correct
import MapImgGroup from "./MapImgGroup";
import MyGoogleMap from "./MyGoogleMap";
import Link from "next/link";
const MapSection = () => {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.mapSection;
  if (!title || !textBlock || textBlock.length === 0) return null;
  return (
    <section className="flex flex-col gap-4" id="locationSection">
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
      <div className="flex flex-row items-center gap-4 mt-4">
        <Link
          className="p-2 text-sm text-white bg-teal-500 rounded-lg shadow hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700"
          href="#apptSection"
        >
          Book Now
        </Link>
        <Link
          className="p-2 text-sm text-black bg-teal-100 border border-teal-900 rounded-lg border-opacity-30 hover:bg-teal-200 active:bg-teal-300 "
          href="#apptSection"
        >
          Copy Address
        </Link>
      </div>
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div className="m-2 border-2 rounded-2xl">
          <MyGoogleMap />
        </div>
        <MapImgGroup />
      </div>
    </section>
  );
};

export default MapSection;
