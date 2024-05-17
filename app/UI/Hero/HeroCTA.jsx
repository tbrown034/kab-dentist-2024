import Link from "next/link";
import CallDialog from "@/app/DialogBoxes/CallDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faSpa } from "@fortawesome/free-solid-svg-icons";

const HeroCTA = () => {
  return (
    <div className="flex flex-col gap-4 text-lg lg:text-xl">
      <div className="flex flex-row items-center gap-4">
        <Link
          href="#appointmentSection"
          className="p-3 text-white bg-teal-600 border-2 border-teal-600 rounded-xl md:p-4 xl:p-5 hover:bg-teal-500 active:bg-teal-400"
        >
          Book Appointment
        </Link>
        <div className="p-3 bg-white border border-gray-600 rounded-xl md:p-4 xl:p-5 dark:text-gray-900 border-opacity-85 hover:bg-gray-200 active:bg-gray-300">
          <CallDialog buttonName="Call Us" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <Link
          className="flex items-center gap-2 text-teal-500 underline transition duration-200 ease-in-out hover:text-yellow-600 active:text-yellow-700"
          href="/emergency"
        >
          <FontAwesomeIcon icon={faExclamationCircle} size="lg" />
          <span className="text-base font-bold md:text-xl lg:text-2xl">
            Offering 24/7 Emergency Care
          </span>
        </Link>
        <span className="text-sm text-gray-600 md:text-base lg:text-lg">
          We are available around the clock for your urgent dental needs.
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          className="flex items-center gap-2 text-teal-500 underline transition duration-200 ease-in-out hover:text-yellow-600 active:text-yellow-700"
          href="/emergency"
        >
          <FontAwesomeIcon icon={faSpa} size="lg" />
          <span className="text-base font-bold md:text-xl lg:text-2xl">
            Relaxation with Nitrous Oxide
          </span>
        </Link>
        <span className="text-sm text-gray-600 md:text-base lg:text-lg">
          Enjoy a comfortable and sedated experience with complimentary nitrous
          oxide (laughing gas).
        </span>
      </div>
    </div>
  );
};

export default HeroCTA;
