import Image from "next/image";

import nitrous from "../../../public/images/office/officeEquipmentNitrous.jpeg";
import officeStuff from "../../../public/images/office/officeEquipmentPc1000.jpeg";
import verticalChair from "../../../public/images/office/verticalChair.jpeg";

const DentalServicesImgGroup = () => {
  return (
    <div className="flex justify-center md:justify-start md:gap-4">
      {/* The verticalChair image is always visible but centered on small screens and aligned as per flex start on large screens */}
      <div className="flex justify-center md:flex-1 md:justify-center md:items-center">
        <Image
          src={verticalChair}
          alt="Office chair"
          className="w-full h-auto rounded-xl lg:max-w-1/2"
        />
      </div>

      {/* This div and its children (officeStuff and nitrous images) are hidden on small screens and only displayed on large screens and up */}
      <div className="hidden md:flex md:flex-1 md:flex-col md:gap-2">
        <div className="flex-1">
          <Image
            src={officeStuff}
            alt="Office equipment"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="flex-1">
          <Image
            src={nitrous}
            alt="Nitrous oxide system"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DentalServicesImgGroup;
