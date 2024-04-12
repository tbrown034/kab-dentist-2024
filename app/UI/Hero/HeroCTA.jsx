import Link from "next/link";
import CallDialog from "@/app/DialogBoxes/CallDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const HeroCTA = () => {
  return (
    <div className="flex flex-col gap-4 text-lg ">
      <div className="flex flex-row items-center gap-2 ">
        <Link
          href="#apptSection"
          className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 active:bg-teal-400"
        >
          Book Appointment
        </Link>

        <div className="p-2 bg-white border-2 border-gray-300 rounded-lg text border-opacity-85 hover:bg-gray-200 active:bg-gray-300">
          <CallDialog buttonName="Call Us" />
        </div>
      </div>
      <Link
        className="flex items-center gap-2 text-teal-600 transition duration-200 ease-in-out hover:text-teal-500 active:text-teal-400 "
        href="#emergencyCareSection"
      >
        {" "}
        <FontAwesomeIcon icon={faExclamationCircle} size="lg" />
        <span className="text-base font-semibold underline ">
          Now Offering 24/7 Emergency Care
        </span>
      </Link>
    </div>
  );
};

export default HeroCTA;
