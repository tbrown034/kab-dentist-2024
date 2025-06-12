"use client";
import Image from "next/image";
import doctorPortrait from "../../../src/assets/images/doctor/dr-horizontal-primary.jpeg";

const HeroImageDesktop = () => (
  <div className="relative w-full h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] rounded-lg shadow-lg overflow-hidden">
    <Image
      src={doctorPortrait}
      alt="Dr. Keith A. Brown DDS in office"
      fill
      priority
      placeholder="blur"
      className="object-cover object-center"
      sizes="(min-width: 1280px) 50vw, (min-width: 768px) 100vw, 100vw"
    />
  </div>
);

export default HeroImageDesktop;
