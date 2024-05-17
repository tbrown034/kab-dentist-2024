import Link from "next/link";
import CallDialog from "@/app/DialogBoxes/CallDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faSpa,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const HeroCTA = () => {
  return (
    <div className="flex flex-col gap-4 text-lg lg:text-xl">
      <div className="flex flex-row items-center gap-4">
        <Link
          href="#appointmentSection"
          className="p-2 text-white bg-teal-600 border-2 border-teal-600 rounded-xl md:p-4 xl:p-5 hover:bg-teal-500 active:bg-teal-400"
        >
          Book Appointment
        </Link>
        <div className="p-2 bg-white border border-gray-600 rounded-xl md:p-4 xl:p-5 dark:text-gray-900 border-opacity-85 hover:bg-gray-200 active:bg-gray-300">
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
        <div className="text-sm md:text-base lg:text-lg">
          Life is unpredictable. We're reliable.
        </div>

        <Link
          className="flex items-center gap-2 underline transition duration-200 ease-in-out hover:text-yellow-600 active:text-yellow-700"
          href="/emergency"
        >
          <FontAwesomeIcon icon={faSpa} size="lg" />
          <span className="text-base font-bold md:text-xl lg:text-2xl">
            Relaxation with Nitrous Oxide
          </span>
        </Link>
        <div className="text-sm md:text-base lg:text-lg">
          Enjoy a comfortable and sedated experience with complimentary nitrous
          oxide (laughing gas).
        </div>

        <Link
          className="flex items-center gap-2 text-teal-500 underline transition duration-200 ease-in-out hover:text-yellow-600 active:text-yellow-700"
          href="tel:6303010589"
        >
          <FontAwesomeIcon icon={faPhone} size="lg" />
          <div className="text-base font-bold md:text-xl lg:text-2xl">
            Give Us a Ring at 630-301-0589
          </div>
        </Link>
        <span className="text-sm md:text-base lg:text-lg">
          We offer a wide range of dental services to meet all your needs. Our
          team is equipped to handle everything with expert care.
        </span>
      </div>
    </div>
  );
};

export default HeroCTA;
