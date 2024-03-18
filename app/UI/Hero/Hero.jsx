import HeroText from "./HeroText";
import HeroImgSlider from "./HeroImgSlider";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-1/3">
        <HeroText />
      </div>
      <div className="flex flex-col w-full md:w-1/2 xl:w-3/5 2xl:w-2/3">
        <HeroImgSlider />
      </div>
    </div>
  );
};

export default Hero;
