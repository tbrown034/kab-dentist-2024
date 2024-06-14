import React from "react";
import DoctorImgGroup from "./DoctorImgGroup";
import FullTitle from "@/app/UI/Other/FullTitle";
import DoctorFAGD from "./DoctorFAGD";
import { raleway } from "../../../app/font.js";

const DoctorSection = () => {
  const title =
    "Dr. Keith A. Brown DDS, FAGD: A Continual Pursuit of Excellence";
  const highlightedText = "Dr. Keith A. Brown DDS, FAGD:";
  const highlightInFront = true;

  return (
    <section className="flex flex-col gap-4" id="doctorSection">
      <h2
        className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h2>
      <div className="flex flex-col gap-2">
        <p>
          With over four decades of experience, Dr. Keith A. Brown, DDS, FAGD,
          is a trusted name in Naperville, delivering unmatched expertise and
          personalized dental care.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <DoctorImgGroup />
        <DoctorFAGD />
      </div>
    </section>
  );
};

export default DoctorSection;
