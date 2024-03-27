import Image from "next/image";
import drPortraitVertical from "../../../public/images/doctor/drPortraitVertical.jpeg";
import drWithPatientClose from "../../../public/images/doctor/drWithPatientClose.jpeg";
import officeChairWithDoll from "../../../public/images/office/officeChairWithDoll.jpeg";

const DentalServicesImgGroup = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center rounded-xl">
        <Image
          src={drPortraitVertical}
          alt="Portrait of Keith Brown"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="">
          <Image
            src={drWithPatientClose}
            alt="Dr. with Patient Close-up"
            className="rounded-xl"
          />
        </div>
        <div className=" rounded-xl">
          <Image src={officeChairWithDoll} alt="dolls" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};
export default DentalServicesImgGroup;
