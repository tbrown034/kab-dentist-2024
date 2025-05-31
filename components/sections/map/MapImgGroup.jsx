"use client";
import Image from "next/image";
import bankExt2 from "../../../public/images/office/bankExt2.jpeg";
import bankExtClose from "../../../public/images/office/bankExtClose.jpeg";
import officeViewWithBirds from "../../../public/images/office/offficeViewWithBirds.jpeg";
import officeWaitingRoom from "../../../public/images/office/officeWaitingRoom.jpeg";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const images = [
  {
    id: 1,
    src: bankExt2,
    alt: "Extended exterior view of the Fifth Third Bank building at 1295 Rickert Drive, Naperville, IL, housing Dr. Brown's dental office.",
  },
  {
    id: 2,
    src: bankExtClose,
    alt: "Close-up view of the Fifth Third Bank building at 1295 Rickert Drive, Naperville, IL, showing the entrance to Dr. Brown's dental office.",
  },
  {
    id: 3,
    src: officeViewWithBirds,
    alt: "View from Dr. Brown's dental office window with bird decorations hanging in the foreground and the Fifth Third Bank building at 1295 Rickert Drive, Naperville, IL, visible outside.",
  },
  {
    id: 4,
    src: officeWaitingRoom,
    alt: "View of the waiting room in Dr. Brown's dental office at 1295 Rickert Drive, Naperville, IL.",
  },
];

const MapImgGroup = () => {
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
              width={800}
              height={600}
              src={image.src}
              alt={image.alt}
              className="rounded-xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
export default MapImgGroup;
