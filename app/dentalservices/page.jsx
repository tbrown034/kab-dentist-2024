import React from "react";
import FAQs from "./FAQs";
import { raleway } from "../font";
import FullTitle from "../UI/Other/FullTitle";
import sectionContents from "../../sectionContent.json";
import ServicesSeparator from "./ServicesSeparator";
import ServicesSearch from "./ServicesSearch";
import DocBot from "./DocBot";
import Link from "next/link";

export const metadata = {
  title: "Dental Services - Naperville | Keith Brown DDS",
  description:
    "Explore the wide range of dental services offered by Keith Brown DDS in Naperville. From routine check-ups to advanced procedures, we provide comprehensive dental care for the whole family.",
  keywords:
    "dental services Naperville, comprehensive dental care, family dentist, routine check-ups, advanced dental procedures, Keith Brown DDS",
  openGraph: {
    title: "Dental Services - Naperville | Keith Brown DDS",
    description:
      "Explore the wide range of dental services offered by Keith Brown DDS in Naperville. From routine check-ups to advanced procedures, we provide comprehensive dental care for the whole family.",
    url: "https://keithbrowndds.com/dentalservices",
    images: [
      {
        url: "https://keithbrowndds.com/og-dentalservices.jpg",
        width: 800,
        height: 600,
        alt: "Keith Brown DDS - Comprehensive and Emergency Dental Care",
      },
    ],
    site_name: "Keith Brown DDS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Services - Naperville | Keith Brown DDS",
    description:
      "Explore the wide range of dental services offered by Keith Brown DDS in Naperville. From routine check-ups to advanced procedures, we provide comprehensive dental care for the whole family.",
    image: "https://keithbrowndds.com/twitter-dentalservices.jpg",
  },
};

const DentalServices = () => {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.dentalServicesPage;

  if (!title || !textBlock || textBlock.length === 0) return null;
  return (
    <section className="flex flex-col gap-4 px-4 mt-6" id="servicesSection">
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
          href="#browseServices"
          className="p-2 text-sm text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
        >
          Browse Services
        </Link>

        <Link
          href="/"
          className="p-2 text-sm bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-200 dark:text-black active:bg-gray-300"
        >
          Back to Home
        </Link>
      </div>
      <ServicesSearch />
      <ServicesSeparator />
      <FAQs />
      <DocBot />
    </section>
  );
};

export default DentalServices;
