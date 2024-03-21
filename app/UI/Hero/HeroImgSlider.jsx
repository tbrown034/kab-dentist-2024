"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Import images by giving each a unique name
import drAtReception from "../../../public/images/doctor/drAtReception.jpeg";
import drSitting from "../../../public/images/doctor/drSitting.jpeg";
import drWithPatient1 from "../../../public/images/doctor/drWithPatient1.jpeg";
import drWithPatient2 from "../../../public/images/doctor/drWithPatient2.jpeg";
import bankExt from "../../../public/images/office/bankExt.jpeg";
import doorWithoutStickers from "../../../public/images/office/doorWithoutStickers.jpeg";

// Update the images array with imported images
const images = [
  {
    id: 1,
    src: drAtReception,
    alt: "Dr. Brown welcoming patients at the reception",
  },
  {
    id: 2,
    src: drSitting, // Assuming you want to add src for this and the following
    alt: "Dr. Brown sitting in his office",
  },
  {
    id: 3,
    src: drWithPatient1, // Assuming src needs to be added
    alt: "Dr. Brown with a patient and computer",
  },
  {
    id: 4,
    src: drWithPatient2, // Assuming src needs to be added
    alt: "Dr. Brown consulting with a patient",
  },
  {
    id: 5,
    src: bankExt, // Direct path works but importing optimizes
    alt: "Exterior view of Fifth Third Bank building housing the dental office",
  },
  {
    id: 6,
    src: doorWithoutStickers, // Direct path works but importing optimizes
    alt: "Entrance door to the dental office without stickers",
  },
];

const HeroImgSlider = () => {
  return (
    <div className="aspect-w-4 aspect-h-3">
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
          {images.map((image) => (
            <CarouselItem key={image.id}>
              {/* Note: Next.js Image component might require explicit width and height or layout="fill" for proper rendering. */}
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

export default HeroImgSlider;
