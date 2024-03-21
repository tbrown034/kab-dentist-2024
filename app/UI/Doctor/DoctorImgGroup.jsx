"use client";
import Image from "next/image";
import drPortrait from "../../../public/images/doctor/drPortrait.jpeg";

const DoctorImgGroup = () => {
  return (
    <div className="">
      <Image src={drPortrait} alt="text" className=" rounded-xl"></Image>
    </div>
  );
};

export default DoctorImgGroup;
