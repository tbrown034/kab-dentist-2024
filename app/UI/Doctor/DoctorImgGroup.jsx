"use client";
import Image from "next/image";
import drPortrait from "../../../public/images/doctor/drPortrait.jpeg";
import drWithPatientClose from "../../../public/images/doctor/drWithPatientClose.jpeg";
import drWithPatientandComputer from "../../../public/images/doctor/drWithPatientandComputer.jpeg";

const DoctorImgGroup = () => {
  return (
    <div className="flex gap-2">
      <Image src={drPortrait} alt="Dr. Portrait" className="rounded-xl" />
      <div className="flex flex-col">
        <Image
          src={drWithPatientClose}
          alt="Dr. with Patient Close-up"
          className="rounded-xl"
        />
        <Image
          src={drWithPatientandComputer}
          alt="Dr. with Patient and Computer"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default DoctorImgGroup;
