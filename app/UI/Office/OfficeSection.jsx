"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Import office feature images
import officeChairWithDoll from "../../../public/images/office/officeChairwithDoll.jpeg";
import officeEquipment from "../../../public/images/office/officeEquipment.jpeg";
import officeEquipment2 from "../../../public/images/office/officeEquipment2.jpeg";
import officeEquipmentNitrous from "../../../public/images/office/officeEquipmentNitrous.jpeg";
import officeEquipmentPc1000 from "../../../public/images/office/officeEquipmentPc1000.jpeg";
import officeEquipmentXray from "../../../public/images/office/officeEquipmentXray.jpeg";
import officeView from "../../../public/images/office/officeView.jpeg";
import officeViewWithComputer from "../../../public/images/office/officeViewWithComputer.jpeg";

// Updated array with all office images for the carousel
const officeImages = [
  { src: officeChairWithDoll, alt: "Office chair with doll" },
  { src: officeEquipment, alt: "Office equipment" },
  { src: officeEquipment2, alt: "More office equipment" },
  { src: officeEquipmentNitrous, alt: "Nitrous oxide equipment" },
  { src: officeEquipmentPc1000, alt: "PC1000 office equipment" },
  { src: officeEquipmentXray, alt: "X-ray equipment" },
  { src: officeView, alt: "View of the office" },
  { src: officeViewWithComputer, alt: "Office view with computer" },
];

const OfficeSection = () => {
  return (
    <section className="flex flex-col gap-4 md:flex-row">
      <div className="flex flex-col w-full gap-2 md:w-1/2">
        <h2 className="text-3xl font-bold">Discover Our Office</h2>
        <ul className="pl-4 list-disc">
          <li>Free nitrous oxide, even for simple cleanings</li>
          <li>Calming views for a relaxing experience</li>
          <li>Memory foam pillows for extra comfort</li>
          <li>State-of-the-art X-ray, imaging, and feedback technology</li>
        </ul>
      </div>
      <div className="w-full md:w-1/2">
        <Carousel
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
          className="w-full"
        >
          <CarouselContent>
            {officeImages.map((image, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="border-4 border-teal-800 rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default OfficeSection;
