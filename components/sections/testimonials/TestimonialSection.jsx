// components/sections/testimonials/TestimonialSection.jsx
// Client Component
"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/shadcn-ui/carousel";
import testimonialsEntries from "./testimonialEntries.js";
import sectionContents from "@/lib/content/sectionContent.json";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialSection = () => {
  const { title, textBlock } = sectionContents.testimonialSection;
  return (
    <section className="flex flex-col gap-4">
      <h2
        className={`font-header text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
        {title} <span className="text-teal-500">{textBlock[0].text}</span>
      </h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 8000,
            stopOnInteraction: true,
          }),
        ]}
        className="flex flex-col gap-4 p-2 px-4 mx-4 text-white bg-teal-800 rounded-lg shadow"
      >
        <CarouselContent>
          {testimonialsEntries.map(({ id, quote, reviewer, city }) => (
            <CarouselItem key={id} className="flex ">
              <div className="flex flex-col items-center justify-center">
                <FontAwesomeIcon
                  className="my-2 text-teal-100"
                  icon={faQuoteLeft}
                  size="2x"
                ></FontAwesomeIcon>
                <blockquote className="text-xl font-medium text-center">
                  {quote}
                </blockquote>
                <FontAwesomeIcon
                  className="my-2 text-teal-100"
                  icon={faQuoteRight}
                  size="2x"
                ></FontAwesomeIcon>
                <figcaption className="mt-4 font-semibold text-center">
                  - {reviewer}
                  {city ? `, ${city}` : ""}
                </figcaption>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default TestimonialSection;
