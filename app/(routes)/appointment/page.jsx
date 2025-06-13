import FullTitle from "@/components/shared/FullTitle";
import UnifiedForm from "@/components/forms/UnifiedForm";
import sectionContents from "@/lib/content/sectionContent.json";
import HeroCTA from "@/components/sections/hero/HeroCTA";
import Link from "next/link";
import { CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/solid";

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
      <div className="flex px-6">
        <a
          href="tel:6302968702"
          className="inline-flex items-center w-full gap-2 p-4 py-3 text-lg font-semibold text-center text-gray-900 transition-colors duration-200 bg-white border border-gray-300 rounded-lg lg:px-8 lg:py-4 hover:bg-gray-50 lg:text-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
          aria-label="Call our dental office"
        >
          <PhoneIcon className="w-5 h-5 text-teal-600" />
          Call (630-296-8702)
        </a>
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
