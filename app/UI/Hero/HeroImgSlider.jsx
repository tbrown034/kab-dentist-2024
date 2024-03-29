"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import drWithPatient1 from "../../../public/images/doctor/drWithPatient1.jpeg";
import bankExt from "../../../public/images/office/bankExt.jpeg";
import doorWithoutStickers from "../../../public/images/office/doorWithoutStickers.jpeg";
import drAtReception from "../../../public/images/doctor/drAtReception.jpeg";

const images = [
  {
    id: 1,
    src: drWithPatient1,
    alt: "Dr. Brown with a patient and computer",
  },
  {
    id: 2,
    src: bankExt,
    alt: "Exterior view of Fifth Third Bank building housing the dental office",
  },
  {
    id: 3,
    src: doorWithoutStickers,
    alt: "Entrance door to the dental office without stickers",
  },
  {
    id: 4,
    src: drAtReception,
    alt: "Dr. Brown",
  },
];

const imageDimensions = {
  width: 500, // Set your desired width here
  height: 300, // Set your desired height here
};

const HeroImgSlider = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 8000,
          stopOnInteraction: true,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <div className="w-full h-full rounded-xl">
              <Image
                src={image.src}
                alt={image.alt}
                className="object-cover rounded-xl"
                width={imageDimensions.width}
                height={imageDimensions.height}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroImgSlider;
