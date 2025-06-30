import Image from "next/image";
import photo from "../../../src/assets/images/doctor/dr-with-computer.jpeg";

const EmergencyImgGroup = () => {
  return (
    <div>
      <Image src={photo} className="rounded-xl" alt="photo"></Image>
    </div>
  );
};

export default EmergencyImgGroup;
