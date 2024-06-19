"use client";
import React, { useState } from "react";
import FAQs from "./FAQs";
import { raleway } from "../font";
import FullTitle from "../UI/Other/FullTitle";
import sectionContents from "../../sectionContent.json";
import ServicesSeparator from "./ServicesSeparator";
import ServicesSearch from "./ServicesSearch";
import DocBot from "./DocBot";
import Link from "next/link";
import Head from "next/head";

const DentalServices = () => {
  const { title, highlightedText, highlightInFront, textBlock } =
    sectionContents.dentalServicesPage;

  const [selectedService, setSelectedService] = useState(null);

  if (!title || !textBlock || textBlock.length === 0) return null;

  return (
    <>
      <Head>
        <title>{title} - Dental Services in Naperville | Keith Brown DDS</title>
        <meta
          name="description"
          content="Explore the wide range of dental services offered by Keith Brown DDS in Naperville. From routine check-ups to advanced procedures, we provide comprehensive dental care for the whole family."
        />
        <meta
          name="keywords"
          content="dental services Naperville, comprehensive dental care, family dentist, routine check-ups, advanced dental procedures, Keith Brown DDS"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://keithbrowndds.com/dentalservices" />
        <meta
          property="og:title"
          content={`${title} - Dental Services in Naperville | Keith Brown DDS`}
        />
        <meta
          property="og:description"
          content="Explore the wide range of dental services offered by Keith Brown DDS in Naperville. From routine check-ups to advanced procedures, we provide comprehensive dental care for the whole family."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://keithbrowndds.com/dentalservices"
        />
        <meta
          property="og:image"
          content="https://keithbrowndds.com/og-dentalservices.jpg"
        />
        <meta property="og:site_name" content="Keith Brown DDS" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${title} - Dental Services in Naperville | Keith Brown DDS`}
        />
        <meta
          name="twitter:description"
          content="Explore the wide range of dental services offered by Keith Brown DDS in Naperville. From routine check-ups to advanced procedures, we provide comprehensive dental care for the whole family."
        />
        <meta
          name="twitter:image"
          content="https://keithbrowndds.com/twitter-dentalservices.jpg"
        />
      </Head>
      <section className="flex flex-col gap-8 px-4 mt-6">
        <div className="flex flex-col gap-2">
          <h1
            className={`${raleway.className} text-3xl md:text-4xl font-extrabold tracking-tight`}
          >
            <FullTitle
              title={title}
              highlightedText={highlightedText}
              highlightInFront={highlightInFront}
            />
          </h1>
          {textBlock.map((block, blockIndex) => (
            <div key={blockIndex} className="flex flex-col gap-2 text-lg">
              <p>{block.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center gap-2 mt-2 md:text-base">
          <Link
            href="#browseServices"
            className="p-4 text-white bg-teal-600 border-2 border-teal-600 rounded-xl md:p-4 xl:p-5 hover:bg-teal-500 active:bg-teal-400"
          >
            Browse Services
          </Link>
          <Link
            href="#docBot"
            className="p-4 text-white bg-teal-900 border-2 border-teal-900 rounded-lg lg:text-lg hover:bg-teal-800 active:bg-teal-600"
          >
            Doc Bot
          </Link>
          <Link
            href="/"
            className="p-4 text-black bg-white border-2 border-black rounded-lg bg-teal-white hover:bg-gray-100 active:bg-gray-400"
          >
            Back to Home
          </Link>
        </div>
        <ServicesSearch onSelectService={setSelectedService} />
        <ServicesSeparator />
        <FAQs />
        <DocBot />
      </section>
    </>
  );
};

export default DentalServices;
