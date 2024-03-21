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

const images = [
  {
    id: 1,
    src: drWithPatient1, // Assuming src needs to be added
    alt: "Dr. Brown with a patient and computer",
  },
  {
    id: 2,
    src: bankExt, // Direct path works but importing optimizes
    alt: "Exterior view of Fifth Third Bank building housing the dental office",
  },
  {
    id: 3,
    src: doorWithoutStickers, // Direct path works but importing optimizes
    alt: "Entrance door to the dental office without stickers",
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
              className="border-4 border-teal-800 rounded-xl "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
export default HeroImgSlider;
