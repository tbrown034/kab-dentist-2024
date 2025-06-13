import Image from "next/image";
import Link from "next/link";
import Medicaid from "@/components/shared/Medicaid";
import FullTitle from "@/components/shared/FullTitle";
import EmergencyFAQs from "@/components/sections/emergency/EmergencyFAQs";
import UnifiedForm from "@/components/forms/UnifiedForm";
import drWithPatientAfter from "../../../src/assets/images/doctor/dr-with-patient-after.jpeg";
import { PhoneIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import sectionContents from "@/lib/content/sectionContent.json";

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
    title: "Emergency Dental Services in Naperville | Dr. Keith Brown DDS",
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
    <div className="flex flex-col gap-12 p-6">
      {/* Hero Section */}
      <section
        className="flex flex-col xl:flex-row gap-6 xl:gap-12"
        id="emergencySection"
      >
        {/* Image */}
        <div className="w-full xl:w-1/2">
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] rounded-lg shadow-lg overflow-hidden">
            <Image
              src={drWithPatientAfter}
              alt="Dr. Keith A. Brown providing emergency dental care"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-6 w-full xl:w-1/2">
          <h1 className="text-3xl font-extrabold tracking-tight font-header xl:text-5xl mb-2">
            <FullTitle
              title={title}
              highlightedText={highlightedText}
              highlightInFront={highlightInFront}
            />
          </h1>

          <div className="flex flex-col gap-4 pb-2">
            <p className="text-xl">
              <Link
                className="font-semibold text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
                href="#doctorSection"
              >
                Dr. Keith A. Brown DDS, FAGD
              </Link>{" "}
              offers emergency dental care in Naperville with free same-day and
              after-hours consultations.
            </p>
            <p className="text-xl">Call now or request a same-day consult.</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 mt-2 sm:flex-row sm:items-start xl:flex-wrap xl:items-center xl:gap-6">
            <a
              href="tel:6302968702"
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-lg lg:px-8 lg:py-4 hover:bg-teal-700 lg:text-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Call our emergency dental line"
            >
              <PhoneIcon className="w-5 h-5" />
              Call (630-296-8702)
            </a>

            <Link
              href="#emergencyForm"
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg lg:px-8 lg:py-4 hover:bg-gray-50 lg:text-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Request emergency consultation"
            >
              <DocumentTextIcon className="w-5 h-5 text-teal-600" />
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-4 mt-2" id="emergencyForm">
        <UnifiedForm formType="emergency" />
      </div>

      <div id="emergencyFAQs">
        <EmergencyFAQs />
      </div>

      <div className="text-black dark:text-white">
        <Medicaid />
      </div>
    </div>
  );
};

export default Page;
