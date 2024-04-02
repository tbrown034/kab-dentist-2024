import HeroText from "./HeroText";
import HeroImgSlider from "./HeroImgSlider";
const HeroSection = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-8 ">
      <div className="md:flex-grow md:basis-7/12">
        <HeroText />
      </div>
    </div>
  );
};

export default HeroSection;
