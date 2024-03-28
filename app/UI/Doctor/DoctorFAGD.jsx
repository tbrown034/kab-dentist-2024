import React from "react";

const DoctorFAGD = () => {
  const quote =
    "If your dentist is a (FAGD or MAGD), they are the best of the best in the field. You can rest assured that your dentist cares about knowing the latest techniques and best practices in dentistry";
  const citation = "— Academy of General Dentistry";

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg ">
      <h2 className="text-2xl font-semibold text-teal-900">
        Not Your Average Dentist
      </h2>
      <p className="mb-4 text-teal-900">
        Dr. Brown is among the select few who have earned his{" "}
        <span className="font-semibold text-teal-600">
          Fellow of the Academy of General Dentistry (FAGD).
        </span>
      </p>
      <div className="p-2 bg-white shadow rounded-xl">
        <div className="relative p-2 px-6 py-4 mx-4 my-2 border-l-4 border-teal-500 ">
          <i className="text-teal-600 left-2 fa-solid fa-quote-left"></i>
          <blockquote className="italic rounded-lg ">{quote}</blockquote>
          <i className="absolute bottom-0 -mb-3 text-teal-600 right-2 fa-solid fa-quote-right"></i>
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
          <i className="mb-2 text-4xl text-teal-900 fa-solid fa-award"></i>
          <span className="text-lg font-bold">6%</span>
          <span className="text-teal-900">
            OF U.S. DENTISTS BECOME A FELLOW
          </span>
        </div>
        <div className="flex flex-col items-center text-teal-600">
          <i className="mb-2 text-4xl text-teal-900 fa-solid fa-hourglass-half"></i>
          <span className="text-lg font-bold">500 Hours</span>
          <span className="text-teal-900">
            REQUIRED OF CONTINUING EDUCATION
          </span>
        </div>
        <div className="flex flex-col items-center text-teal-600">
          <i className="mb-2 text-4xl text-teal-900 fa-solid fa-school"></i>
          <span className="text-lg font-bold">350 Hours</span>
          <span className="text-teal-900">REQUIRED OF LIVE COURSES</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorFAGD;
