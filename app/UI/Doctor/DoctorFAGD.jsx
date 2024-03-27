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
        <span className="font-semibold text-teal-500">
          Fellow of the Academy of General Dentistry (FAGD)
        </span>
      </p>
      <div className="relative px-6 py-4 mx-4 my-2 border-l-4 border-teal-500 rounded ">
        <i className="absolute top-0 -mt-3 text-teal-500 left-2 fa-solid fa-quote-left"></i>
        <blockquote className="italic text-teal-900">{quote}</blockquote>
        <i className="absolute bottom-0 -mb-3 text-teal-500 right-2 fa-solid fa-quote-right"></i>
      </div>
      <p className="mt-2 text-sm text-center text-teal-900">{citation}</p>
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
