"use client";
import Link from "next/link";
import HeroCTA from "./HeroCTA";
import HeroImageDesktop from "./HeroImageDesktop";
import HeroImageMobile from "./HeroImageMobile";
import HeroHighlights from "./HeroHighlights";
import { shortAddress } from "@/lib/constants/constants";

const HeroSection = () => {
  const title = "Naperville's Home For Modern, Trusted Dentistry";
  const highlightedText = "Modern, Trusted Dentistry";
  const highlightInFront = false;

  return (
    <section className="flex flex-col xl:flex-row gap-6   xl:p-6">
      <div className="w-full xl:w-1/2 flex">
        {/* Mobile (default) */}
        <div className="block sm:hidden w-full">
          <HeroImageMobile />
        </div>
        <div className="hidden sm:flex items-center justify-center w-full">
          <HeroImageDesktop />
        </div>
      </div>
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
          <h2 className="text-lg sm:text-xl xl:text-2xl font-medium">
            <Link
              className="font-semibold text-teal-700 underline hover:text-teal-600 active:text-teal-400 dark:text-teal-500"
              href="#doctorSection"
            >
              Dr. Keith A. Brown DDS, FAGD
            </Link>{" "}
            has provided trusted dental care to Naperville and the surrounding
            area for over 40 years. Located at{" "}
            <a
              href="https://maps.app.goo.gl/mdUmVC7ukmrKS1ER8"
              className="text-teal-700 dark:text-teal-500 underline hover:text-teal-600 active:text-teal-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortAddress}
            </a>
            , we're here when it matters.
          </h2>
        </div>
        <div className="p-2">
          <HeroCTA />
        </div>

        <HeroHighlights />
      </div>
    </section>
  );
};

export default HeroSection;
