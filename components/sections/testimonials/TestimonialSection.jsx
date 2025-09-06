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
    <section className="w-full">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12 max-w-7xl mx-auto">
        <h2 className="font-header text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {title} <span className="text-teal-600">{textBlock[0].text}</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <Carousel
          plugins={[
            Autoplay({
              delay: 8000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "center",
            loop: true,
          }}
          className="relative w-full"
        >
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600/95 via-teal-700/95 to-teal-800/95 backdrop-blur-sm shadow-2xl">
          <CarouselContent className="ml-0">
            {testimonialsEntries.map(({ id, quote, reviewer, city }) => (
              <CarouselItem key={id} className="pl-0">
                <div className="relative p-8 sm:p-12 lg:p-16 min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] flex items-center">
                  {/* Decorative quote marks */}
                  <div className="absolute top-4 left-4 text-6xl sm:text-7xl lg:text-8xl text-white/10 font-serif leading-none select-none" aria-hidden="true">
                    "
                  </div>
                  <div className="absolute bottom-20 right-4 text-6xl sm:text-7xl lg:text-8xl text-white/10 font-serif leading-none rotate-180 select-none" aria-hidden="true">
                    "
                  </div>
                  
                  <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 w-full max-w-4xl mx-auto relative z-10">
                    <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-center leading-relaxed text-white px-4 sm:px-8">
                      {quote}
                    </blockquote>
                    <figcaption className="flex items-center gap-2 text-base sm:text-lg lg:text-xl font-medium text-center text-teal-50">
                      <span className="block h-px w-8 bg-teal-200/50"></span>
                      {reviewer}
                      {city ? `, ${city}` : ""}
                      <span className="block h-px w-8 bg-teal-200/50"></span>
                    </figcaption>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Progress dots */}
          <div className="flex justify-center gap-2 pb-6">
            {testimonialsEntries.map((_, index) => (
              <button
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-white/30 transition-all duration-300 hover:bg-white/50 data-[current]:w-8 data-[current]:bg-white"
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
