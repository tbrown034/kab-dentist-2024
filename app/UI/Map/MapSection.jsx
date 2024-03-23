import React from "react";
import sectionContents from "../../../sectionContent.json"; // Adjust the import path as needed
import MapImgGroup from "./MapImgGroup";
import MyGoogleMap from "./MyGoogleMap";

const MapSection = () => {
  const { title, highlight, paragraph } = sectionContents.mapSection;

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-3xl font-extrabold tracking-tight">
        {title} <span className="text-teal-500">{highlight}</span>
      </h2>
      <p className="text-lg">{paragraph}</p>
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
