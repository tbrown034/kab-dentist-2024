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
    <section className="overflow-x-clip px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16">
        {/* Mobile & Tablet: Vertical Layout */}
        <div className="lg:hidden">
          {/* Image - Mobile uses vertical, Tablet can use horizontal */}
          <div className="mb-4 sm:mb-6">
            {/* Mobile: Portrait image */}
            <div className="sm:hidden max-w-sm mx-auto">
              <HeroImageMobile />
            </div>
            {/* Tablet: Horizontal image */}
            <div className="hidden sm:block max-w-2xl mx-auto">
              <HeroImageDesktop />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Title - Responsive for each breakpoint */}
            <div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
                Your Naperville
                <span className="block text-teal-600 mt-1">Dental Home</span>
                <span className="block text-2xl sm:text-3xl font-normal text-gray-600 dark:text-gray-300 mt-3">
                  Serving Chicagoland Since 1982
                </span>
              </h1>
            </div>

            {/* Description - Responsive text */}
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-200 sm:text-xl">
              <p className="leading-relaxed">
                <Link
                  className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-600 transition-colors dark:text-teal-500"
                  href="#doctorSection"
                >
                  Dr. Keith A. Brown DDS
                </Link>
                {" "}provides exceptional dental care with the gentle touch
                families have trusted for over four decades.
              </p>
              <p className="text-base sm:text-lg">
                <a 
                  href="https://maps.app.goo.gl/mdUmVC7ukmrKS1ER8"
                  className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {address}
                </a>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 sm:pt-6">
              <HeroCTA />
            </div>

            {/* Highlights */}
            <HeroHighlights />
          </div>
        </div>

        {/* Desktop: Horizontal Layout */}
        <div className="hidden lg:flex lg:gap-12 xl:gap-16 lg:items-center">
          {/* Left: Image - Smaller width ratio at lg breakpoint */}
          <div className="lg:w-5/12 xl:w-1/2">
            <HeroImageDesktop />
          </div>

          {/* Right: Content - Larger width ratio at lg breakpoint */}
          <div className="lg:w-7/12 xl:w-1/2 space-y-8">
            {/* Title - Desktop optimized */}
            <div>
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-100 xl:text-6xl 2xl:text-7xl">
                Your Trusted
                <span className="block text-teal-600 mt-2">Naperville Dentist</span>
                <span className="block text-3xl xl:text-4xl font-normal text-gray-600 dark:text-gray-300 mt-4">
                  Serving Chicagoland Since 1982
                </span>
              </h1>
            </div>

            {/* Description - Cleaner for desktop */}
            <div className="space-y-6 text-xl text-gray-600 dark:text-gray-200 xl:text-2xl">
              <p className="leading-relaxed">
                <Link
                  className="font-semibold text-teal-700 underline underline-offset-2 hover:text-teal-600 transition-colors dark:text-teal-500"
                  href="#doctorSection"
                >
                  Dr. Keith A. Brown DDS
                </Link>
                {" "}combines modern dental technology with the personalized care
                that has made us Naperville's choice for family dentistry.
              </p>
              <div className="flex items-start gap-4 text-lg xl:text-xl">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <a
                    href="https://maps.app.goo.gl/mdUmVC7ukmrKS1ER8"
                    className="font-medium text-gray-700 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {address}
                  </a>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mt-0.5">
                    Same or next-day appointments • Free nitrous oxide • Emergency hours
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-6">
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
