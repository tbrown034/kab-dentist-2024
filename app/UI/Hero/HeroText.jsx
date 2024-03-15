import { poppins, openSans } from "../../../lib/fonts.js";

const HeroText = () => {
  return (
    <div className="flex flex-col items-start justify-center space-y-6">
      <div>
        <h1
          className="text-5xl font-bold text-gray-900"
          style={{ fontFamily: `${poppins.style.fontFamily}` }}
        >
          Let Us Brighten Your <span className="text-teal-500">Smile!</span>
        </h1>
        <div
          className="flex flex-col gap-2 mt-4 text-lg leading-relaxed "
          style={{ fontFamily: `${openSans.style.fontFamily}` }}
        >
          <p>
            Dr. Keith Brown, DDS, has been a cornerstone of dental excellence in
            the Chicagoland area since 1962.
          </p>
          <p>
            Experience the best in dental care from one of Naperville's most
            esteemed and trusted dentists.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <button
          className="px-8 py-3 text-lg font-medium text-white transition duration-200 ease-in-out bg-teal-500 rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700"
          style={{ fontFamily: `${openSans.style.fontFamily}` }}
        >
          Book Now
        </button>
        <p
          className="text-lg font-medium text-gray-800 "
          style={{ fontFamily: `${openSans.style.fontFamily}` }}
        >
          Or Call Us At <b className="font-bold text-teal-500">630-301-0891</b>
        </p>
      </div>
    </div>
  );
};

export default HeroText;
