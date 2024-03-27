import React from "react";

const DoctorFAGD = () => {
  const quote =
    "If your dentist is a Fellow or Master of the Academy of General Dentistry (FAGD or MAGD), they are the best of the best in the field. You can rest assured that your dentist cares about knowing the latest techniques and best practices in dentistry.";
  const citation = "— Academy of General Dentistry";

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Not Your Average Dentist</h2>
      <p className="mb-4">
        Dr. Brown is among the select few who have earned the prestigious{" "}
        <span className="font-semibold">
          Fellow of the Academy of General Dentistry (FAGD)
        </span>{" "}
        designation. This achievement places him in the top echelon of dentists,
        committed to providing the highest level of care.
      </p>
      {/* Quote Section */}
      <div className="px-6 py-2 my-2 ">
        <blockquote className="italic ">"{quote}"</blockquote>
        <p className="mt-2 text-center">{citation}</p>
      </div>
      <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        <div className="flex flex-col items-center">
          <i className="mb-2 text-4xl fa-solid fa-award"></i>
          <span className="text-lg font-bold">6%</span>
          <span>OF U.S. DENTISTS BECOME A FELLOW</span>
        </div>
        <div className="flex flex-col items-center">
          <i className="mb-2 text-4xl fa-solid fa-hourglass-half"></i>
          <span className="text-lg font-bold">500 Hours</span>
          <span>REQUIRED OF CONTINUING EDUCATION</span>
        </div>
        <div className="flex flex-col items-center">
          <i className="mb-2 text-4xl fa-solid fa-school"></i>
          <span className="text-lg font-bold">350 Hours</span>
          <span>REQUIRED OF LIVE COURSES</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorFAGD;
