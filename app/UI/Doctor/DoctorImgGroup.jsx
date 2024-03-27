import Image from "next/image";
import drPortraitVertical from "../../../public/images/doctor/drPortraitVertical.jpeg";
import drWithPatientClose from "../../../public/images/doctor/drWithPatientClose.jpeg";
import drWithPatientandComputer from "../../../public/images/doctor/drWithPatientandComputer.jpeg";

const DoctorImgGroup = () => {
  return (
    // This div sets up a two-column grid layout.
    <div className="grid grid-cols-2 gap-4">
      {/* First column for the first image */}
      <div className="flex items-center rounded-xl">
        <Image
          src={drPortraitVertical}
          alt="Portrait of Keith Brown"
          className="rounded-xl"
        />
      </div>

      {/* Second column for the next two images, stacked vertically */}
      <div className="flex flex-col gap-4">
        <div className="">
          <Image
            src={drWithPatientClose}
            alt="Dr. with Patient Close-up"
            className="rounded-xl"
          />
        </div>
        <div className=" rounded-xl">
          <Image
            src={drWithPatientandComputer}
            alt="Dr. with Patient and Computer"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorImgGroup;
