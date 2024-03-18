import CallUsAtDiallogue from "@/app/Dialogues/CallUsAtDialogue.jsx";
import { poppins, openSans } from "../../../lib/fonts.js";

const HeroText = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-4 md:gap-8 lg:gap-12">
      <h1
        className="text-4xl font-extrabold leading-tight text-gray-900"
        style={{ fontFamily: `${poppins.style.fontFamily}` }}
      >
        Naperville's Home for{" "}
        <span className="text-teal-500">Healthy Smiles</span>
      </h1>
      <p className="text-lg lg:text-xl">
        Decades of dedicated dental care have established{" "}
        <a className="underline cursor-pointer underline-offset-4 hover:text-teal-800 active:text-teal-700">
          Dr. Keith Brown, DDS FAGD
        </a>
        , as a pillar of the Chicagoland's dental community.
      </p>
      <p className="text-lg lg:text-xl">
        In need of immediate care or searching for a dental home? See us at{" "}
        <a className="underline cursor-pointer underline-offset-4 hover:text-teal-800 active:text-teal-700">
          Fifth Third Bank Building, 75th St. and Rickert Drive
        </a>{" "}
        — where every smile is a masterpiece.
      </p>
      <div className="flex flex-row items-center gap-4 ">
        <button
          className="px-8 py-3 text-lg font-medium text-white transition duration-200 ease-in-out bg-teal-500 rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 active:bg-teal-700"
          style={{ fontFamily: `${openSans.style.fontFamily}` }}
        >
          Book Now
        </button>
        <p className="text-lg">Or</p>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">
            Call Us At <br></br>
            <CallUsAtDiallogue />
          </p>
          <div className="flex items-center gap-4"> </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <i className="fa-solid fa-star-of-life"></i>{" "}
        <p>
          Now Offering{" "}
          <span className="text-teal-900 underline underline-offset-4 hover:cursor-pointer hover:text-teal-800 active:text-teal-700">
            24/7 Emergency Care
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeroText;
