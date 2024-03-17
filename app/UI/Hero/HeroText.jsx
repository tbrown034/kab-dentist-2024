import { poppins, openSans } from "../../../lib/fonts.js";

const HeroText = () => {
  return (
    <div className="flex flex-col items-start justify-center space-y-6">
      <div>
        <h1
          className="text-5xl font-bold leading-tight text-gray-900"
          style={{ fontFamily: `${poppins.style.fontFamily}` }}
        >
          Naperville's Home for{" "}
          <span className="text-teal-500">Healthy Smiles</span>
        </h1>
        <div
          className="flex flex-col gap-2 mt-4 text-lg leading-relaxed"
          style={{ fontFamily: `${openSans.style.fontFamily}` }}
        >
          <p>
            Six decades of dedicated dental care have established{" "}
            <a className="underline cursor-pointer underline-offset-4 hover:text-teal-800 active:text-teal-700">
              Dr. Keith Brown, D.D.S.
            </a>
            , as a pillar of the Chicagoland's dental community.
          </p>
          <p>
            In need of immediate care or searching for a dental home? Step into
            a a anxiety-free experience at the{" "}
            <a className="underline cursor-pointer underline-offset-4 hover:text-teal-800 active:text-teal-700">
              Fifth Third Bank Building, 75th St. and Rickert Drive
            </a>{" "}
            — where every smile is a masterpiece.
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
        <p className="text-lg">Or</p>
        <div className="flex flex-col gap-2">
          <p
            className="text-lg font-medium text-gray-800"
            style={{ fontFamily: `${openSans.style.fontFamily}` }}
          >
            Call Us At <br></br>
            <b className="font-bold text-teal-500 underline hover:text-teal-600 active:text-teal-700 underline-offset-4 hover:cursor-pointer">
              630-301-0891
            </b>
          </p>
          <div className="flex items-center gap-4"> </div>
        </div>
      </div>
      <p>
        Now Offering{" "}
        <span className="text-teal-900 underline underline-offset-4 hover:cursor-pointer hover:text-teal-800 active:text-teal-700">
          24/7 Emergency Care
        </span>
      </p>
    </div>
  );
};

export default HeroText;
