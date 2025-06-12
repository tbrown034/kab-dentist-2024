import { useEffect, useState } from "react";
import Image from "next/image";

const HeroMainImage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileImage = "/images/doctor/dr-avatar.jpeg";
  const desktopImage = "/images/doctor/dr-horizontal-primary.jpeg";

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src={isMobile ? mobileImage : desktopImage}
          alt="Dr. Keith A. Brown DDS, FAGD, dental office imagery"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 35vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-teal-100 rounded-full opacity-20 blur-xl" />
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal-200 rounded-full opacity-30 blur-lg" />
    </div>
  );
};

export default HeroMainImage;
