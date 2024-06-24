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
    <section className="flex flex-col gap-4 px-4 mt-6" id="emergencySection">
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
        {textBlock.map((block, blockIndex) => (
          <p key={blockIndex} className="text-lg">
            {block.text}
          </p>
        ))}
      </div>
      <div className="flex flex-row items-center gap-4 py-2">
        <Link
          href="#emergencyForm"
          className="p-2 text-sm text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
        >
          Emergency Form
        </Link>
        <Link
          href="#emergencyFAQs"
          className="p-2 text-sm text-white bg-teal-900 border-2 border-teal-900 rounded-lg hover:bg-teal-800 active:bg-teal-600"
        >
          Emergency FAQs
        </Link>
        <Link
          href="/"
          className="p-2 text-sm bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-200 dark:text-black active:bg-gray-300"
        >
          Back to Home
        </Link>
      </div>
      <div className="mx-4 mt-2" id="emergencyForm">
        <EmergencyForm />
      </div>
      <div id="emergencyFAQs">
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
    </section>
  );
};

export default Page;
