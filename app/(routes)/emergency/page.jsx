import React from "react";
import Medicaid from "@/components/shared/Medicaid";
import FullTitle from "@/components/shared/FullTitle";
import sectionContents from "@/lib/content/sectionContent.json";
import EmergencyFAQs from "@/components/sections/emergency/EmergencyFAQs";
import UnifiedForm from "@/components/forms/UnifiedForm";

import { PhoneIcon } from "@heroicons/react/24/solid";

export const metadata = {
  title: "Emergency Dental Services in Naperville | Dr. Keith Brown DDS",
  description:
    "Need emergency dental care in Naperville? Contact Dr. Keith Brown DDS FAGD for urgent dental services, including weekends. We're here to help you with your dental emergencies.",
  keywords:
    "emergency dental care, urgent dental services, weekend dentist, dental emergency Naperville, Keith Brown DDS",
  openGraph: {
    title: "Emergency Dental Services in Naperville | Dr. Keith Brown DDS",
    description:
      "Need emergency dental care in Naperville? Contact Keith Brown DDS for urgent dental services, including weekends. We're here to help you with your dental emergencies.",
    url: "https://keithbrowndds.com/emergency",
    images: [
      {
        url: "https://keithbrowndds.com/og-emergency.jpg",
        width: 800,
        height: 600,
        alt: "Keith Brown DDS - Emergency Dental Care",
      },
    ],
    site_name: "Keith Brown DDS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emergency Dental Services in Naperville | Keith Brown DDS",
    description:
      "Need emergency dental care in Naperville? Contact Keith Brown DDS for urgent dental services, including weekends. We're here to help you with your dental emergencies.",
    image: "https://keithbrowndds.com/twitter-emergency.jpg",
  },
};

const Page = () => {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.emergencySection;

  if (!title || !textBlock || textBlock.length === 0) return null;
  return (
    <section className="flex flex-col gap-8 px-4 mt-6" id="emergencySection">
      <h1 className="text-2xl font-extrabold tracking-tight font-header md:text-3xl">
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h1>
      <div className="flex flex-col gap-1">
        {textBlock.map((block, blockIndex) => (
          <p key={blockIndex} className="text-lg">
            {block.text}
          </p>
        ))}
      </div>
      <div className="p-4 flex">
        <a
          href="tel:6302968702"
          className="inline-flex items-center w-full gap-2 px-6 py-3 text-lg font-semibold text-center text-gray-900 transition-colors duration-200 bg-white border border-gray-300 rounded-lg lg:px-8 lg:py-4 hover:bg-gray-50 lg:text-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
          aria-label="Call our dental office"
        >
          <PhoneIcon className="w-5 h-5 text-teal-600" />
          Call (630-296-8702)
        </a>
      </div>{" "}
      <div className="mx-4 mt-2" id="emergencyForm">
        <UnifiedForm formType="emergency" />
      </div>
      <div id="emergencyFAQs">
        <EmergencyFAQs />
      </div>
      <div className="text-black dark:text-white">
        <Medicaid />
      </div>
    </section>
  );
};

export default Page;
