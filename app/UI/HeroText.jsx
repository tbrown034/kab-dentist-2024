import { poppins, openSans } from "../../lib/fonts.js";

const HeroText = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-8 p-8">
      <div>
        <h1
          className="text-5xl font-semibold "
          style={{ fontFamily: `${poppins.style.fontFamily}` }}
        >
          Let Us Brighten Your <span className="text-teal-600">Smile</span>
        </h1>
        <h3
          className="mt-4 text-xl md:text-xl lg:text-2xl"
          style={{ fontFamily: `${openSans.style.fontFamily}` }}
        >
          Keith A. Brown DDS has been serving the Chicagoland area 1962.
          <br></br>
          <br></br>
          Schedule a cleaning or appointment today with one of Naperville's most
          experienced and trusted dentist.
        </h3>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <button
          className="px-6 py-3 text-lg font-semibold text-white transition-colors duration-150 ease-in-out bg-teal-500 rounded-lg hover:bg-teal-600 active:bg-teal-700"
          style={{ fontFamily: `${openSans.style.fontFamily}` }}
        >
          Book Now
        </button>
        <p
          className="self-center text-lg"
          style={{ fontFamily: `${openSans.style.fontFamily}` }}
        >
          Or Call Us At <b className="font-bold text-teal-600">630-301-0891</b>
        </p>
      </div>
    </div>
  );
};

export default HeroText;
