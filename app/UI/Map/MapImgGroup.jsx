"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import bankExt from "../../../public/images/office/bankExt.jpeg";
import bankExtClose from "../../../public/images/office/bankExtClose.jpeg";
import officeViewWithBirds from "../../../public/images/office/offficeViewWithBirds.jpeg";

const officeImages = [
  { src: bankExt, alt: "Exterior of our office building" },
  { src: bankExtClose, alt: "Close-up view of our office building" },
  { src: officeViewWithBirds, alt: "Office view with birds in the sky" },
];
const MapImgGroup = () => {
  return (
    <div className="flex justify-center">
      <Carousel
        plugins={[Autoplay({ delay: 8000, stopOnInteraction: true })]}
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
  );
};
export default MapImgGroup;
