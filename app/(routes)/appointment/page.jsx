import Image from "next/image";
import Link from "next/link";
import UnifiedForm from "@/components/forms/UnifiedForm";
import FullTitle from "@/components/shared/FullTitle";
import drReception from "../../../src/assets/images/doctor/dr-horizontal-reception.jpeg";
import { PhoneIcon, DocumentTextIcon } from "@heroicons/react/24/solid";

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
  return (
    <div className="flex flex-col gap-12 p-6">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-col lg:flex-row gap-6 xl:gap-12">
        {/* Image */}
        <div className="w-full xl:w-1/2">
          <div className="relative w-full h-64 md:h-80 xl:h-[26rem] rounded-lg shadow-lg overflow-hidden">
            <Image
              src={drReception}
              alt="Dr. Keith A. Brown standing at the reception area"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-6 w-full xl:w-1/2">
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight font-header xl:text-5xl mb-2">
              <FullTitle
                title="Make an Appointment"
                highlightedText="Make an Appointment"
                highlightInFront={true}
              />
            </h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Schedule Your Visit Today
            </h2>
          </div>

          <div className="flex flex-col gap-4 pb-2 text-lg xl:text-xl">
            <p>
              We look forward to seeing you! Dr. Brown and the team are
              dedicated to providing top-quality dental care for all our
              patients. Fill out the form below to schedule your appointment.
            </p>
            <p>
              Please provide as much detail as possible to help us prepare for
              your visit. Once we receive your form, a member of our team will
              contact you to confirm your appointment.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start flex-wrap xl:items-center xl:gap-6">
            <a
              href="tel:6302968702"
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-lg lg:px-8 lg:py-4 hover:bg-teal-700 lg:text-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Call our dental office"
            >
              <PhoneIcon className="w-5 h-5" />
              Call (630-296-8702)
            </a>

            <Link
              href="#appointmentForm"
              className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg lg:px-8 lg:py-4 hover:bg-gray-50 lg:text-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Go to appointment form"
            >
              <DocumentTextIcon className="w-5 h-5 text-teal-600" />
              Go to Form
            </Link>
          </div>

          {/* FAQ Link */}
          <p className="text-sm">
            <Link
              href="#appointmentForm"
              className="font-medium text-teal-700 underline hover:text-teal-600 active:text-teal-500 dark:text-teal-400"
            >
              Have questions about the process?
            </Link>{" "}
            See answers to common appointment topics.
          </p>
        </div>
      </section>

      {/* Form */}
      <div className="mx-4 mt-2" id="appointmentForm">
        <UnifiedForm formType="appointment" />
      </div>
    </div>
  );
}
