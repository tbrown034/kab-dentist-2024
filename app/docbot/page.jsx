import React from "react";
import DocBot from "../dentalservices/DocBot";
import Head from "next/head";

const DocBotPage = () => {
  return (
    <>
      <Head>
        <title>DocBot - Virtual Dental Assistant | Keith Brown DDS</title>
        <meta
          name="description"
          content="Meet DocBot, your virtual dental assistant. Get instant answers to your dental questions and find out more about our services at Keith Brown DDS in Naperville."
        />
        <meta
          name="keywords"
          content="virtual dental assistant, DocBot, dental questions, Keith Brown DDS, Naperville dentist"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://keithbrowndds.com/docbot" />
        <meta
          property="og:title"
          content="DocBot - Virtual Dental Assistant | Keith Brown DDS"
        />
        <meta
          property="og:description"
          content="Meet DocBot, your virtual dental assistant. Get instant answers to your dental questions and find out more about our services at Keith Brown DDS in Naperville."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keithbrowndds.com/docbot" />
        <meta
          property="og:image"
          content="https://keithbrowndds.com/og-docbot.jpg"
        />
        <meta property="og:site_name" content="Keith Brown DDS" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-gray-800">
        <h1 className="mb-4 text-4xl font-extrabold text-center text-teal-600 dark:text-teal-400">
          Meet DocBot, Your Virtual Dental Assistant
        </h1>
        <p className="mb-8 text-lg text-center text-gray-700 dark:text-gray-200">
          Get instant answers to your dental questions and learn more about the
          services offered at Keith Brown DDS in Naperville.
        </p>
        <DocBot />
      </div>
    </>
  );
};

export default DocBotPage;
