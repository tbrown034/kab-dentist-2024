"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import testimonialsEntries from "./Testimonials/testimonialEntries";
const TestimonialSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
        Do Not Just Take Our Word For It. Hear Directly{" "}
        <span className="text-teal-500">From Our Patients ...</span>
      </h2>
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
          {testimonialsEntries.map(({ id, quote, reviewer, city }) => (
            <CarouselItem key={id} className="flex justify-center">
              <div className="flex flex-col p-4 px-8 text-white bg-teal-800 rounded-lg opacity-95 justify-center items-center min-h-[100px]">
                {" "}
                {/* Adjusted for dynamic content sizing */}
                <div className="flex justify-center my-2 text-2xl">
                  <i className="text-teal-500 fa-solid fa-quote-left"></i>
                </div>
                <blockquote className="text-xl font-medium text-center">
                  {quote}
                </blockquote>{" "}
                {/* Ensured text is centered */}
                <div className="flex justify-center my-2 text-2xl">
                  <i className="text-teal-500 fa-solid fa-quote-right"></i>
                </div>
                <figcaption className="mt-4 text-lg font-semibold text-center">
                  {" "}
                  {/* Ensured text is centered */}
                  {reviewer}
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
