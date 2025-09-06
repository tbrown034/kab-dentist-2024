// components/sections/doctor/DoctorSection.jsx
// Server Component

import Link from "next/link";
import FullTitle from "@/components/shared/FullTitle";
import DoctorSingleImage from "./DoctorSingleImage";

const DoctorSection = () => {
  const title =
    "Dr. Keith A. Brown DDS: A Continual Pursuit of Excellence";
  const highlightedText = "Dr. Keith A. Brown DDS:";
  const highlightInFront = true;

  return (
    <section id="doctorSection" className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-center">
        {/* Left side: Text content */}
        <div className="flex flex-col gap-6 lg:w-1/2 order-2 lg:order-1">
          <h2 className="font-header text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <FullTitle
              title={title}
              highlightedText={highlightedText}
              highlightInFront={highlightInFront}
            />
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-200 leading-relaxed">
            With over four decades of experience, Dr. Keith A. Brown, DDS,
            is a trusted name in Naperville, delivering unmatched expertise and
            personalized dental care.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            A Chicagoland native, Dr. Brown graduated from Naperville's{" "}
            <Link
              href="https://www.northcentralcollege.edu/"
              className="font-semibold text-teal-700 underline underline-offset-2 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors active:text-teal-500"
            >
              North Central College
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.luc.edu/archives/schoolofdentistry/"
              className="font-semibold text-teal-700 underline underline-offset-2 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors active:text-teal-500"
            >
              Loyola's School of Dentistry
            </Link>{" "}
            in Maywood, IL. He is a member of the{" "}
            <Link
              href="https://www.ada.org/"
              className="font-semibold text-teal-700 underline underline-offset-2 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors active:text-teal-500"
            >
              American Dental Association
            </Link>
            ,{" "}
            <Link
              href="https://www.cds.org/"
              className="font-semibold text-teal-700 underline underline-offset-2 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors active:text-teal-500"
            >
              Chicago Dental Society
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.aes-tmj.org/"
              className="font-semibold text-teal-700 underline underline-offset-2 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors active:text-teal-500"
            >
              American Equilibration Society
            </Link>
            .
          </p>
        </div>

        {/* Right side: Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <DoctorSingleImage />
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
