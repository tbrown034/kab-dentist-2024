"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import testimonialsEntries from "./testimonialEntries.js";
import { raleway } from "../../../app/font.js";
// Import section contents
import sectionContents from "../../../sectionContent.json";

const TestimonialSection = () => {
  // Destructure the testimonial section from the imported contents
  const { title, textBlock } = sectionContents.testimonialSection;

  return (
    <section className="flex flex-col gap-4">
      <h2
        className={`${raleway.className} text-2xl md:text-3xl font-extrabold tracking-tight`}
      >
        {/* Dynamically render the title and the first item of text block as highlighted text */}
        {title} <span className="text-teal-500">{textBlock[0].text}</span>
      </h2>

      <Carousel
        plugins={[
          Autoplay({
            delay: 8000,
            stopOnInteraction: true,
          }),
        ]}
        className="flex flex-col gap-4 p-2 px-4 m-4 text-white bg-teal-600 rounded-lg shadow"
      >
        <CarouselContent>
          {testimonialsEntries.map(({ id, quote, reviewer, city }) => (
            <CarouselItem key={id} className="flex ">
              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center my-2 text-2xl">
                  <i className="font-bold text-white fa-solid fa-quote-left"></i>
                </div>
                <blockquote className="text-xl font-medium text-center">
                  {quote}
                </blockquote>
                <div className="flex justify-center my-2 text-2xl">
                  <i className="font-bold text-white fa-solid fa-quote-right"></i>
                </div>
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
