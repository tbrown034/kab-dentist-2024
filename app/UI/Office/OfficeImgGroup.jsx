"use client";
import Image from "next/image";

// Importing office feature images with added entries
import officeChairWithDoll from "../../../public/images/office/officeChairwithDoll.jpeg";
import officeEquipment from "../../../public/images/office/officeEquipment.jpeg";
import officeEquipment2 from "../../../public/images/office/officeEquipment2.jpeg";
import officeEquipmentNitrous from "../../../public/images/office/officeEquipmentNitrous.jpeg";
import officeEquipmentPc1000 from "../../../public/images/office/officeEquipmentPc1000.jpeg";
import officeEquipmentXray from "../../../public/images/office/officeEquipmentXray.jpeg";
import officeView from "../../../public/images/office/officeView.jpeg";
import officeViewWithComputer from "../../../public/images/office/officeViewWithComputer.jpeg";

const officeImages = [
  {
    src: officeChairWithDoll,
    alt: "Office chair with a doll for children's comfort",
    direction: "horizontal",
  },
  {
    src: officeEquipment,
    alt: "Advanced dental office equipment",
    direction: "horizontal",
  },
  {
    src: officeEquipment2,
    alt: "More cutting-edge dental technology",
    direction: "horizontal",
  },
  {
    src: officeEquipmentNitrous,
    alt: "Nitrous oxide for patient comfort",
    direction: "horizontal",
  },
  {
    src: officeEquipmentPc1000,
    alt: "State-of-the-art PC1000 equipment",
    direction: "horizontal",
  },
  {
    src: officeEquipmentXray,
    alt: "Modern X-ray technology",
    direction: "horizontal",
  },
  {
    src: officeView,
    alt: "Serene view from the office",
    direction: "horizontal",
  },
  {
    src: officeViewWithComputer,
    alt: "Office workspace with advanced computer equipment",
    direction: "horizontal",
  },
];

const OfficeImgGroup = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      {officeImages.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          className="rounded-lg"
        />
      ))}
    </div>
  );
};

export default OfficeImgGroup;
