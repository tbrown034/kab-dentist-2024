// Assuming you've installed shadcn-ui as per the documentation
"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Fragment } from "react";

const testimonialsEntries = [
  {
    id: 0,
    quote:
      "Dr. Brown made me a total new set of dentures that attaches to mini implants. Now, I can eat sandwiches, grilled meats, BBQ ribs, steaks, and all kinds of hard foods. If you are having problems with your dentures, I would recommend Dr. Brown to anyone.",
    highlight: "recommend Dr. Brown",
    reviewer: "Mattie P W.",
    city: "Bolingbrook, IL",
  },
  {
    id: 1,
    quote:
      "I initially came here with a dental crisis and needed an emergency appointment. It's out of network for me but they did everything they could with the insurance and I've gotten excellent care. Instead of losing some teeth I have teeth that look really good.",
    highlight: "excellent care",
    reviewer: "Mike C.",
    city: "Naperville, IL",
  },
  {
    id: 2,
    quote:
      "I had a wonderful experience at the dentist from the initial phone call to the scheduling of my appointment to the final tooth extraction. Dr. Brown and the entire office staff provided me with the best care and treatment.",
    highlight: "wonderful experience",
    reviewer: "Daniel Johnson",
    city: "Naperville",
  },
];
const Highlight = ({ children }) => {
  return (
    <span className="p-1 font-bold text-white bg-teal-600 rounded-lg opacity-90">
      {children}
    </span>
  );
};

const insertHighlight = (text, highlight) => {
  const parts = text.split(highlight);
  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {index < parts.length - 1 && <Highlight>{highlight}</Highlight>}
        </Fragment>
      ))}
    </>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-teal-50">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <h2 className="mb-2 text-3xl font-bold text-gray-900">
          Don't Just Take Our Word For It. Hear Directly{" "}
          <span className="text-teal-600">From Our Patients</span>
        </h2>
        <i class="fa-sharp fa-solid   text-teal-900 font-bold text-2xl fa-quote-left"></i>
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
            <i class="fa-sharp fa-solid fa-quote-left"></i>
            {testimonialsEntries.map(
              ({ id, quote, highlight, reviewer, city }) => (
                <CarouselItem key={id} className="flex justify-center">
                  <div className="max-w-md p-6 mx-auto shadow-2xl rounded-xl">
                    <blockquote className="text-xl font-medium text-gray-900">
                      {insertHighlight(quote, highlight)}
                    </blockquote>
                    <figcaption className="mt-4 text-lg font-semibold">
                      {reviewer},{" "}
                      <span className="text-sm text-gray-500">{city}</span>
                    </figcaption>
                  </div>
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
        <i class="fa-sharp fa-solid fa-quote-right text-teal-900 font-bold text-2xl"></i>
      </div>
    </section>
  );
};

export default Testimonials;
