import Image from "next/image";

import Nitrous from "../../../public/images/office/officeEquipmentNitrous.jpeg";
import officeStuff from "../../../public/images/office/officeEquipmentPc1000.jpeg";

const DentalServicesImgGroup = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center rounded-xl">
        <Image src={Nitrous} alt="office ve" className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-4">
        <div className=" rounded-xl">
          <Image src={officeStuff} alt="dolls" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};
export default DentalServicesImgGroup;
