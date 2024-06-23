"use client";

import React from "react";
import Link from "next/link";

const EmergencyActions = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById("faqSection");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-row items-center gap-2 mt-2 text-xs md:text-base">
      <button
        onClick={() => (window.location.href = "tel:630-301-0589")}
        className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-lg lg:text-lg hover:bg-teal-500 active:bg-teal-400"
      >
        Emergency Call
      </button>
      <button
        onClick={scrollToFAQ}
        className="p-2 text-white bg-teal-900 border-2 border-teal-900 rounded-lg lg:text-lg hover:bg-teal-800 active:bg-teal-600"
      >
        Emergency FAQs
      </button>
      <Link
        href="/"
        className="p-2 text-black bg-white border-2 border-black rounded-lg bg-teal-white hover:bg-gray-100 active:bg-gray-400"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default EmergencyActions;
