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
    alt: "Dr. Keith A. Brown DDS, FAGD, talks with a satisfied patient after a dental visit.",
  },
  {
    id: 2,
    src: bank1,
    alt: "Exterior view of the Fifth Third Bank building at 1295 Rickert Drive, 3rd floor, Naperville, IL, housing Dr. Brown's dental office.",
  },
  {
    id: 3,
    src: drFramesBackground,
    alt: "Dr. Keith A. Brown DDS, FAGD, standing in front of framed certificates with the Fifth Third Bank building at 1295 Rickert Drive, 3rd floor, Naperville, IL, in the background.",
  },
  {
    id: 4,
    src: doorWithoutStickers,
    alt: "Dr. Keith A. Brown DDS, FAGD, standing with arms crossed in his office at 1295 Rickert Drive, 3rd floor, Naperville, IL, while a staff member is seated at a desk in the background.",
  },
  {
    id: 5,
    src: drAtReception1,
    alt: "Dr. Keith A. Brown DDS, FAGD, at the dental office reception desk in Naperville, IL.",
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
