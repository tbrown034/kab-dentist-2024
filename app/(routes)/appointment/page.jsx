import React from "react";
import Link from "next/link";
import FullTitle from "@/components/shared/FullTitle";
import UnifiedForm from "@/components/forms/UnifiedForm";
import sectionContents from "@/lib/content/sectionContent.json";

export const metadata = {
  title: "Make an Appointment | Dr. Keith Brown DDS, FAGD",
  description:
    "Schedule your appointment with Dr. Keith Brown, DDS, FAGD, today. Fill out the form to get started.",
  keywords: "appointment, dentist, Keith Brown DDS, Naperville, dental care",
  openGraph: {
    title: "Make an Appointment | Keith Brown DDS",
    description:
      "Schedule your appointment with Dr. Keith Brown, DDS, FAGD, today. Fill out the form to get started.",
    url: "https://keithbrowndds.com/appointment",
    images: [
      {
        url: "https://keithbrowndds.com/og-appointment.jpg",
        width: 800,
        height: 600,
        alt: "Keith Brown DDS - Make an Appointment",
      },
    ],
    site_name: "Keith Brown DDS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Make an Appointment | Keith Brown DDS",
    description:
      "Schedule your appointment with Dr. Keith Brown, DDS, FAGD, today. Fill out the form to get started.",
    image: "https://keithbrowndds.com/twitter-appointment.jpg",
  },
};

export default function AppointmentPage() {
  const { title, textBlock, highlightedText, highlightInFront } =
    sectionContents.makeAnAppointmentSection;

  // Early return if content is missing
  if (!title || !textBlock?.length) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-lg text-gray-600">Content not available</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-8 px-4 mt-6" id="appointmentSection">
      <h1 className="text-2xl font-extrabold tracking-tight font-header md:text-3xl">
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
          href="#appointmentForm"
          className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
        >
          Appointment Form
        </Link>
        <Link
          href="/call-now"
          className="p-2 text-white bg-teal-900 border-2 border-teal-900 rounded-lg hover:bg-teal-800 active:bg-teal-600"
        >
          Call Now
        </Link>
        <Link
          href="/"
          className="p-2 bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-200 dark:text-black active:bg-gray-300"
        >
          Back to Home
        </Link>
      </div>

      <div
        id="appointmentForm"
        className="flex flex-col gap-2 p-4 mx-4 text-white bg-teal-800 rounded-lg shadow"
      >
        <UnifiedForm />
      </div>
    </section>
  );
}
