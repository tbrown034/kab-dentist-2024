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
    <section className="max-w-7xl mx-auto" id="locationSection">
      {/* Heading */}
      <h2 className="font-header text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8 sm:mb-10 lg:mb-12 text-center">
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

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="group relative inline-flex items-center justify-center gap-3 sm:gap-2.5 rounded-2xl px-6 sm:px-7 py-4 text-base sm:text-lg font-semibold text-white overflow-hidden transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 bg-gradient-to-r from-teal-600 to-teal-700 shadow-xl hover:shadow-2xl hover:from-teal-700 hover:to-teal-800"
              href="https://www.google.com/maps?sca_esv=79ff9b4c6b5b9f67&sca_upv=1&output=search&q=keith+brown+dds&source=lnms&entry=mc"
            >
              <MapPinIcon className="w-5 h-5 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="tracking-wide">Get Directions</span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
            </Link>
            <button
              className="group relative inline-flex items-center justify-center gap-3 sm:gap-2.5 rounded-2xl px-6 sm:px-7 py-4 text-base sm:text-lg font-semibold backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 text-gray-900 dark:text-gray-100 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-white/90 dark:hover:bg-gray-800/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              onClick={copyAddressToClipboard}
            >
              <ClipboardDocumentIcon className="w-5 h-5 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="tracking-wide">Copy Address</span>
            </button>
          </div>
        </div>
      </div>

      {/* Google Map below */}
      <div className="mt-8 lg:mt-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-teal-600/20 dark:border-teal-400/20 bg-gradient-to-br from-teal-50 to-white dark:from-gray-800 dark:to-gray-900 p-1">
          <div className="rounded-xl overflow-hidden">
            <MyGoogleMap />
          </div>
        </div>
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
