import Image from "next/image";
import Link from "next/link";
import Medicaid from "@/components/shared/Medicaid";
import FullTitle from "@/components/shared/FullTitle";
import UnifiedForm from "@/components/forms/UnifiedForm";
import drReception from "../../../src/assets/images/doctor/dr-horizontal-reception.jpeg";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import DisplayNumber from "@/components/DisplayNumber";

export const metadata = {
  title: "Request a Dental Appointment | Dr. Keith A. Brown DDS",
  description:
    "Looking to book a dental appointment in Naperville? Dr. Keith A. Brown DDS offers comprehensive, family-friendly care. Schedule your visit today.",
  keywords:
    "dentist appointment Naperville, dental checkup, Dr. Keith Brown DDS, book dental visit",
  openGraph: {
    title: "Request a Dental Appointment | Dr. Keith A. Brown DDS",
    description:
      "Looking to book a dental appointment in Naperville? Dr. Keith A. Brown DDS offers comprehensive, family-friendly care. Schedule your visit today.",
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
    title: "Request a Dental Appointment | Dr. Keith A. Brown DDS",
    description:
      "Looking to book a dental appointment in Naperville? Dr. Keith A. Brown DDS offers comprehensive, family-friendly care. Schedule your visit today.",
    image: "https://keithbrowndds.com/twitter-appointment.jpg",
  },
};

const Page = () => {
  return (
    <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
      <section
        className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
        id="appointmentSection"
      >
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
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

        <div className="flex flex-col justify-center gap-6 w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-header">
            <FullTitle
              title="Simplifying Your Journey with Easy Scheduling"
              highlightedText="Simplifying Your Journey"
              highlightInFront={true}
            />
          </h1>

          <div className="flex flex-col gap-4 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-200 leading-relaxed">
            <p>
              Embark on your journey to a healthier, happier smile with our easy
              online scheduling. We ensure top-tier dental care with unmatched
              patient convenience.
            </p>
            <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-600 p-4 rounded-r-lg">
              <p className="text-base sm:text-lg font-medium text-teal-900 dark:text-teal-100">
                <strong>In pain or ready to schedule?</strong> Don't wait –{" "}
                <DisplayNumber
                  className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-600 transition-colors dark:text-teal-500"
                />
                ,{" "}
                <Link
                  href="#appointmentForm"
                  className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-600 transition-colors dark:text-teal-500"
                >
                  fill out the form below
                </Link>{" "}
                or{" "}
                <Link
                  href="/dental-services"
                  className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-600 transition-colors dark:text-teal-500"
                >
                  learn more
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-3 sm:flex-wrap lg:flex-nowrap pt-4">
            <DisplayNumber
              showIcon={true}
              className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-lg hover:from-teal-700 hover:to-teal-800 hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
            />

            <Link
              href="#appointmentForm"
              className="inline-flex items-center justify-center gap-2 px-4 md:px-6 py-4 text-base font-semibold text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-2xl shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
              aria-label="Request dental appointment"
            >
              <CalendarDaysIcon className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
              <span>Appointment</span>
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
