// app/call-now/CallOptions.jsx
"use client";

import React from "react";
import { officeNumber, trackingNumber } from "@/lib/constants";
import Link from "next/link";

const CallOptions = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={() => (window.location.href = `tel:${trackingNumber}`)}
          className="p-2 text-sm text-white bg-teal-600 border-2 border-teal-600 rounded-lg md:p-4 xl:p-5 hover:bg-teal-500 active:bg-teal-400"
        >
          Call (New Patients)
        </button>
        <button
          onClick={() => (window.location.href = `tel:${officeNumber}`)}
          className="p-2 text-sm text-white bg-teal-700 border-2 border-teal-700 rounded-lg md:p-4 xl:p-5 hover:bg-teal-600 active:bg-teal-500"
        >
          Call (Returning Patients)
        </button>
        <Link
          href="/"
          className="p-2 text-sm bg-white border-2 border-gray-400 rounded-lg hover:bg-gray-200 dark:text-black active:bg-gray-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CallOptions;
