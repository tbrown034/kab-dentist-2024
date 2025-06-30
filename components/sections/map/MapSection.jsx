"use client";

import FullTitle from "@/components/shared/FullTitle";
import Image from "next/image";
import bankExt2 from "../../../src/assets/images/building/building-exterior.jpeg";
import MyGoogleMap from "./MyGoogleMap";
import Link from "next/link";

const MapSection = () => {
  const title = "Welcoming You to Your New Naperville Dental Home";
  const highlightedText = "Welcoming You";
  const highlightInFront = true;

  return (
    <section className="flex flex-col gap-6  " id="locationSection">
      {/* Heading */}
      <h2 className="font-header text-2xl md:text-3xl font-extrabold tracking-tight">
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h2>

      {/* Image + Text Container */}
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Left: Image */}
        <div className="w-full sm:w-1/2">
          <Image
            src={bankExt2}
            alt="Exterior view of the Fifth Third Bank building at 1296 Rickert Drive, Naperville, IL"
            width={800}
            height={600}
            className="rounded-xl w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Right: Text + CTA */}
        <div className="flex flex-col gap-4 sm:w-1/2">
          <p>
            Visit us on the third floor of{" "}
            <Link
              href="https://www.google.com/maps/place/Keith+A.+Brown,+DDS,+FAGD/@41.7477667,-88.16735,19z/data=!4m6!3m5!1s0x880e57ffb6eb6c69:0xbc5292dc03318948!8m2!3d41.7482219!4d-88.166756!16s%2Fg%2F1tfq57bq?entry=ttu"
              className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-500 active:text-teal-400"
            >
              Naperville’s Fifth Third Bank Building at Rickert Drive and 75th
              Street
            </Link>
            — where comfort, convenience, and care come together.
          </p>
          <p>
            We offer free, designated parking and elevator access to our office.
          </p>

          <div className="flex flex-row items-center gap-4">
            <Link
              className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
              href="https://www.google.com/maps?sca_esv=79ff9b4c6b5b9f67&sca_upv=1&output=search&q=keith+brown+dds&source=lnms&entry=mc"
            >
              Get Directions
            </Link>
            <button
              className="p-2 bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-200 dark:text-black active:bg-gray-300"
              onClick={copyAddressToClipboard}
            >
              Copy Address
            </button>
          </div>
        </div>
      </div>

      {/* Google Map below */}
      <div className="mt-4 border-2 rounded-2xl overflow-hidden">
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
