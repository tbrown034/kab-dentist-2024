import Image from "next/image";
import doctorPortrait from "../../../src/assets/images/doctor/dr-horizontal-primary.jpeg";

const HeroImageDesktop = () => (
  <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <Image
      src={doctorPortrait}
      alt="Dr. Keith A. Brown DDS in office"
      fill
      priority
      placeholder="blur"
      className="object-cover object-center hover:scale-105 transition-transform duration-700"
      sizes="(min-width: 1024px) 50vw, 100vw"
    />
  </div>
);

export default HeroImageDesktop;
