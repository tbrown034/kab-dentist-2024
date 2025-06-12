"use client";
import Image from "next/image";
import doctorPortrait from "../../../src/assets/images/doctor/dr-vertical-primary.jpeg";

const HeroImageMobile = () => (
  <div className="relative w-full h-64 sm:h-72 rounded-lg shadow-lg overflow-hidden">
    <Image
      src={doctorPortrait}
      alt="Dr. Keith A. Brown DDS portrait"
      priority
      placeholder="blur"
      className="object-cover"
      sizes="100vw"
    />
  </div>
);

export default HeroImageMobile;
