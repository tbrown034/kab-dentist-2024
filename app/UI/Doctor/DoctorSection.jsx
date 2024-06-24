import React from "react";
import Link from "next/link";
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
      <div className="flex flex-col gap-4">
        <p>
          With over four decades of experience, Dr. Keith A. Brown, DDS, FAGD,
          is a trusted name in Naperville, delivering unmatched expertise and
          personalized dental care.
        </p>
        <p>
          A Chicagoland native, Dr. Brown graduated from Naperville's{" "}
          <Link
            href="https://www.northcentralcollege.edu/"
            className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
          >
            North Central College
          </Link>{" "}
          and is a member of the{" "}
          <Link
            href="https://www.ada.org/"
            className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
          >
            American Dental Association
          </Link>
          , the{" "}
          <Link
            href="https://www.cds.org/"
            className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
          >
            Chicago Dental Society
          </Link>{" "}
          and the{" "}
          <Link
            href="https://www.aes-tmj.org/"
            className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
          >
            American Equilibration Society
          </Link>
          .
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
