"use client";
import React from "react";
import EmergencyForm from "../UI/Appointment/EmergencyForm";

import EmergencyImgGroup from "./emergencyImgGroup";
import Medicaid from "../UI/Other/Medicaid";
import { useState } from "react";
import { raleway } from "@/lib/fonts";
import FullTitle from "../UI/Other/FullTitle";
import sectionContents from "../../sectionContent.json";

const page = () => {
  const [showForm, setShowForm] = useState(false);
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.emergencySection;

  // Ensure there's content to display, otherwise return null
  if (!title || !textBlock || textBlock.length === 0) return null;

  const toggleForm = () => {
    setShowForm(!showForm); // Toggles the value of showForm between true and false
  };
  return (
    <div className="flex flex-col gap-8 p-4 m-1 md:gap-12 lg:gap-16">
      <section className="flex flex-col gap-4 mt-4">
        <h2
          className={`${raleway.className} text-3xl md:text-3xl font-extrabold tracking-tight`}
        >
          <FullTitle
            title={title}
            highlightedText={highlightedText}
            highlightInFront={highlightInFront}
          />
        </h2>
        <EmergencyImgGroup />

        {textBlock.map((block, blockIndex) => (
          <div
            key={blockIndex}
            className="flex flex-col gap-2 text-lg lg:text-xl"
          >
            <p>{block.text}</p>
          </div>
        ))}
      </section>

      <div className="flex flex-row items-center gap-4">
        <button
          onClick={() => (window.location.href = "tel:630-301-0589")}
          className="p-2 text-sm text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
        >
          Call Our Office
        </button>
        <div className="p-2 text-sm text-white bg-red-500 border-2 border-red-500 rounded-lg border-opacity-85 hover:bg-red-400 active:bg-red-300">
          <button onClick={toggleForm}>Emergency Hotline</button>
        </div>
      </div>
      {showForm && <EmergencyForm />}
    </div>
  );
};

export default page;
