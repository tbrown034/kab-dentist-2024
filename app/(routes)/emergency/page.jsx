import Image from "next/image";
import Link from "next/link";
import Medicaid from "@/components/shared/Medicaid";
import FullTitle from "@/components/shared/FullTitle";
import UnifiedForm from "@/components/forms/UnifiedForm";
import drWithPatientAfter from "../../../src/assets/images/doctor/dr-with-patient-after.jpeg";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import DisplayNumber from "@/components/DisplayNumber";

export const metadata = {
  title: "Emergency Dentist in Naperville | Dr. Keith A. Brown DDS",
  description:
    "Looking for an emergency dentist in Naperville? Dr. Keith A. Brown DDS offers same-day and after-hours dental care. Call now or request a consultation online.",
  keywords:
    "emergency dentist Naperville, same-day dental care, after-hours dental, urgent dentist, Dr. Keith Brown DDS",
  openGraph: {
    title: "Emergency Dentist in Naperville | Dr. Keith A. Brown DDS",
    description:
      "Looking for an emergency dentist in Naperville? Dr. Keith A. Brown DDS offers same-day and after-hours dental care. Call now or request a consultation online.",
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
    title: "Emergency Dentist in Naperville | Dr. Keith A. Brown DDS",
    description:
      "Looking for an emergency dentist in Naperville? Dr. Keith A. Brown DDS offers same-day and after-hours dental care. Call now or request a consultation online.",
    image: "https://keithbrowndds.com/twitter-emergency.jpg",
  },
};

const Page = () => {
  return (
    <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section
        className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
        id="emergencySection"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
            <Image
              src={drWithPatientAfter}
              alt="Dr. Keith A. Brown providing emergency dental care"
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center gap-6 w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-header">
            <FullTitle
              title="When It Matters Most, We're Here"
              highlightedText="When It Matters Most"
              highlightInFront={true}
            />
          </h1>

          <div className="flex flex-col gap-4 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-200 leading-relaxed">
            <p>
              With over 40 years serving Naperville,{" "}
              <Link
                className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-600 transition-colors dark:text-teal-500"
                href="#doctorSection"
              >
                Dr. Keith A. Brown DDS
              </Link>{" "}
              understands that dental emergencies don't wait for business hours.
              We take after-hours calls to provide immediate guidance.
            </p>
            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-600 p-4 rounded-r-lg">
              <p className="text-base sm:text-lg font-medium text-teal-900 dark:text-teal-100">
                <strong>Call Our Emergency Line:</strong> Leave a detailed message and Dr. Brown will often return urgent calls personally when available. 
                We'll help assess your situation and get you scheduled for immediate care.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-3 sm:flex-wrap lg:flex-nowrap pt-4">
            <DisplayNumber
              className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-lg hover:from-teal-700 hover:to-teal-800 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
              prefixText="Emergency: "
            />

            <Link
              href="#emergencyForm"
              className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-4 text-base font-semibold text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-2xl shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
              aria-label="Submit emergency request form"
            >
              <DocumentTextIcon className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
              <span>Submit Emergency Request Form</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Form */}
      <div id="emergencyForm">
        <UnifiedForm formType="emergency" />
      </div>

      {/* Medicaid Info */}
      <div className="text-black dark:text-white">
        <Medicaid />
      </div>
    </div>
  );
};

export default Page;
