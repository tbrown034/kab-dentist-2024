"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import retainer from "../../../public/images/stock/retainer.jpg";
import teeth2 from "../../../public/images/stock/teeth2.jpg";
import toothbrushes from "../../../public/images/stock/toothbrushes.jpg";
import womanSmiling from "../../../public/images/stock/womanSmiling.jpg";

const financialImages = [
  { id: 1, src: retainer, alt: "A dental retainer" },
  { id: 2, src: teeth2, alt: "More teeth models showcasing dental issues" },
  { id: 3, src: toothbrushes, alt: "Assortment of toothbrushes" },
  { id: 4, src: womanSmiling, alt: "Woman smiling, showcasing dental work" },
];

const FinancialImgGroup = () => {
  return (
    <>
      <div className="md:hidden">
        <Carousel
          plugins={[Autoplay({ delay: 8000, stopOnInteraction: true })]}
        >
          <CarouselContent>
            {financialImages.map((image) => (
              <CarouselItem key={image.id}>
                <div className="w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="object-cover rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Grid layout for md screens and up */}
      <div className="hidden gap-4 md:grid md:grid-cols-2">
        {financialImages.map((image) => (
          <div
            key={image.id}
            className="w-full h-full overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FinancialImgGroup;
