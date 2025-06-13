import Image from "next/image";
import drWithPatientAndComputer from "../../../public/images/doctor/dr-with-computer.jpeg";

const DoctorSingleImage = () => {
  return (
    <div className="">
      <Image
        src={drWithPatientAndComputer}
        alt="Dr. Keith A. Brown DDS, FAGD, with a patient and a computer displaying dental images in the background."
        className="object-cover w-full h-auto rounded-xl"
        priority
      />
    </div>
  );
};

export default DoctorSingleImage;
