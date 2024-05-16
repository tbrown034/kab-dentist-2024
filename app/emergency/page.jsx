"use client";
import React, { useState, useEffect, useRef } from "react";
import EmergencyForm from "./EmergencyForm";
import Medicaid from "../UI/Other/Medicaid";
import { raleway } from "@/lib/fonts";
import FullTitle from "../UI/Other/FullTitle";
import sectionContents from "../../sectionContent.json";
import EmergencyFAQs from "./EmergencyFAQs";
import Link from "next/link";

const Page = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.emergencySection;
  const faqRef = useRef(null);

  // Ensure there's content to display, otherwise return null
  if (!title || !textBlock || textBlock.length === 0) return null;

  const scrollToFAQ = () => {
    if (faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-8 mt-6">
      <div
        className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="flex flex-col justify-center gap-2 text-xl md:text-2xl xl:text-3xl xl:gap-10 md:gap-6 lg:gap-8">
            {textBlock.map((block, blockIndex) => (
              <div key={blockIndex} className="flex flex-col lg:text-2xl">
                <p>{block.text}</p>
              </div>
            ))}
          </h3>
          <div className="flex flex-row items-center gap-2 mt-2">
            <button
              onClick={() => (window.location.href = "tel:630-301-0589")}
              className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-lg lg:text-lg hover:bg-teal-500 active:bg-teal-400"
            >
              Call Our Office Now
            </button>
            <button
              onClick={scrollToFAQ}
              className="p-2 text-white bg-red-500 border-2 border-red-500 rounded-lg lg:text-lg border-opacity-85 hover:bg-red-400 active:bg-red-300"
            >
              Emergency Services FAQs
            </button>
          </div>
          <div className="">
            <Link
              href="/"
              className="p-2 text-black bg-white border-2 border-black rounded-lg bg-teal-white lg:text-lg hover:bg-gray-100 active:bg-gray-400"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <div className="mt-2" id="emergencyForm">
          <EmergencyForm />
        </div>
      </div>
      <div ref={faqRef}>
        <EmergencyFAQs />
      </div>
      <Medicaid />
      <div className="flex justify-center">
        <Link
          className="p-2 bg-white border-2 border-teal-900 rounded-lg md:p-4 xl:p-5 lg:text-lg border-opacity-85 dark:text-black hover:bg-gray-200 active:bg-gray-300"
          href="/"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
