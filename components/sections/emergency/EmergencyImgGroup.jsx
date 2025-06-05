import React from "react";
import Image from "next/image";
import photo from "@/public/images/doctor/drWithPatientandComputer.jpeg";

const EmergencyImgGroup = () => {
  return (
    <div>
      <Image src={photo} className="rounded-xl" alt="photo"></Image>
    </div>
  );
};

export default EmergencyImgGroup;
