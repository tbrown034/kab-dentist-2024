"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Importing images from the doctor directory
import drAtReception from "../../../public/images/doctor/drAtReception.jpeg";
import drSitting from "../../../public/images/doctor/drSitting.jpeg";
import drStandingHallwayVertical from "../../../public/images/doctor/drStandingHallwayVertical.jpeg";
import drStandingVertical from "../../../public/images/doctor/drStandingVertical.jpeg";
import drWithPatient1 from "../../../public/images/doctor/drWithPatient1.jpeg";
import drWithPatient2 from "../../../public/images/doctor/drWithPatient2.jpeg";
import drWithPatientandComputer from "../../../public/images/doctor/drWithPatientandComputer.jpeg";

// Images object with a direction field
const drImages = [
  {
    src: drAtReception,
    alt: "Dr. Brown welcoming patients at the reception",
    direction: "horizontal",
  },
  {
    src: drSitting,
    alt: "Dr. Brown sitting in his office",
    direction: "horizontal",
  },
  {
    src: drStandingHallwayVertical,
    alt: "Dr. Brown in the hallway",
    direction: "vertical",
  },
  { src: drStandingVertical, alt: "Dr. Brown standing", direction: "vertical" },
  {
    src: drWithPatient1,
    alt: "Dr. Brown with a patient",
    direction: "horizontal",
  },
  {
    src: drWithPatient2,
    alt: "Dr. Brown discussing treatment options with a patient",
    direction: "horizontal",
  },
  {
    src: drWithPatientandComputer,
    alt: "Dr. Brown with a patient and computer",
    direction: "horizontal",
  },
];

const DoctorImgGroup = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      <div className="flex flex-col justify-center">
        <Carousel
          plugins={[Autoplay({ delay: 8000, stopOnInteraction: true })]}
          className="w-full"
        >
          <CarouselContent>
            {drImages
              .filter((image) => image.direction === "horizontal")
              .map((image, index) => (
                <CarouselItem key={index}>
                  <Image
                    className="rounded-xl"
                    src={image.src}
                    alt={image.alt}
                  />
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex flex-col justify-center gap-4">
        {drImages
          .filter((image) => image.direction === "vertical")
          .map((image, index) => (
            <Image
              key={index}
              src={image.src}
              className="rounded-xl"
              alt={image.alt}
            />
          ))}
      </div>
    </div>
  );
};

export default DoctorImgGroup;
