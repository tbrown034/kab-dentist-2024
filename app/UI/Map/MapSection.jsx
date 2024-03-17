import Image from "next/image";
import buildingImg from "../../../public/images/bank.jpeg";
import MyGoogleMap from "./MyGoogleMap";

const MapSection = () => {
  return (
    <section>
      <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900">
        Discover <span className="text-teal-500"> Comfort & Care</span> at Our
        Naperville Dental Home
      </h2>
      <p className="mb-8 text-center text-gray-500 sm:text-xl">
        For over 30 years, we've dedicated ourselves to bringing smiles to life
        right here in Naperville. Enjoy the panoramic views and exceptional
        dental care on the third floor of the Fifth Third Bank building at 75th
        and Rickert.
      </p>
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          <Image
            src={buildingImg}
            alt="Our Office Building"
            className="rounded-xl"
            layout="responsive"
          />
        </div>
        <div className="overflow-hidden rounded-2xl h-96">
          {" "}
          {/* Ensured rounded corners for the map container */}
          <MyGoogleMap />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
