"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn-ui/carousel";
import retainer from "@/public/images/stock/retainer.jpg";
import teeth2 from "@/public/images/stock/teeth2.jpg";
import toothbrushes from "@/public/images/stock/toothbrushes.jpg";
import womanSmiling from "@/public/images/stock/womanSmiling.jpg";

const financialImages = [
  {
    id: 1,
    src: retainer,
    alt: "A close-up of a dental retainer being placed in the mouth, used in orthodontic treatment",
  },
  {
    id: 2,
    src: teeth2,
    alt: "A dental model showcasing different types of braces and orthodontic issues on a desk",
  },
  {
    id: 3,
    src: toothbrushes,
    alt: "An assortment of colorful toothbrushes with bamboo handles, promoting eco-friendly dental hygiene",
  },
  {
    id: 4,
    src: womanSmiling,
    alt: "A woman with curly hair smiling broadly, showcasing her perfect white teeth after dental treatment",
  },
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
