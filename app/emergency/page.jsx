import React from "react";
import EmergencyForm from "./EmergencyForm";
import Medicaid from "../UI/Other/Medicaid";
import { raleway } from "@/lib/fonts";
import FullTitle from "../UI/Other/FullTitle";
import sectionContents from "../../sectionContent.json";
import EmergencyFAQs from "./EmergencyFAQs";
import Link from "next/link";
import EmergencyActions from "./EmergencyActions";

export const metadata = {
  title: "Emergency Dental Services in Naperville | Keith Brown DDS",
  description:
    "Need emergency dental care in Naperville? Contact Keith Brown DDS for urgent dental services, including weekends. We're here to help you with your dental emergencies.",
  keywords:
    "emergency dental care, urgent dental services, weekend dentist, dental emergency Naperville, Keith Brown DDS",
  openGraph: {
    title: "Emergency Dental Services in Naperville | Keith Brown DDS",
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

  // Ensure there's content to display, otherwise return null
  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
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
          <EmergencyActions />
        </div>
        <div className="mx-4 mt-2" id="emergencyForm">
          <EmergencyForm />
        </div>
      </div>
      <div id="faqSection">
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
  );
};

export default Page;
