"use client";

import Image from "next/image";
import retainer from "../../../public/images/stock/retainer.jpg";
import teeth from "../../../public/images/stock/teeth.jpg";
import teeth2 from "../../../public/images/stock/teeth2.jpg";
import toothbrushes from "../../../public/images/stock/toothbrushes.jpg";
import womanSmiling from "../../../public/images/stock/retainer.jpg"; // Note: This is the same as `retainer`. Update if this was a mistake.
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const financialImages = [
  {
    src: retainer,
    alt: "A dental retainer",
  },
  {
    src: teeth,
    alt: "Display of various teeth models",
  },
  {
    src: teeth2,
    alt: "More teeth models showcasing dental issues",
  },
  {
    src: toothbrushes,
    alt: "Assortment of toothbrushes",
  },
  {
    src: womanSmiling,
    alt: "Woman smiling, showcasing dental work", // Double-check if this should indeed be the retainer image.
  },
];

const FinancialImgGroup = () => {
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
        {financialImages.map((image, index) => (
          <CarouselItem key={index}>
            <Image src={image.src} alt={image.alt} className="rounded-xl" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default FinancialImgGroup;
