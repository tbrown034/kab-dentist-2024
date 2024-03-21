"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
// Importing images from the doctor directory
import drSitting from "../../../public/images/doctor/drSitting.jpeg";
import drStandingHallwayVertical from "../../../public/images/doctor/drStandingHallwayVertical.jpeg";
import drStandingVertical from "../../../public/images/doctor/drStandingVertical.jpeg";
import drWithPatient1 from "../../../public/images/doctor/drWithPatient1.jpeg";
import drWithPatient2 from "../../../public/images/doctor/drWithPatient2.jpeg";
import drWithPatientandComputer from "../../../public/images/doctor/drWithPatientandComputer.jpeg";

// Importing images and their details
const drImages = [
  {
    id: 2,
    src: drSitting,
    alt: "Dr. Brown sitting in his office",
    direction: "horizontal",
  },
  {
    id: 3,
    src: drStandingHallwayVertical,
    alt: "Dr. Brown in the hallway",
    direction: "vertical",
  },
  {
    id: 4,
    src: drStandingVertical,
    alt: "Dr. Brown standing",
    direction: "vertical",
  },

  {
    id: 7,
    src: drWithPatientandComputer,
    alt: "Dr. Brown working with a patient and computer",
    direction: "horizontal",
  },
];

const DoctorImgGroup = () => {
  // Filtering horizontal images and randomly selecting two
  const randomHorizontalImages = drImages
    .filter((image) => image.direction === "horizontal")
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <div className="flex flex-wrap -mx-4">
      <div className="w-full px-4 md:w-1/2">
        {/* Carousel for vertical images */}
        <Carousel
          plugins={[Autoplay({ delay: 12000, stopOnInteraction: true })]}
        >
          <CarouselContent>
            {drImages
              .filter((image) => image.direction === "vertical")
              .map((image) => (
                <CarouselItem key={image.id}>
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
      <div className="flex flex-col justify-center w-full gap-2 px-4 ite md:w-1/2">
        {/* Displaying two randomly chosen horizontal images */}
        {randomHorizontalImages.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="border-4 border-teal-800 rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorImgGroup;
