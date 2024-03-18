import Image from "next/image";
import doctorImg from "../../../public/images/horizontal/dr.jpeg";
import family1 from "../../../public/images/family1.JPG";
import drSitting3 from "../../../public/images/drSitting.jpeg";
const DoctImgGroup = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8 ">
      <div className="flex flex-col justify-center">
        <Image
          src={doctorImg}
          className="rounded-xl"
          alt="Doctor Keith A. Brown"
        />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <Image src={family1} className="rounded-xl" alt="Dr. Brown's Family" />
        <Image
          src={drSitting3}
          className="rounded-xl"
          alt="Dr. Brown Relaxing"
        />
      </div>
    </div>
  );
};

export default DoctImgGroup;
