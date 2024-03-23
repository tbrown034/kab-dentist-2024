import React from "react";
import DoctorImgGroup from "./DoctorImgGroup";

const DoctorSection = ({ content }) => {
  if (!content) return null; // Render nothing if no content is provided

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-extrabold tracking-tight">
          {content.title}{" "}
          <span className="text-teal-500">{content.highlight}</span>{" "}
          {content.subtitle}
        </h2>
        {content.paragraphs.map((paragraph, index) => (
          <p className="text-xl" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
      <DoctorImgGroup />

      <div className="flex flex-col gap-4 mt-4 text-lg">
        {content.paragraphs.slice(1).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className="flex items-center justify-center gap-4 mx-2">
          <i className="fa-solid fa-quote-left"></i>
          <blockquote className="italic text-center">
            {content.quote}
          </blockquote>
          <i className="fa-solid fa-quote-right"></i>
        </div>
        <p className="font-semibold text-center">{content.attribution}</p>
      </div>
    </section>
  );
};

export default DoctorSection;
