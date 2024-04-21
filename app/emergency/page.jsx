"use client";
import React, { useState } from "react";
import EmergencyForm from "./EmergencyForm";
import EmergencyImgGroup from "./EmergencyImgGroup";
import Medicaid from "../UI/Other/Medicaid";
import { raleway } from "@/lib/fonts";
import FullTitle from "../UI/Other/FullTitle";
import sectionContents from "../../sectionContent.json";
import EmergencyFAQs from "./EmergencyFAQs";
import Link from "next/link";

const Page = () => {
  const [showForm, setShowForm] = useState(false);
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.emergencySection;

  // Ensure there's content to display, otherwise return null
  if (!title || !textBlock || textBlock.length === 0) return null;

  const toggleForm = () => {
    setShowForm(!showForm); // Toggles the value of showForm between true and false
  };

  const onClick = () => {
    toggleForm();
    if (showForm) {
      const formElement = document.getElementById("emergencyForm");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col gap-8 mt-6 ">
      <div className="flex flex-col gap-4 md:flex-row">
        {/* title, body ctas */}
        <div className="flex flex-col justify-center gap-6 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-18 md:w-3/5">
          <div
            className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
          >
            <FullTitle
              title={title}
              highlightedText={highlightedText}
              highlightInFront={highlightInFront}
            />
          </div>
          <h3 className="flex flex-col justify-center gap-2 text-xl md:text-2xl xl:text-3xl xl:gap-16 md:gap-8 lg:gap-12">
            {textBlock.map((block, blockIndex) => (
              <div key={blockIndex} className="flex flex-col lg:text-2xl">
                <p>{block.text}</p>
              </div>
            ))}
          </h3>
          <div className="flex flex-row items-center gap-4">
            <button
              onClick={() => (window.location.href = "tel:630-301-0589")}
              className="p-2 text-sm text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
            >
              Call Our Office
            </button>
            <div className="p-2 text-sm text-white bg-red-500 border-2 border-red-500 rounded-lg border-opacity-85 hover:bg-red-400 active:bg-red-300">
              <button onClick={onClick}>Emergency Hotline</button>
            </div>
          </div>
        </div>
        {showForm && (
          <div id="emergencyForm">
            <EmergencyForm />
          </div>
        )}
        <div className="flex flex-col justify-center md:w-2/5">
          <EmergencyImgGroup />
        </div>
      </div>

      <div>
        <EmergencyFAQs />
      </div>
      <Medicaid />
      <div className="flex justify-center">
        <Link className="p-2 border-2 border-teal-900 rounded-lg" href="/">
          Back Home
        </Link>
      </div>
    </div>
  );
};
export default Page;
