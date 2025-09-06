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

const TestimonialSection = () => {
  const { title, textBlock } = sectionContents.testimonialSection;
  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-4">
        <h2 className="font-header text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {title} <span className="text-teal-600">{textBlock[0].text}</span>
        </h2>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 10000,
            stopOnInteraction: true,
          }),
        ]}
        opts={{
          align: "center",
          loop: true,
          duration: 40,
        }}
        className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-teal-700 to-teal-800 shadow-xl text-white"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonialsEntries.map(({ id, quote, reviewer, city }) => (
            <CarouselItem key={id} className="pl-2 md:pl-4">
              <div className="p-6 sm:p-8 lg:p-12 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center">
                <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 w-full max-w-3xl mx-auto">
                  <blockquote className="text-lg sm:text-xl lg:text-2xl font-light text-center leading-relaxed px-4 italic">
                    "{quote}"
                  </blockquote>
                  <figcaption className="text-base sm:text-lg lg:text-xl font-semibold text-center text-teal-100">
                    — {reviewer}
                    {city ? `, ${city}` : ""}
                  </figcaption>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default TestimonialSection;
