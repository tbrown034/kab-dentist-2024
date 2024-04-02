"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import drWithPatientRelaxed from "../../../public/images/doctor/drWithPatientRelaxed.jpeg";
import bank1 from "../../../public/images/office/bank1.jpeg";
import doorWithoutStickers from "../../../public/images/office/doorWithoutStickers.jpeg";
import drAtReception1 from "../../../public/images/doctor/drAtReception1.jpeg";
import drFramesBackground from "../../../public/images/doctor/drFramesBackground.jpeg";

const images = [
  {
    id: 1,
    src: drWithPatientRelaxed,
    alt: "Dr. Brown with a patient and computer",
  },
  {
    id: 2,
    src: bank1,
    alt: "Exterior view of Fifth Third Bank building housing the dental office",
  },
  {
    id: 3,
    src: drFramesBackground,
    alt: "Exterior view of Fifth Third Bank building housing the dental office",
  },
  {
    id: 4,
    src: doorWithoutStickers,
    alt: "Entrance door to the dental office without stickers",
  },
  {
    id: 5,
    src: drAtReception1,
    alt: "Dr. Brown",
  },
];

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
            <Image
              src={image.src}
              alt={image.alt}
              placeholder="blur"
              priority={true}
              className=" rounded-xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroImgSlider;
