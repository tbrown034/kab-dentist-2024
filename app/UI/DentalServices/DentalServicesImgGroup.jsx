import Image from "next/image";

import officeChairWithDoll from "../../../public/images/office/officeChairWithDoll.jpeg";
import Nitrous from "../../../public/images/office/officeEquipmentNitrous.jpeg";
import verticalOffice from "../../../public/images/office/officeChairWithViewVertical.jpeg";

const DentalServicesImgGroup = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center rounded-xl">
        <Image src={verticalOffice} alt="office ve" className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="">
          <Image src={Nitrous} alt="nitrous" className="rounded-xl" />
        </div>
        <div className=" rounded-xl">
          <Image src={officeChairWithDoll} alt="dolls" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};
export default DentalServicesImgGroup;
