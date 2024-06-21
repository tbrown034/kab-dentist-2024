"use client";
import React, { useRef } from "react";
import EmergencyForm from "./EmergencyForm";
import Medicaid from "../UI/Other/Medicaid";
import { raleway } from "@/lib/fonts";
import FullTitle from "../UI/Other/FullTitle";
import sectionContents from "../../sectionContent.json";
import EmergencyFAQs from "./EmergencyFAQs";
import Link from "next/link";
import Head from "next/head";

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
    <>
      <Head>
        <title>Emergency Dental Services in Naperville | Keith Brown DDS</title>
        <meta
          name="description"
          content="Need emergency dental care in Naperville? Contact Keith Brown DDS for urgent dental services, including weekends. We're here to help you with your dental emergencies."
        />
        <meta
          name="keywords"
          content="emergency dental care, urgent dental services, weekend dentist, dental emergency Naperville, Keith Brown DDS"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://keithbrowndds.com/emergency" />
        <meta
          property="og:title"
          content="Emergency Dental Services in Naperville | Keith Brown DDS"
        />
        <meta
          property="og:description"
          content="Need emergency dental care in Naperville? Contact Keith Brown DDS for urgent dental services, including weekends. We're here to help you with your dental emergencies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keithbrowndds.com/emergency" />
        <meta
          property="og:image"
          content="https://keithbrowndds.com/og-emergency.jpg"
        />
        <meta property="og:site_name" content="Keith Brown DDS" />
      </Head>
      <div className="flex flex-col gap-8 mt-6">
        <h1
          className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
        >
          <FullTitle
            title={title}
            highlightedText={highlightedText}
            highlightInFront={highlightInFront}
          />
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="flex flex-col justify-center gap-2 text-xl md:text-2xl xl:text-3xl xl:gap-10 md:gap-6 lg:gap-8">
              {textBlock.map((block, blockIndex) => (
                <div key={blockIndex} className="flex flex-col lg:text-2xl">
                  <p>{block.text}</p>
                </div>
              ))}
            </h3>
            <div className="flex flex-row items-center gap-2 mt-2 text-xs md:text-base">
              <button
                onClick={() => (window.location.href = "tel:630-301-0589")}
                className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-lg lg:text-lg hover:bg-teal-500 active:bg-teal-400"
              >
                Emergency Call
              </button>
              <button
                onClick={scrollToFAQ}
                className="p-2 text-white bg-teal-900 border-2 border-teal-900 rounded-lg lg:text-lg hover:bg-teal-800 active:bg-teal-600"
              >
                Emergency FAQs
              </button>
              <Link
                href="/"
                className="p-2 text-black bg-white border-2 border-black rounded-lg bg-teal-white hover:bg-gray-100 active:bg-gray-400"
              >
                Back to Home
              </Link>
            </div>
          </div>
          <div className="mx-4 mt-2" id="emergencyForm">
            <EmergencyForm />
          </div>
        </div>
        <div ref={faqRef}>
          <EmergencyFAQs />
        </div>
        <div className="text-black dark:text-white">
          <Medicaid />
        </div>
        <div className="flex justify-center">
          <Link
            className="p-2 bg-white border-2 border-teal-900 rounded-lg md:p-4 xl:p-5 lg:text-lg border-opacity-85 dark:text-black hover:bg-gray-200 active:bg-gray-300"
            href="/"
          >
            Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
