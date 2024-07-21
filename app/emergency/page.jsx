import React from "react";
import Medicaid from "../UI/Other/Medicaid";
import { raleway } from "@/lib/fonts";
import FullTitle from "../UI/Other/FullTitle";
import sectionContents from "../../sectionContent.json";
import EmergencyFAQs from "./EmergencyFAQs";
import UnifiedForm from "../UI/Forms/UnifiedForm";
import EmergencyActions from "./EmergencyActions";

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
      <h1
        className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
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
      <EmergencyActions />
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
