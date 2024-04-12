import React from "react";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoctorFAGD = () => {
  const quote =
    "If your dentist is a (FAGD or MAGD), they are the best of the best in the field. You can rest assured that your dentist cares about knowing the latest techniques and best practices in dentistry";
  const citation = "— Academy of General Dentistry";

  return (
    <div className="flex flex-col gap-4 p-2 px-4 m-4 bg-white rounded-lg shadow ">
      <h2 className="text-xl font-semibold">Not Your Average Dentist</h2>
      <p className="text-teal-900 ">
        Dr. Brown is among the select few who have earned his{" "}
        <span className="font-semibold text-teal-600">
          Fellow of the Academy of General Dentistry (FAGD).
        </span>
      </p>
      <div className="">
        <div className="relative p-2 px-6 py-4 mx-4 my-2 border-l-4 border-teal-500 ">
          <FontAwesomeIcon
            className="my-2 "
            icon={faQuoteLeft}
          ></FontAwesomeIcon>
          <blockquote className="italic text-teal-800 rounded-lg ">
            {quote}
          </blockquote>
          <FontAwesomeIcon
            className="my-2 "
            icon={faQuoteRight}
          ></FontAwesomeIcon>
        </div>
      </div>
      <a
        href="https://www.agd.org/practice/tools/patient-resources/know-my-dentist/why-choose-an-fagd-or-magd-dentist#:~:text=If%20your%20dentist%20is%20a,2%20percent%20are%20AGD%20Masters"
        className="mt-2 text-sm italic font-semibold text-center text-teal-900 hover:text-teal-800 active:text-teal-700"
      >
        {citation}
      </a>
      <div className="grid grid-cols-1 gap-4 mt-2 text-center text-md md:grid-cols-3">
        <div className="flex flex-col items-center text-teal-600">
          <span className="text-lg font-bold">Only 6%</span>
          <span className="text-teal-900">
            OF U.S. DENTISTS BECOME A FELLOW
          </span>
        </div>
      </div>
    </div>
  );
};

export default DoctorFAGD;
