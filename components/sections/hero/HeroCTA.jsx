import Link from "next/link";
import { CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { officeNumber } from "@/lib/constants/constants";

const HeroCTA = () => {
  return (
    <section className="flex flex-col gap-4  sm:flex-row sm:items-start sm:gap-4 xl:flex-wrap xl:items-center xl:gap-6">
      {/* Book Appointment */}
      <Link
        href="/appointment"
        className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 bg-teal-600 rounded-lg lg:px-8 lg:py-4 hover:bg-teal-700 lg:text-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
        aria-label="Book a dental appointment"
      >
        <CalendarDaysIcon className="w-5 h-5" />
        Book Appointment
      </Link>

      {/* Call Us */}
      <Link
        href={`tel:${officeNumber}`}
        className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-gray-900 transition-colors duration-200 bg-white border border-gray-300 rounded-lg lg:px-8 lg:py-4 hover:bg-gray-50 lg:text-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
        aria-label="Call our dental office"
        data-track="phone-click"
      >
        <PhoneIcon className="w-5 h-5 text-teal-600" />
        Call {officeNumber}
      </Link>
    </section>
  );
};

export default HeroCTA;
