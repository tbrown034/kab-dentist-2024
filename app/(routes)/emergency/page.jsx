import Image from "next/image";
import Link from "next/link";
import Medicaid from "@/components/shared/Medicaid";
import FullTitle from "@/components/shared/FullTitle";
import EmergencyFAQs from "@/components/sections/emergency/EmergencyFAQs";
import UnifiedForm from "@/components/forms/UnifiedForm";
import drWithPatientAfter from "../../../src/assets/images/doctor/dr-with-patient-after.jpeg";
import { PhoneIcon, DocumentTextIcon } from "@heroicons/react/24/solid";

export const metadata = {
  title: "Emergency Dentist in Naperville | Dr. Keith A. Brown DDS, FAGD",
  description:
    "Looking for an emergency dentist in Naperville? Dr. Keith A. Brown DDS, FAGD offers same-day and after-hours dental care. Call now or request a consultation online.",
  keywords:
    "emergency dentist Naperville, same-day dental care, after-hours dental, urgent dentist, Dr. Keith Brown DDS",
  openGraph: {
    title: "Emergency Dentist in Naperville | Dr. Keith A. Brown DDS, FAGD",
    description:
      "Looking for an emergency dentist in Naperville? Dr. Keith A. Brown DDS, FAGD offers same-day and after-hours dental care. Call now or request a consultation online.",
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
    title: "Emergency Dentist in Naperville | Dr. Keith A. Brown DDS, FAGD",
    description:
      "Looking for an emergency dentist in Naperville? Dr. Keith A. Brown DDS, FAGD offers same-day and after-hours dental care. Call now or request a consultation online.",
    image: "https://keithbrowndds.com/twitter-emergency.jpg",
  },
};

const Page = () => {
  return (
    <div className="flex flex-col gap-12 p-6">
      {/* Hero Section */}
      <section
        className="flex flex-col xl:flex-row gap-6 xl:gap-12"
        id="emergencySection"
      >
        {/* Image */}
        <div className="w-full xl:w-1/2 flex items-center justify-center">
          <div className="relative w-full h-[280px] sm:aspect-[5/3] lg:aspect-[16/9] rounded-lg shadow-lg overflow-hidden">
            <Image
              src={drWithPatientAfter}
              alt="Dr. Keith A. Brown providing emergency dental care"
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-6 w-full xl:w-1/2">
          <h1 className="text-3xl font-extrabold tracking-tight font-header xl:text-5xl mb-2">
            <FullTitle
              title="Emergency Dental Care You Can Trust"
              highlightedText="Emergency Dental Care"
              highlightInFront={true}
            />
          </h1>

          <div className="flex flex-col gap-4 pb-2 text-xl">
            <p>
              <Link
                className="font-semibold text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
                href="#doctorSection"
              >
                Dr. Keith A. Brown DDS, FAGD
              </Link>{" "}
              offers trusted emergency dental services in Naperville — including
              free night and weekend consultations to help you get seen fast.
            </p>
            <p>
              In pain or unsure what to do? Don’t wait –{" "}
              <a
                href="tel:6302968702"
                data-track="phone-click"
                className="text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
              >
                call now
              </a>
              ,{" "}
              <Link
                href="#emergencyForm"
                className="text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
              >
                fill out the form below
              </Link>{" "}
              or{" "}
              <Link
                href="#emergencyFAQs"
                className="text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
              >
                read the FAQs
              </Link>
              .
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 mt-2 sm:flex-row xl:flex-wrap xl:gap-6">
            <a
              href="tel:6302968702"
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Call our emergency dental line"
              data-track="phone-click"
            >
              <PhoneIcon className="w-5 h-5" />
              Call (630) 296-8702
            </a>

            <Link
              href="#emergencyForm"
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Request emergency consultation"
            >
              <DocumentTextIcon className="w-5 h-5 text-teal-600" />
              Request Emergency Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Form */}
      <div id="emergencyForm">
        <UnifiedForm formType="emergency" />
      </div>

      {/* FAQs */}
      <div id="emergencyFAQs">
        <EmergencyFAQs />
      </div>

      {/* Medicaid Info */}
      <div className="text-black dark:text-white">
        <Medicaid />
      </div>
    </div>
  );
};

export default Page;
