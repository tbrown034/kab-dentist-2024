// components/sections/hero/HeroSection.jsx
// Server Component

import Link from "next/link";
import HeroCTA from "./HeroCTA";
import HeroImageDesktop from "./HeroImageDesktop";
import HeroImageMobile from "./HeroImageMobile";
import HeroHighlights from "./HeroHighlights";
import { address } from "@/lib/constants/constants";

const HeroSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Single responsive layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Image section */}
          <div className="w-full md:w-1/2">
            {/* Mobile: Portrait image */}
            <div className="sm:hidden">
              <div className="relative w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
                <HeroImageMobile />
              </div>
            </div>
            {/* Tablet and Desktop: Horizontal image */}
            <div className="hidden sm:block">
              <div className="relative w-full aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/10] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <HeroImageDesktop />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-100">
              Your Naperville
              <span className="block text-teal-600 mt-1">Dental Home</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-600 dark:text-gray-300 mt-3">
                Serving Chicagoland Since 1982
              </span>
            </h1>

            {/* Description */}
            <div className="space-y-4 text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-200 leading-relaxed">
              <p>
                <Link
                  className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-600 transition-colors dark:text-teal-500"
                  href="#doctorSection"
                >
                  Dr. Keith A. Brown DDS
                </Link>
                {" "}provides exceptional dental care with the gentle touch
                families have trusted for over four decades.
              </p>
              <p className="text-base sm:text-lg flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <a
                  href="https://maps.app.goo.gl/mdUmVC7ukmrKS1ER8"
                  className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {address}
                </a>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4">
              <HeroCTA />
            </div>

            {/* Highlights */}
            <HeroHighlights />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
