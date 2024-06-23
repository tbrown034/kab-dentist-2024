"use client";
import HeroImgSlider from "./HeroImgSlider";
import HeroCTA from "./HeroCTA";
import Link from "next/link";

const HeroSection = () => {
  const title = "Naperville's Home For Trusted, Modern Dentistry";
  const highlightedText = "Trusted, Modern Dentistry";
  const highlightInFront = false;

  return (
    <section className="flex flex-col gap-8 lg:gap-10 xl:gap-12 md:flex-row">
      <div className="flex flex-col justify-center gap-6 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-18 md:w-3/5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight xl:text-5xl 2xl:text-6xl md:text-4xl">
          {highlightInFront ? (
            <>
              <span className="text-teal-600">{highlightedText}</span>{" "}
              {title.replace(highlightedText, "")}
            </>
          ) : (
            <>
              {title.replace(highlightedText, "")}{" "}
              <span className="text-teal-600">{highlightedText}</span>
            </>
          )}
        </h1>
        <h2 className="text-xl font-medium md:text-2xl xl:text-3xl ">
          <Link
            className="font-semibold text-teal-700 underline dark:text-teal-600 hover:text-teal-600 active:text-teal-400"
            href="#doctorSection"
          >
            Dr. Keith A. Brown DDS, FAGD
          </Link>{" "}
          has provided expert care for Naperville and the Chicagoland area for
          more than 30 years. Start your journey towards excellent care today!
        </h2>
        <HeroCTA />
      </div>
      <div className="flex flex-col justify-center md:w-2/5">
        <HeroImgSlider />
      </div>
    </section>
  );
};

export default HeroSection;
