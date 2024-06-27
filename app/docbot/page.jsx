import React from "react";
import { raleway } from "../font";
import FullTitle from "../UI/Other/FullTitle";
import DocBot from "../dentalservices/DocBot";
import Link from "next/link";

export const metadata = {
  title: "Virtual Dental Assistant | Dr. Keith Brown DDS",
  description:
    "Meet DocBot, your virtual dental assistant at Keith Brown DDS. Get instant answers to your dental questions and learn more about our services in Naperville.",
  keywords:
    "virtual dental assistant, DocBot, Keith Brown DDS, dental services, dental care",
  openGraph: {
    title: "Virtual Dental Assistant | Dr. Keith Brown DDS",
    description:
      "Meet DocBot, your virtual dental assistant at Keith Brown DDS. Get instant answers to your dental questions and learn more about our services in Naperville.",
    url: "https://keithbrowndds.com/docbot",
    images: [
      {
        url: "https://keithbrowndds.com/og-docbot.jpg",
        width: 800,
        height: 600,
        alt: "Keith Brown DDS - Virtual Dental Assistant",
      },
    ],
    site_name: "Keith Brown DDS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet DocBot | Virtual Dental Assistant | Keith Brown DDS",
    description:
      "Meet DocBot, your virtual dental assistant at Keith Brown DDS. Get instant answers to your dental questions and learn more about our services in Naperville.",
    image: "https://keithbrowndds.com/twitter-docbot.jpg",
  },
};

const DocBotPage = () => {
  const title = "Meet DocBot, Your Virtual Dental Assistant";
  const highlightedText = "Meet DocBot";
  const textBlock = [
    {
      text: "Get instant answers to your dental questions and learn more about the services offered at Keith Brown DDS in Naperville.",
    },
  ];

  return (
    <section className="flex flex-col gap-4 px-4 mt-6" id="docBotSection">
      <h1
        className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={true}
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
          href="/dentalservices"
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
      <div className="flex justify-center w-full p-8">
        <DocBot />
      </div>
    </section>
  );
};

export default DocBotPage;
