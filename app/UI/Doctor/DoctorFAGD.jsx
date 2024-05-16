import React from "react";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DoctorFAGD = () => {
  const quote =
    "If your dentist is a (FAGD or MAGD), they are the best of the best in the field. You can rest assured that your dentist cares about knowing the latest techniques and best practices in dentistry.";
  const citation = "— Academy of General Dentistry";

  return (
    <div className="flex flex-col gap-4 p-4 m-2 ">
      <h2 className="text-2xl font-bold">Not Your Average Dentist</h2>
      <p className="">
        Dr. Brown is among the elite{" "}
        <span className="font-semibold underline">6%</span> of dentists in the
        U.S. to become a{" "}
        <span className="font-semibold underline">
          Fellow of the Academy of General Dentistry (FAGD).<br></br>
          <br></br>
        </span>
        This honor reflects his dedication to continuing education and
        excellence in dentistry.
      </p>
      <div className="flex flex-col items-center p-6 text-white bg-teal-800 rounded-lg shadow-inner ">
        <FontAwesomeIcon
          className="text-teal-100 "
          icon={faQuoteLeft}
          size="2x"
        />
        <blockquote className="text-lg italic text-center">{quote}</blockquote>
        <FontAwesomeIcon
          className="text-teal-100 "
          icon={faQuoteRight}
          size="2x"
        />
        <a
          href="https://www.agd.org/practice/tools/patient-resources/know-my-dentist/why-choose-an-fagd-or-magd-dentist#:~:text=If%20your%20dentist%20is%20a,2%20percent%20are%20AGD%20Masters"
          className="mt-4 font-semibold text-center "
        >
          {citation}
        </a>
      </div>
    </div>
  );
};

export default DoctorFAGD;
