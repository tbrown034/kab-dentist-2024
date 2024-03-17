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
// Custom Highlight component using `mark` instead of `span`
const Highlight = ({ children }) => {
  return <mark className="p-1 text-white bg-teal-500">{children}</mark>;
};

// Updated insertHighlight function to use the Highlight component
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
    <section className="flex flex-col gap-4">
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
        Don't Just Take Our Word For It. Hear Directly{" "}
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
          {testimonialsEntries.map(
            ({ id, quote, highlight, reviewer, city }) => (
              <CarouselItem key={id} className="flex justify-center">
                <div className="p-4 px-8 text-white bg-teal-800 rounded-lg opacity-95 0 ">
                  <div className="flex justify-center my-2 text-2xl">
                    <i className="text-teal-500 fa-solid fa-quote-left "></i>
                  </div>
                  <blockquote className="text-xl font-medium">
                    {insertHighlight(quote, highlight)}
                  </blockquote>
                  <div className="flex justify-center my-2 text-2xl">
                    <i className="text-teal-500 fa-solid fa-quote-right "></i>
                  </div>

                  <figcaption className="mt-4 text-lg font-semibold">
                    {reviewer}, <span className="text-sm ">{city}</span>
                  </figcaption>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Testimonials;
