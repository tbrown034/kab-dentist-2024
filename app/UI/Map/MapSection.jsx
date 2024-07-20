"use client"; // Ensures client-side rendering for the component

import React from "react";
import FullTitle from "@/app/UI/Other/FullTitle"; // Confirm this import path is correct
import MapImgGroup from "./MapImgGroup";
import MyGoogleMap from "./MyGoogleMap";
import Link from "next/link";
import { raleway } from "../../../app/font.js";

const MapSection = () => {
  const title = "Welcoming You to Your Naperville Dental Home";
  const highlightedText = "Welcoming You";
  const highlightInFront = true;

  return (
    <section className="flex flex-col gap-4" id="locationSection">
      <h2
        className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
        <FullTitle
          title={title}
          highlightedText={highlightedText}
          highlightInFront={highlightInFront}
        />
      </h2>
      <div className="flex flex-col gap-4">
        <p>
          For over 40 years, our Naperville location has been dedicated to
          enhancing smiles, offering exceptional dental care from the scenic
          third-floor of{" "}
          <Link
            href="https://www.google.com/maps/place/Keith+A.+Brown,+DDS,+FAGD/@41.7477667,-88.16735,19z/data=!4m6!3m5!1s0x880e57ffb6eb6c69:0xbc5292dc03318948!8m2!3d41.7482219!4d-88.166756!16s%2Fg%2F1tfq57bq?entry=ttu"
            className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-500 active:text-teal-400"
          >
            Naperville's Fifth Third Bank Building at Rickert Drive and 75th
            Street
          </Link>
          .
        </p>
        <p>
          We offer free, designated parking and elevator access to our office.
        </p>
      </div>
      <div className="flex flex-row items-center gap-4 py-2">
        <Link
          className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
          href="https://www.google.com/maps?sca_esv=79ff9b4c6b5b9f67&sca_upv=1&output=search&q=keith+brown+dds&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3J_86uWOeqwdnV0yaSF-x2jrJh7Dt5wV71ckxEPe_0GQyc61_Jkg5ZI9z4zNW20fWd2tUn_HrTAULuFP7u75dytEkiWC15l7moHi_nYsx6bYU7gYxjHncfuRcjwgxByi-2dbm91Px5JKg1Jotj8vdUSEMemJ8XA6RB42LqHkYBEFrl5n20w&entry=mc&ved=1t:200715&ictx=111"
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
      <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-2">
        <div className="border-2 rounded-2xl">
          <MyGoogleMap />
        </div>
        <MapImgGroup />
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
