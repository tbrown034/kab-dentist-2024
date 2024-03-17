import Image from "next/image";
import buildingImg from "../../../public/images/bank.jpeg";
import MyGoogleMap from "./MyGoogleMap";

const MapSection = () => {
  return (
    <section className="">
      {" "}
      {/* Added background color for consistency */}
      <div className="max-w-6xl px-4 mx-auto lg:px-8">
        <div>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-center text-gray-900">
            Visit Our Office
          </h2>
          <p className="mb-8 text-center text-gray-500 sm:text-xl">
            Discover where we bring smiles to life. Experience personalized
            dental care with a visit to our office.
          </p>
        </div>
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex justify-center">
            <Image
              src={buildingImg}
              alt="Our Office Building"
              className="rounded-xl"
              layout="responsive"
            />
          </div>
          <div className=" rounded-2xl h-96">
            <MyGoogleMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
