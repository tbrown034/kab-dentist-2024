"use client";

import React from "react";
import Link from "next/link";
import { trackingNumber } from "@/lib/constants/constants";

const EmergencyActions = () => {
  const scrollToFAQ = () => {
    const faqSection = document.getElementById("emergencyFAQs");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      <button
        onClick={() => (window.location.href = `tel:${trackingNumber}`)}
        className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400 lg:text-lg"
      >
        Call Now
      </button>
      <Link
        href="#emergencyForm"
        className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400 lg:text-lg"
      >
        Request Free Consult
      </Link>
      <button
        onClick={scrollToFAQ}
        className="p-2 text-white bg-teal-900 border-2 border-teal-900 rounded-lg hover:bg-teal-800 active:bg-teal-600 lg:text-lg"
      >
        Emergency FAQs
      </button>
      <Link
        href="/"
        className="p-2 text-black bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-200 active:bg-gray-300 lg:text-lg"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default EmergencyActions;
