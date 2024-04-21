import Link from "next/link";
import CallDialog from "@/app/DialogBoxes/CallDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const HeroCTA = () => {
  return (
    <div className="flex flex-col gap-8 text-lg lg:text-xl ">
      <div className="flex flex-row items-center gap-4 ">
        <Link
          scroll={true}
          href="#appointmentSection"
          className="p-3 text-white bg-teal-600 border-2 border-teal-600 rounded-xl md:p-4 xl:p-5 hover:bg-teal-500 active:bg-teal-400"
        >
          Book Appointment
        </Link>

        <div className="p-3 bg-white border-2 border-gray-300 rounded-xl md:p-4 xl:p-5 border-opacity-85 hover:bg-gray-200 active:bg-gray-300">
          <CallDialog buttonName="Call Us" />
        </div>
      </div>
      <Link
        className="flex items-center gap-2 text-teal-600 transition duration-200 ease-in-out hover:text-teal-500 active:text-teal-400 "
        href="#emergencyCareSection"
      >
        {" "}
        <FontAwesomeIcon icon={faExclamationCircle} size="lg" />
        <span className="text-base font-semibold underline md:text-xl lg:text-2xl ">
          Now Offering 24/7 Emergency Care
        </span>
      </Link>
    </div>
  );
};

export default HeroCTA;
