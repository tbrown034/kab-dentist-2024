// app/call-now/page.jsx
import React from "react";
import FullTitle from "../UI/Other/FullTitle";
import Link from "next/link";
import CallOptions from "./CallOptions";
import { officeNumber, trackingNumber } from "@/lib/constants";

export const metadata = {
  title: "Call Us Now | Dr. Keith Brown DDS",
  description:
    "Get in touch with Keith Brown DDS for all your dental needs. Call us now for immediate assistance.",
  keywords:
    "call now, contact, dentist, Keith Brown DDS, Naperville dental care",
  openGraph: {
    title: "Call Us Now | Dr. Keith Brown DDS",
    description:
      "Get in touch with Keith Brown DDS for all your dental needs. Call us now for immediate assistance.",
    url: "https://keithbrowndds.com/call-now",
    images: [
      {
        url: "https://keithbrowndds.com/og-call-now.jpg",
        width: 800,
        height: 600,
        alt: "Keith Brown DDS - Call Now",
      },
    ],
    site_name: "Keith Brown DDS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Call Us Now | Keith Brown DDS",
    description:
      "Get in touch with Keith Brown DDS for all your dental needs. Call us now for immediate assistance.",
    image: "https://keithbrowndds.com/twitter-call-now.jpg",
  },
};

const CallNowPage = () => {
  const title = "Call Us Now: Immediate Assistance Available";
  const highlightedText = "Call Us Now:";
  const highlightInFront = true;
  const textBlock = [
    {
      text: <p>We are happy to take your call!</p>,
    },
    {
      text: (
        <>
          Returning patients can call our office at{" "}
          <Link
            className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
            href={`tel:${officeNumber}`}
          >
            {officeNumber}
          </Link>
          , while new, emergency, and after-hours patients can call{" "}
          <Link
            className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
            href={`tel:${trackingNumber}`}
          >
            {trackingNumber}
          </Link>
        </>
      ),
    },
    {
      text: (
        <p>
          {" "}
          You can also send an{" "}
          <Link
            className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
            href="/make-an-appointment"
          >
            appointment request
          </Link>{" "}
          or find more details about our{" "}
          <Link
            className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
            href="/emergency"
          >
            emergency service
          </Link>
          .
        </p>
      ),
    },
  ];

  return (
    <section className="flex flex-col gap-4 px-4 mt-6" id="callNowSection">
      <h1
        className={`font-header text-2xl md:text-3xl font-extrabold tracking-tight`}
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
      <CallOptions />
    </section>
  );
};

export default CallNowPage;
