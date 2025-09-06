import Image from "next/image";
import doctorPortrait from "../../../src/assets/images/doctor/dr-vertical-primary.jpeg";

const HeroImageMobile = () => (
  <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
    <Image
      src={doctorPortrait}
      alt="Dr. Keith A. Brown DDS portrait"
      fill
      priority
      placeholder="blur"
      className="object-cover object-[50%_20%]"
      sizes="100vw"
    />
  </div>
);

export default HeroImageMobile;
