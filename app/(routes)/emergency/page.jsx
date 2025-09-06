import Image from "next/image";
import Link from "next/link";
import Medicaid from "@/components/shared/Medicaid";
import FullTitle from "@/components/shared/FullTitle";
import EmergencyFAQs from "@/components/sections/emergency/EmergencyFAQs";
import UnifiedForm from "@/components/forms/UnifiedForm";
import drWithPatientAfter from "../../../src/assets/images/doctor/dr-with-patient-after.jpeg";
import { PhoneIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { telNumber } from "@/lib/constants/constants";
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
    <div className="flex flex-col gap-12 p-6">
      {/* Hero Section */}
      <section
        className="flex flex-col xl:flex-row gap-6 xl:gap-12"
        id="emergencySection"
      >
        {/* Content First on Mobile, Second on Desktop */}
        <div className="flex flex-col justify-center gap-6 w-full xl:w-1/2 order-1 xl:order-2">
          <h1 className="text-3xl font-extrabold tracking-tight font-header xl:text-5xl mb-2">
            <FullTitle
              title="When It Matters Most, We're Here"
              highlightedText="When It Matters Most"
              highlightInFront={true}
            />
          </h1>

          <div className="flex flex-col gap-4 pb-2 text-xl">
            <p>
              With over 40 years serving Naperville,{" "}
              <Link
                className="font-semibold text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
                href="#doctorSection"
              >
                Dr. Keith A. Brown DDS
              </Link>{" "}
              understands that dental emergencies don't wait for business hours.
              That's why we take after-hours calls to provide immediate guidance
              and get you scheduled quickly.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong>Our approach:</strong> Call us anytime for immediate phone consultation.
              We'll help manage your pain, assess urgency, and often schedule you
              for next-day care. No emergency room visits needed for most dental issues.
            </p>
            <p>
              Need help now?{" "}
              <a
                href={`tel:${telNumber}`}
                data-track="phone-click"
                className="text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500 font-semibold"
              >
                Call us anytime
              </a>
              ,{" "}
              <Link
                href="#emergencyForm"
                className="text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
              >
                request a consultation online
              </Link>{" "}
              or{" "}
              <Link
                href="#emergencyFAQs"
                className="text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
              >
                check our emergency FAQs
              </Link>
              .
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-3 sm:flex-wrap lg:flex-nowrap max-w-full">
            <a
              href={`tel:${telNumber}`}
              className="flex-1 sm:flex-initial min-w-0 flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-teal-600 rounded-xl hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:px-5 lg:px-6 lg:text-lg"
              aria-label="Call our emergency dental line"
              data-track="phone-click"
            >
              <PhoneIcon className="w-5 h-5 flex-shrink-0" />
              <span className="whitespace-nowrap">Call <DisplayNumber asLink={false} /></span>
            </a>

            <Link
              href="#emergencyForm"
              className="flex-1 sm:flex-initial min-w-0 flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-gray-900 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:px-5 lg:px-6 lg:text-lg"
              aria-label="Request emergency consultation"
            >
              <DocumentTextIcon className="w-5 h-5 text-teal-600 flex-shrink-0" />
              <span>Emergency Consultation</span>
            </Link>
          </div>
        </div>

        {/* Image - Smaller on Mobile, Normal on Desktop */}
        <div className="w-full xl:w-1/2 flex items-start xl:items-center justify-center order-2 xl:order-1">
          {/* Mobile: Small floating image */}
          <div className="xl:hidden relative w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-lg overflow-hidden float-right ml-4 mb-4">
            <Image
              src={drWithPatientAfter}
              alt="Dr. Keith A. Brown"
              fill
              priority
              className="object-cover object-center"
              sizes="160px"
            />
          </div>
          {/* Desktop: Full size image */}
          <div className="hidden xl:block relative w-full aspect-[16/9] rounded-lg shadow-lg overflow-hidden">
            <Image
              src={drWithPatientAfter}
              alt="Dr. Keith A. Brown providing emergency dental care"
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 1280px) 50vw"
            />
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
