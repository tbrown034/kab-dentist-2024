"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MyGoogleMap from "./MyGoogleMap";

// Import the office images
import bankExt from "../../../public/images/office/bankExt.jpeg";
import bankExtClose from "../../../public/images/office/bankExtClose.jpeg";
import officeViewWithBirds from "../../../public/images/office/offficeViewWithBirds.jpeg";

// Array of office images for the carousel
const officeImages = [
  { src: bankExt, alt: "Exterior of our office building" },
  { src: bankExtClose, alt: "Close-up view of our office building" },
  { src: officeViewWithBirds, alt: "Office view with birds in the sky" },
];

const MapSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
        Discover <span className="text-teal-500">Comfort & Care</span> at Our
        Naperville Dental Home
      </h2>
      <p className="text-lg">
        For over 30 years, we have dedicated ourselves to bringing smiles to
        life right here in Naperville. Enjoy the panoramic views and exceptional
        dental care on the third floor of the Fifth Third Bank building at 75th
        and Rickert.
      </p>
      <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          {/* Carousel for office images */}
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
                    className="rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="overflow-hidden rounded-2xl h-96">
          <MyGoogleMap />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
