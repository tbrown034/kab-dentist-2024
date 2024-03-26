import Image from "next/image";

import womanSmiling from "../../../public/images/stock/womanSmiling.jpg";

const DentalServicesImgGroup = () => {
  return (
    <div className="flex gap-2">
      <Image src={womanSmiling} alt="Dr. Portrait" className="rounded-xl" />
    </div>
  );
};

export default DentalServicesImgGroup;
