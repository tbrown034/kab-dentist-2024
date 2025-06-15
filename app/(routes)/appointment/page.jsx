import Image from "next/image";
import Link from "next/link";
import Medicaid from "@/components/shared/Medicaid";
import FullTitle from "@/components/shared/FullTitle";
import UnifiedForm from "@/components/forms/UnifiedForm";
import drReception from "../../../src/assets/images/doctor/dr-horizontal-reception.jpeg";
import { PhoneIcon, DocumentTextIcon } from "@heroicons/react/24/solid";

export const metadata = {
  title: "Request a Dental Appointment | Dr. Keith A. Brown DDS, FAGD",
  description:
    "Looking to book a dental appointment in Naperville? Dr. Keith A. Brown DDS, FAGD offers comprehensive, family-friendly care. Schedule your visit today.",
  keywords:
    "dentist appointment Naperville, dental checkup, Dr. Keith Brown DDS, book dental visit",
  openGraph: {
    title: "Request a Dental Appointment | Dr. Keith A. Brown DDS, FAGD",
    description:
      "Looking to book a dental appointment in Naperville? Dr. Keith A. Brown DDS, FAGD offers comprehensive, family-friendly care. Schedule your visit today.",
    url: "https://keithbrowndds.com/appointment",
    images: [
      {
        url: "https://keithbrowndds.com/og-appointment.jpg",
        width: 800,
        height: 600,
        alt: "Keith Brown DDS - Book Appointment",
      },
    ],
    site_name: "Keith Brown DDS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Dental Appointment | Dr. Keith A. Brown DDS, FAGD",
    description:
      "Looking to book a dental appointment in Naperville? Dr. Keith A. Brown DDS, FAGD offers comprehensive, family-friendly care. Schedule your visit today.",
    image: "https://keithbrowndds.com/twitter-appointment.jpg",
  },
};

const Page = () => {
  return (
    <div className="flex flex-col gap-12 p-6">
      <section
        className="flex flex-col xl:flex-row gap-6 xl:gap-12"
        id="appointmentSection"
      >
        <div className="w-full xl:w-1/2 flex items-center justify-center">
          <div className="relative w-full h-[280px] sm:aspect-[5/3] lg:aspect-[16/9] rounded-lg shadow-lg overflow-hidden">
            <Image
              src={drReception}
              alt="Dr. Keith A. Brown at the reception desk, welcoming patients"
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 w-full xl:w-1/2">
          <h1 className="text-3xl font-extrabold tracking-tight font-header xl:text-5xl mb-2">
            <FullTitle
              title="Simplifying Your Journey with Easy Scheduling"
              highlightedText="Simplifying Your Journey"
              highlightInFront={true}
            />
          </h1>

          <div className="flex flex-col gap-4 pb-2 text-xl">
            <p>
              Embark on your journey to a healthier, happier smile with our easy
              online scheduling. We ensure top-tier dental care with unmatched
              patient convenience.
            </p>
            <p>
              In pain or ready to schedule? Don’t wait –{" "}
              <a
                href="tel:6302968702"
                className="text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
              >
                call now
              </a>
              ,{" "}
              <Link
                href="#appointmentForm"
                className="text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
              >
                fill out the form below
              </Link>{" "}
              or{" "}
              <Link
                href="/dental-services"
                className="text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
              >
                learn more
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-2 sm:flex-row xl:flex-wrap xl:gap-6">
            <a
              href="tel:6302968702"
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Call our office"
            >
              <PhoneIcon className="w-5 h-5" />
              Call (630) 296-8702
            </a>

            <Link
              href="#appointmentForm"
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Request dental appointment"
            >
              <DocumentTextIcon className="w-5 h-5 text-teal-600" />
              Request Appointment
            </Link>
          </div>
        </div>
      </section>

      <div id="appointmentForm">
        <UnifiedForm formType="appointment" />
      </div>

      <div className="text-black dark:text-white">
        <Medicaid />
      </div>
    </div>
  );
};

export default Page;
