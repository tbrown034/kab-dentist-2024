"use client";
import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Static imports for your images
import bank from "../../public/images/bank.jpeg";
import door from "../../public/images/door.jpeg";
import drSitting from "../../public/images/drSitting.jpeg";
import frontOffice from "../../public/images/frontOffice.jpeg";

// Array of imported images
const images = [
  { src: bank, alt: "Bank" },
  { src: door, alt: "Door" },
  { src: drSitting, alt: "Doctor Sitting" },
  { src: frontOffice, alt: "Front Office" },
];

const Slider = () => {
  return (
    <div className="px-8 mx-2">
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
            <CarouselItem key={index} className="flex-shrink-0 w-full">
              <Image
                className="border-2 border-teal-800 rounded-2xl"
                src={image.src}
                alt={image.alt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Slider;
