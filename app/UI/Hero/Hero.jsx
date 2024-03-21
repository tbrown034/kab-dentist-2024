import HeroText from "./HeroText";
import HeroImgSlider from "./HeroImgSlider";
const Hero = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-8 ">
      <div className="md:flex-grow md:basis-7/12">
        <HeroText />
      </div>
      <div className="md:flex-grow md:basis-5/12">
        <HeroImgSlider />
      </div>
    </div>
  );
};

export default Hero;
