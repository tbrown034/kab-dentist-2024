// components/sections/hero/SingleHeroImage.jsx
import Image from "next/image";
import drFramesBackground from "@/public/images/doctor/drFramesBackground.jpeg";

const HeroMainImage = () => {
  return (
    <Image
      src={drFramesBackground}
      alt="Dr. Keith A. Brown DDS, FAGD, talks with a satisfied patient after a dental visit"
      width={800}
      height={600}
      priority
      placeholder="blur"
      className="rounded-xl"
    />
  );
};

export default HeroMainImage;
