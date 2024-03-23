import React from "react";
import sectionContents from "../../../sectionContent.json"; // Adjust the import path as needed
import OfficeImgGroup from "./OfficeImgGroup";

const OfficeSection = () => {
  const { title, highlight, paragraph } = sectionContents.officeSection;

  return (
    <section>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-extrabold tracking-tight ">
          {title} <span className="text-teal-500">{highlight}</span>
        </h2>
        <p className="text-lg ">{paragraph}</p>
      </div>
      <OfficeImgGroup />
    </section>
  );
};

export default OfficeSection;
