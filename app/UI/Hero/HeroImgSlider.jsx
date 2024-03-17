"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import bank from "../../../public/images/bank.jpeg";
import door from "../../../public/images/door.jpeg";
import drSitting from "../../../public/images/drSitting.jpeg";
import frontOffice from "../../../public/images/frontOffice.jpeg";

// Images for Slider
const images = [
  { src: bank, alt: "Bank" },
  { src: door, alt: "Door" },
  { src: drSitting, alt: "Doctor Sitting" },
  { src: frontOffice, alt: "Front Office" },
];

const HeroImgSlider = () => {
  return (
    <div className=" aspect-w-4 aspect-h-3">
      <Carousel
        plugins={[
          Autoplay({
            delay: 8000,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                className="border-2 border-teal-800 rounded-2xl"
                src={image.src}
                alt={image.alt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroImgSlider;
