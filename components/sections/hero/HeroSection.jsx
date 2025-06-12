"use client";
import Link from "next/link";
import HeroCTA from "./HeroCTA";
import HeroImageDesktop from "./HeroImageDesktop";
import HeroImageMobile from "./HeroImageMobile";
import HeroHighlights from "./HeroHighlights";

const HeroSection = () => {
  const title = "Naperville's Home For Modern, Trusted Dentistry";
  const highlightedText = "Modern, Trusted Dentistry";
  const highlightInFront = false;

  return (
    <section className="flex flex-col xl:flex-row gap-8 p-4 lg:p-6 xl:p-8">
      {/* IMAGE FIRST — Stacked or Split */}
      <div className="w-full xl:w-1/2 flex">
        {/* Mobile (default) */}
        <div className="block sm:hidden w-full">
          <HeroImageMobile />
        </div>
        {/* sm and up */}
        <div className="hidden sm:flex items-center justify-center w-full">
          <HeroImageDesktop />
        </div>
      </div>

      {/* TEXT + CTA + HIGHLIGHTS */}
      <div className="flex flex-col justify-between gap-2 md:gap-8 w-full xl:w-1/2">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-tight tracking-tight">
            {highlightInFront ? (
              <>
                <span className="mr-1 text-teal-600">{highlightedText}</span>
                {title.replace(highlightedText, "")}
              </>
            ) : (
              <>
                {title.replace(highlightedText, "")}
                <span className="ml-1 text-teal-600">{highlightedText}</span>
              </>
            )}
          </h1>
          <h2 className="text-xl sm:text-2xl xl:text-3xl font-medium">
            <Link
              className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
              href="#doctorSection"
            >
              Dr. Keith A. Brown DDS, FAGD
            </Link>{" "}
            has provided expert care for Naperville and the Chicagoland area for
            more than 40 years. Start your journey towards excellent care today!
          </h2>
        </div>
        <div className="mt-4">
          <HeroCTA />
          <HeroHighlights />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
