// components/sections/map/MapSection.jsx
// Client Component
"use client";

import FullTitle from "@/components/shared/FullTitle";
import Image from "next/image";
import bankExt2 from "../../../src/assets/images/building/building-exterior.jpeg";
import MyGoogleMap from "./MyGoogleMap";
import Link from "next/link";
import { MapPinIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";

const MapSection = () => {
  const title = "Welcoming You to Your New Naperville Dental Home";
  const highlightedText = "Welcoming You";
  const highlightInFront = true;

  return (
    <section className="w-full max-w-6xl mx-auto" id="locationSection">
      {/* Heading */}
      <h2 className="font-header text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8 sm:mb-10 lg:mb-12 px-4 text-center">
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h2>

      {/* Image + Text Container */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
            <Image
              src={bankExt2}
              alt="Exterior view of the Fifth Third Bank building at 1296 Rickert Drive, Naperville, IL"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Right: Text + CTA */}
        <div className="flex flex-col gap-6 lg:w-1/2 justify-center px-2 lg:px-0">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-200 leading-relaxed">
            Visit us on the third floor of{" "}
            <Link
              href="https://www.google.com/maps/place/Keith+A.+Brown,+DDS/@41.7477667,-88.16735,19z/data=!4m6!3m5!1s0x880e57ffb6eb6c69:0xbc5292dc03318948!8m2!3d41.7482219!4d-88.166756!16s%2Fg%2F1tfq57bq?entry=ttu"
              className="font-semibold text-teal-700 underline underline-offset-2 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors active:text-teal-500"
            >
              Naperville's Fifth Third Bank Building at Rickert Drive and 75th
              Street
            </Link>
            — where comfort, convenience, and care come together.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            We offer free, designated parking and elevator access to our office.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-base font-medium bg-teal-600 text-white shadow-sm hover:bg-teal-700 active:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 transition-colors"
              href="https://www.google.com/maps?sca_esv=79ff9b4c6b5b9f67&sca_upv=1&output=search&q=keith+brown+dds&source=lnms&entry=mc"
            >
              <MapPinIcon className="w-5 h-5 mr-2" />
              Get Directions
            </Link>
            <button
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-base font-medium border-2 border-gray-400 dark:border-gray-500 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-400 active:bg-gray-100 dark:active:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 transition-all"
              onClick={copyAddressToClipboard}
            >
              <ClipboardDocumentIcon className="w-5 h-5 mr-2" />
              Copy Address
            </button>
          </div>
        </div>
      </div>

      {/* Google Map below */}
      <div className="mt-8 lg:mt-12 rounded-2xl overflow-hidden shadow-xl">
        <MyGoogleMap />
      </div>
    </section>
  );
};

const copyAddressToClipboard = async () => {
  const address = "1296 Rickert Dr #300, Naperville, IL 60540";
  try {
    await navigator.clipboard.writeText(address);
    alert("Address copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

export default MapSection;
